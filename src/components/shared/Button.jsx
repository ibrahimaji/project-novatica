import { twMerge } from 'tailwind-merge'

const Button = ({children,variant,onClick = () => {},className}) => {
    let variantClass = ""
    switch (variant) {
        case "primary":
            variantClass = "text-white bg-blue-500 hover:bg-blue-600"
            break;
        case "light" :
            variantClass = "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100"
            break
        case "dark" : 
            variantClass = "text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300"
            break
        case "success" : 
            variantClass = "text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300"
            break
        case "danger" : 
            variantClass = "text-white bg-red-600 hover:bg-red-800"
            break
    }
    return <button onClick={onClick} className={twMerge('flex items-center gap-2 font-medium rounded-md text-sm px-4 py-2.5 transition-color duration-150',[className,variantClass])}>{children}</button>;
}

export default Button;
