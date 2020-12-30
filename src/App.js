import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Gallery } from './components/Gallery';
import { Item } from './Item';
import { SearchBox } from './SearchBox';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchBox} />
          <Route exact path="/item/:id" component={Item} />
          <Route exact path="/gallery" component={Gallery} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
