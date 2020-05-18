import React from "react";
import "./Posts.css";


class PostsButton extends React.Component {
  constructor() {
    super();
    this.state = {
      from_name: [],
      from_id: [],
      message: [],
      created_time: [],
      posts: undefined
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("the Posts Button is clicked!");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    

    fetch(
      `https://api.supermetrics.com/assignment/posts?sl_token=${this.props.token}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {

        this.setState({
          from_name: result.data.from_name,
          from_id: result.data.from_id,
          message: result.data.message,
          created_time: result.data.created_time,
        });
        
/* 
        let time = this.state.created_time
        let id = this.state.from_id
        let message = this.state.message
        let name = this.state.from_name */
        console.log(result);
      })
      .then(response => {
        response.message.sort((a, b) => {
          var keyA = new Date(a.created_time),
            keyB = new Date(b.created_time);
          if (keyA < keyB) return 1;
          if (keyA > keyB) return -1; 
          return 0;
        }); 
        })
        .then(response => {
            response.from_name.sort((a, b) => {
              if (a < b) return 1;
              if (a > b) return -1; 
              return 0;
            }); 
            })
        
      /* .sort((a,b)=> a.from_name > b.from_name */
      .catch((error) => console.log("error", error));
  }

  render() {
      
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Test posts reader</button>
        </form>

        <section>
          <h1>Users</h1>
          <ul>
            <li>
              {this.state.from_id}
            </li>
          </ul>
        </section>
        <section>
          <h1>Posts</h1>
          <ul>
            <li>
              {this.state.created_time}
              <br />
              {this.state.message}
            </li>
          </ul>
        </section>
      </div>
    );
  }
};
    
  

  export default PostsButton;