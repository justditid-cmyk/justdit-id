export default function WhyUs() {
  const benefits = [
    {
      icon: "✓",
      title: "Akun Resmi dan Legal",
      description: "Semua akun tanpa crack mod",
    },
    {
      icon: "💰",
      title: "Dapatkan Harga Murah",
      description: "Harga ekonomis kualitas eksklusif",
    },
    {
      icon: "🛡️",
      title: "Amanah dan Bergaransi",
      description: "Kenyamanan konsumen paling utama",
    },
  ];

  return (
    <section className="py-8 bg-[#041A2F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#727271] rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl text-center"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
