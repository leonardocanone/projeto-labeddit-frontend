import { HeaderContainer, HeaderLogo, HeaderButton, ButtonClose, HeaderButton2 } from "./HeaderStyled"
import header_logo from "../../assets/header_logo.png"
import close_icon from "../../assets/close_icon.png"
import { useLocation, useNavigate, useParams } from "react-router"
import { goToFeedPage, goToLoginPage } from "../../routes/coordinator"
import { TOKEN_NAME } from "../../constants/constants"

export const Header = () => {

    const {pathname} = useLocation()
    const navigate = useNavigate()
    const { id } = useParams();

    const logout = () => {
      window.localStorage.removeItem(TOKEN_NAME)
      goToLoginPage(navigate)
    }

    const ButtonSelector = () => {

        switch (pathname) {
            
            case "/feedpage":
                return <HeaderButton onClick={logout}>Logout</HeaderButton>
            case (`/posts/${id}`):
                return (
                  <>
                    <ButtonClose onClick={() => goToFeedPage(navigate)}>
                      <img
                        className="close-icon"
                        src={close_icon}
                        alt="Voltar para o Feed"
                      />
                    </ButtonClose>
                    <HeaderButton2 
                        onClick={logout}>
                      Logout
                    </HeaderButton2>
                  </>
                );
            default:
                return <HeaderButton onClick={() => goToLoginPage(navigate)}>Entrar</HeaderButton> 
        }

    }

    return (
        <HeaderContainer>
            <HeaderLogo onClick={() => goToLoginPage(navigate)} src={header_logo} />
            <ButtonSelector/>
        </HeaderContainer>
    )
}