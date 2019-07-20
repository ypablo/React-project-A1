import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ToDoItem from "./ToDoItem"
import style from "./style.css";
import ContactCard from "./ContactCard";
import Joke from "./Joke"
import todosData from "./todosData"
import App from "./App"
import API from "./API"
import Forms from "./Forms"
import Forms2 from "./Forms2"

class MyApp extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodo = prevState.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
      return { todos: updatedTodo }
    });

  }

  render() {
    const todoItems = todosData.map(item =>
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />)

    return (
      <div>
        <Header />
        <todo className="todo-list">
          {todoItems}
        </todo>
        <ContactCard contact={{ name: "Mr. Whitaker", imgUrl: "http://placekitten.com/300/190", phone: "44 111 333 555", email: "whitaker@catnip.com" }} />
        <ContactCard contact={{ name: "Ms. Smith", imgUrl: "http://placekitten.com/300/150", phone: "44 222 444 888", email: "smith@catnip.com" }} />
        <ContactCard contact={{ name: "Mr. Bond", imgUrl: "http://placekitten.com/300/175", phone: "44 777 999 000", email: "bond@catnip.com" }} />
        <Joke joke={{ question: "What did one wall say to the other wall?", punchline: "Let's, uh, meet up in the corner." }} />
        <Joke joke={{ question: "Why was the office of cantaloupes so glum?", punchline: "Because they were melon-colleagues." }} />
        <Joke joke={{ question: "When I found out my toaster wasn't waterproof...", punchline: "I was shocked!" }} />
        <Main />
        <Footer />
        <App />
        <API />
        <Forms />
        <Forms2 />
      </div >
    )
  }
}

export default MyApp