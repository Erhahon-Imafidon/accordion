import { useState, useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

type Data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
        console.log('Data fetched: ', response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h2>Returned Data</h2>
        {data &&
          Array.isArray(data) &&
          data.map((item: Data) => {
            const { id, title, body } = item;

            return (
              <div key={id} className="card">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
