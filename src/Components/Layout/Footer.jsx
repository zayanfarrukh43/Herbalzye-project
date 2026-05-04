

const Footer = () => {
  return (
    <footer className="bg-[#f5f3ee] text-[#2d2a26] p-10 mt-10">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <div>
          <h2 className="text-xl font-bold text-[#355e3b]">HerbalYze</h2>
          <p className="text-sm mt-2">
            Premium herbal wellness.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Links</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Support</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>FAQ</li>
            <li>Shipping</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Social</h3>
          {/* <div className="flex gap-3 mt-2">
            <Facebook />
            <Instagram />
            <Twitter />
          </div> */}
        </div>

      </div>

    </footer>
  );
};

export default Footer;