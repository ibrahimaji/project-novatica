import { twMerge } from "tailwind-merge";

const Select = ({onChange, children, className}) => {
    return <select onChange={onChange} className={twMerge("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-400 focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5",className)}>
        {children}
    </select>;
}

export default Select;
