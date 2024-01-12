const Buttons = ({ valBtn }) => {
  let symbols = /^[\/x\+\-]+$/;
  let val = "";
  let val1 = "";
  let operator;
  let operatorPressed = false;

  const changeVal = (v) => {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    if (valBtn === 0) {
      valBtn = v;
    } else {
      if (!valBtn.includes(".") || v !== ".") {
        valBtn = valBtn + v;
      }
    }

    if (symbols.test(v)) {
      console.log("es un operador");
      operator = v;

      if (!operatorPressed) {
        console.log("output nO tiene un operador, se le asigna uno");
        val = valBtn;
        output.innerHTML = val;
      } else {
        console.log(
          "output SI tiene un operador y se presionó otro, se cambia el anterior"
        );
        val1 = val.slice(0, -1) + v;
        output.innerHTML = val1;
      }
      operatorPressed = true;
      valBtn = 0;
    } else {
      console.log("esto no es un operador");
      if (operatorPressed) {
        console.log(
          "estado de operador true, se pasa a false y se bloquean operadores"
        );
        operatorPressed = false;
        opsActions("d");
      } else {
        console.log(
          "estado de operador en false... activando botones y borrando resultado anterior"
        );
        if (val.length < 1) {
          output.innerHTML = "Output";
          opsActions("a");
        }
      }
    }

    input.innerHTML = valBtn;

    console.log("val btn: " + valBtn);
    console.log("val: " + val);
    console.log("val1: " + val1);
    console.log("\n");
  };

  const calc = () => {
    let output = document.getElementById("output");
    let valF = parseFloat(val),
      valBtnF = parseFloat(valBtn),
      val1F = parseFloat(val1);
    reset();
    isNaN(valF)
      ? (output.innerHTML =
          String(val1F + " " + operator + " " + valBtnF) +
          " = " +
          Math.floor(mathThing[operator](val1F, valBtnF) * 100) / 100)
      : (output.innerHTML =
          String(valF + " " + operator + " " + valBtnF) +
          " = " +
          Math.floor(mathThing[operator](valF, valBtnF) * 100) / 100);
  };

  const mathThing = {
    "/": (x, y) => {
      return x / y;
    },
    x: (x, y) => {
      return x * y;
    },
    "-": (x, y) => {
      return x - y;
    },
    "+": (x, y) => {
      return x + y;
    },
  };

  const opsActions = (a) => {
    let div = document.getElementById("divide"),
      mul = document.getElementById("multiply"),
      subs = document.getElementById("substract"),
      add = document.getElementById("add"),
      eq = document.getElementById("equals");
    if (a == "a") {
      div.classList.remove("disabled");
      mul.classList.remove("disabled");
      subs.classList.remove("disabled");
      add.classList.remove("disabled");
      eq.classList.remove("disabled");

      div.classList.add("buttons");
      mul.classList.add("buttons");
      subs.classList.add("buttons");
      add.classList.add("buttons");
      eq.classList.add("equal");
    } else {
      div.classList.remove("buttons");
      mul.classList.remove("buttons");
      subs.classList.remove("buttons");
      add.classList.remove("buttons");
      if (valBtn == 0) {
        eq.classList.remove("equal");
      }

      div.classList.add("disabled");
      mul.classList.add("disabled");
      subs.classList.add("disabled");
      add.classList.add("disabled");
      if (valBtn == 0) {
        eq.classList.add("disabled");
      }
    }
  };

  const back = () => {
    if (valBtn.length > 0) {
      valBtn = valBtn.slice(0, -1);
    }
    if (valBtn.length === 0) {
      valBtn = 0;
    }
    input.innerHTML = valBtn;
  };

  const reset = () => {
    operatorPressed = false;
    valBtn = 0;
    val = "";
    val1 = "";
    input.innerHTML = valBtn;
    output.innerHTML = "Output";
    opsActions("d");
  };

  return (
    <>
      <button id="clear" onClick={reset} className="ac">
        AC
      </button>
      <button id="divide" onClick={() => changeVal("/")} className="disabled">
        /
      </button>

      <button onClick={() => changeVal("7")} id="seven">
        7
      </button>
      <button onClick={() => changeVal("8")} id="eight">
        8
      </button>
      <button onClick={() => changeVal("9")} id="nine">
        9
      </button>

      <button id="multiply" onClick={() => changeVal("x")} className="disabled">
        x
      </button>

      <button onClick={() => changeVal("4")} id="four">
        4
      </button>
      <button onClick={() => changeVal("5")} id="five">
        5
      </button>
      <button onClick={() => changeVal("6")} id="six">
        6
      </button>

      <button
        id="substract"
        onClick={() => changeVal("-")}
        className="disabled"
      >
        -
      </button>

      <button onClick={() => changeVal("1")} id="one">
        1
      </button>
      <button onClick={() => changeVal("2")} id="two">
        2
      </button>
      <button onClick={() => changeVal("3")} id="three">
        3
      </button>

      <button id="add" onClick={() => changeVal("+")} className="disabled">
        +
      </button>

      <button onClick={() => changeVal("0")} id="zero">
        0
      </button>
      <button onClick={() => changeVal(".")}>.</button>
      <button onClick={back} className="back">
        back
      </button>
      <button id="equals" onClick={calc} className="disabled">
        =
      </button>
    </>
  );
};

export default Buttons;
