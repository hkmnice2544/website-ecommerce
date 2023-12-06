import React from "react";
import Image from "next/image";
import imgbn from "../../../public/Img/Homepage/Banner.png";
import living from "../../../public/Img/Homepage/Living Room.png";
import bedrm from "../../../public/Img/Homepage/Bed Room.png";
import kitcn from "../../../public/Img/Homepage/Kitchen.png";
import footer from "../../../public/Img/Homepage/Footer.png";
import ig from "../../../public/Img/Homepage/instagram.png";
import yt from "../../../public/Img/Homepage/youtube.png";
import fb from "../../../public/Img/Homepage/facebook.png";
import ticket from "../../../public/Img/Homepage/ticket-percent.png";
import close from "../../../public/Img/Homepage/close.png";
import email from "../../../public/Img/Homepage/email.png";
import rectangle from "../../../public/Img/Homepage/Rectangle.png";
import delivery from "../../../public/Img/Homepage/fast delivery.png";
import money from "../../../public/Img/Homepage/money.png";
import lock from "../../../public/Img/Homepage/lock 01.png";
import call from "../../../public/Img/Homepage/call.png";
import lower from "../../../public/Img/Homepage/new lower.png";
import art1 from "../../../public/Img/Homepage/Articles1.png";
import art2 from "../../../public/Img/Homepage/Articles2.png";
import art3 from "../../../public/Img/Homepage/Articles3.png";
import vecter from "../../../public/Img/Homepage/vecter.png";
import heart from "../../../public/Img/Homepage/Heart.png";
import cart from "../../../public/Img/Homepage/Cart.png";
import igb from "../../../public/Img/Homepage/ig-b.png";
import fbb from "../../../public/Img/Homepage/fb-b.png";
import ytb from "../../../public/Img/Homepage/yt-b.png";
import search from "../../../public/Img/Homepage/search-nav.png";
import Link from "next/link";


