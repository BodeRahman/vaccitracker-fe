import React from 'react';
import Button from 'react-bootstrap/Button';

const SignUpButton = (props) => {
  return (
    <>
      <style type="text/css">
        {`
        .btn-flat {
          background-color: #F76600;
          color: white;
        }

    `}
      </style>

      <Button variant="flat">
        {props.text}
      </Button>
    </>
  )
}

export default SignUpButton