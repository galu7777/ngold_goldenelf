import { FC } from "react"

interface Props {
    text:string
    styles?:string
    onClick?:()=>void
    icon?: React.ReactNode
  }

const CallButton:FC<Props> = ({text,styles,onClick,icon}) => {     

  return (
    <button onClick={onClick} className={`${styles}  ${icon?"justify-evenly":"justify-center"} h-[3rem] sm:h-[2.5rem] flex items-center rounded-[30px]`}>
        {icon}
        <p>{icon?text:text}</p>
    </button>
  )
}

export default CallButton