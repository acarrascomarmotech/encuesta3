import React from "react";
import axios from "axios";
import Image from "next/image";
import Survey from "../../survey";
import logo from "../../../public/Logo.png";

export const ordenPage = ({ num_oc, cotizacion_no, cliente }) => {
  let surveyId = "survey1";

  return (
    <div className="container">
      <div className="cabezera-cliente">
        <div className="cabezera-info uno">
          <p className="p-info">
            Estimado(a) {cliente}: <br /> <br />
            Por favor responda a la siguiente encuesta corta sobre su
            experiencia con la cotización: {cotizacion_no} <br />
            <br />
            Esta encuesta solo le tomará un minuto y en ella no se solicita
            información personal.
          </p>
        </div>
        <Image className="logo dos" src={logo} alt="logo" />
      </div>
      <div className="footer"></div>
      <Survey
        num_oc={num_oc}
        cotizacion_no={cotizacion_no}
        cliente={cliente}
        surveyId={surveyId}
      />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const { num_oc } = params;
  const headers = {
    "Content-Type": "dbsync/json*",
    "DBSync-Client": "mbs",
  };

  const { data } = await axios.post(
    "https://ws.marmotech.com.do/gas/ws/r/restserver",
    `{"oper":"orden_cliente","data":"{\\"usuario\\":\\"conecta\\",\\"clave\\":\\"conecta\\",\\"orden\\":\\"${num_oc}\\"}"}`,
    { headers }
  );
  const cotizacion_no = String(data.orden_master.cotizacion_no);
  const cliente = String(data.orden_master.cliente);

  //const num_oc = "205882"
  return {
    props: {
      num_oc,
      cotizacion_no,
      cliente,
    },
  };
};

export const getStaticPaths = async (ctx) => {
  const headers = {
    "Content-Type": "dbsync/json*",
    "DBSync-Client": "mbs",
  };

  const { data } = await axios.post(
    "https://ws.marmotech.com.do/gas/ws/r/restserver",
    `{"oper":"orden_cliente","data":"{\\"usuario\\":\\"conecta\\",\\"clave\\":\\"conecta\\",\\"orden\\":\\"205882\\"}"}`,
    { headers }
  );
  const num_oc = data.orden_master.num_oc.toString();

  return {
    paths: [
      {
        params: {
          num_oc,
        },
      },
    ],
    fallback: "blocking",
  };
};

export default ordenPage;
