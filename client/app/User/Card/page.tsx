import React from "react";
import HorizontalCard from "./HorizontalCard"; // Replace with the correct path

const CardContainer: React.FC = () => {
  // Sample data for multiple cards
  const cardsData = [
    {
      imageUrl: "/card1.jpg",
      title: "Silent Threat",
      description:
        "E-waste, a silent menace, quietly accumulates, posing environmental and health risks with its toxic components. It serves as a stark reminder of our disposable culture's toll on the planet, urging us to prioritize sustainability in our technological pursuits.",
    },
    {
      imageUrl: "/card2.jpg",
      title: "Microchip Dilemma",
      description:
      "In the heart of our digital age lies a dilemma of miniature proportions, yet with colossal consequences: the microchip predicament. These tiny marvels of modern engineering, essential in powering our electronic devices, hold within them a troubling reality. As they reach the end of their lifespan, they join the ranks of electronic waste, a burgeoning crisis with far-reaching ramifications. Within this labyrinth of discarded gadgets and obsolete technologies, microchips stand as silent sentinels, harboring a host of hazardous materials. From heavy metals like lead and mercury to toxic chemicals such as brominated flame retardants, they pose a significant threat to both human health and the environment. As we navigate this labyrinth, the specter of e-waste looms large, reminding us of the imperative to confront this dilemma and seek sustainable solutions for the sake of our planet and future generations.",
    },
    {
      imageUrl: "/card3.jpg",
      title: "Powerful Perils",
      description:
        "In the realm of modern technology, the aftermath of progress often lurks in the shadows, concealed within the seemingly innocuous confines of expired power sources. These once-vital components, now depleted of their energy, hold within them a perilous secret—a  cocktail of toxic materials that threaten environmental stability. Their disposal demands a delicate dance, a choreography of recycling orchestrated with utmost care. For within the remnants of our past power, lies the potential for both renewal and ruin, a testament to the duality of our quest for innovation.",
      
      },
    {
      imageUrl: "/card4.jpg",
      title: "Accessory Exodus",
      description:
        " In the aftermath of the Accessory Exodus, remnants littered the landscape like forgotten relics of a bygone era. Among these relics lay the expired power sources, now inert but still containing potent traces of toxic materials. Their presence demanded meticulous handling and proper recycling for environmental safety. Each component held a story of its own, once vital to the devices they powered, now relegated to the detritus of progress. As the world moved forward, the responsibility to manage these remnants became paramount, a testament to the necessity of mindful consumption and disposal in an ever-evolving technological landscape. ",
    },
    {
      imageUrl: "/card5.jpg",
      title: "Digital Legacy",
      description:
        "Expired power sources pose a potent peril,  harboring toxic materials that threaten environmental safety. Their depleted state not only renders them ineffective but also amplifies the risk of pollution if not handled with care. Proper recycling becomes imperative, a meticulous process to extract usable components while containing hazardous substances. Neglecting this responsibility could unleash ecological havoc, contaminating soil, water, and air with dangerous compounds. Thus, conscientious management of these spent power sources is paramount, safeguarding our planet from their lurking dangers.",
    },
    {
      imageUrl: "/card6.jpg",
      title: "Breezy Disposal",
      description:
        "Breezy Disposal specializes in the responsible handling of expired power sources, including batteries and electronic components containing toxic materials. Our commitment to environmental safety drives us to ensure these materials are recycled properly, minimizing their impact on ecosystems and human health. Through meticulous sorting and processing, we mitigate the risk of environmental contamination while maximizing resource recovery. At Breezy Disposal, we understand the importance of sustainable waste management and strive to exceed industry standards in our efforts to protect the planet for future generations.",
    },

    // Add more card data objects as needed
  ];

  return (
    <div className="flex flex-wrap h-auto w-auto">
      {cardsData.map((card, index) => (
        <HorizontalCard
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardContainer;
