import react from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Tasks/navbar';
import Tasks from '../src/components/Tasks/tasks';
import Footer from '../src/components/Tasks/footer';
import Signup from './Pages/signup';
import Login from './Pages/login';
import NotFound from './Pages/notFound';
import ThemeContextProvider from './ThemeContext';
const App = () => {
    return (
        <div className="app dark:bg-black">
            <ThemeContextProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Tasks />}></Route>
                    <Route path='/signup' element={<Signup />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/*' element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </ThemeContextProvider>
        </div>
    );
}

export default App;