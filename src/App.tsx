import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";
const MainLayout = lazy(() => {
  return import("./layouts/MainLayout");
});
const HomePage = lazy(() => {
  return import("./pages/HomePage");
});

function App(): JSX.Element {
  const loading = (
    <p className="text-center text-blue-600 bold py-[3rem]">
      Loading page ...{" "}
    </p>
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={loading}>
          <MainLayout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={loading}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
