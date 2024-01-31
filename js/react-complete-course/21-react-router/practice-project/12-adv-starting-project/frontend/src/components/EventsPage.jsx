import { Link, Outlet } from "react-router-dom";

export default function EventsPage() {
  return (
    <>
      <ul>
        <li>
          <Link to="/events/1">/event/1</Link>
        </li>
        <li>
          <Link to="/events/2">/event/2</Link>
        </li>
        <li>
          <Link to="/events/3">/event/3</Link>
        </li>
      </ul>
    </>
  );
}
