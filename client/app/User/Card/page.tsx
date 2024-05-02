// Use Client Directive
"use client";

import React, { useEffect, useState } from 'react';
import mpage from "../styles/MainPage.module.css";
import HorizontalCard from "./HorizontalCard";
import Link from "next/link";


interface Card {
  id: number;
  photo: string;
  userName: string;
  description?: string;
  email: string;
  title: string;
}

const CardContainer: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    
    fetch(`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/api/auth/getCard`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setCards(data.data.slice(0, 9)); // Show only the first 9 cards initially
        } else {
          console.error('Failed to fetch cards:', data.message);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div className="flex flex-wrap h-auto w-auto">
      {cards.map(card => (
        <HorizontalCard
          key={card.id}
          imageUrl={ `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/${card.photo}` }
          title={card.title || 'No title'}
           description={card.description || 'No description'}
          userName={card.userName || 'No description'}
          
        />
      ))}
      {!showMore && cards.length === 9 && ( // Show the Show more option if there are exactly 9 cards
      
      <div className={mpage.buttonbody} style={{ marginLeft: '1000px', marginTop:'4px'}}>
    
      <Link href={"/User/allCard"}>
        <button className={`${mpage.cssbutton} ${mpage.small}`}>
        View all cards
          <div className={mpage.icon}>
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </Link>
    </div>
    
      
      )}
      
    </div>
  );
};

export default CardContainer;




// "use client";

// import { useEffect, useState } from 'react';
//    //  import { useEffect, useState } from 'react';
// import React from "react";
// import HorizontalCard from "./HorizontalCard"; // Replace with the correct path

// interface Card {
//   id: number;
//   photo: string;
//   userName: string;
//   description?: string;
//   email: string;
//   title: string;
// }

// const CardContainer: React.FC = () => {
//   // Sample data for multiple cards
 
//   const [cards, setCards] = useState<Card[]>([]);

//   useEffect(() => {
//     fetch('http://localhost:8080/api/auth/getCard')
//       .then(response => response.json())
//       .then(data => {
//         if (data.success) {
//           setCards(data.data);
//         } else {
//           console.error('Failed to fetch cards:', data.message);
//         }
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);


//   return (
//     <div className="flex flex-wrap h-auto w-auto">
      
      
      
//       {cards.map(card => ((
//      <HorizontalCard
//     key={card.id}
//     imageUrl={`http://localhost:8080/${card.photo}`}
//     title={card.title || 'No title'}
//     description={card.description || 'No description'}
//   />
// )))}

//     </div>
//   );
// };

// export default CardContainer;
