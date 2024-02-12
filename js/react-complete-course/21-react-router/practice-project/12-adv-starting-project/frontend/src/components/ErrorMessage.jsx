import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";

export default function ErrorMessage() {
  const error = useRouteError();

  let title = "An error occured.";
  let content = "";

  if (error.status === 500) {
    title = JSON.parse(error.data).message;
    content = "Cannot fetch";
  }

  if (error.status === 404) {
    content = "Not found";
  }

  console.log(error);

  return (
    <PageContent title={"An error occured."}>
      <p>{content}</p>
    </PageContent>
  );
}
