import india from '../../assets/images/india.png'
import talk from '../../assets/images/talk.png'
import beach from '../../assets/images/beach.png'
import './style.scss'
const index = () => {
  return (
    <section id='travelers'>
      <div className='container mx-auto'>
        <div className=' mt-[80px]'>
          <h1 className=" h5 text-[32px] font-bold font-['Helvetica'] text-[#000]">
            Connect with other travelers in our community
          </h1>
          <div className=' card1 items-center'>
            <div className='card3 p-3 border'>
              <img className=' img11' src={india.src} alt='india  img' />
              <h1 className="text-[24px] font-normal text-[#000] font-['Netflix Sans'] mt-[24px]">
                India
              </h1>
              <p className="text-[16px] font-normal text-['Netflix Sans'] text-[#717171] mt-[8px]">
                Travel community
              </p>
              <p className="text-[16px] font-normal text-['Netflix Sans'] text-[#717171] mt-[2px]">
                155,073 travelers
              </p>
            </div>
            <div className='card3 p-3 border'>
              <img className=' img11' src={talk.src} alt='talk  img' />

              <h1 className="text-[24px] font-normal text-[#000] font-['Netflix Sans'] mt-[24px]">
                Travel Talk
              </h1>
              <p className="text-[16px] font-normal text-['Netflix Sans'] text-[#717171] mt-[8px]">
                Travel community
              </p>
              <p className="text-[16px] font-normal text-['Netflix Sans'] text-[#717171] mt-[2px]">
                155,073 travelers
              </p>
            </div>
            <div className='card3 p-3 border'>
              <img className=' img11' src={beach.src} alt='beach img' />

              <h1 className="text-[24px] font-normal text-[#000] font-['Netflix Sans'] mt-[24px]">
                Beach
              </h1>
              <p className="text-[16px] font-normal text-['Netflix Sans'] text-[#717171] mt-[8px]">
                Travel community
              </p>
              <p className="text-[16px] font-normal text-['Netflix Sans'] text-[#717171] mt-[2px]">
                155,073 travelers
              </p>
            </div>

            <div className='card3 p-3 border'>
              <img className=' img11' src={india.src} alt='india  img' />

              <h1 className="text-[24px] font-normal text-[#000] font-['Netflix Sans'] mt-[24px]">
                Beach
              </h1>
              <p className="text-[16px] font-normal text-['Netflix Sans'] text-[#717171] mt-[8px]">
                Travel community
              </p>
              <p className="text-[16px] font-normal text-['Netflix Sans'] text-[#717171] mt-[2px]">
                155,073 travelers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
