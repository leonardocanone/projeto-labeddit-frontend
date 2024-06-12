import styled from "styled-components";

export const NotFoundPageContainer = styled.main`
  
  background-color: white;
  min-height: 100vh;
  width: 428px;
  padding: 24px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 375px) and (max-width: 429px) {
    width: 100vw;
  }
`

export const NotFoundPageHeader = styled.section`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  #logo {
    width: 152px;
  }

  h1 {
    font-size: 16px;
    font-weight: 200;
    margin: 0.5rem 0;
  }
`

export const NotFoundPageAdvice = styled.section`

display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 220px;

h1 {
    font-size: 30px;
    font-weight: 600;
    color: #fe7e02;
    margin: 0.5rem 0;
}

h2 {
    font-size: 20px;
    font-weight: 400;
    /* color: #fe7e02; */
    margin: 0.5rem;
    padding-top: 20px;
    text-align: center;
}
`