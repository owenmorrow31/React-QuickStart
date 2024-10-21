import logo from './logo.svg';
import './App.css';



function AdminPanel() {
  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Welcome, Admin!</p>
    </div>
  );
}


function LoginForm() {
  return (
    <div>
      <h2>Login Form</h2>
      <p>Please log in to access the admin panel.</p>
    </div>
  );
}


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


export default function App() {
  const isLoggedIn = false; 

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

      {}
      <ShoppingList />
    </div>
  );
}