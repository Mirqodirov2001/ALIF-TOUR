import React from 'react'
import phone from '../../assets/images/Rectangle.png'
import google from '../../assets/images/google.png'
import store from '../../assets/images/store.png'
import TravelAppMobil from "@/components/TravelAppMobil"

import './style.scss'
const index = () => {
  return (
    <section className=' mt-32' id='app'>
      <div className='container mx-auto p-3'>
        <div className=' img flex'>
          <img className=' m1 pt-[54px]' src={phone.src} alt='phone img' />

          <div className='info ml-[80px]'>
            <div className=' mt-[60px] '>
              <h1 className="text-[48px] font-bold font-['Helvetica'] text-[#fff]">
                Your all-in-one travel app.
              </h1>
              <p className='text-[24px] font-normal text-[#fff] mt-[10px]'>
                Book flights, hotels, trains & rental cars anywhere in the world
                in just seconds. Get real-time flight updates, travel info,exclusivedeals, and 
                30% more Trip Coins only on the app!
              </p>
            </div>
            <div className='gmail flex mt-[32px] justify-between'>
              <div className='email'>
                <span className=' flex items-center gap-x-[32px]'>
                  <h1 className=' mobil'>Mobile</h1>
                  <h1 className=' text-[20px] font-normal text-[#fff]'>
                    Email
                  </h1>
                </span>
                <p className='text-[14px] text-[#b7b6b6] mt-[16px]'>
                  Enter your phone number to receive a text with a link to
                  download the app.
                </p>
                <div className='search2 flex items-center mt-[16px]'>
                  <div className='flex items-center'>
                    <div className='flex items-center mt-2 gap-x-[60px]'>
                      <div className='flex items-center'>
                        <input
                          className=' input1'
                          type='number'
                          placeholder='+91 Mobile number'
                        />
                      </div>
                      <div>
                        <ul className='flex items-center'>
                          <li className=' btn1  cursor-pointer relative overflow-hidden border-blue-900 text-[#2659C3] shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-blue-500 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-blue-500 after:duration-500 hover:text-white hover:before:h-2/4 hover:after:h-2/4'>
                            <span className=' relative z-10'>Search</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' span3'>
                <span className=' w-[1px] h-[51px] bg-[#b5b3b3] flex ml-2 mb-[10px]'></span>
                <span className=' text-[#ffffff]'>or</span>
                <span className=' w-[1px] h-[51px] bg-[#b5b3b3] flex ml-2 mt-[10px]'></span>
              </div>
              <span className='btn'>
                <img className=' mb-[27px]' src={store.src} alt='google img' />
                <img src={google.src} alt='store img' />
              </span>
            </div>
          </div>
        </div>
        <TravelAppMobil/>
      </div>
    </section>
  )
}

export default index
