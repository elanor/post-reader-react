import React from "react";
import "./Login.css";

const Login = (props) => <LoginContainer />;

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      sl_token: "",
      posts: undefined,
      from_id: [],
      from_name: [],
      created_time: [],
      message: [],
    };

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

    /* fetch("https://api.supermetrics.com/assignment/register?", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("response", result);
        console.log("token", result.data.sl_token);
        this.setState({ sl_token: result.data.sl_token });
      return fetch(
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
            console.log("result data: " + result.data);
            console.log(result);
          })
      })
     
      .catch((error) => console.log("error", error)); */

    //what Nikita suggested:

    fetch("https://api.supermetrics.com/assignment/register?", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("response", result);
        console.log("token", result.data.sl_token);
        this.setState({ sl_token: result.data.sl_token });
        return fetch(
          `https://api.supermetrics.com/assignment/posts?sl_token=${this.state.sl_token}`,
          getOptions
        );
        })
        .then((response) => response.json())
        .then((result) => {
          this.setState({
            posts: result.data.posts,
            from_name: result.data.from_name,
          });
         /*  this.state.posts(from_name).sort();
          var from_name_sorted =  this.state.from_name.toString(); */

          var obj = [...this.state.posts];
          obj.sort((a,b) => a.from_name - b.from_name);
          obj.map((item, i) => (<div key={i}> {item.matchID}  
                      {item.timeM} {item.description}</div>))
          var from_name_sorted =  obj.toString();
          //this.state.posts.sort((a, b) => a.from_name.localeCompare(b.from_name))
          console.log("from_name sorted: " + from_name_sorted)
          console.log(result);
        })
        .catch((error) => console.log("error", error));
    return this.state.posts;
  }

  render() {
    const { posts, email, name } = this.state;

    if (posts) return <Posts posts={posts} />;
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

const Posts = ({ posts }) => (
  <div className="large-container">

      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
   {/*  <div className="createdAt_copy">
     
      <div >
        {posts.map((post) => (
          <PostUsers key={post.id} {...post} />
        ))}
      </div>
      <div >
        {posts.map((post) => (
          <PostMessages key={post.id} {...post} />
        ))}
      </div>
    </div> */}
{/* 
    <div id="postsMessagesContainer">
      <h1 id="postsHeaderTitle">Posts</h1>
      <div className="posts">
        {posts.map((post) => (
          <PostMessages key={post.id} {...post} />
        ))}
      </div>
    </div> */}
  </div>
);

const Post = ({ from_name, from_id, created_at, message }) => (
  <div className="post">
    <div key={from_id} className="createdAt_copy">
      <section>
        <h4 className="names_id">
          {from_name}, {from_id}
        </h4>

      </section>
      
      <div className="createdAt">
        <h4>
            {new Intl.DateTimeFormat("en-GB", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(created_at)}{" "}
          </h4>
          <p>{message}</p>
      </div>

       
      
    </div>
  </div>
);

/* const PostUsers = ({ from_name, from_id }) => (
  <div className="post">
  
      <div key={from_id}>
        <h5>
        {from_name}, {from_id}
        </h5> 
      </div>
  
  </div>
);

const PostMessages = ({ created_time, message }) => (
  <div className="post">
    <div className="createdAt">
      <h4>
      {new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(created_time)}{" "}
      </h4>
      <p>
      {message}
      </p>
    </div>
  </div>
);
 */
/* const Posts = (props) => (
  <div id="posts">
    <div id="postsUsersContainer">
      <h1 id="postsHeaderTitle">Users</h1>
      <button title="Sort users" type="button" onClick = { (event) => sortByName( props.from_name ) } >By Name</button>
      <ul className="posts-list">
        <li key={props.from_id}>{props.from_name}, {props.from_id}</li>
      </ul>
    </div>
    <div id="postsMessagesContainer">
      <h1 id="postsHeaderTitle">Posts</h1>
      <button title="Sort date" type="button" key={props.from_id} onClick = { (event) => sortByTime( props.created_time ) } >By Time</button>
      <ul className="posts-list">
        <li key={props.from_id}>
          { formatDate( props.created_time ) }
          <br />
          {props.message}
        </li>
      </ul>
    </div>
  </div>
); */

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

/* function sortByTime(a, b) {
  console.log("Sort by date button clicked!");
  var keyA = new Date(a),
    keyB = new Date(b);
  if (keyA < keyB) return 1;
  if (keyA > keyB) return -1;
  return 0;
} */

/* function sortByName(props) {
  console.log("Sort by name button clicked!");
  props.from_name.sort((a, b) => a.from_name.localeCompare(b.from_name));
} */

export default Login;
