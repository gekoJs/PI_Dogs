import style from "./loader.module.scss";

export default function Loader() {
  return (
    <div className={style.center}>
      <div className={style.container_loading}>
        <div className={style.spinner}>
          <p className={style.cargando}>Loading...</p>
        </div>
      </div>
    </div>
  );
}
