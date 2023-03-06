import style from "./Home.module.scss";
import NavBar from "../../components/navBar/NavBar";
import AllCards from "../../components/allCards/AllCards"

import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from "../../redux/actions";

import { useEffect, useState } from "react";

export default function Home() {
// redux state-------------------------------
const dispatch = useDispatch();
const allDogs = useSelector((state) => state.allDogs);
// redux state-------------------------------

//   pagination------------------------------
const [currentPage, setCurrentPage] = useState(1);
const lastPostIndex = currentPage * 8;
const firstPostIndex = lastPostIndex - 8;
const postPerPage = allDogs.slice(firstPostIndex, lastPostIndex)
//   pagination------------------------------

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <NavBar />
      <AllCards allDogs={postPerPage}/>
    </div>
  );
}
