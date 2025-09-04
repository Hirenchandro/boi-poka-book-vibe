import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  return (
    <div>
      <div className="max-w-5xl h-[602px] ">
        <Banner></Banner>
      </div>
      <Books></Books>
    </div>
  );
};

export default Home;
