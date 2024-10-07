import logo1 from '../assets/images/logo.png'

const Footer=()=>
    {
     
        return(

          <footer id="footer">
          <div class="footer">
            <div class="container_main">
              <div class="logo_footer">
                <a href="">
                  <img src={logo1} alt="Logo"/>        </a>      </div>
              <div class="content_footer">
                <h2>TRƯỜNG CAO ĐẲNG KINH TẾ THÀNH PHỐ HỒ CHÍ MINH</h2>
                <p>33 Vĩnh Viễn, Phường 02, Quận 10, Thành phố Hồ Chí Minh</p>
        
        <p>Hotline: 0961 12 10 18 - 0962 12 10 18 - 0862 12 10 18</p>
        
        <p>Điện thoại: (028)7301.3456</p>
        
        <p>Email: tuyensinh@hce.edu.vn</p>
              </div> 
              <div class="banner_footer">
                     </div>
            </div>
          </div>
          <div class="copyright">
            <div class="container_main">
              <p>© 2024 Demo bởi thầy Gia.<a> | Sitemap</a></p>
            </div>
          </div>
        </footer>

        );

    }
export default Footer;