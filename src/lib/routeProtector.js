// 'use client';

// import { useRouter } from 'next/router';
// import { useAuthStore } from './store/authStore';

// const RouteProtector = ({ children }) => {

//   const { isAuthenticated } = useAuthStore();
//   const router = useRouter();

//   if (!isAuthenticated) {
//     router.push('/'); // Redirect to the login page if not authenticated
//     return null;
//   }

//   return children; // If authenticated, render the protected page
// };

// export default RouteProtector;

import React from 'react'

const routeProtector = () => {
  return (
    <div>routeProtector</div>
  )
}

export default routeProtector
