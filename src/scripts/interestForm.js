import api from "./dbCalls";

const root = document.getElementById("container");

export default () => {
  const form = document.createElement("form");
  root.appendChild(form);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("placeholder", "Name of Interest");
  form.appendChild(nameInput);

  const descInput = document.createElement("input");
  descInput.setAttribute("placeholder", "Description of Interest");
  form.appendChild(descInput);

  const costInput = document.createElement("input");
  costInput.setAttribute("placeholder", "Cost of Interest");
  form.appendChild(costInput);

  const reviewInput = document.createElement("input");
  reviewInput.setAttribute("placeholder", "Review");
  form.appendChild(reviewInput);

  const interestLocation = document.createElement("select");
  form.appendChild(interestLocation);

  const option1 = document.createElement("option");
  option1.setAttribute("id", "option");
  option1.setAttribute("value", "1");
  option1.textContent = "Italy";
  const option2 = document.createElement("option");
  option2.setAttribute("id", "option");
  option2.setAttribute("value", "2");
  option2.textContent = "Switzerland";
  const option3 = document.createElement("option");
  option3.setAttribute("id", "option");
  option3.setAttribute("value", "3");
  option3.textContent = "France";

  interestLocation.appendChild(option1);
  interestLocation.appendChild(option2);
  interestLocation.appendChild(option3);

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  root.appendChild(saveButton);
  saveButton.addEventListener("click", () => {
    const content = {
      name: nameInput.value,
      description: descInput.value,
      cost: costInput.value,
      review: reviewInput.value,
      placeId: interestLocation.value
    };
    api.saveForm(content);
  });
};
