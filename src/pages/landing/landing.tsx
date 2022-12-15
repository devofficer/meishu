export const Landing = () => {
  return (
    <div className="page-container">
      <div className="landing-container">
        <p className="text-center font-bold text-2xl xl:text-8xl">Welcome to Meishu platfrom.</p>
        <div className="flex flex-col xl:flex-row space-y-4 xl:space-x-4 xl:space-y-0">
          <button className="btn btn-primary">Stake My NFT</button>
          <button className="btn btn-primary">Buy $Meishu</button>
        </div>
      </div>
    </div>
  );
};
