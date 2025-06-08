const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);
paragraph.style.color = "red";

const heading = document.createElement("h3");
heading.classList.add("heading");
heading.textContent = "I'm a blue h3!";
container.appendChild(heading);
heading.style.color = "blue";

const div = document.createElement("div");
div.classList.add("div");
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";
const divheading = document.createElement("h1");
divheading.textContent = "I'm in a div";
divheading.style.color = "red";
divheading.onmouseover = () => {
    divheading.style.color = "blue";
};
divheading.onmouseout = () => {
    divheading.style.color = "red";
};
divheading.addEventListener("dblclick", () => {
    divheading.style.color = "yellow";
});
div.appendChild(divheading);
const divparagraph = document.createElement("p");
divparagraph.textContent = "ME TOO!";
divparagraph.style.color = "green";
divparagraph.onmouseover = () => {
    divparagraph.style.color = "orange";
};
divparagraph.onmouseout = () => {
    divparagraph.style.color = "green";
};
div.appendChild(divparagraph);
container.appendChild(div);