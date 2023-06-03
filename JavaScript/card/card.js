import {
  createButtonIcon,
  contentInfoUser,
  createUserAvatar,
  createVotes,
} from "./index.js";
import { createElement } from "../utilities-ui.js";
import contentBodyCard from "./cardBody.js";
import icon from "../data/svg.js";

const createCard = (comentario) => {
  const { id, score, user, createdAt, content } = comentario;
  const contentCard = createElement("article", "content-card");
  contentCard.setAttribute("id", id);
  const contentLikes = createElement("aside");

  const contentHeader = contentInfoUser();
  const buttonLikes = createVotes(id, score);
  const iconReply = createButtonIcon(icon.reply, "Reply");

  const dateRegister = createElement("p", "text-title-comment");
  dateRegister.textContent = createdAt;

  const contentComment = createElement("section", "content-comment");
  const avatar = createUserAvatar(user);

  const textComment = contentBodyCard(content);

  contentCard.append(contentLikes, contentComment);
  contentLikes.append(buttonLikes);
  contentComment.append(contentHeader, textComment);
  contentHeader.append(avatar, iconReply);
  avatar.append(dateRegister);
  return contentCard;
};

export default createCard;
