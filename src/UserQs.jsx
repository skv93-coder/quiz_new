import React from "react";
import quizContext from "./context/quizContext/QuizContext";
export default function UserQs() {
  const { questionArr, saveAns } = React.useContext(quizContext);
  const [currAns, setcurrAns] = React.useState("");
  const [currQs, setcurrQs] = React.useState(1);
  const handleClick = (Event, ans) => {
    Event.preventDefault();

    if (ans === currAns) {
      setcurrAns("");
    } else {
      //setselected()
      setcurrAns(ans);
    }
  };
  const submit = (Event) => {
    Event.preventDefault();
    if (currAns) {
      saveAns({
        question: questionArr[currQs - 1]["question"],
        ans: currAns,
        isRight:
          currAns === questionArr[currQs - 1][questionArr[currQs - 1].ans]
      });
    } else {
      saveAns({
        question: questionArr[currQs - 1].question,
        ans: null
      });
    }
    if (currQs < questionArr.length) {
      setcurrQs(currQs + 1);
    }
  };
  return (
    <div className="container">
      <div className="">
        <form onSubmit={submit}>
          <h3 className="heading">Qs.No{currQs}</h3>

          <p
            type="text"
            id="question"
            name="question"
            placeholder="Question"
            className="col-12 question-user"
          >
            {questionArr[currQs - 1]["question"]}
          </p>
          <div className="ans">
            <button
              type="text"
              id="option1"
              name="option1"
              style={{
                border:
                  currAns === questionArr[currQs - 1].option1
                    ? "6px solid red"
                    : ""
              }}
              onClick={(Event) =>
                handleClick(Event, questionArr[currQs - 1].option1)
              }
              placeholder="Option-1"
              className="input-user col-6 hover"
            >
              {questionArr[currQs - 1].option1}
            </button>
            <button
              type="text"
              id="option2"
              name="option2"
              style={{
                border:
                  currAns === questionArr[currQs - 1].option2
                    ? "6px solid red"
                    : ""
              }}
              onClick={(Event) =>
                handleClick(Event, questionArr[currQs - 1].option2)
              }
              placeholder="Option-2"
              className="input-user col-6 hover"
            >
              {questionArr[currQs - 1].option2}
            </button>
            <button
              type="text"
              id="option3"
              name="option3"
              style={{
                border:
                  currAns === questionArr[currQs - 1].option3
                    ? "6px solid red"
                    : ""
              }}
              onClick={(Event) =>
                handleClick(Event, questionArr[currQs - 1].option3)
              }
              placeholder="Option-3"
              className="input-user col-6  hover"
            >
              {questionArr[currQs - 1].option3}
            </button>
            <button
              type="text"
              id="option4"
              name="option4"
              style={{
                border:
                  currAns === questionArr[currQs - 1].option4
                    ? "6px solid red"
                    : ""
              }}
              onClick={(Event) =>
                handleClick(Event, questionArr[currQs - 1].option4)
              }
              placeholder="Option-4"
              className="input-user col-6 hover"
            >
              {questionArr[currQs - 1].option4}
            </button>
          </div>

          <div className="submit centre">
            <input type="submit" value="Submit" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
}
