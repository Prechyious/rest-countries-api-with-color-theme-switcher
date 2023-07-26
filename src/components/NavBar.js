import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const NavBar = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
    };

    useEffect(() => {
        // Check if the user prefers dark mode
        const prefersDarkMode = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        // Get the user's preference from local storage (if available)
        const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));

        // Set the initial theme based on the user's preference (if available)
        setDarkMode(storedDarkMode ?? prefersDarkMode);

        // Add or remove the 'dark' class to the body based on the user's preference
        if (storedDarkMode !== null) {
            document.body.classList.toggle("dark", storedDarkMode);
        } else {
            document.body.classList.toggle("dark", prefersDarkMode);
        }
    }, []);

    useEffect(() => {
        // Update the body class whenever darkMode changes
        document.body.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <nav className="sticky top-0 left-0 flex items-center justify-between p-5 md:py-5 md:px-10 shadow-md z-10 bg-light-mode-bg dark:bg-dark-mode-bg dark:text-light-mode-lements">
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
