
import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup2 from './components/CardGroup2/CardGroup2';
// import CartGroup from './components/CartGroup/CartGroup';

function App() {
  return (
    <div className="App">
      {/* ex: 02 */}
      <h2>Using React bootstrap</h2>
      <Button variant="secondary">My Button</Button>
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardGroup2></CardGroup2>
      {/* ex: 01 */}
     {/*  <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button type="button" className="btn btn-link">Link</button>
     <CartGroup></CartGroup> */}
    </div>
  );
}

export default App;
