import createCard from "./card/card.js";
import createCommetary from "./card/commentary.js";
export const createComment = (comentario) => {
  const card = createCard(comentario);
  const commentary = createCommetary(comentario);
  const contentHome = document.getElementById("content-home");
  contentHome.append(card, commentary);
};
