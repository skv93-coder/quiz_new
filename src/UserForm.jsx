import React from "react";
import quizContext from "./context/quizContext/QuizContext";
export default function UserForm(props) {
  const { setUserInfo } = React.useContext(quizContext);
  const [user, setuser] = React.useState({
    name: "",
    email: ""
  });
  const { name, email } = user;
  const handleChange = (Event) => {
    const copyuser = { ...user, [Event.target.name]: Event.target.value };
    setuser(copyuser);
  };
  const submit = (Event) => {
    Event.preventDefault();
    if (name && email) {
      setUserInfo(user);
      setuser({
        name: "",
        email: ""
      });
      props.history.push("/");
    } else {
      alert("Plese Fill the complete information");
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <h3 className="heading">Fill the Form</h3>

        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleChange}
          className="input"
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
          className="input"
        />

        <div className="submit centre">
          <input type="submit" className="btn" />
        </div>
      </form>
    </div>
  );
}
