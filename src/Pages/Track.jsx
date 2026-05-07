import {
  PackageCheck,
  Truck,
  MapPin,
  Search,
  Clock3,
} from "lucide-react";

const Track = () => {
  return (
    <section className="w-full bg-[#f5f3ee] min-h-screen py-16">
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* HEADING */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-serif text-[#1f2f1f] mb-4">
            Track Your Order
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Enter your tracking ID below to check the latest delivery
            status of your HerbalYze order.
          </p>
        </div>

        {/* TRACKING BOX */}
        <div className="bg-white rounded-[30px] shadow-sm p-6 sm:p-10 border border-[#e8e3d9]">
          
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* INPUT */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#355e3b] w-5 h-5" />

              <input
                type="text"
                placeholder="Enter Tracking ID"
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#355e3b]"
              />
            </div>

            {/* BUTTON */}
            <button className="bg-[#355e3b] hover:bg-[#2d4d2f] text-white px-8 py-4 rounded-2xl font-semibold transition">
              Track Order
            </button>
          </div>

          {/* SAMPLE TRACKING RESULT */}
          <div className="mt-12">
            
            {/* ORDER INFO */}
            <div className="bg-[#f8f5ee] rounded-3xl p-6 border border-[#ebe5d8]">
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                
                <div>
                  <p className="text-sm text-gray-500">Tracking ID</p>
                  <h3 className="text-xl font-bold text-[#1f2f1f]">
                    HYZ-458792
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Estimated Delivery</p>
                  <h3 className="text-xl font-bold text-[#355e3b]">
                    2 - 4 Days
                  </h3>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Current Status</p>

                  <span className="inline-flex items-center gap-2 bg-[#355e3b] text-white px-4 py-2 rounded-full text-sm">
                    <Truck className="w-4 h-4" />
                    In Transit
                  </span>
                </div>
              </div>
            </div>

            {/* TRACKING STEPS */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* STEP 1 */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#ebe5d8] text-center hover:-translate-y-1 transition">
                <div className="w-14 h-14 bg-[#355e3b] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <PackageCheck />
                </div>

                <h4 className="font-semibold text-[#1f2f1f] mb-2">
                  Order Packed
                </h4>

                <p className="text-sm text-gray-500">
                  Your order has been packed successfully.
                </p>
              </div>

              {/* STEP 2 */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#ebe5d8] text-center hover:-translate-y-1 transition">
                <div className="w-14 h-14 bg-[#355e3b] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck />
                </div>

                <h4 className="font-semibold text-[#1f2f1f] mb-2">
                  Shipped
                </h4>

                <p className="text-sm text-gray-500">
                  Your package is on the way.
                </p>
              </div>

              {/* STEP 3 */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#ebe5d8] text-center hover:-translate-y-1 transition">
                <div className="w-14 h-14 bg-[#355e3b] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin />
                </div>

                <h4 className="font-semibold text-[#1f2f1f] mb-2">
                  Reached City
                </h4>

                <p className="text-sm text-gray-500">
                  Arrived at your nearest hub.
                </p>
              </div>

              {/* STEP 4 */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#ebe5d8] text-center hover:-translate-y-1 transition">
                <div className="w-14 h-14 bg-[#355e3b] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock3 />
                </div>

                <h4 className="font-semibold text-[#1f2f1f] mb-2">
                  Out for Delivery
                </h4>

                <p className="text-sm text-gray-500">
                  Your order will arrive shortly.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track;