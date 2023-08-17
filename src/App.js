import React from "react";
import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            id: "asdfq",
            label: "can I use react in a project?",
            content: "I sure can use react"
        },
        {
            id: "asdfh",
            label: "can I use js in a project?",
            content: "I sure can use js"
        },
        {
            id: "asdfg",
            label: "can I use css in a project?",
            content: "I sure can css on any project you want"
        }
    ];

    return (
    <div>
        <Accordion items={items} /> 
    </div>
   ) 
}

export default App;