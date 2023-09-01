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
      <div className="flex items-center justify-center min-h-screen container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {card}
        </div>
      </div>
    </div>
  );
}

export default CardsContainer;
