import styled from "styled-components";

const DividingLine = styled.dl`
  width: 96%;
  margin: 1rem 0;
  height: 1px;
  border: 0;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
`

export default function HorizontalLine() {
  return (
    <DividingLine />
  );
}