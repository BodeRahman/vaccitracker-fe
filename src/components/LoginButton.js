import React from 'react';
import Button from 'react-bootstrap/Button';

const LoginButton = (props) => {
  return (
    <>
      <style type="text/css">
        {`
        .btn-plain {
          background-color: #FFFFF;
          color: #F76600;
          border-color: #F76600;
        }

    `}
      </style>

      <Button variant="plain">
        {props.text}
      </Button>
    </>
  )
}

export default LoginButton