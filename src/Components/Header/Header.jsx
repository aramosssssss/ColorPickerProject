import React from 'react';

function Header() {
  return (
    <header className=" h-14 		flex justify-between pl-10 pr-10 items-center">
      <div>
        <h1 className="text-white	text-2xl font-bold uppercase">
          <a href="/">Flat UI Colors 2</a>
        </h1>
      </div>
      <div>
        <nav>
          <ul className="flex gap-x-10 font-semibold text-white ">
            <li>
              <a href="/">Designer Inspiration</a>
            </li>
            <li>
              <a href="/">Subscribe</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
