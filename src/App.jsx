import { useState, useEffect } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import ListCard from './components/ListCard';
import api from './services/api';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [listCharacter, setListCharacter] = useState([]);
  const [maxPages, setMaxPages] = useState(0);

  useEffect(() => {
    api.get("character", {
      params: {
        page: currentPage
      }
    }).then(res => {
      if (res.status >= 200 && res.status <= 300) {
        setMaxPages(res.data.info.pages);
        setListCharacter(res.data.results);
      }
    })
  }, [currentPage]);

  return (
    <div className="App">
      <h1>Meus Personagens</h1>
      <ListCard listCharacter={listCharacter} />
      <Buttons setCurrentPage={setCurrentPage} maxPages={maxPages} currentPage={currentPage} />
    </div>
  );
}

export default App;
