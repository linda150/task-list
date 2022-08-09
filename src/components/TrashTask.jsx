import { useState } from "react";

function TrashTask() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <h4 className="tarea1">Sacar la basura</h4>
      <p>Se debe sacar antes de las 10 a.m</p>
      <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
      <div className="result">
        La tarea {isChecked ? "ya se realizó" : "no se ha realizado"}.
      </div>
    </div>
  );
}

export default TrashTask;
