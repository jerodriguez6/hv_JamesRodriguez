import React from "react";
import "../../components/form/form.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
    return (
        <div id="contact">
            <section id="contacto" className="contactus">
                <div className="contactme">
                    <div>
                        <p>¡CONTÁCTAME!</p>
                        <p>Enviame un mensaje a mi correo.</p>
                    </div>
                    <div className="contact">
                        <form
                            method="POST"
                            action="https://formsubmit.co/jamesrodriguez3188@gmail.com"
                        >
                            <label for="Name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required="true"
                            />
                            <label for="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required="true"
                            />
                            <label for="subject">Asunto</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required="true"
                            />
                            <label for="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                required="true"
                            ></textarea>
                            <input
                                type="submit"
                                value="Send"
                                required="true"
                                target="blank"
                            />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Form;
