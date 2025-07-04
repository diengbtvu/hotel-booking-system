// Use relative path for API calls - nginx will proxy to backend
const baseUrl = process.env.NODE_ENV === 'production' ? "/api" : "http://localhost:8080";
export { login, getAllRoomTypes };

const login = (username, password) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
  };
  const url = baseUrl + "/login";
  return fetch(url, requestOptions);
};

const getAllRoomTypes = () => {
  const requestOptions = {
    method: "GET",
  };
  const url = baseUrl + "/roomType";
  return fetch(url, requestOptions);
};
