import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ToDoItem from "./ToDoItem"
import style from "./style.css";
import ContactCard from "./ContactCard";
import Joke from "./Joke"
import todosData from "./todosData"


const todoItems = todosData.map(item => <ToDoItem key={item.id} item={item}/>)


function MyApp() {
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
    </div>
  )
}

export default MyApp