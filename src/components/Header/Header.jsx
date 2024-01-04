import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const catMenu = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClickTopMenu = () => {
    setOpen(!open);
    console.log(open);
  };

  const handleClick = () => {
    console.log('avc');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!catMenu?.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, [catMenu]);

  return (
    <header className="p-6 mx-auto">
      <nav className="flex font-Karla flex-row justify-between items-center relative">
        <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">Coffee Style.</div>
        <ul
          className={`"basis-3/6 ${
            open ? 'ct-top-menu-expanded' : 'hidden'
          } lg:flex lg:justify-end lg:gap-8 uppercase text-sm items-center font-medium text-gray-500"`}
        >
          <li className="ct-top-menu-items">
            <a href="#" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="ct-top-menu-items">
            <a href="#" onClick={handleClick}>
              Products
            </a>
          </li>
          <li className="ct-top-menu-items">
            <a href="#">Blog</a>
          </li>
          <li className="ct-top-menu-items">
            <a href="#">About</a>
          </li>
          <li className="ct-top-menu-items">
            <a href="#">StyleGuide</a>
          </li>
        </ul>

        <ul className="basis-3/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
          <li className="ct-top-menu-items">
            <a href="#" className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ct-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>

              <span className="mx-2">Cart</span>
              <span className="ct-badge-circle bg-orange-400 text-white">10</span>
            </a>
          </li>
        </ul>

        <div className="basis-1/6 lg:hidden flex items-center cursor-pointer px sm:px-4">
          <svg
            ref={catMenu}
            onClick={handleClickTopMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ct-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}
