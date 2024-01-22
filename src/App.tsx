import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { PagesContainer } from "./components/Pages/PageContainer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PagesContainer />}>
      <Route index element={<Home />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} /></>
  );
}

export default App;
