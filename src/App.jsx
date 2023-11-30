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
      element: (
        <>
          <RootLayout />
          <Dashboard />
        </>
      ),
    },

    {
      path: '/dashboard',
      element: (
        <>
          <RootLayout />
          <Dashboard />
        </>
      ),
    },
    {
      path: '/create-ads',
      element: (
        <>
          <RootLayout />
          <CreateAds />
        </>
      ),
    },
    {
      path: '/create-ads/fill-data',
      element: (
        <>
          <RootLayout />
          <FillData />
        </>
      ),
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
