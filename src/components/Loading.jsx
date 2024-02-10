import React from 'react'

function Loading() {
    return (
        <div className='h-[90vh] flex flex-1 justify-center items-center gap-3 flex-col '>
        <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] self-center"
            role="status">
        </div>
        <p className='self-center text-sm'>Loading...</p>
        </div>
    )
}

export default Loading