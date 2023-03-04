import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import Container from "../components/Container";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { startOfMonth, endOfMonth, addMonths, format } from 'date-fns';
// import axios from "axios";

const Home = () => {
  const [dropdown1Value, setDropdown1Value] = useState('');
  const [dropdown2Value, setDropdown2Value] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(startOfMonth(new Date()));
  const [endDate, setEndDate] = useState(endOfMonth(addMonths(new Date(), 1)));
  
  const handleStartDateChange = (event) => {
    const date = new Date(event.target.value);
    setStartDate(startOfMonth(date));
    setEndDate(endOfMonth(addMonths(date, 1)));
  };

  const handleEndDateChange = (event) => {
    const date = new Date(event.target.value);
    setEndDate(endOfMonth(date));
  };
  
  

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
        dropdown2Value: dropdown2Value,
        startDate:startDate,
        endDate:endDate,
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
          <h1 className="text-lg">Heat Wave Predictor</h1>
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
      <label htmlFor="startMonth">Start Month:</label>
      <input
        id="startMonth"
        type="month"
        value={format(startDate, 'yyyy-MM')}
        onChange={handleStartDateChange}
      />
      <label htmlFor="endMonth">End Month:</label>
      <input
        id="endMonth"
        type="month"
        value={format(endDate, 'yyyy-MM')}
        onChange={handleEndDateChange}
        min={format(startDate, 'yyyy-MM')}
      />
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
