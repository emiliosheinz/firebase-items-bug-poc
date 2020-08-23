import React from "react";
import logo from "./logo.svg";
import "./App.css";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCblfNXv4CMPvbakvPA6OBGq1m_Nl75CQM",
  authDomain: "items-poc.firebaseapp.com",
  databaseURL: "https://items-poc.firebaseio.com",
  projectId: "items-poc",
  storageBucket: "items-poc.appspot.com",
  messagingSenderId: "776129288783",
  appId: "1:776129288783:web:a3985667e8b00c6c46a83a",
  measurementId: "G-39PH8YDSEN",
};

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

function App() {
  function fire() {
    analytics.logEvent("add_to_cart", {
      currency: "BRL",
      value: 200,
      items: [
        {
          brand: "ITEM_BRAND",
          category: "IMTEM_CATEGORY",
          name: "ITEM_NAME",
          price: 300,
        },
      ],
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={fire}>FIRE ADD TO CART EVENT</button>
      </header>
    </div>
  );
}

export default App;
