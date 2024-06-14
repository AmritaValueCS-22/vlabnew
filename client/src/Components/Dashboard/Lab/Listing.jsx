import React, { useState, useCallback, useEffect } from "react";
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
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select from "react-select";
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
  getBroad,
  getBroadState,
  getLabById,
} from "../../../redux/reselect/reselector";
import { useDispatch, useSelector } from "react-redux";
import {
  addExperimentDetails,
  addLabDetails,
} from "../../../redux/slices/BroadAreaReducer";

import { getUID } from "../../../helpers/uniqueId";

const initialState = () => {
  return {
    broadAreaId: "",
    labId: "",
    expDetails: [],
  };
};
const Listing = () => {
  const [state, setState] = useState(initialState());
  const {isRefresh} = useSelector(state=>state.BroadArea)
  const broadOption = useSelector(getBroad);
  const broadState = useSelector(getBroadState);

  const [editedLabs, setEditedLabs] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isNewLabOpen, setIsNewLabOpen] = useState(false);

  const [newLab, setNewLab] = useState({
    expName: "",
    description: "",
  });

  const labOption = broadState?.flatMap((item) => {
    if (item.broadAreaId === state?.broadAreaId) {
      return item.labs.map((sub) => ({
        label: sub.labName,
        value: sub.labName,
        id: sub.labId,
      }));
    }
    return [];
  });

  const dispatch = useDispatch();
  const [labs, setLabs] = useState([
    {
      id: 1,
      expName: "Network Security Lab",
      description:
        "Lab for studying network security protocols and techniques.",
    },
    {
      id: 2,
      expName: "Machine Learning Lab",
      description:
        "Lab for implementing and experimenting with machine learning algorithms.",
    },
    {
      id: 3,
      expName: "Database Management Lab",
      description:
        "Lab for learning and practicing database management concepts.",
    },
    {
      id: 4,
      expName: "Operating Systems Lab",
      description:
        "Lab for studying various operating systems and their components.",
    },
    {
      id: 5,
      expName: "Computer Vision Lab",
      description:
        "Lab for exploring computer vision techniques and applications.",
    },
    {
      id: 6,
      expName: "Cybersecurity Lab",
      description:
        "Lab for hands-on experience with cybersecurity tools and methodologies.",
    },
  ]);

  const filterExpDetails = () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    const filterLab = broadState?.find(
      (item) => item.broadAreaId === state.broadAreaId
    );
    if (filterLab) {
      const lab = filterLab.labs.find((sub) => sub.labId === state.labId);
      if (lab) {
        setState((prev) => ({
          ...prev,
          expDetails: lab.experiments || [],
          isLoading: false,
        }));
      }
    }
  };
