import { FcNext, FcPrevious } from "react-icons/fc";
import DivButton from "./style"

const Buttons = ({ setCurrentPage, maxPages, currentPage }) => {
  const previusPage = () => {
    if (currentPage >= 1) setCurrentPage(currentPage - 1);
  }

  const nextPage = () => {
    if (currentPage < maxPages) setCurrentPage(currentPage + 1);
  }

  return (
    <DivButton>
      {currentPage > 1 ? <button onClick={previusPage}><FcPrevious /></button> : <></>}
      <p>{currentPage}</p>
      {currentPage === maxPages ? <></> : <button onClick={nextPage}><FcNext /></button>}
    </DivButton>
  )
}

export default Buttons