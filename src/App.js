import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="text-3xl">
        <Body />
      </div>
    </Provider>
  );
}

export default App;