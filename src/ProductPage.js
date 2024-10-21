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
                                <img src={phantu.image} alt="Sản phẩm 1"/>
                                <div class="product-info">
                                    <h2 class="product-title">{phantu.title}</h2>
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