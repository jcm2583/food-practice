
import './App.css';
import FoodList from '../FoodList/FoodList'
import { Route, HashRouter as Router } from 'react-router-dom';

function App() {



  return (
    <div className="App">
      <h1>Food List</h1>
    <Router>

      <Route path='/foods'>
      <FoodList />
      </Route>

    </Router>

    </div>
  );
}

export default App;
