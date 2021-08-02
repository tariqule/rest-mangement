import React from "react";
import axios from "axios";
import { fetchUser, fetchNew, selectUser } from "../../store/slices/user";
import { useDispatch, useSelector } from "react-redux";

// XML and JSON
/**
 * fetch : built in to javascript
 * axios : library for api : easy
 * ajax  : libary
 */
// c# or typescript
//fake api : JSONPLACEHOLDER
function Users() {
  const [users, setUsers] = React.useState();
  const [userName, setUserName] = React.useState("");
  ///get request
  // const fetchUser = async () => {
  //   return await axios.get("https://jsonplaceholder.typicode.com/users");
  // };

  const postUser = async (para) => {
    return await axios.post("https://jsonplaceholder.typicode.com/users", para);
  };
  const { name, userData, newData } = useSelector(selectUser);

  const dispatch = useDispatch();
  //initial render
  React.useEffect(() => {
    alert(name.email);

    dispatch(fetchUser());
    dispatch(fetchNew());

    // fetchUser()
    //   .then((res) => {
    //     console.log(res.data);
    //     setUsers(res.data);
    //   })
    //   .catch((err) => console.log(err));
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

  //BASIC TYPESCRIPt
  //variable
  //data structure
  //function
  //function call
  //operators
  //folder structure ---> hoome work
  //e.g modal or navbar, design -- TSX and CSS
  //redux

  return (
    <div>
      User
      {userData?.map((user, index) => (
        <h1>
          name: {user.name} username: {user.username}
        </h1>
      ))}
      {newData?.map((eachPost, index) => (
        <h1>
          title: {eachPost.title} body: {eachPost.body}
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
