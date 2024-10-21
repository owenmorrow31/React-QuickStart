import { useState } from 'react';
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

// Define the Profile component
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
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

// Define MyButton component with state for individual counters
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

// Main App Component
export default function App() {
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

      {/* Render multiple MyButton components with independent state */}
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />

      {/* Render the ShoppingList component */}
      <ShoppingList />
    </div>
  );
}
