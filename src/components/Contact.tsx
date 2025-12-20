import coderImg from "/photo/pic.png";
import type { FormEvent } from "react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa"

export default function Contact() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "8a6e6653-c342-4130-bdb6-c2cdf8aa1467");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        console.error(data);
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-green-400">Contact Me</h2>

        <div className="flex flex-col md:flex-row gap-10 justify-center">
          {/* Side Image */}
          <div className="hidden md:block md:w-1/2 h-96">
            <img
              src={coderImg}
              alt="Contact"
              className="rounded-xl shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-xl p-8 md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded bg-gray-900 border border-gray-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded bg-gray-900 border border-gray-600"
              />

              <textarea
                rows={5}
                name="message"
                required
                className="w-full p-4 rounded-xl border border-gray-300 resize-none
    focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Type your message..."
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-400 text-gray-900 py-3 rounded hover:bg-green-500"
              >
                Send Message
              </button>
            </form>
            {/* Social Links */}
            <div className="flex justify-center items-center gap-6 mt-6">
              <a
                href="https://facebook.com/jen.drex.sembrano.2024"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-green-400 text-white p-3 rounded-full transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/jendrexl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-green-400 text-white p-3 rounded-full transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/jendrexxx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-green-400 text-white p-3 rounded-full transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
