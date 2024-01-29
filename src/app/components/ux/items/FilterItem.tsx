import React, { FC } from 'react'

interface Props {
    content:string
}

const FilterItems:FC<Props> = ({content}) => {
  return (
    <div className='flex text-center justify-center items-center bg-[#36325F] h-[2rem] px-[1rem] rounded-xl mr-[1rem]' >
        <p className='font-bold text-[0.9rem]'>{content}</p>
    </div>
  )
}

export default FilterItems