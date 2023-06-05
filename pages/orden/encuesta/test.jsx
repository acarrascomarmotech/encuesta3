// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Image from "next/image";
// import Survey from "../../survey";
// import logo from "../../../public/Logo.png";
// import { encryptId, decryptId } from "../../../utils/encrypt";
// import { desencriptarParametro } from "../../../utils/webtoken";

// export const ordenPage = ({
// 	num_oc_decrypted,
// 	cotizacion_no,
// 	cliente,
// 	num_oc,
// }) => {
// 	let surveyId = "survey1";

// 	// useEffect(() => {
// 	// 	fetch("http://localhost:3000/api/encrypt", {
// 	// 		method: "POST",
// 	// 		body: JSON.stringify(num_oc),
// 	// 		headers: {
// 	// 			"Content-Type": "application/json",
// 	// 		},
// 	// 	});
// 	// }, []);

// 	return (
// 		<div className="container">
// 			<div className="cabezera-cliente">
// 				<div className="cabezera-info uno">
// 					<p className="p-info">
// 						Estimado(a) {cliente}: <br /> <br />
// 						Por favor responda a la siguiente encuesta corta sobre
// 						su experiencia con la cotización: {
// 							num_oc_decrypted
// 						}{" "}
// 						<br />
// 						<br />
// 						Esta encuesta solo le tomará un minuto y en ella no se
// 						solicita información personal.
// 					</p>
// 				</div>
// 				<Image className="logo dos" src={logo} alt="logo" />
// 			</div>
// 			<div className="footer"></div>
// 			<Survey
// 				num_oc={num_oc_decrypted}
// 				cotizacion_no={cotizacion_no}
// 				cliente={cliente}
// 				surveyId={surveyId}
// 			/>
// 		</div>
// 	);
// };

// export const getStaticProps = async ({ params }) => {
// 	const { num_oc } = params;
// 	const num_oc_decrypted = decryptId(num_oc);
// 	// console.log(num_oc);
// 	// console.log(num_oc_decrypted);

// 	// console.log(typeof num_oc);

// 	const headers = {
// 		"Content-Type": "dbsync/json*",
// 		"DBSync-Client": "mbs",
// 	};

// 	const { data } = await axios.post(
// 		"https://ws.marmotech.com.do/gas/ws/r/restserver",
// 		`{"oper":"orden_cliente","data":"{\\"usuario\\":\\"conecta\\",\\"clave\\":\\"conecta\\",\\"orden\\":\\"${num_oc_decrypted}\\"}"}`,
// 		{ headers }
// 	);
// 	const cotizacion_no = String(data.orden_master.cotizacion_no);
// 	const cliente = String(data.orden_master.cliente);

// 	return {
// 		props: {
// 			num_oc_decrypted,
// 			cotizacion_no,
// 			cliente,
// 			num_oc,
// 		},
// 	};
// };

// export const getStaticPaths = async (ctx) => {
// 	const headers = {
// 		"Content-Type": "dbsync/json*",
// 		"DBSync-Client": "mbs",
// 	};


// 	const { data } = await axios.post(
// 		"https://ws.marmotech.com.do/gas/ws/r/restserver",
// 		`{"oper":"orden_cliente","data":"{\\"usuario\\":\\"conecta\\",\\"clave\\":\\"conecta\\",\\"orden\\":\\"205888\\"}"}`,
// 		{ headers }
// 	);

// 	// console.log(data);
// 	const cliente = data.orden_master.cotizacion_no.toString();
// 	// console.log(cliente);
// 	const num_oc = encryptId(cliente);
// 	const desencriptado = decryptId(num_oc);
// 	// console.log("Encriptado en el path");
// 	// console.log(num_oc);
// 	// console.log("Desencriptado en el path");
// 	// console.log(desencriptado);

// 	return {
// 		paths: [
// 			{
// 				params: {
// 					num_oc,
// 				},
// 			},
// 		],
// 		fallback: "blocking",
// 	};
// };

// export default ordenPage;
