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
          <MenuItem setActive={setActive} active={active} item="Solutions">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/automation">
                Business Process Automation
              </HoveredLink>
              <HoveredLink href="/ai-integration">
                System Integration
              </HoveredLink>
              <HoveredLink href="/custom-software">
                Intelligent Reporting
              </HoveredLink>
              <HoveredLink href="/process-optimization">
                Custom Workflow Solutions
              </HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/pricing/startup">Startup</HoveredLink>
              <HoveredLink href="/pricing/growth">Growth</HoveredLink>
              <HoveredLink href="/pricing/business">Business</HoveredLink>
              <HoveredLink href="/pricing/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Company">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/about">About Us</HoveredLink>
              <HoveredLink href="/careers">Careers</HoveredLink>
              <HoveredLink href="/blog">Blog</HoveredLink>
              <HoveredLink href="/contact">Contact</HoveredLink>
            </div>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}

export default Header;
