import { Route, Switch } from 'react-router-dom';

import SignInComponent from '../components/signIn/signIn';
import MyComponent from '../components/logIn/logIn';

<Switch>
  <Route exact path="/" component={MyComponent} />
  <Route path="/signIn" component={SignInComponent} />
</Switch> 

export default linkRoute;