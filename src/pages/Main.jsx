import { Switch, Route, Redirect } from 'react-router-dom';
import Bears from './Bears';
import Pokemon from './Pokemon';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/pokemon" component={Pokemon} />
                <Route path="/bears" component={Bears} />
                <Route path="/" render={() => (<Redirect to='/pokemon' />)} />
            </Switch>
        </div>
    )
}

export default Main