const people=[
  'Creola Katherine Johnson: mathenatician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
function List(){
  const listltems=people.map(person=>
    <li>{person}</li>
    );
    // console.log{listltems}
    return <ul>{listltems}</ul>;
}
export default List;