import React from 'react';

function Footer() {
  return (
    <footer className="h-14 ">
      <div className="flex flex-row text-white	 justify-center">
        <h2 className="	text-l font-bold uppercase mr-10">More</h2>
        <ul className="flex gap-x-10">
          <li>
            <a href="">Contact me</a>
          </li>
          <li>
            <a href="">Subscribe</a>
          </li>
          <li>
            <a href="">Submit</a>
          </li>
          <li>
            <a href="">Replay Onboarding</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
