// OtherLinks.js

import { useDebouncedCallback } from 'use-debounce';
import React, { useState, useEffect, useRef, useCallback } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearch, IoMenu } from "react-icons/io5";
import SideNavbar from "../navbar/SideNavbar";
import Link from "next/link";
import clsx from "clsx";
import { Product } from "@/typings";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setSearchTerm, updateSearchTerm } from "@/features/products/productsSlice";

interface OtherLinksProps {
  hover: boolean;
  navbarColor: string;
  cartColor: string;
  onSearch: (query: string) => void;
}

const OtherLinks: React.FC<OtherLinksProps> = ({
  hover,
  navbarColor,
  cartColor,
  onSearch,
}) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.products.searchTerm);
  const { cartCount } = useSelector((state: RootState) => state.carts);
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [inputValue, setInputValue] = useState(searchTerm || '');
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem('searchTerm');
    if (storedSearchTerm) {
      setInputValue(storedSearchTerm);
      dispatch(setSearchTerm(storedSearchTerm));
    }
  }, [dispatch]);

  const handleMenuClick = () => {
    setShowSideNavbar(true);
  };

  const handleSideNavbarClose = () => {
    setShowSideNavbar(false);
  };


  const handleSearchClick = () => {
    setShowSearchInput(true);
  };

  const debouncedHandleSearchChange = useDebouncedCallback(
    (value) => {
      dispatch(updateSearchTerm(value));
      localStorage.setItem('searchTerm', value);
    },
    500 // Debounce delay in milliseconds
  );

  

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newSearchTerm = event.target.value;
    setInputValue(newSearchTerm);
    debouncedHandleSearchChange(newSearchTerm);
    // dispatch(setSearchTerm(newSearchTerm));
    // dispatch(updateSearchTerm(newSearchTerm));
  };


  // const handleClickOutside = useCallback(
  //   (event: MouseEvent) => {
  //     if (
  //       searchRef.current &&
  //       !searchRef.current.contains(event.target as Node)
  //     ) {
  //       setShowSearchInput(false);
  //     }
  //   },
  //   [searchRef]
  // );
  
  // useEffect(() => {
  //   if (showSearchInput) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }
  
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [showSearchInput, handleClickOutside]);

  return (
    <div>
      <div className="flex xl:gap-10 lg:gap-4 items-center gap-4">
        <div className="flex xl:space-x-10 lg:space-x-4 space-x-3">
          <div className="relative">
            <Link href={`/cart`}>
              <HiOutlineShoppingCart className="text-[1.6rem]" />
            </Link>
            {cartCount > 0 && (
              <div
                className={clsx(
                  cartColor,
                  hover ? "bg-red" : "bg-lightGreen",
                  navbarColor ? "bg-lightGreen" : "bg-#FF0000",
                  "text-[8px] text-white flex justify-center rounded-full absolute top-0 right-0 h-3 w-3"
                )}
              >
                <p className="font-bold">{cartCount}</p>
              </div>
            )}
          </div>
          <div className="relative" ref={searchRef}>
            {showSearchInput ? (
              <div className="flex items-center relative">
                <input
                  id="navbar-search-input"
                  type="text"
                  name="search"
                  className="w-[10rem] h-7 pl-3 pr-10 rounded-2xl grow border border-secondaryGrey focus:outline-none focus:ring-1 focus:ring-secondaryGrey"
                  placeholder="Search"
                  value={inputValue}
                  onChange={handleSearchChange}
                />
                <IoSearch className="absolute right-3 h-5 w-5" />
              </div>
            ) : (
              <IoSearch
                className="text-[1.6rem] cursor-pointer transition-transform"
                onClick={handleSearchClick}
              />
            )}
          </div>
        </div>
        <Link href="/contact">
          <button className="btn xl:px-10 lg:px-5 py-1 bg-orange border-none text-white font-normal lg:text-[12px] hover:bg-orange hidden md:flex">
            Contact Us
          </button>
        </Link>
        <IoMenu
          className="flex md:hidden text-[1.8rem]"
          onClick={handleMenuClick}
        />
        {showSideNavbar && <SideNavbar onClose={handleSideNavbarClose} />}
      </div>
    </div>
  );
};

export default OtherLinks;
