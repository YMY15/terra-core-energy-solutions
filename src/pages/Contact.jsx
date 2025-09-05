export default function Contact() {
  return (
    <section className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-green-700 text-white rounded-lg shadow"
        >
          Send
        </button>
      </form>
    </section>
  );
}