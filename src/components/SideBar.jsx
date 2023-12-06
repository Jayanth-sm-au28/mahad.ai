import React, { useState } from 'react'
import SpeedIcon from '@mui/icons-material/Speed';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HandymanIcon from '@mui/icons-material/Handyman';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import LocalConvenienceStoreRoundedIcon from '@mui/icons-material/LocalConvenienceStoreRounded';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import EvStationIcon from '@mui/icons-material/EvStation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PieChartIcon from '@mui/icons-material/PieChart';
import EjectIcon from '@mui/icons-material/Eject';
import Dashboard from './Dashboard';
const SideBar = () => {

   const sideNavbar = [{
      name: "Dashboard",
      isClickable: false,
      icon: <SpeedIcon />,
   },
   {
      name: "Vehicles",
      isClickable: true,
      icon: <DirectionsCarIcon />,
   },
   {
      name: "Equipment",
      isClickable: false,
      icon: <HandymanIcon />,
   },
   {
      name: "Inspections",
      isClickable: true,
      icon: <CheckCircleIcon />,
   },
   {
      name: "Issues",
      isClickable: true,
      icon: <ReportProblemIcon />,
   },
   {
      name: "Reminders",
      isClickable: true,
      icon: <AccessAlarmIcon />,
   },
   {
      name: "Services",
      isClickable: true,
      icon: <BuildIcon />,
   },
   {
      name: "Contacts",
      isClickable: false,
      icon: <PeopleAltRoundedIcon />,
   },
   {
      name: "Vendors",
      isClickable: false,
      icon: <LocalConvenienceStoreRoundedIcon />,
   },
   {
      name: "Parts & Inventory",
      isClickable: true,
      icon: <Inventory2Icon />,
   },
   {
      name: "Fuel History",
      isClickable: false,
      icon: <EvStationIcon />,
   },
   {
      name: "Places",
      isClickable: false,
      icon: <LocationOnIcon />,
   },
   {
      name: "Documents",
      isClickable: false,
      icon: <TextSnippetIcon />,
   },
   {
      name: "Reports",
      isClickable: false,
      icon: <PieChartIcon />,
   }]
   const [active,setActive]=useState("Dashboard")
   function handleClick(name){
      setActive(name)
   }
   const data = [
      {
        heading: "Vehicle Status",
        isClickable: true,
        cardType: "tabular",
        data: [
          { name: "Active", value: "11", backgroundColor: "bg-green-500" },
          { name: "Inactive", value: "1", backgroundColor: "bg-blue-600" },
          { name: "In Shop", value: "0", backgroundColor: "bg-orange-400" }
        ]
      },
      {
        heading: "Service Costs",
        isClickable: true,
        cardType: "barGraph",
        options: {
          chart: {
            type: 'bar'
          },
        },
        series: [{
          data: [{
            x: `Jul'21`,
            y: 9000,
            fillColor: "#FAD71E"
          }, {
            x: `Aug'21`,
            y: 4000,
            fillColor: "#FAD71E"
          }, {
            x: `Sep'21`,
            y: 11000,
            fillColor: "#FAD71E"
          },
          {
            x: `Oct'21`,
            y: 3000,
            fillColor: "#FAD71E"
          },
          {
            x: `Nov'21`,
            y: 10000,
            fillColor: "#FAD71E"
          },
          {
            x: `Dec'21`,
            y: 1000,
            fillColor: "#FAD71E"
          }]
        }]
  
      },
      {
        heading: "Overdue Inspections",
        isClickable: false,
        cardType: "cardText",
        data: [
          { name: "Overdue", value: "10", color: "text-red-600" },
          { name: "Of Total Scheme", value: "83.3%", color: "text-blue-600" }
        ]
      },
      {
        heading: "Total Costs",
        isClickable: true,
        cardType: "barGraph",
        options: {
          chart: {
            type: 'bar'
          },
        },
        series: [{
          data: [{
            x: `Jul'21`,
            y: 9000,
            // fillColor: "#FAD71E"
          }, {
            x: `Aug'21`,
            y: 4000,
            // fillColor: "#FAD71E"
          }, {
            x: `Sep'21`,
            y: 11000,
            // fillColor: "#FAD71E"
          },
          {
            x: `Oct'21`,
            y: 3000,
            // fillColor: "#FAD71E"
          },
          {
            x: `Nov'21`,
            y: 10000,
            // fillColor: "#FAD71E"
          },
          {
            x: `Dec'21`,
            y: 1000,
            // fillColor: "#FAD71E"
          }]
        }]
  
      },
      {
        heading: "Inspection Submissions",
        isClickable: true,
        cardType: "lineGraph",
        options :{
        
          chart: {
          height: 250,
          type: 'line',
          zoom: {
            enabled: false
          },
          animations: {
            enabled: false
          }
        },
        stroke: {
          width: [2,2,8],
          curve: 'straight'
        },
        labels: ["Thu","Fri","Sat","Sun","Mon","Tue","Wed"],
        
        xaxis: {
        },
        colors: ['#BFBEBB',"#1BAFF3"]
        },
        series: [{    
          data: [3,0,0,1,5,2,1],
         
        }, { 
          data: [4,1,0,3,0,0,3]
        }]
      },
      {
        heading: "Vehicle Assignments",
        isClickable: false,
        cardType: "cardText",
        data: [
          { name: "Assigned", value: "8", color: "text-green-500" },
          { name: "Unassigned", value: "4", color: "text-orange-400" }
        ]
      },
      {
        heading: "Inspection summary",
        isClickable: true,
        cardType: "pieChart",
         options : {
          colors: ["#10EA6F",'#EA103E'],
          chart: {
          width: 380,
          type: 'pie',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        },
      
        series: [45, 55],
      },
      {
        heading: "Inspection Item Failure Rate",
        isClickable: false,
        cardType: "cardText",
        data: [
          { name: "This Week", value: "14.3%", color: "text-blue-600" },
          { name: "Change from Last Week", value: "14.3%",icon:<EjectIcon/>, color: "text-red-600" }
        ]
      },
  
      {
        heading: "Open Issues",
        isClickable: false,
        cardType: "cardText",
        data: [
          { name: "Open", value: "3", color: "text-orange-400" },
          { name: "Overdue", value: "0", color: "text-green-500" }
        ]
      },
    ]
  
   return (
      <>
      <aside id="default-sidebar" className=" fixed top-0 left-0 z-40 w-64 md:w-52 lg:w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
         <div className="h-full  overflow-y-hidden bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium bg-blue-800 h-screen">
               {
                  sideNavbar.map((item, index) => (
                     <li key={`li${index}`} onClick={()=>handleClick(item.name)}>
                        <a href="#" className={`${item.name===active? "bg-blue-900":""} flex items-center p-2  text-white  dark:text-white  hover:bg-blue-900 dark:hover:bg-blue-900 group`}>
                           {item.icon}
                           <div className='flex justify-between w-full'>
                           <span className="ms-4">{item.name}</span>
                           {item.isClickable && <KeyboardArrowDownIcon className='inline-flex justify-end'/>}
                           </div>
                        </a>
                     </li>
                  ))
               }
            </ul>
         </div>
      </aside>

{ active==="Dashboard"  && 
<Dashboard data={data}/>
}
</>
   )
}

export default SideBar