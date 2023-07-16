import Logo from "./icons/Logo";

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="flex items-center container mx-auto px-4">
        <Logo width={40} height={40} />
        <a href="/" className="text-gray-500 mx-4 hover:text-gray-700">
          AutoWDS
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="/pricing" className="text-gray-500 hover:text-gray-700">
              价格
            </a>
          </li>
          <li>
            <a href="/docs" className="text-gray-500 hover:text-gray-700">
              文档
            </a>
          </li>
          <li>
            <a href="/cloud" className="text-gray-500 hover:text-gray-700">
              云采集
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
