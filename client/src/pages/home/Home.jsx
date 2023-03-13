import style from "./Home.module.scss";
import NavBar from "../../components/navBar/NavBar";
import AllCards from "../../components/allCards/AllCards";
import Loader from "../../components/loader/loader";
import FilterDogs from "../../components/filterDogs/FilterDogs";
import Error from "../../components/error/Error";
import Footer from "../../components/footer/Footer";

import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, loaderHandler } from "../../redux/actions";

import { useEffect, useState } from "react";

export default function Home() {
  // redux state-------------------------------
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loaderHandler(true));
    dispatch(getAllDogs());
  }, [dispatch]);

  let allDogs = useSelector((state) => state.allDogs);
  const loader = useSelector((state) => state.loader);
  const ups = useSelector((state) => state.error);

  // redux state-------------------------------

  let filteredDogs = useSelector((state) => state.filteredDogs);
  if (filteredDogs.length > 0) allDogs = filteredDogs;

  //   pagination------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * 8;
  const firstPostIndex = lastPostIndex - 8;
  const postsPerPage = allDogs.slice(firstPostIndex, lastPostIndex);
  const paginate = (page) => {
    setCurrentPage(page);
  };
  //   pagination------------------------------

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div className={style.container}>
          <div>
            {allDogs.length > 0 ? (
              <div>
                <NavBar currentPage={currentPage} paginate={paginate} />
                <div className={style.flex}>
                  <FilterDogs paginate={paginate} />
                  <AllCards
                    postsPerPage={postsPerPage}
                    allDogs={allDogs}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    paginate={paginate}
                  />
                </div>
                <Footer />
              </div>
            ) : (
              <Error manageError={ups} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
