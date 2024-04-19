import React from 'react';
import Table from 'react-bootstrap/Table';

function UserTable({ users, setSelectUser }) {
  console.log('Render UserTable');
  if (!users.length) return <p>Loader...</p>;

  const handleUserClick = (e) => {
    const tr = e.target.closest('tr');
    const email = tr.dataset.email;
    tr.classList.toggle('highlight');
    const user = users.find((user) => user.email === email);
    setSelectUser(user);
  };

  console.log('Render UserTable');

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Пол</th>
          <th>Страна</th>
          <th>Возраст</th>
        </tr>
      </thead>
      <tbody onClick={handleUserClick}>
        {users.map((user, index) => (
          <tr key={user.email} data-email={user.email}>
            <td>{index + 1}</td>
            <td>{`${user.name.first} ${user.name.last}`}</td>
            <td>{user.gender}</td>
            <td>{user.location.country}</td>
            <td>{user.dob.age}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserTable;
