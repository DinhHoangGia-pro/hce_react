import { useState } from "react";

const Home=()=>
{
     var tenlop="HCE 01 lap trinh ma nguon mo";
     const vieccanlam1=['Viec 1', 'Viec 2', 'Viec 3', 'Viec 4'];
     const [vieccanlam2, setVieccanlam]=useState(['Viec 1', 'Viec 2', 'Viec 3', 'Viec 4']);

    return (
        <div>
            <h1>{tenlop}</h1>
            <p><h1>VIEC CAN LAM</h1></p>
            {
                //Vong lap
                vieccanlam1.map(x=>{
                    return (
                        <p>
                          <span>{x}</span> &nbsp;&nbsp;&nbsp;
                          <input type="checkbox"/>
                        </p>

                         
                    );
                })
            
             }
                <p>-----------------</p>

            {

                vieccanlam2.map(phantu=>{
                    return (
                        <p>{phantu}</p>
                    );
                })
            }


            
        </div>
    );
}


  




export default Home;