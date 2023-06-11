import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayuot from "./Pages/RootLayout";
import EventsRootLayout from "./Pages/EventsRootLayout";
import HomePage from "./Pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./Pages/EventsPage";
import EventDetailPage, { EventDetailLoader } from "./Pages/EventDetailPage";
import NewEventsPage, { action as NewEventAction } from "./Pages/NewEventPage";
import EditEventPage from "./Pages/EditEventPage";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayuot />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: EventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventsPage />, action: NewEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
