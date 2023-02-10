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

  handleZpravaClick = zprava => {
    this.setState({
      selectedZprava: zprava
    })
    console.log("zpravaID", zprava.id)
  }
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
    const { zpravy, isLoaded } = this.state;
        console.log("hello", this.state, "isLoaded", isLoaded);

    return (
      <BrowserRouter>
        <NavBar isLoaded={isLoaded} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Zpravy zpravy={zpravy} isLoaded={isLoaded} key={zpravy.id}/>
            }
          />
          <Route
            exact
            path="/zpravy/:id"
            element={<ZpravaPage zpravy={zpravy} id={zpravy.id} isLoaded={isLoaded} />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
