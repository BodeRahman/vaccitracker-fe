import React from 'react';
import Button from 'react-bootstrap/Button';

const LoginButton = (props) => {
  return (
    <>
      <Button variant="plain">
        {props.text}
      </Button>
    </>
  )
}

export default LoginButton