import React, {useReducer} from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes/router';
import Navbar from './Components/Navbar';
import './App.css';
import { initial, News, reducer } from './theme/reducer'

function App() {
  const Route = useRoutes(routes)
  const [news] = useReducer(reducer, initial)
  return (
    <>
      <Navbar />
      <main>
        <News.Provider value={news}>
          {Route}
        </News.Provider>
      </main>
    </>
  );
}

export default App;
