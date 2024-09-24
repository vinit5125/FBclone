import React ,{useState , useEffect} from "react";

import './C.css';
const Productlist =(prodlist)=>{
   
    useEffect(()=>{
        console.log(Math.random()*10);
        
    })
    const [age,setAge]=useState(100090);

    const renderlist =({prodlist})=>{   
        function increment(){
            setAge(value => value +1);
        } 
        function Decremwnt(){
            setAge(value => value -1);
        }              
                                                    
        if(prodlist){                               
            return prodlist.map((data)=> {                
                 return (
                  <div  className="a1" >
                   <div className="p1" ><div key={data.id}  >
                  <img className="dp1"   src={data.Picon} alt={data.name}/><h>{data.name} </h>
                
                  <p className="p2"  >{data.Desc}</p>
                  <img className="post1" src={data.img} alt={data.name}/>
                 
                  <span><h6>liked by Vinit and  {age} others</h6></span>
                  <button onClick={()=>{increment();
                   }} >  <img src="https://cdn-icons-png.flaticon.com/128/889/889140.png" alt="name" /> Like</button>  
                   <button onClick={()=>{Decremwnt();}} ><img src="https://cdn-icons-png.flaticon.com/128/1358/1358023.png" alt="name" />Comment</button>
                   <button><img src="https://cdn-icons-png.flaticon.com/128/1358/1358023.png" alt="name" />Share</button>
              </div>
             </div>
                  </div>
                )
            })
        }}
        return(
            <div className="container" >
                <div className="row">
                    {renderlist(prodlist)}{/* calls the above custom functions to render the data in the view*/}
                </div>
            </div>
        )
    }

export default Productlist;