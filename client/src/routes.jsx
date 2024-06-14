import Icon from "@mui/material/Icon";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ExtensionIcon from "@mui/icons-material/Extension";
import ComputerIcon from "@mui/icons-material/Computer";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FeedbackIcon from "@mui/icons-material/Feedback";
const routes = [
  {
    type: "collapse",
    name: "Theory",
    key: "theory",
    icon: <EditNoteIcon />,
    route: "theory",
    // component: <div style={{ fontWeight: 80, height: 1000}}>hello</div>,
  },
  {
    type: "collapse",
    name: "Procedure",
    key: "procedure",
    icon: <SettingsSuggestIcon />,
    route: "procedure",
    // component: <Procedure />,
  },
  {
    type: "collapse",
    name: "Pretest",
    key: "pretest",
    icon: <ExtensionIcon />,
    route: "pretest",
    // component: <PreTest />,
  },
  {
    type: "collapse",
    name: "Simulator",
    key: "simulator",
    icon: <ComputerIcon />,
    route: "simulator",
    // component: <Simulator />,
  },
  {
    type: "collapse",
    name: "Posttest",
    key: "posttest",
    icon: <ExtensionIcon />,
    route: "posttest",
    // component: <Posttest />,
  },
  {
    type: "collapse",
    name: "Assignment",
    key: "assignment",
    icon: <AssignmentIcon />,
    route: "assignment",
    // component: <Assignment />,
  },
  {
    type: "collapse",
    name: "Reference",
    key: "reference",
    icon: <ContentPasteSearchIcon />,
    route: "reference",
    // component: <Reference />,
  },
  {
    type: "collapse",
    name: "Feedback",
    key: "feedback",
    icon: <FeedbackIcon />,
    route: "feedback",
    // component: <Feedback />,
  },
];

export default routes;
