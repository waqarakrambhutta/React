import ListGroup from "./components/ListGroup";

function App() {
  let item = ["Multan", "Faisalabad", "Karachi", "Lahore", "Islamabad"];
  const handleSelectedItem = (item: string) => {
    console.log(item)
}
  return (
    <div>
      <ListGroup items={item} heading="Pakistan" onSelectItem={handleSelectedItem }/>
    </div>
  );
}

export default App;
