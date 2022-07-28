import { useState, useEffect } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import ListCard from './components/ListCard';
import api from './services/api';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [listCharacter, setListCharacter] = useState([]);
  const [numberNextPage, setNumberNextPage]  = useState(currentPage + 1);
  const [maxPages, setMaxPages] = useState(0);

  useEffect(() => {
    api.get("character", {
      params: {
        page: currentPage
      }
    }).then(res => {
      if (res.status >= 200 && res.status <= 300) {
        setMaxPages(res.data.info.pages);
        /* setListCharacter(arr => [...arr, ...res.data.results]); */
        setListCharacter(arr => {
          if (arr.length > 0) {
            const newArr = res.data.results.filter(({ id }) => arr.some(({ id: idResults }) => id !== idResults))
            const arrFilter = arr.filter(({ id }) => !newArr.some(({ id: idNewmArray }) => id === idNewmArray))
            return [...arrFilter, ...newArr]
          }

          return res.data.results
        });
        setNumberNextPage(currentPage + 1);
      }
    })
  }, [currentPage]);

  useEffect(() => {
    api.get("character", {
      params: {
        page: numberNextPage
      }
    }).then(res => {
      if (res.status >= 200 && res.status <= 300) {
        const listNext = res.data.results;
        setListCharacter(arr => arr.filter(({ id }) => !listNext.some(({ id: idResults }) => id === idResults)));
      }
    })
  }, [numberNextPage]);

  return (
    <div className="App">
      <h1>Meus Personagens</h1>
      <ListCard listCharacter={listCharacter} />
      <Buttons setCurrentPage={setCurrentPage} maxPages={maxPages} currentPage={currentPage} />
    </div>
  );
}

export default App;
