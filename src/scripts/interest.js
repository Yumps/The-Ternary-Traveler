import api from "./dbCalls";

const root = document.getElementById("container");

const interestFunction = interest => {
  const interestDIV = document.createElement("div");
  root.appendChild(interestDIV);

  const interestName = document.createElement("h3");
  interestDIV.appendChild(interestName);
  const nameText = document.createTextNode(`${interest.name}`);
  interestName.appendChild(nameText);

  const interestDesc = document.createElement("p");
  interestDIV.appendChild(interestDesc);
  const descText = document.createTextNode(`${interest.description}`);
  interestDesc.appendChild(descText);

  const interestCost = document.createElement("p");
  interestDIV.appendChild(interestCost);
  const costText = document.createTextNode(`${interest.cost}`);
  interestCost.appendChild(costText);

  const review = document.createElement("p");
  interestDIV.appendChild(review);
  const reviewText = document.createTextNode(`${interest.review}`);
  review.appendChild(reviewText);

  const placeOfInterest = document.createElement("p");
  interestDIV.appendChild(placeOfInterest);
  const place = document.createTextNode(`${interest.place.name}`);
  placeOfInterest.appendChild(place);

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "delete-button");
  deleteButton.textContent = "Delete";
  interestDIV.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    api.deleteInterest(interest.id);
  });

  const editButton = document.createElement("button");
  editButton.setAttribute("id", "edit-button");
  editButton.textContent = "Edit";
  interestDIV.appendChild(editButton);
  editButton.addEventListener("click", () => {
    const editContainer = document.createElement("div");
    const editDIV = document.createElement("form");
    const nameInputEdit = document.createElement("input");
    nameInputEdit.setAttribute("placeholder", "Name of Interest");
    nameInputEdit.setAttribute("value", interest.name);
    const descInputEdit = document.createElement("input");
    descInputEdit.setAttribute("placeholder", "Description");
    descInputEdit.setAttribute("value", interest.description);
    const costInputEdit = document.createElement("input");
    costInputEdit.setAttribute("placeholder", "Cost of Interest");
    costInputEdit.setAttribute("value", interest.cost);
    const reviewInputEdit = document.createElement("input");
    reviewInputEdit.setAttribute("placeholder", "Review");
    reviewInputEdit.setAttribute("value", interest.review);
    // const placeIdEdit = document.createElement("input")
    // placeIdEdit.setAttribute("placeholder", "Location")

    editDIV.appendChild(nameInputEdit);
    editDIV.appendChild(descInputEdit);
    editDIV.appendChild(costInputEdit);
    editDIV.appendChild(reviewInputEdit);
    editContainer.appendChild(editDIV);
    root.appendChild(editContainer);

    const editSave = document.createElement("button");
    editSave.textContent = "Save Edits";
    editContainer.appendChild(editSave);

    editSave.addEventListener("click", () => {
      const changes = {
        name: nameInputEdit.value,
        description: descInputEdit.value,
        cost: costInputEdit.value,
        review: reviewInputEdit.value
        placeId: placeIdEdit.value
      };
      api.editInterest(interest.id, changes);
    });
  });
};

export default interestFunction;
