import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import About from './About';
import Services from './Services'

function App() {
  return (
    <Router>
      <div className="App">
        
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
        
           <Route exact path="/about">
             <About /> 
           </Route>
            
           <Route exact path="/services">
             <Services /> 
           </Route>
        
                            
        
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
