import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter> 
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);
//EditExpensePage ekata prop object ekak tynawa.dynnamic data walata anuwa prop object eke proerties wenas wenawa

//Header ekee props ganna baluwoth mekata props enne ne(empty object ekak enne) mokada meka Router ekak sambanda wela nathi ekak nisa.
//Header ekata component value ekak set karala nathi nisa thama router ekata adala prop object eka enne naththe

export default AppRouter;

//BrowserRouter for create router
//Route is created for every page 