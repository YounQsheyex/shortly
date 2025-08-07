import * as Yup from "yup";

export const linkSchema = Yup.object().shape({
  webUrl: Yup.string()
    .matches(
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(\/\S*)?$/,
      "Please add a link"
    )
    .required("Please add a link"),
});
