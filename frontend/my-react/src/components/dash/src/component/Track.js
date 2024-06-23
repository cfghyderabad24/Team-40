// Tracks.js
import React, { useState } from 'react';

const Track = () => {
  // Sample data for tracks
  const [tracksData, setTracksData] = useState([
    { orderId: 101, transitId: 'TRN123', status: 'In Transit' },
    { orderId: 102, transitId: 'TRN456', status: 'Delivered' },
    { orderId: 103, transitId: 'TRN789', status: 'Delayed' }
  ]);

  // Function to handle status change
  const handleStatusChange = (index, event) => {
    const updatedTracks = [...tracksData];
    updatedTracks[index].status = event.target.value;
    setTracksData(updatedTracks);
  };

 
  return (
    <div className="container mt-4">
      <h3>Tracks</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Transit ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tracksData.map((track, index) => (
              <tr key={index}>
                <td>{track.orderId}</td>
                <td>{track.transitId}</td>
                <td>
                  <select
                    className="form-control"
                    value={track.status}
                    onChange={(event) => handleStatusChange(index, event)}
                  >
                    <option value="In Transit">In Transit</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Delayed">Delayed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Track;
