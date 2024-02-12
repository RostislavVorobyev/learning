import { useLoaderData, useParams } from "react-router-dom";
import EventItem from "./EventItem";

export default function EventsDetailsPage() {
  const data = useLoaderData();
f
  return <EventItem event={data.event}></EventItem>;
}

export async function eventLoader({ params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );

  if (!response?.ok) {
    return new Response(
      JSON.stringify({ message: "Cannot get an event" }, { status: 500 })
    );
  }

  return await response.json();
}
