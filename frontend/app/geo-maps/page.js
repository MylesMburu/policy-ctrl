'use client'

import Drawer from "@/components/Drawer";
import {MapContainer, TileLayer}from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import{ Bar, Line} from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
Chart.register({ // Register linear scale
  id: 'linear',
  type: 'linear',
  position: 'left', // 'left' for vertical axis, 'bottom' for horizontal axis
});
const center =[10.771278605629783, 106.69012489341263];
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Natural phenomeno graph',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ],
};

// Options for the bar graph
const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
    x: {
      grid: {
          display: false // Remove x-axis grid lines
      }
  },
  y: {
      grid: {
          display: false // Remove y-axis grid lines
      }
  }
    
  },
};

// const center =[10.771278605629783, 106.69012489341263];
export default function page() {
  return (
    
      <Drawer>
    <div className="container text-black">
    {/* Maps and charts */}
      <div className="flex m-2">
        <div className="flex-2 w-3/5 shadow-lg">
          <div className="flex">
            <h4 className=" font-bold ">Geographical Distribution</h4>
            <div className="ml-auto mr-3 mb-2" >
              <select class="px-2 py-1 border-solid border-blue-600 border-2 rounded-full">
                <option>select country</option>
              </select>
            </div>
          </div>
          <MapContainer 
            center={center}
            zoom={2}
            style={{ height: '70vh'}}
          >
            <TileLayer 
              url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=rjwVCuekcbZL7Q43APim"
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
          </MapContainer>
        </div>
        <div className="w-2/5 m-3 shadow-2xl">
              <h4 className="my-2 font-bold text-center">CHART REPRESENTATION</h4>
            <div className="mr-auto  mb-2" >
              
              <Line data={data} options={options} height={250}/>
              
                  
              </div>
            </div>
        <div className="w-1/5 m-3">
          <h4 className="font-bold text-center p-4">NATURAL PHENOMENO</h4><hr/>
          <div className="flex-col px-4 shadow-xl">
            <div className="m-4 p-2 flex"><input type="checkbox" className="mx-2"/><div className="ml-auto"> <h5 className="ml-auto">flood</h5> </div></div>
            <div className="m-4 p-2 flex"><input type="checkbox" className="mx-2"/> <div className="ml-auto"> <h5 className="ml-auto">flood</h5> </div></div>
            <div className="m-4 p-2 flex"><input type="checkbox" className="mx-2"/> <div className="ml-auto"> <h5 className="ml-auto">flood</h5> </div></div>
            <div className="m-4 p-2 flex"><input type="checkbox" className="mx-2"/> <div className="ml-auto"> <h5 className="ml-auto">flood</h5> </div></div>
            <div className="m-4 p-2 flex"><input type="checkbox" className="mx-2"/> <div className="ml-auto"> <h5 className="ml-auto">flood</h5> </div></div>
            <div className="m-4 p-2 flex"><input type="checkbox" className="mx-2"/> <div className="ml-auto"> <h5 className="ml-auto">flood</h5> </div></div>
          </div>
        </div>
      </div>
      {/* end of Maps and charts */}
      {/* policy and others */}

      <div className="flex m-4">
        <div className="w-4/5 h-2/5 shadow-lg mr-4 shadow-sky-700">
        <h4 className="my-2 font-bold text-center">SUMMARY OF DISASTERS</h4> <hr/>
          <div className="overflow-auto h-1/5">
                <div class="flex w-auto p-2 m-4 bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    {/* <a href="#" class="flex items-center px-3  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        
                    </a> */}
                    <div className="item-center">
                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2">Download
                        
                    </button></div>
                </div>

                <div class="flex w-auto p-2 m-4 bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    {/* <a href="#" class="flex items-center px-3  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        
                    </a> */}
                    <div className="item-center">
                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2">Download
                    </button></div>
                </div>
                <div class="flex w-auto p-2 m-4 bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    {/* <a href="#" class="flex items-center px-3  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        
                    </a> */}
                    <div className="item-center">
                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2">Download
                        
                    </button></div>
                </div>
                <div class="flex w-auto p-2 m-4 bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    {/* <a href="#" class="flex items-center px-3  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        
                    </a> */}
                    <div className="item-center">
                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2">Download
                        
                    </button></div>
                </div>
                <div class="flex w-auto p-2 m-4 bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    {/* <a href="#" class="flex items-center px-3  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        
                    </a> */}
                    <div className="item-center">
                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2">Download
                        
                    </button></div>
                </div>
                <div class="flex w-auto p-2 m-4 bg-white border border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    {/* <a href="#" class="flex items-center px-3  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        
                    </a> */}
                    <div className="item-center">
                    <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2">Download
                        
                    </button></div>
                </div>
          </div>
        </div>
        <div className="w-2/5">
        <h4 className="my-2 font-bold text-center">TOP 10 AFFECTED COUNTRIES</h4> <hr/>
        <div className="m-4 p-2 flex"><div className="ml-auto"> <h5 className="ml-auto">Somalia</h5> </div></div>
        <div className="m-4 p-2 flex"><div className="ml-auto"> <h5 className="ml-auto">Algeria</h5> </div></div>
        <div className="m-4 p-2 flex"><div className="ml-auto"> <h5 className="ml-auto">Greenland</h5> </div></div>
        <div className="m-4 p-2 flex"><div className="ml-auto"> <h5 className="ml-auto">Sudan</h5> </div></div>
        <div className="m-4 p-2 flex"><div className="ml-auto"> <h5 className="ml-auto">Egypt</h5> </div></div>
        <div className="m-4 p-2 flex"><div className="ml-auto"> <h5 className="ml-auto">DRC</h5> </div></div>
        <div className="m-4 p-2 flex"><div className="ml-auto"> <h5 className="ml-auto">Nigeria</h5> </div></div>
        <div className="m-4 p-2 flex"><div className="ml-auto"> <h5 className="ml-auto">Cameroon</h5> </div></div>
        </div>
      </div>
      {/* end policy and others */}
</div>      
      
  </Drawer>
    
  )
}
