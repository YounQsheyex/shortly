import * as Yup from "yup";

export const linkSchema = Yup.object().shape({
  webUrl: Yup.string()
    .required("Please add a link")
    .matches(
      /\b((https?:\/\/)?(www\.)?([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,})(:[0-9]+)?(\/[^\s]*)?\b/,
      "Please add a link"
    ),
});

//   /^(https?:\/\/)?(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(\/\S*)?$/,

// \b((http[s]?://)?(www\.)?([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,})(:[0-9]+)?(/[^\s]*)?\b
