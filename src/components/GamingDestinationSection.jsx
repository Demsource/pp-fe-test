import "./GamingDestinationSection.css";
import GDCard from "./GDCard";
import SectionHeader from "./SectionHeader";

const GamingDestinationSection = () => {
  return (
    <section className="gaming-destination-section">
      <SectionHeader title={"YOUR GAMING DESTINATION"} />
      <div className="cards">
        <GDCard
          imageUrl={"/assets/CARD-Sports-1.svg"}
          imageAlt={"Card sports"}
        />
        <GDCard
          imageUrl={"/assets/CARD-Live-Casino-2.svg"}
          imageAlt={"Live casino"}
        />
        <GDCard
          imageUrl={"/assets/CARD-Casino-Fishing-3.svg"}
          imageAlt={"Card sports"}
        />
        <GDCard
          imageUrl={"/assets/CARD-Keno-Lotto-4.svg"}
          imageAlt={"Card sports"}
        />
      </div>
    </section>
  );
};

export default GamingDestinationSection;
