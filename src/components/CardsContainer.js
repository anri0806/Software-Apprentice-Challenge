
import Card from "./Card";

function CardsContainer({ standardizedData }) {
  const card = standardizedData.map((data) => (
    <Card
      key={`${data.campaign} + _ + ${data.creative} + _ + ${data.platform}`}
      data={data}
    />
  ));

  return (
    <div>
      {card}
    </div>
  );
}

export default CardsContainer;
