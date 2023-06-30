// Phase 1A: Creating and appending new elements
const container = document.createElement('div');
container.setAttribute("class", 'container');

const h1 = document.createElement('h1')
h1.innerText = "Robin Dela Cruz"
container.appendChild(h1)
document.body.appendChild(container)

const ul = document.createElement('ul')
// ul.innerHTML = `<li>Aspiring Software Engineer</li>
//                 <li>I like creating cool stuffs</li>
//                 <li>Coding was became a passion</li>
//                 <li>I am Hoping for better future</li>`
// document.body.appendChild(ul)


// Phase 1B: Refactoring to make it programmatic

const about = ["Aspiring Software Engineer", "I like creating cool stuffs", "Coding was became a passion", "I am Hoping for better future", "I live in City, State, and it's currently [CLOCK] here"]

const list = about.map(likes => `<li>${likes}</li>`).join("\n");
ul.innerHTML = list
document.body.appendChild(ul)

// Phase 2: Adding CSS classes and styles

// Add a class name of name to the h1 containing your name.
h1.setAttribute("class", "name")
// Add a class name of my-details to the ul.
ul.setAttribute("class", "list-group")
// Add a class name of detail to each li element you created inside your list.
const liEl = document.querySelectorAll('li')
liEl.forEach(el => el.setAttribute("class", "list-item"))


// Phase 3: Adding a clock with the Date object
setInterval(() => {
    const dateContainer = document.createElement("div")
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()

    const formattedHour = hours === 0 ? 12 : hours
    const formattedDate = `${formattedHour}:${minutes}`
    dateContainer.innerText = formattedDate
    dateContainer.setAttribute("class", "date")

    // insert your clock into a new list item under your personal details
    const changedTime = about[about.length-1].split(" ").map(text => text === "[CLOCK]" ? `${formattedDate}` : text).join(" ")
    ul.childNodes[ul.childNodes.length -1].innerText = changedTime
}, 1000)


// Bonus A: Add more sections to your page
const image = document.createElement('img')
image.setAttribute('src', 'http://pm1.narvii.com/7621/7478e3f662fde98f1034f5d16de7e951f8266187r1-1080-1350v2_uhq.jpg')
image.setAttribute('class', 'avatar')
container.prepend(image)

const date = document.createElement('div');
date.setAttribute("class", "date");

function updateCountdown() {
    const currentDate = new Date();
    const targetDate = new Date('2023-08-20'); // Replace with your birthday date

    const timeRemaining = targetDate.getTime() - currentDate.getTime();

    if (timeRemaining <= 0) {
      document.getElementById('countdown').textContent = 'Happy Birthday!';
      return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const countdownText = `${days}d ${padTimeComponent(hours)}h ${padTimeComponent(minutes)}m ${padTimeComponent(seconds)}s`;
    date.innerHTML = `Time left until my birthday: <span class="countdown">${countdownText}</span>`
  }

  function padTimeComponent(timeComponent) {
    return timeComponent.toString().padStart(2, '0');
  }

  // Update the countdown every second
  setInterval(updateCountdown, 1000);
  document.body.append(date)
