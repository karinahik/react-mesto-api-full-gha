<<<<<<< HEAD
const BASE_URL = "https://api.karina.nomoreparties.sbs";
//const BASE_URL = "http://localhost:3000";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}`);
=======
const BASE_URL = "https://api.karina.nomoreparties.sbs"
// const BASE_URL = "http://localhost:3000";

function checkResponse(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`${res.status}`)
>>>>>>> 833141239074abf89643af3ab780df43b9160b12
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
<<<<<<< HEAD
  }).then(checkResponse);
};
=======
  }).then(checkResponse)
}
>>>>>>> 833141239074abf89643af3ab780df43b9160b12

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data.token) {
<<<<<<< HEAD
        localStorage.setItem("jwt", data.token);
        return data;
      }
    });
};
=======
        localStorage.setItem("jwt", data.token)
        return data
      }
    })
}
>>>>>>> 833141239074abf89643af3ab780df43b9160b12

export const checkToken = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
<<<<<<< HEAD
  }).then(checkResponse);
};
=======
  }).then(checkResponse)
}
>>>>>>> 833141239074abf89643af3ab780df43b9160b12
