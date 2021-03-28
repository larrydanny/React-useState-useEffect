import React, { useEffect, useState } from "react";
import { getData } from "../helpers/apiRequest";

function Posts() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const response = await getData();
    setItems(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayData = () => {
    const data = items.map(item => {
      return (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      );
    });
    return data;
  };

  return (
    <div>
      <h1>Posts</h1>
      {displayData()}
    </div>
  );
}

export default Posts;
