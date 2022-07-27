import styled from "styled-components";

const DivButton = styled.div`
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 6px 12px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid gray;

    &:hover {
      background-color: gray;
      color: white;
    }
  }


  p {
    padding: 5px;
  }
`

export default DivButton;