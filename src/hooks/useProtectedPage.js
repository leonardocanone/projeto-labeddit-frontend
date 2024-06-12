import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLoginPage } from "../routes/coordinator"
import { TOKEN_NAME } from "../constants/constants"

export const useProtectedPage = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem(TOKEN_NAME)

    useEffect(() => {
        if(!token){
          goToLoginPage(navigate)
        }
      }, [navigate])
}