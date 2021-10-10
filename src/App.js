import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";
import NotFound from "./components/NotFound/NotFound";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Login from "./components/Login/Login";

function App() {
    return (
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path="/">
                    <Shop></Shop>
                </Route>
                <Route path="/shop">
                    <Shop></Shop>
                </Route>
                <Route path="/review">
                    <OrderReview></OrderReview>
                </Route>
                <Route path="/inventory">
                    <Inventory></Inventory>
                </Route>
                <Route path="/placeOrder">
                    <PlaceOrder></PlaceOrder>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
