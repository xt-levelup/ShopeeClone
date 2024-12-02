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
  const linkedinIcon = (
    <svg
      width="21px"
      height="21px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        fill="#0A66C2"
        d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
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
  const shopeeSvg = (
    <svg
      viewBox="0 0 192 65"
      className="cursor-pointer shopee-svg-icon header-with-search__shopee-logo icon-shopee-logo"
      width="132px"
      height="132px"
      fill="white"
    >
      <g fill-rule="evenodd">
        <path d="M35.6717403 44.953764c-.3333497 2.7510509-2.0003116 4.9543414-4.5823845 6.0575984-1.4379707.6145919-3.36871.9463856-4.896954.8421628-2.3840266-.0911143-4.6237865-.6708937-6.6883352-1.7307424-.7375522-.3788551-1.8370513-1.1352759-2.6813095-1.8437757-.213839-.1790053-.239235-.2937577-.0977428-.4944671.0764015-.1151823.2172535-.3229831.5286218-.7791994.45158-.6616533.5079208-.7446018.5587128-.8221779.14448-.2217688.3792333-.2411091.6107855-.0588804.0243289.0189105.0243289.0189105.0426824.0333083.0379873.0294402.0379873.0294402.1276204.0990653.0907002.0706996.14448.1123887.166248.1287205 2.2265285 1.7438508 4.8196989 2.7495466 7.4376251 2.8501162 3.6423042-.0496401 6.2615109-1.6873341 6.7308041-4.2020035.5160305-2.7675977-1.6565047-5.1582742-5.9070334-6.4908212-1.329344-.4166762-4.6895175-1.7616869-5.3090528-2.1250697-2.9094471-1.7071043-4.2697358-3.9430584-4.0763845-6.7048539.296216-3.8283059 3.8501677-6.6835796 8.340785-6.702705 2.0082079-.004083 4.0121475.4132378 5.937338 1.2244562.6816382.2873109 1.8987274.9496089 2.3189359 1.2633517.2420093.1777159.2898136.384872.1510957.60836-.0774686.12958-.2055158.3350171-.4754821.7632974l-.0029878.0047276c-.3553311.5640922-.3664286.5817134-.447952.7136572-.140852.2144625-.3064598.2344475-.5604202.0732783-2.0600669-1.3839063-4.3437898-2.0801572-6.8554368-2.130442-3.126914.061889-5.4706057 1.9228561-5.6246892 4.4579402-.0409751 2.2896772 1.676352 3.9613243 5.3858811 5.2358503 7.529819 2.4196871 10.4113092 5.25648 9.869029 9.7292478M26.3725216 5.42669372c4.9022893 0 8.8982174 4.65220288 9.0851664 10.47578358H17.2875686c.186949-5.8235807 4.1828771-10.47578358 9.084953-10.47578358m25.370857 11.57065968c0-.6047069-.4870064-1.0948761-1.0875481-1.0948761h-11.77736c-.28896-7.68927544-5.7774923-13.82058185-12.5059489-13.82058185-6.7282432 0-12.2167755 6.13130641-12.5057355 13.82058185l-11.79421958.0002149c-.59136492.0107446-1.06748731.4968309-1.06748731 1.0946612 0 .0285807.00106706.0569465.00320118.0848825H.99995732l1.6812605 37.0613963c.00021341.1031483.00405483.2071562.01173767.3118087.00170729.0236381.003628.0470614.00554871.0704847l.00362801.0782207.00405483.004083c.25545428 2.5789222 2.12707837 4.6560709 4.67201764 4.7519129l.00576212.0055872h37.4122078c.0177132.0002149.0354264.0004298.0531396.0004298.0177132 0 .0354264-.0002149.0531396-.0004298h.0796027l.0017073-.0015043c2.589329-.0706995 4.6867431-2.1768587 4.9082648-4.787585l.0012805-.0012893.0017073-.0350275c.0021341-.0275062.0040548-.0547975.0057621-.0823037.0040548-.065757.0068292-.1312992.0078963-.1964115l1.8344904-37.207738h-.0012805c.001067-.0186956.0014939-.0376062.0014939-.0565167M176.465457 41.1518926c.720839-2.3512494 2.900423-3.9186779 5.443734-3.9186779 2.427686 0 4.739107 1.6486899 5.537598 3.9141989l.054826.1556978h-11.082664l.046506-.1512188zm13.50267 3.4063683c.014933.0006399.014933.0006399.036906.0008531.021973-.0002132.021973-.0002132.044372-.0008531.53055-.0243144.950595-.4766911.950595-1.0271786 0-.0266606-.000853-.0496953-.00256-.0865936.000427-.0068251.000427-.020262.000427-.0635588 0-5.1926268-4.070748-9.4007319-9.09145-9.4007319-5.020488 0-9.091235 4.2081051-9.091235 9.4007319 0 .3871116.022399.7731567.067838 1.1568557l.00256.0204753.01408.1013102c.250022 1.8683731 1.047233 3.5831812 2.306302 4.9708108-.00064-.0006399.00064.0006399.007253.0078915 1.396026 1.536289 3.291455 2.5833031 5.393601 2.9748936l.02752.0053321v-.0027727l.13653.0228215c.070186.0119439.144211.0236746.243409.039031 2.766879.332724 5.221231-.0661182 7.299484-1.1127057.511777-.2578611.971928-.5423827 1.37064-.8429007.128211-.0968312.243622-.1904632.34346-.2781231.051412-.0452164.092372-.083181.114131-.1051493.468898-.4830897.498124-.6543572.215249-1.0954297-.31146-.4956734-.586228-.9179769-.821744-1.2675504-.082345-.1224254-.154023-.2267215-.214396-.3133151-.033279-.0475624-.033279-.0475624-.054399-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.00256-.0038391c-.256208-.3188605-.431565-.3480805-.715933-.0970445-.030292.0268739-.131624.1051493-.14997.1245582-1.999321 1.775381-4.729508 2.3465571-7.455854 1.7760208-.507724-.1362888-.982595-.3094759-1.419919-.5184948-1.708127-.8565509-2.918343-2.3826022-3.267563-4.1490253l-.02752-.1394881h13.754612zM154.831964 41.1518926c.720831-2.3512494 2.900389-3.9186779 5.44367-3.9186779 2.427657 0 4.739052 1.6486899 5.537747 3.9141989l.054612.1556978h-11.082534l.046505-.1512188zm13.502512 3.4063683c.015146.0006399.015146.0006399.037118.0008531.02176-.0002132.02176-.0002132.044159-.0008531.530543-.0243144.950584-.4766911.950584-1.0271786 0-.0266606-.000854-.0496953-.00256-.0865936.000426-.0068251.000426-.020262.000426-.0635588 0-5.1926268-4.070699-9.4007319-9.091342-9.4007319-5.020217 0-9.091343 4.2081051-9.091343 9.4007319 0 .3871116.022826.7731567.068051 1.1568557l.00256.0204753.01408.1013102c.250019 1.8683731 1.04722 3.5831812 2.306274 4.9708108-.00064-.0006399.00064.0006399.007254.0078915 1.396009 1.536289 3.291417 2.5833031 5.393538 2.9748936l.027519.0053321v-.0027727l.136529.0228215c.070184.0119439.144209.0236746.243619.039031 2.766847.332724 5.22117-.0661182 7.299185-1.1127057.511771-.2578611.971917-.5423827 1.370624-.8429007.128209-.0968312.243619-.1904632.343456-.2781231.051412-.0452164.09237-.083181.11413-.1051493.468892-.4830897.498118-.6543572.215246-1.0954297-.311457-.4956734-.586221-.9179769-.821734-1.2675504-.082344-.1224254-.154022-.2267215-.21418-.3133151-.033492-.0475624-.033492-.0475624-.054612-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.002346-.0038391c-.256419-.3188605-.431774-.3480805-.716138-.0970445-.030292.0268739-.131623.1051493-.149969.1245582-1.999084 1.775381-4.729452 2.3465571-7.455767 1.7760208-.507717-.1362888-.982582-.3094759-1.419902-.5184948-1.708107-.8565509-2.918095-2.3826022-3.267311-4.1490253l-.027733-.1394881h13.754451zM138.32144123 49.7357905c-3.38129629 0-6.14681004-2.6808521-6.23169343-6.04042014v-.31621743c.08401943-3.35418649 2.85039714-6.03546919 6.23169343-6.03546919 3.44242097 0 6.23320537 2.7740599 6.23320537 6.1960534 0 3.42199346-2.7907844 6.19605336-6.23320537 6.19605336m.00172791-15.67913203c-2.21776751 0-4.33682838.7553485-6.03989586 2.140764l-.19352548.1573553V34.6208558c0-.4623792-.0993546-.56419733-.56740117-.56419733h-2.17651376c-.47409424 0-.56761716.09428403-.56761716.56419733v27.6400724c0 .4539841.10583425.5641973.56761716.5641973h2.17651376c.46351081 0 .56740117-.1078454.56740117-.5641973V50.734168l.19352548.1573553c1.70328347 1.3856307 3.82234434 2.1409792 6.03989586 2.1409792 5.27140956 0 9.54473746-4.2479474 9.54473746-9.48802964 0-5.239867-4.2733279-9.48781439-9.54473746-9.48781439M115.907646 49.5240292c-3.449458 0-6.245805-2.7496948-6.245805-6.1425854 0-3.3928907 2.79656-6.1427988 6.245805-6.1427988 3.448821 0 6.24538 2.7499081 6.24538 6.1427988 0 3.3926772-2.796346 6.1425854-6.24538 6.1425854m.001914-15.5438312c-5.28187 0-9.563025 4.2112903-9.563025 9.4059406 0 5.1944369 4.281155 9.4059406 9.563025 9.4059406 5.281657 0 9.562387-4.2115037 9.562387-9.4059406 0-5.1946503-4.280517-9.4059406-9.562387-9.4059406M94.5919049 34.1890939c-1.9281307 0-3.7938902.6198995-5.3417715 1.7656047l-.188189.1393105V23.2574169c0-.4254677-.1395825-.5643476-.5649971-.5643476h-2.2782698c-.4600414 0-.5652122.1100273-.5652122.5643476v29.2834155c0 .443339.1135587.5647782.5652122.5647782h2.2782698c.4226187 0 .5649971-.1457701.5649971-.5647782v-9.5648406c.023658-3.011002 2.4931278-5.4412923 5.5299605-5.4412923 3.0445753 0 5.516841 2.4421328 5.5297454 5.4630394v9.5430935c0 .4844647.0806524.5645628.5652122.5645628h2.2726775c.481764 0 .565212-.0824666.565212-.5645628v-9.5710848c-.018066-4.8280677-4.0440197-8.7806537-8.9328471-8.7806537M62.8459442 47.7938061l-.0053397.0081519c-.3248668.4921188-.4609221.6991347-.5369593.8179812-.2560916.3812097-.224267.551113.1668119.8816949.91266.7358184 2.0858968 1.508535 2.8774525 1.8955369 2.2023021 1.076912 4.5810275 1.646045 7.1017886 1.6975309 1.6283921.0821628 3.6734936-.3050536 5.1963734-.9842376 2.7569891-1.2298679 4.5131066-3.6269626 4.8208863-6.5794607.4985136-4.7841067-2.6143125-7.7747902-10.6321784-10.1849709l-.0021359-.0006435c-3.7356476-1.2047686-5.4904836-2.8064071-5.4911243-5.0426086.1099976-2.4715346 2.4015793-4.3179454 5.4932602-4.4331449 2.4904317.0062212 4.6923065.6675996 6.8557356 2.0598624.4562232.2767364.666607.2256796.9733188-.172263.035242-.0587797.1332787-.2012238.543367-.790093l.0012815-.0019308c.3829626-.5500403.5089793-.7336731.5403767-.7879478.258441-.4863266.2214903-.6738208-.244985-1.0046173-.459427-.3290803-1.7535544-1.0024722-2.4936356-1.2978721-2.0583439-.8211991-4.1863175-1.2199998-6.3042524-1.1788111-4.8198184.1046878-8.578747 3.2393171-8.8265087 7.3515337-.1572005 2.9703036 1.350301 5.3588174 4.5000778 7.124567.8829712.4661613 4.1115618 1.6865902 5.6184225 2.1278667 4.2847814 1.2547527 6.5186944 3.5630343 6.0571315 6.2864205-.4192725 2.4743234-3.0117991 4.1199394-6.6498372 4.2325647-2.6382344-.0549182-5.2963324-1.0217793-7.6043603-2.7562084-.0115337-.0083664-.0700567-.0519149-.1779185-.1323615-.1516472-.1130543-.1516472-.1130543-.1742875-.1300017-.4705335-.3247898-.7473431-.2977598-1.0346184.1302162-.0346012.0529875-.3919333.5963776-.5681431.8632459"></path>
      </g>
    </svg>
  );
  const cartSvg = (
    <svg
      // width="24px"
      height="36px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
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
              <span className="text-lime-600">|</span>
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
              <span className="text-lime-600">|</span>
              <span>Tải ứng dụng</span>
            </p>
            <p className="flex flex-row  gap-[6px] pr-[6px] items-center">
              <span className="text-lime-600">|</span>
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
        <div className="grid grid-cols-[1fr_4fr_1fr] gap-[1rem] h-[120px] mb-[-12px] items-center justify-center">
          <div className="flex flex-row items-center justify-center pb-[1rem]">
            {shopeeSvg}
          </div>
          <div>
            <div className="flex flex-row border border-[1px] border-green-600 w-full">
              <input
                className="w-full  h-[40px] rounded-l-[3px] text-black px-[2rem] py-[1rem]"
                placeholder="Cyber Monday vẫn còn"
              />
              <button className="flex flex-row items-center justify-center bg-red-600 border border-[3px] border-white w-[60px] h-[40px] rounded-r-[3px]">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  className="fill-red-600"
                  // fill="red"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_15_152)">
                    <rect width="24" height="24" className="fill-red-600" />
                    <circle
                      cx="10.5"
                      cy="10.5"
                      r="6.5"
                      stroke="white"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_152">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="flex flex-row text-[12px] justify-between px-[0.5rem] py-[0.5rem]">
              <p className="hover:underline cursor-pointer">
                Săn Sale 1k Điện Thoại
              </p>
              <p className="hover:underline cursor-pointer">Chặn cửa</p>
              <p className="hover:underline cursor-pointer">
                Bình nước cho Nam
              </p>
              <p className="hover:underline cursor-pointer">Baby three</p>
              <p className="hover:underline cursor-pointer">
                Son bóng chính hãng
              </p>
              <p className="hover:underline cursor-pointer">Hoodie nữ</p>
              <p className="hover:underline cursor-pointer">
                Labubu Macaron Popmart
              </p>
              <p className="hover:underline cursor-pointer">Săn IP</p>
            </div>
          </div>
          <div className="flex flex-row pb-[1rem] items-center justify-start">
            {cartSvg}
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
      <div className="bg-gray-100 py-[3rem] flex flex-row text-[12px] items-start justify-between my-[3rem] px-[3%]">
        <div>
          <h3 className="font-bold mb-[1rem]">DỊCH VỤ KHÁCH HÀNG</h3>
          <div className="flex flex-col gap-[6px]">
            <p className="hover:underline cursor-pointer">
              Trung Tâm Trợ Giúp Shopee
            </p>
            <p className="hover:underline cursor-pointer">Shopee log</p>
            <p className="hover:underline cursor-pointer">Shopee Mall</p>
            <p className="hover:underline cursor-pointer">
              Hướng Dẫn Mua Hàng/Đặt Hàng
            </p>
            <p className="hover:underline cursor-pointer">Hướng Dẫn Bán Hàng</p>
            <p className="hover:underline cursor-pointer">Ví ShopeePay</p>
            <p className="hover:underline cursor-pointer">Shopee Xu</p>
            <p className="hover:underline cursor-pointer">Đơn Hàng</p>
            <p className="hover:underline cursor-pointer">Trả Hàng/Hoàn Tiền</p>
            <p className="hover:underline cursor-pointer">Liên Hệ Shopee</p>
            <p className="hover:underline cursor-pointer">
              Chính Sách Bảo Hành
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-[1rem]">SHOPEE VIỆT NAM</h3>
          <div className="flex flex-col gap-[6px]">
            <p className="hover:underline cursor-pointer">Về Shopee</p>
            <p className="hover:underline cursor-pointer">Tuyển Dụng</p>
            <p className="hover:underline cursor-pointer">Điều Khoản Shopee</p>
            <p className="hover:underline cursor-pointer">Chính Sách Bảo Mật</p>
            <p className="hover:underline cursor-pointer">Shopee Mall</p>
            <p className="hover:underline cursor-pointer">Kênh Người Bán</p>
            <p className="hover:underline cursor-pointer">Flash Sale</p>
            <p className="hover:underline cursor-pointer">Tiếp Thị Liên Kết</p>
            <p className="hover:underline cursor-pointer">
              Liên Hệ Truyền Thông
            </p>
          </div>
        </div>
        <div>
          <div className="mb-[3rem]">
            <h3 className="font-bold mb-[1rem]">THANH TOÁN</h3>
            <div className="grid grid-cols-3 gap-[6px] w-full">
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-[1rem]">ĐƠN VỊ VẬN CHUYỂN</h3>
            <div className="grid grid-cols-3 gap-[6px] w-full">
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m20rc1wk8926cf"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/vn-50009109-64f0b242486a67a3d29fd4bcf024a8c6"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="w-[60px] p-[2px] rounded-[2px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/vn-50009109-ec3ae587db6309b791b78eb8af6793fd"
                  alt="logo"
                  className="w-full cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-[1rem]">THEO DÕI SHOPEE</h3>
          <div className="flex flex-col gap-[12px]">
            <p className="flex flex-row gap-[6px]">
              <span>{facebookIcon}</span>
              <span className="hover:underline cursor-pointer">Facebook</span>
            </p>
            <p className="flex flex-row gap-[6px]">
              <span>{instagramIcon}</span>
              <span className="hover:underline cursor-pointer">Instagram</span>
            </p>
            <p className="flex flex-row gap-[6px]">
              <span>{linkedinIcon}</span>
              <span className="hover:underline cursor-pointer">LinkedIn</span>
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-[1rem]">TẢI ỨNG DỤNG SHOPEE</h3>
          <div className="flex flex-row gap-[1rem]">
            <div className="flex flex-row items-center justify-center p-[2px] rounded-[3px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
              <img
                src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472"
                alt="download_qr_code"
                className="Wn14IO cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-between p-[3px]">
              <div className="flex flex-row items-center justify-center p-[2px] rounded-[3px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163"
                  alt="app"
                  className="cursor-pointer"
                />
              </div>
              <div className="flex flex-row items-center justify-center p-[2px] rounded-[3px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def"
                  alt="app"
                  className="cursor-pointer"
                />
              </div>
              <div className="flex flex-row items-center justify-center p-[2px] rounded-[3px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.2)]">
                <img
                  src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0"
                  alt="app"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
