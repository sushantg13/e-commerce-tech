import { useState, useEffect } from 'react';
import './App.css';

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

 
  return (
    <>
      <header>My Store</header>
      
      <section>
        <nav>
        {
          results.map( (d) => (
            <div key={d.id}>{d.title}</div>
          ))
        }
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
