import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import{SiShopware} from 'react-icons/si'
import{MdClose} from 'react-icons/md'
import{TooltipComponent} from '@syncfusion/ej2-react-popups'
import {links} from '../data/dummy'
import { useStateContext } from '../Context/ContextProvider'

const Sidebar = () => {
  const {activeMenu, setactiveMenu} = useStateContext();
  const activeLinkStyle = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-sky-500 text-white text-md m -3'
  const normalLinkStyle = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 hover:bg-light-gray dark:text-gray-200 dark:hover:text-black text-md m-2' 

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {
        activeMenu && (
          <>
            <div className='flex justify-between items-center'>
              <Link to='/' onClick={()=> setactiveMenu(false)} 
              className='items-center flex text-xl mt-4 ml-3 font-extrabold tracking-tight dark:text-white text-slate-900'>
                  <SiShopware className='mr-3'/>
                  <span>AdminBoard</span>
              </Link>
              <TooltipComponent content='Menu' postion='BottomCenter'>
                <button
                type='button'
                onClick={() => setactiveMenu(
                  (prevActiveMenu) => !prevActiveMenu
                )}
                className='text-xl p-3 mr- block mt-4 hover:text-gray-900'
                >
                  <MdClose/>
                </button>
              </TooltipComponent>
              </div>
              <div className='mt-10'>
                {links.map((item) => (
                  <div key={item.title}>
                    <p className='font-semibold mb-3'>
                      {item.title}
                    </p>
                    {item.links.map((link) => (
                        <NavLink 
                        to={`/${link.name}`}
                        key={link.name}
                        onClick={() => {}}
                        className={({isActive}) =>
                          isActive? activeLinkStyle : normalLinkStyle
                        }
                        >
                          {link.icon}
                          <span className='capitalize'>
                            {link.name}
                          </span>
                        </NavLink>
                    ))
                    }
                  </div>
                ))}
              </div>
          </>)}
    </div>
  )
}

export default Sidebar