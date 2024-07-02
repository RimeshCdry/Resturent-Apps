import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch,AiFillTag} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp,MdWallet} from 'react-icons/md'

// import {FaYoutube, FaTwitter, FaCartPlus } from 'react-icons/fa'

export default function NavBar() {
    const [nav,setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* Left Side */}
       <div className='flex items-center'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                <AiOutlineMenu size={25}/>
            </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Buy</span></h1>

            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='bg-black text-white rounded-full p-2'>Delivery</p>
            <p className='p-2'>Pickup</p>
            </div>
        </div> 

        {/* Search Input */}
    <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] 
    sm:w-[400px] lg:w-[500px] '>
        <AiOutlineSearch size={26} />    
        <input className='bg-transparent  p-2 pl-3 w-full focus:outline-none ' type="text" placeholder='Search Foods...' />
    </div> 
    {/* Cart Button*/}
    <button className='bg-black text-white hidden md:flex items-center py-2 px-5 rounded-full'>
        <BsFillCartFill size={20} className='mr-3'/> Cart
    </button>

{/* Mobile Menu */}
    {/* OverLay */}
    {nav ?     <div  className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
 : ''}

    {/* Side Drawer Menu */}
    <div className={nav?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
        <h2 className='text-2xl p-4'>
            Best <span className='font-bold'>Buy</span>
        </h2>

        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex r'> <TbTruckDelivery size={25} className='mr-4' /><span>Order</span></li>
                <li className='text-xl py-4 flex r'> <MdFavorite size={25} className='mr-4' /><span>Favorite</span></li>
                <li className='text-xl py-4 flex r'> <FaWallet size={25} className='mr-4' /><span>Wallet</span></li>
                <li className='text-xl py-4 flex r'> <MdWallet size={25} className='mr-4' /><span>Help</span></li>
                <li className='text-xl py-4 flex r'> <MdHelp size={25} className='mr-4' /><span>Promotions</span></li>
                <li className='text-xl py-4 flex r'> <AiFillTag size={25} className='mr-4' /><span>Best One</span></li>
                <li className='text-xl py-4 flex r'> <FaUserFriends size={25} className='mr-4' /><span>Invite Friends</span></li>
            </ul>
        </nav>

</div>

    </div>

  )
}
