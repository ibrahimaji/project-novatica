import { twMerge } from "tailwind-merge";

const Select = ({onChange, children, className}) => {
    const baseClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-400 focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"

    return <select onChange={onChange} className={twMerge(baseClass,className)}>
        {children}
    </select>;
}

export default Select;
