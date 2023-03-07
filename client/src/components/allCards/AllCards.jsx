import style from "./AllCards.module.scss";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

export default function AllCards({
  postsPerPage,
  allDogs,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  return (
    <div className={style.container}>
      <div className={style.gridContainer}>
        {postsPerPage &&
          postsPerPage.map((dog) => {
            return (
              <div key={dog.id}>
                <Card
                  name={dog.name}
                  image={dog.image.url}
                  temperament={dog.temperament}
                  weight={dog.weight}
                />
              </div>
            );
          })}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        paginate={paginate}
        allDogs={allDogs}
      />
    </div>
  );
}
