import React from 'react'

function Flag() {
  return (
    <div class="bg-blue-500 text-white rounded-3xl transition-opacity w-fit px-4 m-10 items-center justify-center   p-3 flex">
    <svg
        class="stroke-2 stroke-current  h-8 w-8 mr-2 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M0 0h24v24H0z" stroke="none" />
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12l2 2 4-4" />
    </svg>

    <div class="">
        <div class="font-bold text-lg">Book Added</div>

    </div>
</div>
  )
}

export default Flag