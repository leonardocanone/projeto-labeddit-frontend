import { LoginForm, LoginHeader, LoginPageContainer } from "./LoginPageStyled"
import LoginLogo from "../../assets/login_logo.png"
import HorizontalLine from "../../components/HorizontalLine"
import FooterBar from "../../assets/footer-bar.svg"
import { useNavigate } from "react-router-dom"
import { goToFeedPage, goToSignupPage } from "../../routes/coordinator"
import { useForm } from "../../hooks/useForm"
import axios from "axios"
import { BASE_URL, TOKEN_NAME } from "../../constants/constants"
import { useEffect, useState } from "react"
import { Loading } from "../../components/Loading/Loading"


export const LoginPage = () => {

  const [loading, setLoading] = useState(false)
  const [form, onChange] = useForm({ email: "", password: "" });
  const navigate = useNavigate()

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME)
    if (token) {
      goToFeedPage(navigate)
    }
  }, [])

  const login = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post(`${BASE_URL}/users/login`, form)
      .then(res => {
        window.localStorage.setItem(TOKEN_NAME, res.data.token)
        goToFeedPage(navigate)
      })
      .catch((err) => {
        alert(err.response.data || "Erro inesperado, tente novamente!")
      })
      .finally(() => { setLoading(false) })
  }

    return (
      <LoginPageContainer>
        <LoginHeader>
          <img id="login-logo" src={LoginLogo} alt="Logo Labenu LabEddit" />
          <h1>O projeto de rede social da Labenu</h1>
        </LoginHeader>

        <LoginForm>
          <form onSubmit={login}>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={form.email}
              onChange={onChange}
              required
            />

            <input
              type="password"
              placeholder="Senha"
              minLength={5}
              name="password"
              value={form.password}
              onChange={onChange}
              required
            />

            <button className="continuar" type="submit">
              {
                loading
                  ?
               <Loading size="40px" />
                  :
                "Continuar"
              }
            </button>
          </form>

          <HorizontalLine />

          <button
            className="criar-conta"
            onClick={() => goToSignupPage(navigate)}
          >
            Crie uma conta!
          </button>
        </LoginForm>

        <img id="footer-bar" src={FooterBar} alt="Barra horizontal de rodapé IPhone" />
      </LoginPageContainer>
    );

}