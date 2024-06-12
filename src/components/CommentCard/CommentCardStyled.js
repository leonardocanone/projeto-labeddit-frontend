import styled from "styled-components";

export const CommentEditingContainer = styled.article`
  max-width: 365px;
  background-color: #FBFBFB;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0 0.5rem;
  margin-top: 1rem;

  display: flex;
  flex-direction: column;

  p {
    color: #6F6F6F;
    font-size: 12px;
  }

  textarea {
      background-color: #dddddd;
      color: #ff5f02;
      width: 100%;
      max-width: 364px;
      min-height: 85px;
      margin: 0.5rem 0;
      padding: 10px;
      font-size: 18px;
      font-family: 'IBM Plex Sans', sans-serif;
      border-radius: 12px;
      border: 1px solid #f9b24e;
      resize: none;
    }

    button {
    width: 46%;
    height: 40px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    color: white;
    margin: 0 0.43rem;
    margin-bottom: 5px;

    &:hover {
      border: 1.5px solid black;
      color: black;
    }

    @media only screen and (min-width: 375px) and (max-width: 429px) {
      width: 35.5vw;
      font-size: 14.5px;
    }
  }
`

export const CommentCardContainer = styled.article`
  
  max-width: 365px;
  background-color: #FBFBFB;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0 0.5rem;
  margin-top: 1rem;

  h1 {
    font-size: 18px;
    font-weight: 400;
    padding: 1rem 0;
  }

  p {
    color: #6F6F6F;
    font-size: 12px;
  }
`

export const CardFooter = styled.footer`
  display: flex;
  color: #6F6F6F;

  button {
    border: none;
    background: none;
    margin-top: 5px;

    &:hover {
      cursor: pointer;
    }
  }

  .like-info {
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 15px;
    font-weight: 700;
    border: 1px solid #ECECEC;
    border-radius: 28px;

    &:hover {
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
      cursor: default;
    }
  }

  .like-icon{
    background-color:  #FBFBFB;
    width: 20px;
    height: 20px;
  }

  .edit-comment {
    margin-left: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 30px;
    border: 1px solid #ECECEC;
    border-radius: 28px;
    /* padding: 6px; */

    &:hover {
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    }
  }

  .edit-icon{
    height: 16px;
  }

  .delete-comment {
    margin-left: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 30px;
    border: 1px solid #ECECEC;
    border-radius: 28px;

    &:hover {
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    }
  }

  .delete-icon{
    height: 17px;
  }
`