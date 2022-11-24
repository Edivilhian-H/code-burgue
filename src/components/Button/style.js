import styled from "styled-components";


export const Button = styled.button`
  width: 342px;
  height: 68px;
  margin: 76px 0px 51px 0px;

  cursor: pointer;

  background:${props => props.isback ? "rgba(255, 255, 255, 0.14)" : "#d93856"} ;

  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 2px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;

  border: none;
  outline: none;

  color: #ffffff;

  &:hover {
    opacity: 0.7;
    img {
      padding-left: 10px;
      transition: 0.4s;
    }
  }

  &:active {
    opacity: 0.4;
  }

  img {
    transform:${ props => props.isback && " rotate(180deg)"};
  }
`;