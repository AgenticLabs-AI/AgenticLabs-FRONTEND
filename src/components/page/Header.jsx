import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <div className="">
      <Navbar className="top-2" />
    </div>
  );
};

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive} className="flex justify-between items-center">
        <div className="hidden gap-6 sm:flex">
          <HoveredLink href="/">Home</HoveredLink>
          <MenuItem setActive={setActive} active={active} item="Solutions">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink>Business Process Automation</HoveredLink>
              <HoveredLink>System Integration</HoveredLink>
              <HoveredLink>Intelligent Reporting</HoveredLink>
              <HoveredLink>Custom Workflow Solutions</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink
                href="mailto:agenticlabs.ai@gmail.com?subject=Inquiry%20about%20Startup%20Support%20Plan&body=Hello%20AgenticLabs%20Team,%0A%0AI%20am%20interested%20in%20the%20Startup%20Support%20Plan%20($49/hour)%20and%20would%20like%20to%20learn%20more%20about%20it.%20Please%20provide%20me%20with%20additional%20details.%0A%0AThank%20you,%0A[Your%20Name]"
                target="_blank"
              >
                Startup : $49 /hour
              </HoveredLink>

              <HoveredLink
                target="_blank"
                href="mailto:agenticlabs.ai@gmail.com?subject=Inquiry%20about%20Startup%20Support%20Plan&body=Hello%20AgenticLabs%20Team,%0A%0AI%20am%20interested%20in%20the%20Startup%20Support%20Plan%20($129/hour)%20and%20would%20like%20to%20learn%20more%20about%20it.%20Please%20provide%20me%20with%20additional%20details.%0A%0AThank%20you,%0A[Your%20Name]"
              >
                Enterprise : $129 /hour
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Company">
            <div className="flex flex-col space-y-4 text-sm">
              <div className="flex flex-col space-y-4 text-sm">
                <p>
                  We take care of routine tasks and streamline your
                  <br /> digital workflows—so you can focus on what truly
                  matters.
                </p>
                <p>Careers: Join our team and grow with us.</p>
                <p>Contact: agenticlabs.ai@gmail.com</p>
              </div>
            </div>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}

export default Header;
