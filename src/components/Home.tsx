function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-10 bg-gray-900 text-white"
    >
      {/* Left side - Image */}
      <div className="flex justify-center md:justify-start">
        <img
          src="/photo/pic1.jpg"
          alt="Profile"
          className="w-80 h-80 object-cover rounded-full shadow-lg mb-6"
        />
      </div>

      {/* Right side - Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-extrabold mb-4">
          Hi, I'm <span className="text-green-600">Jendrex Lagando</span>
        </h1>

        {/* Skills Icons */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
            alt="HTML"
            className="w-12 h-12 mx-auto"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
            alt="CSS"
            className="w-12 h-12 mx-auto"
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/laravel-2.svg"
            alt="Laravel"
            className="w-12 h-12 mx-auto"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png"
            alt="MySQL"
            className="w-12 h-12 mx-auto"
          />
          <img
            src="/icons/mssql.png"
            alt="MS SQL Server"
            className="w-12 h-12 mx-auto"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/919/919830.png"
            alt="PHP"
            className="w-12 h-12 mx-auto"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt="JavaScript"
            className="w-12 h-12 mx-auto"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2165/2165004.png"
            alt="REST API"
            className="w-12 h-12 mx-auto"
          />
        </div>

        {/* Updated Bio */}
        <p className="text-lg">
          I am a self-taught UI/UX designer and web developer with over 3 years of experience building web applications using <span className="font-semibold text-green-600">Laravel</span>. I focus on creating meaningful and delightful digital products that balance user needs with business goals.
        </p>
      </div>
    </section>
  );
}

export default Home;
