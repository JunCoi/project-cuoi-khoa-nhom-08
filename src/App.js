import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPassword from './pages/ForgotPassword';
import MovieDetailPage from './pages/MovieDetailPage';
import ProfilePage from './pages/ProfilePage';
import BookingPage from './pages/BookingPage';

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
            <SignInPage />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpPage />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPassword />
          </Route>
          <Route path="/booking/:showTimeCode" exact={true}>
            <BookingPage />
          </Route>
          <Route path="/profile" exact={true}>
            <ProfilePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
