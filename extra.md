JSX is not a pure JavaScript, babel(JavaScript Compiler) converts it into the JavaScript.

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code
inside JavaScript. It is primarily used in React.js to describe the structure of the UI in a way 
that is easy to read and write.

Example:

const element = <h1>Hello, Saad!</h1>;

Why Use JSX?
Easier UI Composition: JSX makes it simple to define UI components in a readable and maintainable way.

JavaScript Power: Since JSX is just syntax sugar for React.createElement(), it allows embedding JavaScript
expressions inside {}.

Prevents Injection Attacks: React escapes values before rendering, preventing XSS attacks.


How JSX Works
JSX is not valid JavaScript by itself, so Babel compiles it into standard JavaScript:

const element = <h1>Hello, Saad!</h1>;

Compiles to:

const element = React.createElement("h1", null, "Hello, Saad!");
This createElement function returns a React element, which is later rendered to the DOM.

JSX Features:

Embedding Expressions:

const name = "Saad";
const element = <h1>Hello, {name}!</h1>;


Using JavaScript Inside JSX:

const numbers = [1, 2, 3, 4];
const listItems = numbers.map(num => <li key={num}>{num}</li>);


Adding Attributes (Using CamelCase for JSX attributes):

const element = <button onClick={handleClick}>Click Me</button>;


Using Components in JSX:

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}


What is Babel?
Babel is a JavaScript compiler that transforms modern JavaScript (ES6+) into older versions (ES5) so that
it can run in all browsers, including older ones. It is widely used in React.js applications to convert JSX
into standard JavaScript.

Why is Babel Used?
JSX to JavaScript: Converts JSX into React.createElement() calls.

ES6+ to ES5: Enables compatibility with older browsers.

Polyfills: Provides support for modern JavaScript features (like Promise, async/await).

Performance Optimization: Helps optimize code for better efficiency.

Example: Babel in Action
JSX Code (Before Babel)

const element = <h1>Hello, Saad!</h1>;

Transpiled JavaScript (After Babel)

const element = React.createElement("h1", null, "Hello, Saad!");
Now, this can run in any browser, even if JSX is not natively supported.