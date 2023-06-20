import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MyFavoritePage from 'pages/MyFavoritePage/MyFavoritePage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const Notes = lazy(() => import('./notes/Notes'));

const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>....Loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/note" element={<Notes />} />
        <Route path="/favorite" element={<MyFavoritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
