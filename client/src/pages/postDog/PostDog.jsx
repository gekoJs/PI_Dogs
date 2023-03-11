import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemperaments, postDog } from "../../redux/actions";
import style from "./PostDog.module.scss";
import { validate } from "../../helpers";
export default function PostDog() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  const [values, setValues] = useState({
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    min_lifeTime: "",
    max_lifeTime: "",
    temperaments: [],
    image: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getAllTemperaments());
  }, [dispatch]);

  const changeHandler = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...values,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleSelect = (e) => {
    e.preventDefault();
    !values.temperaments.includes(e.target.value) &&
      setValues({
        ...values,
        temperaments: [...values.temperaments, e.target.value],
      });
    setErrors(
      validate({
        ...values,
        temperaments: [...values.temperaments, e.target.value],
      })
    );
  };

  const handleErase = (ev, el) => {
    ev.preventDefault();
    setValues({
      ...values,
      temperaments: values.temperaments.filter((j) => j !== el),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      let valuesToSubmit = {
        name: values.name,
        image: values.image.length ? values.image : "https://cdn-icons-png.flaticon.com/512/2172/2172097.png",
        height: `${values.min_height} - ${values.max_height}`,
        weight: [parseInt(values.min_weight), parseInt(values.max_weight)],
        lifeTime: `${values.min_lifeTime} - ${values.max_lifeTime}`,
        temperament: values.temperaments,
      };
      dispatch(postDog(valuesToSubmit))
      setValues({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        min_lifeTime: "",
        max_lifeTime: "",
        temperaments: [],
        image: "",
      })
    }
    // history.push("/home");
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={changeHandler}
            placeholder="name"
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>minimum height</label>
          <input
            type="number"
            value={values.min_height}
            name="min_height"
            onChange={(e) => changeHandler(e)}
            placeholder="minimum height"
          />
          {errors.min_height && <p>{errors.min_height}</p>}
        </div>
        <div>
          <label>maximum height</label>
          <input
            type="number"
            name="max_height"
            value={values.max_height}
            onChange={(e) => changeHandler(e)}
            placeholder="maximum height"
          />
          {errors.max_height && <p>{errors.max_height}</p>}
        </div>
        <div>
          <label>minimum weight</label>
          <input
            type="number"
            name="min_weight"
            value={values.min_weight}
            onChange={(e) => changeHandler(e)}
            placeholder="minimum weight"
          />
          {errors.min_weight && <p>{errors.min_weight}</p>}
        </div>
        <div>
          <label>maximum weight</label>
          <input
            type="number"
            name="max_weight"
            value={values.max_weight}
            onChange={(e) => changeHandler(e)}
            placeholder="maximum weight"
          />
          {errors.max_weight && <p>{errors.max_weight}</p>}
        </div>
        <div>
          <label>Minimum life Time</label>
          <input
            type="number"
            name="min_lifeTime"
            value={values.min_lifeTime}
            onChange={(e) => changeHandler(e)}
            placeholder="Minimum lifeTime"
          />
          {errors.min_lifeTime && <p>{errors.min_lifeTime}</p>}
        </div>
        <div>
          <label>Maximum life Time</label>
          <input
            type="number"
            name="max_lifeTime"
            value={values.max_lifeTime}
            onChange={(e) => changeHandler(e)}
            placeholder="Maximum lifeTime"
          />
          {errors.max_lifeTime && <p>{errors.max_lifeTime}</p>}
        </div>
        <div>
          <label>image</label>
          <input
            type="text"
            name="image"
            value={values.image}
            onChange={(e) => changeHandler(e)}
            placeholder="image"
          />
        </div>

        <select
          onChange={(e) => {
            handleSelect(e);
          }}
        >
          <option value>Temperaments</option>
          {temperaments &&
            temperaments.map((e) => {
              return (
                <option value={e.name} key={e.id}>
                  {e.name}
                </option>
              );
            })}
        </select>
        <div>
          {values.temperaments.map((el, i) => {
            return (
              <div key={i}>
                {el} <button onClick={(ev) => handleErase(ev, el)}>X</button>{" "}
              </div>
            );
          })}
        </div>
        {errors.temperaments && <p>{errors.temperaments}</p>}
        <button disabled={Object.keys(errors).length} type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
