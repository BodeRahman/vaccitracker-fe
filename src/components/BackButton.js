/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { ArrowLeft } from "react-feather";

const BackButton = () => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/no-static-element-interactions
    <a className="back-btn my-3 gilroy-light" type="button">
      <ArrowLeft className='mx-2' />
      Back
    </a>
);

export default BackButton