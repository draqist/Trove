import './App.scss'
import SignIn from './PAGES/Auth Pages/SignIn/SignIn';
import { Route } from 'react-router';
import OnboardingPage from './PAGES/Onboarding Page/OnboardingPage';
import SignUp from './PAGES/Auth Pages/SignUp/SignUp';
import DashboardPage from './PAGES/Home Page/Dashboard';
import SettingsPage from './PAGES/Settings/Settings';
import Portfoliopage from './PAGES/Portfolio/Portfoliopage';

function App() {

  return (
      <div className="buzz">
        <Route path='/' exact component={OnboardingPage} />
        <Route path = '/login' component = {SignIn} />
        <Route path = '/signup' component = {SignUp} />
        <Route path='/dashboard' component={ DashboardPage}/>
        <Route path='/settings' component={ SettingsPage}/>
        <Route path='/portfolio' component={ Portfoliopage}/>
      </div>
  );
}

export default App;