"use client"
import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import es from 'date-fns/locale/es';
import { startOfMonth, formatISO } from 'date-fns';
import FormCitaCalendar from './Forms/FormCitaCalendar';

function CalendarPage({events}) {
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

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView={isSmallScreen ? 'timeGridDay' : 'dayGridMonth'}
      events={events}
      locale={es}
      height="100vh"
      nowIndicatorClassNames={'bg-red-500'}
      buttonText={{
        today: 'Hoy',
      }}
      dayMaxEventRows
      views={{
        timeGrid: {
          dayMaxEventRows: 3
        }
      }}
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
      <FormCitaCalendar event={eventInfo}/>
    </>
  );
};

export default CalendarPage;