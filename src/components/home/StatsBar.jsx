// src/components/home/StatsBar.jsx
const StatsBar = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-3xl font-bold text-yellow-500">+15</p>
          <p className="text-gray-600">Años de experiencia</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-yellow-500">100%</p>
          <p className="text-gray-600">Cobertura nacional</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-yellow-500">+500</p>
          <p className="text-gray-600">Repuestos disponibles</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-yellow-500">Soporte</p>
          <p className="text-gray-600">Atención personalizada</p>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
