import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Patients from "./Patients";

const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <div>
            <Button type="submit" onClick={handleShow}> Inicio de sesion </Button>
        </div>

        <Patients show={show} handleClose={handleClose} />
        
        </>
    );
};

export default Login;