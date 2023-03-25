import './Patients.css';
import React, {useState, } from "react";
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import IsNotLastButton from './IsNotLastButton';
import './Patients.css';
import imagenes from "../img/imagenes";

const Patients = ({ show, handleClose }: {show:any; handleClose:any}) => {

    const [objButtons, setObjButtons] = useState([
        { className: "lunita", cssC: "css-lunita", image: imagenes.luna, identifier: '1', value: 0 },
        { className: "arbolito", cssC: "css-arbolito", image: imagenes.arbol, identifier: '2', value: 0 },
        { className: "solicito", cssC: "css-solicito", image: imagenes.sol, identifier: '3', value: 0 },
        { className: "gatito", cssC: "css-gatito", image: imagenes.gato, identifier: '4', value: 0 },
        { className: "perrito", cssC: "css-perrito", image: imagenes.perro, identifier: '5', value: 0 },
    ]);

    const [pressedButtons, setPressedButtons] = useState(""); //combinación botones
    let [iconCount, setIconPress] = useState(1); //combinación botones

    const handleClick = (value:string) => {
        if( pressedButtons.length < 4 ){
            if ( pressedButtons[pressedButtons.length - 1] === value){
                setIconPress(iconCount - 1);
                setPressedButtons(pressedButtons.slice(0, -1));

                let objUpd = objButtons.find(ob => ob.identifier === value);
                if (objUpd !== undefined) {
                    objUpd.value = iconCount;
                    setObjButtons([...objButtons]);
                }
            } else {
                setIconPress(iconCount + 1);
                setPressedButtons(pressedButtons + value );

                let objUpd = objButtons.find(ob => ob.identifier === value);
                if (objUpd !== undefined) {
                    objUpd.value = iconCount;
                    setObjButtons([...objButtons]);
                }
            }
            
        } else {
            if ( pressedButtons[pressedButtons.length - 1] === value){
                setIconPress(iconCount - 1);
                setPressedButtons(pressedButtons.slice(0, -1));

                let objUpd = objButtons.find(ob => ob.identifier === value);
                if (objUpd !== undefined) {
                    objUpd.value = iconCount;
                    setObjButtons([...objButtons]);
                }
            } 
        }
    };

    const handleReset = () => {
        setObjButtons([
          { className: "lunita", cssC: "css-lunita", image: imagenes.luna, identifier: '1', value: 0 },
          { className: "arbolito", cssC: "css-arbolito", image: imagenes.arbol, identifier: '2', value: 0 },
          { className: "solicito", cssC: "css-solicito", image: imagenes.sol, identifier: '3', value: 0 },
          { className: "gatito", cssC: "css-gatito", image: imagenes.gato, identifier: '4', value: 0 },
          { className: "perrito", cssC: "css-perrito", image: imagenes.perro, identifier: '5', value: 0 },
        ]);
        setPressedButtons("");
        setIconPress(1);
      };
    
    console.log(pressedButtons);
    console.log("icon: ",iconCount);
    
    return(
        <Modal show={show} onHide={handleClose} className="new-modal align-items-center justify-content-center" backdrop="static" keyboard={false} centered >

            <Modal.Header
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    
                    }}
                >
                <Modal.Title style={{ fontFamily: 'Abel', fontStyle: 'normal', fontWeight: 400, fontSize: '32px', 
                lineHeight: '41px', textAlign: 'center', textTransform: 'uppercase' }}>
                    BIENVENIDO, NOMBRE 
                </Modal.Title>

                
            </Modal.Header>

            <Modal.Body>

                <h6 className="imagen-init"> Selecciona las 4 imagenes que se te asignaron. Recuerda que el orden es importante. </h6>

                <br></br>
                <form>
                    <Row gutter={2} className="justify-content-center">
                        <ToggleButtonGroup type="checkbox" defaultValue={[]} className="justify-content-center">
                            {objButtons.map((item,index)=> 
                                <Col className={item.className} xs={5} md={2} key={index}>
                                    <ToggleButton className={item.cssC} value={item.identifier} onClick={() => handleClick(item.identifier)} disabled={IsNotLastButton(pressedButtons, item.identifier)}>
                                            <Image src={item.image} style={{ width: '100%', height: '100%' }} rounded />
                                            <div className="num-Left">
                                                {pressedButtons.includes(item.identifier) && <span className="numero-presionado"> {item.value} </span>} 
                                            </div>
                                    </ToggleButton>
                                </Col>
                            )}
                        </ToggleButtonGroup>
                    </Row>
                <br></br>
                    {/* inicio de sesión */}
                    <div className="init-Sesion">
                        <div className="text-center">
                            <Button variant="primary" className="custom-btn">
                                INICIAR SESIÓN
                            </Button>
                        </div>
                    </div>

                </form>
    
            </Modal.Body>

            <Modal.Footer
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    }}>

            {/* Cerrar*/}
            
            <div className="justify-content-center">
                <Button variant="link" style={{ textDecoration: 'none' }} onClick={() => {handleClose(); handleReset();}}>
                    <FontAwesomeIcon icon={faChevronLeft} size="xs"  /> Volver
                </Button>
            </div>
            </Modal.Footer>
        </Modal>
    );
};

export default Patients;