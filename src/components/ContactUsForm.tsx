import Illustration1 from "../assets/images/illustrations/Group 2.svg";

interface ContactFormProps {
  closeModal: () => void;
}

const ContactUsForm: React.FC<ContactFormProps> = ({ closeModal }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    closeModal();
  };

  const services = ["Web Development", "App Development", "UI/UX Design"];
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay bg-black opacity-70 inset-0 fixed"></div>
        <div className="modal-container bg-[#F6E5D6] w-11/12 md:max-w-md lg:max-w-6xl mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-8 text-left px-4 md:px-6 lg:px-10">
            <div className="modal-contact-content grid lg:grid-cols-2 gap-10">
              <div className="lg:flex justify-center hidden">
                <img src={Illustration1} alt="" className="w-2/3" />
              </div>
              <div className="lg:border-l lg:px-8 border-gray-500">
                <div className="flex justify-between items-center mb-10">
                  <h1 className="text-xl lg:text-3xl font-bold text-black">
                    Let's Work Together
                  </h1>
                  <span
                    onClick={closeModal}
                    className="cursor-pointer z-50 modal-close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path d="M2.293 2.293a1 1 0 011.414 0L9 7.586l5.293-5.293a1 1 0 111.414 1.414L10.414 9l5.293 5.293a1 1 0 01-1.414 1.414L9 10.414l-5.293 5.293a1 1 0 01-1.414-1.414L7.586 9 2.293 3.707a1 1 0 010-1.414z" />
                    </svg>
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-semibold mb-2">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full border rounded-md py-2 px-3 text-gray-700 bg-[#F6E5D6] border-black"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-lg font-semibold mb-2 ">
                      Your Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border rounded-md py-2 px-3 text-gray-700 bg-[#F6E5D6] border-black"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="service"
                      className="block text-gray-700 text-lg font-semibold mb-2"
                    >
                      Select a Service:
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full border rounded-md py-2 px-3 text-gray-700 bg-[#F6E5D6] border-black "
                    >
                      <option
                        value=""
                        disabled
                        className="text-gray-700 selected"
                      >
                        -- Select a service --
                      </option>
                      {services.map((service, index) => (
                        <option
                          key={index}
                          value={service}
                          className="text-gray-700"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 text-lg font-semibold mb-2"
                    >
                      Describe you project in few words (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full border rounded-md py-2 px-3 text-gray-700 bg-[#F6E5D6] border-black"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#A259FF] hover:bg-[#a071dd] text-white py-2 px-4 rounded w-full font-bold text-2xl"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
