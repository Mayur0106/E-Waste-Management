import React from "react";
import HorizontalCard from "./HorizontalCard"; // Replace with the correct path

const CardContainer: React.FC = () => {
  // Sample data for multiple cards
  const cardsData = [
    {
      imageUrl: "/card1.jpg",
      title: "Silent Threat",
      description:
        "Discarded electronic devices, posing environmental hazards due to toxic components. ",
    },
    {
      imageUrl: "/card2.jpg",
      title: "Microchip Dilemma",
      description:
        "Disposed microchips and components, challenging to recycle, containing valuable and hazardous materials.",
    },
    {
      imageUrl: "/card3.jpg",
      title: "Powerful Perils",
      description:
        "Expired power sources, containing toxic materials, demanding proper recycling for environmental safety.",
    },
    {
      imageUrl: "/card4.jpg",
      title: "Accessory Exodus",
      description:
        "Discarded accessories, often overlooked, contributing to electronic pollution and waste",
    },
    {
      imageUrl: "/card5.jpg",
      title: "Digital Legacy",
      description:
        "Discarded devices, rich in valuable components, require proper recycling measures.",
    },
    {
      imageUrl: "/card6.jpg",
      title: "Breezy Disposal",
      description:
        "Disposed cooling devices, containing electronic components, demand eco-friendly recycling solutions.",
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
