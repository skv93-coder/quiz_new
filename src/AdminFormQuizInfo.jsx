import React from "react";
import quizContext from "./context/quizContext/QuizContext";
export default function AdminFormQuizInfo() {
  const { setQuizInfo } = React.useContext(quizContext);
  const [quizForm, setquizForm] = React.useState({
    name: "",
    noOfQuestions: "",
    startDate: "",
    endDate: ""
  });
  const { name, noOfQuestions, startDate, endDate } = quizForm;
  const handleChange = (Event) => {
    const copyquizInfo = {
      ...quizForm,
      [Event.target.name]: Event.target.value
    };
    setquizForm(copyquizInfo);
  };
  const submit = (Event) => {
    Event.preventDefault();
    if (parseFloat(noOfQuestions)) {
      setQuizInfo(quizForm);
    } else {
      alert("Fill The Total No of Questions");
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <h3 className="heading">Fill the Quiz information</h3>

        <input
          type="text"
          className="input col-sm-6"
          placeholder="Quiz Name"
          value={name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          className="input"
          placeholder="No of Qs's"
          value={noOfQuestions}
          onChange={handleChange}
          name="noOfQuestions"
        />
        <input
          type="text"
          className="input"
          value={startDate}
          onChange={handleChange}
          name="startDate"
          placeholder="dd/mm/yy"
        />
        <input
          type="text"
          className="input"
          value={endDate}
          onChange={handleChange}
          name="endDate"
          placeholder="dd/mm/yy"
        />
        <div className="submit centre">
          <input type="submit" className="btn" />
        </div>
      </form>
    </div>
  );
}
