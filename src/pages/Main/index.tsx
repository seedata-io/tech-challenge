import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { IEvent } from "../../types/events";
import ReportTable from "../../components/Event/EventTable";
const Report = () => {
  const [events, setEvents] = useState<IEvent[]>();

  const { error, loading, sendRequest } = useFetch();

  useEffect(() => {
    const getReport = async () => {
      await sendRequest(`http://localhost:3001/api/events?sort=seedId:des`, {
        method: "GET",
      })
        .then((response) => {
          setEvents(response.events);
        })
        .catch((err) => {});
    };
    getReport();
  }, [sendRequest]);

  return (
    <>
      {events && ReportTable(events)}
      {loading && <h1>Loading</h1>}
      {error && <h1>Error</h1>}
    </>
  );
};

export default Report;
