import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function MyApp() {
    return (
      <div>
        <input type="checkbox" />
        <p>Placeholder txt here</p>

        <input type="checkbox" />
        <p>Placeholder txt here</p>

        <input type="checkbox" />
        <p>Placeholder txt here</p>

        <input type="checkbox" />
        <p style={{color: "#FF8C00", backgroundColor: "#555", fontSize: 24}}>Placeholder txt here</p>

        <Header />
        <Main />
        <Footer />
      </div>
      )
  }

  export default MyApp