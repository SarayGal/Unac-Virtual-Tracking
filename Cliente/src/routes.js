import {
  Navigate
} from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CustomerList from 'src/pages/Materias';
import Dashboard from 'src/pages/Dashboard';
import Settings from 'src/pages/Settings';
import Demo from 'src/pages/Calendar';
import SignIn from 'src/components/login/login'
import Registroinicio from 'src/components/registro/Inicio'

const routes = [{
    path: 'login',
    element: < SignIn / >
  },
  {
    path: 'registro',
    element: < Registroinicio / >
  },
  {
    path: 'app',
    element: < DashboardLayout / > ,
    children: [{
        path: 'account',
        element: < Account / >
      },
      {
        path: 'customers',
        element: < CustomerList / >
      },
      {
        path: 'dashboard',
        element: < Dashboard / >
      },
      {
        path: 'products',
        element: < Demo / >
      },
      {
        path: 'settings',
        element: < Settings / >
      },
    ]
  },

  {
    path: '/',
    element: < MainLayout / > ,
    children: [{
      path: '/',
      element: < Navigate to = "/app/dashboard" / >
    }]
  }
];

export default routes;