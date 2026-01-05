// src/components/home/HowWeWork.jsx
const steps = [
  "Nos consultás",
  "Analizamos tu maquinaria",
  "Te cotizamos la mejor opción",
  "Enviamos a todo el país",
];

const HowWeWork = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-14">
          Cómo trabajamos
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {steps.map((step, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <span className="text-yellow-500 text-2xl font-bold">
                {i + 1}
              </span>
              <p className="mt-4 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
