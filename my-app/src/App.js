import "./App.css";
import CreateBook from "./components/CreateBook";
import BooksList from "./components/BookList";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <BooksList />
        </Route>
        <Route exact path="/create">
          <CreateBook />
        </Route>
      </Router>
    </div>
  );
}

export default App;
