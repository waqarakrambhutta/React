import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="warning" onClick={()=> console.log('Clicked') }>My button</Button>

    </div>
  );
}
export default App;
