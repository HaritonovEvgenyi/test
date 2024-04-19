import React from 'react';
import MainPage from './pages/MainPage';
import Container from 'react-bootstrap/esm/Container';

function App() {
  console.log('render APP');
  return (
    <div className="App">
      <Container>
        <h1>Пользователи</h1>
        <MainPage />
      </Container>
    </div>
  );
}

export default App;
