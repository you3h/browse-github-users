import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary.tsx';
import { ErrorPage } from './pages/ErrorPage.tsx';
import { Home } from './pages/Home.tsx';
import { SkeletonLoading } from './components';

import './index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <ErrorBoundary>
          <div className='flex justify-center w-screen min-h-[600px] md:px-8 md:py-4 mb-20'>
            <div className='flex flex-col w-full lg:max-w-[994px]'>
              <Suspense fallback={<SkeletonLoading className='w-4' />}>
                <Routes>
                  <Route path='/' element={<Home />} />

                  <Route path='/404' element={<ErrorPage />} />
                  <Route path='*' element={<Navigate to='/404' />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </ErrorBoundary>
      </Router>
    </QueryClientProvider>
  </StrictMode>
);
