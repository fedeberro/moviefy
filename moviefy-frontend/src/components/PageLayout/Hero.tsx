import { Paragraph } from "../Typography";

export default function Hero() {
  return (
    <section className="flex flex-col gap-4 items-center p-6 md:p-12 bg-gradient-to-b rounded-lg from-primary to-[#630303] relative shadow-xl">
      <h2 className="font-extrabold text-5xl md:text-6xl text-white text-center z-10">
        ¡Bienvenido/a a Moviefy!
      </h2>
      <Paragraph className="text-center text-white w-full xl:w-[50%] z-10">
        Descubrí, buscá y organizá tus películas favoritas de manera fácil y
        divertida. Creá listas personalizadas para tus próximas noches de cine,
        llevá un registro de las que ya hayas visto y guardá esas películas que
        te encantaron en una lista de favoritas. ¡Tu experiencia cinematográfica
        empieza en Moviefy!
      </Paragraph>
      <div className="hero-pattern w-full h-full absolute top-0 right-0"></div>
    </section>
  );
}
