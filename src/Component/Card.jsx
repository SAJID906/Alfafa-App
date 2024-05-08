import React from 'react'

function Card({item}) {
  return (
    <>
    <div className="card  md:w-96 w-full bg-base-100 shadow-xl mt-4 my-4 p-3">
  <figure className=' hover:scale-90  '><img  src={item.image} alt="Shoes" /></figure>
  <div className="card-body ">
    {/* <h2 className="card-title">
      {item.title}
      <h5 className="text-center bg-pink-500 rounded px-3">{item.name}</h5>
    </h2> */}
    <h3 className='w-full text-left font-bold'>
      {item.name}
    </h3>
    <p className=''>{item.title}</p>
    <p>RS:{item.price}</p>
    <div className="card-actions ">
      {item.category}
    </div>
  </div>
</div>
    </>
  )
}

export default Card