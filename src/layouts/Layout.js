import React from "react";

import Header from "./Header.js";

export default function Layout(){
    return (
        <div>
            <Header />
                {this.props.children}
        </div>
    )
}