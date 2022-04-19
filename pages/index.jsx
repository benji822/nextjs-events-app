import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../data/dummy-data";

function homePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default homePage;
