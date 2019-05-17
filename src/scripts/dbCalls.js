const baseURL = "http://localhost:8088";

const APIManager = {
  getAllPlaces: function() {
    return fetch(`${baseURL}/places`).then(response => response.json());
  },
  getInterestsWithPlaces: function() {
    return fetch(`${baseURL}/interests?_expand=place`).then(response =>
      response.json()
    );
  },
  saveForm: function(data) {
    return fetch(`${baseURL}/interests`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
  },
  deleteInterest: function(id) {
    return fetch(`${baseURL}/interests/${id}`, {
      method: "DELETE"
    }).then(response => response.json());
  },
  editInterest: function(id, data) {
    return fetch(`${baseURL}/interests/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }
};

export default APIManager;
