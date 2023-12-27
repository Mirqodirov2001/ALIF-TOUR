import TopVacation from '@/components/TopVacation'
import Search from '@/components/Search'
import TopCart from '@/components/TopCategories'
import Offers from '@/components/Offers'
import Browser from '@/components/Browse'
import Travelers from '@/components/Travelers'
import TravelApp from '@/components/TravelApp'
const page = () => {
  return (
    <>
      <div className=' p-3'>
        <Search />
        <TopCart />
        <TopVacation />
        <Offers />
        <Browser />
        <Travelers />
      </div>
      <TravelApp />
    </>
  )
}

export default page
