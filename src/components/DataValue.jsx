import React from 'react'

function DataValue({title, count}) {
  return (
    <div className='border-2 m-6 flex flex-col justify-center items-start pl-6 w-[220px] h-[140px] rounded-md border-slate-300 shadow-md  '>
      <h1 className='text-xl font-semibold'>{title}</h1>
      <p className='text-xl '>{count}</p>
    </div>
  )
}

export default DataValue