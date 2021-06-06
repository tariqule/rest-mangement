import React from "react";
import axios from "axios";

// XML and JSON
/**
 * fetch : built in to javascript
 * axios : library for api : easy
 * ajax  : libary
 */

//fake api : JSONPLACEHOLDER
function Users() {
  const [users, setUsers] = React.useState();
  const [userName, setUserName] = React.useState("");
  ///get request
  const fetchUser = async () => {
    return await axios.get("https://jsonplaceholder.typicode.com/users");
  };

  const postUser = async (para) => {
    return await axios.post("https://jsonplaceholder.typicode.com/users", para);
  };
  //initial render
  React.useEffect(() => {
    fetchUser()
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const userNameChange = (event) => {
    setUserName(event.target.value);
  };
  //CRUD
  const seeSubmit = () => {
    alert(userName);

    postUser({ username: userName })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  ///post

  return (
    <div>
      User
      {users?.map((user, index) => (
        <h1>
          name: {user.name} username: {user.username}
        </h1>
      ))}
      <input
        type="text"
        placeholder="Enter Username"
        onChange={userNameChange}
      />
      <button onClick={seeSubmit}>Submit</button>
    </div>
  );
}

export default Users;
