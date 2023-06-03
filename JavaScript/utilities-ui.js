export const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  if (className) {
    element.classList.add(className);
  }
  return element;
};

export const createText = (texto, clas) => {
  const text = createElement("p", clas);
  text.textContent = texto;
  return text;
};

export const createAvatar = (image) => {
  const photo = createElement("img");
  photo.src = image.png;
  return photo;
};

export const createBtn = () => {
  const contentBtn = createElement("article", "btn-commentary");
  const btn = createElement("button");
  btn.textContent = "REPLY";
  contentBtn.btn = btn;
  contentBtn.append(btn);
  return contentBtn;
};
