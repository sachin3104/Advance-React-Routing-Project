import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>This Event Details Page.</h1>
      <p>{params.id}</p>
    </>
  );
};

export default EventDetailPage;
