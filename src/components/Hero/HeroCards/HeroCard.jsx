import { heroCards } from "../../../config/constant";

const HeroCard = () => {
  return (
    <div className="container px-8 py-20">
      <div className="flex justify-center text-white gap-2 flex-wrap md:text-left text-center -mb-10 -mx-4">
        {heroCards.map((card, index) => (
          <div
            key={index}
            className="lg:w-1/5 md:w-1/2 w-full py-4 px-4 bg-[#9b7521] opacity-85 bg-opacity-85"
          >
            <h2 className="title-font font-bold tracking-widest text-md mb-3 py-3">
              {card.title}
            </h2>
            <p className="text-[9px]">{card.description}</p>
            <h1 className="text-7xl font-bold text-right">{card.number}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCard;
