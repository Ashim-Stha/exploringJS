const users = fetch("https://jsonplaceholder.typicode.com/users");
console.log(users);
//above method stays on pending state

const users1 = fetch("https://jsonplaceholder.typicode.com/users")
  .then((respose) => {
    console.log(respose);
    return respose.json();
  })
  .then((data) => {
    console.log(data);

    data.forEach((val) => {
      console.log(val);
    });
  });

const getJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonRes = await response.json();

  console.log(jsonRes);
  //   console.log(jsonRes.joke);
};

getJoke();

const getJokeText = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "text/plain",
    },
  });
  const textRes = await response.text();

  console.log(textRes);
};

getJokeText();

const jokes = {
  id: "S7wHQKJe2wc",
  joke: "How are false teeth like stars? They come out at night!",
};

const postJoke = async (joke) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joke),
  });

  const jsonRes = await response.json();
  console.log(jsonRes);
};

postJoke(jokes);
