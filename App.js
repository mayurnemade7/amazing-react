/**
 * <div id="parent">
 *      <div="child1">
 *          <h1>i am h1 tag</h1>
 *          <h2>i am h2 tag</h2>
 *      </div>
 *      <div="child2">
 *          <h1>i am h1 tag</h1>
 *          <h2>i am h2 tag</h2>
 *      </div>
 * </div>
 */


// const heading = React.createElement(
//     "h1", 
//      {id:"heading", abc:"xyz"}, 
//      "hello world from react");
import React from 'react'
import ReactDOM from 'react-dom'
const heading = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div",
            { id: "child1" },
            [
                React.createElement("h1", {}, "I am h1 tag"),
                React.createElement("h2", {}, "I am h2 tag")
            ]
        ),
        React.createElement("div",
            { id: "child2" },
            [
                React.createElement("h1", {}, "I am h1 tag"),
                React.createElement("h2", {}, "I am h2 tag")
            ]
        )
    ]
)

console.log(heading)
const root1 = ReactDOM.createRoot(document.getElementById("root"))
root1.render(heading)