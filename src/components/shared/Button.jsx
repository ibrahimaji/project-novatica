import { twMerge } from 'tailwind-merge'

const Button = ({children,type,onClick = () => {}}) => {
    let typeClass = ""
    switch (type) {
        case "primary":
            typeClass = "text-white bg-blue-500 hover:bg-blue-600"
            break;
        case "light" :
            typeClass = "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100"
            break
        case "dark" : 
            typeClass = "text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300"
            break
        case "success" : 
            typeClass = "text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300"
            break
        case "danger" : 
            typeClass = "text-white bg-red-600 hover:bg-red-800"
            break
    }
    return <button onClick={onClick} className={twMerge('flex items-center gap-2 font-medium rounded-md text-sm px-4 py-2.5 transition-color duration-150',typeClass)}>{children}</button>;
}

export default Button;
