"use client";

import "../styles/globals.css";
import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import header from "../styles/Header.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

//import slider from './slider';

export default function Header() {
  const [login, setLogin] = useState(false);
  // const coinCount = 16;

  const userFromLocalStorage = localStorage.getItem("collector");
  const tokenFromLocalStorage = localStorage.getItem("collectorToken");

  useEffect(() => {
    if (!tokenFromLocalStorage) {
      // router.push("/User/login");
      setLogin(false);
    } else {
      setLogin(true);
    }

    // Respond to the "storage" event
    function storageEventHandler(event: StorageEvent) {
      if (event.key === "token") {
        const token = JSON.parse(event.newValue as string);
        setLogin(true);
      }
    }

    // Hook up the event handler
    window.addEventListener("storage", storageEventHandler);

    // Clean up: Remove the event handler when the component unmounts
    return () => {
      window.removeEventListener("storage", storageEventHandler);
    };
  }, []);

  // const user = {
  //   name: "Tom Cook",
  //   email: "tom@example.com",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  // };

  const imageUrl = userFromLocalStorage
    ? `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL}/${
        JSON.parse(userFromLocalStorage).images
      }`
    : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  const handleClick1 = () => {
    router.push("/collector/userProfile");
    console.log("You clicked a profile.");
  };

  const handleClick2 = () => {
    console.log("You clicked a settings.");
  };

  const handleClick3 = () => {
    localStorage.removeItem("collectorToken");
    localStorage.removeItem("collector");
    router.push("/collector/collectorLogin");
    console.log("You clicked a sign out.");
  };

  const navigation = [
    { name: "Dashboard", href: "/collector" },
    { name: "Collector", href: "/collector/collector_side" },
    { name: "Orders", href: "/collector/orders" },
    // { name: "Projects", href: "#" },
    { name: "Calendar", href: "/collector/CalendarComponent" },
    { name: "Reports", href: "/collector/report" },
  ];

  const userNavigation = [
    { name: "Your Profile", href: "collector/userProfile", onclick: handleClick1 },
    { name: "Settings", href: "#", onclick: handleClick2 },
    { name: "Sign out", href: "#", onclick: handleClick3 },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const [currentItem, setCurrentItem] = useState(navigation[0].name);
  const router = useRouter();

  const handleProfileClick = () => {
    console.log();
    console.info("You clicked a profile.");
    router.push("userProfile");
  };

  const goToCollector = () => {
    router.push("/collector");
  };
  return (
    // <>
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {/* 
                      className={`${"rounded-xl"}  ${slider.slide}`} */}
                    <div className={header.logoContainer}>
                      <div className={header.circularBorder}>
                        <img
                          loading="lazy"
                          className={`${"h-8 w-8"}  ${header.slide}`}
                          src="/logo1.png"
                          alt="Your Company"
                          onClick={goToCollector}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {login &&
                        navigation.map((item) => (
                          <a
                            key={item.name}
                            onClick={() => setCurrentItem(item.name)}
                            href={item.href}
                            className={`rounded-md px-3 py-2 text-sm font-medium ${
                              item.name === currentItem
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white"
                            }`}
                            aria-current={
                              item.name === currentItem ? "page" : undefined
                            }
                          >
                            {item.name}
                          </a>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  {/* <div className={header.coinBadge}>
                    {" "}
                    <CoinBadge count={coinCount} />{" "}
                  </div> */}
                  
                  {/* {!login && (
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        <Link href="/User/login">
                          <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            type="button"
                          >
                            Sign In
                          </button>
                        </Link>
                      </div>
                    </div>
                  )} */}

                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                              loading="lazy"
                              // onClick={handleClick}
                              className="h-8 w-8 rounded-full"
                              src={imageUrl}
                              alt="collector Image"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                    onClick={item.onclick}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.name === currentItem
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={
                      item.name === currentItem ? "page" : undefined
                    }
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      loading="lazy"
                      className="h-10 w-10 rounded-full"
                      src={imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    {/* <div className="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {user.email}
                    </div> */}
                  </div>
                  <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{Your content }</div>
          </main> */}
    </div>
    // {/* </> */}
  );
}
