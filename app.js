

// <div id="parent">
//     <div id="child">
//        <h1>i am h1</h1>
//        <h2>i am h2</h2>
//     </div>
/*     <div id="child"> */
//        <h1>i am h1</h1>
//        <h2>i am h2</h2>
//     </div>
// </div>
// ReactElement(object)=>HTML(Browser understands)
const parent=React.createElement('Div',
{id:'parent'},[
React.createElement('Div',{id:'child1'},
[React.createElement('h1',{},"i m h1"),
React.createElement('h2',{},"i m h2")]),
React.createElement('Div',{id:'child2'},
[React.createElement('h1',{},"i m h1"),
React.createElement('h2',{},"i m h2")])]
);





const heading=React.createElement('h1',{id:'heading'},"hello world from react");
// console.log(heading)
const root=ReactDOM.createRoot(document.querySelector('#root'));
// console.log(root)
root.render(parent);

// JSX