import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

const CalenderPage = () => {
  const [events, setEvents] = useState([
    { title: "event 1", date: "2026-04-1" },
    { title: "event 2", date: "2026-04-2" },
  ]);
  const handleDateClick = (arg: any) => {
    const title = prompt("What event do you want to add?");
    if (title) {
      setEvents([...events, { title: title, date: arg.dateStr }]);
    }
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      eventContent={renderEventContent}
      events={events}
      dateClick={handleDateClick}
    />
  );
};

export default CalenderPage;

function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
