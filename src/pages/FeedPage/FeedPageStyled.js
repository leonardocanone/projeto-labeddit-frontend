import styled from "styled-components";

export const FeedPageContainer = styled.main`
  
  background-color: white;
  min-height: 100vh;
  width: 428px;
  padding: 24px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */

  #footer-bar {
    padding-top: 24px;
  }

  @media only screen and (min-width: 375px) and (max-width: 429px) {
    width: 100vw;
  }
`

export const PostForm = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    textarea {
      background-color: #EDEDED;
      color: #6F6F6F;
      width: 100%;
      max-width: 364px;
      height: 131px;
      margin: 0.5rem 0;
      padding: 10px;
      font-size: 18px;
      font-family: 'IBM Plex Sans', sans-serif;
      border-radius: 12px;
      border: none;
      resize: none;
    }
  }

  button {
    width: 100%;
    max-width: 364px;
    height: 47px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    border: none;
  }

  button.postar {
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    color: white;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`

export const PostsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`