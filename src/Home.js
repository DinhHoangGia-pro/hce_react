import { useState } from "react";

const Home=()=>
{
     const tenlop="HCE 01 lap trinh ma nguon mo";
     
     const vieccanlam1=['Viec 1', 'Viec 2', 'Viec 3', 'Viec 4'];

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
            {
                //Vong lap
                vieccanlam1.map(phantu=>{
                    return (
                        <p>
                          <span>{phantu}</span> &nbsp;&nbsp;&nbsp;
                          <input type="checkbox"/>
                        </p>

                         
                    );
                })
            
             } 

             <p>________________________</p>  
             {
                array2.map(x=>{
                    return(
                        <p>
                            <p>Ma sinh vien: {x.id}</p>
                            <p>Ten sinh vien: {x.hoten}</p>
                            <p>Lop: {x.lop}</p>
                        </p>
                    )
                }

                )
             }  

             <p>________________________</p>   

             <p><input type="button" value="Them sinh vien" onClick={Themsv.bind(this) } />   </p>      


             {
                array3.map(x=>{
                    return(
                        <p>
                            <p>Ma sinh vien: {x.id}</p>
                            <p>Ten sinh vien: {x.hoten}</p>
                            <p>Lop: {x.lop}</p>
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
