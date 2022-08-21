import { useRoutes } from "react-router-dom";
import { Layout } from "./components";
import "./App.css";
import routes from "./routes/routes";

export default function App() {

  let element = useRoutes(
    [
      {
        element: <Layout />,
        children: routes
      }
    ]
  )

  return element
}