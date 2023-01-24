import React from 'react';
import Button from 'react-bootstrap/Button';

const SignUpButton = (props) => {
  return (
    <>
      <Button variant="flat ml-">
        {props.text}
      </Button>
    </>
  )
}

export default SignUpButton