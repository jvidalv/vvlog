import React from "react";
import {initialState, reducer} from "./reducers/Global";
import {StateProvider} from "./contexts/Global";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/#generic.css";

import Index from "./pages/Index";

function App() {
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Index/>
        </StateProvider>
    );
}

export default App;
