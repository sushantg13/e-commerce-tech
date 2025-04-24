import { useState, useEffect } from 'react';
import './App.css';
import Category from "./components/Category";

function App() {
  
  const [results, setResults] = useState([]);

  useEffect(() => {
    // this is an asynchronous call so the return value is actually a promise
    fetch("http://localhost:3001/categories")
      .then(response => response.json()) 
      .then(data => {
        console.log(data); 
        setResults(data); 
      });
  }, []);

  const renderCategories = () => {
    return (
      results.map( (c) => <Category key={c.id} title={c.title}/>)
    );
  }

 
  return (
    <>
      <header>My Store</header>
      
      <section>
        <nav>
        {results && renderCategories()}
        </nav>

        <article>
          Main Area
        </article>
        <footer>Footer</footer>
      </section>
    </>
  );
}

export default App
