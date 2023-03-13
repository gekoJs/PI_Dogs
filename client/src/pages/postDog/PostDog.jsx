import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemperaments, manageErr, postDog } from "../../redux/actions";
import style from "./PostDog.module.scss";
import { validate } from "../../helpers";
import NavBar from "../../components/navBar/NavBar";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";

export default function PostDog() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  let manageError = useSelector((state) => state.error);
  const postedDog = useSelector((state) => state.postedDog);

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
    dispatch(manageErr([]));
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
        image: values.image.length
          ? values.image
          : "https://cdn-icons-png.flaticon.com/512/2172/2172097.png",
        height: `${values.min_height} - ${values.max_height}`,
        weight: [parseInt(values.min_weight), parseInt(values.max_weight)],
        lifeTime: `${values.min_lifeTime} - ${values.max_lifeTime}`,
        temperament: values.temperaments,
      };
      dispatch(postDog(valuesToSubmit));
      // if (manageError) {
      // setValues({
      //   name: "",
      //   min_height: "",
      //   max_height: "",
      //   min_weight: "",
      //   max_weight: "",
      //   min_lifeTime: "",
      //   max_lifeTime: "",
      //   temperaments: [],
      //   image: "",
      // });
      // }
    }
  };
  return (
    <div>
      <NavBar />
      <div className={style.container}>
        {!Object.keys(postedDog).length ? (
          <div>
            <form className={style.form} onSubmit={handleSubmit}>
              <div className={style.inputContainer}>
                <label className={style.label}>
                  <b>Name :</b>
                </label>
                <div className={style.inputWrapper}>
                  <input
                    className={style.input}
                    type="text"
                    value={values.name}
                    name="name"
                    onChange={changeHandler}
                    placeholder="doggie"
                  />
                  {errors.name && (
                    <p className={style.validation}>
                      {" "}
                      <b>{errors.name}</b>{" "}
                    </p>
                  )}
                </div>
              </div>
              <hr />
              <div className={style.inputContainer}>
                <label className={style.label}>
                  <b>Minimum height (Cm) :</b>
                </label>
                <div className={style.inputWrapper}>
                  <input
                    className={style.input}
                    type="number"
                    value={values.min_height}
                    name="min_height"
                    onChange={(e) => changeHandler(e)}
                    placeholder="50"
                  />
                  {errors.min_height && (
                    <p className={style.validation}>
                      {" "}
                      <b>{errors.min_height}</b>{" "}
                    </p>
                  )}
                </div>
              </div>
              <hr />

              <div className={style.inputContainer}>
                <label className={style.label}>
                  <b>Maximum height (Cm) :</b>
                </label>
                <div className={style.inputWrapper}>
                  <input
                    className={style.input}
                    type="number"
                    name="max_height"
                    value={values.max_height}
                    onChange={(e) => changeHandler(e)}
                    placeholder="100"
                  />
                  {errors.max_height && (
                    <p className={style.validation}>
                      {" "}
                      <b>{errors.max_height}</b>{" "}
                    </p>
                  )}
                </div>
              </div>
              <hr />

              <div className={style.inputContainer}>
                <label className={style.label}>
                  <b>Minimum weight (Kg) :</b>
                </label>
                <div className={style.inputWrapper}>
                  <input
                    className={style.input}
                    type="number"
                    name="min_weight"
                    value={values.min_weight}
                    onChange={(e) => changeHandler(e)}
                    placeholder="20"
                  />
                  {errors.min_weight && (
                    <p className={style.validation}>
                      {" "}
                      <b>{errors.min_weight}</b>{" "}
                    </p>
                  )}
                </div>
              </div>
              <hr />

              <div className={style.inputContainer}>
                <label className={style.label}>
                  <b>Maximum weight (Kg) :</b>
                </label>
                <div className={style.inputWrapper}>
                  <input
                    className={style.input}
                    type="number"
                    name="max_weight"
                    value={values.max_weight}
                    onChange={(e) => changeHandler(e)}
                    placeholder="50"
                  />
                  {errors.max_weight && (
                    <p className={style.validation}>
                      {" "}
                      <b>{errors.max_weight}</b>{" "}
                    </p>
                  )}
                </div>
              </div>
              <hr />

              <div className={style.inputContainer}>
                <label className={style.label}>
                  <b>Minimum life Time (Y) :</b>
                </label>
                <div className={style.inputWrapper}>
                  <input
                    className={style.input}
                    type="number"
                    name="min_lifeTime"
                    value={values.min_lifeTime}
                    onChange={(e) => changeHandler(e)}
                    placeholder="10"
                  />
                  {errors.min_lifeTime && (
                    <p className={style.validation}>
                      {" "}
                      <b>{errors.min_lifeTime}</b>{" "}
                    </p>
                  )}
                </div>
              </div>
              <hr />

              <div className={style.inputContainer}>
                <label className={style.label}>
                  <b>Maximum life Time (Y) :</b>
                </label>
                <div className={style.inputWrapper}>
                  <input
                    className={style.input}
                    type="number"
                    name="max_lifeTime"
                    value={values.max_lifeTime}
                    onChange={(e) => changeHandler(e)}
                    placeholder="20"
                  />
                  {errors.max_lifeTime && (
                    <p className={style.validation}>
                      {" "}
                      <b>{errors.max_lifeTime}</b>{" "}
                    </p>
                  )}
                </div>
              </div>
              <hr />

              <div className={style.inputContainer}>
                <label className={style.label}>
                  <b>image (URL):</b>
                </label>
                <div className={style.inputWrapper}>
                  <input
                    className={style.input}
                    type="text"
                    name="image"
                    value={values.image}
                    onChange={(e) => changeHandler(e)}
                    placeholder="image.png"
                  />
                </div>
              </div>
              <hr />

              <select
                className={style.select}
                onChange={(e) => {
                  handleSelect(e);
                }}
              >
                <option className={style.option} value>
                  {temperaments.length ? "Temperaments" : "Loading..."}
                </option>
                {temperaments &&
                  temperaments.map((e) => {
                    return (
                      <option
                        className={style.option}
                        value={e.name}
                        key={e.id}
                      >
                        {e.name}
                      </option>
                    );
                  })}
              </select>
              <div className={style.temperamentsContainer}>
                {values.temperaments.map((el, i) => {
                  return (
                    <div className={style.temperaments} key={i}>
                      {el}{" "}
                      <button
                        className={style.eliminate}
                        onClick={(ev) => handleErase(ev, el)}
                      >
                        <svg
                          fill="#000000"
                          height="10px"
                          width="10px"
                          version="1.1"
                          id="Capa_1"
                          viewBox="0 0 460.775 460.775"
                        >
                          <path
                            d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
                          />
                        </svg>
                      </button>{" "}
                    </div>
                  );
                })}
              </div>
              {errors.temperaments && (
                <p className={style.validation}>
                  {" "}
                  <b>{errors.temperaments}</b>{" "}
                </p>
              )}
              {manageError && (
                <p className={style.manageError}>{manageError}</p>
              )}

              <button
                className={style.submitBtn}
                disabled={Object.keys(errors).length}
                type="submit"
              >
                Create
              </button>
            </form>
          </div>
        ) : (
          <div className={style.succesPosted}>
            <Card
              id={postedDog.instance.id}
              name={postedDog.instance.name}
              image={postedDog.instance.image}
              weight={postedDog.instance.weight}
            />
            <p className={style.succesPostedP}>{postedDog.message}</p>
            <Link to="/home" className={style.linkA}>
              <button>Go Home</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
