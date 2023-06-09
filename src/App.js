import logo from "./logo.svg";
import "./App.css";
import UsComponent from "./components/UsComponent";
import UsWithObjectComponent from "./components/UsWithObjectComponent";
import UsWithArrayComponent from "./components/UsWithArrayComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseContextComponentA from "./components/UseContextComponentA";
import { createContext } from "react";

export const NameContext = createContext();
export const ChannelContext = createContext();

function App() {
  return (
    <div className="App">
      {/* <UsComponent /> */}
      {/* <UsWithObjectComponent /> */}
      {/* <UsWithArrayComponent /> */}

      {/* <UseEffectComponent /> */}

      <NameContext.Provider value={"My Name is Ahsan Butt"}>
        <ChannelContext.Provider value={"Learning React"}>
          <UseContextComponentA />
        </ChannelContext.Provider>
      </NameContext.Provider>
    </div>
  );
}

export default App;
