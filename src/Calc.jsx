import Buttons from "./Buttons";
import InOut from "./InOut";
const val = 0;
function Calc() {
  return (
    <>
      <div className="wrapper">
        <div className="display">
          <InOut outp="Output" />
        </div>
        <div className="calc">
          <Buttons valBtn={val} />
        </div>
      </div>
    </>
  );
}

export default Calc;
