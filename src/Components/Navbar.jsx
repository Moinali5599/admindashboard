import React, { useEffect } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChatLeft} from 'react-icons/bs'
import {RiNotification3Line} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md'
import avatar from '../data/avatar.jpg'
import {Cart, Chat, Notification, UserProfile} from '.'
import { useStateContext } from '../Context/ContextProvider'

const NavButton = ({clickFunc, icon, color, notificationAlertColor}) => (
  <button
  type='button'
  className='text-xl mx-6 p-2 relative rounded-full hover:bg-light-gray'
  style={{color: color}}
  onClick = {clickFunc}
  >
    <span 
    style={{background: notificationAlertColor}}
    className='absolute inline-flex h-2 w-2 right-2 top-2 rounded-full'
    />
      {icon}
  </button>
)

const Navbar = () => {
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize} = useStateContext();
  
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    if(screenSize <= 900){setActiveMenu(false);}
    else{setActiveMenu(true);}
  }, [screenSize])
  
  
  return (
    <div className='flex justify-between p-2 md:mx-4 relative'>
      <NavButton 
      clickFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
      icon = {<AiOutlineMenu/>}
      color = 'blue'
      />

      <div className='flex'>
      <NavButton 
      clickFunc={() => handleClick('cart')}
      icon = {<FiShoppingCart/>}
      color = 'blue'
      />

      <NavButton 
      clickFunc={() => handleClick('chat')}
      icon = {<BsChatLeft/>}
      color = 'blue'
      notificationAlertColor='#38bdf8'
      />
      <NavButton 
      clickFunc={() => handleClick('notification')}
      icon = {<RiNotification3Line/>}
      color = 'blue'
      notificationAlertColor='#f97316'
      />
      <div
      className='flex items-center gap-2 cursor-pointer p-1 hover: bg-light-gray rounded-lg'
      onClick={() => handleClick('userProfile')}
      >
        <img src={avatar} className='rounded-full w-8 h-8' alt='userAvtar'/>
        <p>
          <span className='text-gray-400 text-14'>
            Hi, 
          </span>
          <span className='text-gray-400 font-bold ml-1 text-14'>Moin</span>
        </p>
        <MdKeyboardArrowDown className='text-gray-400 text-14'/>
      </div>

      {isClicked.cart && <Cart/>}
      {isClicked.chat && <Chat/>}
      {isClicked.notification && <Notification/>}
      {isClicked.userProfile && <UserProfile/>}

      </div>
    </div>
  )
}

export default Navbar