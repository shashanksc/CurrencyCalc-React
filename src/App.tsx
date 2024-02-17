import React from "react";
import Header from "./components/Header/Header";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";

function App() {
 // Access theme and toggleTheme from the context

  return (
    <div>
     <Header />
      <CurrencyConverter />
       </div>
  );
}

export default () => (
  
    <App />
 
);
