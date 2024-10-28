import { useState, useEffect } from "react"; // Import useState và useEffect từ thư viện React để quản lý trạng thái và xử lý hiệu ứng.
import axios from "axios"; // 

import { useParams } from 'react-router-dom';


const ProductDetail=()=>
{
    const { id } = useParams(); // lấy id từ URL

    console.log(id);

    const [product, setProduct]=useState({
        "id": 0,
        "title": "",
        "price": 0,
        "description": "",
        "category": "",
        "image": ""
        });

    useEffect(() => {

       

            const LayDulieutuBackend = async () => { // Khởi tạo hàm bất đồng bộ để lấy dữ liệu từ backend.
                try {
                    const res = await axios.get('https://fakestoreapi.com/products/'+id);
                    setProduct(res.data); // Cập nhật state listproduct với dữ liệu nhận được từ API.
                } catch (err) {
                    console.log(err.message); // Nếu xảy ra lỗi, log thông báo lỗi ra console.
                }
            };
            LayDulieutuBackend(); // Gọi hàm để lấy dữ liệu từ backend khi component được render lần đầu.
        }, []);


    return (        

        <div class="product-detail">
        <img src={product.image} alt={product.title}/>
        <h2 class="product-title">{product.title}</h2>
        <p class="product-price">Giá: {product.price}</p>
        <p class="product-description">
            {product.title}
        </p>
        <a href="/" class="back-button">Quay lại Danh sách sản phẩm</a>
    </div>

    );


}

export default ProductDetail;