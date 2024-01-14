import Navbar from "./component/Navbar";
import  Hero  from "./component/hero";
import Analytics from "./component/analytics";
import News from "./component/newsletter";
import Cards from "./component/cards";
const App = ()=>{
  return <>
  <div>
  <Navbar/>
  <Hero/>
  <Analytics/>
  <News/>
  <Cards/>
  </div>
  </>
}

export default App;