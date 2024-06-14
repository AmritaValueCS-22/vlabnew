export const userManagementData = [
  { id: 1, title: "Add User", icon: "fa-plus-circle", color: "primary" },
  { id: 2, title: "Edit User", icon: "fa-pencil-square", color: "success" },
  { id: 3, title: "Delete User", icon: "fa-trash", color: "info" },
];
export const addUserDetails = [
  { id: 1, title: "Fullname", type: "text", name: "fullname", isInput: true },
  { id: 2, title: "Username", type: "text", name: "username", isInput: true },
  { id: 3, title: "Email", type: "text", name: "email", isInput: true },
  {
    id: 4,
    title: "Role",
    type: "role",
    name: "role",
    isInput: false,
    subValue: [
      { id: 1, value: "4", label: "Guest" },
      { id: 2, value: "2", label: "SME(Subject Matter Expert)" },
      { id: 3, value: "3", label: "Nodal Center Instructor" },
      { id: 4, value: "1", label: "Admin" },
    ],
  },
  {
    id: 5,
    title: "Age",
    type: "age",
    name: "age",
    isInput: false,
    subValue: [
      { id: 1, value: "under_18", label: "Under 18" },
      { id: 2, value: "18_24", label: "18-24" },
      { id: 3, value: "25_34", label: "25-34" },
      { id: 4, value: "35_44", label: "35-44" },
      { id: 5, value: "45_54", label: "45-54" },
      { id: 6, value: "55_64", label: "55-64" },
      { id: 7, value: "65_over", label: "65 and over" },
    ],
  },
  {
    id: 6,
    title: "School/Student ID",
    type: "schoolId",
    name: "schoolId",
    isInput: true,
  },
  {
    id: 7,
    title: "Gender",
    type: "gender",
    name: "gender",
    isInput: false,
    subValue: [
      { id: 1, value: "male", label: "Male" },
      { id: 2, value: "female", label: "Female" },
      { id: 3, value: "others", label: "Others" },
    ],
  },
  {
    id: 8,
    title: "Phone Number",
    type: "number",
    name: "phonenumber",
    isInput: true,
  },
  {
    id: 9,
    title: "State",
    type: "text",
    name: "state",
    isInput: true,
  },
  {
    id: 10,
    title: "Country",
    type: "text",
    name: "country",
    isInput: false,
    subValue: [
      { id: 1, value: "India", label: "India" },
      { id: 2, value: "Australia", label: "Australia" },
      { id: 3, value: "Belgium", label: "Belgium" },
      { id: 4, value: "Canada", label: "Canada" },
      { id: 5, value: "China", label: "China" },
      { id: 6, value: "Finland", label: "Finland" },
      { id: 7, value: "France", label: "France" },
      { id: 8, value: "Germany", label: "Germany" },
      { id: 9, value: "Ireland", label: "Ireland" },
      { id: 10, value: "Italy", label: "Italy" },
      { id: 11, value: "Japan", label: "Japan" },
      { id: 12, value: "Kuwait", label: "Kuwait" },
      { id: 13, value: "Netherlands", label: "Netherlands" },
      { id: 14, value: "New Zealand", label: "New Zealand" },
      { id: 15, value: "Oman", label: "Oman" },
      { id: 16, value: "Singapore", label: "Singapore" },
      { id: 17, value: "Sweden", label: "Sweden" },
      { id: 18, value: "Switzerland", label: "Switzerland" },
      { id: 19, value: "United States", label: "United States" },
      { id: 20, value: "United Kingdom", label: "United Kingdom" },
      { id: 21, value: "Other", label: "Other" },
    ],
  },
  {
    id: 11,
    title: "Profession",
    type: "text",
    name: "profession",
    isInput: false,
    subValue: [
      { id: 1, value: "student", label: "Student" },
      { id: 2, value: "teacher", label: "Teacher" },
      { id: 3, value: "engineer", label: "Engineer" },
      { id: 4, value: "doctor", label: "Doctor" },
      { id: 5, value: "other", label: "Other" },
    ],
  },
  {
    id: 12,
    title: "College",
    type: "text",
    name: "college",
    isInput: true,
  },
];
