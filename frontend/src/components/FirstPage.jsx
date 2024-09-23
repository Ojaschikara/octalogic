import { useState } from "react";

const FirstPage=()=> {
  const [tabNum, setTabNum] = useState(0);
  const [inpVal, setInpVal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    numberOfWheels: 2,
    typeofVehicle: "",
  });
  const [reqStates, setReqStates] = useState({
    isLoading: false,
    isError: false,
    errorMsg: false,
  });
  const [vehicleListStates, setVehicleListStates] = useState({
    loadingVehicles: false,
    errorVehicles: false,
    vehiclesList: [],
  });

  const InpChange = (e) => {
    const { name, value } = e.target;
    setInpVal((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Tab 1 */}
      <div>
        <h1>First, what's your name?</h1>
        <input
          type="text"
          name="firstName"
          value={inpVal?.firstName}
          onChange={InpChange}
          required
        />
        <input
          type="text"
          name="lastName"
          value={inpVal?.lastName}
          onChange={InpChange}
          required
        />
        <button onClick={() => setTabNum(1)}>Next</button>
      </div>
      {/* Number of Vehicles */}
      <div>
        <h1>Number of Vehicles</h1>
        <div>
          <input
            type="radio"
            value={2}
            onChange={InpChange}
            isChecked={inpVal?.numberOfWheels == 2}
            name="numberOfWheels"
          />
          <label htmlFor="">2</label>
        </div>
        <div>
          <input
            type="radio"
            value={4}
            onChange={InpChange}
            isChecked={inpVal?.numberOfWheels == 4}
            name="numberOfWheels"
          />
          <label htmlFor="">2</label>
        </div>
        <button onClick={() => setTabNum(2)}>Next</button>
      </div>
      {/* Type of Vehicles */}
      <div>
        <h1>Type of Vehicles</h1>
        <div>
          {vehicleListStates?.vehiclesList?.map((vehicleIte, vehicleInd) => (
            <div key={vehicleInd}>
              <input
                type="radio"
                value={2}
                onChange={InpChange}
                isChecked={inpVal?.numberOfWheels == 2}
                name="numberOfWheels"
              />
              <label htmlFor="">{vehicleIte?.name || "No Name Found"}</label>
            </div>
          ))}
        </div>
        <button onClick={() => setTabNum(3)}>Next</button>
      </div>
    </div>
  );
}

export default FirstPage;