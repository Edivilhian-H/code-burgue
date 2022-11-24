import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Burguer01 from "../../assets/Burguer02.png";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, Request, P } from "./style";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getRequests() {
      const { data } = await axios.get("http://localhost:3001/order");
      setRequests(data);
    }
    getRequests();
  }, []);

  async function deleteRequest(requestId) {
    await axios.delete(`http://localhost:3001/order/${requestId}`);

    const newRequest = requests.filter((request) => request.id !== requestId);
    setRequests(newRequest);
  }

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <img alt="Imagem-de-hamburgue-com-batas" src={Burguer01} />
      <ContainerItens>
        <H1>Pedidos</H1>

        <ul>
          {requests.map((request) => (
            <Request key={request.id}>
              <P>{request.order}</P>
              <button onClick={() => deleteRequest(request.id)}>
                <img src={Trash} />
              </button>
              <P>{request.clientName}</P>
            </Request>
          ))}
        </ul>

        <Button isback={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Requests;
