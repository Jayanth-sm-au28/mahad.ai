import React from 'react'
import ApexChart from 'react-apexcharts';
import QrCodeIcon from '@mui/icons-material/QrCode';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const Dashboard = ({data}) => {
    
    function renderCardView(item, idx) {
        switch (item.cardType) {
          case "tabular":
            return (
              <div className="bg-white p-4 rounded-md drop-shadow-md border border-gray-200 h-52 w-full" key={`Card${idx}`}>
                <div className='flex justify-between items-start'><p className="text-lg md:text-base  xl:text-lg font-bold mb-2">{item.heading}</p>
                  {item.isClickable && <p className='text-sm text-blue-500 font-bold'>{`Details  >`}</p>}
                </div>
                {
                  item.data.map((el, indx) =>
                  (
                    <div className={`${item.data.length - 1 != indx ? "border-b" : ""} border-gray-300 flex items-center text-base font-medium py-3 justify-between`} key={`card${indx}`}>
                      <p className='font-semibold'>{el.name}</p>
                      <p className={`${el.backgroundColor} w-8 h-5 text-white font-bold text-sm text-center rounded-l-full rounded-r-full`}>{el.value}</p>
                    </div>
                  )
                  )
                }
    
              </div>
            )
          case "barGraph":
            return (
              <div className="bg-white p-4 rounded-md drop-shadow-md border border-gray-200 h-52 w-full" key={`key${idx}`}>
                <div className='flex justify-between items-start'><p className="text-lg md:text-base  xl:text-lg font-bold mb-2">{item.heading}</p>
                  {item.isClickable && <p className='text-sm text-blue-500 font-bold'>{`Details  >`}</p>}
    
                </div>
                <div className='w-full'>
                  <ApexChart type="bar" options={item.options} series={item.series} height={180} width={250} className="w-full " />
    
                </div>
              </div>
            )
          case "cardText":
            return (
              <div className="bg-white p-4 rounded-md drop-shadow-md border  items-center border-gray-200 h-52 w-full" key={`key${idx}`}>
                <div className='flex justify-between items-start '><p className="text-lg md:text-base  xl:text-lg font-bold mb-2">{item.heading}</p>
                  {item.isClickable && <p className='text-sm text-blue-500 font-bold'>{`Details  >`}</p>}
    
                </div>
                <div className='flex items-center justify-evenly w-full pt-8 px-2'>
                  {
                    item.data.map((el, indx) => (
                      <div className='flex flex-col items-center' key={`subCard${indx}`}>
                        <p className={`${el.color} md:text-3xl lg:text-4xl`}>{el.icon? el.icon:""}{el.value}</p>
                        <p className='py-2 text-slate-400 text-sm font-semibold'>{ el.name}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
            case "lineGraph":
              return (
                <div className="bg-white p-4 rounded-md drop-shadow-md border  items-center border-gray-200 h-52 w-full" key={`key${idx}`}>
                  <div className='flex justify-between items-start '><p className="text-lg md:text-base xl:text-lg font-bold mb-2">{item.heading}</p>
                    {item.isClickable && <p className='text-sm text-blue-500 font-bold'>{`Details  >`}</p>}
      
                  </div>
                  <div className='w-full'>
                  <ApexChart type="line" options={item.options} series={item.series} height={180} width={250} className="w-full " />
    
                </div>
                  
                </div>
              )
            case "pieChart":
              return(
                <div className="bg-white p-4 rounded-md drop-shadow-xl border  items-center border-gray-200 h-52 w-full" key={`key${idx}`}>
                  <div className='flex justify-between items-start '><p className="text-lg md:text-base font-bold mb-2">{item.heading}</p>
                    {item.isClickable && <p className='text-sm text-blue-500 font-bold'>{`Details  >`}</p>}
      
                  </div>
                  <div className='w-full'>
                  <ApexChart type="pie" options={item.options} series={item.series}  height={180} width={250} className="w-full " />
    
                </div>
                </div>
              )
        }
      }
  return (
    <div className="p-4 sm:ml-52 lg:ml-64 h-screen overflow-y-scroll bg-slate-100">
    <div className='container mx-auto '>
        <div className='flex items-center justify-between py-3'>
            <p className='font-bold inline-flex items-center'>My Dashboard <UnfoldMoreIcon fontSize='small'/></p>
            <div className='md:flex h-9 items-center hidden '>
                <div className='p-1 border border-gray-400 rounded-md text-xs font-bold bg-white mr-2 items-center'>All groups  <ArrowDropDownIcon className='ml-8'/></div>
                <div className='p-1 border border-gray-400 rounded-md bg-white mr-2'><QrCodeIcon fontSize='small'/></div>
                <div className='p-1 border border-gray-400 rounded-md bg-white '><CenterFocusWeakIcon fontSize='small'/></div>

            </div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    
        {data?.map((item, idx) => (
          <div className="" key={idx}>
            {renderCardView(item, idx)}
          </div>
        ))}
      </div>
    
    </div>
    
    </div>
  )
}

export default Dashboard