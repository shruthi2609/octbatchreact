export default function CartComponent(props){
    return(
        <div>
            {console.log("cart")}
        <button onClick={props.increment}>+</button>
        {props.count}
        <button>-</button>
        </div>
    )
}