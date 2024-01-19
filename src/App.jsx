import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import desktop from "./assets/image-product-desktop.jpg"
import mobile from "./assets/image-product-mobile.jpg"
import {HiOutlineShoppingCart} from "react-icons/hi"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' flex flex-col items-center justify-center w-full h-full absolute py-1 bg-secondary ' >
      <div className='items-center mx-auto flex lg:h-[60%] h-[90%] lg:flex-row flex-col lg:w-[60%]  w-[90%] bg-white rounded-xl ' >
        <img src={desktop} alt="product-image" className=' lg:w-1/2 w-full object-cover rounded-t-xl lg:rounded-l-xl h-2/5' />
        <div className='lg:w-1/2 w-full flex flex-col p-10' >
          <span className='uppercase text-tertiar font-semibold' >Perfume</span>
          <h1 className='mt-6 text-4xl'>
            Gabrielle<br/>Essence Eau<br/>De Parfum
          </h1>
          <span className='mt-6 w-[85%] text-quarter' >
            A floral, solar and voluptuous interpretation composed  by Olivier Polge, Perfume-Creator for the House of CHANEL
          </span>
          <div className='mt-6 flex gap-5 items-start ' >
            <h2 className='text-4xl text-primary' >$149.99</h2>
            <span className='line-through mt-1' >$169.99</span>
          </div>
          <button className='flex items-center gap-4 justify-center bg-primary hover:bg-tertiar border-none mt-6 outline-none rounded-md text-white p-4' >
            <HiOutlineShoppingCart/>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
