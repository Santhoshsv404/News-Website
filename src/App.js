
import './App.css';
import News from './News';
import { useEffect, useState } from 'react';

function App() {
  let [todayNews, setNews] = useState([]);
  let [search, setSearch] = useState("bitcoin"); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=8da041e0808748c795d5db6a509c1de3`);
        if (response.ok) {
          const data = await response.json();
          console.log(data.articles);
          setNews(data.articles);
        } else {
          console.error(`Error ${response.status}: ${response.statusText}`);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [search]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODAY NEWS</h1>
        <input
          className='searchbox'
          type="text"
          placeholder='Search news'
          onChange={(event) => {
            setSearch(event.target.value || 'bitcoin'); 
          }}
        />
      </header>

      <section className='news-list'>
        {todayNews.length > 0 ? (
          todayNews.map((article, index) => (
            <News key={index} article={article} />
          ))
        ) : (
          <p>No news found</p>
        )}
      </section>
    </div>
  );
}

export default App;
