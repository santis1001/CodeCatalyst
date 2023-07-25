import React from 'react';

function List({ groceries }) {
  return (
    <ul className="list-group">
      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      {groceries.map((item) => {
        return (
          <li>
          <label>
            <input type="checkbox" name="item2" checked={item.purchased}/>
              {item.name}
          </label>
          </li>
          );
      })}
    </ul>
  );
}

export default List;
