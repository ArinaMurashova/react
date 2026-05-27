import { Route, Routes } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout/MainLayout';
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import NotFound from '@/pages/NotFound/NotFound';
import Calculate from '@/pages/Calculate/Calculate';
import Coder from '@/pages/Coder/Coder';
import Matrix from '@/pages/Matrix/Matrix';


const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="calc" element={<Calculate />} />
            <Route path="*" element={<NotFound />} />
            <Route path="matrix" element={<Matrix />} />
            <Route path="coder" element={<Coder/>} />
        </Route>
    </Routes>
};

export default AppRouter;