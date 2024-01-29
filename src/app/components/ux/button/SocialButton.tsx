import React, { FC } from 'react'

interface Props {
    styles?:string
    icon:React.ReactNode
  }

const SocialButton:FC<Props> = ({styles,icon}) => {
  return (
    <div className={`${styles} text-[1.5rem] text-[#AEABD2]`}>
        {icon}
    </div>
  )
}

export default SocialButton