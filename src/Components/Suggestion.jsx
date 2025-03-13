import React from 'react'
import cafe from '../assets/coco-cafe.jpg'
import cosy from '../assets/cosy-pub.jpg'
import bismila from '../assets/Bismilla.jpg'
import kfc from '../assets/kfc.jpg'
import dominos from '../assets/Dominos.jpg'
import mcdonalds from '../assets/Mcdonalds.jpg'

const Suggestion = () => {
  return (
    <div className='container flex justify-center'>
        <div className=' h-max-screen w-80 md:h-120 md:w-190 lg:w-290 lg:h-150'>
        <h1 className=' text-2xl font-bold ml-12 '>You May Also Like</h1>
            <div className='md:flex md:w-max lg:w-max '>
           
            <div className=' m-4 grid grid-rows-[100px-1fr] hover:shadow-2xl duration-500 rounded-2xl'>
                <img src={cafe} alt="" className='h-50 w-75 p-4 hover:scale-105 duration-500 transition-transform' />
                <div className='mt-0.5 ml-4'>
                <h1 className='font-bold'>COCO CAFE</h1>
                <h1 className='flex font-light'>Aurovil | puducherry</h1>
                </div>
                

            </div>

            <div className=' m-4 grid grid-rows-[100px-1fr] hover:shadow-2xl duration-500 rounded-2xl'>
                <img src={cosy} alt="" className='h-50 w-75 p-4 hover:scale-105 duration-500 transition-transform' />
                <div className='mt-0.5 ml-4'>
                <h1 className='font-bold '>COSY Restro Pub-Best DJ </h1>
                <h1 className='flex font-light'>MG Road | Puducherry</h1>
                </div>
            </div>

            <div className=' m-4 grid grid-rows-[100px-1fr] hover:shadow-2xl duration-500 rounded-2xl'>
                <img src={bismila} alt="" className='h-50 w-75 p-4 hover:scale-105 duration-500 transition-transform' />
                <div className='mt-0.5 ml-4'>
                <h1 className='font-bold '>BISMILA-Family Restaurant </h1>
                <h1 className='flex font-light'>MG Road | Puducherry</h1>
                </div>
            </div>

            <div className=' m-4 grid grid-rows-[100px-1fr] hover:shadow-2xl duration-500 rounded-2xl'>
                <img src={kfc} alt="" className='h-50 w-75 p-4 hover:scale-105 duration-500 transition-transform' />
                <div className='mt-0.5 ml-4'>
                <h1 className='font-bold '>KFC </h1>
                <h1 className='flex font-light'>MG Road | Puducherry</h1>
                </div>
            </div>

            <div className=' m-4 grid grid-rows-[100px-1fr] hover:shadow-2xl duration-500 rounded-2xl'>
                <img src={dominos} alt="" className='h-50 w-75 p-4 hover:scale-105 duration-500 transition-transform' />
                <div className='mt-0.5 ml-4'>
                <h1 className='font-bold '>DOMINOS </h1>
                <h1 className='flex font-light'>MG Road | Puducherry</h1>
                </div>
            </div>

            <div className=' m-4 grid grid-rows-[100px-1fr] hover:shadow-2xl duration-500 rounded-2xl'>
                <img src={mcdonalds} alt="" className='h-50 w-75 p-4 hover:scale-105 duration-500 transition-transform' />
                <div className='mt-0.5 ml-4'>
                <h1 className='font-bold '>McDonalds </h1>
                <h1 className='flex font-light'>MG Road | Puducherry</h1>
                </div>
            </div>
            

            

            
            

            </div>
        </div>
      
    </div>
  )
}

export default Suggestion
