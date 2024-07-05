import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const RecentCard = ({ userId }) => {
  const history = useHistory();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [inputValues, setInputValues] = useState({ homeName: "", description: "" });
  const addHomeImage = `${process.env.PUBLIC_URL}/images/list/home1.png`; // Yeni resim yolu

  const openForm = () => {
    setIsFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeForm = () => {
    setIsFormOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputValues.homeName.trim() || !inputValues.description.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch(`https://softwarebackenddeployment2.azurewebsites.net/api/v1/Home/AddHome?name=${inputValues.homeName}&address=${inputValues.description}&ownerId=${userId}`, {
        method: "POST"
      });

      if (response.ok) {
        console.log("Form submitted with values:", inputValues);
        closeForm();
        history.go(0); // Refresh the page by navigating to the same route


      } else {
        alert("Failed to add home. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className='content grid3 mtop'>
        <div className='box shadow'>
          <div className='img'>
            <img src={addHomeImage} alt='Add Room' />
          </div>
          <div className='button-container'>
            <button className='btn2' onClick={openForm}>
              <i className='fas fa-plus'></i>
            </button>
          </div>
        </div>
      </div>

      {isFormOpen && (
        <div className="overlay" onClick={closeForm}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <h2>Add A New Home</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="homeName"
                placeholder="Home Name"
                value={inputValues.homeName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={inputValues.description}
                onChange={handleInputChange}
              />
              <button type="submit">Add A Home</button>
              <button type="button" onClick={closeForm} className="cancel">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentCard;
