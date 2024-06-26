const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal() {
  createText("Welcome to the subconscious!");
  await delay(700);
  createText("Follow the white rabbit...");
  await delay(1500);
  createText("You can run several commands:");

  createCode("about me", "");
  createCode("all", "");
  createCode("social -a", "");
  createCode("?", "");
  createCode("projects", "");
  // createCode("psyduck")

  await delay(500);
  new_line();
}

function new_line() {
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const span = document.createElement("span");
  span.setAttribute("class", "path");
  span.textContent = "shubham@linux-desktop:~$";
  const input = document.createElement("input");
  div.appendChild(span);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {
  const value = document.querySelector("input").value;
  if (value === "all") {
    trueValue(value);

    createCode(
      "projects",
      "My github page with my projects. Follow me there ;)"
    );
    createCode("About me");
    createCode("social -a");
    createCode("clear");
    createCode("?");
  } else if (value === "ls") {
    trueValue(value);
    createText("Everything in the directory is printed.");
  } else if (value === "mkdir") {
    trueValue(value);
    createText("You're making folders in my heart :)");
  } else if (value === "cd") {
    trueValue(value);
    createText("This is the root directory");
  } else if (value === "?") {
    trueValue(value);
    createText(
      "This is one of the mystery commands there are more mystery commands, keep looking.."
    );
  } else if (value === "projects") {
    trueValue(value);
    createText(
      "<a href='https://github.com/shubhamessier' target='_blank'><i class='fab fa-github white'></i> github.com/shubhamessier</a>"
    );
  } else if (
    value === "about me" ||
    value === "About" ||
    value === "About me"
  ) {
    trueValue(value);
    createText("Namaste");
    createText(
      "I'm Shubham Gaur a passionate Software Developer with experience in AI/ML, Cybersecurity and Backend development, Robotics, I'm currently a SDE @ Anti.AI & I've previously worked as a Summer Research Intern at NIT Trichy."
    );
  } else if (value === "more") {
    trueValue(value);
    createText("Ah I see you wanna know more of me.");
    createText(
      "I've been a active participant in different technical contests such as Techfest IITB, Ideathon IITJ and others, I'm the author of the blog, The Zero Days of Life, which is my personal blog about technology, life, relationships and my challenges. Also I believe Hacking is the most beautiful art in computer science, it liberates one's need on society and allows to work more openly, to get into places, to modify them and make their own. I am heavily inspired by my chilhood heroes, such as Linus, Kevin Mitnick, Snowden etc. I am a believer of open source, thus the ubuntu terminal."
    );
  } else if (value === "social -a") {
    trueValue(value);
    createText(
      "<a href='https://github.com/shubhamessier' target='_blank'><i class='fab fa-github white'></i> github.com/shubhamessier</a>"
    );
    createText(
      "<a href='https://www.linkedin.com/in/shubhamgaur10/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/shubhamgaur10</a>"
    );
    createText(
      "<a href='https://www.instagram.com/shubham.git/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/shubham.git</a>"
    );
    createText(
      "<a href='https://shubhamessier.github.io/TZDOL/' target='_blank'><i class='fab fa-github white'></i> The Zero Days of Life</a>"
    );
    createText(
      "<a href='https://www.x.com/0xshubhamgaur' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/shubhamgaur10</a>"
    );
  } else if (value === "social") {
    trueValue(value);
    createText("Didn't you mean: social -a?");
  } else if (value === "clear") {
    document.querySelectorAll("p").forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorAll("section")
      .forEach((e) => e.parentNode.removeChild(e));
  } else {
    falseValue(value);
    createText(`command not found: ${value}`);
  }
}

function trueValue(value) {
  createText(`shubham@linux-desktop:~$ ${value}`);
}

function falseValue(value) {
  createText(`shubham@linux-desktop:~$ ${value}`);
}

function createText(text, classname) {
  const p = document.createElement("p");

  p.innerHTML = text;
  if (classname) {
    p.className = classname;
  }
  app.appendChild(p);
}

function createCode(code, text) {
  const codeDiv = document.createElement("div");
  codeDiv.setAttribute("class", "code-container");

  const codeElement = document.createElement("span");
  codeElement.setAttribute("class", "code-text");
  codeDiv.appendChild(codeElement);

  const textElement = document.createElement("span");
  textElement.setAttribute("class", "text");
  codeDiv.appendChild(textElement);

  app.appendChild(codeDiv);

  const codeWords = code.split("");
  const textWords = text.split("");

  let codeIndex = 0;
  let textIndex = 0;

  const codeInterval = setInterval(() => {
    if (codeIndex < codeWords.length) {
      codeElement.textContent += codeWords[codeIndex];
      codeIndex++;
    } else {
      clearInterval(codeInterval);
      codeElement.textContent += "\n";
      const textInterval = setInterval(() => {
        if (textIndex < textWords.length) {
          textElement.textContent += textWords[textIndex];
          textIndex++;
        } else {
          clearInterval(textInterval);
        }
      }, Math.random() * 100 + 50);
    }
  }, Math.random() * 100 + 50);
}

open_terminal();
