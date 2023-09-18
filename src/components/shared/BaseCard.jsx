import { twMerge } from 'tailwind-merge'

const BaseCard = ({className, children}) => {
    return <div className={twMerge('p-6 rounded-lg', className)}>{children}</div>;
}

export default BaseCard;
