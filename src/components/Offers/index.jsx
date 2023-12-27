import './style.scss'
import plane from '../../assets/images/plane.png'
import house from '../../assets/images/house.png'

const index = () => {
  return (
    <section id='offers'>
      <div className='container mx-auto'>
        <div className=' offers2 mt-20'>
          <h1 className=' text-[32px] text-[#000] font-bold'>Offers</h1>
          <div className=' offers-card'>
            <div className='cards flex border'>
              <img
                className=' img01 ml-4 rounded-2xl'
                src={plane.src}
                alt='plane img'
              />
              <div className=' mt ml-[24px]'>
                <p className='text-[16px] font-normal text-[#a5a4a4]'>
                  Domestic Flights
                </p>
                <h1 className='text-[24px] font-semibold text-[#000] mt-1'>
                  Huge savings on flight with trxvl.
                </h1>
                <p className='text-[16px] font-normal text-[#a5a4a4] mt-3'>
                  Book domestic flights starting @ just ₹1459
                </p>
                <button className=' btn3 text-[16px] font-normal text-[#fff] items-center justify-center mt-4'>
                  Book Now
                </button>
              </div>
            </div>
            <div className='cards flex border'>
              <img
                className=' img01 ml-4 rounded-2xl'
                src={house.src}
                alt='house img'
              />
              <div className=' mt ml-[24px]'>
                <p className='text-[16px] font-normal text-[#a5a4a4]'>
                  International Hotels
                </p>
                <h1 className='text-[24px] font-semibold text-[#000]'>
                  Enjoy upto 20% <br />
                  off on International Hotels
                </h1>
                <p className='text-[16px] font-normal text-[#a5a4a4]'>
                  Make the most of this deal on your first booking with trxvl.
                </p>
                <button className=' text-[16px] font-normal text-[#fff] items-center justify-center mt-3'>
                  Book Now
                </button>
              </div>
            </div>

            <div className='cards flex border'>
              <img
                className=' img01 ml-4 rounded-2xl'
                src={house.src}
                alt='house img'
              />
              <div className=' mt ml-[24px]'>
                <p className='text-[16px] font-normal text-[#a5a4a4]'>
                  International Hotels
                </p>
                <h1 className='text-[24px] font-semibold text-[#000]'>
                  Enjoy upto 20% <br />
                  off on International Hotels
                </h1>
                <p className='text-[16px] font-normal text-[#a5a4a4]'>
                  Make the most of this deal on your first booking with trxvl.
                </p>
                <button className=' text-[16px] font-normal text-[#fff] items-center justify-center mt-3'>
                  Book Now
                </button>
              </div>
            </div>
            <div className='cards flex border'>
              <img
                className=' img01 ml-4 rounded-2xl'
                src={house.src}
                alt='house img'
              />
              <div className=' mt ml-[24px]'>
                <p className='text-[16px] font-normal text-[#a5a4a4]'>
                  International Hotels
                </p>
                <h1 className='text-[24px] font-semibold text-[#000]'>
                  Enjoy upto 20% <br />
                  off on International Hotels
                </h1>
                <p className='text-[16px] font-normal text-[#a5a4a4]'>
                  Make the most of this deal on your first booking with trxvl.
                </p>
                <button className=' text-[16px] font-normal text-[#fff] items-center justify-center mt-3'>
                  Book Now
                </button>
              </div>
            </div>
            <div className='cards flex border'>
              <img
                className=' img01 ml-4 rounded-2xl'
                src={house.src}
                alt='house img'
              />
              <div className=' mt ml-[24px]'>
                <p className='text-[16px] font-normal text-[#a5a4a4]'>
                  International Hotels
                </p>
                <h1 className='text-[24px] font-semibold text-[#000]'>
                  Enjoy upto 20% <br />
                  off on International Hotels
                </h1>
                <p className='text-[16px] font-normal text-[#a5a4a4]'>
                  Make the most of this deal on your first booking with trxvl.
                </p>
                <button className=' text-[16px] font-normal text-[#fff] items-center justify-center mt-3'>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
