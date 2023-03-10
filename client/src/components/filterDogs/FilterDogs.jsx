import style from "./FilterDogs.module.scss";
import { useDispatch, useSelector } from "react-redux";
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
    dispatch(filterByName(e.target.value));
    paginate(1);
  };

  const handleFilteredByWeight = (e) => {
    e.preventDefault(e);
    dispatch(filterByWeight(e.target.value));
    paginate(1);
  };
  return (
    <div className={style.container}>
      <select
        className={style.select}
        onChange={(e) => handleFilterByTemperament(e)}
      >
        <option disabled defaultValue>
          filter by temperament
        </option>
        <option value="All">All</option>
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
        <option disabled defaultValue>
          Order by origin
        </option>
        <option value="All">All</option>
        <option value="Created">Created</option>
        <option value="Api">Api</option>
      </select>

      <select
        className={style.select}
        onChange={(e) => handleFilteredByName(e)}
      >
        <option disabled defaultValue>
          Order by name
        </option>
        <option value="asc">A-Z</option>
        <option value="dsc">Z-A</option>
      </select>

      <select
        className={style.select}
        onChange={(e) => handleFilteredByWeight(e)}
      >
        <option disabled defaultValue>
          Order by wieght
        </option>
        <option value="max">Max</option>
        <option value="min">Min</option>
      </select>
    </div>
  );
}
