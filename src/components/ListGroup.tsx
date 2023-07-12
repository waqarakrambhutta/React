import { useState } from "react";

interface listGroupProps {
  items:string[],
  heading:string,
  onSelectItem: (item:string) => void
}
function ListGroup({items,heading,onSelectItem}:listGroupProps) {
  const [selectedIndex,setSelectedIndex]=useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No items found</p> : null}
      <ul className="list-group">
        {items.map((item,index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active':'list-group-item'}
            key={item}
            onClick={()=>{
              setSelectedIndex(index);
              onSelectItem(item);   
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
