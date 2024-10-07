
import Header from "./Header";
import Home from "./Home";
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route index path="/" element={<Home/>} />
         
        </Route>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
