Day 1: JSX, Components, and Props (In-Depth Guide)
Today, you'll focus on JSX, Components, and Props—the core building blocks of React.

1️⃣ Understanding JSX (JavaScript XML)
What is JSX?
JSX is a syntax extension for JavaScript that allows you to write HTML inside JavaScript. It makes it easier to visualize UI components.

✅ Example Without JSX:

const element = React.createElement('h1', {}, 'Hello, React!');
✅ Example With JSX:


const element = <h1>Hello, React!</h1>;
JSX is not HTML; it's converted into React.createElement() behind the scenes.

Why Use JSX?
Improves Readability: Looks like HTML, making UI code easier to understand.

Binds JavaScript & UI Together: You can insert JavaScript expressions using {}.

Prevents XSS Attacks: JSX escapes values before rendering.

✅ Embedding JavaScript in JSX

jsx
Copy
Edit
const name = "Saad";
const element = <h1>Hello, {name}!</h1>; 
✅ JSX Supports Expressions, Not Statements
This works:

jsx
Copy
Edit
const age = 20;
const message = <p>{age > 18 ? "Adult" : "Minor"}</p>;
This doesn't (because if is a statement, not an expression):

jsx
Copy
Edit
const message = <p>{if (age > 18) "Adult"}</p>; ❌
2️⃣ Components in React
React is component-based, meaning UI is broken into small, reusable pieces.

Types of Components
✅ 1. Functional Components (Preferred in Modern React)

Simple JavaScript functions that return JSX.

jsx
Copy
Edit
function Greeting() {
  return <h1>Hello, Saad!</h1>;
}
✅ 2. Class Components (Older React, Uses Lifecycle Methods)

jsx
Copy
Edit
class Greeting extends React.Component {
  render() {
    return <h1>Hello, Saad!</h1>;
  }
}
👉 Functional components with Hooks replaced class components in modern React.

✅ Rendering a Component in React

jsx
Copy
Edit
import React from "react";
import ReactDOM from "react-dom";

function Welcome() {
  return <h1>Welcome to React!</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Welcome />);
3️⃣ Props (Passing Data to Components)
Props (short for properties) allow you to pass data from parent to child components.

Example: Passing Props to a Component
jsx
Copy
Edit
function User(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <User name="Saad" />;
}
✅ Props Are Read-Only (Immutable)
You cannot modify props inside a component.

✅ Using Destructuring in Props
Instead of props.name, you can directly destructure:

jsx
Copy
Edit
function User({ name }) {
  return <h1>Hello, {name}!</h1>;
}
✅ Passing Multiple Props

jsx
Copy
Edit
function Profile({ name, age }) {
  return <p>{name} is {age} years old.</p>;
}

function App() {
  return <Profile name="Saad" age={21} />;
}
✅ Passing Objects as Props

jsx
Copy
Edit
const user = { name: "Saad", age: 21 };

function Profile({ user }) {
  return <p>{user.name} is {user.age} years old.</p>;
}

function App() {
  return <Profile user={user} />;
}
4️⃣ Hands-on Task: Create a Profile Card Component
Goal: Build a reusable ProfileCard component that displays a user's name, bio, and image.
Step 1: Create ProfileCard.js
jsx
Copy
Edit
import React from "react";

function ProfileCard({ name, bio, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;
Step 2: Use ProfileCard in App.js
jsx
Copy
Edit
import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <ProfileCard 
        name="Saad Bin Sharif" 
        bio="Frontend Developer | React Enthusiast" 
        image="https://via.placeholder.com/150" 
      />
    </div>
  );
}

export default App;
Step 3: Add Some CSS in index.css
css
Copy
Edit
.card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  width: 250px;
  text-align: center;
}

.card img {
  width: 100px;
  border-radius: 50%;
}
✅ What You Learned:

How to create a reusable component.

How to pass props dynamically.

How to structure a basic React component.

5️⃣ Summary of Day 1
✅ JSX: JSX is syntactic sugar for React.createElement().
✅ Components: Functional components are the standard approach.
✅ Props: Allow passing data to components, but they are immutable.
✅ Hands-on Practice: You built a ProfileCard component!

Next Steps: Day 1 Challenges 🚀
1️⃣ Modify ProfileCard to accept an array of skills and display them as a list.
2️⃣ Pass a dynamic background color as a prop and use inline styles to apply it.
3️⃣ Build a Button component that accepts text and a onClick function as props.


--------------------------------------------------------------------------------------
