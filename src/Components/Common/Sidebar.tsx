/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import  { useEffect, useRef, useState } from 'react';
import { FaShoppingCart, FaHandshake, FaTruck, FaBox, FaPlus } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';


interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });
  

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);
  

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen w-1/5 flex-col overflow-y-hidden duration-300 ease-linear bg-white lg:static lg:translate-x-0  border-r-4  ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.">
        <Link to="/">
          {/* <img src={Logo} alt="Logo" /> */}
          <h3 className=" ml-4  text-4xl font-bold text-rose-600 py-12">
              LocalCircle
            </h3>
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto ">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5  px-4 lg:mt-9 lg:px-6">
        <ul className=" ">
        
        <li className=" flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-lg   hover:text-rose-600 text-black  ">
       <FaShoppingCart className="mr-2" />
       <select className="">
                <option value="" className="">New Orders</option>
                      <option value="">Kilogram</option>
                      <option value="">Gram</option>
                      <option value="">Liter</option>
                      <option value="">Milliliter</option>
                      <option value="">Watt</option>
                      <option value="">Kilowatt</option>
                      <option value="">Dozen</option>
                      <option value="">Piece</option>
                      <option value="">Number</option>
                      <option value="">M</option>
                      <option value="">L</option>
                      <option value="">XL</option>
                      <option value="">XXL</option>
                      <option value="">S</option>
                      <option value="">XXXL</option>
                    </select>
        </li>
        
        <Link to='/acceptedorders'>
        <li className=" flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-lg  hover:bg-gray-700 hover:text-gray-300 text-gray-300  ">
        <FaHandshake className="mr-2" />Accepted Orders
        </li>
        </Link>
        <Link to='/outfordelivery'>
        <li className=" flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-lg  hover:bg-gray-700 hover:text-gray-300 text-gray-300  ">
        <FaTruck className="mr-2" />Out For Delivery
        </li>
        </Link>
        <Link to='/delivered'>
        <li className=" flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-lg  hover:bg-gray-700 hover:text-gray-300 text-gray-300  ">
        <FaBox className="mr-2" />Delivered Orders
        </li>
        </Link>
       
        <Link to='/addproduct'>
          <li className="flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-lg hover:bg-gray-700 hover:text-gray-300 text-gray-300">
            <FaPlus className="mr-2" /> Add Product
          </li>
        </Link>
        <Link to='/'>
        <li className=" flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-lg  hover:bg-gray-700 hover:text-gray-300 text-gray-300  ">
        <FaPlus className="mr-2" /> Add Wallet Balance 
        </li>
        </Link>
      </ul>
          {/* <!-- Menu Group --> */}
                  </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};


export default Sidebar;
