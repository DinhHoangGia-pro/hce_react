import { Outlet } from 'react-router-dom';
import './assets/css/layout.css';
import logo from './assets/images/logo.png'
import MenuTop from './layouts/MenuTop'
import MenuBox from './layouts/MenuBox'
import Footer from './layouts/Footer';

const Layout=()=>
    {
        return (
            <body>
<header id="header" style={{minHeight:169}}>
<div class="header_top">

    <div class="container_main">
       <MenuTop/>
    </div>

</div>

<div id="main_menu">

</div>

<div class="header">
        <div class="container_main">
        <div class="logo">
                <a href="">
                    <img src={logo} alt="Logo"/>
                </a>
            </div>

            <div id="main_menu">
                <MenuBox/>
            </div>

        </div>

</div>

</header>

<div class="news-home">
    <div class="container_main" style={{minHeight:500}} >
    <Outlet/>
    </div>
</div>
    
    <Footer/>

    </body>

        );
    };

export default Layout;
