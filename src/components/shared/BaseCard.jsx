import { twMerge } from 'tailwind-merge'

const BaseCard = ({className, children}) => {
    const baseClass = "p-6 rounded-lg shadow-sm w-full bg-white"
    return <div className={twMerge(baseClass, className)}>{children}</div>;
}

export default BaseCard;
