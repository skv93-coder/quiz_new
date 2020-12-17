import React from "react";
import UserQs from "./UserQs";
import quizContext from "./context/quizContext/QuizContext";
import UserForm from "./UserForm";
export default function User(props) {
  const { userAns, quizInformation } = React.useContext(quizContext);
  return (
    <div>
      {userAns && quizInformation.noOfQuestions - 0 === userAns.length ? (
        <UserForm {...props} />
      ) : (
        <UserQs />
      )}
    </div>
  );
}
