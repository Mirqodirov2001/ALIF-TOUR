import Link from 'next/link'
import Drawer from '@/components/Drawer'

import './style.scss'
const index = () => {
  return (
    <section
      className='h-[85px] mb-8 fixed w-full top-0 left-0 backdrop-filter backdrop-blur-md'
      id='navbar'
    >
      <div className='nav p-3 mx-auto flex max-w-screen-xl justify-between text-center'>
        <div>
          <h1 className="text-white font-['Helvetica'] text-[32px] font-bold cursor-pointer">
            trxvl.
          </h1>
        </div>
        <ul className=' nav2 flex items-center gap-8'>
          <li className=" link text-[#ebe9e9] text-[17px] font-normal text-['Helvetica']">
            <Link href='/'>
              <p>Home</p>
            </Link>
          </li>
          <li className=" link text-[#ebe9e9] text-[17px] font-normal text-['Helvetica']">
            <p>Stays</p>
          </li>
          <li className=" link text-[#ebe9e9] text-[17px] font-normal text-['Helvetica']">
            <p>Flights</p>
          </li>
          <li className=" link text-[#ebe9e9] text-[17px] font-normal text-['Helvetica']">
            <p>Packages</p>
          </li>
          <li className=" link text-[#ebe9e9] text-[17px] font-normal text-['Helvetica']">
            <p>Sign UP</p>
          </li>
        </ul>
      </div>
      <Drawer />
    </section>
  )
}

export default index
