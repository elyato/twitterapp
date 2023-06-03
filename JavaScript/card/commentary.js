import { createElement, createAvatar, createBtn } from "../utilities-ui.js";
import createInputCommentary from "./contentCommentary.js";

const createCommetary = (comentario) => {
  const { image, username } = comentario.user;
  const contentCommentary = createElement("div", "content-card");

  const photoUser = createAvatar(image);
  const aside = createElement("aside", "avatar-commentary");

  const button = createBtn();

  const validation = button.btn;
  const arroba = `@${username}, `;
  const written = createInputCommentary(arroba);

  const txtComentario = written.textArea;

  contentCommentary.append(aside, written, button);

  // y.addEventListener()
  const textoNuevoComentario = txtComentario.value;

  if (textoNuevoComentario == arroba) {
    validation.disabled = true;
  } else {
    validation.disabled = false;
  }

  aside.append(photoUser);
  return contentCommentary;
};

export default createCommetary;
