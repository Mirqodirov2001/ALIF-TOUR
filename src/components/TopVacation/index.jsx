import './style.scss'
import TopCard from '@/components/UI/Card'
const index = () => {
  return (
    <section id='top2'>
        <div className='container mx-auto mt-[60px]'>
          <h1 className='text-[40px] text-[#fff] font-bold'>
            Top Vacation Destinations
          </h1>
          <TopCard />
        </div>
    </section>
  )
}

export default index
