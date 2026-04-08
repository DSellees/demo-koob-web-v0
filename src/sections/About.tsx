const About = () => {
  return (
    <section className="py-20 lg:py-32 bg-koob-beige">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-8 leading-tight">
            Consultoría estratégica para empresas que necesitan resultados
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            KOOB Advisory es una firma de consultoría de dirección especializada en acompañar a 
            empresas en momentos de transformación crítica. No venimos a decirte qué hacer: 
            venimos a hacerlo contigo.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nuestro equipo senior combina experiencia en banca, telecomunicaciones y grandes 
            corporaciones con una metodología probada que ha ayudado a más de 150 empresas 
            a recuperar el crecimiento, optimizar costes y mejorar sus resultados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
