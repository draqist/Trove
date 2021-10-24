import './App.scss';
// import Header from './Components/Header/Header';
import SignIn from './PAGES/Auth Pages/SignIn/SignIn';
// import Dashboard from './PAGES/Dashboard';
import { Route } from 'react-router';
import OnboardingPage from './PAGES/Onboarding Page/OnboardingPage';
import SIgnUp from './PAGES/Auth Pages/SIgnUp/SIgnUp';

function App() {
  return (
    <div className="buzz">
      {/* <Dashboard/> */}
      {/* <Header /> */}
      <Route path = '/'  exact component = {OnboardingPage} />
      <Route path = '/auth' component = {SignIn} />
      <Route path = '/signup' component = {SIgnUp} />
    </div>
  );
}

export default App;