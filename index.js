let body = document.querySelector("body");

fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => {
    for (let i = 0; i < 10; i++) {
        let user = data[i];

        let body = document.querySelector("body")
        let box = document.createElement("div");
        let name = document.createElement("h2");
        let username = document.createElement("p");
        let list = document.createElement("ul");
        let email = document.createElement("li");
        let address = document.createElement("li");
        let phone = document.createElement("li");

        box.classList.add("box");

        name.textContent = user.name;
        username.textContent = user.username;
        phone.textContent = user.phone;
        email.textContent = user.email;
        address.textContent = user.address.city;

        list.appendChild(phone);
        list.appendChild(email);
        list.appendChild(address);

        box.appendChild(name)
        box.appendChild(username)
        box.appendChild(list)

        body.appendChild(box);
    }
});