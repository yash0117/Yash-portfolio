function Certifications() {
  const certifications = [
    {
      title: "JavaScript for Beginners",
      date: "September 22, 2026",
      icon: "JS",
      certificate: "/certificates/javascript-certificate.pdf",
    },
    {
      title: "ReactJS for Beginners",
      date: "August 26, 2026",
      icon: "⚛",
      certificate: "/certificates/reactjs-certificate.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-cyan-400 font-semibold tracking-wider uppercase text-sm sm:text-base mb-3">
            My Achievements
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Certifications
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Certifications that reflect my continuous learning and interest
            in modern web development.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {certifications.map((certificate, index) => (
            <div
              key={index}
              className="group bg-slate-800/60 border border-slate-700 rounded-2xl p-5 sm:p-6 hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-start gap-4 sm:gap-5">

                {/* Certificate Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-xl bg-slate-700 flex items-center justify-center text-cyan-400 font-bold text-lg sm:text-xl group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
                  {certificate.icon}
                </div>

                {/* Certificate Information */}
                <div className="min-w-0 flex-1">

                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 break-words">
                    {certificate.title}
                  </h3>

                  <p className="text-slate-400 mt-2 text-sm sm:text-base">
                    Completed on {certificate.date}
                  </p>

                  <a
                    href={certificate.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 sm:mt-5 text-cyan-400 font-medium text-sm sm:text-base hover:text-cyan-300 transition-colors"
                  >
                    View Certificate
                    <span className="ml-1">→</span>
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;