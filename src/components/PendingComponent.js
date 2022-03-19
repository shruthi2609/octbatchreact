const PendingComponent=(props)=>{
    console.log("pending props",props)
    return(
        <div>
        <h1>Pending Tasks are</h1>
        {
            props.prop1.map((item)=>(
                <div>
                    <h3>{item.title}</h3>
                    <button onClick={()=>props.prop2(item.id)}>done</button>
                </div>

            ))
        }
        </div>

    )
}
export default PendingComponent