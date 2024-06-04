import styled from "styled-components";

const MyAnotherFontElement = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: red;
`;
function StyledComponents() {
  return (
    <div>
      <p>StyledComponents</p>
      <MyAnotherFontElement>StyledComponents</MyAnotherFontElement>
    </div>
  );
}

export default StyledComponents;
