import {
  Blocks,
  CalendarSync,
  ChartNoAxesCombined,
  Network,
} from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="text-muted-foreground font-medium">Solutions</span>
            <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
              Transform Your Business with Automation
            </h2>
            <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
              Empowering businesses through intelligent automation solutions —
              streamlining operations, enhancing productivity, and driving
              innovation.
            </p>
          </div>

          <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {/* Service 1 */}
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-zinc-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                {/* Icon */}
                <CalendarSync className="stroke-zinc-600 transition-all duration-500 group-hover:stroke-white" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Business Process Automation
              </h4>
              <p className="text-sm font-normal text-gray-500">
                Automate repetitive tasks to save time, reduce costs, and boost
                operational efficiency.
              </p>
            </div>

            {/* Service 2 */}
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-zinc-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                <Blocks className="stroke-zinc-600 transition-all duration-500 group-hover:stroke-white" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                System Integration
              </h4>
              <p className="text-sm font-normal text-gray-500">
                Seamlessly connect your CRM, ERP, and third-party applications
                to enable data flow across platforms.
              </p>
            </div>

            {/* Service 3 */}
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-zinc-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
                <ChartNoAxesCombined className="stroke-zinc-600 transition-all duration-500 group-hover:stroke-white" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Intelligent Reporting
              </h4>
              <p className="text-sm font-normal text-gray-500">
                Get actionable insights through automated data collection,
                real-time dashboards, and AI-powered analytics.
              </p>
            </div>

            {/* Service 4 */}
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-zinc-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                <Network className="stroke-zinc-600 transition-all duration-500 group-hover:stroke-white" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Custom Workflow Solutions
              </h4>
              <p className="text-sm font-normal text-gray-500">
                Design and implement tailored automation workflows that fit your
                unique business needs and scale with you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
