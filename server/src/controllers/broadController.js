import User from "../models/userSchema.js";
import BroadArea from "../models//experimentSchema.js";
import { StatusCodes } from "http-status-codes";
import getResponse from "../helpers/response.js";
import path from "path";
import { promises as fsPromises } from "fs";
import unzipper from "unzipper";
import { mkdirp } from "mkdirp";
import fs from "fs";
import AdmZip from "adm-zip";
const __dirname = path.resolve();

export const addBroad = async (req, res) => {
  try {
    const { broadId, broadName, description } = req.body;
    const superAdmin = await User.findOne({ role: "1" });
    if (superAdmin) {
      const broadAreaDetails = new BroadArea({
        broadAreaId: broadId,
        broadAreaName: broadName,
        description: description,
      });
      await broadAreaDetails.save();
      const getBroadDetails = await BroadArea.find({});
      const successResponse = {
        status: StatusCodes.OK,
        payload: {
          message: "Broad Area added successfully",
          status: 200,
          broadDetails: getBroadDetails,
        },
      };

      return getResponse(res, successResponse);
    } else {
      const failedResponse = {
        status: StatusCodes.FORBIDDEN,
        payload: {
          error: "You don't have access",
          status: 403,
        },
      };
      return getResponse(res, failedResponse);
    }
  } catch (error) {
    console.error(error);
    const errorResponse = {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      payload: {
        error: "Something went wrong",
        status: 500,
      },
    };
    return getResponse(res, errorResponse);
  }
};

export const editBroad = async (req, res) => {
  try {
    const { broadId } = req.query;
    const updateData = req.body;
    const superAdmin = await User.findOne({ role: "1" });
    console.log(superAdmin, req.body);
    if (superAdmin) {
      const updatedBroad = await BroadArea.updateOne(
        {
          broadAreaId: broadId,
        },
        { $set: updateData },
        { new: true }
      );
      await updatedBroad.save();
      const successResponse = {
        status: StatusCodes.OK,
        payload: {
          message: "Broad Area Updated successfully",
          status: 200,
        },
      };

      return getResponse(res, successResponse);
    } else {
      const failedResponse = {
        status: StatusCodes.FORBIDDEN,
        payload: {
          error: "You don't have access",
          status: 403,
        },
      };
      return getResponse(res, failedResponse);
    }
  } catch (error) {
    console.error(error);
    const errorResponse = {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      payload: {
        error: "Something went wrong",
        status: 500,
      },
    };
    return getResponse(res, errorResponse);
  }
};
export const getAllBroad = async (req, res) => {
  try {
    const superAdmin = await User.findOne({ role: "1" });
    console.log(superAdmin, req.body);
    if (superAdmin.role) {
      const getBroadDetails = await BroadArea.find({});
      const successResponse = {
        status: StatusCodes.OK,
        payload: {
          status: 200,
          broadDetails: getBroadDetails,
        },
      };

      return getResponse(res, successResponse);
    } else {
      const failedResponse = {
        status: StatusCodes.FORBIDDEN,
        payload: {
          error: "You don't have access",
          status: 403,
        },
      };
      return getResponse(res, failedResponse);
    }
  } catch (error) {
    console.error(error);
    const errorResponse = {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      payload: {
        error: "Something went wrong",
        status: 500,
      },
    };
    return getResponse(res, errorResponse);
  }
};
// lab controller
export const addLab = async (req, res) => {
  try {
    const { broadId, labId, labName, description } = req.body;

    const superAdmin = await User.findOne({ role: "1" });
    if (!superAdmin) {
      return getResponse(res, {
        status: StatusCodes.FORBIDDEN,
        payload: { error: "You don't have access", status: 403 },
      });
    }

    const broadArea = await BroadArea.findOneAndUpdate(
      { broadAreaId: broadId },
      {
        $push: { labs: { labId, labName, description, broadAreaId: broadId } },
      },
      { new: true }
    );

    if (!broadArea) {
      return getResponse(res, {
        status: StatusCodes.NOT_FOUND,
        payload: { error: "Broad area not found", status: 404 },
      });
    }
    const updatedBroadDetails = await BroadArea.find({});
    console.log(updatedBroadDetails);

    return getResponse(res, {
      status: StatusCodes.OK,
      payload: {
        message: "Lab added successfully",
        status: 200,
        broadDetails: updatedBroadDetails,
      },
    });
  } catch (error) {
    console.error(error);
    return getResponse(res, {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      payload: { error: "Something went wrong", status: 500 },
    });
  }
};

