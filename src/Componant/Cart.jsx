import React from 'react'

function Cart({data}) {
    console.log(data);
  return (
    <div className='main'>
    {data.map((item)=>{
      if(!item.urlToImage){
        return null;
      }
      else{
        return(
          <div className='contain'>
          <img src={item.urlToImage} />
          <div className='readmore'>
            <a href=""onClick={()=>window.open(item.url)}>{item.title}</a>
            <p >{item.description}</p>
            <button className='btnreadmore' onClick={()=>window.open(item.url)}>Read More</button>
          </div>
          </div>
      )
      }
        })};
    </div>
    )};
      
  


export default Cart
