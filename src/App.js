import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Cart from "./component/cart/Cart";
import DetailView from "./component/itemDetail/DetailView";
import MealDetail from "./component/mealDetail/MealDetail";
import AddOn from "./component/addon/AddOn";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/restro/:id" component={DetailView} />
        <Route exact path="/restro/getmeals/:id" component={MealDetail} />
        <Route exact path="/addon" component={AddOn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
