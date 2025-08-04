const formData = {
  signup: [
    {
      label: "First Name",
      type: "text",
      name: "first_name",
      required: true,
      isHalf: true,
    },
    {
      label: "Last Name",
      type: "text",
      name: "last_name",
      required: true,
      isHalf: true,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      required: true,
    },
  ],
};

export default formData;