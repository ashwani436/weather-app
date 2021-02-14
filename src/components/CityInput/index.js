import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./styles.css";
const CityInput = ({ city, setCity, fetchCityWeather }) => {
  const [error, setError] = React.useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = () => {
    if (!city) {
      setError("City field is empty");
    } else {
      setError("");

      fetchCityWeather();
    }
  };
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control
          value={city}
          type="text"
          onChange={handleInputChange}
          className="inputField"
        />
        <p className="text-danger">{error}</p>
        <Button
          variant="primary"
          onClick={handleSubmit}
          className="submitButton"
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default CityInput;
