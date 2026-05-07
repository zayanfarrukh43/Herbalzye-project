import { ShoppingCart, Truck, CreditCard } from "lucide-react";

const FeaturesBar = () => {
  return (
    <div className="py-5 px-4">
      <div
        className="
          max-w-[1400px]
          mx-auto
          shadow-sm
          rounded-md
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          px-5
          sm:px-6
          py-6
        "
      >
        {/* ORDER ONLINE */}
        <div
          className="
            flex
            items-center
            gap-3
            bg-[#f8f6f1]
            p-4
            rounded-md
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-lg
            cursor-pointer
          "
        >
          <ShoppingCart
            size={32}
            className="
              text-[#355e3b]
              stroke-[1.8]
              shrink-0
              transition-transform
              duration-300
              hover:scale-110
            "
          />

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#1f2a1f]">
              Order Online
            </h3>

            <p className="text-[#555] mt-1 text-sm">
              Fuel Charges Are Now Effective
            </p>
          </div>
        </div>

        {/* NATIONWIDE SHIPPING */}
        <div
          className="
            flex
            items-center
            gap-3
            bg-[#f8f6f1]
            p-4
            rounded-md
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-lg
            cursor-pointer
          "
        >
          <Truck
            size={32}
            className="
              text-[#355e3b]
              stroke-[1.8]
              shrink-0
              transition-transform
              duration-300
              hover:scale-110
            "
          />

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#1f2a1f]">
              Nationwide Shipping
            </h3>

            <p className="text-[#555] mt-1 text-sm">
              Mon-Sat: 9:00 AM - 7:00 PM
            </p>
          </div>
        </div>

        {/* PAYMENT SYSTEM */}
        <div
          className="
            flex
            items-center
            gap-3
            bg-[#f8f6f1]
            p-4
            rounded-md
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-lg
            cursor-pointer
          "
        >
          <CreditCard
            size={32}
            className="
              text-[#355e3b]
              stroke-[1.8]
              shrink-0
              transition-transform
              duration-300
              hover:scale-110
            "
          />

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#1f2a1f]">
              Payment System
            </h3>

            <p className="text-[#555] mt-1 text-sm">
              Secure Payment System or Cash on Delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBar;