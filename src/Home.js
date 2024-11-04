import { useState } from "react";

const Home=()=>
{
     const tenlop="HCE 01 lap trinh ma nguon mo";
     
     
     const Themsv=()=>
        {
            console.log("Test them sinh vien");
            const sinhvienmoi={id:5,hoten:"Cherry Nguyen", lop:"221406" };
            array2=[...array2, sinhvienmoi];
    
        }


        const Themsv2=()=>
            {
                console.log("Test them sinh vien");
                const sinhvienmoi={id:5,hoten:"Cherry Nguyen", lop:"221406" };
                const newarray3=[...array3, sinhvienmoi];
                //array3=newarray3;
                setArray3(newarray3);

        
            }

        const SuaSV=id=>
        {
            array2=array2.map(item=>{
                if (item.id===id)
                {
                    item.hoten="Sinh vien Update";
                }
                return item;

            }            

            )
        }

        const SuaSV2=id=>
            {
               const newarray3=array3.map(item=>{
                    if (item.id===id)
                    {
                        item.hoten="Sinh vien Update";
                    }
                    return item;
    
                }            
    
                );

                setArray3(newarray3);
            }


     var array2=[{id:1,hoten:"Nguyễn Văn A", lop:"221406" },
         {id:2,hoten:"Nguyễn Văn Bình", lop:"221406" },
         {id:3,hoten:"Nguyễn Văn Cường", lop:"221406" },
         {id:4,hoten:"Trần Thị D", lop:"221406" }];
        //Themsv();

    const [array3,setArray3]=useState([
        {id:1,hoten:"Nguyễn Văn A", lop:"221406" },
        {id:2,hoten:"Nguyễn Văn Bình", lop:"221406" },
        {id:3,hoten:"Nguyễn Văn Cường", lop:"221406" },
        {id:4,hoten:"Trần Thị D", lop:"221406" }

    ]

    );

    
       
    return (
        <div>
            
            <p><h1>{tenlop}</h1></p>
            

             <p>________________________</p>  
             {
                array2.map(x=>{
                    return(
                        <p>
                            <p>Ma sinh vien: {x.id}, Ten sinh vien: {x.hoten}, Lop: {x.lop} &nbsp; 
                                <input type="button" value="Sua sinh vien" onClick={SuaSV.bind(this,x.id) } />
                                
                                </p>
                            
                        </p>
                    )
                }

                )
             }  

             <p>________________________</p>   

             <p><input type="button" value="Them sinh vien" onClick={Themsv.bind(this) } /> 
             
               </p>      


             {
                array3.map(x=>{
                    return(
                        <p>
                            <p>Ma sinh vien: {x.id}, Ten sinh vien: {x.hoten}, Lop: {x.lop} &nbsp;&nbsp;
                            <input type="button" value="Sua sinh vien" onClick={SuaSV2.bind(this, x.id) } />
                            </p>
                            
                        </p>
                    )
                }

                )
             }  

             <p>________________________</p> 
             <p><input type="button" style={{backgroundColor:"blue"}  } value="Them sinh vien" onClick={Themsv2.bind(this) } />   </p>



            
        </div>
    );
}






export default Home;
