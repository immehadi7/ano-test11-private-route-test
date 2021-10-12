import { useContext } from "react"
import { AuthProvider } from "./Context"


const useAuth =() =>{
    return useContext(AuthProvider)
}

export default useAuth;