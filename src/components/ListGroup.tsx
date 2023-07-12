import { useState } from "react";

function ListGroup() {
  let items = ["Pakistan", "Multan", "Lahore", "Islamabad", "Karachi"];
  
  const [selectedIndex,setSelectedIndex]=useState(-1);
  // arr[0] this is like selectedIndex.
  // arr[1] this is like updater which is setSelectedIndex

  
  return (
    <>
      <h1>list</h1>
      {items.length === 0 ? <p>No items found</p> : null}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active':'list-group-item'}
            /* by this technique only first index will selected but we should declare the variable whose state changed when clicked. */
            key={item}
            onClick={()=>{setSelectedIndex(index)}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
