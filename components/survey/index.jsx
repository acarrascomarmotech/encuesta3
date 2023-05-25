import React from "react";
import * as Survey from "survey-react"; // import surveyjs
import { questions } from "./content"; // these are the survey questions

// Modern theme
import "survey-react/modern.min.css";
import axios from "axios";
// Default theme
// import 'survey-react/survey.min.css';

const SurveyComponent = ({ num_oc, cliente, navegador }) => {
  console.log(navegador);

  // Apply theme
  Survey.StylesManager.applyTheme("modern");

  // Create a modal
  const survey = new Survey.Model(questions);

  survey.onComplete.add(async (sender, option) => {
    const result = survey.getQuestionByName("satisfaction-numeric").value;
    const result2 = survey.getQuestionByName("comment").value;
    console.log(result2);

    const headers = {
      "Content-Type": "dbsync/json*",
      "DBSync-Client": "mbs",
    };

    const { data } = await axios.post(
      "https://ws.marmotech.com.do/gas/ws/r/restserver",
      `{"oper":"respuesta_clientes","data":"{\\"usuario\\":\\"conecta\\",\\"clave\\":\\"conecta\\",\\"cotizacion\\":\\"${num_oc}\\",\\"cliente\\":\\"${cliente}\\",\\"respuesta\\":\\"${result}\\",\\"dispositivo\\":\\"${navegador}\\",\\"comentario\\":\\"${result2}\\"}"}`,
      { headers }
    );
    console.log(data);
  });

  // Render the survey
  return (
    <div className="container">
      <Survey.Survey model={survey} />
    </div>
  );
};

export default SurveyComponent;
