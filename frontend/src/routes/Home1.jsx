import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import Container from "../components/Container";
// import axios from "axios";

const Home = () => {
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dropdown1Value: dropdown1Value,
        dropdown2Value: dropdown2Value
      })
    })

    // const { similarity, image_gen } = response.data;
    // setLoading(false);
    navigate(`/result`, { state: { dropdown1Value, dropdown2Value } });
  };

  return (
    <div>
      <main className="max-w-xl mx-auto my-16">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300">
          SWAस्थम
          </h1>
          <h1 className="text-lg">Heat Wave and Temperature Predictor</h1>
        </div>
        {loading && (
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid place-items-center h-full bg-black/[.6]">
              <BounceLoader loading={loading} color="green" />
            </div>
          </div>
        )}
        <div className="text-center text-slate-600 font-semi-bold">
          <br></br>
        </div>
        <Container>
          {error && (
            <p className="text-center p-2 mb-5 bg-red-100 border-2 border-red-400 rounded-md">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
            <label>Enter the City: </label>
            <select value={dropdown1Value} onChange={e => setDropdown1Value(e.target.value)}>
            <option value="">Select a city</option>
            <option value="nizamabad">Nizamabad</option>
            <option value="adilabad">Adilabad</option>
            <option value="kudawarangal">Kuda ,Warangal</option>
            <option value="meesevawarangal">Mee-Seva,Warangal</option>
            <option value="khamman">Khammam</option>
            <option value="karimnagar">Karimnagar</option>
            </select>
            <label>Enter the month: </label>
            <select value={dropdown2Value} onChange={e => setDropdown2Value(e.target.value)}>
            <option value="">Select a month</option>
             <option value="jan">January</option>
             <option value="feb">Februrary</option>
             <option value="mar">March</option>
             <option value="apr">April</option>
             <option value="may">May</option>
             <option value="jun">June</option>
             <option value="jul">July</option>
             <option value="aug">August</option>
             <option value="sep">September</option>
             <option value="oct">October</option>
             <option value="nov">November</option>
             <option value="dec">December</option>
            </select>

            <label>Enter the Model: </label>
            <select value={dropdown2Value} onChange={e => setDropdown2Value(e.target.value)}>
            <option value="">Select a model</option>
             <option value="model1">MODEL 1</option>
             <option value="model2">MODEL 2</option>
             <option value="model3">MODEL 3</option>
             <option value="model4">MODEL 4</option>
            </select>
            <button
              type="submit"
              className="col-span-2 bg-blue-600 text-white rounded-md p-3
              bg-gradient-to-r from-green-300 to-blue-400 
              "
            >
              Submit
            </button>
          </form>
        </Container>
      </main>
    </div>
  );
};

export default Home;
