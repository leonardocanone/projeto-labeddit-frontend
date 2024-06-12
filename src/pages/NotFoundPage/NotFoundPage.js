import { Header } from "../../components/Header/Header";
import { NotFoundPageAdvice, NotFoundPageContainer, NotFoundPageHeader } from "./NotFoundPageStyled";
import LoginLogo from "../../assets/login_logo.png";
import FooterBar from "../../assets/footer-bar.svg";

export const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <Header />
      <NotFoundPageHeader>
        <img id="login-logo" src={LoginLogo} alt="Logo Labenu LabEddit" />
        {/* <h1>O projeto de rede social da Labenu</h1> */}
      </NotFoundPageHeader>
      <NotFoundPageAdvice>
        <h1>OPS!</h1>
        <h1>Página não encontrada</h1>
        <h2>
          Vá ao cabeçalho da página e pressione o logo pequeno ou Entrar. Se
          estiver logado voltará para o Feed, senão será direcionado para a
          página de Login.
        </h2>
      </NotFoundPageAdvice>
      <img
        id="footer-bar"
        src={FooterBar}
        alt="Barra horizontal de rodapé IPhone"
      />
    </NotFoundPageContainer>
  );
};
