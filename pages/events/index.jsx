import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/event-search";
import { getAllEvents } from "../../data/dummy-data";

function eventsPage() {
  const Events = getAllEvents();
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={Events} />
    </div>
  );
}

export default eventsPage;
