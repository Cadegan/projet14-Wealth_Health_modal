import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Router from "./Router";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
