import { useState } from "react";

function Dishwashing() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <h4 className="tarea2">Lavar los platos</h4>
      <p>Usar guantes y desengrasante</p>
      <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
      <div className="result">
        La tarea {isChecked ? "ya se realizó" : "no se ha realizado"}.
      </div>
    </div>
  );
}

export default Dishwashing;
