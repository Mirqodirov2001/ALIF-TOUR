import Link from "next/link"

const hotels = () => {
  return (
    <div>
      <div className=' container mx-auto'>
        <h1 className='text-[50px] text-[#00FFFF] text-center mt-20 pt-32'>
          HOTELS
        </h1>
        <div className=' w-20 h-10 rounded-md  bg-[#3443c7] active:shadow-xl active:backdrop-opacity-80 mx-auto'>
          <Link href='/'>
            <p className=' text-[20px] items-center text-center text-white pt-2'>
              BACK
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default hotels
