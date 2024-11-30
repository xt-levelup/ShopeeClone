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
const DangKy = lazy(() => {
  return import("./pages/DangKy");
});
const DangNhap = lazy(() => {
  return import("./pages/DangNhap");
});
const HoTro = lazy(() => {
  return import("./pages/HoTro");
});
const KetNoiFB = lazy(() => {
  return import("./pages/KetNoiFB");
});
const KetNoiInstagram = lazy(() => {
  return import("./pages/KetNoiInstagram");
});
const NguoiBanPage = lazy(() => {
  return import("./pages/NguoiBanPage");
});
const ThongBao = lazy(() => {
  return import("./pages/ThongBao");
});
const TroThanhNguoiban = lazy(() => {
  return import("./pages/TroThanhNguoiBan");
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
          path: "nguoi_ban",
          element: (
            <Suspense fallback={loading}>
              <NguoiBanPage />
            </Suspense>
          ),
        },
        {
          path: "tro_thanh_nguoi_ban",
          element: (
            <Suspense fallback={loading}>
              <TroThanhNguoiban />
            </Suspense>
          ),
        },
        {
          path: "ket_noi_fb",
          element: (
            <Suspense fallback={loading}>
              <KetNoiFB />
            </Suspense>
          ),
        },
        {
          path: "ket_noi_ins",
          element: (
            <Suspense fallback={loading}>
              <KetNoiInstagram />
            </Suspense>
          ),
        },
        {
          path: "thong_bao",
          element: (
            <Suspense fallback={loading}>
              <ThongBao />
            </Suspense>
          ),
        },
        {
          path: "ho_tro",
          element: (
            <Suspense fallback={loading}>
              <HoTro />
            </Suspense>
          ),
        },
        {
          path: "dang_ky",
          element: (
            <Suspense fallback={loading}>
              <DangKy />
            </Suspense>
          ),
        },
        {
          path: "dang_nhap",
          element: (
            <Suspense fallback={loading}>
              <DangNhap />
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
