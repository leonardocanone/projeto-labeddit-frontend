import loadingImg from "../../assets/loading2.png"
import { CircularLoading, LoadingContainer } from "./LoadingStyled"

export const Loading2 = ({ size }) => {
  return (
    <LoadingContainer>
      <CircularLoading size={size || "200px"} src={loadingImg} alt="Loading" />
    </LoadingContainer>
  )
}