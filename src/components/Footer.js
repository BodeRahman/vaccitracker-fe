import React from 'react';
import logo from '../assets/img/vaccitracker-logo-footer.png';

const Footer = () => {
  return (
    <div class="container-fluid footer">
        <footer class="">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <img className="img-fluid mt-3" src={logo} alt=""/>
            </ul>
            <p class="text-center text-muted">&copy; 2022 Company, Inc</p>
        </footer>
    </div>
  )
}

export default Footer