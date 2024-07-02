export const formConfig = [
    {
      label: "Name",
      type: "text",
      initialValue: "",
      validations: {
        required: true,
        minLength: 3,
      },
    },
    {
      label: "Email",
      type: "email",
      initialValue: "",
      validations: {
        required: true,
        pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      },
    },
    {
      label: "Age",
      type: "number",
      initialValue: "",
      validations: {
        required: true,
        min: 18,
        max: 100,
      },
    },
  ];
  