import Image from "next/image";

import Survey from "../../survey";

import axios from "axios";
import { decryptId } from "../../../utils/encrypt"
import logo from "../../../public/Logo.png";

const headers = {
    "Content-Type": "dbsync/json*",
    "DBSync-Client": "mbs",
};

const surveyId = "survey1";

const ordernPage = ({ id, cotizacion_no, cliente }) => {

    if (cliente === "undefined") {
        return (
            <>Cliente no encontrado</>
        )
    }

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
                num_oc={id}
                cotizacion_no={cotizacion_no}
                cliente={cliente}
                surveyId={surveyId}
            />
        </div>
    )
};

export default ordernPage;

export const getStaticProps = async ({ params }) => {
    const { id } = params;
    const convertID = decryptId(id);

    const { data } = await axios.post(
        "https://ws.marmotech.com.do/gas/ws/r/restserver",
        `{"oper":"orden_cliente","data":"{\\"usuario\\":\\"conecta\\",\\"clave\\":\\"conecta\\",\\"orden\\":\\"${convertID}\\"}"}`,
        { headers }
    );

    const cotizacion_no = String(data.orden_master.cotizacion_no);
    const cliente = String(data.orden_master.cliente);

    return {
        props: {
            id: convertID,
            cotizacion_no,
            cliente,
        },
    };
}

export const getStaticPaths = async (ctx) => {
    return {
        paths: [],
        fallback: "blocking",
    };
}