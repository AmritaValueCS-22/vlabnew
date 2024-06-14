import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faPlus,
  faSave,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade"; // Import the Fade component
import { Link, useLocation } from "react-router-dom";
import WithExperimentLayout from "../../common/ExperimentLayout";
import {
  addBroadDetails,
  getAllBroad,
} from "../../../redux/slices/BroadAreaReducer";
import { useDispatch, useSelector } from "react-redux";
import { getUID } from "../../../helpers/uniqueId";
import { getValue } from "../../../helpers/localStorage";
import { getBroadState } from "../../../redux/reselect/reselector";

const Broadareas = () => {
  const [broadareas, setbroadareas] = useState([
    {
      id: 1,
      broadarea: "	Biotechnology and Biomedical Engineering",
      description:
        "broadarea for studying network security protocols and techniques.",
    },
    {
      id: 2,
      broadarea: "	Chemical Sciences",
      description:
        "broadarea for implementing and experimenting with machine learning algorithms.",
    },
    {
      id: 3,
      broadarea: "	Physical Sciences",
      description:
        "broadarea for learning and practicing database management concepts.",
    },
    {
      id: 4,
      broadarea: "	Computer Science",
      description:
        "broadarea for studying various operating systems and their components.",
    },
    {
      id: 5,
      broadarea: "Mechanical Engineering",
      description:
        "broadarea for exploring computer vision techniques and applications.",
    },
  ]);
  const BroadDetails = useSelector(getBroadState);
  const dispatch = useDispatch();
  const [editedbroadareas, setEditedbroadareas] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isNewbroadareaOpen, setIsNewbroadareaOpen] = useState(false);
  const [newbroadarea, setNewbroadarea] = useState({
    broadarea: "",
    description: "",
  });

  const handleEditbroadarea = (broadareaId) => {
    setIsEditing(true);
    const editedbroadareaIndex = broadareas.findIndex(
      (broadarea) => broadarea.id === broadareaId
    );
    const broadareaToEdit = broadareas[editedbroadareaIndex];
    setEditedbroadareas({
      ...editedbroadareas,
      [broadareaId]: broadareaToEdit,
    });
  };

  const handleSavebroadarea = (broadareaId) => {
    try {
      console.log(newbroadarea, "hi");
      setIsEditing(false);
      const updatedbroadareas = broadareas.map((broadarea) => {
        if (broadarea.id === broadareaId) {
          return editedbroadareas[broadareaId];
        }
        return broadarea;
      });
      setbroadareas(updatedbroadareas);
      setEditedbroadareas({});
    } catch (error) {}
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedbroadareas({});
  };

  const handleChange = (e, broadareaId, field) => {
    const updatedbroadarea = {
      ...editedbroadareas[broadareaId],
      [field]: e.target.value,
    };
    setEditedbroadareas({
      ...editedbroadareas,
      [broadareaId]: updatedbroadarea,
    });
  };

  const handleAddbroadarea = () => {
    setIsNewbroadareaOpen(true);
  };

  const handleSaveNewbroadarea = () => {
    try {
      const data = {
        broadId: getUID(),
        broadName: newbroadarea.broadarea,
        description: newbroadarea.description,
      };
      // console.log(data);
      dispatch(addBroadDetails(data));
      const newId = broadareas.length + 1;
      setbroadareas([...broadareas, { id: newId, ...newbroadarea }]);
      setNewbroadarea({ broadarea: "", description: "" });
      setIsNewbroadareaOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelNewbroadarea = () => {
    setNewbroadarea({ broadarea: "", description: "" });
    setIsNewbroadareaOpen(false);
  };

  const handleDeletebroadarea = (broadareaId) => {
    const updatedbroadareas = broadareas.filter(
      (broadarea) => broadarea.id !== broadareaId
    );
    setbroadareas(updatedbroadareas);
  };

  return (
    <div className="container-xl" style={{ margin: 0 }}>
      <div className="table-responsive">
        <Box sx={{ marginBottom: "1rem", marginTop: "50px" }}>
          <Typography variant="h4" gutterBottom>
            Manage Broad Area
          </Typography>
        </Box>
        {!isNewbroadareaOpen && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<FontAwesomeIcon icon={faPlus} />}
            sx={{ marginBottom: "1rem" }}
            onClick={handleAddbroadarea}
          >
            Add New Broad Area
          </Button>
        )}
        {isNewbroadareaOpen && (
          <>
            <TextField
              broadareael="broadarea Name"
              value={newbroadarea.broadarea}
              onChange={(e) =>
                setNewbroadarea({ ...newbroadarea, broadarea: e.target.value })
              }
              sx={{ marginRight: "1rem" }}
            />
            <TextField
              broadareael="Description"
              value={newbroadarea.description}
              onChange={(e) =>
                setNewbroadarea({
                  ...newbroadarea,
                  description: e.target.value,
                })
              }
              sx={{ marginRight: "1rem" }}
            />
            <Button
              variant="contained"
              color="primary"
              startIcon={<FontAwesomeIcon icon={faSave} />}
              onClick={handleSaveNewbroadarea}
              sx={{ marginRight: "1rem" }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCancelNewbroadarea}
            >
              Cancel
            </Button>
          </>
        )}
        {BroadDetails.length === 0 ? (
          <div
            style={{
              width: "100%",
              height: 100,
              padding: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h5>No Data</h5>
          </div>
        ) : (
          <TableContainer
            component={Paper}
            sx={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              marginTop: "1rem",
              width: "100%",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Broad Area</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {BroadDetails?.map((broadarea, index) => (
                  <TableRow
                    key={broadarea.id}
                    sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      {isEditing && editedbroadareas[broadarea.id] ? (
                        <TextField
                          value={editedbroadareas[broadarea.id].broadarea}
                          onChange={(e) =>
                            handleChange(e, broadarea.id, "broadarea")
                          }
                          fullWidth
                        />
                      ) : (
                        broadarea.broadAreaName
                      )}
                    </TableCell>
                    <TableCell>
                      {isEditing && editedbroadareas[broadarea.id] ? (
                        <TextField
                          value={editedbroadareas[broadarea.id].description}
                          onChange={(e) =>
                            handleChange(e, broadarea.id, "description")
                          }
                          fullWidth
                        />
                      ) : (
                        broadarea.description
                      )}
                    </TableCell>
                    <TableCell style={{ display: "flex" }}>
                      {isEditing ? (
                        <>
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={<FontAwesomeIcon icon={faSave} />}
                            onClick={() => handleSavebroadarea(broadarea.id)}
                            style={{ marginRight: "20px" }}
                          >
                            Save
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleCancelEdit}
                            style={{ marginRight: "20px" }}
                          >
                            Cancel
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={<FontAwesomeIcon icon={faEdit} />}
                            style={{ marginRight: "20px" }}
                            onClick={() => handleEditbroadarea(broadarea.id)}
                          >
                            Edit
                          </Button>
                          {/* <Button
                            component={Link}
                            to={`/listing`} // Adjust the path as per your routing configuration
                            variant="contained"
                            color="success"
                            startIcon={<FontAwesomeIcon icon={faEye} />}
                            style={{ marginRight: "20px" }}
                          >
                            View
                          </Button> */}
                          <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<FontAwesomeIcon icon={faTrash} />}
                            onClick={() => handleDeletebroadarea(broadarea.id)}
                            style={{ marginRight: "20px" }}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};
const broadareaHome = WithExperimentLayout(Broadareas);
export default broadareaHome;
