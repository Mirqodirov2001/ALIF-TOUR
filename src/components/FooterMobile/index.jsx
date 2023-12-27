import React from 'react'
import './style.scss'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instgram.svg'
import twitter from '../../assets/icons/twiter.svg'
import youtobe from '../../assets/icons/youtobe.svg'

const index = () => {
  return (
    <section id='FooterMobile'>
      <div className='flex gap-[80px]'>
        <h1 className="text-[42px] font-bold font-['Helvetica'] text-[#fff]">
          Trxvl.
        </h1>
        <div>
          <h3 className="text-[24px] font-bold font-['Helvetica'] text-[#fff]">
            Follow us on
          </h3>
          <div className='flex gap-x-2 mt-[7px]'>
            <img src={facebook.src} alt='facebook img' />
            <img src={instagram.src} alt='instagram img' />
            <img src={twitter.src} alt='twitter img' />
            <img src={youtobe.src} alt='you tobe img' />
          </div>
        </div>
      </div>
      <div className=' w-[250px]'>
        <select className="mt-[22px] w-[305px] text-[20px] font-medium font-['Netflix Sans'] text-[#fff]  focus:border-blue-600 bg-transparent border-none ">
          <option>About us</option>
          <option className=' text-[13px] text-black' value='Freemium'>Freemium</option>
          <option className=' text-[13px] text-black' value='Free'>Free</option>
          <option className=' text-[13px] text-black' value='Paid'>Paid</option>
        </select>
        <select className=" mt-[12px] w-[305px] text-[20px] font-medium font-['Netflix Sans'] text-[#fff]  focus:border-blue-600 bg-transparent border-none ">
          <option>Contact</option>
          <option className="text-[13px] text-black font-['Netflix Sans']" value='Freemium'>Freemium</option>
          <option className="text-[13px] text-black font-['Netflix Sans']" value='Free'>Free</option>
          <option className="text-[13px] text-black font-['Netflix Sans']" value='Paid'>Paid</option>
        </select>
        <select className=" mt-[12px] w-[305px] text-[20px] font-medium font-['Netflix Sans'] text-[#fff]  focus:border-blue-600 bg-transparent border-none ">
          <option>Prefences</option>
          <option className="text-[13px] text-black font-['Netflix Sans']" value='Freemium'>Freemium</option>
          <option className="text-[13px] text-black font-['Netflix Sans']" value='Free'>Free</option>
          <option className="text-[13px] text-black font-['Netflix Sans']" value='Paid'>Paid</option>
        </select>
        <select className=" mt-[12px] w-[305px] text-[20px] font-medium font-['Netflix Sans'] text-[#fff]  focus:border-blue-600 bg-transparent border-none ">
          <option> Top Destinations</option>
          <option className="text-[13px] text-black font-['Netflix Sans']" value='Freemium'>Freemium</option>
          <option className="text-[13px] text-black font-['Netflix Sans']" value='Free'>Free</option>
          <option className="text-[13px] text-black font-['Netflix Sans']" value='Paid'>Paid</option>
        </select>
      </div>
    </section>
  )
}

export default index
