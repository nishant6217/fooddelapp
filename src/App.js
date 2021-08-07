import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Cart from "./component/cart/Cart";
import DetailView from "./component/itemDetail/DetailView";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/restro/:id" component={DetailView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
