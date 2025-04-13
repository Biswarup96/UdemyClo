"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();

  const footerRoutes = [
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-yellow-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo + Description */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" height={50} width={50} alt="logo" />
              <span className="font-bold text-xl text-gray-800">Your LMS</span>
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Learn new skills with expert-led video courses. Join thousands of learners and start mastering your next skill today.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
            {/* Platform */}
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-gray-700 mb-2">Platform</h4>
              {footerRoutes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className="text-gray-500 hover:text-yellow-600 transition"
                >
                  {route.label}
                </Link>
              ))}
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-gray-700 mb-2">Connect</h4>
              <Link href="#" className="text-gray-500 hover:text-yellow-600 transition">
                Blog
              </Link>
              <Link href="#" className="text-gray-500 hover:text-yellow-600 transition">
                Twitter
              </Link>
              <Link href="#" className="text-gray-500 hover:text-yellow-600 transition">
                Facebook
              </Link>
            </div>

            {/* Teach */}
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-gray-700 mb-2">Teach</h4>
              <Link
                href="/instructor/courses"
                className="text-gray-500 hover:text-yellow-600 transition"
              >
                Become an Instructor
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-gray-200 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Your LMS Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
