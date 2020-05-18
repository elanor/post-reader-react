### post-reader-react: 

A simple post reader has login window with email and name. When submitted, new token is received via API, and posts are being displayed. Lifetime of every token is limited to 1 hour.

<div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

### Live here: 

## Features

Task

Create a simple post reader as a React SPA.
Implement above using React components and CSS3.
Retrieve the data shown in the app from the API described below.
Concentrate on functionality, code quality and testability, not appearance.
Any common state management, routing and/or testing library can be used.
Using CSS toolkits and UI frameworks (bootstrap etc) is not ok. The purpose is to evaluate your coding skills, not npm skills.

Must haves:

Login Screen with email and name inputs.
Sender list with sender name and post count ordered by name alphabetically.
Clicking on a sender opens that sender's posts in the post list view.
Post list where posts are ordered by creation time.
Post order buttons to allow choosing most recent first and most recent last ordering for posts list

Nice to haves:

Search box for senders. Any senders whose name do not contain the text entered are hidden
Search box for posts. Any posts that do not contain the text entered are hidden
Deep-linkable post list. This means that it is possible to enter a URL that directly selects the sender whose posts are shown.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

_Node.JS and npm must be installed. Download and install them from [here](https://nodejs.org)._

### Installing

Follow these steps to run this project in your local computer.

```
$ https://github.com/elanor/post-reader-react.git
$ cd post-reader-react
$ npm i
```

Now, to run both the project on port `3000`, run:

```
$ npm start
```

Go to `http://localhost:3000` to view the app.

## Built With

- [React.JS](https://reactjs.org/) -Frontend library used in the project.
- [Supermetrics API](https://supermetrics.com/docs/product-api-getting-started/) - Used for fetching data.

## Authors

- **Marina Layus** - [elanor](https://github.com/elanor)

## License

This project is licensed under the MIT License.