'use client'
import { useState } from 'react'
import Drawer from 'react-modern-drawer'
import menu from '../../assets/icons/meu.svg'
import 'react-modern-drawer/dist/index.css'
import './style.scss'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <section id='menu'>
      <div className=' p-3 flex items-center justify-between'>
        <div className=' flex items-center justify-between'>
          <select
            className="cursor-pointer w-[72px] h-[30px] text-center rounded-xl text-[12px] font-normal font-['Helvetica'] bg-[#20425f] text-[#fff] border border-none"
            data-te-select-init
            data-te-select-auto-select='true'
          >
            <option value='1'>English</option>
            <option value='2'>Russia</option>
            <option value='3'>O'zbekcha</option>
          </select>
        </div>
        <div>
          <h1 className="text-[24px] font-bold font-['Helvetica'] text-[#fff] mr-6">
            trxvl.
          </h1>
        </div>
        <div>
          <span onClick={toggleDrawer}>
            <img className='cursor-pointer' src={menu.src} alt='menu img' />
          </span>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            className='bla bla bla'
          >
            <p
              className=' flex items-center justify-center w-12 text-[14px] bg-[#20425f] cursor-pointer'
              onClick={toggleDrawer}
            >
              ⫷ Close
            </p>
            <p className='mx-auto cursor-pointer text-[12px] text-center mt-6 h-[22px] flex items-center justify-center rounded-lg bg-[#20425f] text-[white] hover:shadow-lg hover:border hover:bg-white hover:text-black w-[100px]'>
              Home
            </p>
            <p className='mx-auto cursor-pointer text-[12px] text-center m-1 h-[22px] flex items-center justify-center rounded-lg bg-[#20425f] text-[white] hover:shadow-lg hover:border hover:bg-white hover:text-black w-[100px]'>
              Stays
            </p>
            <p className='mx-auto cursor-pointer text-[12px] text-center m-1 h-[22px] flex items-center justify-center rounded-lg bg-[#20425f] text-[white] hover:shadow-lg hover:border hover:bg-white hover:text-black w-[100px]'>
              Flights
            </p>
            <p className='mx-auto cursor-pointer text-[12px] text-center m-1 h-[22px] flex items-center justify-center rounded-lg bg-[#20425f] text-[white] hover:shadow-lg hover:border hover:bg-white hover:text-black w-[100px]'>
              Packages
            </p>
            <p className='mx-auto cursor-pointer text-[12px] text-center m-1 h-[22px] flex items-center justify-center rounded-lg bg-[#20425f] text-[white] hover:shadow-lg hover:border hover:bg-white hover:text-black w-[100px]'>
              Sign Up
            </p>
          </Drawer>
        </div>
      </div>
    </section>
  )
}

export default App
