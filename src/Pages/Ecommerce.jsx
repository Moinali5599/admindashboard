import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'
import { Stacked, Pie, SparkLine, Button} from '../Components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../Context/ContextProvider'
const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl p-8 pt-9 m-3 w-full bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$82,500</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color="white"
              bgColor='blue'
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>
        <div className='flex flex-wrap m-3 gap-1 justify-center items-center'>
          {
            earningData.map((item) => (
              <div key={item.title} className='bg-white drop-shadow-sm dark:text-gray-200 dark:bg-main-dark-bg md:w-56 p-4 pt-9 mr-2 rounded-xl'>
                <button style={{color:item.iconColor, backgroundColor: item.iconBg}} className='text-2xl rounded-full p-4 hover:drop-shadow-xl'>
                  {item.icon}
                </button>
                <p className='mt-3'>
                  <span className='text-lg font-bold'>
                    {item.amount}
                  </span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className='text-gray-400 mt-1'>
                  {item.title}
                </p>
              </div>
            ))
          }
        </div>
      </div>
      <div className='flex g-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>
              Revenue Updates
            </p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot/></span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot/></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex g-10 justify-centerflex-wrap'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p className='flex items-center'>
                  <span className='text-3xl font-semibold'>$93,500</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 m-3 text-xs'>20%</span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Budget
                </p>
              </div>

              <div className='mt-8'>
                <p className='flex items-center'>
                  <span className='text-3xl font-semibold'>$62,000</span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine 
                 currentColor = 'blue'
                 id= 'line-sparkline'
                 type='Line'
                 height='80px'
                 width = '250px'
                 data={SparklineAreaData}
                 color='blue'
                />
              </div>
              <div className='mt-10'>
                <Button 
                  color='white'
                  bgColor='blue'
                  text='Download Report'
                  borderRadius='10px'
                />
              </div>
            </div>
            <div>
              <Stacked 
               width = '320px'
               height= '360px'
              />
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce