import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UserTable from '../components/UserTable';
import UserCard from '../components/UserCard';

function MainPage() {
  const [usersList, setUsersList] = useState([]);
  const [selectUser, setSelectUser] = useState({});

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?results=21');
      console.log('-----', data.results);
      setUsersList(data.results);
    } catch (err) {
      console.log('error', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log('render MainPage');

  return (
    <Container>
      <Row xs={1} md={1} lg={2}>
        <Col md={12} xs={12} lg={6}>
          <UserTable users={usersList} setSelectUser={setSelectUser} />
        </Col>
        <Col md={12} xs={12} lg={6}>
          <UserCard selectUser={selectUser} />
        </Col>
      </Row>
    </Container>
  );
}
export default MainPage;
