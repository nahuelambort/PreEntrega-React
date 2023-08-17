import React, { useState } from "react";
import { useCartContext } from "../state/Cart.context";
import { addOrder } from "../lib/orders.requests";
import { Input, LocaleString } from "../components";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BUY_FORM = [
  { label: "Nombre", name: "name", placeholder: "Escribe tu nombre" },
  { label: "Teléfono", name: "phone", placeholder: "Escribe tu teléfono (10 dígitos)", pattern: "[0-9]{10}", title: "Ingresa un número de teléfono válido (10 dígitos)" },
  { label: "Correo", name: "email", placeholder: "Escribe tu email", type: "email", title: "Ingresa un correo electrónico válido" },
  { label: "Repite correo", name: "email2", placeholder: "Repite tu email", title: "Los correos electrónicos no coinciden" },
];

export const Cart = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateEmail(form.email)) {
      newErrors.email = true;
    }

    if (!validatePhone(form.phone)) {
      newErrors.phone = true;
    }

    if (form.email !== form.email2) {
      newErrors.email2 = true;
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const handleChange = ({ target: { value, name } }) => {
    setForm({
      ...form,
      [name]: value,
    });

    if (name === 'email2') {
      setErrors({
        ...errors,
        email2: form.email !== value,
      });
    } else {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  const createOrder = async () => {
    if (!validateForm()) {
      return;
    }

    const items = cart.map(({ id, title, qty, price }) => ({ id, title, qty, price }));

    const { name, phone, email } = form;

    const order = {
      buyer: { name, phone, email },
      items,
      total: getTotalPrice,
    };

    const id = await addOrder(order);
    console.log(id);

    toast.success(`¡Pedido realizado! ID del pedido: ${id}`);

    cleanCart();
    
    setErrors({});
  };

  const removeSingleProduct = (productId) => {
    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
      const existingProduct = cart[existingProductIndex];

      if (existingProduct.qty > 1) {
        removeProduct(productId, 1); 
      } else {
        removeProduct(productId);
      }
    }
  };

  return (
    <div className="cart">
      <div className="container cart__container">
        {cart.length ? (
          <>
            <div className="cart__item cart__clear-button-container" style={{ border: "none" }}>
              <button className="cart__item-button" onClick={cleanCart}>
                Vaciar carrito
              </button>
            </div>
            <div className="cart__products">
              <div
                className="cart__item"
                style={{ border: "none", padding: "0 16px" }}
              >
                <span>Producto</span>
                <span>Cantidad</span>
                <span>Precio</span>
                <span>Subtotal</span>
                <span></span>
              </div>
              {cart.map((item) => (
                <div className="cart__item" key={item.id}>
                  <span>{item.title}</span>
                  <span>{item.qty}</span>
                  <LocaleString num={item.price} />
                  <LocaleString num={item.qty * item.price} />
                  <button
                    className="cart__item-delete"
                    onClick={() => removeSingleProduct(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
            <div className="cart__item" style={{ border: "none" }}>
              <div className="cart__total">
                <span>Total</span> <LocaleString num={getTotalPrice} />
              </div>{" "}
            </div>
            <div className="form">
              {BUY_FORM.map((input) => (
                <Input
                  key={input.name}
                  onChange={handleChange}
                  error={errors[input.name] ? input.title : null}
                  value={form[input.name] || ''}
                  {...input}
                />
              ))}
              <button
                className="cart__item-button form__button"
                onClick={createOrder}
              >
                Realizar pedido
              </button>
            </div>
          </>
        ) : (
          <div className="cart_vacio">
            <h1>El carrito está vacío</h1>
          </div>
        )}
      </div>
    </div>
  );
};