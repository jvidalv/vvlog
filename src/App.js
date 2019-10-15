import React from "react";
import { StateProvider } from "./contexts/Globals";
import WebFont from "webfontloader";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/generic.css";

import Index from "./pages/Index";

function App() {
  const initialState = {
    theme: "dark"
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "changeTheme":
        return {
          ...state,
          theme: action.newTheme
        };

      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Index />
    </StateProvider>
  );
}

WebFont.load({
  google: {
    families: ["IBM Plex Mono:200"]
  }
});

export default App;
