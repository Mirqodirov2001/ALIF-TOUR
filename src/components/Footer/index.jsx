import './style.scss'
import facebook from '../../assets/icons/facebook (1).svg'
import instagram from '../../assets/icons/Instagram.svg'
import twitter from '../../assets/icons/Twitter.svg'
import you from '../../assets/icons/You Tobu.svg'
import FooterMobile from "@/components/FooterMobile"

const index = () => {
  return (
    <footer id='footer'>
      <div className='container mx-auto p-3'>
        <FooterMobile/>
        <div className=' footer1'>
          <h1 className="text-[32px] font-bold font-['Helvetica'] text-[#fff] pt-[42px]">
            Trxvl.
          </h1>
          <div className=' flex1 flex ml-[200px] justify-between -mt-8'>
            <div className='swap hover:cursor-pointer'>
              <p className=" text-[13px] font-normal font-['Netflix Sans'] text-[#808080]">
                Seslendirme ve Alt Jazz
              </p>
              <p className=" text-[13px] font-normal font-['Netflix Sans'] text-[#808080] mt-[15px]">
                Media Market
              </p>
              <p className=" text-[13px] font-normal font-['Netflix Sans'] text-[#808080] mt-[15px]">
                Gillie
              </p>
              <p className=" text-[13px] font-normal font-['Netflix Sans'] text-[#808080] mt-[15px]">
                Size Last
              </p>
              <div className=' flex justify-between'>
                <div className=' w-[104px] h-[37px] border border-[#808080] mt-5 flex items-center justify-center'>
                  <h4 className='text-[13px] font-normal text-[#808080] text-center'>
                    Helmet KOD
                  </h4>
                </div>
              </div>

              <p className="text-[11px] font-normal  font-['Netflix Sans'] text-[#808080] mt-[15px]">
                © 1997-2021 Netflix, Inc.
              </p>
            </div>
            <div className='swap hover:cursor-pointer'>
              <p className=" text-[13px] font-normal font-['Netflix Sans'] text-[#808080]">
                Self Betimes
              </p>
              <p className=" text-[13px] font-normal font-['Netflix Sans'] text-[#808080] mt-[15px]">
                Yatırımcı İlişkileri
              </p>
              <p className=" text-[13px] font-normal font-['Netflix Sans'] text-[#808080] mt-[15px]">
                Basal Himmler
              </p>
            </div>
            <div className='swap hover:cursor-pointer'>
              <p className=" text-[13px] font-normal font-['Netflix Sans'] text-[#808080]">
                Yard Market
              </p>
              <p className=" text-[13px] font-normal font-['Netflix Sans'] text-[#808080] mt-[15px]">
                Is İmkanları
              </p>
              <p className=" text-[13px] font-normal font-['Netflix Sans'] text-[#808080] mt-[15px]">
                Car Tercihleri
              </p>
            </div>
            <div className='swap hover:cursor-pointer'>
              <p className=" text-[13px] font-normal font-['Netflix Sans'] text-[#808080]">
                Hedge Karla
              </p>
              <p className=" text-[13px] font-normal font-['Netflix Sans'] text-[#808080] mt-[15px]">
                Mullein Koşulları
              </p>
              <p className=" text-[13px] font-normal font-['Netflix Sans'] text-[#808080] mt-[15px]">
                Autumnal Bulgier
              </p>
              <div className=' flex gap-x-[20px] -ml-10 pt-[62px]'>
                <img src={facebook.src} alt='facebook img' />
                <img src={instagram.src} alt='instagram img' />
                <img src={twitter.src} alt='twitter img' />
                <img src={you.src} alt='you img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default index
