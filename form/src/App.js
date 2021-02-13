import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

import {FormContainer} from "./Components/"


function App() {
  return (
    <Container className="mt-3 pt-4">
      <FormContainer />
    </Container>
  );
}

export default App;