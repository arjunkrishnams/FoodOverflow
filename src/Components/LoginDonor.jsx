import React from 'react';
import '../Styles/Login.css'; 
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const antd = window.antd;

const LoginDonor = () => {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        fetch('https://food-overflow-be1.onrender.com/loginDonor', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({email: email, password: password})})
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            const id = data.id;
            navigate('/DashboardDonor', {state: {id: id, email: email}})
        }
        )
        .catch(error => console.error('Error:', error))
    }


  return (
    <main className="main">
        <div className="container">
            <section className="wrapper">
                <div className="heading">
                    <h1 className="text text-large">Donor Sign In</h1>
                    <p className="text text-normal">New user? <span><a href="#/DonorSignup" className="text text-links">Create an account</a></span>
                    </p>
                </div>
                <form name="signin" className="form" onSubmit={handleSubmit}>
                    <div className="input-control">
                        
                        <input type="email" name="email" id="email" className="input-field" placeholder="Email Address"/>
                    </div>
                    <div className="input-control">
                        
                        <input type="password" name="password" id="password" className="input-field" placeholder="Password"/>
                    </div>
                    <div className="input-control">
                        <a href="#/LoginNGO" className="text text-links">Login as NGO?</a>
                        <button type="submit" className="input-submit">Sign In</button>
                    </div>
                </form>
                
                
            </section>
        </div>
    </main>
  );
};

export default LoginDonor;