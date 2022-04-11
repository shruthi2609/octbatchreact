import Welcome from "./components/Welcome";
import {Profile,Login} from "./components/Welcome"
import ProductCatalog from "./components/ProductCatalog";
import ClassComponentEg from "./components/ClassComponentEg";
import ToggleComponent from "./components/ToggleComponent";
import TodoComponent from "./components/TodoComponent";
import SampleComponent from "./components/SampleComponent";
import LifeCycleMethods from "./components/LifeCycleMethods"
import NewsApp from "./components/NewsApp";
import ReactNews from "./components/ReactNews";
import GreetComponent from "./functionalcompo/GreetComponent";
import EffectComponent from "./functionalcompo/EffectComponent";
import APIComponent from "./functionalcompo/APIComponent";
import ParentComponent from "./functionalcompo/ParentComponent";

import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
/*const product={
    pname:"XYZ",
    plink:"https://www.amazon.in/deal/cca5e12b?smid=A14CZOWI0VEHLG&pf_rd_r=D74BC14B09MJGFHA9PGF&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pd_rd_r=f1ca9aa0-48db-4db1-b5ba-8b28242713fc&pd_rd_w=ecFg7&pd_rd_wg=lr4U7&ref_=pd_gw_unk",
    imglink:"https://m.media-amazon.com/images/I/61saGX0RILL._SX355_.jpg",
    price:10000
}*/
const tododata=[
    {
        "id": 1,
        "title": "delectus aut autem",
        "completed": false,
        "active":true
      },
      {
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": true,
        "active":true
      },
      {
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false,
        "active":true
      },
      {
        "id": 4,
        "title": "et porro tempora",
        "completed": true,
        "active":true
      },
      {
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false,
        "active":true
      },
]
function App(){
    return(
        <div>
{/*<TodoComponent prop1={tododata}></TodoComponent>
<LifeCycleMethods prop1="prop"></LifeCycleMethods>
    <NewsApp></NewsApp>
    <ReactNews></ReactNews>
    <GreetComponent></GreetComponent>
  
    <EffectComponent prop1="hru" prop2="4"></EffectComponent>
    <ParentComponent></ParentComponent> */}
    <Router>
   
    <Link to="/newsapp">Login</Link>
    <Link to="/functional">Functional comp eg</Link>
   
    <Routes>
    <Route path="/newsapp" element={<NewsApp></NewsApp>} ></Route>
    <Route path="/functional" element={<ParentComponent></ParentComponent>}></Route>
    </Routes>
    </Router>
   
        </div>
    )
}
export default App;