console.log(state)
  useEffect(() => {
    filterExpDetails();
  }, [state.broadAreaId, state.labId,isRefresh]);

  const handleEditLab = (labId) => {
    setIsEditing(true);
    const editedLabIndex = labs.findIndex((lab) => lab.id === labId);
    const labToEdit = labs[editedLabIndex];
    setEditedLabs({ ...editedLabs, [labId]: labToEdit });
  };

  const handleSaveLab = (labId) => {
    setIsEditing(false);
    const updatedLabs = labs.map((lab) => {
      if (lab.id === labId) {
        return editedLabs[labId];
      }
      return lab;
    });
    setLabs(updatedLabs);
    setEditedLabs({});
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedLabs({});
  };

  const handleChange = (e, labId, field) => {
    const updatedLab = { ...editedLabs[labId], [field]: e.target.value };
    setEditedLabs({ ...editedLabs, [labId]: updatedLab });
  };

  const handleAddLab = () => {
    setIsNewLabOpen(true);
  };

  const handleSaveNewLab = () => {
    try {
      const data = {
        experimentId: getUID(),
        labId: state.labId,
        experimentName: newLab.expName,
        description: newLab.description,
        broadId: state.broadAreaId,
      };
      console.log(data);
      dispatch(addExperimentDetails(data));
      const newId = labs.length + 1;
      setLabs([...labs, { id: newId, ...newLab }]);
      setNewLab({ expName: "", description: "" });
      setIsNewLabOpen(false);
    } catch (error) {}
  };

  const handleCancelNewLab = () => {
    setNewLab({ expName: "", description: "" });
    setIsNewLabOpen(false);
  };

  const handleDeleteLab = (labId) => {
    const updatedLabs = labs.filter((lab) => lab.id !== labId);
    setLabs(updatedLabs);
  };
  console.log(state.expDetails);
  const handleSelectChange = (value, type) => {
    switch (type) {
      case "labs":
        setState((prev) => ({
          ...prev,
          labId: value.id,
        }));
        break;
      case "broad":
        setState((prev) => ({
          ...prev,
          broadAreaId: value.id,
        }));
        break;

      default:
        break;
    }
  };
  return (
    <div className="container-xl" style={{ margin: 0 }}>
      <div className="table-responsive">
        <Box sx={{ marginBottom: "1rem", marginTop: "50px" }}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="h4" gutterBottom>
              Manage Experiments
            </Typography>
            <div>
              <label htmlFor="broadArea">Broad Area:</label>
              <Select
                styles={{
                  control: (css) => ({
                    ...css,
                    width: 500,
                  }),
                  menu: (css) => ({
                    ...css,
                    width: 500,
                  }),
                }}
                onChange={(e) => handleSelectChange(e, "broad")}
                options={broadOption}
              />
            </div>

            <div style={{ marginTop: 5 }}>
              <label htmlFor="broadArea">Labs:</label>
              <Select
                styles={{
                  control: (css) => ({
                    ...css,
                    width: 500,
                  }),
                  menu: (css) => ({
                    ...css,
                    width: 500,
                  }),
                }}
                onChange={(e) => handleSelectChange(e, "labs")}
                options={labOption}
              />
            </div>
          </Box>
        </Box>
        {!isNewLabOpen && (
          <Button
            variant="contained"
            color="primary"
            startIcon={<FontAwesomeIcon icon={faPlus} />}
            sx={{ marginBottom: "1rem" }}
            onClick={handleAddLab}
          >
            Add New Experiment
          </Button>
        )}
        {isNewLabOpen && (
          <>
            <TextField
              label="Lab Name"
              value={newLab.expName}
              onChange={(e) =>
                setNewLab({ ...newLab, expName: e.target.value })
              }
              sx={{ marginRight: "1rem" }}
            />
            <TextField
              label="Description"
              value={newLab.description}
              onChange={(e) =>
                setNewLab({ ...newLab, description: e.target.value })
              }
              sx={{ marginRight: "1rem" }}
            />
            <Button
              variant="contained"
              color="primary"
              startIcon={<FontAwesomeIcon icon={faSave} />}
              onClick={handleSaveNewLab}
              sx={{ marginRight: "1rem" }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCancelNewLab}
            >
              Cancel
            </Button>
          </>
        )}

        <TableContainer
          component={Paper}
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            marginTop: "1rem",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Experiment Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.expDetails.map((experiment, index) => (
                <TableRow
                  key={experiment.id}
                  sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    {isEditing && editedLabs[experiment.id] ? (
                      <TextField
                        value={editedLabs[experiment.id].expName}
                        onChange={(e) =>
                          handleChange(e, experiment.id, "expName")
                        }
                        fullWidth
                      />
                    ) : (
                      experiment.experimentName
                    )}
                  </TableCell>
                  <TableCell>
                    {isEditing && editedLabs[experiment.id] ? (
                      <TextField
                        value={editedLabs[experiment.id].description}
                        onChange={(e) =>
                          handleChange(e, experiment.id, "description")
                        }
                        fullWidth
                      />
                    ) : (
                      experiment.description
                    )}
                  </TableCell>
                  <TableCell style={{ display: "flex" }}>
                    {isEditing ? (
                      <>
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<FontAwesomeIcon icon={faSave} />}
                          onClick={() => handleSaveLab(experiment.id)}
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
                          onClick={() => handleEditLab(experiment.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          component={Link}
                          to={`editExperiment`}
                          variant="contained"
                          color="success"
                          startIcon={<FontAwesomeIcon icon={faEye} />}
                          style={{ marginRight: "20px" }}
                        >
                          View
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<FontAwesomeIcon icon={faTrash} />}
                          onClick={() => handleDeleteLab(experiment.id)}
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
      </div>
    </div>
  );
};

const ListingLayout = WithExperimentLayout(Listing);

export default ListingLayout;
