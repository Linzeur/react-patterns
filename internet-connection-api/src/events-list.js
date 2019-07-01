import React from "react";

function ListEvents({ title, status }) {
  return (
    <>
      {title}
      <ul>
        <li>{`Your state to internet is: ${status}`}</li>
      </ul>
    </>
  );
}

export default ListEvents;
