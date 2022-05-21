import {React,useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import{TooltipComponent} from '@syncfusion/ej2-react-popups'

import './App.css'

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
       <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
            <TooltipComponent content='Settings' position='Top'>
              <button type='button' 
              className='text-3xl p-4 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full' 
              style={{backgroundColor:'blue'}}>
                <FiSettings/>
              </button>
            </TooltipComponent>
          </div>
          {activeMenu?(
          <div className='w-72 fixed sidebar bg-white dark:bg-secondary-dark-bg'>
            Sidebar visible
          </div>):(
          <div className='w-0 dark:bg-secondary-dark-bg'>
            Sidebar hidden
          </div>
          )}
          <div className={
            `dark:bg-main-bg bg-main-bg w-full min-h-screen ${activeMenu? 'md:ml-72' : 'flex-2'}`
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg'>
              Navbar
            </div>
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path='/' element='Ecommerce' />
                <Route path='/ecommerce' element='Ecommerce' />

                {/* Pages */}
                <Route path='/orders' element='Orders' />
                <Route path='/employees' element='Employees' />
                <Route path='/customers' element='Customers' />

                {/* Apps */}
                <Route path='/calender' element='Calender' />
                <Route path='/kanban' element='Kanban' />
                <Route path='/color-picker' element='ColorPicker' />
                <Route path='/editor' element='Editor' />

                {/* Charts */}
                <Route path='/line' element='Linebar' />
                <Route path='/pie' element='Pie' />
                <Route path='/bar' element='bar' />
                <Route path='/area' element='area' />
                <Route path='/stacked' element='stacked' />
                <Route path='/financial' element='financial' />
                <Route path='/color-mapping' element='color-mapping' />
                <Route path='/pryamid' element='pryamid' />
              </Routes>
            </div>
          </div>

        </div>
      </BrowserRouter>
    </div>
   
  )
}

export default App