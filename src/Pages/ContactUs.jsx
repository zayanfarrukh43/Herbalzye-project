import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full bg-[#f5f3ee] py-16">
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT: FORM */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-[#1f2f1f]">
              DROP US A LINE
            </h2>

            <form className="space-y-6">
              
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Your Name (required)
                </label>
                <input
                  type="text"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#355e3b]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#355e3b]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Your Phone Number
                </label>
                <input
                  type="text"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#355e3b]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Your Message (required)
                </label>
                <textarea
                  rows="5"
                  className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#355e3b]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full border-2 border-[#355e3b] text-[#355e3b] py-3 rounded-full font-semibold hover:bg-[#355e3b] hover:text-white transition"
              >
                Send
              </button>

            </form>
          </div>

          {/* RIGHT: CONTACT INFO */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#1f2f1f]">
              CONTACT INFORMATION
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
              We love to hear from you on our customer service, merchandise,
              website or any topics you want to share with us. Your comments
              and suggestions will be appreciated.
            </p>

            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <MapPin className="text-[#355e3b]" />
                <p className="text-gray-700 text-sm">
                  Pechs Block 2, Karachi, Pakistan
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-[#355e3b]" />
                <p className="text-gray-700 text-sm">
                  (+92) 3292608369
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#355e3b]" />
                <p className="text-gray-700 text-sm">
                  info.herbalyze@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;