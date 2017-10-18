// OBJECT DESTRUCTUURING

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };
//
// const { name: publisherName = 'Self Published' } = book.publisher;
//
// if( publisherName ){
//     console.log( publisherName ); // Penguin, Self-Published
// }
// else{
//     console.log( 'self published' );
// }

// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [ , city, state ] = address;

console.log(`You are in ${ city } ${ state }.`);

const item = [ 'coffee (hot)', '$2.00', '$2.50', '$2.75' ];
const [ product, , medium_price ] = item;
console.log(`A medium ${ product } costs ${ medium_price }`);