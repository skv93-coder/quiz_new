import React from "react";
import AdminForm from "./AdminForm";
import AdminFormQuizInfo from "./AdminFormQuizInfo";
import quizContext from "./context/quizContext/QuizContext";

export default function Admin(props) {
  const { quizInformation } = React.useContext(quizContext);
  return (
    <>{!quizInformation ? <AdminFormQuizInfo /> : <AdminForm {...props} />}</>
  );
}
