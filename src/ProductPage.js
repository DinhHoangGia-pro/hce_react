import axios from "axios";
import { useState, useEffect } from "react";

const ProductPage=()=>
    {
        const [listproduct, SetListProduct]=useState([]);/*Mới đầu cái mảng trong useState là rỗng*/

       

        useEffect(()=>
            {
            
                const LayDulieutuBackend= async ()=>
                    {
                        try
                        {
                            const res= await axios.get("https://fakestoreapi.com/products/");
                            SetListProduct(res.data);
            
                        }catch (err)
                        {
                            console.log(err.message)
                        }
            
                    }
            
                    LayDulieutuBackend();            

            }
        ,[]);

        return (
            <div class="news_left">

                 <div class="product-list">
                   
                    
                
                {
                    listproduct.map(phantu=>{

                        return (



                            <div class="product">
                                 <a href={"/product/"+phantu.id}>
                                <img src={phantu.image} alt={phantu.title} /> {/* Hiển thị hình ảnh sản phẩm */}
                            </a>
                                <div class="product-info">
                                    

                                    <a href={"/product/"+phantu.id} class="product-title">
                                    <h2 class="product-title">{phantu.title}</h2> {/* Hiển thị tiêu đề sản phẩm */}
                                      </a>

                                    <p class="product-price">Giá: {phantu.price}$</p>
                                    <p class="product-description">{phantu.description}</p>
                                </div>
                            </div>

                            
                        );
                    }

                    )
                }
                
               </div> 
            </div>
        );
    }

export default ProductPage;