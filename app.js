import  React from "react";
import ReactDOM from"react-dom/client"

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
// const parent=React.createElement('Div',
// {id:'parent'},[
// React.createElement('Div',{id:'child1'},
// [React.createElement('h1',{},"i m h1"),
// React.createElement('h2',{},"i m h2")]),
// React.createElement('Div',{id:'child2'},
// [React.createElement('h1',{},"i m  maDHU"),
// React.createElement('h2',{},"PAT")])
// ]);





// const heading=React.createElement('h1',{id:'heading'},"hello world from react");


// REACT ELEMENT
// const jsxHeading = (<h1 id="jsxHeading" tabIndex="7">twinkle</h1>)
// console.log(heading)
// const root=ReactDOM.createRoot(document.querySelector('#root'));
// console.log(root)
// root.render(jsxHeading);
// console.log(jsxHeading);


// JSX(code is transpiled before reaches JS engine) this is done by PARCEL-babel
// transpiled means this code is converting to the code that browser/react understands

// jsx =>bable transpiled to React.createElement =>js object =>html element(render)





// REACT COMPONENT 
// 2 ways to write REACT COMPONENT
// 1-class based components-old
// 2-functional components-new

// REACT ELEMENT
// const heading=<h1 >react element</h1>
const root=ReactDOM.createRoot(document.querySelector('#root'));

// root.render(heading)
// console.log(heading)

// REACT FUNCTIONAL COMPONENT
// const Head1=()=>{return(

//  <div>
//    <h1> functional component</h1>
// </div>
// )}


// root.render(<Head1/>)


// COMPONENT COMPOSITION

// const Head1=()=><h1>first component</h1>


// const Head2=()=>{return(

//     <div>
//         <Head1/>
//       <h1> second  component</h1>
//    </div>
//    )}
   
   
//    root.render(<Head2/>)




// ADDING ELEMENT JS IN COMPONENET



const Head2=()=>{return(

    <div>
        
      <h1> second  component</h1>
   </div>
   )}

const head1=(
    <div>
    {Head2()}
<Head2></Head2>
    <Head2/>
<h1>first component</h1></div>)


   
   
   root.render(head1)

