import moment from 'moment';

export default [
    {
        id: '1',
        description: 'gum',
        note: '',
        amount: 1.95,
        createdAt: 0
    },
    {
        id: '2',
        description: 'rent',
        note: '',
        amount: 109500,
        createdAt: moment( -345600000 ).valueOf()
    },
    {
        id: '3',
        description: 'credit card',
        note: '',
        amount: 4500,
        createdAt: moment( 345600000 ).valueOf()
    }
];