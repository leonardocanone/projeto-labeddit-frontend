import styled from "styled-components";

export const SignupPageContainer = styled.main`
  
  background-color: white;
  min-height: 100vh;
  width: 428px;
  padding: 24px;
  padding-top: 0;
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

export const SignupHeader = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 33px;
    margin: 2rem 0;
    /* margin-top: -30px; */
    color: #373737;
  }
`

export const SignupForm = styled.section`
  display: flex;
  flex-direction: column;
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

  button.cadastrar {
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    color: white;
    margin-top: 3rem;
  }

  .hr-line {
    margin: 1rem 0;
  }
`

export const SignupFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    .checkbox {
      width: 18px;
    }

    label {
      margin-left: 0.5rem;
    }
  }

  h2, label {
    font-size: 14px;
    font-weight: 400;
  }

  span {
    color: #4088CB;
  }
`