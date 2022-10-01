import React, {useState} from 'react';
import {User} from "../../models/User";
import {useDispatch} from "react-redux";
import {fetchRegister} from "../../store/sessionReducer";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import classes from "./Auth.module.css";

const AuthForm = () => {
    const [user, setUser] = useState(new User({}));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function auth() {
        axios.post(`http://server.esp/auth`, user)
            .then((result) => {
                if (result.data.id) {
                    localStorage.setItem('auth', JSON.stringify(result.data))
                    navigate('/map');
                }
            })
    }

    function registration() {
        setUser(new User({}))
        dispatch(fetchRegister(user))
    }

    return (
        <div className={classes.auth__inner}>
            <div className={classes.auth__background}></div>
            <div className={classes.auth__content}>
                <h3 className="auth__title">Авторизация</h3>
                <hr/>
                <div>
                    <div style={{margin: '15px 0'}}>
                        <input type="text" value={user.login} onInput={event => setUser({...user, login: event.target.value})}/>
                    </div>
                    <div style={{margin: '15px 0'}}>
                        <input type="password" value={user.password} onInput={event => setUser({...user, password: event.target.value})}/>
                    </div>
                </div>
                <hr/>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <button onClick={auth}>Войти</button>
                    <button onClick={registration}>Регистрация</button>
                </div>
            </div>
        </div>

    );
};

export default AuthForm;
