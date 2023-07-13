import { ReactNode } from "react"

interface Props{
    // text:string // this we will fail if we add the html content as child in the alert.tsx so we do.
    children:ReactNode
}

const Alert = ({children}:Props) => {
  return (
    <div className="alert alert-primary">{children}</div>
    //class here we took from bootstrap Alert.
  )
}
export default Alert