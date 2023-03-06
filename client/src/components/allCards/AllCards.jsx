import style from "./AllCards.module.scss";
import Card from "../card/Card";
export default function AllCards({ allDogs }) {
  return (
    <div className={style.container}>
      {allDogs &&
        allDogs.map((dog) => {
          return (
            <Card
              name={dog.name}
              image={dog.image.url}
              temperament={dog.temperament}
              weight={dog.weight}
            />
          );
        })}
    </div>
  );
}
