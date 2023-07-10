import "./App.css";
import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", streetAddress: "", country:"India", city: "", state: ""
  , postalCode:"", comments:false, candidates:false, offers:false, pushNotifications:"Everything" });

  function changeHandler(event) {
    // taking out all the values by destructuring the event.target
    const {name, value,checked, type} = event.target ;
    setFormData( (prevFormData) =>  ({...prevFormData,
      [name]: type === "checkbox" ? checked :value })
    );
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing all the formData");
    console.log(formData);
  }

  return (
    <div className="flex flex-wrap flex-col  items-center mt-2">
      <form  onSubmit={submitHandler} >
        <div className=" flex flex-col border-2 w-[700px] px-7">
          <label htmlFor="firstName" className=" text-sm text-bold mt-5 font-serif pb-2">First Name</label>
              <input
                type="text"
                placeholder="Akash"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={changeHandler}
                className=" border-2 rounded border-solid border-gray-400"

            />

          <label htmlFor="lastName" className=" text-sm text-bold font-serif pb-2 pt-1">Last Name</label>
            <input
              type="text"
              placeholder="Bhardwaj"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              className=" border-2 rounded border-solid border-gray-400"
          />

          <label htmlFor="email" className=" text-sm text-bold font-serif py-2 pt-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={formData.email}
              onChange={changeHandler}
              className=" border-2 rounded border-solid border-gray-400"
          />

          <label htmlFor="country" className=" text-sm text-bold font-serif py-2 pt-1">Country</label>
          <select className="  border-2 rounded border-solid border-gray-400 "
          name="country"
          value={formData.country}
          onChange={changeHandler}
          id="country"
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Russia">Russia</option>
          </select>

          <label htmlFor="streetAddress" className=" text-sm text-bold font-serif py-2 pt-1">Street Address</label>
          <input
            type="text"
            placeholder="1234 Main St"
            name="streetAddress"
            id="streetAddress"
            value={formData.streetAddress}
            onChange={changeHandler}
            className=" border-2 rounded border-solid border-gray-400"
          />

          <label htmlFor="city" className=" text-sm text-bold font-serif py-2 pt-1">City</label>
          <input
            type="text"
            placeholder="Neelwal"
            name="city"
            value={formData.city}
            onChange={changeHandler}
            className=" border-2 rounded border-solid border-gray-400"
          />

          <label htmlFor="state" className=" text-sm text-bold font-serif py-2 pt-1">State/Province</label>
          <input
            type="text"
            placeholder="Delhi"
            name="state"
            id="state"
            value={formData.state}
            onChange={changeHandler}
            className=" border-2 rounded border-solid border-gray-400"
          />


          <label htmlFor="postalCode" className=" text-sm text-bold font-serif py-2 pt-1">ZIP/Postal Code</label>
          <input className="  border-2 rounded border-solid border-gray-400"
            type="text"
            placeholder="110041"
            name="postalCode"
            value={formData.pinCode}
            onChange={changeHandler}
          />

          <fieldset>
            <legend className=" font-serif text-sm pb-3 pt-1 ">By Email</legend>
            
            <div className=" flex items-baseline">
              <input
                type="checkbox"
                name="comments"
                id="comments"
                checked={formData.comments}
                onChange={changeHandler}
              ></input>
              <div className="flex flex-col">
                <label htmlFor="comments" className=" font-serif text-sm px-2 py-1 ">Comments</label>
                <p className=" text-sm font-serif font-extralight -m-0.5 px-2  text-gray-500">Get notified when someone posted a posting</p>
              </div>
            </div>

            <div className=" flex items-baseline">
              <input
                type="checkbox"
                name="candidates"
                id="candidates"
                checked={formData.candidates}
                onChange={changeHandler}
              ></input>
              <div>
                <label htmlFor="candidates" className=" font-serif text-sm px-2 py-1 ">Candidates</label>
                <p className=" text-sm font-serif font-extralight -m-0.5 px-2 text-gray-500 " >Get notified when a candidate applies a job</p>
              </div>
            </div>

            <div className="flex items-baseline">
              <input
                type="checkbox"
                name="offers"
                id="offers"
                checked={formData.offers}
                onChange={changeHandler}
              ></input>
              <div>
                <label htmlFor="offers" className=" font-serif text-sm px-2 py-1 ">Offers </label>
                <p className=" text-sm font-serif font-extralight -m-0.5 px-2  text-gray-500" >Get notified when a candidate rejects or accepts the offer</p>
              </div>
            </div>

          </fieldset>
          

          <fieldset>
            <legend className=" font-serif text-sm  pt-2 ">Push Notifications</legend>
            <p className=" text-sm font-serif font-extralight pb-2 text-gray-500"  >These are delivered via sms to your mobile</p>

            <input 
              type="radio"
              onChange={changeHandler}
              name="pushNotifications"
              value="Everything"
              id="pushEverything"
            />
            <label className="text-sm font-serif p-2" htmlFor="pushEverything">Everything</label>

            <br/>
            <input 
              type="radio"
              onChange={changeHandler}
              name="pushNotifications"
              value="Same as Email"
              id="pushEmail"
            />
            <label className="text-sm font-serif p-2" htmlFor="pushEmail">Same as Email</label>

            <br/>
            <input 
              type="radio"
              onChange={changeHandler}
              name="pushNotifications"
              value="No Push Notifications"
              id="pushNothing"
            />
            <label className="text-sm font-serif p-2" htmlFor="pushNothing">No Push Notifications</label>
          </fieldset>
          
          <div className="flex flex-start my-3 ">
            <button
             className=" bg-blue-500 text-white font-bold rounded mt-2 py-1 px-2">Save</button>
          </div>

        </div>
      </form>
      
    </div>
  );
}

export default App;
