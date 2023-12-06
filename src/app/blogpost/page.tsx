"use client";
import { useState } from "react";
import Image from "next/image";
import close from "../../../public/Img/Homepage/close.png";
import vecter from "../../../public/Img/Homepage/vecter.png";
import heart from "../../../public/Img/Homepage/Heart.png";
import cart from "../../../public/Img/Homepage/Cart.png";
import igb from "../../../public/Img/Homepage/ig-b.png";
import fbb from "../../../public/Img/Homepage/fb-b.png";
import ytb from "../../../public/Img/Homepage/yt-b.png";
import search from "../../../public/Img/Homepage/search-nav.png";
import user from "../../../public/Img/Homepage/user.png";
import calendar from "../../../public/Img/Homepage/calendar.png";
import blogp1 from "../../../public/Img/Homepage/blog-p-1.png";
import blogp2 from "../../../public/Img/Homepage/blog-p-2.png";
import blogp3 from "../../../public/Img/Homepage/blog-p-3.png";
import blogp4 from "../../../public/Img/Homepage/blog-p-4.png";
import blogp5 from "../../../public/Img/Homepage/blog-p-5.png";
import blogp6 from "../../../public/Img/Homepage/blog-p-6.png";
import blogp7 from "../../../public/Img/Homepage/blog-p-7.png";
import rectangle from "../../../public/Img/Homepage/Rectangle.png";
import Link from "next/link";
import footer from "../../../public/Img/Homepage/Footer.png";
import email from "../../../public/Img/Homepage/email.png";
import ig from "../../../public/Img/Homepage/instagram.png";
import yt from "../../../public/Img/Homepage/youtube.png";
import fb from "../../../public/Img/Homepage/facebook.png";

function BlogPost() {
  const [step, setStep] = useState(1);
  return (
    <div>
      <div className=" navbar bg-base-100 shadow">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className="btn bg-white border-none drawer-button ml-8"
                >
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
                        <div tabIndex={0} role="button">
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
                        <div tabIndex={0} role="button">
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
          <a className="font-semibold text-xl ml-0 lg:float-left lg:ml-36 sm:ml-32 ">
            3legant.
          </a>
        </div>
        <div className="navbar-center hidden lg:flex  ml-32">
          <ul className="menu menu-horizontal px-1">
            <li className={`${step === 1 ? "font-bold" : " "}`}>
              <a onClick={() => setStep(2)}>Home</a>
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
                <span className="badge badge-sm indicator-item bg-black text-white">
                  8
                </span>
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

      <div className="text-sm breadcrumbs ml-40">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li className=" font-medium">
            How to make a busy bathroom a place to relax
          </li>
        </ul>
      </div>
      <p className="ml-40 mt-8 font-semibold text-xs">Article</p>
      <div className="ml-40 ">
        <h1 className="text-5xl font-medium mt-6">
          How to make a busy bathroom{" "}
        </h1>
        <h1 className="text-5xl font-medium">a place to relax</h1>
      </div>

      <div className="mx-auto max-w-screen-xl ml-40 mt-6 mb-6">
        <div className="flex flex-col md:flex-row">
          <div className=" float-left mr-1">
            <Image src={user} alt={""}></Image>
          </div>
          <h1 className=" text-gray-500 text-sm">Henrik Annemark</h1>
          <div className="ml-10 float-left mr-1">
            <Image src={calendar} alt={""}></Image>
          </div>
          <h1 className="text-gray-500 text-sm">October 16, 2023</h1>
        </div>
      </div>

      <div className="ml-40 w-4/5">
        <Image src={blogp1} alt={""} width={1200}></Image>
        <p className="mt-10 text-base font-normal">
          Your bathroom serves a string of busy functions on a daily basis. See
          how you can make all of them work, and still have room for comfort and
          relaxation.
        </p>
        <h1 className=" mt-2 text-3xl font-semibold">A cleaning hub with built-in ventilation</h1>
        <p className="mt-2 text-base font-normal">
          Use a rod and a shower curtain to create a complement to your cleaning
          cupboard. Unsightly equipment is stored out of sight yet accessibly
          close – while the air flow helps dry any dampness.
        </p>
      </div>

      <div className="mx-auto max-w-screen-xl ml-40 mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w1/2">
            <Image src={blogp2} alt={""} width={555}></Image>
          </div>

          <div className="w-full md:w1/2">
            <Image src={blogp3} alt={""} width={555}></Image>
          </div>
        </div>
      </div>

      <div className="ml-40 w-4/5">
        <h1 className=" mt-8 text-3xl font-semibold">Storage with a calming effect</h1>
        <p className="mt-2 text-base font-normal">
          Having a lot to store doesn’t mean it all has to go in a cupboard.
          Many bathroom items are better kept out in the open – either to be
          close at hand or are nice to look at. Add a plant or two to set a calm
          mood for the entire room (and they’ll thrive in the humid air).
        </p>
        <h1 className=" mt-2 text-3xl font-semibold">Kit your clutter for easy access</h1>
        <p className="mt-2 text-base font-normal">
          Even if you have a cabinet ready to swallow the clutter, it’s worth
          resisting a little. Let containers hold kits for different activities
          – home spa, make-up, personal hygiene – to bring out or put back at a
          moment’s notice.
        </p>
      </div>

      <div className="mx-auto max-w-screen-xl ml-40 mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w1/2">
            <Image src={blogp4} alt={""}></Image>
          </div>

          <div className="w-full md:w1/2">
            <h1>An ecosystem of towels</h1>
            <p>
              Racks or hooks that allow air to circulate around each towel
              prolong their freshness. They dry quick and the need for frequent
              washing is minimized.
            </p>
            <h1>Make your mop disappear</h1>
            <p>
              Having your cleaning tools organized makes them easier to both use
              and return to. When they’re not needed, close the curtain and feel
              the peace of mind it brings.
            </p>
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
                  <Image src={blogp5} alt={""}></Image>
                </div>
                <div>
                  <h1 className="mt-4 font-medium  text-xl">
                    Modern texas home is beautiful and completely kid-friendly
                  </h1>
                  <p>October 16, 2023</p>
                </div>
              </article>
              <article className="flex max-w-xl flex-col items-start justify-between relative">
                <div className="flex items-center gap-x-4 text-xs">
                  <Image src={blogp6} alt={""}></Image>
                </div>
                <div>
                  <h1 className=" font-medium  text-xl">
                    Modern texas home is beautiful and completely kid-friendly
                  </h1>
                  <p>October 16, 2023</p>
                </div>
              </article>
              <article className="flex max-w-xl flex-col items-start justify-between relative">
                <div className="flex items-center gap-x-4 text-xs">
                  <Image src={blogp7} alt={""}></Image>
                </div>
                <div>
                  <h1 className=" font-medium  text-xl">
                    Modern texas home is beautiful and completely kid-friendly
                  </h1>
                  <p>October 16, 2023</p>
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
            <Link href="/blogpost" className="text-white">
              Blog
            </Link>
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
}

export default BlogPost;
