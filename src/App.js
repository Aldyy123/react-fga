import React, { useReducer, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes/router';
import Navbar from './Components/Navbar';
import './App.css';
import { initial, News, reducer } from './theme/reducer'
import Skeleton from '@mui/material/Skeleton';

function App() {
  const Route = useRoutes(routes)
  const [news] = useReducer(reducer, initial)
  return (
    <>
      <Navbar />
      <main>
        <News.Provider value={news}>
          <Suspense fallback={<Skeleton />}>
            {Route}
          </Suspense>
        </News.Provider>
      </main>
    </>
  );
}

export default App;
