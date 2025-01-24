import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Nimbus1 from "../../assets/img/bicicleta/nimbus1.jpg";
import Nimbus2 from "../../assets/img/bicicleta/nimbus2.jpg";
import Nimbus3 from "../../assets/img/bicicleta/nimbus3.jpg";
import Entrega from "../../assets/img/icones/entrega.svg";
import Estoque from "../../assets/img/icones/estoque.svg";
import Eletrica from "../../assets/img/icones/eletrica.svg";
import Carbono from "../../assets/img/icones/carbono.svg";
import Velocidade from "../../assets/img/icones/velocidade.svg";
import Rastreador from "../../assets/img/icones/rastreador.svg";

import "./Nimbus.css";

function Nimbus() {
  return (
    <>
      <NavBar />
      <main className="">
        <div className="titulo-bg">
          <div className="titulo-container">
            <p className="font-2-xl cor-5">R$4999</p>
            <h1 className="font-1-xxl cor-0">
              Nimbus Stark <span className="cor-p1">.</span>
            </h1>
          </div>
        </div>

        <div className="bicicleta">
          <div className="bicicleta-imagens">
            <img src={Nimbus1} alt="" />
            <img src={Nimbus2} alt="" />
            <img src={Nimbus3} alt="" />
          </div>

          <div className="bicicleta-conteudo">
            <p className="font-2-l cor-5">
              A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe.
              Ela vem equipada com os melhores acessórios, o que garante maior
              velocidade.
            </p>

            <div className="bicicleta-comprar">
              <Link className="Button" to="orcamento">
                Comprar Agora
              </Link>
              <span>
                {" "}
                <img src={Entrega} alt="" />
                Entrega em 5 dias
              </span>

              <span>
                {" "}
                <img src={Estoque} alt="" />
                18 em estoque
              </span>
            </div>
            <h2 className="font-1-xs cor-0">Informações</h2>
            <ul className="bicicleta-informacoes">
              <li>
                {" "}
                <img src={Eletrica} alt="" />
                <h3 className="font-1-m cor-0">Motor Elétrico</h3>
                <p>
                  Permite você viajar distâncias inimaginaveis com a sua bike.
                </p>
              </li>
              s
              <li>
                <img src={Velocidade} alt="" />
                <h3 className="font-1-m cor-0">50 km/h</h3>
                <p className="font-2-xs cor-5">
                  A mais rápida bicicleta elétrica disponível hoje no mercado.
                </p>
              </li>
              <li>
                <img src={Rastreador} alt="" />
                <h3 className="font-1-m cor-0">Rastreador</h3>
                <p className="font-2-xs cor-5">
                  Rastreador e sistema anti-furto para garantir o seu sossego.
                </p>
              </li>
              <li>
                <img src={Carbono} alt="" />
                <h3 className="font-1-m cor-0">Fibra de Carbono</h3>
                <p className="font-2-xs cor-5">
                  Maior proteção possível para a sua Bikcraft com fibra de
                  carbono.
                </p>
              </li>
            </ul>
            <h2 className="font-1-xs cor-0">Ficha Técnica</h2>
            <ul class="bicicleta-ficha font-2-s cor-4">
              <li>
                Peso <span>9 kg</span>
              </li>
              <li>
                Altura <span>60 cm</span>
              </li>
              <li>
                Largura <span>120 cm</span>
              </li>
              <li>
                Profundidade <span>10 cm</span>
              </li>
              <li>
                Marchas <span>16</span>
              </li>
              <li>
                Roda <span>29</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Nimbus;
