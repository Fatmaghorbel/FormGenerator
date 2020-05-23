export const readCookie = (name) => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
export const createCookie = () => {
  return readCookie("X-Bonita-API-Token");
};

export const getCookie = () => {
  let cookie = readCookie();
  console.log(cookie);
};

export const setCookie = (value) => {
  let newCookie = createCookie();
  console.log(newCookie);
  sessionStorage.setItem("Cookie", newCookie);
};

export const getUrlParam = () => {
  let vars = {};
  let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(
    m,
    key,
    value
  ) {
    vars[key] = value;
  });
  return vars;
};

export const setTaskId = () => {
  let id = getUrlParam()["id"];
  sessionStorage.setItem("taskId", id);
};

export const getTaskId = () => {
  return sessionStorage.getItem("taskId");
};

/*export const buildURLForm = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      const process = JSON.parse(xhttp.responseText);

      let startUrl = "http://localhost:8080/bonita/portal/resource/process/";

      startUrl += process.name + "/";

      startUrl += process.version + "/";

      startUrl += "/content/?id=" + process.id;

      document.getElementById("yourLink").href = startUrl;
    }
  };

  xhttp.open("GET", "ajax_info.txt", true);

  xhttp.send();
};
*/
/*
  getContractFields = () => {
    let taskId = getTaskId();
    get(`/bonita/API/bpm/userTask/${taskId}/contract`).then((res) => {
      console.log(res.data);
      this.setState({
        inputs: res.data.inputs 
      });
      console.log(this.state.inputs[0].inputs[0].name);
      console.log(this.state.inputs[0].inputs[1].name); //requestName
      //requestName
      console.log(this.state.inputs[0].name); //requestName
    });
  }; 
*/
