import { useState } from "react";
import "./ListGroup.css"
import styled from 'styled-components'


interface ListItemProps {
  active:boolean
}

const List = styled.ul`
  list-style: none;
`
const ListItems = styled.li<ListItemProps>`
  padding: 10px 0px 0px 30px;
  background: ${prop => prop.active ? 'blue':'none'}
`

interface listGroupProps {
  items:string[],
  heading:string,
  onSelectItem: (item:string) => void
}
function ListGroup({items,heading,onSelectItem}:listGroupProps) {
  const [selectedIndex,setSelectedIndex]=useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No items found</p> : null}
      <List className="list-group">
        {items.map((item,index) => (
          <ListItems
          active= {index === selectedIndex}
            key={item}
            onClick={()=>{
              setSelectedIndex(index);
              onSelectItem(item);   
            }}
          >
            {item}
          </ListItems>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
