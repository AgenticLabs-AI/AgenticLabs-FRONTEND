import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl text-white sm:text-5xl">
              Empower Your Business with Automation
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-white">
              Unlock new levels of productivity and efficiency. Automate your
              workflows and scale faster with our intelligent solutions.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded-full bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10"
            >
              Start Automating Today
            </a>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs text-white">
                &copy; {new Date().getFullYear()} AutomateX Solutions. All
                rights reserved.
              </p>

              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Terms of Service
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75"
                  >
                    Cookie Preferences
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
