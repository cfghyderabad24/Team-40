import React, { useEffect, useState } from 'react';

const Lead = () => {
  const [leadsData, setLeadsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/leads');
        const result = await response.json();
        setLeadsData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h3>Leads</h3>
      <br />
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              {/* <th>ID</th>
              <th>Name</th> */}
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {leadsData.map((lead, index) => (
              <tr key={index}>
                {/* <td>{lead.id}</td>
                <td>{lead.name}</td> */}
                <td>{lead.email}</td>
                <td>{lead.phoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Lead;
