import React, { useState } from "react";
import Image from "next/image";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>("채용 옵션");

    const dropdownOptions: string[] = [
        "개발자 채용",
        "마케터 채용", 
        "디자이너 채용",
        "마케팅 채용",
    ];

    const handleOptionSelect = (option: string): void => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    return (
        <nav className="relative z-10 flex items-center justify-between px-6 py-4">
            <div className="flex items-center justify-between w-full">
                <Image
                    src="/assets/logoWhite.svg"
                    alt="Logo Icon"
                    width={60}
                    height={50}
                    className="w-36 h-6"
                />

                <div className="lg:hidden">
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 6h16M4 12h16M4 18h16" 
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="hidden lg:flex w-full items-center justify-start">
                <div className="w-1/3 flex items-center justify-center">
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center text-white hover:text-blue-500"
                        >
                            채용
                            <svg
                                className="w-4 h-4 ml-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-48 border rounded-lg text-white shadow-lg z-10">
                                {dropdownOptions.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionSelect(option)}
                                        className="w-full text-left px-4 py-2 hover:bg-blue-500 rounded-lg"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="ml-4 text-white">{selectedOption}</div>
                </div>
            </div>

            <div className="hidden lg:flex w-1/3 justify-end">
                <button className="px-6 py-2 bg-white hover:text-white text-blue-500 rounded-lg hover:bg-blue-500">
                    문의하기
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-500 bg-opacity-80 lg:hidden">
                    <div className="flex flex-col items-center py-6 space-y-4">
                        <div className="relative w-full text-center">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="flex items-center justify-center w-full text-white hover:text-blue-500"
                            >
                                채용
                                <svg
                                    className="w-4 h-4 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className="mt-2 inline-block w-48 border rounded-lg text-white shadow-lg z-10">
                                    {dropdownOptions.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleOptionSelect(option)}
                                            className="w-full text-left px-4 py-2 hover:bg-blue-500 rounded-lg"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="text-white">{selectedOption}</div>
                        <button className="px-6 py-2 bg-white hover:text-white text-blue-500 rounded-lg hover:bg-blue-500">
                            문의하기
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;