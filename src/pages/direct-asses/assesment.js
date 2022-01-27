import Widget from '../../components/widget'
import SectionTitle from '../../components/section-title';
import { FiArrowUp, FiTriangle } from 'react-icons/fi';

import { useState } from 'react'

const Index = () => {
  const [toggleel, setToggle] = useState('hidden')
  const [togglee2, setToggle2] = useState('hidden')
  const [togglee3, setToggle3] = useState('hidden')
  const [togglee4, setToggle4] = useState('hidden')
  const [togglee5, setToggle5] = useState('hidden')
  const [togglee6, setToggle6] = useState('hidden')
  const [togglee7, setToggle7] = useState('hidden')
  const [togglee8, setToggle8] = useState('hidden')
  const [togglee9, setToggle9] = useState('hidden')
  const [togglee10, setToggle10] = useState('hidden')
  const [togglee11, setToggle11] = useState('hidden')
  const [togglee12, setToggle12] = useState('hidden')
  const [resiToggle, setresToggle] = useState('hidden')
  const [form2toggle, setform2toggle] = useState('')
  const [formValues, setFormValues] = useState([{
    employername: "", employeraddress: "", tax:
      "", startdate: "", grosspay: "", upload: ""
  }])

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }

  const addFormFields = (event) => {
    event.preventDefault()
    setFormValues([...formValues, {
      employername: "", employeraddress: "", tax:
        "", startdate: "", grosspay: "", upload: ""
    }])
  }

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }
  const onChange = e => {
    let toggleval = ' '
    setToggle(toggleval)
  };

  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   console.log('You clicked submit.');
  // }

  const onChange2 = e => {
    // e.preventDefault()
    let toggleval = 'hidden'
    setToggle(toggleval)
  };

  const onChange3 = e => {
    let toggleval = ' '
    setToggle2(toggleval)

  };
  const onChange4 = e => {
    // e.preventDefault()
    let toggleval = 'hidden'
    setToggle2(toggleval)

  };
  const onChange5 = e => {
    let toggleval = ' '
    setToggle3(toggleval)
  };

  const onChange6 = e => {
    let toggleval = 'hidden'
    setToggle3(toggleval)
  };
  const onChange7 = e => {
    let toggleval = ' '
    setToggle4(toggleval)

  };
  const onChange8 = e => {
    let toggleval = 'hidden'
    setToggle4(toggleval)

  };
  const onChange9 = e => {
    let toggleval = ' '
    setToggle5(toggleval)
  };

  const onChange10 = e => {
    let toggleval = 'hidden'
    setToggle5(toggleval)
  };
  const onChange11 = e => {
    let toggleval = ' '
    setToggle6(toggleval)

  };
  const onChange12 = e => {
    let toggleval = 'hidden'
    setToggle6(toggleval)

  };
  const onChange13 = e => {
    let toggleval = ' '
    setToggle7(toggleval)
  };

  const onChange14 = e => {
    let toggleval = 'hidden'
    setToggle7(toggleval)
  };
  const onChange15 = e => {
    let toggleval = ' '
    setToggle8(toggleval)

  };
  const onChange16 = e => {
    let toggleval = 'hidden'
    setToggle8(toggleval)

  };
  const onChange17 = e => {
    let toggleval = ' '
    setToggle9(toggleval)
  };

  const onChange18 = e => {
    let toggleval = 'hidden'
    setToggle9(toggleval)
  };
  const onChange19 = e => {
    let toggleval = ' '
    setToggle10(toggleval)

  };
  const onChange20 = e => {
    let toggleval = 'hidden'
    setToggle10(toggleval)

  };
  const onChange21 = e => {
    let toggleval = ' '
    setToggle11(toggleval)
  };

  const onChange22 = e => {
    let toggleval = 'hidden'
    setToggle11(toggleval)
  };
  const onChange23 = e => {
    let toggleval = ' '
    setToggle12(toggleval)

  };
  const onChange24 = e => {
    let toggleval = 'hidden'
    setToggle12(toggleval)

  };

  const onresidenceToggleYes = e => {
    let toggleval = 'hidden'
    setresToggle(toggleval)

  };

  const onresidenceToggleNo = e => {
    let toggleval = ''
    setresToggle(toggleval)

  };

  const formTog2 = e => {
    e.preventDefault()
    let toggleval = 'hidden'
    setToggle2(toggleval)

  };





  return (
    <>
      <SectionTitle title="Applicable during the year ended 31st December 2021" />
      <div className="block p-6 rounded-lg bg-white w-full">
        <p className="mb-3 font-bold">Taxpayer Information</p>
        <form>
          <div className="grid grid-cols-3 gap-4">
            <div className="mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Surname" />
            </div>

            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="First Name" />
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Middlename" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Tittle" />
            </div>

            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Date of birth" />
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Phone number" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="form-group mb-6">
              <p>Married ?</p>
            </div>

            <div className="form-check form-check-inline">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
            </div>

            <div className="form-check form-check-inline ml-5">
              <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
            </div>
          </div>
        </form>
      </div>

      <div className="block p-6 rounded-lg bg-white w-full">
        <div className="flex">
          <p className="mb-3 font-bold pr-3">Current Residential address</p>
          <a href="" className="text-blue-600">Edit</a>
        </div>

        <form>
          <div className="grid grid-cols-3 gap-4">
            <div className="mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="House/Plot No" />
            </div>

            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Street" />
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Town/Area" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="LGA" />
            </div>

            <div className="form-check form-check-inline">
              {/* <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
              <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Rented</label> */}

              <select className="form-select w-full" name="" id="typeofbusiness">
                <option selected>Type of Residence</option>
                <option value="1">Apartment</option>
                <option value="2">Town house</option>
                <option value="3">Standalone house</option>
              </select>
            </div>

            <div className="form-check form-check-inline ml-5">
              <p>Do you own your place of residence?</p>
              <div className="flex">
                <div className="form-check form-check-inline">
                  <input onChange={onresidenceToggleYes} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Owner</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onChange={onresidenceToggleNo} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Rented</label>
                </div>
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-3 gap-4 ${resiToggle}`}>
            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Annual rent" />
            </div>

            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Name of owner" />
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control w-full rounded"
                placeholder="Phone number" />
            </div>
          </div>

        </form>
      </div>

      <h6 className="p-2">Income details</h6>

      <Widget>
        <div className="p-10" >
          <div >
            <div className="flex justify-between mb-5 ">
              <p>Were you employed ? </p>
              <div className="flex">
                <div className="form-check form-check-inline">
                  <input onClick={onChange} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onClick={onChange2} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>
              </div>
            </div>

            <div className={`flex justify-center border mb-3 p-6 rounded-lg bg-white w-full ${toggleel}`}>
              <form>
                {formValues.map((element, index) => (
                  <div key={index}>
                    <div className="mb-6 grid grid-cols-3 gap-4">
                      <label>Employer Name:</label>
                      <input type="text" name="employername" className="form-control w-full rounded" />
                    </div>
                    <div className="mb-6 grid grid-cols-3 gap-4">
                      <label>Employer Address:</label>
                      <input type="text" name="employeraddress" className="form-control w-full rounded" />
                    </div>
                    <div className="mb-6 grid grid-cols-3 gap-4">
                      <label>Your start date:</label>
                      <input type="text" name="startdate" className="form-control w-full rounded"
                      />
                    </div>
                    <div className="mb-6 grid grid-cols-3 gap-4">
                      <label>Gross pay:</label>
                      <input type="text" name="grosspay" className="form-control w-full rounded"
                      />
                    </div>
                    <div className="mb-6 grid grid-cols-3 gap-4">
                      <label>Tax deducted:</label>
                      <input type="text" name="tax" className="form-control w-full rounded"
                      />
                    </div>
                    <div className="mb-6 grid grid-cols-3 gap-4">
                      <label>Upload Pay slip or schedule:</label>
                      <input type="file" name="upload" className="w-full"
                      />
                    </div>
                    <div className='pb-3'>

                      <hr />
                    </div>
                  </div>
                ))}
                <div className="mb-6 grid grid-cols-3 gap-4">
                  <button
                    style={{ backgroundColor: "#84abeb" }}
                    className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                    onClick={addFormFields}
                  >
                    Add another employment
                  </button>
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="comments">Optional Comments:</label>
                  <textarea name="" id="comments" cols="40" rows="3" className='rounded'></textarea>
                </div>

                <div className="mb-6 flex justify-between">
                  <button
                    style={{ backgroundColor: "#84abeb" }}
                    className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                    onClick={(e) => e.preventDefault()}
                  >
                    Save
                  </button>
                  {/* <span onClick={onChange2} className="h-10 w-10 bg-green-100 text-white flex items-center justify-center rounded-full text-lg font-display font-bold">
                    <a href="">
                      <FiTriangle
                        size={15}
                        className="stroke-current text-green-500"
                      />
                    </a>
                  </span> */}
                </div>
              </form>


            </div>

            <div>

              <div className="flex justify-between mb-5">
                <p>Were you self employed ? </p>

                <div className="flex">

                  <div className="form-check form-check-inline">
                    <input onClick={onChange3} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions2" id="inlineRadio1" value="option1" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                  </div>

                  <div className="form-check form-check-inline ml-5">
                    <input onClick={onChange4} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option2" />
                    <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                  </div>
                </div>
              </div>

            </div>



            <div className={`flex justify-center border mb-3 p-6 rounded-lg bg-white w-fulll ${togglee2}`}>
              <form>
                <div>
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="typeofbusiness">Type of business:</label>
                    <select className="form-select" name="" id="typeofbusiness">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="businessname">Business Name:</label>
                    <input type="text" id="businessname" className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="businessaddress">Business Address:</label>
                    <input type="text" id="businessaddress" className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Business Start date:</label>
                    <input type="date"
                      className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="turnover">Turnover-takings, fees, sales or money earned by your business:</label>
                    <input type="text" id="turnover" className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="turnover">Any other business income not included above:</label>
                    <input type="text" id="turnover" className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="cashbases">Did you use cash basis, money actually received and paid out, to calculate your income expense ?</label>
                    <div className="flex">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                        <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                      </div>

                      <div className="form-check form-check-inline ml-5">
                        <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label className="font-bold" htmlFor="businessincome">Total Business Income:</label>
                    <p className="font-bold" id="businessincome">NGN 0.00</p>
                  </div>

                  <div>
                    <p className="font-bold">Expenses</p>
                    <div className="mb-6 grid grid-cols-3 gap-4">
                      <label htmlFor="expenses">How would you like to record your expenses?</label>
                      <div className="flex">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                          <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Total value</label>
                        </div>

                        <div className="form-check form-check-inline ml-5">
                          <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                          <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">Break down</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="item">Item</label>
                    <input type="text" id="item" className="form-control w-full rounded"
                      placeholder="Amount"
                    />
                  </div>


                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <button
                      style={{ backgroundColor: "#84abeb" }}
                      className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                      type="submit"
                    >
                      Add Line
                    </button>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label className="font-bold" htmlFor="businessincome">Net Profit:</label>
                    <p className="font-bold" id="businessincome">NGN 0.00</p>
                  </div>
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label className="font-bold" htmlFor="businessincome">Net Loss:</label>
                    <p className="font-bold" id="businessincome">NGN 0.00</p>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="expenses">Are figures provided provisional or estimated?</label>
                    <div className="flex">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" />
                        <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                      </div>

                      <div className="form-check form-check-inline ml-5">
                        <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                        <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                      </div>
                    </div>
                  </div>
                  <button
                    style={{ backgroundColor: "#84abeb" }}
                    className="btn w-64 mb-4 btn-default text-white btn-outlined bg-transparent rounded-md"
                    type="submit"
                  >
                    Add another business
                  </button>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="comments">Optional Comments:</label>
                    <textarea name="" id="comments" cols="40" rows="3" className="rounded"></textarea>
                  </div>
                  <div className="mb-6 flex justify-between">
                    <button
                      style={{ backgroundColor: "#84abeb" }}
                      className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                      type="submit"
                    >
                      Save
                    </button>
                    <button onClick={formTog2} className="h-10 w-10 bg-green-100 text-white flex items-center justify-center rounded-full text-lg font-display font-bold">
                      <a href="">
                        <FiTriangle
                          size={15}
                          className="stroke-current text-green-500"
                        />
                      </a>
                    </button>
                  </div>
                </div>
              </form>
            </div>


            <div className="flex justify-between mb-5">

              <p>Were you in a patnership ? </p>


              <div className="flex">

                <div className="form-check form-check-inline">
                  <input onChange={onChange5} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions3" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onChange={onChange6} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions3" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>

              </div>
            </div>

            <div className={`flex justify-center border mb-3 block p-6 rounded-lg bg-white w-full ${togglee3}`}>
              <form>
                <div className="">
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Partner Name:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Partner Address:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Partner Phone:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Partner Percentage:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>


                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <button
                      style={{ backgroundColor: "#84abeb" }}
                      className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                      type="submit"
                    >
                      Add another Partner
                    </button>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="comments">Optional Comments:</label>
                    <textarea name="" id="comments" cols="40" rows="2" className="rounded"></textarea>
                  </div>
                  <div className="mb-6 flex justify-center">
                    <button
                      style={{ backgroundColor: "#84abeb" }}
                      className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex justify-between mb-5">

              <p>Did you receive income on rent ? </p>

              <div className="flex">

                <div className="form-check form-check-inline">
                  <input onChange={onChange7} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions4" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onChange={onChange8} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions4" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>

              </div>

            </div>


            <div className={`flex justify-center border mb-3 block p-6 rounded-lg bg-white w-full ${togglee4}`}>
              <form>
                <div className="">
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Property Type:</label>
                    <select className="form-select" name="" id="typeofbusiness">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Property Address:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Rental Type:</label>


                    <select className="form-select" name="" id="typeofbusiness">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Rental Amount(Annual):</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Renter Name:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Renter Phone number:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>


                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <button
                      style={{ backgroundColor: "#84abeb" }}
                      className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                      type="submit"
                    >
                      Add another property
                    </button>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="comments">Optional Comments:</label>
                    <textarea name="" id="comments" cols="40" rows="2" className="rounded"></textarea>
                  </div>
                  <div className="mb-6 flex justify-center">
                    <button
                      style={{ backgroundColor: "#84abeb" }}
                      className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex justify-between mb-5">

              <p>Did you receive any bank interest ? </p>


              <div className="flex">

                <div className="form-check form-check-inline">
                  <input onChange={onChange9} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions5" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onChange={onChange10} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions5" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>

              </div>

            </div>


            <div className={`flex justify-center border mb-3 block p-6 rounded-lg bg-white w-full ${togglee5}`}>
              <form>
                <div className="">


                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Bank Name:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Bank Account:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Bank Verification Number (BVN):</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Gross Amount:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>


                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <button
                      style={{ backgroundColor: "#84abeb" }}
                      className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                      type="submit"
                    >
                      Add another Bank
                    </button>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="comments">Optional Comments:</label>
                    <textarea name="" id="comments" cols="40" rows="2" className="rounded"></textarea>
                  </div>
                  <div className="mb-6 flex justify-center">
                    <button
                      style={{ backgroundColor: "#84abeb" }}
                      className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex justify-between mb-5">

              <p>Did you receive any bank dividends from a Nigerian Company ? </p>

              <div className="flex">

                <div className="form-check form-check-inline">
                  <input onChange={onChange11} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions6" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onChange={onChange12} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions6" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>

              </div>
            </div>

            <div className={`flex justify-center border mb-3 block p-6 rounded-lg bg-white w-full ${togglee6}`}>
              <form>
                <div className="">
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Company Name:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Company address:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Gross Amount:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <button
                      style={{ backgroundColor: "#84abeb" }}
                      className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                      type="submit"
                    >
                      Add another Company
                    </button>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="comments">Optional Comments:</label>
                    <textarea name="" id="comments" cols="40" rows="2" className="rounded"></textarea>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex justify-between mb-5">

              <p>Did you receive Pension ? </p>

              <div className="flex">
                <div className="form-check form-check-inline">
                  <input onChange={onChange13} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions7" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onChange={onChange14} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions7" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>
              </div>
            </div>
            <div className={`flex justify-center border mb-3 block p-6 rounded-lg bg-white w-full ${togglee7}`}>
              <form>
                <div className="">
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">PFA:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">PFA address:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Gross Amount:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="comments">Optional Comments:</label>
                    <textarea name="" id="comments" cols="40" rows="2" className="rounded"></textarea>
                  </div>
                  <div className="mb-6 flex justify-center">
                    <button
                      style={{ backgroundColor: "#84abeb" }}
                      className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex justify-between mb-5">

              <p>Did you make profit on sale of asset ? </p>

              <div className="flex">

                <div className="form-check form-check-inline">
                  <input onChange={onChange15} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions8" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div onChange={onChange16} className="form-check form-check-inline ml-5">
                  <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions8" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>

              </div>
            </div>

            <div className={`flex justify-center border mb-3 block p-6 rounded-lg bg-white w-full ${togglee8}`}>

              <form>
                <div className="">
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Asset Type:</label>
                    <select className="form-select" name="" id="typeofbusiness">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Asset Address:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Buyer:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Buyer address:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Buyer Phone number:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Sale amount:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <button
                      style={{ backgroundColor: "#84abeb" }}
                      className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                      type="submit"
                    >
                      Add another Asset
                    </button>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="comments">Optional Comments:</label>
                    <textarea name="" id="comments" cols="40" rows="2" className="rounded"></textarea>
                  </div>
                  <div className="mb-6 flex justify-center">
                    <button
                      style={{ backgroundColor: "#84abeb" }}
                      className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex justify-between mb-5">

              <p>Did you receive any income from sources outside Nigeria ? </p>

              <div className="flex">

                <div className="form-check form-check-inline flex ustify-evenly">
                  <input onChange={onChange17} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions9" id="inlineRadio1" value="option1" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
                </div>

                <div className="form-check form-check-inline ml-5">
                  <input onChange={onChange18} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions9" id="inlineRadio2" value="option2" />
                  <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
                </div>

              </div>
            </div>

            <div className={`flex justify-center border mb-3 block p-6 rounded-lg bg-white w-full ${togglee9}`}>
              <form>
                <div className="">
                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Source:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="employername">Gross Amount:</label>
                    <input type="text" id="employername" className="form-control w-full rounded"
                    />
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <button
                      style={{ backgroundColor: "#84abeb" }}
                      className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                      type="submit"
                    >
                      Add another source
                    </button>
                  </div>

                  <div className="mb-6 grid grid-cols-3 gap-4">
                    <label htmlFor="comments">Optional Comments:</label>
                    <textarea name="" id="comments" cols="40" rows="2" className="rounded"></textarea>
                  </div>
                  <div className="mb-6 flex justify-center">
                    <button
                      style={{ backgroundColor: "#84abeb" }}
                      className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>

        </div>
      </Widget>

      <h6 className="p-2">Deductions</h6>

      <Widget>
        <div className="p-10">

          <div className="flex justify-between mb-5">

            <p>Did you contribute towards pension ? </p>


            <div className="flex">

              <div className="form-check form-check-inline flex ustify-evenly">
                <input onChange={onChange19} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions10" id="inlineRadio1" value="option1" />
                <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
              </div>

              <div className="form-check form-check-inline ml-5">
                <input onChange={onChange20} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions10" id="inlineRadio2" value="option2" />
                <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
              </div>
            </div>
          </div>

          <div className={`flex justify-center border mb-3 block p-6 rounded-lg bg-white w-full ${togglee10}`}>

            <form>
              <div className="">
                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="employername">PFA:</label>
                  <input type="text" id="employername" className="form-control w-full rounded"
                  />
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="employername">PFA Address:</label>
                  <input type="text" id="employername" className="form-control w-full rounded"
                  />
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="employername">No:</label>
                  <input type="text" id="employername" className="form-control w-full rounded"
                  />
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="employername">Amount:</label>
                  <input type="text" id="employername" className="form-control w-full rounded"
                  />
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="comments">Optional Comments:</label>
                  <textarea name="" id="comments" cols="40" rows="2" className="rounded"></textarea>
                </div>
                <div className="mb-6 flex justify-center">
                  <button
                    style={{ backgroundColor: "#84abeb" }}
                    className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="flex justify-between mb-5">
            <p>Did you contribute towards Life Asurrance ? </p>
            <div className="flex">

              <div className="form-check form-check-inline flex ustify-evenly">
                <input onChange={onChange21} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions11" id="inlineRadio1" value="option1" />
                <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
              </div>

              <div className="form-check form-check-inline ml-5">
                <input onChange={onChange22} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions11" id="inlineRadio2" value="option2" />
                <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
              </div>

            </div>
          </div>

          <div className={`flex justify-center border mb-3 block p-6 rounded-lg bg-white w-full ${togglee11}`}>
            <form>
              <div className="">
                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="employername">Insurance Company:</label>
                  <input type="text" id="employername" className="form-control w-full rounded"
                  />
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="employername">Address:</label>
                  <input type="text" id="employername" className="form-control w-full rounded"
                  />
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="employername">No:</label>
                  <input type="text" id="employername" className="form-control w-full rounded"
                  />
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="employername">Amount:</label>
                  <input type="text" id="employername" className="form-control w-full rounded"
                  />
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="comments">Optional Comments:</label>
                  <textarea name="" id="comments" cols="40" rows="2" className="rounded"></textarea>
                </div>
                <div className="mb-6 flex justify-center">
                  <button
                    style={{ backgroundColor: "#84abeb" }}
                    className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="flex justify-between mb-5">
            <p>Did you contribute towards NHIS ? </p>
            <div className="flex">

              <div className="form-check form-check-inline flex ustify-evenly">
                <input onChange={onChange23} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions12" id="inlineRadio1" value="option1" />
                <label className="form-check-label inline-block text-gray-800" for="inlineRadio10">Yes</label>
              </div>

              <div className="form-check form-check-inline ml-5">
                <input onChange={onChange24} className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions12" id="inlineRadio2" value="option2" />
                <label className="form-check-label inline-block text-gray-800" for="inlineRadio20">No</label>
              </div>
            </div>
          </div>

          <div className={`flex justify-center border mb-3 block p-6 rounded-lg bg-white w-full ${togglee12}`}>

            <form>
              <div className="">
                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="employername">Company:</label>
                  <input type="text" id="employername" className="form-control w-full rounded"
                  />
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="employername">Address:</label>
                  <input type="text" id="employername" className="form-control w-full rounded"
                  />
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="employername">Insurance No:</label>
                  <input type="text" id="employername" className="form-control w-full rounded"
                  />
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="employername">Amount:</label>
                  <input type="text" id="employername" className="form-control w-full rounded"
                  />
                </div>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <label htmlFor="comments">Optional Comments:</label>
                  <textarea name="" id="comments" cols="40" rows="2" className="rounded"></textarea>
                </div>
                <div className="mb-6 flex justify-center">
                  <button
                    style={{ backgroundColor: "#84abeb" }}
                    className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="mb-6 flex justify-center">
            <button
              style={{ backgroundColor: "#84abeb" }}
              className="btn w-64 btn-default text-white btn-outlined bg-transparent rounded-md"
              type="submit"
            >
              Submit form
            </button>
          </div>
        </div>
      </Widget>
    </>
  )
}
export default Index
