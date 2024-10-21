import { useState, useEffect } from 'react';
import './App.css';

// Define AdminPanel component
function AdminPanel() {
  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Welcome, Admin!</p>
    </div>
  );
}

// Define LoginForm component
function LoginForm() {
  return (
    <div>
      <h2>Login Form</h2>
      <p>Please log in to access the admin panel.</p>
    </div>
  );
}

// Define the Profile component with useEffect
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  // useEffect hook to perform side effects
  useEffect(() => {
    console.log('Profile component rendered or updated');
  }, []); // Empty array means this runs only once, when the component mounts

  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

// Define ShoppingList component
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen',
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

// Define MyButton component that shares the count state
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

// Main App Component (Now using shared count state for both buttons)
export default function App() {
  const [count, setCount] = useState(0); // Shared state for the buttons

  function handleClick() {
    setCount(count + 1); // Increment count and update both buttons
  }

  const isLoggedIn = false; // Change this value to test the conditional rendering

  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div>
      {/* Conditional rendering between AdminPanel and LoginForm */}
      {content}

      {/* Render the Profile component */}
      <Profile />

      {/* Shared count state for both buttons */}
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />

      {/* Render the ShoppingList component */}
      <ShoppingList />
    </div>
  );
}
