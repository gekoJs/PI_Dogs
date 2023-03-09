import style from "./Home.module.scss";
import NavBar from "../../components/navBar/NavBar";
import AllCards from "../../components/allCards/AllCards";
import Loader from "../../components/loader/loader";
// import Error from "../../components/error/Error";

import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, loaderHandler } from "../../redux/actions";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  // redux state-------------------------------
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const loader = useSelector((state) => state.loader);

  // redux state-------------------------------

  //   pagination------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * 8;
  const firstPostIndex = lastPostIndex - 8;
  const postsPerPage = allDogs.slice(firstPostIndex, lastPostIndex);
  const paginate = (page) => {
    setCurrentPage(page);
  };
  //   pagination------------------------------

  useEffect(() => {
    dispatch(loaderHandler(true));
    dispatch(getAllDogs());
  }, [dispatch]);

  const navigate = useNavigate()

  return (
    <div className={style.container}>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <NavBar paginate={paginate} />
          {allDogs.length ? (
            <AllCards
              postsPerPage={postsPerPage}
              allDogs={allDogs}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              paginate={paginate}
            />
          ) : (
            navigate("/error")
          )}
        </div>
      )}
    </div>
  );
}
