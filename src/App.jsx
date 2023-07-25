import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { NavBar } from "./components";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Category } from './pages/Category';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<NavBar />}>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<Detail />} />
      <Route path="/category/:id" element={<Category />} />
    </Route>
));

function App() {

  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
