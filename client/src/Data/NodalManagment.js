export const NodalManagmentData = [
    { id: 1, title: "Add Nodal Center", icon: "fa-plus-circle", color: "primary" },
    { id: 2, title: "Edit Nodal Center", icon: "fa-pencil-square", color: "success" },
    { id: 3, title: "Delete Nodal Center", icon: "fa-trash", color: "info" },
  ];
  export const NodalDetails = [
    {  
      id: 1, 
      title: "School Name", 
      type: "text",
      name: "schoolName",
      isInput: true 
    },
    { 
      id: 2, 
      title: "School Address", 
      type: "text", 
      name: "SchoolAddress",
      isInput: true 
    },
    {
      id: 3,
      title: "State",
      type: "text",
      name: "state",
      isInput: false,
      subValue: [
        { id: 1, value: "Andhra Pradesh", label: "Andhra Pradesh" },
        { id: 2, value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
        { id: 3, value: "Assam", label: "Assam" },
        { id: 4, value: "Bihar", label: "Bihar" },
        // Additional states...
      ],
    },
    {
      id: 4,
      title: "District",
      type: "text",
      name: "District",
      isInput: false,
      subValue: [
        { id: 1, value: "trivandrum", label: "Trivandrum" },
        { id: 2, value: "kaniyakuamri", label: "Kaniyakuamri" },
        { id: 3, value: "kochi", label: "Kochi" },
        { id: 4, value: "pathanamtitta", label: "Pathanamtitta" },
        { id: 5, value: "kollam", label: "Kollam" },
        { id: 6, value: "karunagapally", label: "Karunagapally" },
        { id: 7, value: "allapuzha", label: "Allapuzha" },
      ],
    },
    {
      id: 5,
      title: "Pincode",
      type: "pincode",
      name: "pincode",
      isInput: true,
    },
  ];