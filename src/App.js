import React from 'react';
import './App.css';

const List = () => {
  // Sample employee data
  const data = [
    {
      "Name": "PRAFULLA KUMAR",
      "Mobile_Number": "7991110206",
      "Email_ID": "prafullakumar@gmail.com",
      "Department": "Iron Making Mechanical Maintainance",
      "Blood_Group": "AB+"
    },
    {
      "Name": "RAJEEV KUMAR",
      "Mobile_Number": "9991122468",
      "Email_ID": "sushilkumar@gmail.com",
      "Department": "H Blast Furnance",
      "Blood_Group": "O+"
    },
    {
      "Name": "MANOJ SINGH",
      "Mobile_Number": "9431103068",
      "Email_ID": "manojsingh@gmail.com",
      "Department": "Office of VP Safety",
      "Blood_Group": "B+"
    },
    {
      "Name": "AKHIL RAI",
      "Mobile_Number": "6911043068",
      "Email_ID": "akhileshyadav@gmail.com",
      "Department": "Health and Sustainability",
      "Blood_Group": "AB-"
    },
    {
      "Name": "SHREYASH KUMAR",
      "Mobile_Number": "8914103068",
      "Email_ID": "shreyashkumar@gmail.com",
      "Department": "Iron Making Electrical Maintainance",
      "Blood_Group": "AB+"
    },
    {
      "Name": "PRAFULLA KUMAR",
      "Mobile_Number": "79911102067",
      "Email_ID": "prafullakumar@gmail.com",
      "Department": "Iron Making Mechanical Maintainance",
      "Blood_Group": "B+"
    },
    {
      "Name": "SUSHIL KUMAR",
      "Mobile_Number": "9991122468",
      "Email_ID": "sushilkumar@gmail.com",
      "Department": "H Blast Furnance",
      "Blood_Group": "A+"
    },
    {
      "Name": "MANOJ SINGH",
      "Mobile_Number": "9431103068",
      "Email_ID": "manojsingh@gmail.com",
      "Department": "Office of VP Safety",
      "Blood_Group": "A-"
    },
    {
      "Name": "AKHIL RAI",
      "Mobile_Number": "6911043068",
      "Email_ID": "akhileshyadav@gmail.com",
      "Department": "Health and Sustainability",
      "Blood_Group": "O+"
    },
    {
      "Name": "SHREYASH KUMAR",
      "Mobile_Number": "8914103068",
      "Email_ID": "shreyashkumar@gmail.com",
      "Department": "Iron Making Electrical Maintainance",
      "Blood_Group": "AB+"
    },
    {
      "Name": "PRAFULLA KUMAR",
      "Mobile_Number": "79911102067",
      "Email_ID": "prafullakumar@gmail.com",
      "Department": "Iron Making Mechanical Maintainance",
      "Blood_Group": "AB+"
    },
    {
      "Name": "SUSHIL KUMAR",
      "Mobile_Number": "9991122468",
      "Email_ID": "sushilkumar@gmail.com",
      "Department": "H Blast Furnance",
      "Blood_Group": "AB+"
    },
    {
      "Name": "MANOJ SINGH",
      "Mobile_Number": "9431103068",
      "Email_ID": "manojsingh@gmail.com",
      "Department": "Office of VP Safety",
      "Blood_Group": "AB+"
    },
    {
      "Name": "AKHIL RAI",
      "Mobile_Number": "6911043068",
      "Email_ID": "akhileshyadav@gmail.com",
      "Department": "Health and Sustainability",
      "Blood_Group": "AB+"
    },
    {
      "Name": "SHREYASH KUMAR",
      "Mobile_Number": "8914103068",
      "Email_ID": "shreyashkumar@gmail.com",
      "Department": "Iron Making Electrical Maintainance",
      "Blood_Group": "AB+"
    },
   
    // Add more employee objects as needed
  ];
  

  return (
    <div>
      <h1 className="centered-heading" style={{ marginBottom: '30px', marginTop: '30px' }}>
        Emergency Response Team @HBF
      </h1>

      {/* Image Slider (Replace with your actual image paths) */}
      <div className="card-container">
        <ul className="card-list"> 
    
        <li className="card">
        <div className="card-inner">
              <img src="/images/download (1).jpg" alt="Slide Image 1"className="resized-image"  />
              <div className="card-text-section">
              <h3>PRAFULLA KUMAR</h3>
              <p className="card-description">7991110206</p>
              <p className="card-description">Iron Making Mechanical Maintainance</p>
              <p className="card-description">Blood Group: AB+</p>
            </div>
            </div>
          </li>

          <li className="card">
        <div className="card-inner">
              <img src="/images/download (3).jpg" alt="Slide Image 1"className="resized-image"  />
              <div className="card-text-section">
              <h3>RAJEEV KUMAR</h3>
              <p className="card-description">7991110206</p>
              <p className="card-description">Iron Making Mechanical Maintainance</p>
              <p className="card-description">Blood Group: AB+</p>
            </div>
            </div>
          </li>

          <li className="card">
        <div className="card-inner">
              <img src="/images/download (4).jpg" alt="Slide Image 1"className="resized-image"  />
              <div className="card-text-section">
              <h3>MANOJ SINGH</h3>
              <p className="card-description">7991110206</p>
              <p className="card-description">Iron Making Mechanical Maintainance</p>
              <p className="card-description">Blood Group: AB+</p>
            </div>
            </div>
          </li>

          <li className="card">
        <div className="card-inner">
              <img src="/images/download (5).jpg" alt="Slide Image 1"className="resized-image"  />
              <div className="card-text-section">
              <h3>AKHIL RAI</h3>
              <p className="card-description">7991110206</p>
              <p className="card-description">Iron Making Mechanical Maintainance</p>
              <p className="card-description">Blood Group: AB+</p>
            </div>
            </div>
          </li>

          <li className="card">
        <div className="card-inner">
              <img src="/images/download (2).jpg" alt="Slide Image 1"className="resized-image"  />
              <div className="card-text-section">
              <h3>SHREYASH KUMAR</h3>
              <p className="card-description">7991110206</p>
              <p className="card-description">Iron Making Mechanical Maintainance</p>
              <p className="card-description">Blood Group: AB+</p>
            </div>
            </div>
          </li>

          <li className="card">
        <div className="card-inner">
              <img src="/images/download.jpg" alt="Slide Image 1"className="resized-image"  />
              <div className="card-text-section">
              <h3>NEERAJ JHA</h3>
              <p className="card-description">7991110206</p>
              <p className="card-description">Iron Making Mechanical Maintainance</p>
              <p className="card-description">Blood Group: AB+</p>
            </div>
            </div>
          </li>
 

          <li className="card">
        <div className="card-inner">
              <img src="/images/download (1).jpg" alt="Slide Image 1"className="resized-image"  />
              <div className="card-text-section">
              <h3>PRAFULLA KUMAR</h3>
              <p className="card-description">7991110206</p>
              <p className="card-description">Iron Making Mechanical Maintainance</p>
              <p className="card-description">Blood Group: AB+</p>
            </div>
            </div>
          </li>

          <li className="card">
        <div className="card-inner">
              <img src="/images/download (3).jpg" alt="Slide Image 1"className="resized-image"  />
              <div className="card-text-section">
              <h3>RAJEEV KUMAR</h3>
              <p className="card-description">7991110206</p>
              <p className="card-description">Iron Making Mechanical Maintainance</p>
              <p className="card-description">Blood Group: AB+</p>
            </div>
            </div>
          </li>

        

       

         </ul>
        
    </div>

      <h1 className="centered-heading" style={{ marginBottom: '30px' , marginTop: '30px' }}>
        Emergency Response Team @HBF
      </h1>
 
      <table className="table table-bordered">
        <thead>
          <tr className="table-header">
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Email ID</th>
            <th>Department</th>
            <th>Blood Group</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.Name}</td>
              <td>
                {/* Make phone numbers clickable */}
                <a href={`tel:${row.Mobile_Number}`}>{row.Mobile_Number}</a>
              </td>
              <td>
                {/* Make email addresses clickable */}
                <a href={`mailto:${row.Email_ID}`}>{row.Email_ID}</a>
              </td>
              <td>{row.Department}</td>
              <td>{row.Blood_Group}</td>
            </tr>
          ))}
        </tbody>
      </table>
  </div>
  );
};

export default List;