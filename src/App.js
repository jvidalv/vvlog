import React from "react";
import { initialState, reducer } from "./reducers/Global";
import { StateProvider } from "./contexts/Global";
import WebFont from "webfontloader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/#generic.css";

import Index from "./pages/Index";

function App() {
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
