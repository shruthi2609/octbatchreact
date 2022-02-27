function Welcome(){
    return(
        <div>
            <h1>Welcome ! </h1>
        </div>
    )
}
export function Profile(props){
   console.log(props)
    return(
        <div>
            <h1>Username : {props.username} {props.src} </h1>
            <h1>email :{props.email} </h1>
        </div>
    )
}
export function Login(){
    return(
        <div>
           <h1>Login</h1>
        </div>
    )
}
export default Welcome;
//export default componentname
