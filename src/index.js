import { BrowserRouter } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import './index.css';
import {MyContext} from './context'
import TodoContainer from "./components/TodoContainer"

const element = <h1>Hello from Create React App</h1>

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

