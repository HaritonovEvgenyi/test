import Container from 'react-bootstrap/esm/Container';

function UserCard({ selectUser }) {
  console.log('Render Card');
  if (Object.keys(selectUser).length === 0) return <h3>Выберите пользователя</h3>;

  const { email, phone, dob, name, picture, location } = selectUser;
  const address = `${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country}`;

  return (
    <Container className="sticky-top">
      <img src={picture.large} alt={`${name.first} ${name.last}`} />
      <h2>{`${name.first} ${name.last}`}</h2>
      <p>Адрес: {address}</p>
      <p>Email: {email}</p>
      <p>Телефон: {phone}</p>
      <p>Дата рождения: {new Date(dob.date).toLocaleDateString()}</p>
    </Container>
  );
}

export default UserCard;
