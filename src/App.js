import './css/App.css';
import Header from './components/Header';
import MainNav from './components/MainNav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Trending from './pages/Trending';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Search from './pages/Search';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='App'>
          <Container>
            <Switch>
              <Route path='/' exact component={Trending} />
              <Route path='/movies' component={Movies} />
              <Route path='/series' component={Series} />
              <Route path='/search' component={Search} />
            </Switch>
          </Container>
        </div>
        <MainNav />
      </Router>
    </>
  );
}

export default App;
