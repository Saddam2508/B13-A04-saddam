const allJobs = document.getElementById("total");

const totalJobs = document.getElementById("all-card");

allJobs.innerText = totalJobs.children.length;

function handleMenu(element, id) {
  const buttons = document.querySelector(".selected-btn");
  Array.from(buttons.children).forEach((button) => {
    button.classList.remove("bg-blue-500", "text-white");
  });
  element.classList.add("bg-blue-500", "text-black");
  showOnly(id);
}

// document.getElementById("all-jobs").addEventListener("click", function (e) {
//   console.dir(e.target);
//   let interview = [];
//   let rejected = [];

//   if (e.target.classList.contains("btn-com")) {
//     const buttons = document.querySelector(".selected-btn");
//     Array.from(buttons.children).forEach((button) => {
//       button.classList.remove("bg-blue-500", "text-white");
//     });

//     const selectedBtn = e.target;
//     selectedBtn.classList.add("bg-blue-500", "text-black");

//     showOnly(selectedBtn.id);
//     if (selectedBtn) {
//       interviewCard();
//     }
//   }

// });

function interviewCard() {
  const interviewId = document.getElementById("interview-card");
  const div = document.createElement("div");
  div.className = "card flex flex-row justify-between bg-white p-6";
  div.innerHTML = `
   <div class="left space-y-6">
              <div class="space-y-2">
                <h2 class="text-2xl font-bold">Mobile First Corp</h2>
                <p>React Native Developer</p>
              </div>
              <div>
                <p>React Native Developer</p>
              </div>
              <div class="space-y-2">
                <button class="btn">Not Applied</button>
                <p>
                  Build cross-platform mobile applications using React Native.
                  Work on products used by millions of users worldwide.
                </p>
              </div>
              <div class="flex gap-5">
                <button class="btn border-2 border-green-400 text-green-400">
                  interview
                </button>
                <button class="btn border-2 border-red-400 text-red-400">
                  Rejected
                </button>
              </div>
            </div>
            <div class="right">
              <div class="">
                <button class="btn rounded-full p-2">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
  `;
  interviewId.appendChild(div);
}
