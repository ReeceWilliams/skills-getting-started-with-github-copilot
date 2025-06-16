import React from 'react';
import './ActivityCard.css'; // Assuming you have some CSS file for styling

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      {/* ...existing card content... */}
      <div className="participants-section">
        <h4>Participants</h4>
        {activity.participants && activity.participants.length > 0 ? (
          <ul className="participants-list">
            {activity.participants.map((name, idx) => (
              <li key={idx} className="participant-name">
                {name}
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-participants">No participants yet.</div>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;