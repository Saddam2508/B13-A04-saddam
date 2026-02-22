function interviewCard(info) {
  const interviewId = document.getElementById("interview-card");
  const div = document.createElement("div");
  div.className = "card flex flex-row justify-between bg-white p-6";
  div.innerHTML = `
   <div class="left space-y-6">
              <div class="space-y-2">
                <h2 class="text-2xl font-bold">${info.name}</h2>
                <p>
                ${info.title}
                </p>
              </div>
              <div>
                <p>${info.salary}</p>
              </div>
              <div class="space-y-2">
                <button class="${info.statusButtonClx}">${info.statusAfter}</button>
                <p>
                  ${info.jobDisc}
                </p>
              </div>
              <div class="flex gap-5">
                <button class=" interview-btn ${info.buttonPressClx}">
                  interview
                </button>
                <button class="rejected-btn btn border-2 border-red-400 text-red-400">
                  Rejected
                </button>
              </div>
            </div>
            <div class="right">
              <div class="">
                <button class="delete-btn btn rounded-full p-2">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
  `;
  interviewId.appendChild(div);
}
function rejectedCard(info) {
  const interviewId = document.getElementById("rejected-card");
  const div = document.createElement("div");
  div.className = "card flex flex-row justify-between bg-white p-6";
  div.innerHTML = `
   <div class="left space-y-6">
              <div class="space-y-2">
                <h2 class="text-2xl font-bold">${info.name}</h2>
                <p>
                ${info.title}
                </p>
              </div>
              <div>
                <p>${info.salary}</p>
              </div>
              <div class="space-y-2">
                <button class="${info.statusButtonClx}">${info.statusAfter}</button>
                <p>
                  ${info.jobDisc}
                </p>
              </div>
              <div class="flex gap-5">
                <button class="interview-btn btn border-2 border-green-400 text-green-400">
                  interview
                </button>
                <button class=" rejected-btn ${info.buttonPressClx}">
                  Rejected
                </button>
              </div>
            </div>
            <div class="right">
              <div class="">
                <button class="delete-btn btn rounded-full p-2">
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
  `;
  interviewId.appendChild(div);
}
