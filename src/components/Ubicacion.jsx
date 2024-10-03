const Ubicacion = () => {
    return (
        <div className="ubicacion">
            <div className="contenedor">
                <div className="titulo bg-black items-center justify-center hidden w-full md:flex md:w-auto md:order-1 text-3xl font-bold">
                    <h1 className="text-yellow-500 ">Ubicación</h1>
                </div>
                <div className="infoMapa grid grid-cols-2 pl-20 pt-10 pb-20 gap-8   bg-gray-500">
                    <div className="map" id="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.413880213473!2d-107.395753712684!3d24.8072466259706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcd0af131c451d%3A0xa34d2ce863187663!2sCalle%20Benito%20Juarez%2058%2C%20Primer%20Cuadro%2C%2080000%20Culiac%C3%A1n%20Rosales%2C%20Sin.!5e0!3m2!1ses-419!2smx!4v1727206858513!5m2!1ses-419!2smx"
                            width="80%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="datosUbicacion items-center justify-center pt-15">
                        <h3 className="text-2xl">Nos encontramos ubicados en la plaza de la mujer</h3>

                        <div className="text-xl">
                            <div className="text-yellow-500">
                                <h5>Calle: <span className="text-white">Benito Juarez, Primer Cuadro, 80000 Culiacán Rosales, Sin.</span></h5>
                            </div>
                            <div className="text-yellow-500">
                                <h5>Local: <span className="text-white">129</span></h5>
                            </div>
                            <div className="text-yellow-500">
                                <h5>Horario: <span className="text-white">10:00 AM - 06:00 PM</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Ubicacion;