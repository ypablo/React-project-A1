import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ToDoItem from "./ToDoItem"
import style from "./style.css";
import ContactCard from "./ContactCard";

function MyApp() {
    return (
      <div>
        <todo className="todo-list">
          <ToDoItem/>
          <ToDoItem/>
          <ToDoItem/>
          <ToDoItem/>
        </todo>
        <ContactCard/>
        <Header />
        <Main />
        <Footer />
      </div>
      )
  }

  export default MyApp