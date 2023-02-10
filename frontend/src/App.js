import "./App.css";
import React, { Component } from "react";
import Zpravy from "./components/Zpravy";
import ZpravaPage from "./components/ZpravaPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { NavBar } from "./components/NavBar";

class App extends Component {
  state = {
    zpravy: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/wp-json/wp/v2/zpravy")
      .then((res) =>
        this.setState({
          zpravy: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    console.log("hello", this.state);
    const { zpravy, isLoaded } = this.state;
    return (
      <BrowserRouter>
        <NavBar isLoaded={isLoaded} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Zpravy zpravy={zpravy} isLoaded={isLoaded} key={zpravy.id} />
            }
          />
          <Route
            exact
            path="/zpravy/:id"
            element={<ZpravaPage zpravy={zpravy} isLoaded={isLoaded} />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
