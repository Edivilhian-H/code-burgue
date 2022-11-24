import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  padding-top: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0a0a10;
`;

export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  padding-left: 15px;

  color: #eeeeee;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  margin-bottom: 42px;
  padding-left: 15px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  border: none;
  outline: none;

  color: #ffffff;
`;

