export const actionJson = (json) => ({
  type: "JSON_ACTION",
  payload: json.message,
});

export const actionRequest = () => ({ type: "REQUEST_ACTION" });

export const actionFailed = () => ({
  type: "FAILED_ACTION",
});

export function fetchAction() {
  return (dispatch) => {
    dispatch(actionRequest());
    return fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((json) => dispatch(actionJson(json)))
      .catch((error) => dispatch(actionFailed(error)));
  };
}

/* sum two itens
 */