const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
];
const HomePage = () => {
  return (
    <div>
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 shadow">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        ></div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Image className="" src={ticket} alt={""} />
          <p className="text-sm leading-6 text-gray-900 -ml-2">
            <strong className="font-semibold">
              30% off storewide — Limited time!{" "}
            </strong>
          </p>
          <a
            href="#"
            className="font-semibold text-blue-500 border-b border-blue-500"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            Shop Now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <Image className="" src={close} alt={""} />
            <span className="sr-only">Dismiss</span>
          </button>
        </div>
      </div>
      <div className=" navbar bg-base-100 shadow">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn bg-white border-none drawer-button ml-8">
                  <Image src={vecter} alt={""}></Image>
                </label>
               
              </div>
              <div className="drawer-side" style={{ zIndex: 9999 }}>
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <ul className="menu p-4 w-11/12 min-h-full bg-white text-base-content">
                  <div className="flex justify-between items-center p-2">
                    <h1 className="text-lg font-semibold">3legant.</h1>
                    <button>
                      <Image src={close} alt={""}></Image>
                    </button>
                  </div>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      placeholder="Search"
                      className="input input-bordered w-full flex justify-center max-w-2xl pl-10"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                      {/* Add your icon component or image here */}
                      <Image src={search} alt="Search Icon" />
                    </div>
                  </div>

                  <li className="mt-2">
                    <a>Home</a>
                  </li>
                  <hr className="my-2 border-t border-gray-300" />
                  <li>
                    <details>
                      <summary>Shop</summary>
                      <ul>
                        <li>
                          <a>Submenu 1</a>
                        </li>
                        <li>
                          <a>Submenu 2</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <hr className="my-2 border-t border-gray-300" />
                  <li>
                    <details>
                      <summary>Product</summary>
                      <ul>
                        <li>
                          <a>Submenu 1</a>
                        </li>
                        <li>
                          <a>Submenu 2</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <hr className="my-2 border-t border-gray-300" />
                  <li>
                    <a>Contact Us</a>
                  </li>
                  <hr className="my-2 border-t border-gray-300" />
                  <li className="mt-auto ">
                    <div className="mt-auto flex justify-between items-center">
                      <a>Cart</a>

                      <div className="dropdown dropdown-end ">
                        <div
                          tabIndex={0}
                          role="button"
                         
                        >
                          <div className="indicator ">
                            <Image src={cart} alt={""}></Image>
                            <span className="badge badge-sm indicator-item bg-black text-white">
                              2
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <hr className=" border-t border-gray-300" />
                  <li>
                    <div className=" flex justify-between items-center">
                      <a>Wishlist</a>

                      <div className="dropdown dropdown-end ">
                        <div
                          tabIndex={0}
                          role="button"
                         
                        >
                          <div className="indicator ">
                            <Image src={heart} alt={""}></Image>
                            <span className="badge badge-sm indicator-item bg-black text-white">
                              2
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <hr className=" border-t border-gray-300" />
                  <button className=" mt-5 btn btn-mdsm:btn-sm md:btn-md lg:btn-lg bg-black text-white">
                    Sign In
                  </button>
                  <div className="grid grid-cols-3 w-32 m-5 ml-1">
                    <button>
                      <Image className="mr-auto" src={igb} alt={""}></Image>
                    </button>
                    <button>
                      <Image className="mr-auto" src={fbb} alt={""}></Image>
                    </button>
                    <button>
                      <Image className="mr-auto" src={ytb} alt={""}></Image>
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <a className="text-xl ml-0 lg:float-left lg:ml-36 sm:ml-32 ">
            3legant.
          </a>
        </div>
        <div className="navbar-center hidden lg:flex  ml-32">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr- lg:flex  lg:mr-36">
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="dropdown dropdown-end hidden lg:flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator ">
                <Image src={cart} alt={""}></Image>
                <span className="badge badge-sm indicator-item bg-black text-white">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body flex ">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className="carousel w-4/5 ">
          <div id="slide1" className="carousel-item relative w-full">
            <Image className="w-full" src={imgbn} alt={""} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Image className="w-full" src={imgbn} alt={""} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <Image className="w-full" src={imgbn} alt={""} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <Image className="w-full" src={imgbn} alt={""} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h1 className="font-semibold text-gray-900 text-7xl ml-8 mt-8">
              Simply Unique
              <strong style={{ fontWeight: "bold", color: "gray" }}>
                /
              </strong>{" "}
            </h1>
            <h1 className="font-semibold text-gray-900 text-7xl ml-8 ">
              Simply Better
              <strong style={{ fontWeight: "bold", color: "gray" }}>
                .
              </strong>{" "}
            </h1>
          </div>
          <div className="w-full md:w-1/2 p-24">
            <h1>
              <strong style={{ fontWeight: "bold", color: "black" }}>
                3legant t
              </strong>{" "}
              is a gift & decorations store based in HCMC, Vietnam. Est since
              2019.
            </h1>
          </div>
        </div>
      </div>
      <div className=" -mt-4">
        <div className="mx-auto max-w-screen-xl  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className=" row-span-3 ...">
              {callouts.map((callout, index) => (
                <div
                  key={callout.name}
                  className={`row-span-${index === 0 ? "3" : "2"} col-span-${
                    index === 1 ? "2" : "1"
                  } ...`}
                >
                  <div className={index === 0 ? "w-full" : "w-full md:w-1/2 "}>
                    <div className="relative ">
                      <Image
                        className="m-auto"
                        src={living}
                        alt={""}
                        width={550}
                        height={2}
                      />
                      <h1 className="font-semibold text-2xl  absolute top-10 left-20 text-black">
                        Living Room
                      </h1>
                      <a
                        href="#"
                        className="absolute top-20 left-20 font-semibold text-black border-b border-black"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        Shop Now <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-1 ...">
              {callouts.map((callout, index) => (
                <div
                  key={callout.name}
                  className={`row-span-${index === 0 ? "3" : "2"} col-span-${
                    index === 1 ? "2" : "1"
                  } ...`}
                >
                  <div className={index === 0 ? "w-full" : "w-full md:w-1/2 "}>
                    <div className="relative ">
                      <Image
                        className="m-auto"
                        src={bedrm}
                        alt={""}
                        width={550}
                        height={2}
                      />
                      <h1 className="font-semibold text-2xl absolute top-48 left-20 text-black">
                        Bedroom
                      </h1>
                      <a
                        href="#"
                        className="absolute top-56 left-20 font-semibold text-black border-b border-black"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        Shop Now <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row-span-2 col-span-1 ...">
              {callouts.map((callout, index) => (
                <div
                  key={callout.name}
                  className={`row-span-${index === 0 ? "3" : "2"} col-span-${
                    index === 1 ? "2" : "1"
                  } ...`}
                >
                  <div className={index === 0 ? "w-full" : "w-full md:w-1/2 "}>
                    <div className="relative ">
                      <Image
                        className="m-auto"
                        src={kitcn}
                        alt={""}
                        width={550}
                        height={2}
                      />
                      <h1 className="font-semibold text-2xl  absolute top-48 left-20 text-black">
                        Kitchen
                      </h1>
                      <a
                        href="#"
                        className="absolute top-56 left-20 font-semibold text-black border-b border-black"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        Shop Now <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl mt-2 ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full ">
            <h1 className="justify-between font-semibold text-gray-900 text-4xl ml-10 mt-8">
              New
            </h1>
            <h1 className="justify-between font-semibold text-gray-900 text-4xl ml-10 mt-8">
              Arrivals
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl mt-2 ">
        <div className="sm:flex-row lg:flex-row grid grid-cols-2 md:flex lg:flex gap-4  mb-8">
          <div className="md:ml-8 md:w-1/4 sm:m-auto ">
            <div className=" sm:w-40 md:w-72 bg-neutral-100 p-10">
              <Image className="-ml-4" src={delivery} alt={""} />
              <h1 className="-ml-4 my-3 font-semibold text-gray-900  text-xl">
                Free Shipping
              </h1>
              <p className="-ml-4 text-gray-500 text-sm">Order above $200</p>
            </div>
          </div>
          <div className="-ml-3 md:w-1/4 sm:m-auto">
            <div className="sm:w-40 md:w-72 bg-neutral-100 p-10">
              <Image className="-ml-4" src={money} alt={""} />
              <h1 className="-ml-4 my-3 font-semibold text-gray-900  text-xl">
                Money-back
              </h1>
              <p className="-ml-4 text-gray-500 text-sm">30 days guarantee</p>
            </div>
          </div>
          <div className="md:-ml-3 md:w-1/4  sm:m-auto">
            <div className="sm:w-40 md:w-72 bg-neutral-100 p-10">
              <Image className="-ml-4" src={lock} alt={""} />
              <h1 className="-ml-4 my-3 font-semibold text-gray-900  text-xl">
                Secure Payments
              </h1>
              <p className="-ml-4 text-gray-500 text-sm">Secured by Stripe</p>
            </div>
          </div>
          <div className="-ml-3 md:w-1/4 sm:m-auto">
            <div className="sm:w-40 md:w-72 bg-neutral-100 p-10">
              <Image className="-ml-4" src={call} alt={""} />
              <h1 className="-ml-4 my-3 font-semibold text-gray-900  text-xl">
                24/7 Support
              </h1>
              <p className="-ml-4 text-gray-500 text-sm">
                Phone and Email support
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl mb-8 max-h-full">
        <div className="flex flex-col md:flex-row">
          <div className="w-full -ml-32">
            <Image className="" src={lower} alt={""} width={790} />
          </div>
          <div className="relative bg-neutral-100 -ml-10 -mr-28 md:w-11/12">
            <div className=" p-16">
              <p className="mt-24 mb-4 font-bold text-base text-blue-600 ">
                SALE UP TO 35% OFF
              </p>
              <h1 className=" font-semibold text-4xl">HUNDREDS of</h1>
              <h1 className="mb-5 font-semibold text-4xl">New lower prices!</h1>
              <p className="mr-40 mt-1 text-lg">
                It’s more affordable than ever to give every room in your home a
                stylish makeover
              </p>
              <a
                href="#"
                className="absolute top-96 font-semibold text-black border-b border-black"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Shop Now <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl mt-2 w-">
        <div className="flex flex-col md:flex-row">
          <div className="w-full relative">
            <h1 className="justify-between font-semibold text-gray-900 text-4xl ml-8 mt-8">
              Articles
            </h1>
            <a
              href="#"
              className="absolute top-10 right-16 font-semibold text-black border-b border-black"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              More Articles<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="bg-white mb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  lg:max-w-none lg:grid-cols-3">
              <article className="flex max-w-xl flex-col items-start justify-between relative">
                <div className="flex items-center gap-x-4 text-xs">
                  <Image src={art1} alt={""}></Image>
                </div>
                <div>
                  <h1 className="mt-4 font-medium  text-xl">
                    7 ways to decor your home
                  </h1>
                  <p></p>
                  <a
                    href="#"
                    className="absolute top-96 right-50 font-semibold text-black border-b border-black"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read More<span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </article>
              <article className="flex max-w-xl flex-col items-start justify-between relative">
                <div className="flex items-center gap-x-4 text-xs">
                  <Image src={art2} alt={""}></Image>
                </div>
                <div>
                  <h1 className=" font-medium  text-xl">
                    Kitchen organization
                  </h1>
                  <a
                    href="#"
                    className="absolute top-96 right-50 font-semibold text-black border-b border-black"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read More<span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </article>
              <article className="flex max-w-xl flex-col items-start justify-between relative">
                <div className="flex items-center gap-x-4 text-xs">
                  <Image src={art3} alt={""}></Image>
                </div>
                <div>
                  <h1 className=" font-medium  text-xl">Decor your bedroom</h1>
                  <a
                    href="#"
                    className="absolute top-96 right-50 font-semibold text-black border-b border-black"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read More<span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative isolate overflow-hidden bg-zinc-900  py-24 sm:py-48">
        <Image
          src={footer}
          alt=""
          className="absolute inset-0 -z-10   w-full object-cover object-right md:object-center"
        ></Image>
        <div className="flex justify-center  ">
          <h1 className=" font-medium  text-5xl  absolute top-28 text-black">
            Join Our Newsletter
          </h1>
          <p className="  text-xl  absolute top-44  text-black">
            Sign up for deals, new products and promotions
          </p>
          <div className="mt-6 flex  w-2/6 gap-x-4 absolute top-52 border-b-2 border-gray-300">
            <Image
              className=" mt-2 -mr-4"
              src={email}
              alt={""}
              width={20}
              height={20}
              style={{ objectFit: "cover", width: "5%", height: "5%" }}
            />
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-500 "
              placeholder="Email address"
            />
            <button
              type="submit"
              className="flex-none rounded-md px-3.5 py-2.5 text-sm  font-normal  text-gray-500  "
            >
              Signup
            </button>
          </div>
        </div>
      </div>

      <footer className="footer footer-center p-10 bg-zinc-900 text-base-content">
        <nav className="flex items-center justify-between gap-4">
          <h1 className="text-white text-2xl font-semibold">
            3legant
            <strong style={{ fontWeight: "bold", color: "gray" }}>
              .
            </strong>{" "}
          </h1>
          <Image className="hidden lg:block" src={rectangle} alt={""} />
          <p className="text-white lg:mr-96">Gift & Decoration Store</p>
          <div className="flex gap-10 ml-20 ">
            <a className="link link-hover text-white">Home</a>
            <a className="link link-hover text-white">Shop</a>
            <a className="link link-hover text-white">Product</a>
            <Link href="/blogpost" className="text-white">Blog</Link>
            <a className="link link-hover text-white">Contact Us</a>
          </div>
          
        </nav>

        <div className="lg:w-4/5 border-b border-gray mt-4"></div>

        <aside className="lg:w-4/5 -mt-8">
          <nav className="grid grid-flow-col gap-6">
            <p className="text-white">
              Copyright © 2023 3legant. All right reserved
            </p>
            <a className="link link-hover text-white">Privacy Policy</a>
            <a className="link link-hover text-white lg:mr-36">Terms of Use</a>
            <div className="lg:float-left lg:ml-80">
              <nav className="grid grid-flow-col gap-7">
                <a className="text-white link link-hover">
                  <Image className="w-full" src={ig} alt={""} />
                </a>
                <a className="text-white link link-hover">
                  <Image className="w-full" src={fb} alt={""} />
                </a>
                <a className="text-white link link-hover">
                  <Image className="w-full" src={yt} alt={""} />
                </a>
              </nav>
            </div>
          </nav>
        </aside>
      </footer>
    </div>
  );
};

export default HomePage;
