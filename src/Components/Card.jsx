import React from 'react'
import image1 from '../assets/h1.jpg'


const Card = () => {
  return (
    <>
      <div className='container justify-center bg-white font-poppins pt-4 flex items-center'>
       <div className='lg:grid grid-cols-[400px_1fr]'>

        <div className='sidebar border'>
          <div></div>
        </div>


       <div className="container w-[70rem] rounded-3xl lg: lg:bg-gray-200 md:bg-gray-200 ">
          <div className="container">
            
            {/* 1st card */}
            <div className='card-container flex justify-center m-27 mt-5 border-transparent rounded-3xl shadow-xl mx-auto md:w-[54rem] h-50 bg-white'>
              <div className='grid grid-cols-[200px_1fr_101px] md:grid-cols-[300px_1fr_100px]'>

                {/* restaurant image */}

                <div className='image h-60 m-5'>
                  <img src={image1} className='w-17 h-25 rounded-2xl ml-6 md:w-40 md:h-40 md:ml-[-10px] md:mt-0 mt-4 shadow-2xl' alt="" />
                </div>

                {/* restaurant details */}

                <div className='details md:text-[20px] h-31 mt-3.5 border-transparent rounded-tl-[40px] rounded-br-[40px] bg-gray-200 ml-[-70px] md:ml-[-90px] w-54 md:w-130 p-2.5 '>
                  <div className=' ml-1 p-1 '>
                    <p className='font-bold text-xl '>The Spice Garden </p>
                    <p className='text-green-600 text-[13px] font-semibold md:text-[16px]'>Open Now . Open till 11pm</p>
                    <p className='text-l  md:[18px]'>Multi cuisians</p>
                    <div className='location '>
                      <p className=' opacity-70 text-[12px] md:text-[16px] flex'>
                        <a href="">WhiteTown, Puducherry</a>
                        <i class="fa-solid fa-location-dot p-1"></i>
                        <p className='text-[12px] opacity-70 md:text-[16px]'>16.5km</p>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Review */}

                <div className='bg-white h-0 flex m-5 ml-2 md:ml-8 space-x-2'>
                  <i class="fa-regular fa-star mt-1 md:mt-2 md:size-4"></i>
                  <span className="text-black font-bold text-s md:text-[18px] md:pt-1">4.3</span>
                </div>

                {/* offer */}

                <div className='bottom'>
                  <div className='border-transparent md:ml-52 font-bold shadow-2xl rounded-4xl h-8 bg-gray-200 text-[13px] mt-[-130px] ml-30 w-55 md:w-130 grid grid-rows-[50px_1fr]'>
                    <span className='flex justify-center p-2 opacity-70 font-serif'>Flat 30% off on Pre-Booking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd card */}

            <div className='card-container flex justify-center m-27 mt-[-90px] border-transparent rounded-3xl shadow-xl mx-auto md:w-[54rem] h-50 bg-white'>
              <div className='grid grid-cols-[200px_1fr_101px] md:grid-cols-[300px_1fr_100px] '>

                {/* restaurant image */}

                <div className='image h-60 m-5'>
                  <img src={image1} className='w-17 h-25 rounded-2xl ml-8 md:w-40 md:h-40 md:ml-[-10px] md:mt-0 mt-2 shadow-2xl' alt="" />
                </div>

                {/* restaurant details */}

                <div className='details md:text-[20px] h-31 mt-3.5 border-transparent rounded-tl-[40px] rounded-br-[40px] bg-gray-200 ml-[-70px] md:ml-[-90px] w-54 md:w-130 p-2.5 '>
                  <div className=' ml-1 p-1 '>
                    <p className='font-bold text-xl '>The Spice Garden </p>
                    <p className='text-green-600 text-[13px] font-semibold md:text-[16px]'>Open Now . Open till 11pm</p>
                    <p className='text-l  md:[18px]'>Multi cuisians</p>
                    <div className='location '>
                      <p className=' opacity-70 text-[12px] md:text-[16px] flex'>
                        <a href="">WhiteTown, Puducherry</a>
                        <i class="fa-solid fa-location-dot p-1"></i>
                        <p className='text-[12px] opacity-70 md:text-[16px]'>16.5km</p>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Review */}

                <div className='bg-white h-0 flex m-5 ml-2 md:ml-8 space-x-2'>
                  <i class="fa-regular fa-star mt-1 md:mt-2 md:size-4"></i>
                  <span className="text-black font-bold text-s md:text-[18px] md:pt-1">4.3</span>
                </div>

                {/* offer */}

                <div className='bottom'>
                  <div className='border-transparent md:ml-52 font-bold shadow-2xl rounded-4xl h-8 bg-gray-200 text-[13px] mt-[-130px] ml-30 w-55 md:w-130 grid grid-rows-[50px_1fr]'>
                    <span className='flex justify-center p-2 opacity-70 font-serif'>Flat 30% off on Pre-Booking</span>
                  </div>
                </div>
              </div>
            </div>

            
            {/* 2nd card */}

            <div className='card-container flex justify-center m-27 mt-[-90px] border-transparent rounded-3xl shadow-xl mx-auto md:w-[54rem] h-50 bg-white'>
              <div className='grid grid-cols-[200px_1fr_101px] md:grid-cols-[300px_1fr_100px] '>

                {/* restaurant image */}

                <div className='image h-60 m-5'>
                  <img src={image1} className='w-17 h-25 rounded-2xl ml-8 md:w-40 md:h-40 md:ml-[-10px] md:mt-0 mt-2 shadow-2xl' alt="" />
                </div>

                {/* restaurant details */}

                <div className='details md:text-[20px] h-31 mt-3.5 border-transparent rounded-tl-[40px] rounded-br-[40px] bg-gray-200 ml-[-70px] md:ml-[-90px] w-54 md:w-130 p-2.5 '>
                  <div className=' ml-1 p-1 '>
                    <p className='font-bold text-xl '>The Spice Garden </p>
                    <p className='text-green-600 text-[13px] font-semibold md:text-[16px]'>Open Now . Open till 11pm</p>
                    <p className='text-l  md:[18px]'>Multi cuisians</p>
                    <div className='location '>
                      <p className=' opacity-70 text-[12px] md:text-[16px] flex'>
                        <a href="">WhiteTown, Puducherry</a>
                        <i class="fa-solid fa-location-dot p-1"></i>
                        <p className='text-[12px] opacity-70 md:text-[16px]'>16.5km</p>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Review */}

                <div className='bg-white h-0 flex m-5 ml-2 md:ml-8 space-x-2'>
                  <i class="fa-regular fa-star mt-1 md:mt-2 md:size-4"></i>
                  <span className="text-black font-bold text-s md:text-[18px] md:pt-1">4.3</span>
                </div>

                {/* offer */}

                <div className='bottom'>
                  <div className='border-transparent md:ml-52 font-bold shadow-2xl rounded-4xl h-8 bg-gray-200 text-[13px] mt-[-130px] ml-30 w-55 md:w-130 grid grid-rows-[50px_1fr]'>
                    <span className='flex justify-center p-2 opacity-70 font-serif'>Flat 30% off on Pre-Booking</span>
                  </div>
                </div>
              </div>
            </div>

            
            {/* 2nd card */}

            <div className='card-container flex justify-center m-27 mt-[-90px] border-transparent rounded-3xl shadow-xl mx-auto md:w-[54rem] h-50 bg-white'>
              <div className='grid grid-cols-[200px_1fr_101px] md:grid-cols-[300px_1fr_100px] '>

                {/* restaurant image */}

                <div className='image h-60 m-5'>
                  <img src={image1} className='w-17 h-25 rounded-2xl ml-8 md:w-40 md:h-40 md:ml-[-10px] md:mt-0 mt-2 shadow-2xl' alt="" />
                </div>

                {/* restaurant details */}

                <div className='details md:text-[20px] h-31 mt-3.5 border-transparent rounded-tl-[40px] rounded-br-[40px] bg-gray-200 ml-[-70px] md:ml-[-90px] w-54 md:w-130 p-2.5 '>
                  <div className=' ml-1 p-1 '>
                    <p className='font-bold text-xl '>The Spice Garden </p>
                    <p className='text-green-600 text-[13px] font-semibold md:text-[16px]'>Open Now . Open till 11pm</p>
                    <p className='text-l  md:[18px]'>Multi cuisians</p>
                    <div className='location '>
                      <p className=' opacity-70 text-[12px] md:text-[16px] flex'>
                        <a href="">WhiteTown, Puducherry</a>
                        <i class="fa-solid fa-location-dot p-1"></i>
                        <p className='text-[12px] opacity-70 md:text-[16px]'>16.5km</p>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Review */}

                <div className='bg-white h-0 flex m-5 ml-2 md:ml-8 space-x-2'>
                  <i class="fa-regular fa-star mt-1 md:mt-2 md:size-4"></i>
                  <span className="text-black font-bold text-s md:text-[18px] md:pt-1">4.3</span>
                </div>

                {/* offer */}

                <div className='bottom'>
                  <div className='border-transparent md:ml-52 font-bold shadow-2xl rounded-4xl h-8 bg-gray-200 text-[13px] mt-[-130px] ml-30 w-55 md:w-130 grid grid-rows-[50px_1fr]'>
                    <span className='flex justify-center p-2 opacity-70 font-serif'>Flat 30% off on Pre-Booking</span>
                  </div>
                </div>
              </div>
            </div>


            
            {/* 2nd card */}

            <div className='card-container flex justify-center m-27 mt-[-90px] border-transparent rounded-3xl shadow-xl mx-auto md:w-[54rem] h-50 bg-white'>
              <div className='grid grid-cols-[200px_1fr_101px] md:grid-cols-[300px_1fr_100px] '>

                {/* restaurant image */}

                <div className='image h-60 m-5'>
                  <img src={image1} className='w-17 h-25 rounded-2xl ml-8 md:w-40 md:h-40 md:ml-[-10px] md:mt-0 mt-2 shadow-2xl' alt="" />
                </div>

                {/* restaurant details */}

                <div className='details md:text-[20px] h-31 mt-3.5 border-transparent rounded-tl-[40px] rounded-br-[40px] bg-gray-200 ml-[-70px] md:ml-[-90px] w-54 md:w-130 p-2.5 '>
                  <div className=' ml-1 p-1 '>
                    <p className='font-bold text-xl '>The Spice Garden </p>
                    <p className='text-green-600 text-[13px] font-semibold md:text-[16px]'>Open Now . Open till 11pm</p>
                    <p className='text-l  md:[18px]'>Multi cuisians</p>
                    <div className='location '>
                      <p className=' opacity-70 text-[12px] md:text-[16px] flex'>
                        <a href="">WhiteTown, Puducherry</a>
                        <i class="fa-solid fa-location-dot p-1"></i>
                        <p className='text-[12px] opacity-70 md:text-[16px]'>16.5km</p>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Review */}

                <div className='bg-white h-0 flex m-5 ml-2 md:ml-8 space-x-2'>
                  <i class="fa-regular fa-star mt-1 md:mt-2 md:size-4"></i>
                  <span className="text-black font-bold text-s md:text-[18px] md:pt-1">4.3</span>
                </div>

                {/* offer */}

                <div className='bottom'>
                  <div className='border-transparent md:ml-52 font-bold shadow-2xl rounded-4xl h-8 bg-gray-200 text-[13px] mt-[-130px] ml-30 w-55 md:w-130 grid grid-rows-[50px_1fr]'>
                    <span className='flex justify-center p-2 opacity-70 font-serif'>Flat 30% off on Pre-Booking</span>
                  </div>
                </div>
              </div>
            </div>

            

           
           
          </div>
        </div>
       </div>


      </div>


    </>
  )
}

export default Card
