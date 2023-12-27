import './style.scss'
import Link from 'next/link'
import hotels from '../../assets/icons/image 17.svg'
import tours from '../../assets/icons/image-5.svg'
import flights from '../../assets/icons/air.svg.svg'

const index = () => {
  return (
    <section id='top'>
      <div className=' container mx-auto mt-[30px] items-center'>
        <h1 className=' text-[32px] font-bold text-[#fff]'>Top categories</h1>
        <div className='flex gap-8 mt-[32px]'>
          <div className=' top items-center '>
            <div className='items-center'>
              <div className='gap flex items-center justify-center mt-1 gap-10'>
                <div>
                  <img
                    className=' ml-2 mb-1'
                    src={hotels.src}
                    alt='hotels img'
                  />
                  <p className="text text-[#888888] opacity-100 text-[18px] text-['Helvetica'] font-normal">
                    <Link href='/hotels'>Hotels</Link>
                  </p>
                </div>
                <div>
                  <img className=' ml-2 mb-1' src={tours.src} alt='tours img' />
                  <p className="text text-[#888888] opacity-100 text-[18px] text-['Helvetica'] font-normal">
                    <Link href='/tours'>Tours</Link>
                  </p>
                </div>
                <div>
                  <img
                    className='img ml-2 mb-1'
                    src={flights.src}
                    alt='flights img'
                  />
                  <p className="text text-[#888888] text-[18px] text-['Helvetica'] font-normal">
                    <Link href='/flights'>Flights</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
