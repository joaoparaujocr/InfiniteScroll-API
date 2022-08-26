import { useState, useEffect } from 'react';
import './App.css';
import ListCard from './components/ListCard';
import api from './services/api';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [listCharacter, setListCharacter] = useState([]);
  const [maxPages, setMaxPages] = useState(1);

  const loadCharacters = () => {
    api.get("character", {
      params: {
        page: currentPage
      }
    })
    .then(({ data }) => {
      setListCharacter(listPrevious => [...listPrevious, ...data.results])
      setMaxPages(data.info.pages)
    })
    .catch(err => console.log("pagina acabou"))
  }

  const handleScroll = e => {
    console.log("top: ", e.target.documentElement.scrollTop);
    console.log("window: ", window.innerHeight)
    console.log("heigth: ", e.target.documentElement.scrollHeight)

    if (window.innerHeight + e.target.documentElement.scrollTop >= e.target.documentElement.scrollHeight) {
      setCurrentPage(pageActual => pageActual + 1);
    }
  } 

  useEffect(() => {
    if (!(currentPage > maxPages)) loadCharacters()
    
    window.addEventListener("scroll", handleScroll)
  }, [currentPage]);



  return (
    <div className="App">
      <h1>Meus Personagens</h1>
      <ListCard listCharacter={listCharacter} />
    </div>
  );
}

export default App;
