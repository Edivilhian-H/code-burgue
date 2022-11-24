import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Burguer01 from "../../assets/Burguer01.png";
import Arrow from "../../assets/arrow.svg";

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, InputLabel, Input } from "./style";

const App = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();
  const inputOrder = useRef();
  const inputClientName = useRef();

  async function addNewRequest() {
    const { data: newRequest } = await axios.post(
      "http://localhost:3001/order",
      {
        order: inputOrder.current.value,
        clientName: inputClientName.current.value,
      }
    );
    setRequests([...requests, newRequest]);
    navigate("/requests");
  }

  return (
    <Container>
      <img alt="Imagem-de-hamburgue-com-batas" src={Burguer01} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClientName} placeholder="Steve Jobs" />

        <Button onClick={addNewRequest}>
          Novo Pedido <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
