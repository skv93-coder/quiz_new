import React from "react";
import quizContext from "./context/quizContext/QuizContext";
export default function AdminForm(props) {
  const { addQuestion, questionArr, quizInformation } = React.useContext(
    quizContext
  );
  const [qsForm, setqsForm] = React.useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    ans: 1,
    qsNo: 1
  });
  const { question, option3, option2, option1, option4, ans } = qsForm;
  const handleChange = (Event) => {
    const copyqsForm = {
      ...qsForm,
      [Event.target.name]: `${
        Event.target.name === "ans"
          ? `option${Event.target.value}`
          : Event.target.value
      }`
    };
    setqsForm(copyqsForm);
  };
  const submit = (Event) => {
    Event.preventDefault();
    if (
      question !== " " &&
      question &&
      option1 &&
      option2 &&
      option3 &&
      option4
    ) {
      addQuestion(qsForm);

      setqsForm({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        ans: 1,
        qsNo: qsForm.qsNo + 1
      });

      if (
        questionArr &&
        questionArr.length === quizInformation.noOfQuestions - 1
      ) {
        props.history.push("/user");
      } else if (parseFloat(quizInformation.noOfQuestions) === 1) {
        props.history.push("/user");
      }
    } else {
      alert("Fill Everything");
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Questions Form</h1>
      <div className="">
        <h3>Q{qsForm.qsNo}</h3>
        <form onSubmit={submit}>
          <input
            type="text"
            id="question"
            name="question"
            value={question}
            onChange={handleChange}
            placeholder="Question"
            className="col-12 question "
          />
          <div className="ans">
            <input
              type="text"
              id="option1"
              name="option1"
              value={option1}
              onChange={handleChange}
              placeholder="Option-1"
              className="input col-6"
            />
            <input
              type="text"
              id="option2"
              name="option2"
              value={option2}
              onChange={handleChange}
              placeholder="Option-2"
              className="input col-6"
            />
            <input
              type="text"
              id="option3"
              name="option3"
              value={option3}
              onChange={handleChange}
              placeholder="Option-3"
              className="input col-6"
            />
            <input
              type="text"
              id="option4"
              name="option4"
              value={option4}
              onChange={handleChange}
              placeholder="Option-4"
              className="input col-6"
            />
          </div>
          <div className="correct_ans centre col-12">
            <h3>Correct-Ans</h3>
            <select
              id="corecctAns"
              value={ans}
              onChange={handleChange}
              name="ans"
              className="input col-6"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="submit centre">
            <input type="submit" value="Submit" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
}
