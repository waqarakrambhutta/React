function ListGroup() {
  const items = ["Pakistan", "Multan", "Lahore", "Islamabad", "Karachi"];

  return (
    <>
      <h1>list</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
