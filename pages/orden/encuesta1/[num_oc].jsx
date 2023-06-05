import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Survey from "../../survey";
import logo from "../../../public/Logo.png";
<<<<<<< HEAD
import { encryptId, decryptId, getUrl } from "../../../utils/encrypt";

export const ordenPage = ({ num_oc_decrypted, cotizacion_no, cliente }) => {
  let surveyId = "survey1";
  

  useEffect(() => {

    fetch("http://localhost:3000/api/encrypt", {
      method: "POST",
      body: JSON.stringify(num_oc_decrypted),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  return (
    <div className="container">
      <div className="cabezera-cliente">
        <div className="cabezera-info uno">
          <p className="p-info">
            Estimado(a) {cliente}: <br /> <br />
            Por favor responda a la siguiente encuesta corta sobre su
            experiencia con la cotización: {num_oc_decrypted} <br />
            <br />
            Esta encuesta solo le tomará un minuto y en ella no se solicita
            información personal.
          </p>
        </div>
        <Image className="logo dos" src={logo} alt="logo" />
      </div>
      <div className="footer"></div>
      <Survey
        num_oc={num_oc_decrypted}
        cotizacion_no={cotizacion_no}
        cliente={cliente}
        surveyId={surveyId}
      />
    </div>
  );
=======
import { encryptId } from "../../../utils/encrypt"

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
>>>>>>> dad64696cf3a0290a820bba74235dcee008ec700
};

export const getStaticProps = async ({ params }) => {
<<<<<<< HEAD
  const { num_oc } = params;
  const num_oc_decrypted = decryptId(num_oc);
  // console.log(num_oc_decrypted);

  // console.log(typeof num_oc);

  const headers = {
    "Content-Type": "dbsync/json*",
    "DBSync-Client": "mbs",
  };

  const { data } = await axios.post(
    "https://ws.marmotech.com.do/gas/ws/r/restserver",
    `{"oper":"orden_cliente","data":"{\\"usuario\\":\\"conecta\\",\\"clave\\":\\"conecta\\",\\"orden\\":\\"${num_oc_decrypted}\\"}"}`,
    { headers }
  );
  const cotizacion_no = String(data.orden_master.cotizacion_no);
  const cliente = String(data.orden_master.cliente);

  return {
    props: {
      num_oc_decrypted,
      cotizacion_no,
      cliente,
    },
  };
=======
    const { num_oc } = params;

    const a = encryptId(num_oc)
    console.log(a)

    const headers = {
        "Content-Type": "dbsync/json*",
        "DBSync-Client": "mbs",
    };

    //const { data } = await axios.post<Orden>('https://ws.marmotech.com.do/gas/ws/r/restserver',

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
>>>>>>> dad64696cf3a0290a820bba74235dcee008ec700
};

export const getStaticPaths = async (ctx) => {
    const headers = {
        "Content-Type": "dbsync/json*",
        "DBSync-Client": "mbs",
    };

<<<<<<< HEAD
  const { data } = await axios.post(
    "https://ws.marmotech.com.do/gas/ws/r/restserver",
    `{"oper":"orden_cliente","data":"{\\"usuario\\":\\"conecta\\",\\"clave\\":\\"conecta\\",\\"orden\\":\\"205883\\"}"}`,
    { headers }
  );

  // console.log(data);
  const cliente = data.orden_master.cotizacion_no.toString();
  // console.log(cliente);
  const num_oc = encryptId(cliente);
  const desencriptado = decryptId(num_oc);
  // console.log("Encriptado en el path");
  // console.log(num_oc);
  // console.log("Desencriptado en el path");
  // console.log(desencriptado);

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
=======
    //const { data } = await axios.post<Orden>('https://ws.marmotech.com.do/gas/ws/r/restserver',

    const { data } = await axios.post(
        "https://ws.marmotech.com.do/gas/ws/r/restserver",
        `{"oper":"orden_cliente","data":"{\\"usuario\\":\\"conecta\\",\\"clave\\":\\"conecta\\",\\"orden\\":\\"205882\\"}"}`,
        { headers }
    );
    const num_oc = data.orden_master.num_oc.toString();

    //console.log('path:',num_oc)
    //const num_oc = "205882"
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
>>>>>>> dad64696cf3a0290a820bba74235dcee008ec700
};

export default ordenPage;
