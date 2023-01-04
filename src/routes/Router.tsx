import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'))
const Spinner = lazy(() => import('../pages/Spinner'))
const Display = lazy(() => import('../pages/Display'))

const Router = () => {
    return (
        <Suspense fallback={<Spinner/>}>
            <Routes>
                <Route index element={<Home />} />
                <Route path=':idComp' element={<Display/>} />
            </Routes>
        </Suspense>
    );
};

export default Router;