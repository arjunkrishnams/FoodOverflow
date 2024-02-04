import React from 'react';
import '../Styles/Login.css'; 


const antd = window.antd;

const LoginNGO = () => {
    function handleSubmit(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        fetch('http://192.168.1.22:5000/loginNGO', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({email: email, password: password})})
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        }
        )
        .catch(error => console.error('Error:', error))
    }


  return (
    <main className="main">
        <div className="container">
            <section className="wrapper">
                <div className="heading">
                    <h1 className="text text-large">NGO Sign In</h1>
                    <p className="text text-normal">New user? <span><a href="#" className="text text-links">Create an account</a></span>
                    </p>
                </div>
                <form name="signin" className="form" onSubmit={handleSubmit}>
                    <div className="input-control">
                        
                        <input type="text" name="email" id="email" className="input-field" placeholder="Email Address"/>
                    </div>
                    <div className="input-control">
                        
                        <input type="password" name="password" id="password" className="input-field" placeholder="Password"/>
                    </div>
                    <div className="input-control">
                        <a href="/LoginDonor" className="text text-links">Login as Donor?</a>
                        <button type="submit" className="input-submit">Sign In</button>
                    </div>
                </form>
                
                
            </section>
        </div>
    </main>
  );
};

export default LoginNGO;