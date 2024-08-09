import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

interface SearchInputProps {
    handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput(props: SearchInputProps) {
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleButtonClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={twMerge("lg:absolute md:absolute sm:relative ssm:relative sssm:relative right-0 top-0 flex items-center bg-white dark:bg-slate-500", expanded && "border-2 border-gray-200 dark:border-slate-600", "rounded-full focus:bg-white focus:outline-none hover:border-indigo-500 dark:hover:border-slate-300 transition-all ease-in-out duration-500 ", expanded ? 'max-w-full' : 'max-w-32')}>
            <div onClick={handleButtonClick} className="cursor-pointer p-2 flex flex-row text-black dark:text-slate-200 hover:bg-indigo-100 dark:hover:bg-slate-400 rounded-full">
                <IoSearchOutline size={24} />
                {!expanded && <span className="ml-2 lg:hidden md:hidden sm:block ssm:block sssm:block">Search...</span>}
            </div>
            {expanded && (
                <form className="justify-center">
                    <input
                        name="searchValue"
                        className="w-full rounded-full border-0 border-none px-4 sm:px-2 ssm:px-2 sssm:px-2 text-gray-700 dark:text-slate-200 dark:bg-slate-500 focus:outline-none focus:ring-0"
                        type="search"
                        placeholder="Search..."
                        autoComplete='on'
                        enterKeyHint='search'
                        onChange={props.onChange}
                        autoFocus
                    />
                </form>
            )}
        </div>
    );
}