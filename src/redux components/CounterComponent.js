export default function CounterComponent(props){
    return(
        <div>
            {console.log("counter")}
        <button onClick={props.increment}>+</button>
        {props.count}
        <button>-</button>
        </div>
    )
}