import React from "react";
import axios from "axios";
import {
  fetchUser,
  fetchNew,
  selectUser,
  fetchComm,
} from "../../store/slices/user";
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
  const [ownApis, setOwnApis] = React.useState();

  // const [comments, setComments] = React.useState();

  // const fetchComm = async () => {
  //   return await axios.get("https://jsonplaceholder.typicode.com/comments");
  // };
  ///get request
  // const fetchUser = async () => {
  //   return await axios.get("https://jsonplaceholder.typicode.com/users");
  // };

  // Fetch this and map by name and put name in h2 tag
  // https://jsonplaceholder.typicode.com/comments

  const ownApi = async () => {
    return await axios.get("http://localhost:2323/users");
  };
  const postUser = async (para) => {
    return await axios.post("https://jsonplaceholder.typicode.com/users", para);
  };

  // React.useEffect(() => {
  //   fetchComm()
  //     .then((res) => {
  //       console.log(res.data);
  //       setComments(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const { name, userData, newData, comments } = useSelector(selectUser);

  const dispatch = useDispatch();
  //initial render
  React.useEffect(() => {
    // alert(name.email);
    ownApi().then((res) => {
      setOwnApis(res.data);
    });
    dispatch(fetchUser());
    dispatch(fetchNew());
    dispatch(fetchComm());

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
      {userData?.map((user, index) => (
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          name: {user.name} username: {user.username}
        </h1>
      ))}
      {newData?.map((eachPost, index) => (
        <h1>
          title: {eachPost.title} body: {eachPost.body}
        </h1>
      ))}
    </div>
  );
}

export default Users;
