const Contact = () => {
  return (
    <section id="contact" className="bg-opacity-10 border-2 border-white/10 rounded-2xl py-12 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl text-white font-bold text-center mb-8">Contact Me</h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              id="name"
              className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className=" text-white px-6 py-2 font-semibold border-2 rounded-lg hover:bg-white hover:text-blue-800 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
