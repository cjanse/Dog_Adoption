const Button = props => (
    <button className="text-right transition bg-green-800 hover:bg-yellow-600 p-5 rounded-xl">
        {props.children}
    </button>
)
export default Button