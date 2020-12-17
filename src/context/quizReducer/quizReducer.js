import { QUIZ_INFO, ADD_QUESTION, SAVE_ANS, USER_INFO } from "../type";
export default function QuizReducer(state, { payload, type }) {
  switch (type) {
    case QUIZ_INFO:
      return {
        ...state,
        quizInformation: payload,
      };
    case ADD_QUESTION:
      return {
        ...state,
        questionArr: state.questionArr
          ? [...state.questionArr, payload]
          : [payload],
      };
    case SAVE_ANS:
      return {
        ...state,
        userAns: state.userAns ? [...state.userAns, payload] : [payload],
      };
    case USER_INFO:
      localStorage.setItem(
        "token",
        JSON.stringify({ userinfo: payload, userAns: state.userAns })
      );
      return {
        ...state,
        userInformation: [payload, state.userAns],
      };
    default:
      return state;
  }
}
