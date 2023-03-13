import style from "./DetailsPage.module.scss";
import Loader from "../../components/loader/loader";
import NavBar from "../../components/navBar/NavBar";
import Error from "../../components/error/Error";

import { weightInputHandler, heightInputHandler } from "../../helpers";

import { useEffect } from "react";

import {  useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getDogDetails, loaderHandler } from "../../redux/actions";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dogDetail);
  const loader = useSelector((state) => state.loader);
  const ups = useSelector((state) => state.error);

  const { idRaza } = useParams();

  useEffect(() => {
    dispatch(loaderHandler(true));
    dispatch(getDogDetails(idRaza));
  }, [dispatch, idRaza]);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div>
          {Object.keys(dog).length ? (
            <div>
              <NavBar />
              <div className={style.containerAll}>
                <div className={style.containerBoxes}>
                  <div className={style.containerText}>
                    <h1 className={style.title}>{dog[0].name}</h1>
                    <span>
                      <div></div> <b>ID:</b> {dog[0].id}
                    </span>
                    <span className={style.lifeTime}>
                      <div></div> <b>Life time:</b> {dog[0].lifeTime}
                    </span>
                    <span className={style.weight}>
                      <div></div> <b>Weight: </b>{" "}
                      {weightInputHandler(dog[0].weight)}
                    </span>
                    <span className={style.height}>
                      <div></div> <b>Height: </b>{" "}
                      {heightInputHandler(dog[0].height)}
                    </span>
                    <span className={style.temperament}>
                      <div></div> <b>Temperament:</b> <br />{" "}
                      {dog[0].temperament}
                    </span>
                  </div>
                  <img className={style.img} src={dog[0].image.url} alt="" />
                </div>
              </div>
            </div>
          ) : (
            <Error manageError={ups} />
          )}
        </div>
      )}
    </div>
  );
}
