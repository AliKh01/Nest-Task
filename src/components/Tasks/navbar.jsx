import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

const Navbar = () => {
    const {theme,toggleTheme} = useContext(ThemeContext);
    return (
        <div className="mb-12 border-b-2 border-gray-300 dark:bg-black">
            <div className="mx-4 flex justify-between items-center h-20">
                <div>
                    <Link to="/login" className="navbar-links dark:bg-black">LogIn</Link>
                    <Link to="/signup" className="navbar-links dark:bg-black">SignUp</Link>
                </div>
                <div className="flex">
                    <button onClick={toggleTheme} className="mr-10 border-2 border-black rounded-full w-10 h-10 dark:border-white">{theme === 'light' ? '🌞' : '🌛'}</button>
                    <p><Link to="/" className="text-4xl text-primary font-bold">TaskNest</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;