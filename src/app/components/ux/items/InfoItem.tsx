import React, { FC } from 'react'

interface Props {
    title:string
    content:string
}

const InfoItems:FC<Props> = ({title,content}) => {
  return (
    <div className='flex text-center flex-col items-center' >
        <p className='text-[#f2f2f2] text-[0.75rem] font-extralight'>{title}</p>
        <p className=' font-medium text-[0.9rem] '>{content}</p>
    </div>
  )
}

export default InfoItems