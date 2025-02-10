import React from 'react';
import './training.css';
import trainingImg from './images/training-img.png';

const Trainings = () => {
    const trainingItems = [
        trainingImg,
        trainingImg,
    ];

    // Ensure the array has exactly 6 items
    const displayedItems = [
        ...trainingItems,
        ...Array(3 - trainingItems.length).fill(null),
    ].slice(0, 3);

    console.log('Displayed Items:', displayedItems); // Debugging output

    return (
        <div id="Trainings" className="Trainings">
            <div className="title">Training & Workshops</div>
            <div className="subtitle">Empower Your Skills</div>
            <div className="trainings flex">
                {displayedItems.map((imagePath, index) => (
                    <div key={index} className="training">
                        {imagePath ? (
                            <img src={imagePath} alt={`Training ${index + 1}`} />
                        ) : (
                            <p>...</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trainings;
