import './inicio.css';
import './util.css';
import logo from './images/logo.png';
import React, {useState } from "react"; 


export default function Registro(){
    const [state, setState] = useState({
        form: {
            name: "", 
            password: "", 
            email: "",
            cellphone: "",
            type_id: "",
            documento: "",
            role: "",
            genre: "",
            codigo: "",
            grade: "",
        }, 
    }); 

    const handleChange = (e) => {
        setState({
            form:{
                ...state.form, 
                [e.target.name]: e.target.value,
            },
        }); 
    }

    const [setShowError] = useState (false); 
    const requestAuth = async (event) => {
        event.preventDefault();
        return fetch ("https://app-unac-virtual-tracking.herokuapp.com/auth/registro" , { 
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: state.form.name,
                password: state.form.password,
                cellphone: state.form.cellphone,
                email: state.form.email,
                type_id: state.form.type_id,
                num_id: state.form.num_id,
                role: state.form.role,
                genre: state.form.genre,
                cod_student: state.form.cod_student,
                grade: state.form.grade,
            }), 
        })
        .then((data) => {
            console.log(data);
            if (data.ok) {
                window.location.assign("https://app-unac-virtual-tracking.herokuapp.com/auth/dashboard");
            } else {
                setShowError(true);
                setTimeout(() => {
                    setShowError(false);
                }, 5000);
            }
        })
        .catch((error) => {
            console.log('ERROR: ', error);
        }); 
    }

    return (
        <div className="inicio">
            <div class="container-contact100">
                <div class="wrap-contact100">
                    <form class="contact100-form validate-form position-absolute">
                        <span class="contact100-form-title">
                        <img src={logo} />
                        </span>

                        <div class="wrap-input100 validate-input" data-validate="Tu nombre es requerido">
                            <span class="label-input100" for="name">Tu nombre completo</span>
                            <input class="input100" type="text" name="name" placeholder="Nombre Completo" id="name" required="true" onChange={handleChange}></input>
                            <span class="focus-input100"></span>
                        </div>

                        <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <span class="label-input100" for="email">Correo Electronico</span>
                            <input class="input100" type="text" name="email" placeholder="Correo Electrónico" id="email" required="true" onChange={handleChange}></input>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="Tú número de celular es requerido">
                            <span class="label-input100" for="cellphone">Celular</span>
                            <input class="input100" type="text" name="cellphone" placeholder="Celular " id="cellphone" required="true" onChange={handleChange}></input>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="La contraseña es obligatoria">
                            <span class="label-input100" for="password">Escribe tu contraseña</span>
                            <input class="input100" type="text" name="password" placeholder="Contraseña" id="password" required="true" onChange={handleChange}></input>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 input100-select">
                            <span class="label-input100">Elige tu documento de identidad</span>
                            <div>
                                <select class="selection-2" name="type_id" id="type_id" required="true" data-validate="El tipo de documento es requerido" onChange={handleChange}>
                                    <option disabled selected>Selecciona una opción</option>
                                    <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                    <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                                    <option value="Cédula de Extranjería">Cédula de Extranjería</option>
                                    <option value="Pasaporte">Pasaporte</option>
                                </select>
                            </div>
                            <span class="focus-input100"></span>
                        </div>
                    </form>
                </div>
                
                <div class="wrap-contact100">
                    <form class="contact100-form validate-form position-absolute">
                        <span class="contact100-form-title">
                        </span>
                        <div class="wrap-input100 validate-input" data-validate="Tú número de documento es requerido">
                            <span class="label-input100" for="num_id">Documento de Identidad</span>
                            <input class="input100" type="text" name="num_id" placeholder="Documento" id="num_id" required="true" onChange={handleChange}></input>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 input100-select">
                            <span class="label-input100">Elige tu condición</span>
                            <div>
                                <select class="selection-2" name="role" id="role" required="true" onChange={handleChange} data-validate="Este campo es requerido"> 
                                    <option disabled selected>Selecciona una opción</option>
                                    <option value="Docente">Docente</option>
                                    <option value="Estudiante">Estudiante</option>
                                </select>
                            </div>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 input100-select">
                            <span class="label-input100">Género</span>
                            <div>
                                <select class="selection-2" name="genre" id="genre" onChange={handleChange}>
                                    <option disabled selected>Selecciona tu género</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                            <span class="focus-input100"></span>
                        </div>
                        <h6>Los siguientes campos solo son para estudiantes</h6>
                        <div class="wrap-input100 validate-input" data-validate="Son solo números">
                            <span class="label-input100" for="cod_student">Código Estudiantil</span>
                            <input class="input100" type="text" name="cod_student" placeholder="Código Estudiantil" id="cod_student" required="true" onChange={handleChange}></input>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 input100-select">
                            <span class="label-input100">Elige tu grado</span>
                            <div>
                                <select class="selection-2" name="grade" id="grade" required="true" data-validate="El grado es requerido" onChange={handleChange}>
                                    <option disabled selected>Selecciona tu grado</option>
                                    <option value="6º">6º</option>
                                    <option value="7º">7º</option>
                                    <option value="8º">8º</option>
                                    <option value="9º">9º</option>
                                    <option value="10º">10º</option>
                                    <option value="11º">11º</option>
                                </select>
                            </div>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="container-contact100-form-btn">
                            <div class="wrap-contact100-form-btn">
                                <div class="contact100-form-bgbtn"></div>
                                <button class="contact100-form-btn" 
                                href="https://app-unac-virtual-tracking.herokuapp.com/auth/dashboard" 
                                type="submit" 
                                onClick={requestAuth}>
                                Enviar
                                <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div id="dropDownSelect1"></div>

            <script src='./vendor/jquery/jquery-3.2.1.min.js'></script>
            <script src='./vendor/animsition/js/animsition.min.js'></script>
            <script src='./vendor/bootstrap/js/popper.js'></script>
            <script src='./vendor/bootstrap/js/bootstrap.min.js'></script>
            <script src='./vendor/select2/select2.min.js'></script>
            <script src='./vendor/daterangepicker/moment.min.js'></script>
            <script src='./vendor/daterangepicker/daterangepicker.js'></script>
            <script src='./vendor/countdowntime/countdowntime.js'></script>
            <script src='./js/main.js'></script>

            <script src='https://code.jquery.com/jquery-3.2.1.js'></script>
        </div>
    );
}; 
