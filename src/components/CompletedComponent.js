const CompletedComponent=(props)=>{
    console.log("completed component")
    return(
        <div>
        <h1>Completed Tasks are</h1>
        {
            props.prop1.map((item,key)=>(
                <div class={key}>
                    <h3>{item.title}</h3>
                    <button onClick={()=>props.prop2(item.id)}>delete</button>
                </div>

            ))
        }
        </div>

    )
}
export default CompletedComponent