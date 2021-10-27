import './App.scss'
import SignIn from './PAGES/Auth Pages/SignIn/SignIn';
import { Route } from 'react-router';
import OnboardingPage from './PAGES/Onboarding Page/OnboardingPage';
import SignUp from './PAGES/Auth Pages/SignUp/SignUp';
import DashboardPage from './PAGES/Home Page/Dashboard';

function App() {

  return (
      <div className="buzz">
        <Route path='/' exact component={OnboardingPage} />
        <Route path = '/auth' component = {SignIn} />
        <Route path = '/signup' component = {SignUp} />
        <Route path='/dashboard' component={ DashboardPage}/>
      </div>
  );
}

export default App;