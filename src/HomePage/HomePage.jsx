import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';


function HomePage() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(info => ({ ...info, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const URL = 'https://fechallenge.dev.bhyve.io/user/basic/profile';
        const SKILL_URL = 'https://fechallenge.dev.bhyve.io/skills'
        setSubmitted(true);
        setSpinner(true);
        const TO = undefined;
        const TO_SKILLS = '/skills';
        if (user.firstName && user.lastName) {
            dispatch(userActions.register(user, TO, URL));
            dispatch(userActions.getAll(SKILL_URL, TO_SKILLS));
        }
        setTimeout(() => {
            setSpinner(false);
        }, 2000);
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi {user.firstName}!</h1>
            <p>Please Fill Below Details</p>

            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={user.firstName} onChange={handleChange}
                        className={'form-control' + (submitted && !user.firstName ? ' is-invalid' : '')} />
                    {submitted && !user.firstName &&
                        <div className="invalid-feedback">First Name is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={user.lastName} onChange={handleChange}
                        className={'form-control' + (submitted && !user.lastName ? ' is-invalid' : '')} />
                    {submitted && !user.lastName &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }
                </div>

                <div className="form-group">
                    <button className="btn btn-primary">
                        {spinner && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Submit
                    </button>
                </div>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </form>
        </div>
    );
}

export { HomePage };