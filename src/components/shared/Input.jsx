const Input = ({ type, placeholder, onChange }) => {
    return <input onChange={onChange} type={type} placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-400 focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"/>;
}

export default Input;
