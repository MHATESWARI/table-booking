import React from 'react'

const SideBar = () => {
  return (
   <>
   <div className='container'>
   <nav className="bg-gray-600 text-white w-64 min-h-screen p-4 sm:hidden md:hidden lg:block xl:block">
      <ul className="space-y-2">
        <li class="open-down">
          <div className="flex items-center justify-between p-2 hover:bg-gray-700">
            <div class="flex items-center">
              <i class="fas fa-calendar-alt mr-2"></i>
              Popularity
            </div>
            <i class="fas fa-chevron-down text-xs"></i>
          </div>
          <ul class="close ml-4 hidden">
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                Rating: High to Low
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                Cost: Low to High
              </a>
            </li>        
                <li>
              <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                Cost: High to Low
              </a>
            </li>      
                  <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                Distance
              </a>
            </li>
          </ul>
        </li>
        <li class="open-down">
          <div class="flex items-center justify-between p-2 hover:bg-gray-700">
            <div class="flex items-center">
              <i class="fas fa-money-bill-wave mr-2"></i>
                Cusine Type
            </div>
            <i class="fas fa-chevron-down text-xs"></i>
          </div>
          <ul class="close ml-4 hidden">
            <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                Indian
              </a>
            </li>
            <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                Italian
              </a>
            </li>
            <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                French
              </a>
            </li>
            <li>
                <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                  Chinese
                </a>
              </li>
              <li>
                <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                  Thai
                </a>
              </li>
              
          </ul>
        </li>
        <li class="open-down">
          <div class="flex items-center justify-between p-2 hover:bg-gray-700">
            <div class="flex items-center">
              <i class="fas fa-chart-bar mr-2"></i>
                Ratings
            </div>
            <i class="fas fa-chevron-down text-xs"></i>
          </div>
          <ul class="close ml-4 hidden">
            <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                1 Star
              </a>
            </li>
            <li>
                <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                  2 Star
                </a>
              </li>
              <li>
                <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                  3 Star
                </a>
              </li>
              <li>
                <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                  4 Star
                </a>
              </li>
              <li>
                <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                  5 Star
                </a>
              </li>
          </ul>
        </li>
        <li class="open-down">
          <div class="flex items-center justify-between p-2 hover:bg-gray-700">
            <div class="flex items-center">
              <i class="fas fa-file-alt mr-2"></i>
              Cost Type
            </div>
            <i class="fas fa-chevron-down text-xs"></i>
          </div>
          <ul class="close ml-4 hidden">
            <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                Any to ₹ 500
              </a>
            </li>
            <li>
              <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                ₹ 500 to ₹ 1000
              </a>
            </li>
            <li>
                <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                  ₹ 1000 to ₹ 1500
                </a>
              </li>
              <li>
                <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                  ₹ 1500 to ₹ 2000
                </a>
              </li>
              <li>
                <a href="#" class="block p-2 hover:bg-gray-700 flex items-center">
                  ₹ 2000 Above
                </a>
              </li>
          </ul>
        </li>
      </ul>
    </nav>


   </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
  )
}

export default SideBar
