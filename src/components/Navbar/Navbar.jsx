const Navbar = () => {
  return (
    <nav className="bg-gray-300 py-2 text-xl">
      <div className="mx-auto flex w-11/12 max-w-screen-xl items-center">
        <h1 className="mr-auto font-bold">Home</h1>
        <ul className="flex gap-4 text-base">
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Social</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
