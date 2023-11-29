"use client"
import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import { getDataCalendar } from '../actions';
import es from 'date-fns/locale/es';
import { startOfMonth, formatISO } from 'date-fns';

function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== 'undefined' ? window.innerWidth <= 600 : false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isSmallScreen]);

  useEffect(() => {
    async function fetchEvents() {
      const res = await getDataCalendar();
      setEvents(res);
    }
    fetchEvents();
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView={isSmallScreen ? 'timeGridDay' : 'dayGridMonth'}
      events={events}
      locale={es}
      height="100vh"
      validRange={{
        start: formatISO(startOfMonth(new Date()), { representation: 'date' })
      }}
      defaultDate={formatISO(startOfMonth(new Date()), { representation: 'date' })}
      eventContent={renderEventContent}
      eventClassNames={'p-0 rounded-none bg-transparent outline-none'}
      eventTimeFormat={{ 
        hour: '2-digit',
        minute: '2-digit',
        meridiem: false
      }}
    />
  );
}

const renderEventContent = (eventInfo) => {
  return (
    <>
      <div className='flex bg-white text-black gap-1 items-center relative h-auto overflow-hidden text-xs hover:bg-black group hover:text-white transform duration-300 p-2 rounded'>
        <span>{eventInfo.timeText}:</span>
        <p className='text-wrap'>{eventInfo.event.title}</p>
      </div>
    </>
  );
};

export default CalendarPage;