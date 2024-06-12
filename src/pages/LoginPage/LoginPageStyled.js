import styled from "styled-components";

export const LoginPageContainer = styled.main`
  
  background-color: white;
  min-height: 100vh;
  width: 428px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  #footer-bar {
    padding-top: 20px;
  }

  @media only screen and (min-width: 375px) and (max-width: 429px) {
    width: 100vw;
  }
`

export const LoginHeader = styled.section`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 8vh;

  #logo {
    width: 152px;
  }

  h1 {
    font-size: 16px;
    font-weight: 200;
    margin: 0.5rem 0;
  }
`

export const LoginForm = styled.section`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    input {
      color: #323941;
      width: 100%;
      max-width: 365px;
      height: 60px;
      margin: 0.3rem 0;
      padding: 10px;
      border: 1px solid lightgray;
      font-size: 1rem;
    }
  }

  button {
    width: 100%;
    max-width: 365px;
    height: 51px;
    border-radius: 25px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border: none;
  }

  button.continuar {
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    color: white;
    margin-top: 3rem;
  }

  button.criar-conta {
    border: 1px solid #fe7e02;
    color: #fe7e02;
    background-color: white;
  }
`
