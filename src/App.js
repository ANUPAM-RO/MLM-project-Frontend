import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Refferl from './components/Refferl';
import Report from './components/Report';
import Logout from './components/Logout';
import JoinNmem from './components/JoinNmem';
import Widthdrawl from './components/Widthdrawl';
import UpdatePro from './components/UpdatePro';
import Transfer from './components/Transfer';
import ReferalIncome from './components/dashboard/ReferalIncome';
 
function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch> 
          <Route path="/dashboard" exact> <Dashboard /></Route>
          <Route path="/dashboard/refarel-income"> <ReferalIncome /></Route>
          <Route path="/referrals"> <Refferl /></Route>
          <Route path="/join-new-member"> <JoinNmem /></Route>
          <Route path="/update-profile"> <UpdatePro /></Route>
          <Route path="/widthdrawl"> <Widthdrawl /></Route>
          <Route path="/transfer"> <Transfer /></Route>
          <Route path="/report"> <Report /></Route>
          <Route path="/log-out"> <Logout /></Route>

        </Switch>
       
      </div>
    </Router>
  );
}
 
export default App;