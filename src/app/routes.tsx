import { createBrowserRouter } from 'react-router';
import { Directory } from './pages/directory';
import { CompanyProfile } from './pages/company-profile';
import { Login } from './pages/login';
import { Signup } from './pages/signup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Directory />,
  },
  {
    path: '/company/:id',
    element: <CompanyProfile />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
          <p className="text-xl text-gray-400 mb-8">Page not found</p>
          <a
            href="/"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 
                     hover:shadow-[0_0_30px_rgba(127,90,240,0.5)] transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    ),
  },
]);
