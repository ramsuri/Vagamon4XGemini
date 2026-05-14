import { motion } from 'motion/react';

const attractions = [
  {
    title: "Pine Forest",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3ZFoPam9_uWD_zMKKoLfSWZ-omX6gviHrB8igbZqkH4treqjJhbWlQIpx7I3sRWXHygDfQIaeOI4Qg_mQfUzbWmbwLmCcLrd7bXgGi-LjMs9uLI3IRXTwXrc5kliEbbjlZqi6OOZZanrpwqYWT9d63upSlrPLKCYyMMD1Bw1lT9YZYa3TN0Sd1XyJuTjxz4NwzanWaN4gM3lOG7jOEe5gBLw36ubEMnlapyMo52kUs4fghQOdqXhAvt3hY-6n_2FGJC8wsliEKro",
  },
  {
    title: "Vagamon Meadows",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_7J-BIa_FWqDxFQU97fnlVd8aHf4VCC_dQCaOOJd2ewOEwmK-mzSK5xgZ5hszl21F1UexusdNamzH6nMT0iSlyNXulzcyVcYsUXPxOdu0wFcPkbyjl_7PHanYkyxLeGGSsBUvvRkuc6aEjdcEolgdfpb8OkyD76fjO3NS9NYLLu6v6CApz7oZmhGmDJoGIJUF1ORIuKdO2jzUDIS59HoeDYTC8wkMRFDbIe3it_XSqSL8ZcFNPk0sTjsL0Iyxl249e9yxrrw7bJM",
  },
  {
    title: "Kurisumala",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaUatWBKFqxykxRA_oy_0FyhYP-Vn7g58NZJ_ee40LBj4cYRZ25gLuoz5c7o3A__HKO8paJbzaFA0tHZE6Rg8C9nkffkC-CQyvYrCNxrOFW5_ZdLHLNtzbUumGykCKOd-JyY9Xh7aJ6b-raghaq3d8UM6P-Svt-9weJJ6_gjpD9xPy8PcEb4mqykYUNETnCICineN4L9dTCark0qi30GrXD_uYJNN474q9IpRPAEMyYmBllI08RaSXisPi4eEKnBuNLurI4Id0D1w",
  }
];

export default function Attractions() {
  return (
    <section className="py-24 bg-surface-container-low" id="attractions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl text-primary font-display">Explore the Magic of Vagamon</h2>
            <p className="text-on-surface-variant mt-2 text-lg">Discover the serenity of Kerala's most enchanting hill station.</p>
          </div>
          <button 
            aria-label="View all attractions in Vagamon"
            className="hidden md:block border-b border-primary text-primary font-bold uppercase text-xs tracking-widest pb-1 hover:text-secondary hover:border-secondary transition-colors"
          >
            View All Attractions
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attractions.map((attr, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15 }}
              className="group relative overflow-hidden rounded-md h-[450px] shadow-lg cursor-pointer"
            >
              <img 
                src={attr.img} 
                alt={`Scenery of ${attr.title} in Vagamon, Kerala`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-display group-hover:translate-x-2 transition-transform duration-300">
                  {attr.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
