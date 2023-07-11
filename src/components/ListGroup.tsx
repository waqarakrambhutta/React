function ListGroup() {
  let items = ["Pakistan", "Multan", "Lahore", "Islamabad", "Karachi"];
  items = [];

  // if (items.length===0) // this method will cause code duplication. antoher way.
  //     return (<><h1>List</h1><p>No items found</p></>)
  // Or we can also store tenary operator in the variable and store it in JSX

  return (
    <>
      <h1>list</h1>

      {/* {items.length===0 && <p>No items found.</p> /*this is another way*/}

      {items.length === 0 ? <p>No items found</p> : null}

      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
