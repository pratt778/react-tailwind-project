import Navbar from "./component/Navbar";
import  Hero  from "./component/hero";
import Analytics from "./component/analytics";
import News from "./component/newsletter";
const App = ()=>{
  return <>
  <div>
  <Navbar/>
  <Hero/>
  <Analytics/>
  <News/>
  </div>
  </>
}

export default App;