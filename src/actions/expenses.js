import uuid from 'uuid';

// ADD EXPENSES
export const addExpenses = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE EXPENSES
export const removeExpense =({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT EXPENSE
export const editExpense = ( id, updates ) =>{
    console.log( "here's the id: " + id );
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
};