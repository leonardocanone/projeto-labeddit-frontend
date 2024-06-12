import styled from "styled-components";

export const HeaderContainer = styled.header`

    width: 428px;
    height: 50px;
    background-color: #EDEDED;
    display: flex;
    align-items: center;
    gap: 120px;
    padding-left: 200px;

    @media only screen and (min-width: 375px) and (max-width: 429px) {
    width: 100vw;
  }
`

export const HeaderLogo = styled.img`

    cursor: pointer;

    @media only screen and (min-width: 375px) and (max-width: 429px) {
      margin-left: -24px;
      gap: 5px;
  }
`

export const HeaderButton = styled.button`

    width: 63px;
    height: 25px;
    background: none;
    border: none;
    color: #4088CB;
    font-size: 18px;
    font-weight: 550;
    cursor: pointer;

    @media only screen and (min-width: 375px) and (max-width: 429px) {
        margin-left: -15px;
  }
`

export const HeaderButton2 = styled.button`

    width: 63px;
    height: 25px;
    background: none;
    border: none;
    color: #4088CB;
    font-size: 18px;
    font-weight: 550;
    cursor: pointer;
    margin-left: -120px;

    @media only screen and (min-width: 375px) and (max-width: 429px) {
        margin-left: -135px;
  }
`

export const ButtonClose = styled.button`

    border: none;

    .close-icon {
        margin-left: -38rem;
        cursor: pointer;
        padding-top: 4px;
  
        @media only screen and (min-width: 375px) and (max-width: 429px) {
          margin-left: -35.5rem;
      }
    }
`
