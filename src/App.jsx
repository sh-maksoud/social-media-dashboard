
// import { useState, useEffect } from 'react';
// import Header from './components/Header';
// import DashboardCard from './components/DashboardCard';
// import OverviewCard from './components/OverviewCard';
// import './App.css';

// const App = () => {
//   const [theme, setTheme] = useState('light');
//   const [dashboardData, setDashboardData] = useState([]);
//   const [overviewData, setOverviewData] = useState([]);
//   // const [totalFollowers, setTotalFollowers] = useState(0);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);

//   useEffect(() => {
//     const fetchTotalFollowers = async () => {
//       try {
//         // const response = await fetch('http://localhost:3000/totalFollowers');
//         // const data = await response.json();
//         // setTotalFollowers(data.totalFollowers || 0);
//       } catch (error) {
//         console.error('Error fetching total followers:', error);
//       }
//     };

//     const fetchDashboardData = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/dashboard');
//         const data = await response.json();
//         setDashboardData(data || []);
//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//       }
//     };

//     const fetchOverviewData = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/overview');
//         const data = await response.json();
//         setOverviewData(data || []);
//       } catch (error) {
//         console.error('Error fetching overview data:', error);
//       }
//     };

//     fetchTotalFollowers();
//     fetchDashboardData();
//     fetchOverviewData();
//   }, []);

//   return (
//     <div className={`app ${theme}`}>
//       <Header toggleTheme={toggleTheme} theme={theme} />
//       <main>
//         {/* <h1>Total Followers: {totalFollowers}</h1> */}
//         <section className="dashboard">
//           {dashboardData.length > 0 ? (
//             dashboardData.map((item, index) => (
//               <DashboardCard
//                 key={index}
//                 icon={item.icon}
//                 platform={item.platform}
//                 username={item.username}
//                 followers={item.followers}
//                 change={item.change}
//                 changeType={item.changeType}
//               />
//             ))
//           ) : (
//             <p>Loading dashboard data...</p>
//           )}
//         </section>
//         <h2 className='sect2'>Overview - Today</h2>

//         <section className="overview">
//           {overviewData.length > 0 ? (
//             overviewData.map((item, index) => (
//               <OverviewCard
//                 key={index}
//                 title={item.title}
//                 icon={item.icon}
//                 platform={item.platform}
//                 count={item.count}
//                 change={item.change}
//                 changeType={item.changeType}
//               />
//             ))
//           ) : (
//             <p>Loading overview data...</p>
//           )}

//         </section>
//       </main>
//     </div>
//   );
// };

// export default App;




import { useState, useEffect } from 'react';
import Header from './components/Header';
import DashboardCard from './components/DashboardCard';
import OverviewCard from './components/OverviewCard';
import './App.css';

// Sample data
const totalFollowers = 23004;

const dashboardData = [
    {
        icon: '/images/icon-facebook.svg',
        platform: 'facebook',
        username: '@nathanf',
        followers: 1987,
        change: '+12',
        changeType: 'positive'
    },
    {
        icon: '/images/icon-twitter.svg',
        platform: 'twitter',
        username: '@nathanf',
        followers: 1044,
        change: '+99',
        changeType: 'positive'
    },
    {
        icon: '/images/icon-instagram.svg',
        platform: 'instagram',
        username: '@realnathanf',
        followers: '11k',
        change: '+1099',
        changeType: 'positive'
    },
    {
        icon: '/images/icon-youtube.svg',
        platform: 'youtube',
        username: 'Nathan F.',
        followers: 8239,
        change: '-144',
        changeType: 'negative'
    }
];

const overviewData = [
    {
        title: 'Page Views',
        icon: '/images/icon-facebook.svg',
        platform: 'facebook',
        count: 87,
        change: '3%',
        changeType: 'positive'
    },
    {
        title: 'Likes',
        icon: '/images/icon-facebook.svg',
        platform: 'facebook',
        count: 52,
        change: '-2%',
        changeType: 'negative'
    },
    {
        title: 'Likes',
        icon: '/images/icon-instagram.svg',
        platform: 'instagram',
        count: 5462,
        change: '2257%',
        changeType: 'positive'
    },
    {
        title: 'Profile Views',
        icon: '/images/icon-instagram.svg',
        platform: 'instagram',
        count: '52k',
        change: '1375%',
        changeType: 'positive'
    },
    {
        title: 'Retweets',
        icon: '/images/icon-twitter.svg',
        platform: 'twitter',
        count: 117,
        change: '303%',
        changeType: 'positive'
    },
    {
        title: 'Likes',
        icon: '/images/icon-twitter.svg',
        platform: 'twitter',
        count: 507,
        change: '553%',
        changeType: 'positive'
    },
    {
        title: 'Likes',
        icon: '/images/icon-youtube.svg',
        platform: 'youtube',
        count: 107,
        change: '-19%',
        changeType: 'negative'
    },
    {
        title: 'Total Views',
        icon: '/images/icon-youtube.svg',
        platform: 'youtube',
        count: 1407,
        change: '-12%',
        changeType: 'negative'
    }
];

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <h1>Total Followers: {totalFollowers}</h1>
        <section className="dashboard">
          {dashboardData.length > 0 ? (
            dashboardData.map((item, index) => (
              <DashboardCard
                key={index}
                icon={item.icon}
                platform={item.platform}
                username={item.username}
                followers={item.followers}
                change={item.change}
                changeType={item.changeType}
              />
            ))
          ) : (
            <p>Loading dashboard data...</p>
          )}
        </section>
        <h2 className='sect2'>Overview - Today</h2>
        <section className="overview">
          {overviewData.length > 0 ? (
            overviewData.map((item, index) => (
              <OverviewCard
                key={index}
                title={item.title}
                icon={item.icon}
                platform={item.platform}
                count={item.count}
                change={item.change}
                changeType={item.changeType}
              />
            ))
          ) : (
            <p>Loading overview data...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
