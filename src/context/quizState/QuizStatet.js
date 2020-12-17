import React from "react";
import QuizContext from "../quizContext/QuizContext";
import { QUIZ_INFO, ADD_QUESTION, SAVE_ANS, USER_INFO } from "../type";
import quizReducer from "../quizReducer/quizReducer";
export default function Quizstate(props) {
  const intialState = {
    quizInformation: null,
    isQuestionArrFilled: false,
    questionArr: null,
    userAns: null,
    userInformation: null
  };
  const [state, dispatch] = React.useReducer(quizReducer, intialState);
  const setQuizInfo = (quizInfo) => {
    dispatch({
      type: QUIZ_INFO,
      payload: quizInfo
    });
  };
  const addQuestion = (qs) => [
    dispatch({
      type: ADD_QUESTION,
      payload: qs
    })
  ];

  const saveAns = (ans) => {
    dispatch({
      type: SAVE_ANS,
      payload: ans
    });
  };
  const setUserInfo = (info) => {
    dispatch({
      type: USER_INFO,
      payload: info
    });
  };
  return (
    <QuizContext.Provider
      value={{
        quizInformation: state.quizInformation,
        questionArr: state.questionArr,
        setQuizInfo,
        addQuestion,
        saveAns,
        userAns: state.userAns,
        setUserInfo,
        userInformation: state.userInformation
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
}
