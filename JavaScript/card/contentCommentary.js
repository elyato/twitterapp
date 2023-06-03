import { createElement } from "../utilities-ui.js";

const createInputCommentary = (username) => {
  const contentWrittenCommentary = createElement("section");
  const writtenCommentary = createElement("textarea", "written");
  writtenCommentary.id = "prueba";
  writtenCommentary.textContent = username;
  contentWrittenCommentary.textArea = writtenCommentary;

  contentWrittenCommentary.append(writtenCommentary);
  return contentWrittenCommentary;
};

export default createInputCommentary;
