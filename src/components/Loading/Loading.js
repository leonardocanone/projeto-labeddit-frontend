import loadingImg from "../../assets/loading1.png"
import { CircularLoading, LoadingContainer } from "./LoadingStyled"

export const Loading = ({ size }) => {
  return (
    <LoadingContainer>
      <CircularLoading size={size || "200px"} src={loadingImg} alt="Loading" />
    </LoadingContainer>
  )
}