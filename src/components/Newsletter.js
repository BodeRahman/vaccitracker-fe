import React from 'react'
import SignUpButton from './SignUpButton';

const Newsletter = () => {
  return (
    <section class="py-5 text-center container">
        <div class="row">
            <div class="col-sm-12">
                <div class="content mt-2">
                    <h2>Get insights about Different Vaccinations </h2>
                    <p>Join our email list to receive immunization reminders, support articles, tips, and more.</p>
                    <div class="input-group col-md-8">
                        <input type="email" class="form-control inp" placeholder="Enter your email"/>
                        <span class="input-group-btn">
                            <SignUpButton class="btn" text="Suscribe Now" type="submit"></SignUpButton>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter