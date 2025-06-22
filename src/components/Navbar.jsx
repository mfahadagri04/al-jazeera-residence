"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { Link as ScrollLink } from 'react-scroll';

// Initialize Cloudinary instance
const cld = new Cloudinary({
    cloud: {
        cloudName: 'your-cloud-name' // Replace with your Cloudinary cloud name
    }
});

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    // Create Cloudinary image instance for your logo
    const logo = cld.image('AJZ-logo') // Use your image's public ID in Cloudinary
        .format('auto') // Auto-optimize format (WebP/AVIF)
        .quality('auto'); // Auto-adjust quality

    const navList = [
        { link: "Home" },
        { link: "Villas" },
        { link: "Facilities" },
        { link: "Testimonials" },
        { link: "Contacts" }
    ];

    return (
        <nav className="sticky top-0 z-50 nav_bg h-16 flex items-center backdrop-blur-sm">
            <div className="w-full px-3 md:px-[5rem]">
                {/* Mobile Layout */}
                <div className="lg:hidden flex justify-between items-center h-16">
                    <div className="flex-1"></div>

                    <div className="flex-1 flex justify-center">
                        <a href="#" className="z-50">
                            <AdvancedImage
                                cldImg={logo}
                                alt="Al Jazeera Residence Logo"
                                className="h-16 w-32 object-contain"
                                plugins={[]} // You can add plugins here if needed
                            />
                        </a>
                    </div>

                    <div className="flex-1 flex justify-end">
                        <button
                            onClick={() => setToggle((prev) => !prev)}
                            className="text-primary z-50"
                        >
                            {toggle ? (
                                <FaTimes className="w-5 h-5" />
                            ) : (
                                <FaBars className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center justify-between h-16 relative">
                    <div className="flex-1">
                        <a href="#" className="z-50">
                            <AdvancedImage
                                cldImg={logo}
                                alt="Al Jazeera Residence Logo"
                                className="h-16 w-32 object-contain"
                            />
                        </a>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <div className="flex gap-8 text-primary cursor-pointer">
                            {navList.map(({ link }) => (
                                <ScrollLink
                                    key={link}
                                    to={link.replace(/\s+/g, '')}
                                    smooth={true}
                                    duration={500}
                                    offset={-65}
                                    className="font-medium text-lg hover:text-secondary transition-colors"
                                >
                                    {link}
                                </ScrollLink>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {toggle && (
                    <div className="lg:hidden fixed inset-0 z-40 mt-16 bg-black bg-opacity-50 backdrop-blur-sm">
                        <div className="absolute right-3 top-2 bg-white p-4 rounded-md shadow-xl min-w-[140px]">
                            <ul className="flex flex-col gap-3">
                                {navList.map(({ link }) => (
                                    <li key={link}>
                                        <ScrollLink
                                            to={link.replace(/\s+/g, '')}
                                            smooth={true}
                                            duration={500}
                                            offset={-65}
                                            className="font-medium text-black hover:text-secondary block p-1.5 text-sm"
                                            onClick={() => setToggle(false)}
                                        >
                                            {link}
                                        </ScrollLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;