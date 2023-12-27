import './style.scss'

const index = () => {
  return (
    <section id='card'>
      <div className='carousel mt-10'>
        <div className='card img1 border'>
          <h1 className='card_text '>Bali, Indonesia</h1>
        </div>
        <div className='card img2 border'>
          <h1 className='card_text '>Kerry, Ireland</h1>
        </div>
        <div className='card img3 border'>
          <h1 className='card_text '>Sydney, Australia</h1>
        </div>
        <div className='card img4 border'>
          <h1 className='card_text '>Paris, France</h1>
        </div>
        <div className='card img5 border'>
          <h1 className='card_text'>Bali, Ireland</h1>
        </div>
        <div className='card img6 border'>
          <h1 className='card_text'>Bali, Indonesia</h1>
        </div>
      </div>
    </section>
  )
}

export default index
