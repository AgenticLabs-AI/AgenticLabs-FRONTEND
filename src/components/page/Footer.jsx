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
              href="mailto:agenticlabs.ai@gmail.com"
              target="_blank"
              className="mt-8 inline-block rounded-full bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10"
            >
              Start Automating Today
            </a>
            <div className="mt-4">
              <p>or</p>
              <p className="mt-4">
                Contact:{" "}
                <a
                  href="mailto:agenticlabs.ai@gmail.com"
                  target="_blank"
                  className="underline hover:text-indigo-400"
                >
                  agenticlabs.ai@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8">
            <div className="sm:flex sm:justify-center">
              <p className="text-xs text-white">
                &copy; {new Date().getFullYear()} AgenticLabs. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
