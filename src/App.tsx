import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, redirect, useNavigate } from 'react-router-dom';
import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import Loader from './common/Loader';
import Course from './pages/Course';
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedOut,
  useUser,
} from '@clerk/clerk-react';
import PageNotFound from './pages/PageNotFound';
import Schedule from './pages/Schedule';
import Tutor from './pages/Tutor/Tutor';
import TutorAdd from './pages/Tutor/TutorAdd';

const Calendar = lazy(() => import('./pages/Calendar'));
const Chart = lazy(() => import('./pages/Chart'));
const FormElements = lazy(() => import('./pages/Form/FormElements'));
const FormLayout = lazy(() => import('./pages/Form/FormLayout'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const Tables = lazy(() => import('./pages/Tables'));
const Alerts = lazy(() => import('./pages/UiElements/Alerts'));
const Buttons = lazy(() => import('./pages/UiElements/Buttons'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route index element={<SignIn />} />
            <Route element={<DefaultLayout />}>
              <Route
                path="/main"
                element={
                  <Suspense fallback={<Loader />}>
                    <ECommerce />
                  </Suspense>
                }
              />
              <Route
                path="/calendar"
                element={
                  <Suspense fallback={<Loader />}>
                    <Calendar />
                  </Suspense>
                }
              />
              <Route
                path="/course"
                element={
                  <Suspense fallback={<Loader />}>
                    <Course />
                  </Suspense>
                }
              />
              <Route
                path="/schedule"
                element={
                  <Suspense fallback={<Loader />}>
                    <Schedule />
                  </Suspense>
                }
              />
              <Route path="/tutor">
                <Route
                  index
                  element={
                    <Suspense fallback={<Loader />}>
                      <Tutor />
                    </Suspense>
                  }
                />
                <Route
                  path="/tutor/tutor-add"
                  element={
                    <Suspense fallback={<Loader />}>
                      <TutorAdd />
                    </Suspense>
                  }
                />
              </Route>
              <Route
                path="/profile"
                element={
                  <Suspense fallback={<Loader />}>
                    <Profile />
                  </Suspense>
                }
              />
              <Route
                path="/forms/form-elements"
                element={
                  <Suspense fallback={<Loader />}>
                    <FormElements />
                  </Suspense>
                }
              />
              <Route
                path="/forms/form-layout"
                element={
                  <Suspense fallback={<Loader />}>
                    <FormLayout />
                  </Suspense>
                }
              />
              <Route
                path="/tables"
                element={
                  <Suspense fallback={<Loader />}>
                    <Tables />
                  </Suspense>
                }
              />
              <Route
                path="/settings"
                element={
                  <Suspense fallback={<Loader />}>
                    <Settings />
                  </Suspense>
                }
              />
              <Route
                path="/chart"
                element={
                  <Suspense fallback={<Loader />}>
                    <Chart />
                  </Suspense>
                }
              />
              <Route
                path="/ui/alerts"
                element={
                  <Suspense fallback={<Loader />}>
                    <Alerts />
                  </Suspense>
                }
              />
              <Route
                path="/ui/buttons"
                element={
                  <Suspense fallback={<Loader />}>
                    <Buttons />
                  </Suspense>
                }
              />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </>
      )}
    </ClerkProvider>
  );
}

export default App;
