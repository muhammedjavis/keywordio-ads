import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Dashboard from './components/Dashboard';
import CreateAds from './components/CreateAds';
import { AdTypeProvider } from '../store/AdTypeContext';
import FillData from './components/FillData';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/create-ads',
          element: <CreateAds />,
        },
        {
          path: '/create-ads/fill-data',
          element: <FillData />,
        },
      ],
    },
  ]);

  return (
    <>
      <AdTypeProvider>
        <RouterProvider router={router} />
      </AdTypeProvider>
    </>
  );
}

export default App;
