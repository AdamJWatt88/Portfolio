import React, { Fragment, useRef } from "react";
import { Link } from "gatsby";

import HamMenu from "./HamMenu";
import Modal from "./Modal";

const Menu = () => {
  const isBrowser = () => typeof window !== "undefined";

  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const modalRef = useRef();

  const openMenu = () => {
    isBrowser() && document.querySelector("body").classList.add("modal-open");
    ref.current.classList.add("ham-menu--close");
    modalRef.current.openModal();
    let attr = JSON.parse(ref.current.getAttribute("aria-expanded"));
    ref.current.setAttribute("aria-expanded", !attr);

    setTimeout(() => {
      ref2.current.classList.add("ham-menu--close");
      ref3.current.classList.add("mobile-nav__sidebar--open");
    }, 10);

    // add keyboard accessibility
    ref.current.addEventListener("keydown", handleKeyDown);
  };

  const closeMenu = () => {
    isBrowser() &&
      document.querySelector("body").classList.remove("modal-open");
    ref3.current.classList.remove("mobile-nav__sidebar--open");
    ref2.current.classList.remove("ham-menu--close");
    ref.current.classList.remove("ham-menu--close");
    let attr = JSON.parse(ref.current.getAttribute("aria-expanded"));
    ref.current.setAttribute("aria-expanded", !attr);

    setTimeout(() => {
      modalRef.current.closeModal();
    }, 200);

    // remove event listener for keyboard accessibility
    ref.current.removeEventListener("keydown", handleKeyDown);
  };

  // function to handle keydown events
  const handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      // if enter or space is pressed, open the menu
      openMenu();
    } else if (event.keyCode === 27) {
      // if escape is pressed, close the menu
      closeMenu();
    }
  };

  return (
    <div className='hero__nav container'>
      <HamMenu ref={ref} onClick={openMenu} />
      <Modal ref={modalRef}>
        <aside ref={ref3} className='mobile-nav__sidebar'>
          <HamMenu ref={ref2} onClick={closeMenu} />
          <nav>
            <ul>
              <li>
                <Link
                  className='mobile-nav__link'
                  onClick={closeMenu}
                  to='#about-me'>
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  className='mobile-nav__link'
                  onClick={closeMenu}
                  to='#projects'>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className='mobile-nav__link'
                  onClick={closeMenu}
                  to='#footer'>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </Modal>
    </div>
  );
};

export default Menu;
