import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const NavBar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const changeTheme = () => {
        document.body.classList.toggle("dark");
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        // Check if the user prefers dark mode
        const prefersDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        // Set the initial theme based on the user's preference
        setDarkMode(prefersDarkMode);

        // Add or remove the 'dark' class to the body based on the user's preference
        if (prefersDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, []);

    return (
        <nav
            className="sticky top-0 left-0 flex items-center justify-between p-5 md:py-5 md:px-10 shadow-lg z-10 bg-light-mode-bg
        dark:bg-dark-mode-elements dark:text-light-mode-elements"
        >
            <h1 className="font-bold">Where in the world?</h1>
            <button
                className="flex items-center gap-2 font-bold"
                onClick={changeTheme}
            >
                {darkMode ? <FaSun /> : <FaMoon />}
                {darkMode ? <span>Light Mode</span> : <span>Dark Mode</span>}
            </button>
        </nav>
    );
};

export default NavBar;
