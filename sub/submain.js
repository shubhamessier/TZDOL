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
  createText("Welcome to the subconscious");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");

  createCode("about me", "Who am i and what do i do.");
  createCode("all", "See all commands.");
  createCode("social -a", "All my social networks.");
  createCode("?", "?");

  await delay(500);
  new_line();
}

function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "Shubham@linux-desktop:~$";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
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
  } else if (value === "about me") {
    trueValue(value);
    createText("Namaste");
    createText(
      "I'm Shubham Gaur a passionate Software Developer with experience in AI/ML, Cybersecurity and Backend development, Robotics, I'm currently a SDE @ Anti.AI & I've previously worked as a Summer Research Intern at NIT Trichy."
    );
  } else if (value === "more") {
    trueValue(value);
    createText("Ah I see you wanna know more of me.");
    createText(
      "I've been a active participant in different technical contests such as Techfest IITB, Ideathon IITJ and others, I'm the author of the blog, The Zero Days of Life, which is my personal blog about technology, life and my challenges. I believe Hacking is the most beautiful art in computer science, it liberates one's need of dependence on society and allows to work more openly. I am heavily inspired by my chilhood heroes, such as Linus, Kevin Mitnick, Snowden etc. Also I am a believer of open source, thus the ubuntu terminal."
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
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
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
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  app.appendChild(p);

  const codeWords = code.split("");
  const textWords = text.split("");

  let codeIndex = 0;
  let textIndex = 0;

  const codeInterval = setInterval(() => {
    if (codeIndex < codeWords.length) {
      p.innerHTML += codeWords[codeIndex];
      codeIndex++;
    } else {
      clearInterval(codeInterval);
      p.innerHTML += "<br/>";
      const textInterval = setInterval(() => {
        if (textIndex < textWords.length) {
          p.querySelector(".text").innerHTML += textWords[textIndex];
          textIndex++;
        } else {
          clearInterval(textInterval);
        }
      }, Math.random() * 100 + 50);
    }
  }, Math.random() * 100 + 50);
}

open_terminal();
