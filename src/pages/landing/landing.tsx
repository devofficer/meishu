export const Landing = () => {
  return (
    <div className="page-container">
      <div className="landing-container">
        <div className="landing-description">
          <div className="landing-title">
            <p className="landing-title heading1">Welcome to</p>
            <p className="landing-title heading2">Meishu Platform</p>
          </div>
          <p className="text-gradient text-3xl font-bold">Battle for Domination</p>
          <p className="landing-desc">The development of human-animal super-soldiers that supported regional conflicts, across the globe - has led to unexpected uprisings in the late 2000s. The MEISHU archipelago nation has collapsed; following attacks and terrorist bombings from Red September. With MEISHU's leadership in Chaos and large parts of the Archipelago devolving into DMZs (Demilitarized zones) - a battle across the air and land has begun.</p>
          <div className="space-x-2">
            <button className="btn btn-primary">Stake My NFT</button>
            <button className="btn btn-primary">Buy $Meishu</button>
          </div>
        </div>
        <div className="landing-img">
          <img alt="airplane" className="w-full" src="/assets/images/landing/airplane.png"/>
        </div>
      </div>
    </div>
  );
};
