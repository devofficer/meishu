export const Landing = () => {
  return (
    <div className="page-container">
      <div className="landing-container">
        <div className="landing-description">
          <div className="landing-title">
            <p className="heading1">Can you please contact here?</p>
            <p className="heading2">Email: alexontech1212@gmail.com</p>
            <p className="heading2">Skype: live:.cid.eea4acf97ee8eda9</p>
          </div>
          <p className="text-teal-400 text-3xl font-bold">
            Battle for Domination
          </p>
          <p className="landing-desc">
            The development of human-animal super-soldiers that supported
            regional conflicts, across the globe - has led to unexpected
            uprisings in the late 2000s. The MEISHU archipelago nation has
            collapsed; following attacks and terrorist bombings from Red
            September. With MEISHU's leadership in Chaos and large parts of the
            Archipelago devolving into DMZs (Demilitarized zones) - a battle
            across the air and land has begun.
          </p>
          <div className="space-x-0 space-y-2 px-auto lg:space-x-4">
            <button className="btn btn-tools">Stake My NFT</button>
            <button className="btn btn-gradient">Buy $Meishu</button>
          </div>
        </div>
        <div className="landing-img">
          <img
            alt="airplane"
            className="w-full"
            src="/assets/images/landing/airplane.png"
          />
        </div>
      </div>
    </div>
  );
};
