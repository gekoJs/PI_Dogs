import style from "./Pagination.module.scss";
import { useState } from "react";

export default function Pagination({
  allDogs,
  currentPage,
  setCurrentPage,
  paginate,
}) {
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(allDogs.length / 8); i++) {
    pages.push(i);
  }

  const nextHandlerBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const prevHandlerBtn = () => {
    if (currentPage === 1) {
      return null;
    } else setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let dotsIncrement;
  if (pages.length > maxPageNumberLimit) {
    dotsIncrement = (
      <li onClick={nextHandlerBtn} className={`${style.dotsContainer}`}>
        <span className={style.dots}></span>
        <span className={style.dots}></span>
        <span className={style.dots}></span>
      </li>
    );
  }
  
  let dotsDecrement;
  if (minPageNumberLimit >= 1) {
    dotsDecrement = (
      <li onClick={prevHandlerBtn} className={`${style.dotsContainer}`}>
        <span className={style.dots}></span>
        <span className={style.dots}></span>
        <span className={style.dots}></span>
      </li>
    );
  }

  return (
    <div>
      {pages.length > 1 ? (
      <ul className={style.paginationContainer}>

        <li className={`${style.paginationLi} ${style.prev}`}>
          <button onClick={prevHandlerBtn}>Prev</button>
        </li>

        {dotsDecrement}

        {pages.map((i) => {
          if (i < maxPageNumberLimit + 1 && i > minPageNumberLimit) {
            return (
              <li
                key={i}
                className={`${style.paginationLi} ${
                  currentPage === i ? style.active : null
                }`}
              >
                <button onClick={() => paginate(i)}>
                  {i < 10 ? `0${i}` : i}
                </button>
              </li>
            );
          } else return null;
        })}

        {dotsIncrement}

        <li className={`${style.paginationLi} ${style.next}`} onClick={nextHandlerBtn}>
          <button
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
      ) : null}
    </div>
  );
}
