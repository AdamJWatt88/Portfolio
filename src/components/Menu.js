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

    setTimeout(() => {
      ref2.current.classList.add("ham-menu--close");
      ref3.current.classList.add("mobile-nav__sidebar--open");
    }, 10);
  };

  const closeMenu = () => {
    isBrowser() &&
      document.querySelector("body").classList.remove("modal-open");
    ref3.current.classList.remove("mobile-nav__sidebar--open");
    ref2.current.classList.remove("ham-menu--close");
    ref.current.classList.remove("ham-menu--close");

    setTimeout(() => {
      modalRef.current.closeModal();
    }, 200);
  };

  return (
    <Fragment>
      <HamMenu ref={ref} onClick={openMenu} />
      <Modal ref={modalRef}>
        <HamMenu ref={ref2} onClick={closeMenu} />
        <aside ref={ref3} className='mobile-nav__sidebar'>
          <nav>
            <ul>
              <Link
                className='mobile-nav__link'
                onClick={closeMenu}
                to='#about-me'>
                <li>About Me</li>
              </Link>
              <Link
                className='mobile-nav__link'
                onClick={closeMenu}
                to='#projects'>
                <li>Projects</li>
              </Link>
              <Link
                className='mobile-nav__link'
                onClick={closeMenu}
                to='#footer'>
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
        </aside>
      </Modal>
    </Fragment>
  );
};

export default Menu;
