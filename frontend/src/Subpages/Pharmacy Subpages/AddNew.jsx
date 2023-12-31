import React, { useState } from 'react'
import { Form, NavLink, useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext';
import { addDrugs } from '../../helpers/helpers';

const AddNew = () => {
  const { setDrugs, token } = useUser();

  const [ name, setName ] = useState();
  const [ quantity, setQuantity ] = useState();
  const [ brand, setBrand ] = useState();
  const [ size, setSize ] = useState();
  const [ supplier, setSupplier ] = useState();
  const [ batch, setBatch ] = useState();
  const [ manufacture, setManufacture ] = useState();
  const [ expiration, setExpiration ] = useState();
  const [ nafdac, setNafdac ] = useState();
  const [ dosage, setDosage ] = useState();
  const [ concentration, setConcentration ] = useState();
  const [ description, setDescription ] = useState();

  const navigate = useNavigate();

  const rawData = {
    "drug_name" : name,
    "drug_quantity" : quantity,
    "brand_name" : brand ,
    "package_size" : size ,
    "manufacturer" : supplier ,
    "batch_no" : batch ,
    "manufacturing_date" : manufacture,
    "expiring_date" : expiration ,
    "nafdac_number" : nafdac ,
    "dosage_form" : dosage ,
    "concentration" : concentration ,
    "drug_description" : description
  }

  // const newData = {
  //   "drug_name" : name,
  //   "drug_quantity" : quantity,
  //   "manufacturing_date" : manufacture,
  //   "expiration_date" : expiration 
  //  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem('new-drugs', newData);
    addDrugs( setDrugs, rawData, token );
    navigate('/user/pharmacy/drugs');
  }


  return (
    <React.Fragment>
      <Form  className = 'new-drugs' >
        <header>
          <h3> Add New Drugs </h3>
        </header>

        <div className = "grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-3">
          
          <div className = "flex flex-col">
            <label 
              htmlFor = "" 
              className = 'w-10'
            >
              Drug Name
            </label>
            <input 
              type = "text" 
              placeholder = 'Acetaminophen and Codeine' 
              value = { name } 
              onChange = { ( e ) => setName( e.target.value ) }
            />
          </div>

          <div className = "flex flex-col">
            <label 
              htmlFor = "" 
              className = 'w-10'
            >
              Drug Quantity
            </label>
            <input 
              type = "number" 
              placeholder = '1' 
              value = { quantity } 
              onChange = { (e) => setQuantity( e.target.value ) }
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-24 text-center'
            >
              Brand Name(optional)
            </label>
            <input 
              type = "text" 
              placeholder = '(Tylenol with Codeine)'
              value = { brand }
              onChange = { (e) => setBrand( e.target.value ) } 
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-10 text-center'
            >
              Package Size
            </label>
            <input 
              type = "text" 
              placeholder = '30 tablets per bottle ' 
              value = { size }
              onChange = { (e) => setSize( e.target.value ) }
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-16 text-center'
            >
              Manufacturer/Supplier
            </label>
            <input 
              type = "text" 
              placeholder = '' 
              value = { supplier }
              onChange = { (e) => setSupplier( e.target.value ) }
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-16 text-center'
            >
              Bactch/Lot Number
            </label>
            <input 
              type = "date" 
              placeholder = '___ /__ /_____' 
              value = { batch }
              onChange = { (e) => setBatch( e.target.value ) }
            />
          </div>
          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-16 text-center'
            >
              Manufacturing Date
            </label>
            <input 
              type = "date" 
              placeholder = '___ /__ /_____' 
              value = { manufacture }
              onChange = { (e) => setManufacture( e.target.value ) }
            />
          </div>
          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-16 text-center'
            >
              Expiration Date
            </label>
            <input 
              type = "date" 
              placeholder = '___ /__ /_____' 
              value = { expiration }
              onChange = { (e) => setExpiration( e.target.value ) }
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-16 text-center'
            >
              NAFDAC Number
            </label>
            <input 
              type = "text" 
              placeholder = '' 
              value = { nafdac }
              onChange = { (e) => setNafdac( e.target.value ) }
            />
          </div>

          <div className="flex gap-4 ">
            <div className="grid">
              <div className = "grid">
                <label 
                  htmlFor = "" 
                  className = 'w-20 text-center'
                >
                  Concentration
                </label>
                <input 
                  className='w-182'
                  type = "text" 
                  placeholder = '500 mg, 5mg/ml, etc.' 
                  value = { concentration }
                  onChange = { (e) => setConcentration( e.target.value ) }
                />
              </div>

              <div className = "grid mb-8">
                <label 
                  htmlFor = "" 
                  className = 'w-20 text-center'
                >
                  Drug Description
                </label>
                <textarea 
                  className='w-182'
                  name = "" 
                  id = "" 
                  cols = "30" 
                  rows = "10" 
                  placeholder = 'Enter text here' 
                  value = { description }
                  onChange = { (e) => setDescription( e.target.value ) }
                  >  
                </textarea>
              </div>
            </div>
              <div className='flex flex-col gap-4 '>
                <label className=''>
                  Dosage Form
                </label>
                <div className = ' grid grid-cols-2 grid-rows-2 gap-x-8 '>
                  <h6 className = ' flex gap-1 ' >
                    <input type="radio" name="dosage" id="" onFocus = { (e) => setDosage( "Tablet" ) } /> Tablet
                  </h6>
                  <h6 className = ' flex gap-1 ' >
                    <input type="radio" name="dosage" id="" onFocus = { (e) => setDosage( "Capsules" ) } /> Capsules
                  </h6>
                  <h6 className = ' flex gap-1 ' >
                    <input type="radio" name="dosage" id="" onFocus = { (e) => setDosage( "Syrup" ) } /> Syrup
                  </h6>
                  <h6 className = ' flex gap-1 ' >
                    <input type="radio" name="dosage" id="" onFocus = { (e) => setDosage( "Injection" ) } /> Injection
                  </h6>
                </div>
              </div>

            </div>
          </div>





        <div className = "flex mx-auto gap-12 items-center justify-center ">
              <button 
                type = 'submit' 
                className = 'bg-primary text-white py-3 px-20 rounded-md'
                onClick = { handleSubmit }
              >
                  Save
              </button>

              {/* <NavLink 
                type = 'submit' 
                className = 'bg-white text-primary border-2 border-primary py-3 px-20 rounded-md'
                to = '/user/patients'
              >
                Previous
              </NavLink> */}
        </div>
        
      </Form>
    </React.Fragment>
  )
}

export default AddNew
