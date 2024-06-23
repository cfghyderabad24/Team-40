import React, { useEffect, useState } from 'react';

const Track = () => {
  const [tracksData, setTracksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/track');
        const result = await response.json();
        setTracksData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
              <th>Transit ID</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tracksData.map((track, index) => (
              <tr key={index}>
                <td>{track.trackId}</td>
                <td>{track.location[0]}</td>
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
