import React from 'react'

function Header() {
    return (
        <header className=' w-screen h-22 pl-[2vw] grid place-content-center  py-7 pb-15 shadow-md'>
            <nav className='flex w-[70vw] justify-between text-slate-700'>
                <h1 className='font-extrabold text-3xl font-serif self-center'>BOOKS</h1>
                <button className='bg-slate-300 p-2 rounded-lg hover:shadow-sm hover:rounded-xl transition-all'>Create New Book</button>
            </nav>
        </header>
    )
}

export default Header