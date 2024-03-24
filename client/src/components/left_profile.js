import React from 'react';
import styles from './left_profile.module.css';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut, IoIosLogIn } from "react-icons/io";

function LeftProfile() {

    const navigator = useNavigate();
    const [cookie, setCookie, removeCookie] = useCookies();
    const path = `/profile/${cookie.userid}`;

    const handleLogout = async (e) => {
        e.preventDefault();
        removeCookie('userid');
        removeCookie('token');
        removeCookie('email');
        removeCookie('username');
        removeCookie('name');
        setCookie('authenticated', false, {path: '/'});
    }
    
      const handleLogin = (e) => {
        navigator('/login');
      }

    return (
        <div className={styles.leftcontainer}>
            {
                cookie.authenticated
                ?
                <div className={styles.header}>
                    <Dropdown>
                        <Dropdown.Toggle className={styles.dropdown} variant= "success" id="dropdown-basic">
                            Create
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/newModel">New Model</Dropdown.Item>
                            <Dropdown.Item href="/newQuery">Post Query</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                :
                <></>
            }
            {
                cookie.authenticated
                ?
                <div className={styles.divider} />
                :
                <></>
            }
            {
                cookie.authenticated
                ?
                <div className={styles.content}>
                    <div className={styles.username}>{cookie.username}</div>
                    <Link className={styles.left_options_link} to={path}><Button className={styles.left_options} variant="success">Visit Profile <CgProfile /> </Button></Link>
                </div>
                :
                <></>
            }
                {
                    cookie.authenticated
                    ?
                    <div className={styles.divider} />
                    :
                    <></>
                }
            <div className={styles.content}>
                <Button className={styles.button} onClick={ cookie.authenticated ? handleLogout : handleLogin } eventKey="4" variant= "success">
                    {
                        cookie.authenticated
                        ?
                        <>Logout <IoIosLogOut /></>
                        :
                        <>Login <IoIosLogIn /></>
                    }
                </Button>
            </div>
        </div>
    );
}


export default LeftProfile;
