import React from 'react';
import { Link, useParams } from 'react-router-dom';

export const PopUp = ({ items, isOpen }) => {
  const { id } = useParams();
  if (!isOpen) return null;
  return (
    <div>
      <div>
        <div>
          {items &&
            items.map((item, idx) => {
              return (
                <div key={idx}>
                  <Link to={`/item/${id}`}>{item.name}</Link>
                </div>
              );
            })}
          {!items && <div>Nothing Found!</div>}
        </div>
        {/* {!items ? <div>Type Keyword to search for food</div> : null} */}
      </div>
    </div>
  );
};
