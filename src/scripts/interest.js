import api from "./dbCalls";

const root = document.getElementById("container");

const interestFunction = interest => {
  const interestDIV = document.createElement("div");
  root.appendChild(interestDIV);

  const placeOfInterest = document.createElement("h2");
  interestDIV.appendChild(placeOfInterest);
  const place = document.createTextNode(`${interest.place.name}`);
  placeOfInterest.appendChild(place);

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

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "delete-button");
  deleteButton.textContent = "Delete";
  interestDIV.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    const confirmDelete = () => {
      const del = confirm("Are you sure you want to delete?");
      if (del) {
        alert("Successfully Deleted!");
        api.deleteInterest(interest.id);
      } else {
        alert("Your interest was not deleted!");
      }
    };
    confirmDelete();
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

    const interestLocationEdit = document.createElement("select");

    const optionEdit1 = document.createElement("option");
    optionEdit1.setAttribute("id", "option");
    optionEdit1.setAttribute("value", "1");
    optionEdit1.textContent = "Italy";

    const optionEdit2 = document.createElement("option");
    optionEdit2.setAttribute("id", "option");
    optionEdit2.setAttribute("value", "2");
    optionEdit2.textContent = "Switzerland";

    const optionEdit3 = document.createElement("option");
    optionEdit3.setAttribute("id", "option");
    optionEdit3.setAttribute("value", "3");
    optionEdit3.textContent = "France";

    interestLocationEdit.appendChild(optionEdit1);
    interestLocationEdit.appendChild(optionEdit2);
    interestLocationEdit.appendChild(optionEdit3);

    editDIV.appendChild(nameInputEdit);
    editDIV.appendChild(descInputEdit);
    editDIV.appendChild(costInputEdit);
    editDIV.appendChild(reviewInputEdit);
    editDIV.appendChild(interestLocationEdit);
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
        review: reviewInputEdit.value,
        placeId: interestLocationEdit.value
      };
      api.editInterest(interest.id, changes);
    });
  });
};

export default interestFunction;
