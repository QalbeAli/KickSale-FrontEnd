// import {
//   Typography,
//   Container,
//   Button,
//   Stack,
//   styled,
//   Grid,
// } from "@mui/material";
// import Box from "@mui/material/Box";
// import Image from "next/image";
// import images from "../../public/images/images";
// export default function Tier() {
//   return (
//     <>
    
//     </>
//   );
// }

import React from 'react'


const Tier = () => {
  const tableCss = [
    'whitespace-nowrap border-r  px-6 py-4 text-sm  md:text-lg font-bold ',
  ]

const tableData = [
  {
  tHead: 'FCFS',
  tTire: 'Tire 1',
  tRequirement: '100+',
  tAllocation: '1X',
  tLottery: '1-9'
  
  
  },
  {
  tHead: 'FCFS',
  tTire: 'Tire 2',
  tRequirement: '500+',
  tAllocation: '2X',
  tLottery: '10-19'
  
  
  },
  {
  tHead: 'FCFS',
  tTire: 'Tire 3',
  tRequirement: '1000+',
  tAllocation: '4X',
  tLottery: '20-29'
  
  
  },
  {
  tHead: 'FCFS',
  tTire: 'Tire 4',
  tRequirement: '10000+',
  tAllocation: '8X',
  tLottery: '30-50'
  
  
  },
  {
  tHead: 'FCFS',
  tTire: 'Tire 5',
  tRequirement: '100000+',
  tAllocation: '16X',
  tLottery: '70+'
  
  
  },
]

  return (
    <div >
      <section className=" bg-black">
        <div>
          <h2 className="text-center text-4xl font-bold">
            KickSale Tier & Access to IMO
          </h2>
          <div className="mx-auto  mt-10 max-w-6xl  ">
            <div className="tableShadow mx-3 flex flex-col rounded-xl">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
                  <div className="overflow-hidden border rounded-[45px] ">
                    <table className="min-w-full  rounded-[45px] bg-gradient-to-r from-[#5e245a] to-[#190f3c] text-center">
                      <thead className="border-b">
                        <tr>
                          <th
                            scope="col"
                            className="border-r px-6 py-4 text-sm font-medium  uppercase text-white"
                          >
                            Access
                          </th>
                          <th
                            scope="col"
                            className="border-r px-6 py-4 text-sm font-medium uppercase text-white"
                          >
                            Tire
                          </th>
                          <th
                            scope="col"
                            className="border-r px-6 py-4 text-sm font-medium text-white"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className="border-r px-6 py-4 text-sm font-medium text-white"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-sm font-medium text-white"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      {tableData.map((data, id) => {
                        return (
                          <tbody>
                            <tr className="border-b">
                              <td className={`${tableCss}`}>{data.tHead}</td>
                              <td className={`${tableCss}`}>{data.tTire}</td>
                              <td className={`${tableCss}`}>
                                {data.tRequirement}
                              </td>
                              <td className={`${tableCss}`}>
                                {data.tAllocation}
                              </td>
                              <td className={`${tableCss}`}>{data.tLottery}</td>
                            </tr>
                          </tbody>
                        )
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tier