import { Outlet, NavLink, useNavigate } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <nav>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default MainLayout;
