import { useParams } from "react-router-dom";

export default function EventsDetailsPage() {
  const { eventId } = useParams();
  return (
    <>
      <h1>EventsDetails</h1>
      <p>{eventId}</p>
    </>
  );
}
