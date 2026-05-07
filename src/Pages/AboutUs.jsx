import {
  Leaf,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

import aboutImg from "../assets/fitness.png";

const AboutUs = () => {
  return (
    <section className="bg-[#f5f3ee] py-16 md:py-24 px-4 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          
          <div className="relative w-full max-w-[520px]">
            
            <img
              src={aboutImg}
              alt="About HerbalYze"
              className="
                w-full
                h-[420px]
                sm:h-[520px]
                md:h-[650px]
                object-cover
                rounded-[35px]
                shadow-xl
              "
            />

            {/* Floating Leaves */}
            <Leaf
              className="
                absolute
                top-6
                left-4
                text-green-500
                w-10
                h-10
                rotate-12
              "
            />

            <Leaf
              className="
                absolute
                bottom-10
                right-6
                text-[#355e3b]
                w-14
                h-14
                -rotate-12
              "
            />

            <Leaf
              className="
                absolute
                top-1/2
                -left-5
                text-lime-500
                w-12
                h-12
                rotate-45
              "
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          
          {/* Top Badge */}
          <div className="flex items-center gap-2 mb-5">
            <Leaf className="text-[#355e3b]" size={22} />

            <span className="text-[#355e3b] font-semibold text-sm md:text-base">
              Who We Are
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              text-[#1f2a1f]
              leading-tight
              mb-6
            "
          >
            Crafted for
            <br />
            Natural Living
          </h2>

          {/* Description */}
          <p
            className="
              text-gray-600
              text-base
              md:text-lg
              leading-relaxed
              mb-10
              max-w-xl
            "
          >
            Our mission is delivering high-quality herbal formulas that
            enhance daily vitality, strengthen immunity, and promote
            balanced wellness naturally.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            
            {/* Feature */}
            <div className="flex gap-4">
              <Sparkles className="text-[#355e3b] mt-1" size={28} />

              <div>
                <h3 className="text-2xl font-semibold text-[#355e3b] mb-2">
                  Natural Innovation
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  We combine natural botanicals and modern wellness science
                  for better everyday health.
                </p>
              </div>
            </div>

            {/* Feature */}
            <div className="flex gap-4">
              <ShieldCheck className="text-[#355e3b] mt-1" size={28} />

              <div>
                <h3 className="text-2xl font-semibold text-[#355e3b] mb-2">
                  Clean Purity
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Carefully selected ingredients ensuring safe and effective
                  herbal wellness support.
                </p>
              </div>
            </div>

            {/* Feature */}
            <div className="flex gap-4">
              <HeartHandshake
                className="text-[#355e3b] mt-1"
                size={28}
              />

              <div>
                <h3 className="text-2xl font-semibold text-[#355e3b] mb-2">
                  Wellness First
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Supporting balance, immunity, energy, and healthier living
                  naturally.
                </p>
              </div>
            </div>

            {/* Stats */}
            {/* <div className="space-y-6">
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-[#355e3b]">
                    Clinical-Grade Formula
                  </span>

                  <span className="font-bold text-[#355e3b]">
                    96%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#d4a017] h-2 rounded-full w-[96%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-[#355e3b]">
                    Botanical Potency
                  </span>

                  <span className="font-bold text-[#355e3b]">
                    95%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#d4a017] h-2 rounded-full w-[95%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-[#355e3b]">
                    Absorption Efficiency
                  </span>

                  <span className="font-bold text-[#355e3b]">
                    92%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#d4a017] h-2 rounded-full w-[92%]" />
                </div>
              </div>

            </div> */}
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;