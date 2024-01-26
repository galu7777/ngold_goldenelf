import { FC } from "react"

interface Props {
    text:string
    styles:string
    onClick?:()=>void
    icon?: React.ReactNode
  }

const CallButton:FC<Props> = ({text,styles,onClick,icon}) => {

    const displayLastNumbers = (str:string)=>{
        return str.slice(0,2) + "..." + str.slice(-4)
    }    

  return (
    <button onClick={onClick} className={`${styles}  ${icon?"justify-evenly":"justify-center"} h-[3rem] sm:h-[2.5rem] flex items-center rounded-[30px]`}>
        {icon}
        <p>{icon?displayLastNumbers(text):text}</p>
    </button>
  )
}

export default CallButton