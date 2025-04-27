import React from "react";

const Trust = () => {
  return (
    <div>
      <div className="flex justify-center">
        <section
          id="company"
          class="flex flex-col items-center justify-center gap-10 py-10 pt-20 w-full relative px-6"
        >
          <p class="text-muted-foreground font-medium">
            Engineered with cutting-edge technologies
          </p>
          <div class="grid w-full max-w-7xl grid-cols-2 md:grid-cols-3 overflow-hidden border-y border-border items-center justify-center z-20">
            <a
              class="group w-full h-28 flex items-center justify-center relative p-4 before:absolute before:-left-1 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
              href="https://n8n.io/"
              target="_blank"
            >
              <div class="transition-all duration-200 [cubic-bezier(0.165, 0.84, 0.44, 1)] translate-y-0 group-hover:-translate-y-4 duration-300 flex items-center justify-center w-full h-full gap-2">
                <img
                  height={40}
                  width={40}
                  src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/n8n.png"
                  alt=""
                />
                <p className="font-bold text-xl">n8n</p>
              </div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-4 transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]">
                <span class="flex items-center gap-2 text-sm font-medium">
                  Learn More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-right w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </a>
            <a
              class="group w-full h-28 flex items-center justify-center relative p-4 before:absolute before:-left-1 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
              href="https://www.langflow.org/"
              target="_blank"
            >
              <div class="transition-all duration-200 [cubic-bezier(0.165, 0.84, 0.44, 1)] translate-y-0 group-hover:-translate-y-4 duration-300 flex items-center justify-center w-full h-full gap-2">
                <img
                  height={40}
                  width={40}
                  src="https://cdn.prod.website-files.com/625447c67b621ab49bb7e3e5/6790f822da890c71a6e4db2d_langflow-icon-black-transparent.svg"
                  alt=""
                />
                <p className="text-xl font-bold">Langflow</p>
              </div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-4 transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]">
                <span class="flex items-center gap-2 text-sm font-medium">
                  Learn More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-right w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </a>
            <a
              class="group w-full h-28 flex items-center justify-center relative p-4 before:absolute before:-left-1 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
              href="https://www.python.org/"
              target="_blank"
            >
              <div class="transition-all duration-200 [cubic-bezier(0.165, 0.84, 0.44, 1)] translate-y-0 group-hover:-translate-y-4 duration-300 flex items-center justify-center w-full h-full gap-2">
                <img
                  height={30}
                  width={30}
                  src="https://static-00.iconduck.com/assets.00/programming-language-python-icon-507x512-rv5oveqc.png"
                  alt=""
                />
                <p className="text-xl font-bold">Python</p>
              </div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-4 transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]">
                <span class="flex items-center gap-2 text-sm font-medium">
                  Learn More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-right w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </a>
            {/* <a
              class="group w-full h-28 flex items-center justify-center relative p-4 before:absolute before:-left-1 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
              href="#"
            >
              <div class="transition-all duration-200 [cubic-bezier(0.165, 0.84, 0.44, 1)] translate-y-0 group-hover:-translate-y-4 duration-300 flex items-center justify-center w-full h-full">
                <svg
                  width="96"
                  height="23"
                  viewBox="0 0 96 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="dark:fill-white fill-black"
                >
                  <path d="M53.6896 0.965339H59.5709L56.6122 22.0721H50.7313L53.6896 0.965339ZM46.2752 0.965339L42.3065 13.1242L40.5746 0.965339H36.4617L31.2658 13.0881L30.6168 0.965339H24.9158L26.9005 22.0721H31.6268L37.4717 8.72251L39.5286 22.0721H44.1827L51.8677 0.965339H46.2752ZM95.6509 13.2324H81.6879C81.76 15.9747 83.4016 17.7786 85.8191 17.7786C87.641 17.7786 89.0845 16.8044 90.203 14.9463L94.9167 17.0895C93.2968 20.2807 89.8833 22.3606 85.6749 22.3606C79.9382 22.3606 76.1315 18.5001 76.1315 12.2945C76.1315 5.47532 80.6054 0.640625 86.9194 0.640625C92.4758 0.640625 95.9754 4.39293 95.9754 10.2378C95.9754 11.2121 95.8672 12.1862 95.6509 13.2324ZM90.4194 9.19153C90.4194 6.73812 89.0484 5.18671 86.8473 5.18671C84.6466 5.18671 82.6979 6.81028 82.1932 9.19153H90.4194ZM6.53496 7.32622L0.53125 14.342H11.2506L12.4557 11.0334H7.8627L10.6697 7.78807L10.6787 7.70145L8.85309 4.56074H17.0631L10.6986 22.0721H15.0536L22.7386 0.965339H2.88366L6.53314 7.32622H6.53496ZM69.132 5.18671C71.2067 5.18671 73.0251 6.30155 74.6124 8.21378L75.446 2.26424C73.9665 1.26303 71.9643 0.640625 69.3123 0.640625C64.0448 0.640625 61.0861 3.72547 61.0861 7.64011C61.0861 10.3552 62.6017 12.0148 65.0912 13.0881L66.2819 13.6294C68.5004 14.5765 69.096 15.0455 69.096 16.0468C69.096 17.048 68.0947 17.7425 66.5704 17.7425C64.0535 17.7514 62.0153 16.4617 60.4818 14.2607L59.6322 20.324C61.3784 21.6555 63.6173 22.3606 66.5704 22.3606C71.5764 22.3606 74.6524 19.4743 74.6524 15.4694C74.6524 12.7454 73.4435 10.9956 70.3948 9.62454L69.096 9.01117C67.2919 8.20839 66.6786 7.76639 66.6786 6.88243C66.6786 5.92632 67.5174 5.18671 69.132 5.18671Z"></path>
                </svg>
              </div>
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-4 transition-all duration-300 ease-[cubic-bezier(0.165, 0.84, 0.44, 1)]">
                <span class="flex items-center gap-2 text-sm font-medium">
                  Learn More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-right w-4 h-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </a> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Trust;

// import React from "react";

// const Trust = () => {
//   return (
//     <div>
//       <div className="flex justify-center">
//         <section
//           id="company"
//           className="flex flex-col items-center justify-center gap-10 py-10 pt-20 w-full relative px-6"
//         >
//           <p className="text-muted-foreground font-medium">
//             Trusted by fast-growing startups
//           </p>
//           <div className="grid w-full max-w-7xl grid-cols-2 md:grid-cols-4 overflow-hidden border-y border-border items-center justify-center z-20">
//             {/* n8n Platform */}
//             <a
//               className="group w-full h-28 flex items-center justify-center relative p-4"
//               href="https://n8n.io"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <div className="transition-all duration-200 group-hover:-translate-y-4 flex items-center justify-center w-full h-full">
//                 <img
//                   src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png"
//                   alt="n8n Platform"
//                   className="h-12"
//                 />
//               </div>
//             </a>

//             {/* Langflow */}
//             <a
//               className="group w-full h-28 flex items-center justify-center relative p-4"
//               href="https://langflow.org"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <div className="transition-all duration-200 group-hover:-translate-y-4 flex items-center justify-center w-full h-full">
//                 <img
//                   src="https://langflow.org/logo.svg"
//                   alt="Langflow"
//                   className="h-12"
//                 />
//               </div>
//             </a>

//             {/* Python */}
//             <a
//               className="group w-full h-28 flex items-center justify-center relative p-4"
//               href="https://www.python.org"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <div className="transition-all duration-200 group-hover:-translate-y-4 flex items-center justify-center w-full h-full">
//                 <img
//                   src="https://www.python.org/static/community_logos/python-logo-master-v3-TM.png"
//                   alt="Python"
//                   className="h-12"
//                 />
//               </div>
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Trust;
