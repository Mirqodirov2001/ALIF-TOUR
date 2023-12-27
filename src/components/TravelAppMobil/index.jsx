import React from 'react'
import google from '../../assets/images/image 44.png'
import store from '../../assets/images/image 45.png'
import './style.scss'
const index = () => {
  return (
    <section id='travel-2'>
      <h1 className=" text-[25px] font-bold text-['Helvetica'] text-[#fff] mt-4">Your all-in-one travel app.</h1>
      <p className="text-[10px] font-normal text-['Helvetica'] text-[#fff] mt-2">
        Book flights, hotels, trains & rental cars anywhere in the world in just <br />
        seconds. Get real-time flight updates, travel info, exclusive deals, and <br />
        30% more Trip Coins only on the app!
      </p>
      <div className=' flex items-center gap-[30px] mt-3'>
        <h2 className='mobile flex justify-center items-center'>Mobile</h2>
        <h3 className=" text-[16px] font-normal text-['Helvetica'] text-[#fff]">
          Email
        </h3>
      </div>
      <p className="text-[10px] font-normal text-['Helvetica'] text-[#fff] mt-3">
        Enter your phone number to receive a text with a link to download the{' '}
        <br />
        app.
      </p>
      <div>
        <div id='search-bar' className=' search-bar2 rounded-md pt-[6px] mt-2'>
          <form className='flex items-center justify-between'>
            <input
              type='number'
              placeholder='+998  Mobile number'
              className=' w-[200px] h-[35px] bg-transparent border-none rounded-sm px-2 py-1 focus:outline-none placeholder:text-[14px] placeholder:text-[#fff]'
            />
            <button
              type='submit'
              className='bg-[#fff] w-[153px] h-[35px] text-[14px] rounded-md text-blue-500 font-bold items-center justify-center hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 mr-2'
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <dir className='flex items-center ml-[93px] mt-[24px]'>
        <span className='span1 bg-[#b5b3b3] mr-2'></span>
        <span className=' text-[14px] text-white'>or</span>
        <span className='span1 bg-[#b5b3b3] ml-2'></span>
      </dir>
      <div className='flex mt-[12px] gap-4'>
        <img className='w-[150px]' src={google.src} alt='google img' />
        <img className='w-[150px]' src={store.src} alt='store img' />
      </div>
    </section>
  )
}

export default index
