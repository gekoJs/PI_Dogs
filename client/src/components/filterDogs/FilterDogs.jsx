import style from "./FilterDogs.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  getAllTemperaments,
  filterByTemperament,
  filterByOrigin,
  filterByName,
  filterByWeight,
} from "../../redux/actions";

export default function FilterDogs({ paginate }) {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getAllTemperaments());
  }, [dispatch]);

  const handleFilterByTemperament = (e) => {
    e.preventDefault(e);
    dispatch(filterByTemperament(e.target.value));
    paginate(1);
  };

  const handleFilterByOrigen = (e) => {
    e.preventDefault(e);
    dispatch(filterByOrigin(e.target.value));
    paginate(1);
  };
  const handleFilteredByName = (e) => {
    e.preventDefault(e);
    paginate(1);
    dispatch(filterByName(e.target.value));
  };

  const handleFilteredByWeight = (e) => {
    e.preventDefault(e);
    dispatch(filterByWeight(e.target.value));
    paginate(1);
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Link to="/create">
          <button className={style.button}>Create dog</button>
        </Link>
        <hr />
        <div>
          <h3 className={style.h3}>Filters</h3>
          <select
            className={style.select}
            onChange={(e) => handleFilterByTemperament(e)}
          >
            <option value="All">
              {temperaments.length ? "Sort by temperament" : "Loading..."}
            </option>
            {temperaments &&
              temperaments.map((e) => {
                return (
                  <option key={e.id} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
          </select>

          <select
            className={style.select}
            onChange={(e) => handleFilterByOrigen(e)}
          >
            <option value="All" defaultValue>
              Order by origin
            </option>
            <option value="Created">Created</option>
            <option value="Api">Api</option>
          </select>

          <select
            className={style.select}
            onChange={(e) => handleFilteredByName(e)}
          >
            <option defaultValue>Order by name</option>
            <option value="asc">A-Z</option>
            <option value="dsc">Z-A</option>
          </select>

          <select
            className={style.select}
            onChange={(e) => handleFilteredByWeight(e)}
          >
            <option defaultValue>Order by wieght</option>
            <option value="max">Max</option>
            <option value="min">Min</option>
          </select>
        </div>
      </div>
    </div>
  );
}
