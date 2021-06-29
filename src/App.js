import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from './pages/HomePage';
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
          <HomePage />
        </Route>
        <Route path="/sign-up" exact={true}>
          <HomePage />
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
