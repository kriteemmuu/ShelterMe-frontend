import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../style/calendar.css";

const AllEvents = () => {
  const calendarRef = useRef(null);
  const [events] = useState([
    {
      id: "1",
      title: "Dog Campaign",
      date: "2025-01-01",
      extendedProps: {
        organizedBy: "Softwarica College",
        eventImageOneUrl: "/assets/images/pug.png",
      },
    },
  ]);
  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [manualDate, setManualDate] = useState("");

  const handleDateClick = (info) => {
    const clickedDate = info.dateStr; // Format: YYYY-MM-DD
    const filteredEvent = events.find((event) => event.date === clickedDate);
    setSelectedEvent(filteredEvent || null);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value; // Format: YYYY-MM-DD
    setManualDate(newDate);

    const filteredEvent = events.find((event) => event.date === newDate);
    setSelectedEvent(filteredEvent || null);

    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(newDate);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Toolbar */}
      <div className="flex justify-between items-center bg-gray-100 px-4 py-2 shadow">
        <h1 className="text-2xl font-bold text-gray-700">Events Calendar</h1>
        <div className="flex items-center gap-4">
          <input
            type="date"
            value={manualDate}
            onChange={handleDateChange}
            className="border px-3 py-2 rounded focus:outline-none"
          />
        </div>
      </div>

      <div className="main-content flex-grow flex">
        {/* Calendar Section */}
        <div className="calendar-container w-2/3 p-4 bg-white shadow-md mb-10">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            dateClick={handleDateClick}
            height="auto" // Dynamic height
            headerToolbar={false} // Hide the default header
          />
        </div>

        {/* Event Details Section */}
        <div className="event-details w-1/3 bg-gray-50 p-6 shadow-md border-l border-gray-300">
          {selectedEvent ? (
            <div className="flex flex-col items-center">
              <img
                src={selectedEvent.extendedProps.eventImageOneUrl}
                alt={selectedEvent.title}
                className="w-80 h-80 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {selectedEvent.title}
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Date:</strong> {selectedEvent.date}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Organized By:</strong> {selectedEvent.extendedProps.organizedBy}
              </p>
            </div>
          ) : (
            <p className="text-gray-600 text-center">No events available for this date.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        <p>© Shelter Me.... All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AllEvents;
