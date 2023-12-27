import './style.scss'
import img1 from '../../assets/icons/1.svg'
import user from '../../assets/icons/people.svg'
import SearchMobile from '@/components/UI/Search'
const index = () => {
  return (
    <>
      <section id='search'>
        <div className=' container mx-auto '>
          <h1 className=' text-white font-[Helvetica] text-[72px] font-bold mt-32'>
            The whole world <br /> awaits.
          </h1>
          <div className='mt-[40px]'>
            <div className='search1 flex items-center'>
              <div className='flex items-center'>
                <div className='flex items-center mt-2'>
                  <div className='flex items-center left-24'>
                    <input
                      className=' input4'
                      type='text'
                      placeholder='      Search destinations, hotels'
                    />
                  </div>
                  <div>
                    <ul className=' srm flex items-center ml-[190px] gap-12'>
                      <li className=' flex gap-1 cursor-pointer '>
                        <img src={img1.src} alt='img' />
                        <p className="text-[16px] font-['Helvetica'] font-normal text-[#fff] opacity-70 hover:text-[#625deb]">
                          Check in
                        </p>
                      </li>
                      <li className='flex gap-1'>
                        <img src={img1.src} alt='img' />
                        <p className="text-[16px] font-['Helvetica'] font-normal text-[#fff] opacity-70  cursor-pointer hover:text-[#625deb]">
                          Check out
                        </p>
                      </li>
                      <li className='flex gap-1'>
                        <img className=' -mt-1' src={user.src} alt='user img' />
                        <p className="text-[16px] font-['Helvetica'] font-normal text-[#fff] opacity-70 cursor-pointer hover:text-[#625deb]">
                          1 room, 2 adults
                        </p>
                      </li>
                      <li className=' src cursor-pointer relative overflow-hidden border-blue-900 text-[#2659C3] shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-blue-500 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-blue-500 after:duration-500 hover:text-white hover:before:h-2/4 hover:after:h-2/4'>
                        <span className=' relative z-10'>Search</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SearchMobile />
    </>
  )
}

export default index
