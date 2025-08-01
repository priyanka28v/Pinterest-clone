export function Api({ email, password, birthdate, type, formData,id,boardName }) {
  let url = "";
  let payload = {};
  let isFormData = false;
  let method = "POST";

  if (type === "login") {
    url = "http://localhost:5000/login";
    payload = { email, password };
  } else if (type === "signup") {
    url = "http://localhost:5000/signup";
    payload = { email, password, birthdate };
  } else if (type === "CreatePin") {
    url = "http://localhost:5000/CreatePin";
    isFormData = true;
    payload = formData;
  } else if (type === "NewHome") {
    url = "http://localhost:5000/NewHome";
    method = "GET";
  }
  else if (type === "NewHomeById") {
    url = `http://localhost:5000/NewHome/${id}`;
    method = "GET";
  }
  else if(type==="likes"){
    url=`http://localhost:5000/likes/${id}`
    method="PUT"
  }
  else if(type=="comments"){
    url=`http://localhost:5000/comments/${id}`
    method="PUT";
    payload = formData
  }
  else if(type=="savePin"){
    url=`http://localhost:5000/savePin/${id}`
    method="POST"
  }
  else if(type=="pins"){
    url=`http://localhost:5000/pins/${id}`
    method="GET"
  }
  else if(type=="boards"){
    url=`http://localhost:5000/boards`
    method="POST"
    payload={ boardName }
  }
  else if(type=="getBoard"){
    url=`http://localhost:5000/getBoards`
    method="GET"
  }

  const headers =
    method === "GET"
      ? undefined
      : isFormData
      ? undefined
      : { "Content-Type": "application/json" };

  return fetch(url, {
    method,
    headers,
    credentials: "include",  // important for  send cookies
    body: method === "GET" ? undefined : isFormData ? payload : JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
    // console.log("API JSON →", data);
    return data;
  })
    .catch((err) => {
      console.error("Network/API error:", err.message);
      throw err;
    });
}
