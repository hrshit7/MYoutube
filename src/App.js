import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import VideoContainer from './components/VideoContainer';
import MainContainer from './components/MainContainer';
import SearchVideoContainer from './components/SearchVideoContainer';

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
          element:<VideoContainer/>
        },
        {
          path:"results",
          element:<SearchVideoContainer/>
        },
      ]
    },
  ])

  return (
    <Provider store={appStore}>
      <div>
        <Header/>
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
