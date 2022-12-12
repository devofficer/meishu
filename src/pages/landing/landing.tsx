export const Landing = () => {
  return (
    <div className="relative">
      <img
        alt="background"
        src="assets/images/landing/bg.png"
        className="w-full -z-10"
      />
      <div className="top-0 pt-64 px-[265px] space-y-12 absolute">
        <h1 className="text-8xl font-bold uppercase text-center">
          Welcome to Meishu platfrom.
        </h1>
        <div className="flex justify-center space-x-8">
          <div className="button-md primary">Stake my NFT</div>
          <div className="button-md secondary">Buy $Meishu</div>
        </div>
      </div>
    </div>
  );
};
