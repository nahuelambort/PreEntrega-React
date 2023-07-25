const SNEAKERS = [
  {
    id: 1,
    title: "Jordan Airforce 1",
    category: "Nike",
    price: 80000,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/wohf5k8sjdmgogckoczk/air-jordan-1-mid-zapatillas-83Lm6R.png",
    stock: 5,
  },
  {
    id: 2,
    title: "Air Max",
    category: "Nike",
    price: 75000,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/66cdf9bc-7e9f-4f54-9f52-e1621a9a2f31/air-max-90-zapatillas-H6XRJb.png",
    stock: 5,
  },
  {
    id: 3,
    title: "Superstar",
    category: "Adidas",
    price: 78000,
    stock: 5,
    img: "https://essential.vtexassets.com/arquivos/ids/928621/261-3893_1.jpg?v=638235591204570000",
  },
  {
    id: 4,
    title: "Forum",
    category: "Adidas",
    price: 65000,
    img: "https://static.wixstatic.com/media/2982cc_79d26f93312a4854bee41fd5f13561f0~mv2.webp",
    stock: 5,
  },
  {
    id: 5,
    title: "Slipstream",
    category: "Puma",
    price: 45000,
    img: "https://woker.vtexassets.com/arquivos/ids/333591/1088634-003-2.jpg?v=638140601750630000",
    stock: 5,
  },
  {
    id: 6,
    title: "Classic",
    category: "Puma",
    price: 38000,
    img: "https://cdn.sanity.io/images/qa41whrn/prod/e6d6685cef3ba28d47bad8778b577678fd36094d-1536x1536.jpg",
    stock: 5,
  },
];


export const getSneakers = (id) =>{
  const _sneakers = id ? SNEAKERS.filter((sneaker) => sneaker.category.toLocaleLowerCase() === id) : SNEAKERS;

    return new Promise((res)=>{
        setTimeout(()=>{
            res(_sneakers)
        },1000)
    })
}

export const getSneaker = (id) =>{
  
  const sneaker = SNEAKERS.filter((sneaker) => sneaker.id === id)[0];

  return new Promise((res)=>{
      setTimeout(()=>{
          res(sneaker)
      },1000)
  })
}