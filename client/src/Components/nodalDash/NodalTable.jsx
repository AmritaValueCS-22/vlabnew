import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Dummy data for nodal coordinators
const coordinatorData = [
  { institute: 'Assumption College, Changanassery, Kerala 686101', coordinators: ['John Doe', 'Jane Smith'] },
  { institute: 'C.M.S. College,Kottayam, Kerala 686 001', coordinators: ['Alice Johnson', 'Bob Brown'] },
  { institute: 'Sacred Heart College,Pandit Karuppan Road, Thevara, Kochi, Kerala 682013', coordinators: ['Michael Davis'] },
  { institute: 'College of Engineering Pathanapuram,Elikkatoor.P.O Pathanapuram, Kerala', coordinators: ['Emily Wilson', 'David Martinez', 'Sophia Lee', 'James Taylor'] },
  { institute: 'Sree Narayana College  P.O. Chengannur, Alappuzha - Kerala', coordinators: ['Olivia Clark', 'Daniel White', 'Lily Rodriguez', 'Matthew Lopez', 'Oliver Harris'] },
];

// Dummy data for student users
const studentData = [
  { name: 'Student 1', email: 'student1@example.com', department: 'Computer Science' },
  { name: 'Student 2', email: 'student2@example.com', department: 'Electrical Engineering' },
  { name: 'Student 3', email: 'student3@example.com', department: 'Mechanical Engineering' },
  { name: 'Student 4', email: 'student4@example.com', department: 'Civil Engineering' },
];

function createData(
  slNo,
  institute,
  nodalCoordinatorCount,
  studentUserCount,
  activeStatus
) {
  return { slNo, institute, nodalCoordinatorCount, studentUserCount, activeStatus };
}
// Dummy data for another state
const rows = [
  createData(1, 'Assumption College, Changanassery, Kerala 686101', 3, 50, 'Active'),
  createData(2, 'C.M.S. College,Kottayam, Kerala 686 001', 2, 30, 'Active'),
  createData(3, 'Sacred Heart College,Pandit Karuppan Road, Thevara, Kochi, Kerala 682013', 1, 20, 'Deactive'),
  createData(4, 'College of Engineering Pathanapuram,Elikkatoor.P.O Pathanapuram, Kerala', 4, 60, 'Active'), 
  createData(5, 'Sree Narayana College  P.O. Chengannur, Alappuzha - Kerala', 5, 70, 'Deactive'),
];

export default function NodalTables() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showStudentTable, setShowStudentTable] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNodalCoordinatorCountClick = (index) => {
    setSelectedRow(index);
    setShowStudentTable(false);
  };

  const handleStudentUserCountClick = (index) => {
    setSelectedRow(index);
    setShowStudentTable(true);
  };

  const handleClose = () => {
    setSelectedRow(null);
    setShowStudentTable(false);
  };

  const filteredRows = rows.filter(row =>
    row.institute.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <form
        className="d-sm- form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search w-100 "
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div style={{ width: 500 }} className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="search here..."
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </form>
      {selectedRow !== null ? (
        <div style={{ marginTop: '20px' }}>
          <Button variant="contained" onClick={handleClose} style={{ marginTop: '10px', marginLeft: "90%" }}>Close</Button>
          {showStudentTable ? (
            <TableContainer component={Paper} >
              <Table aria-label="student table" >
                <TableHead>
                  <TableRow >
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Department</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentData.map((student, index) => (
                    <TableRow key={index}>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.department}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <TableContainer component={Paper} >
              <Table aria-label="coordinator table" >
                <TableHead>
                  <TableRow >
                    <TableCell>Name of Institute</TableCell>
                    <TableCell>Name of Coordinators</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {coordinatorData.map((data) => {
                    if (data.institute === filteredRows[selectedRow].institute) {
                      return data.coordinators.map((coordinator, index) => (
                        <TableRow key={index}>
                          {index === 0 && <TableCell align="center" rowSpan={data.coordinators.length}>{data.institute}</TableCell>}
                          <TableCell align="center">{coordinator}</TableCell>
                        </TableRow>
                      ));
                    }
                    return null;
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 , marginTop:"30px"}} aria-label="nodal table">
            <TableHead>
              <TableRow style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>
                <TableCell align="center" style={{ fontWeight: 'bold' }}>State</TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold' }}>Sl. No</TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold' }}>Institute/Organization</TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold' }}>Nodal Coordinator(s) Count</TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold' }}>Student User Count</TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold' }}>Active/Deactive Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row, index) => (
                <TableRow key={row.slNo}>
                  {index === 0 && (
                    <TableCell align="center" rowSpan={filteredRows.length} style={{ backgroundColor: '#e0e0e0' }}>Kerala</TableCell>
                  )}
                  <TableCell align="center">{row.slNo}</TableCell>
                  <TableCell align="center">{row.institute}</TableCell>
                  <TableCell align="center" onClick={() => handleNodalCoordinatorCountClick(index)} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>{row.nodalCoordinatorCount}</TableCell>
                  <TableCell align="center" onClick={() => handleStudentUserCountClick(index)} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>{row.studentUserCount}</TableCell>
                  <TableCell align="center">{row.activeStatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
