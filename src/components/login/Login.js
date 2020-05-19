import React from "react";
import "./Login.css";

const Login = (props) => <LoginContainer />;

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = { email: "", name: "", sl_token: "", posts: undefined, from_id: [], from_name: [], created_time: [], message: [] };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("the form is submitted!");

    var formdata = new FormData(event.currentTarget);
    formdata.append("client_id", "ju16a6m81mhid5ue1z3v2g0uh");
    formdata.append("email", this.state.email);
    formdata.append("name", this.state.name);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    var getOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://api.supermetrics.com/assignment/register?", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("response", result);
        console.log("token", result.data.sl_token);
        this.setState({ sl_token: result.data.sl_token });
        fetch(
          `https://api.supermetrics.com/assignment/posts?sl_token=${this.state.sl_token}`, getOptions)
          .then((response) => response.json())
          .then((result) => {
            this.setState({
              from_name: result.data.from_name,
              from_id: result.data.from_id,
              message: result.data.message,
              created_time: result.data.created_time,
              posts: result.data,
            });    
            console.log(result);
          })
      })
     
      .catch((error) => console.log("error", error));

  }

  render() {
    const { email, name, from_id, created_time, message, from_name, posts } = this.state;

    if (posts) return <Posts posts={posts} from_name={from_name} from_id={from_id} message={message} created_time={created_time} />;
    else
      return (
        <div id="Container">
          <LoginHeader title="Login" />
          <div id="loginFormContainer">
            <form id="loginForm" onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                placeholder="email"
                value={email}
                onChange={(event) =>
                  this.setState({ email: event.target.value })
                }
              />
              <FormInput
                type="text"
                placeholder="name"
                value={name}
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
              />
              <FormButton title="Send" />
            </form>
          </div>
        </div>
      );
  }
}

/* function Posts (props) {
  const from_name = props.from_name;
  const from_id = props.from_id;
  const created_time = props.created_time;
  const message = props.message;

  const postsName = from_name.map((number) =>    <li>{number}</li>  );
  const postsId = from_id.map((number) =>    <li>{number}</li>  );
  const postsDate = created_time.map((number) =>    <li>{number}</li>  );
  const postsMessage = message.map((number) =>    <li>{number}</li>  );
    return (
      <div>
        <ul>{postsName}, {postsId}</ul> 
        <ul>{postsDate}, {postsMessage}</ul> 
      </div>
     );
} */

const Posts = (props) => (
  <div id="Posts">
    <div id="postsUsersContainer">
      <h1 id="postsHeaderTitle">Users</h1>
      <ul className="posts-list">
        <li>{props.from_name}, {props.from_id}</li>
      </ul>
    </div>
    <div id="postsMessagesContainer">
      <h1 id="postsHeaderTitle">Posts</h1>
      <button title="Sort date" type="button" onClick = { (event) => sortByTime( props.created_time ) } >By Time</button>
      <button title="Sort users" type="button" onClick = { (event) => sortByName( props.from_name ) } >By Name</button>
      <ul className="posts-list">
        <li>
          { formatDate( props.created_time ) }
          <br />
          {props.message}
        </li>
      </ul>
    </div>
  </div>
);

const LoginHeader = (props) => (
  <div className="loginHeader">
    <div id="loginHeaderTitle">{props.title}</div>
  </div>
);

const FormInput = (props) => (
  <div className="LoginInput">
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  </div>
);

const FormButton = (props) => (
  <div className="LoginButton">
    <button type="submit">{props.title}</button>
  </div>
);

function formatDate(date) {
  const buildDate = new Date(date);

  return buildDate.toLocaleString("en-US", {
    weekday: "short",
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: '2-digit',
    minute:'2-digit',
  });
}

function sortByTime( a, b) {
  console.log("Sort by date button clicked!");
  var keyA = new Date(a),
    keyB = new Date(b);
  if (keyA < keyB) return 1;
  if (keyA > keyB) return -1; 
  return 0;
}

function sortByName( a, b) {
  console.log("Sort by name button clicked!");
  if (a < b) return 1;
  if (a > b) return -1; 
  return 0;
}; 

export default Login;
