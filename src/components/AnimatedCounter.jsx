import { counterItems } from "../constants/index.js";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-2-cols">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp end={item.value} suffix={item.suffix} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
         {/* {counterItems.map((item) => {
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div className="counter-number text-white text-5xl font-bold mb-2"
              key={counterItems.label}>
              0 {item.suffix}
              <CountUp
                suffix={item.suffix}

                end={item.value}
              />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>;
        })} */}
      </div>
    </div>
  );
};

export default AnimatedCounter;
