const NavBar = () => {
    return (
        <nav className="sticky top-0 left-0 flex items-center justify-between p-5 shadow-md z-10 bg-light-mode-bg">
            <h1 className="font-bold">Where in the world?</h1>
            <button>Dark Mode</button>
        </nav>
    );
};

export default NavBar;
