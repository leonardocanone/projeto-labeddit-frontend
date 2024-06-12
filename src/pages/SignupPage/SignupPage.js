import { Header } from "../../components/Header/Header"
import { SignupFooter, SignupForm, SignupHeader, SignupPageContainer } from "./SignupPageStyled"
import FooterBar from "../../assets/footer-bar.svg"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useForm } from "../../hooks/useForm"
import axios from "axios"
import { goToFeedPage } from "../../routes/coordinator"
import { BASE_URL, TOKEN_NAME } from "../../constants/constants"
import { Loading } from "../../components/Loading/Loading"

export const SignupPage = () => {
    
  const [form, onChange] = useForm({ nickname: "", email: "", password: "" });

  const navigate = useNavigate()
  const [checked, setChecked] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME)
    if (token) {
      goToFeedPage(navigate)
    }
  }, [])

  const signup = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post(`${BASE_URL}/users/signup`, form)
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
    <SignupPageContainer>
      <Header />

      <SignupHeader>
        <h1>Olá, boas vindas ao LabEddit ;)</h1>
      </SignupHeader>

      <SignupForm>
        <form onSubmit={signup}>
          <input
            type="text"
            placeholder="Apelido"
            minLength={2}
            name="nickname"
            value={form.nickname}
            onChange={onChange}
            required
          />

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

          <SignupFooter>
            <h2>Ao continuar, você concorda com o nosso
              <span>{" "}Contrato de usuário</span> e nossa
              <span>{" "}Política de Privacidade</span>
            </h2>
            <section>
              <input
                className="checkbox"
                type="checkbox"
                name="termsAndConditions"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                required
              />
              <label htmlFor="termsAndConditions">
                Eu concordo em receber emails sobre coisas legais no Labeddit
              </label>
            </section>
          </SignupFooter>

          <button
            className="cadastrar"
            type="submit"
          >
            {
              loading
                ?
              <Loading size="40px" />
                :
              "Cadastrar"
            }
          </button>
        </form>
      </SignupForm>

      <img id="footer-bar" src={FooterBar} alt="Barra horizontal de rodapé IPhone" />
    </SignupPageContainer>
  );
}