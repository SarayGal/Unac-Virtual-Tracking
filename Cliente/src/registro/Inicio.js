import './inicio.css';
import './util.css';
import './main.php';
import logo from './images/logo.png';

function registroinicio() {
    return (
        <div className="inicio">
            <div class="container-contact100">
                <div class="wrap-contact100">
                    <form class="contact100-form validate-form position-absolute" action="main.php" method="post">
                        <span class="contact100-form-title">
                        <img src={logo} />
                        </span>

                        <div class="wrap-input100 validate-input" data-validate="Tu nombre es requerido">
                            <span class="label-input100" for="name">Tu nombre completo</span>
                            <input class="input100" type="text" name="name" placeholder="Nombre Completo" id="name" required="true"></input>
                            <span class="focus-input100"></span>
                        </div>

                        <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <span class="label-input100" for="email">Correo Electronico</span>
                            <input class="input100" type="text" name="email" placeholder="Correo Electronico" id="email" required="true"></input>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="Tú número de celular es requerido">
                            <span class="label-input100" for="celular">Celular</span>
                            <input class="input100" type="text" name="celular" placeholder="Número de celular" id="celular" required="true"></input>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="La contraseña es obligatoria">
                            <span class="label-input100" for="contraseña">Escribe tu contraseña</span>
                            <input class="input100" type="text" name="contraseña" placeholder="Escribe tu contraseña" id="contraseña" required="true"></input>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 input100-select">
                            <span class="label-input100">Elige tu documento de identidad</span>
                            <div>
                                <select class="selection-2" name="documento" id="documento" required="true" data-validate="El tipo de documento es requerido">
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
                    <form class="contact100-form validate-form position-absolute" action="main.php" method="post">
                        <span class="contact100-form-title">
                        </span>
                        <div class="wrap-input100 validate-input" data-validate="Tú número de documento es requerido">
                            <span class="label-input100" for="cedula">Documento de Identidad</span>
                            <input class="input100" type="text" name="cédula" placeholder="Número de documento" id="cédula" required="true"></input>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 input100-select">
                            <span class="label-input100">Elige tu condición</span>
                            <div>
                                <select class="selection-2" name="condicion" id="condicion" required="true" data-validate="Este campo es requerido">
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
                                <select class="selection-2" name="genero" id="genero">
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
                            <span class="label-input100" for="código">Código Estudiantil</span>
                            <input class="input100" type="text" name="códigp" placeholder="Código Estudiantil" id="código" required="true"></input>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 input100-select">
                            <span class="label-input100">Elige tu grado</span>
                            <div>
                                <select class="selection-2" name="grado" id="grado" required="true" data-validate="El grado es requerido">
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
                                <button class="contact100-form-btn" id="enviar">
                                    <span>
                                        Enviar
								                                <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                                    </span>
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
}

export default registroinicio;