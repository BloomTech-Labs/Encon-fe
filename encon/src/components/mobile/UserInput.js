<<<<<<< HEAD
import React, { useState, useEffect } from "react";

import { Link, Route } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../../styles/mobile/UserInput.scss";
import computerPNG from "../../assets/ElectronicsFolder/005-computer.png";
import dishPNG from "../../assets/ElectronicsFolder/006-dishwasher.png";
import clothesWashPNG from "../../assets/ElectronicsFolder/048-washing machine.png";
import tvPNG from "../../assets/ElectronicsFolder/042-television.png";
import calendarPNG from "../../assets/ElectronicsFolder/calendar.png";
import { DatePicker } from "./DatePicker";
import { getByText } from "@testing-library/react";

// import { useOktaAuth } from "@okta/okta-react";

export const UserInput = () => {
  const { handleSubmit, register, errors } = useForm();

  // const onSubmit = () => {
  //   let one = `https://localhost:3300/api/encon/appliances,${dishWasher}`;

  //   let two = "https://localhost:3300/api/encon/appliances";

  //   let three = "https://localhost:3300/api/encon/appliances";

  //   let four = "https://localhost:3300/api/encon/appliances";
  //   let five = "https://localhost:3300/api/encon/appliances";

  //   const requestOne = axios.post(one, dishWasher);
  //   const requestTwo = axios.post(two);
  //   const requestThree = axios.post(three);
  //   const requestFour = axios.post(four);
  //   const requestFive = axios.post(five);

  //   axios
  //     .all([requestOne, requestTwo, requestThree, requestFour, requestFive])
  //     .then(
  //       axios.spread((...responses) => {
  //         const responseOne = responses[0];
  //         const responseTwo = responses[1];
  //         const responesThree = responses[2];
  //         const requestFour = responses[3];
  //         const requestFive = responses[4];

  //         console.log(
  //           responseOne,
  //           responseTwo,
  //           responesThree,
  //           requestFour,
  //           requestFive
  //         );

  //         // use/access the results
  //       })
  //     )
  //     .catch((errors) => {
  //       console.log(errors);
  //     });
  // };
  // const { authState, authService } = useOktaAuth();
  // const [userInfo, setUserInfo] = useState({});
  //maybe user id and state entered in url as params? then hardcode appliance name in individual state/hook variables
  // useEffect(() => {
  //   const { accessToken } = authState;
  //   if (!authState.isAuthenticated) {
  //     setUserInfo({});
  //   } else {
  //     authService.getUser().then((info) => {
  //       const oktaUserInfo = info;
  //       const SERVER_HOST = 5000;
  //       console.log("info from userinput", info);
  //       axios
  //         .post(`http://localhost:5000/api/users`, oktaUserInfo, {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         })
  //         .then((res) => {
  //           setUserInfo(res.data.data);
  //           window.localStorage.setItem("user_id", res.data.data.id);
  //         })
  //         .catch((err) => err.message);
  //     });
  //   }
  // }, [authState, authService]);

  const onSubmit = () => {
    axios
      .post("https://localhost:3300/api/encon/appliances", dishWasher)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const [dishWasher, setDishWasher] = useState({
    device: "Dishwasher",
    hours: "",
    days: "",
    user_id: 1,
  });
  const [washingMachine, setWashingMachine] = useState({
    device: "Washing Machine",
    hours: "",
    days: "",
    user_id: 1,
  });
  const [dryer, setDryer] = useState({
    device: "Clothes Dryer",
    hours: "",
    days: "",
    user_id: 1,
  });
  const [pc, setPC] = useState({
    device: "Computer Desktop",
    hours: "",
    days: "",
    user_id: 1,
  });
  const [tv, setTv] = useState({
    device: `TV (55" LED)`,
    hours: "",
    days: "",
    user_id: 1,
  });
  console.log(dishWasher);
  // const [date, setDate] = useState("");

  // const todaysDate = (calendarData) => {
  //   setDate(calendarData);
  //intended as a callback function in order to lift state from datepicker and display current date here in userInput
  // };
=======
import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
// import axios from "axios";
import { useForm } from 'react-hook-form';
import '../../styles/mobile/UserInput.scss';
import computerPNG from '../../assets/ElectronicsFolder/005-computer.png';
import dishPNG from '../../assets/ElectronicsFolder/006-dishwasher.png';
import clothesWashPNG from '../../assets/ElectronicsFolder/048-washing machine.png';
import tvPNG from '../../assets/ElectronicsFolder/042-television.png';
import calendarPNG from '../../assets/ElectronicsFolder/calendar.png';
import { DatePicker } from './DatePicker';

export const UserInput = () => {
	const { handleSubmit, register, errors } = useForm();
	//maybe user id and state entered in url as params? then hardcode appliance name in individual state/hook variables

	const [dishWasher, setDishWasher] = useState({
		device: 'Dishwasher',
		hours: '',
		days: '',
	});
	const [washingMachine, setWashingMachine] = useState({
		device: 'Washing Machine',
		hours: '',
		days: '',
	});
	const [dryer, setDryer] = useState({
		device: 'Clothes Dryer',
		hours: '',
		days: '',
	});
	const [pc, setPC] = useState({
		device: 'Computer Desktop',
		hours: '',
		days: '',
	});
	const [tv, setTv] = useState({
		device: `TV (55" LED)`,
		hours: '',
		days: '',
	});
>>>>>>> 782ce23ce381af04952143ae3b394e275680b165

	const handleDishHoursChange = (event) => {
		setDishWasher({ ...dishWasher, hours: event.target.value });
	};
	const handleDishDaysChange = (event) => {
		setDishWasher({ ...dishWasher, days: event.target.value });
	};
	const handleWashingHoursChange = (event) => {
		setWashingMachine({ ...washingMachine, hours: event.target.value });
	};
	const handleWashingDaysChange = (event) => {
		setWashingMachine({ ...washingMachine, days: event.target.value });
	};

	const handleDryerHoursChange = (event) => {
		setDryer({ ...dryer, hours: event.target.value });
	};
	const handleDryerDaysChange = (event) => {
		setDryer({ ...dryer, days: event.target.value });
	};

	const handlePCHoursChange = (event) => {
		setPC({ ...pc, hours: event.target.value });
	};
	const handlePCDaysChange = (event) => {
		setPC({ ...pc, days: event.target.value });
	};

	const handleTVHoursChange = (event) => {
		setTv({ ...tv, hours: event.target.value });
	};
	const handleTVDaysChange = (event) => {
		setTv({ ...tv, days: event.target.value });
	};

<<<<<<< HEAD
  return (
    <div className="user-input">
      <h1>Input Time Used</h1>
      <div className="datepicker-link">
        <Link to="/userInput/DatePicker">
          <img
            className="calPNG"
            src={calendarPNG}
            alt="black line drawing of a calendar"
          />
        </Link>

        <Route path="/userInput/DatePicker">
          <DatePicker />
        </Route>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="device-container">
          <section className="device-section">
            <img src={dishPNG} alt="black line drawing of a dishwasher" />
            <h3 className="dishH3">Dishwasher</h3>
            <div className="device-fields">
              <div className="device-use-duration">
                <input
                  type="number"
                  className="inputHrs"
                  name="dishWasherHours"
                  placeholder="hours"
                  ref={register({ min: 1, max: 24 })}
                  onChange={handleDishHoursChange}
                  value={dishWasher.hours}
                ></input>
                <label htmlFor="dishWasherHours"></label>
                {errors.dishWasherHours && "hours 1-24"}
              </div>
=======
	return (
		<div className='user-input'>
			<h1>Input Time Used</h1>
			<div className='datepicker-link'>
				<Link to='/userInput/DatePicker'>
					<img
						className='calPNG'
						src={calendarPNG}
						alt='black line drawing of a calendar'
					/>
				</Link>
				<Route path='/userInput/DatePicker'>
					<DatePicker />
				</Route>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='device-container'>
					<section className='device-section'>
						<img src={dishPNG} alt='black line drawing of a dishwasher' />
						<h3 className='dishH3'>Dishwasher</h3>
						<div className='device-fields'>
							<div className='device-use-duration'>
								<input
									type='number'
									className='inputHrs'
									name='dishWasherHours'
									placeholder='hours'
									ref={register({ min: 1, max: 24 })}
									onChange={handleDishHoursChange}
									value={dishWasher.hours}
								></input>
								<label htmlFor='dishWasherHours'></label>
								{errors.dishWasherHours && 'hours 1-24'}
							</div>
>>>>>>> 782ce23ce381af04952143ae3b394e275680b165

							<div className='device-use-duration'>
								<input
									type='number'
									className='inputDays'
									ref={register({ min: 1, max: 7 })}
									name='dishWasherDays'
									placeholder='days per week'
									onChange={handleDishDaysChange}
									value={dishWasher.days}
								></input>
								<label htmlFor='dishWasher days'></label>
								{errors.dishWasherDays && <p>enter message</p>}
							</div>
						</div>
					</section>

					<section className='device-section'>
						<img
							src={clothesWashPNG}
							alt='black line drawing of a washer/dryer for clothes'
						/>
						<h3 className='washH3'>Washing Machine</h3>
						<div className='device-fields'>
							<div className='device-use-duration'>
								<input
									type='number'
									className='inputHrs'
									ref={register({ min: 1, max: 24 })}
									name='Washing Machine hours'
									placeholder='hours'
									onChange={handleWashingHoursChange}
									value={washingMachine.hours}
								></input>
								<label htmlFor='Washing Machine hours'></label>
								{errors.entername && <p>enter message</p>}
							</div>

							<div className='device-use-duration'>
								<input
									type='number'
									className='inputDays'
									ref={register({ min: 1, max: 7 })}
									name='Washing Machine days'
									placeholder='days per week'
									onChange={handleWashingDaysChange}
									value={washingMachine.days}
								></input>
								<label htmlFor='Washing Machine days'></label>
								{errors.entername && <p>enter message</p>}
							</div>
						</div>
					</section>

					<section className='device-section'>
						<img
							src={clothesWashPNG}
							alt='black line drawing of a washer/dryer for clothes'
						/>
						<h3 className='clothesH3'>Clothes Dryer</h3>
						<div className='device-fields'>
							<div className='device-use-duration'>
								<input
									type='number'
									className='inputHrs'
									ref={register({ min: 1, max: 24 })}
									name='Dryer hours'
									placeholder='hours'
									onChange={handleDryerHoursChange}
									value={dryer.hours}
								></input>
								<label htmlFor='Dryer hours'></label>
								{errors.entername && <p>enter message</p>}
							</div>

							<div className='device-use-duration'>
								<input
									type='number'
									className='inputDays'
									ref={register({ min: 1, max: 7 })}
									name='Dryer days'
									placeholder='days per week'
									onChange={handleDryerDaysChange}
									value={dryer.days}
								></input>
								<label htmlFor='Dryer days'></label>
								{errors.entername && <p>enter message</p>}
							</div>
						</div>
					</section>

					<section className='device-section'>
						<img
							src={computerPNG}
							alt='black line drawing of a desktop computer'
						/>
						<h3 className='pcH3'>Desktop PC</h3>
						<div className='device-fields'>
							<div className='device-use-duration'>
								<input
									type='number'
									className='inputHrs'
									ref={register({ min: 1, max: 24 })}
									name='pc hours'
									placeholder='hours'
									onChange={handlePCHoursChange}
									value={pc.hours}
								></input>
								<label htmlFor='pc hours'></label>
								{errors.entername && <p>enter message</p>}
							</div>
							<div className='device-use-duration'>
								<input
									type='number'
									className='inputDays'
									ref={register({ min: 1, max: 7 })}
									name='pc days'
									placeholder='days per week'
									onChange={handlePCDaysChange}
									value={pc.days}
								></input>
								<label htmlFor='pc days'></label>
								{errors.entername && <p>enter message</p>}
							</div>
						</div>
					</section>

<<<<<<< HEAD
          <section className="device-section">
            <img src={tvPNG} alt="black line drawing of a television" />
            <h3 className="tvH3">Television</h3>
            <div className="device-fields">
              <div className="device-use-duration">
                <input
                  type="number"
                  className="inputHrs"
                  ref={register({ min: 1, max: 24 })}
                  name="tv hours"
                  placeholder="hours"
                  onChange={handleTVHoursChange}
                  value={tv.hours}
                ></input>
                <label htmlFor="tv hours"></label>
                {errors.entername && <p>enter message</p>}
              </div>
              <div className="device-use-duration">
                <input
                  type="number"
                  className="inputDays"
                  ref={register({ min: 1, max: 7 })}
                  name="tv days"
                  placeholder="days per week"
                  onChange={handleTVDaysChange}
                  value={tv.days}
                ></input>
                <label htmlFor="tv days"></label>
                {errors.entername && <p>enter message</p>}
              </div>
            </div>
          </section>
        </div>
        <button className="app-buttons-input" type="submit">
          {/* this button will submit post request */}
          Confirm
        </button>
      </form>
      <div className=""></div>
      <div className="input-button-container">
        <Link to="/profile/appliances">
          <button className="app-buttons-input-dashlink">
            Go to Dashboard
          </button>
        </Link>
      </div>
      Icons made by{" "}
=======
					<section className='device-section'>
						<img src={tvPNG} alt='black line drawing of a television' />
						<h3 className='tvH3'>Television</h3>
						<div className='device-fields'>
							<div className='device-use-duration'>
								<input
									type='number'
									className='inputHrs'
									ref={register({ min: 1, max: 24 })}
									name='tv hours'
									placeholder='hours'
									onChange={handleTVHoursChange}
									value={tv.hours}
								></input>
								<label htmlFor='tv hours'></label>
								{errors.entername && <p>enter message</p>}
							</div>
							<div className='device-use-duration'>
								<input
									type='number'
									className='inputDays'
									ref={register({ min: 1, max: 7 })}
									name='tv days'
									placeholder='days per week'
									onChange={handleTVDaysChange}
									value={tv.days}
								></input>
								<label htmlFor='tv days'></label>
								{errors.entername && <p>enter message</p>}
							</div>
						</div>
					</section>
				</div>
			</form>
			<div className=''></div>
			<div className='input-button-container'>
				<button className='app-buttons-input' type='submit'>
					{/* this button will submit post request */}
					Confirm
				</button>
				<Link to='/profile/appliances'>
					<button className='app-buttons-input-dashlink'>
						Go to Dashboard
					</button>
				</Link>
			</div>
			{/* Icons made by{" "}
>>>>>>> 782ce23ce381af04952143ae3b394e275680b165
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </a> */}
		</div>
	);
};
