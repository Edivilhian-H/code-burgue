import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height:100vh;
  padding-top: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0a0a10;
`;

export const Request = styled.li`
  display: flex;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  margin-bottom: 18px;

  padding: 27px 17px;

  button {
    background: none;
    border: none;
    align-self: flex-end;
    cursor: pointer;
    margin: 10px;
  }
`;

export const P = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  color: #ffffff;
`;

