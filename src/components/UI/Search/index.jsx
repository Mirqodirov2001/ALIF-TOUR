import './style.scss'
import React from 'react'
import img1 from '../../../assets/icons/1.svg'
import user from "../../../assets/icons/people.svg"

const index = () => {
  return (
    <section id='src'>
      <div className='container mx-auto'>
        <h1 className=' h3 text-white font-[Helvetica] text-[72px] font-bold mt-32'>
          The whole world <br /> awaits.
        </h1>
        <div className=' srb'>
          <div>
            <div className='m-4' />
            <input
              className='input h-[44px] w-full rounded-full focus:outline-none '
              type='text'
              placeholder='Search destinations, hotels'
            />
          </div>
          <div className=' check mt-[16px] flex justify-between'>
            <div className=' flex'>
              <img className=' ml-2' src={img1.src} alt='img' />
              <p className=' ml-2'>Check in</p>
            </div>
            <p>∣</p>
            <div className=' flex'>
              <img src={img1.src} alt='img' />
              <p className=' ml-2 mr-2'>Check out</p>
            </div>
          </div>
          <div className=' check mt-[16px] flex justify-center'>
            <img src={user.src} alt="user img" />
            <p className=''>1 room, 2 adults</p>
          </div>
          <div className=' sr check mt-[16px]'>
            <p>Search</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
