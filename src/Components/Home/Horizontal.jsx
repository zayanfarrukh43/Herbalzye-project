import { Leaf, Truck, Flame } from "lucide-react";

const Horizontal = () => {
    return (
        <div className="w-full overflow-hidden bg-[#355e3b] text-white py-2 relative">

            <div className="flex whitespace-nowrap animate-scroll gap-10 items-center text-sm sm:text-base font-medium">

                {/* Items */}
                <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    <span>Organic & Halal</span>
                </div>

                <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>Free Shipping</span>
                </div>

                <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4" />
                    <span>Upto 30% OFF</span>
                </div>

                <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    <span>100% Organic & Halal</span>
                </div>

                <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>Free Shipping</span>
                </div>

                <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4" />
                    <span>Upto 30% OFF</span>
                </div>

                {/* Duplicate for smooth loop */}
                <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    <span>Organic & Halal</span>
                </div>

                <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>Free Shipping</span>
                </div>

                <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4" />
                    <span>Upto 30% OFF</span>
                </div>
                <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    <span>Organic & Halal</span>
                </div>

                <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" />
                    <span>Free Shipping</span>
                </div>

                <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4" />
                    <span>Upto 30% OFF</span>
                </div>

                
            </div>
        </div>
    );
};

export default Horizontal;