
import Header from "./Header";
import Home from "./Home";
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./ProductPage";

const  App=()=>
  {
  return (
  //  <html>
  //   <Header/>
  //   <Home/>
  //   <footer>Phan Footer</footer>
  //  </html>

<BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index path="/Home1" element={<Home/>} />
          <Route index path="/" element={<ProductPage/>} />
         
        </Route>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
