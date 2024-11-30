import { Outlet, NavLink, useNavigate } from "react-router-dom";

const MainLayout: React.FC = () => {
  const facebookIcon = (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 112.196 112.196"
      // style={{ enableBackground: "new 0 0 112.196 112.196" }}
      xmlSpace="preserve"
      width="20px"
      height="20px"
    >
      <g>
        <circle
          style={{ fill: "#3B5998" }}
          cx="56.098"
          cy="56.098"
          r="56.098"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34
   c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
  const instagramIcon = (
    <svg
      width="21"
      height="21"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34 6H14C9.58172 6 6 9.58172 6 14V34C6 38.4183 9.58172 42 14 42H34C38.4183 42 42 38.4183 42 34V14C42 9.58172 38.4183 6 34 6Z"
        fill="#2F88FF"
        stroke="black"
        stroke-width="1"
        stroke-linejoin="round"
      />
      <path
        d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z"
        fill="#43CCF8"
        stroke="white"
        stroke-width="1"
        stroke-linejoin="round"
      />
      <path
        d="M35 15C36.1046 15 37 14.1046 37 13C37 11.8954 36.1046 11 35 11C33.8954 11 33 11.8954 33 13C33 14.1046 33.8954 15 35 15Z"
        fill="white"
      />
    </svg>
  );
  const notificationIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      fill="none"
      className="wd-accent-notification wd-accent"
      focusable="false"
      role="presentation"
      viewBox="0 0 56 56"
    >
      <g className="wd-icon-container">
        <path
          fill="#fff"
          d="M31.994 8.782l.038.703.674.202C37.96 11.257 42 15.349 42 21v10c0 3.757 1.347 6.466 2.707 8.235.678.88 1.357 1.526 1.872 1.955.156.13.298.242.421.333V46H33.964l-.212.715a6.003 6.003 0 0 1-11.504 0L22.036 46H9v-4.477c.123-.091.265-.202.421-.333a12.385 12.385 0 0 0 1.872-1.955C12.653 37.466 14 34.757 14 31V21c0-5.65 4.041-9.744 9.294-11.313l.674-.202.038-.703a4 4 0 0 1 7.988 0z"
          className="french-vanilla-100"
        />
        <g fill="#0875E1" className="color-500">
          <path d="M22.832 14.945a1 1 0 0 1-.277 1.387C21.268 17.19 20 18.905 20 21v3a1 1 0 1 1-2 0v-3c0-2.905 1.732-5.19 3.445-6.332a1 1 0 0 1 1.387.277zM19 28a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          <path
            fill-rule="evenodd"
            d="M32.993 8.728C38.544 10.388 43 14.79 43 21v10c0 5.105 2.659 8.082 4.099 9.32.532.458.901 1.11.901 1.812V45a2 2 0 0 1-2 2H34.71a7.003 7.003 0 0 1-13.42 0H10a2 2 0 0 1-2-2v-2.868c0-.702.369-1.354.901-1.812C10.341 39.082 13 36.105 13 31V21c0-6.21 4.456-10.613 10.007-12.272a5 5 0 0 1 9.986 0zm-7.897-.485a3.001 3.001 0 0 1 5.808 0 17.514 17.514 0 0 0-5.808 0zM23.416 47a5.001 5.001 0 0 0 9.168 0h-9.168zM10 45v-2h36v2H10zm2.085-5.156c-.337.438-.674.823-.995 1.156h33.82a13.729 13.729 0 0 1-.995-1.156C42.444 37.932 41 35.014 41 31V21c0-6.51-6.069-11-13-11s-13 4.49-13 11v10c0 4.014-1.444 6.932-2.915 8.844z"
            clip-rule="evenodd"
          />
        </g>
      </g>
    </svg>
  );
  const supportIcon = (
    <svg
      width="21"
      height="21"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.8 33H27.5C34.4036 33 40 27.4036 40 20.5C40 13.5964 34.4036 8 27.5 8H20.5C13.5964 8 8 13.5964 8 20.5C8 28.5608 12.5962 33.3807 17.4302 36.2857C19.8562 37.7437 22.2996 38.6857 24.1465 39.2629C24.3744 39.3341 24.5926 39.3996 24.8 39.4597V33ZM26.8 42C26.8 42 26.0357 41.8714 24.8 41.5367C19.5898 40.1253 6 35.0495 6 20.5C6 12.4919 12.4919 6 20.5 6H27.5C35.5081 6 42 12.4919 42 20.5C42 28.5081 35.5081 35 27.5 35H26.8V42Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.6911 12.4815C28.7208 13.1664 29.4975 14.2754 29.4975 15.7612C29.4975 17.3398 28.8607 18.4998 27.8296 19.2103C27.4023 19.5048 26.9424 19.6971 26.4998 19.8236V21.356C26.4998 22.1844 25.8282 22.856 24.9998 22.856C24.1713 22.856 23.4998 22.1844 23.4998 21.356V18.5586C23.4998 17.7691 24.1118 17.1147 24.8996 17.062C25.4537 17.0249 25.874 16.9146 26.1273 16.74C26.234 16.6666 26.3105 16.5823 26.3679 16.4678C26.4275 16.3486 26.4975 16.1339 26.4975 15.7612C26.4975 15.4485 26.3745 15.2088 26.0296 14.9794C25.6376 14.7186 25.0076 14.5266 24.2511 14.5025C23.5026 14.4787 22.7758 14.625 22.2416 14.884C21.7046 15.1443 21.5084 15.4358 21.4531 15.6513C21.247 16.4537 20.4295 16.9371 19.6271 16.731C18.8247 16.5249 18.3413 15.7074 18.5474 14.905C18.8919 13.5637 19.8953 12.6875 20.9328 12.1845C21.9731 11.6802 23.1956 11.4674 24.3464 11.504C25.4893 11.5403 26.7087 11.8281 27.6911 12.4815Z"
        fill="currentColor"
      />
      <path
        d="M27 27C27 28.1046 26.1046 29 25 29C23.8954 29 23 28.1046 23 27C23 25.8954 23.8954 25 25 25C26.1046 25 27 25.8954 27 27Z"
        fill="currentColor"
      />
    </svg>
  );
  const languageIcon = (
    <svg
      width="21"
      height="21"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" stroke="white" d="M1,10.5 L19,10.5" />
      <path fill="none" stroke="white" d="M2.35,15.5 L17.65,15.5" />
      <path fill="none" stroke="white" d="M2.35,5.5 L17.523,5.5" />
      <path
        fill="none"
        stroke="white"
        d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"
      />
      <circle fill="none" stroke="white" cx="10" cy="10.5" r="9" />
    </svg>
  );
  const downIcon = (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 5L7.5 12L1 5" stroke="white" stroke-linecap="square" />
    </svg>
  );
  return (
    <>
      <nav className="px-[3%] bg-red-600 py-[0.5rem] text-white items-center">
        <div className="flex flex-row justify-between items-center text-[13px]">
          <div className="flex flex-row items-center justify-center">
            <NavLink
              to="/nguoi_ban"
              className={({ isActive }) => {
                return isActive
                  ? "flex flex-row gap-[6px] pr-[6px] items-center overline font-bold"
                  : "flex flex-row gap-[6px] pr-[6px] items-center";
              }}
            >
              Kênh Người Bán
            </NavLink>
            <p className="flex flex-row gap-[6px] pr-[6px] items-center">
              <span className="text-gray-600">|</span>
              <NavLink
                to="/tro_thanh_nguoi_ban"
                className={({ isActive }) => {
                  return isActive
                    ? "flex flex-row gap-[6px] pr-[6px] items-center overline font-bold"
                    : "flex flex-row gap-[6px] pr-[6px] items-center";
                }}
              >
                Trở thành Người Bán Shopee
              </NavLink>
            </p>
            <p className="flex flex-row  gap-[6px] pr-[6px] items-center">
              <span className="text-gray-600">|</span>
              <span>Tải ứng dụng</span>
            </p>
            <p className="flex flex-row  gap-[6px] pr-[6px] items-center">
              <span className="text-gray-600">|</span>
              <span>Kết nối</span>
              <NavLink
                to="/ket_noi_fb"
                className={({ isActive }) => {
                  return isActive
                    ? "flex flex-row gap-[6px] pr-[6px] items-center overline font-bold"
                    : "flex flex-row gap-[6px] pr-[6px] items-center";
                }}
              >
                {facebookIcon}
              </NavLink>
              <NavLink
                to="/ket_noi_ins"
                className={({ isActive }) => {
                  return isActive
                    ? "flex flex-row gap-[6px] pr-[6px] items-center overline font-bold"
                    : "flex flex-row gap-[6px] pr-[6px] items-center";
                }}
              >
                {instagramIcon}
              </NavLink>
            </p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <p className="flex flex-row mr-[6px] gap-[3px] items-center justify-center">
              <span>{notificationIcon}</span>
              <NavLink
                to="/thong_bao"
                className={({ isActive }) => {
                  return isActive
                    ? "flex flex-row gap-[6px] pr-[6px] items-center overline font-bold"
                    : "flex flex-row gap-[6px] pr-[6px] items-center";
                }}
              >
                Thông báo
              </NavLink>
            </p>
            <p className="flex flex-row mr-[6px] gap-[3px] items-center justify-center">
              <span>{supportIcon}</span>
              <NavLink
                to="/ho_tro"
                className={({ isActive }) => {
                  return isActive
                    ? "flex flex-row gap-[6px] pr-[6px] items-center overline font-bold"
                    : "flex flex-row gap-[6px] pr-[6px] items-center";
                }}
              >
                Hỗ trợ
              </NavLink>
            </p>
            <p className="flex flex-row mr-[px] gap-[3px] items-center justify-center">
              <span>{languageIcon}</span>
              <span>Tiếng Việt</span>
              <span>{downIcon}</span>
            </p>
            <NavLink
              to="/dang_ky"
              className={({ isActive }) => {
                return isActive
                  ? "flex flex-row px-[6px] gap-[6px] items-center overline font-bold"
                  : "flex flex-row px-[6px] gap-[6px] items-center";
              }}
              // className="flex flex-row px-[6px] items-center justify-center"
            >
              Đăng ký
            </NavLink>
            <NavLink
              to="/dang_nhap"
              className={({ isActive }) => {
                return isActive
                  ? "flex flex-row px-[6px] gap-[6px] pl-[6px] items-center overline font-bold"
                  : "flex flex-row gap-[6px] pl-[6px] items-center";
              }}
              // className="flex flex-row pl-[6px] items-center justify-center"
            >
              Đăng nhập
            </NavLink>
          </div>
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
