import { Homepage } from "@/sanity/queries";

interface WhyUsProps {
  data?: Homepage | null;
}

export default function WhyUs({ data }: WhyUsProps) {
  // Default features if CMS data is not available
  const defaultFeatures = [
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

  const benefits = data?.whyUsFeatures || defaultFeatures;

  return (
    <section className="py-2 sm:py-6 bg-[#041A2F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(data?.whyUsHeading || data?.whyUsSubheading) && (
          <div className="text-center mb-8">
            {data?.whyUsHeading && (
              <h2 className="text-3xl font-bold text-white mb-3">
                {data.whyUsHeading}
              </h2>
            )}
            {data?.whyUsSubheading && (
              <p className="text-gray-300 max-w-2xl mx-auto">
                {data.whyUsSubheading}
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-3 gap-2 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#727271] rounded-lg sm:rounded-2xl p-2 sm:p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl text-center"
            >
              <div className="text-base sm:text-4xl mb-0.5 sm:mb-3">
                {benefit.icon}
              </div>
              <h3 className="text-[10px] sm:text-lg font-bold text-white mb-0.5 sm:mb-2 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-gray-200 text-[8px] sm:text-sm leading-tight sm:leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
