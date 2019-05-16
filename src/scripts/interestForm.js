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
  option1.textContent = "Italy";
  option1.value = parseInt("1");
  const option2 = document.createElement("option");
  option2.setAttribute("id", "option");
  option2.textContent = "Switzerland";
  option2.value = parseInt("2");
  const option3 = document.createElement("option");
  option3.setAttribute("id", "option");
  option3.textContent = "France";
  option3.value = parseInt("3");

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
      placeId: document.getElementById("option").value
    };
    api.saveForm(content);
  });
};
