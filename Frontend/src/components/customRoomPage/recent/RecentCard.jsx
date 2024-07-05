import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const RecentCard = ({ homeId }) => {
    const history = useHistory();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [inputValues, setInputValues] = useState({ roomName: "" });
    const addRoomImage = `${process.env.PUBLIC_URL}/images/list/room.png`; // Yeni resim yolu

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputValues.roomName.trim()) {
            alert("Please fill out all fields.");
            return;
        }

        try {
            const response = await fetch(`https://softwarebackenddeployment2.azurewebsites.net/api/v1/Room/AddRoom?name=${inputValues.roomName}&HomeId=${homeId}
      `, {
                method: "POST"
            });

            if (response.ok) {
                console.log("Form submitted with values:", inputValues);
                closeForm();
                history.go(0); // Refresh the page by navigating to the same route


            } else {
                alert("Failed to add room. Please try again. Home ID --> ", homeId);
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
                        <img src={addRoomImage} alt='Add Room' />
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
                        <h2>Add A New Room</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="roomName"
                                placeholder="Room Name"
                                value={inputValues.roomName}
                                onChange={handleInputChange}
                            />
                            <button type="submit">Add A Room</button>
                            <button type="button" onClick={closeForm} className="cancel">Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default RecentCard;