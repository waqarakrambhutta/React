import ListGroup from "./components/ListGroup";

function App(){
  let item = ['Multan','Faisalabad','Karachi','Lahore','Islamabad']
  return <div><ListGroup items={item} heading="Pakistan"/></div>
}

export default App;