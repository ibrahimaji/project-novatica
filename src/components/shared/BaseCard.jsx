
const BaseCard = ({children,withClass}) => {
    return <div className={'p-6 rounded-lg ' + withClass }>{children}</div>;
}

export default BaseCard;
