import React from "react";

const MakeAdminDetails = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeNewAdmin = () => {
    fetch(`https://tools-rex-backend.onrender.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeNewAdmin} className="btn btn-primary btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Remove Admin</button>
      </td>
    </tr>
  );
};

export default MakeAdminDetails;
