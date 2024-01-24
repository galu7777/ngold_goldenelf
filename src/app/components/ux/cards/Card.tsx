import { FC } from "react"

interface Props {
    styles?:string
    children?: React.ReactNode
  }

const Card:FC<Props> = ({children,styles}) => {
  return (
    <div className={`${styles} border-solid border-[1px] border-white/[0.1] bg-white/[0.026] backdrop-blur-xl backdrop-brightness-75 rounded-[3rem]`}>
        {children}
    </div>
  )
}

export default Card