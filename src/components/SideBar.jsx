import React from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";4
import { Link } from 'react-router-dom'

function SideBar() {
    const Tab = ({ to, label }) => (
        <Link to={to} style={{ textDecoration: 'none', color: 'black' }}>
          <div>
            {label}
          </div>
        </Link>
      );
    return (
        <div className=' w-[16vw] pl-8 h-[calc(100vh-4rem)] flex  justify-center  border-r-2  border-slate-200 shadow-xl'>
            <ul className='flex items-start pt-20 gap-5 flex-col text-xl font-semibold '>
                <li className='flex gap-1 item-center justify-center'><MdSpaceDashboard className='self-center' />
                    <Tab to="/" label={"Dashboard"} />
                </li>

                <li className='flex gap-1 item-center justify-center'><BiBookAdd className='self-center' />
                    <Tab to="/book/create" label={"Add Book"} />
                </li>
            </ul>
        </div>
    )
}

export default SideBar