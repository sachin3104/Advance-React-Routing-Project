import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayuot from "./Pages/RootLayout";
import EventsRootLayout from "./Pages/EventsRootLayout";
import HomePage from "./Pages/HomePage";
import EventsPage from "./Pages/EventsPage";
import EventDetailPage from "./Pages/EventDetailPage";
import NewEventsPage from "./Pages/NewEventPage";
import EditEventPage from "./Pages/EditEventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayuot />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
                //...
              } else {
                const resData = await response.json();
                return resData.events;
              }
            },
          },
          { path: ":id", element: <EventDetailPage /> },
          { path: "new", element: <NewEventsPage /> },
          { path: ":id/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
