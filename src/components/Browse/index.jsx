import './style.scss'
import React from 'react'

const index = () => {
  return (
    <section className='mt-20' id='browse'>
      <div className='container mx-auto'>
        <div className=''>
          <h1 className=' h3 text-[32px] text-[#000] font-bold '>
            Browse by property type
          </h1>
          <div className=' carousel1'>
            <div className='card1 sm1 border-black'>
              <h1 className=' sm'>Hotels</h1>
            </div>
            <div className='card1 sm2 border-black'>
              <h1 className=' sm'>Apartments</h1>
            </div>
            <div className='card1 sm3 border-black'>
              <h1 className=' sm'>Resorts</h1>
            </div>
            <div className='card1 sm4 border-black'>
              <h1 className=' sm'>Villas</h1>
            </div>
            <div className='card1 sm5 border-black'>
              <h1 className=' sm'>Hotels</h1>
            </div>
          </div>
        </div>
        <div className=' plan w-[1127px] h-[395px] mt-[72px] rounded-2xl'>
          <div className=' ml-[81px] pt-[70px]'>
            <h1 className=' text-[56px] font-bold text-[#fff]'>
              Plan your trip with travell <br /> expert
            </h1>
            <p className=" text-[30px] font-normal text-[#fff] font-['Netflix Sans']">
              Our professional advisors can craft your perfect itinerary
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index;
