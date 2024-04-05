"use client";
import React, { useState } from 'react';
//import "../styles/globals.css";
import styles from  '../styles/CalendarComponent.module.css'; // Import custom styles
// pages/DynamicCalendar.tsx

interface Event {
  id: number;
  date: string; // Format "YYYY-MM-DD"
  name: string;
}

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarComponent: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    const newEvent: Event = {
      id: Date.now(),
      date: eventDate,
      name: eventName,
    };
    setEvents([...events, newEvent]);
    setEventName('');
    setEventDate('');
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleDateClick = (date: string) => {
    setSelectedDate(selectedDate === date ? null : date);
  };

  const isEventDate = (date: string) => {
    return events.some(event => event.date === date);
  };

  const getEventsForDate = (date: string) => {
    return events.filter(event => event.date === date);
  };

  return (
    <div className={styles.mainContainer}>
      
      <div className={`${styles.navigationbuttons} `}>
      <div className="flex justify-between items-center p-4">
        <div className={styles.navbutton}>
          <button onClick={handlePrevMonth}>&lt; Prev</button>
        </div>
        <h2 className={styles.responsivebox}>{currentMonth.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</h2>
        <div  className={styles.navbutton}>
          <button onClick={handleNextMonth}>Next &gt;</button>
        </div>
      </div>
      </div>
      <div className="grid grid-cols-7">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-2 border">{day}</div>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`filler-${index}`} className="border p-2"></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const date = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const hasEvent = isEventDate(date);
          return (
            <div className={styles.days}>
              <div
              key={date}
              className={`border p-2 relative cursor-pointer  ${selectedDate === date ? 'bg-gray-200' : ''}`}
              onClick={() => handleDateClick(date)}
                >
              
              <div>{day}</div>
              {hasEvent && <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>}
            </div>
            </div>
          );
        })}
      </div>
      



      <div className="h-half flex mt-1 sm:mt-2 md:mt-4">
      {/* Left section */}
      <div className="w-1/2 ">
        <form onSubmit={handleAddEvent} className="p-4">
        
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="mr-2"
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="mr-2"
        />
        <button type="submit" className="hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">Add Event</button>
      </form>
      </div>
      {/* Right section */}
      {/* <div className="w-1/2 bg-gray-400">
        <p className="p-4">Right Section Content</p>
      </div> */}

      <div  className="w-1/2 bg-gray-300" >
        {selectedDate && (
          <div className="p-4" >
            <h3>Events for {selectedDate}</h3>
            <ul>
              {getEventsForDate(selectedDate).map((event, index, array) => (
              <li 
              key={event.id} 
              className={`flex justify-between items-center ${index < array.length - 1 ? 'pb-2 border-b' : 'pb-2'}  border-grey-500`}
            >
              <span>{event.name}</span>
              <button onClick={() => handleDeleteEvent(event.id)} className="text-red-500 hover:text-red-700">Delete</button>
              </li>
          ))}
            </ul>
          </div>
        )}
      </div>
      </div>
       

      {/* <form onSubmit={handleAddEvent} className="p-4">
        
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="mr-2"
        />
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="mr-2"
        />
        <button type="submit">Add Event</button>
      </form> */}


    </div>
  );
};

export default CalendarComponent;
