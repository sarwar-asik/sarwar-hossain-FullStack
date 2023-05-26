import { useEffect } from "react"

const useTitle =(title)=>{
useEffect(()=>{
    document.title =`Sarwar/${title}`
},[title])
}

export default useTitle