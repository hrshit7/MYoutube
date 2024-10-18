import './App.css';
import Body from './components/Body'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import VideoContainer from './components/VideoContainer';
import MainContainer from './components/MainContainer';
import SearchVideoPage from './components/SearchVideoPage';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';

function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children: [
        {
          path:"/",
          element:<MainContainer/>,
        },
        {
          path:"watch",
          element:<VideoContainer/>,
        },
        {
          path:"results",
          element:<SearchVideoPage/>,
        },
        {
          path:"demo",
          element:<><Demo/><Demo2/></>,
        },
      ]
    },
  ])

  return (
    <Provider store={appStore}>
      <div>
        
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
