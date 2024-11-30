function isValidURL(url) {
  const regex =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  return regex.test(url);
}

function handleSubmit(event) {
  event.preventDefault();
  let formText = document.getElementById("name").value;
  if (isValidURL(formText)) {
    postData("http://localhost:8000/api", { url: formText })
      .then(function (res) {
        document.getElementById("results").innerHTML = `
                    <p><strong>Polarity:</strong> ${polarityChecker(
                      res.score_tag
                    )}</p>
                    <p><strong>Agreement:</strong> ${res.agreement}</p>
                    <p><strong>Subjectivity:</strong> ${res.subjectivity}</p>
                    <p><strong>Confidence:</strong> ${res.confidence}</p>
                    <p><strong>Irony:</strong> ${res.irony}</p>
                `;
      })
      .catch((error) => {
        document.getElementById(
          "results"
        ).innerHTML = `<p style="color: red;">Error fetching results. Please try again.</p>`;
      });
  } else {
    alert("Seems like an invalid URL, please try with a valid URL.");
  }
}

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const newData = await response.json();
  return newData;
};

const polarityChecker = (score) => {
  switch (score) {
    case "P+":
      return "STRONG POSITIVE";
    case "P":
      return "POSITIVE";
    case "NEW":
      return "NEUTRAL";
    case "N":
      return "NEGATIVE";
    case "N+":
      return "STRONG NEGATIVE";
    case "NONE":
      return "NO SENTIMENT";
  }
};

const formElement = document.getElementById("urlForm");
if (formElement) {
  formElement.addEventListener("submit", handleSubmit);
}

export { handleSubmit, isValidURL, polarityChecker };
