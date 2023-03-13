import style from "./Home.module.scss";
import NavBar from "../../components/navBar/NavBar";
import AllCards from "../../components/allCards/AllCards";
import Loader from "../../components/loader/loader";
import FilterDogs from "../../components/filterDogs/FilterDogs";

import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, loaderHandler } from "../../redux/actions";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function Home() {
  // redux state-------------------------------
  const dispatch = useDispatch();
  let allDogs = useSelector((state) => state.allDogs);
  const loader = useSelector((state) => state.loader);
  let filteredDogs = useSelector((state) => state.filteredDogs);
  // let filteredDogsWeight = useSelector((state) => state.filteredDogsWeight);
  // redux state-------------------------------

  // if (filteredDogsWeight.length>0) allDogs = filteredDogs;
  if (filteredDogs.length>0) allDogs = filteredDogs;

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

  // const navigate = useNavigate()
  // console.log(filteredDogsWeight)
  return (
    <div className={style.container}>
      {loader ? (
        <Loader />
      ) : (
        <div>
          {allDogs.length ? (
            <div>
              <NavBar paginate={paginate} />
              <FilterDogs paginate={paginate} />
              <Link to="/create">
                <button>create</button>
              </Link>
              <AllCards
                postsPerPage={postsPerPage}
                allDogs={allDogs}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                paginate={paginate}
              />
            </div>
          ) : // navigate("/error")
          null}
        </div>
      )}
    </div>
  );
}
