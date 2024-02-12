import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  //get closest loader-result
  const data = useLoaderData();

  return <>{<EventsList events={data.events} />}</>;
}

export default EventsPage;

export async function listEventsloader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response?.ok) {
    throw new Response(JSON.stringify({ mesasge: "Could not fetch." }), {
      status: 500,
    });
  }
  return await response.json();
}
