import React, { useState } from "react";
import { postData } from "../helpers/apiRequest";

function PostForm() {
  const [state, setState] = React.useState({
    name: "",
    description: ""
  });
  const [loading, setLoader] = useState(false);

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setLoader(true);

    const data = {
      name: state.name,
      description: state.description
    };

    const response = await postData(data);
    setState({
      name: "",
      description: ""
    });
    setLoader(false);
    console.log("PostForm -> response", response);
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Description:</label>
          <br />
          <textarea
            name="description"
            value={state.description}
            onChange={handleChange}
          />
        </div>
        <br />
        <input type="submit" value="Submit" disabled={loading} />
      </form>
    </div>
  );
}

export default PostForm;
