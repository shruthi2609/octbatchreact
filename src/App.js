import Welcome from "./components/Welcome";
import {Profile,Login} from "./components/Welcome"
function App(){
    return(
        <div>
    <Welcome></Welcome>
    <Profile username="john" email="john@gailcom"></Profile>
    <Profile username="peter" email="peter@gailcom"></Profile>
    <Login></Login>
    </div>
    )
}
export default App;