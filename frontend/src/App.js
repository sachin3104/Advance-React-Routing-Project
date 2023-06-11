import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayuot from "./Pages/RootLayout";
import EventsRootLayout from "./Pages/EventsRootLayout";
import HomePage from "./Pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./Pages/EventsPage";
import EventDetailPage, {
  EventDetailLoader,
  action as deleteEventAction,
} from "./Pages/EventDetailPage";
import NewEventsPage from "./Pages/NewEventPage";
import EditEventPage from "./Pages/EditEventPage";
import ErrorPage from "./Pages/ErrorPage";
import { action as manipulateEventAction } from "./components/EventForm";

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
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventsPage />,
            action: manipulateEventAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
