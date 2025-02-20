const Simple = () => {
  return (
    <section className="bg-simple-bg relative before:absolute before:w-full before:h-full before:bg-arrow-bg before:bg-no-repeat before:top-10">
      <div className="">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative z-10">
          <h3 className="text-center text-3xl lg:text-5xl font-semibold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500">
              A simple, secure way to buy <br /> and sell cryptocurrency
            </span>
          </h3>
          <p className="text-justify text-white/60 md:text-lg leading-6 font-normal mb-8 break-all">
            Easily buy and sell cryptocurrency on secure platforms like Binance,
            Coinbase, and Kraken. Enjoy fast transactions, strong security, and
            user-friendly interfaces.
          </p>
          <div className="flex justify-center ">
            <button className="text-xl font-semibold text-white py-4 px-6 lg:px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-xl">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simple;
