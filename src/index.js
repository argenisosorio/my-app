import React from 'react';
import ReactDOM from 'react-dom';
import { Name } from "./components/Name";
import { Last_name } from "./components/Last_name";
import { Example } from "./components/Example";
import './css/main.css';

ReactDOM.render(<Name name="Sarah" />, document.getElementById('name'));
ReactDOM.render(<Last_name last_name="Connor" />, document.getElementById('last_name'));

// Another example of props

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Oliver Bierhoff',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

ReactDOM.render(
  <Example
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('example')
);