import React from 'react';
import ReactDOM from 'react-dom';
import { Name } from "./components/Name";
import { Last_name } from "./components/Last_name";
import './css/main.css';

ReactDOM.render(<Name name="Sarah" />, document.getElementById('name'));
ReactDOM.render(<Last_name last_name="Connor" />, document.getElementById('last_name'));