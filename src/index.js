import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizza/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizza/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizza/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizza/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizza/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizza/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// Components / Können auch als Arrow Funktions geschriebene werden
function Header() {
  const style = {};
  return (
    <header className="header footer">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {


  
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul>
        {pizzaData.map((pizza) => (
          // A unique key is needed when lists are used
        <Pizza pizzaObj={pizza} key={pizza.name}/>
        ))}
      </ul>


      {/* <Pizza
        // Props:
        name="Pizza Spinaci"
        ingredients="Tomato, mozzarella, Spinach and ricotta"
        photoName="pizza/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, Mozzarella, Mushrooms"
        price={12}
        photoName="pizza/funghi.jpg"
      /> */}
    </main>
  );
}

//components in React sind Funktionen mit einem Großbuchstaben
// die Funktion gibt ein Markup zurück (JSX)
function Pizza(props) {
  // die o.g. Props werden übergeben und ausgegeben
  //console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry, we're closed");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.We're currently open!
    </footer>
    // );
    // ohne JSX geschrieben
    // return React.createElement("footer", null, "We're currently now open");
  );
}

// React Version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
