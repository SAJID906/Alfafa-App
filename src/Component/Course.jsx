import React from 'react'
import list from '../../public/list.json'
import Card from './Card'
import Header from './Header'
import Footer from './Footer'
function Course() {
console.log("course",list)
  return (
    <>
    
        <Header/>
        <div className=' max-w-screen-2xl container mx-auto md:px-20 py-3 flex flex-wrap justify-between'>
            {
                  list.map((data)=>{
                    return(
                        <>
                         <div className="card"  key={data.id}>
                    <Card item={data}/>
                  </div>
                        </>
                    )
                }
                    
                )
            }
        </div>
   <Footer/>
    </>
  )
}

export default Course