import { ReactNode } from "react"

interface Props{
    // text:string // this we will fail if we add the html content as child in the alert.tsx so we do.
    children:ReactNode,
    onClose: ()=>void
}

const Alert = ({children, onClose}:Props) => {
  return (

    <div className="alert alert-primary alert-dismissible ">{children}
      <button onClick={onClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    )
}
export default Alert