export default function Contact() {
  console.log("hi i am from contact");
  return (
    <section className="mb-8 mt-16 bg-white">
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight">
          Contact Us
        </h2>
        <p className="mb-8 text-center font-light sm:text-xl lg:mb-16">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="focus:ring-primary-200 focus:border-primary-200 dark:focus:ring-primary-200 dark:focus:border-primary-200 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-[#F5F5F5] p-2.5 text-sm shadow-sm dark:border-gray-200 dark:placeholder-gray-400"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="focus:ring-primary-200 focus:border-primary-200 dark:focus:ring-primary-200 dark:focus:border-primary-200 dark:shadow-sm-light block w-full rounded-lg border bg-[#F5F5F5] p-3 text-sm shadow-sm dark:placeholder-gray-400"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="focus:ring-primary-500 focus:border-primary-500 e dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full border border-gray-300 bg-[#F5F5F5] p-2.5 text-sm shadow-sm dark:border-gray-200 dark:placeholder-gray-400"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            name="submit-message"
            className="hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg bg-black px-5 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
