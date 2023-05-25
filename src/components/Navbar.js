import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsCartFill} from "react-icons/bs";


function Navbar() {
const {qty,items,  getTotalQuantity,}=useContext(UserContext)

const total=getTotalQuantity()
 return(
    <div className='flex justify-between p-4 items-center'>
        <div className=' sm:hidden'>
 <AiOutlineArrowLeft/>
        </div>
        <h1 className='text-lg font-bold'>UNI Resto Cafe</h1>
        <h1 className='text-md sm:hidden'>My orders</h1>
<div className='flex gap-3'>

            <h1 className='hidden md:flex'>My orders</h1>
        <div className='relative flex'>
          
            <BsCartFill color='gray' className='' size={25}/>
            <div className='absolute bottom-3 left-3 text-sm bg-red-600 text-white px-1 rounded-3xl'>
              {total}
            </div>
</div>
        </div>
        
    </div>
 )
}

export default Navbar