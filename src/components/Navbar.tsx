import "../assets/font/Teko-VariableFont_wght.ttf"

const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full bg-secondary shadow-sm py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <a
          href="/"
          className="text-3xl font-bold px-4 -ml-4 md:px-0 ml-3 xl:ml-0 transition-all duration-300 !text-white"
          style={{ fontFamily: 'TekoFont, sans-serif' }}
        >
          PETE WELLS MUSIC
        </a>
        {/* NAV */}
        <button
          id="menu-toggle"
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav className="hidden md:flex gap-6">
          <a href="#">About</a>
          <a href="#">Recording</a>
          <a href="#">Drums</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