// experiment controller
export const addExperiment = async (req, res) => {
  try {
    const { experimentId, broadId, labId, experimentName, description } =
      req.body;
    const superAdmin = await User.findOne({ role: "1" });
    if (superAdmin) {
      const getBroadDetails = await BroadArea.findOne({ broadAreaId: broadId });
      if (getBroadDetails) {
        const lab = getBroadDetails.labs.find((lab) => lab.labId === labId);
        if (!lab) {
          const failedResponse = {
            status: StatusCodes.NOT_FOUND,
            payload: {
              error: "Lab not found",
              status: 404,
            },
          };
          return getResponse(res, failedResponse);
        } else {
          const experimentDetails = {
            experimentId: experimentId,
            broadAreaId: broadId,
            labId,
            experimentName,
            description,
          };
          lab.experiments.push(experimentDetails);
          await getBroadDetails.save();
          const updatedBroadDetails = await BroadArea.find({});
          const successResponse = {
            status: StatusCodes.OK,
            payload: {
              message: "Experiment is added successfully",
              status: 200,
              broadDetails: updatedBroadDetails,
            },
          };
          return getResponse(res, successResponse);
        }
      } else {
        const failedResponse = {
          status: StatusCodes.FORBIDDEN,
          payload: {
            error: "Something went wrong",
            status: 403,
          },
        };
        return getResponse(res, failedResponse);
      }
    } else {
      const failedResponse = {
        status: StatusCodes.FORBIDDEN,
        payload: {
          error: "You don't have access",
          status: 403,
        },
      };
      return getResponse(res, failedResponse);
    }
  } catch (error) {
    console.error(error);
    const errorResponse = {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      payload: {
        error: "Something went wrong",
        status: 500,
      },
    };
    return getResponse(res, errorResponse);
  }
};

// export const uploadExperiment = async (req, res) => {
//   try {
//     const { broadname, labname, expname } = req.body;
//     const zipFilePath = req.file.path;
//     const extractPath = path.join(
//       __dirname,
//       "Deployed",
//       broadname,
//       labname,
//       expname
//     );

//     await fsPromises.mkdir(extractPath, { recursive: true });

//     fs.createReadStream(zipFilePath)
//       .pipe(unzipper.Extract({ path: extractPath }))
//       .on("close", () => {
//         console.log("Zip folder extracted successfully");
//         res.send({ folderPath: extractPath });
//       })
//       .on("error", (err) => {
//         console.error("Error extracting zip folder:", err);
//         res.status(500).send("Error extracting zip folder");
//       });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal server error");
//   }
// };

export const uploadExperiment = async (req, res) => {
  try {
    const { broadId, labId, expId, isDocument = "false" } = req.body;

    const broadDetails = await BroadArea.findOne({ broadAreaId: broadId });

    if (!broadDetails) {
      throw new Error("Broad area not found.");
    }

    const lab = broadDetails.labs.find((lab) => lab.labId === labId);
    if (!lab) {
      throw new Error("Lab not found.");
    }

    const experiment = lab.experiments.find(
      (exp) => exp.experimentId === expId
    );
    if (!experiment) {
      throw new Error("Experiment not found.");
    }

    const broadAreaName = broadDetails.broadAreaName || "broad";
    const labName = lab.labName || "lab";
    const experimentName = experiment.experimentName || "experiment";

    const zipFilePath = req.file.path;
    const extractPath = path.join(
      __dirname,
      "Deployed",
      broadAreaName.split(" ").join("_").trim(),
      labName.split(" ").join("_").trim(),
      experimentName.split(" ").join("_").trim(),
      isDocument === "true" ? "Documentation" : "Simulation"
    );

    await mkdirp(extractPath);

    const zip = new AdmZip(zipFilePath);
    zip.extractAllTo(extractPath, true);

    console.log("Zip folder extracted successfully");
    const successResponse = {
      status: StatusCodes.OK,
      payload: {
        message: "Simulation uploaded successfully",
        status: 200,
      },
    };
    return getResponse(res, successResponse);
  } catch (error) {
    console.error("Error extracting zip folder:", error);
    res.status(500).send("Error extracting zip folder");
  }
};
