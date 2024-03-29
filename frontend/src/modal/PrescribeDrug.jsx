import React, { useState } from 'react'
import { useUser } from '../context/UserContext';

const PrescribeDrug = ( { onClose } ) => {

  const { drugs} = useUser();
  const [inputSets, setInputSets] = useState([{ id: 1, value: '' }]);
  const [hideButtons, setHideButtons] = useState([false]);

  
  const data = {  
                  "id":1,
                  "comment" :  "1",
                  "diagnosis" : "malaria",
                  'drug_quantity' : "1 1 1",
                  "drugs": [],
                  "drug_name":"pansharp",
                  "id":3,
                  "pivot":{
                            "created_at":null,
                            "drug_id":3,
                            "prescription_id":1,
                            "quantity":0,
                            "updated_at":null
                          },
                  "patient":{
                            "id":1,
                            "matric_no": "ipe/39/7090",
                            "patient_id":1
                            },
                  "user": {
                            "id":1,
                            "name":"Gem",
                            "user_id":1
                          }
}
  const handleInputChange = (id, field, value) => {
    const updatedInputSets = inputSets.map((set) =>
      set.id === id ? { ...set, [field]: value } : set
    );
    setInputSets(updatedInputSets);
  };

  const handleAddInputSet = (id) => {
    setInputSets((prevInputSets) => [
      ...prevInputSets,
      { id: prevInputSets.length + 1, drug: '', quantity: '' },
    ]);
    setHideButtons((prevHideButtons) => [...prevHideButtons, false]);
  };

  const handleHideButtonClick = (index) => {
    setHideButtons((prevHideButtons) =>
      prevHideButtons.map((hide, i) => (i === index ? !hide : hide))
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
        <div className="relative p-8 bg-white w-fit mx-auto my-12 rounded-2xl shadow-lg px-16">
          {/* <button
            className="absolute top-8 right-5 p-2 cursor-pointer text-xs text-red-400"
            onClick={onClose}
          >
            Close
          </button> */}
          <h2 className="text-2xl font-semibold mb-4">Prescribe Drugs</h2>
          <button
          className = "absolute top-8 right-5 p-2 cursor-pointer text-xs text-red-400"
          onClick = { onClose } 
         >
          Close
        </button>
          <div className="flex">
              {/* <p>Are you sure you want to prescribe the following drugs?</p> */}
              <div>
                {inputSets.map((inputSet, index) => (
                  <>
                  <div key={inputSet.id} className="input-group flex gap-6 mb-4">
                    <div className="flex flex-col relative">
                      <label htmlFor="" className='text-xs' > Drug </label>
                      {/* <input list='drugs' name='drugs' id='drugs'
                      className='border p-2 border-primary rounded-md '  /> */}
                        <select id='drugs' className='border px-4 py-[10px] border-primary rounded-md '  >
                          {
                            drugs.map(d => (
                              <>
                                <option value = {d.drug_name}> {d.drug_name} </option>
                              </>
                            ))
                          }
                        </select>
                      
                    </div>
                    <div className="flex flex-col relative">
                      <label htmlFor={`input${inputSet.id}`} className='text-xs' >{`Quantity ${inputSet.id}:`}</label>
                      <input
                        type="text"
                        className='border p-2 border-primary rounded-md '
                        id={`input${inputSet.id}`}
                        name={`input${inputSet.id}`}
                        value={inputSet.value}
                        onChange={e => handleInputChange(inputSet.id, e.target.value)}
                      />
                    </div>
                    {!hideButtons[index] && (
                  <button
                    type="button"
                    onClick={() => {
                      handleAddInputSet(inputSet.id);
                      handleHideButtonClick(index);
                    }}
                    className="bg-primary text-white px-5 py-5 rounded-lg text-lg"
                  >
                    +
                  </button>
                )}
                  </div>
                  </>
                ))}
              </div>
                                      
              </div>
              <div className = "flex w-full items-center justify-center mt-8 gap-6">
                 <button className = ' bg-primary text-white px-12 py-[12px] text-sm  rounded-md'  > Prescribe </button>       
                 <button 
                    className = ' bg-primary text-white px-12 py-[12px] text-sm  rounded-md' 
                    onClick = { onClose }
                >   Cancel 
                </button>                                                    
          </div>
        </div>
      </div>
  )
}

export default PrescribeDrug
