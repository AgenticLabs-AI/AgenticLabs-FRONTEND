import React from "react";

const Pricing = () => {
  return (
    <div>
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-muted-foreground font-medium">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            Flexible hourly rates for automation solutions
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
          Pay only for what you use. Our AI-powered workflow automation services
          are available at flexible hourly rates to suit businesses of all
          sizes.
        </p>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {/* Basic Plan */}
          <div className="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl">
            <h3
              id="tier-basic"
              className="text-base/7 font-semibold text-black"
            >
              Startup Support
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-gray-900">
                $49
              </span>
              <span className="text-base text-gray-500">/hour</span>
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              Ideal for small businesses exploring AI-driven workflow
              automation.
            </p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10"
            >
              <li className="flex gap-x-3">
                🛠️ Workflow setup and optimization
              </li>
              <li className="flex gap-x-3">🤖 AI agent integration</li>
              <li className="flex gap-x-3">📊 Basic automation reporting</li>
              <li className="flex gap-x-3">⏱️ 24-hour standard support</li>
            </ul>
            <a
              href="#"
              aria-describedby="tier-basic"
              className="mt-8 block rounded-full px-3.5 py-2.5 text-center text-sm font-semibold text-black ring-1 ring-zinc-200 ring-inset hover:ring-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10"
            >
              Get started today
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
            <h3
              id="tier-enterprise"
              className="text-base/7 font-semibold text-indigo-400"
            >
              Enterprise Solutions
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-white">
                $129
              </span>
              <span className="text-base text-gray-400">/hour</span>
            </p>
            <p className="mt-6 text-base/7 text-gray-300">
              Tailored automation architecture and dedicated AI consultants.
            </p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10"
            >
              <li className="flex gap-x-3">
                🛠️ Custom workflow design and scaling
              </li>
              <li className="flex gap-x-3">🤖 Advanced multi-agent systems</li>
              <li className="flex gap-x-3">
                📈 Deep analytics and performance tracking
              </li>
              <li className="flex gap-x-3">
                🤝 Dedicated automation consultant
              </li>
              <li className="flex gap-x-3">
                🔌 API and custom tool integrations
              </li>
              <li className="flex gap-x-3">
                ⚡ Priority support (within 2 hours)
              </li>
            </ul>
            <a
              href="#"
              aria-describedby="tier-enterprise"
              className="mt-8 block rounded-full bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10"
            >
              Book a consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
