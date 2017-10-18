import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import'react-dates/lib/css/_datepicker.css'; //airbnb
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpenses } from './actions/expenses';
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch( addExpenses({ description: 'water bill', amount: 4500 }) );
store.dispatch( addExpenses({ description: 'gas bill', createdAt: 1000 }) );
store.dispatch( addExpenses({ description: 'rent', amount: 109500 }) );
store.dispatch( setTextFilter('water') );

const state = store.getState();
const visibleExpenses = getVisibleExpenses( state.expenses, state.filters );
console.log( visibleExpenses );

const jsx = (
    <Provider store={ store }>
        <AppRouter/>
    </Provider>
);

ReactDOM.render( jsx, document.getElementById('app') );