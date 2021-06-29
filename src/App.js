import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/movie-detail/:movieCode" exact={true}>
            <MovieDetailPage />
          </Route>
          <Route path="/sign-in" exact={true}>
            <SignIn />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUp />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPassword />
          </Route>
          <Route path="/booking/:showTimeCode" exact={true}>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
