// Use Client Directive
"use client";
import React, { useEffect, useState } from 'react';
import HorizontalCard from "./HorizontalCard";
import Link from "next/link";
import lm from "../styles/card.module.css";


interface User {
  email: string;
 
}

interface Card {
  id: string;
  photo: string;
  userName: string;
  description?: string;
  email: string;
  title: string;
}

const CardContainer: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [showEmptyCard, setShowEmptyCard] = useState(false);

  const users = JSON.parse(localStorage.getItem("user") || "");

  useEffect(() => {
    fetch( `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/api/auth/getCard`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Sort the cards array by ID in ascending order
          const sortedCards = data.data.sort((a: Card, b: Card) => parseInt(a.id) - parseInt(b.id));
          setCards(sortedCards);
        } else {
          console.error('Failed to fetch cards:', data.message);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      setShowEmptyCard(true);
    }
  }, [cards]);

  return (
    <div className="flex flex-wrap h-auto w-auto">
      {cards.map(card => (
    users.email === card.email ? (
        <HorizontalCard
            key={card.id}
            id={card.id}
            imageUrl={`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/${card.photo}`}
            title={card.title || 'No title'}
            userName={card.userName || 'No userName'}
            email={card.email || 'No email'}
            description={card.description || 'No description'}
        />
    ) : null
))}


      {showEmptyCard && (
        <div className={`${"flex bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 m-2 relative h-36"} ${lm.lmargin}`}>
          <div className="flex justify-center items-center h-full w-full">
            <Link href="/User/CardForm" className="flex justify-center items-center border border-black rounded-full w-20 h-20 cursor-pointer hover:border-2 hover:w-24 hover:h-24">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
