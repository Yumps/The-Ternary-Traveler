import api from "./dbCalls";
import interest from "./interest";

export default () => {
  api.getInterestsWithPlaces().then(data => {
    data.forEach(article => {
      interest(article);
    });
  });
};
