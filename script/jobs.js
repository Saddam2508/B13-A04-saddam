// job trucker
const allJobs = document.getElementById('total');
const allInterviewJobs = document.getElementById('total-interview');
const allRejectedJobs = document.getElementById('total-rejected');

const totalJobs = document.getElementById('all-card');

allJobs.innerText = totalJobs.children.length;

// all button, all interview btn and all rejected btn
function handleMenu(element, id) {
  const buttons = document.querySelector('.selected-btn');
  Array.from(buttons.children).forEach((button) => {
    button.classList.remove('bg-blue-500', 'text-white');
  });
  element.classList.add('bg-blue-500', 'text-black');
  showOnly(id);
}

//interview btn
let interview = [];
let rejected = [];

document.getElementById('all-jobs').addEventListener('click', function (e) {
  if (e.target.classList.contains('interview-btn')) {
    const parentDiv = e.target.parentNode.parentNode;
    let name = parentDiv.children[0].children[0].innerText;
    let title = parentDiv.children[0].children[1].innerText;
    let salary = parentDiv.children[1].children[0].innerText;
    let jobDisc = parentDiv.children[2].children[1].innerText;
    let buttonPress = e.target.innerText.trim();
    let statusBefore = parentDiv.children[2].children[0].innerText
      .trim()
      .toLowerCase();

    if (statusBefore === 'interview' || statusBefore === 'rejected') {
      alert('Already selected');
      return;
    } else {
      if (buttonPress.toLowerCase() === 'interview') {
        parentDiv.children[2].children[0].innerText = buttonPress;
        parentDiv.children[2].children[0].className = 'btn bg-green-400';
      }
    }

    let buttonPressClx = e.target.className;

    let statusAfter = parentDiv.children[2].children[0].innerText;
    let statusButtonClx = parentDiv.children[2].children[0].className;
    const cardInfo = {
      name,
      title,
      salary,
      statusAfter,
      jobDisc,
      statusButtonClx,
      buttonPressClx,
    };
    interview.push(cardInfo);
    allInterviewJobs.innerText = interview.length;
    interviewCard(cardInfo);
  }
  if (e.target.classList.contains('rejected-btn')) {
    const parentDiv = e.target.parentNode.parentNode;
    let name = parentDiv.children[0].children[0].innerText;
    let title = parentDiv.children[0].children[1].innerText;
    let salary = parentDiv.children[1].children[0].innerText;
    let jobDisc = parentDiv.children[2].children[1].innerText;
    let buttonPress = e.target.innerText.trim();
    let statusBefore = parentDiv.children[2].children[0].innerText
      .trim()
      .toLowerCase();

    if (statusBefore === 'interview' || statusBefore === 'rejected') {
      alert('Already selected');
      return;
    } else {
      if (buttonPress.toLowerCase() === 'rejected') {
        parentDiv.children[2].children[0].innerText = buttonPress;
        parentDiv.children[2].children[0].className = 'btn bg-red-400';
      }
    }

    let buttonPressClx = e.target.className;

    let statusAfter = parentDiv.children[2].children[0].innerText;
    let statusButtonClx = parentDiv.children[2].children[0].className;
    const cardInfo = {
      name,
      title,
      salary,
      statusAfter,
      jobDisc,
      statusButtonClx,
      buttonPressClx,
    };
    rejected.push(cardInfo);
    allRejectedJobs.innerText = rejected.length;
    rejectedCard(cardInfo);
  }
});

document
  .getElementById('interview-jobs')
  .addEventListener('click', function (e) {
    if (e.target.classList.contains('rejected-btn')) {
      const parentDiv = e.target.closest('.card');
      if (!parentDiv) return;
      parentDiv.remove();

      const allCardDivs = Array.from(
        document.getElementById('all-card').children
      );

      const name = parentDiv.querySelector('h2').innerText.trim();
      const title = parentDiv.querySelector('p').innerText.trim();

      const mainCard = allCardDivs.find(
        (card) =>
          card.querySelector('h2').innerText === name &&
          card.querySelector('p').innerText === title
      );

      if (mainCard) {
        mainCard.querySelector('div:nth-child(3) button').innerText =
          'Rejected';
        mainCard.querySelector('div:nth-child(3) button').className =
          'btn bg-red-400';
      }

      interview = interview.filter((card) => card.statusAfter !== 'interview');

      const cardInfo = {
        name: parentDiv.querySelector('h2').innerText,
        title: parentDiv.querySelector('p').innerText,
        salary: parentDiv.querySelector('div:nth-child(2) p').innerText,
        jobDisc: parentDiv.querySelector('div:nth-child(3) p').innerText,
        statusAfter: 'rejected',
        statusButtonClx: 'btn bg-red-400',
        buttonPressClx: 'rejected-btn btn border-2 border-red-400 text-red-400',
      };
      rejected.push(cardInfo);
      rejectedCard(cardInfo);
      // counter update
      allInterviewJobs.innerText = interview.length;
      allRejectedJobs.innerText = rejected.length;
    }
  });

document
  .getElementById('rejected-jobs')
  .addEventListener('click', function (e) {
    if (e.target.classList.contains('interview-btn')) {
      const parentDiv = e.target.closest('.card');
      if (!parentDiv) return;
      parentDiv.remove();

      const allCardDivs = Array.from(
        document.getElementById('all-card').children
      );

      const name = parentDiv.querySelector('h2').innerText.trim();
      const title = parentDiv.querySelector('p').innerText.trim();

      const mainCard = allCardDivs.find(
        (card) =>
          card.querySelector('h2').innerText === name &&
          card.querySelector('p').innerText === title
      );

      if (mainCard) {
        mainCard.querySelector('div:nth-child(3) button').innerText =
          'interview';
        mainCard.querySelector('div:nth-child(3) button').className =
          'btn bg-green-400';
      }

      rejected = rejected.filter((card) => card.statusAfter !== 'rejected');

      const cardInfo = {
        name: parentDiv.querySelector('h2').innerText,
        title: parentDiv.querySelector('p').innerText,
        salary: parentDiv.querySelector('div:nth-child(2) p').innerText,
        jobDisc: parentDiv.querySelector('div:nth-child(3) p').innerText,
        statusAfter: 'interview',
        statusButtonClx: 'btn bg-green-400',
        buttonPressClx:
          'interview-btn btn border-2 border-green-400 text-green-400',
      };
      interview.push(cardInfo);
      interviewCard(cardInfo);
      // counter update
      allInterviewJobs.innerText = interview.length;
      allRejectedJobs.innerText = rejected.length;
    }
  });

function interviewCard(info) {
  const interviewId = document.getElementById('interview-card');
  const div = document.createElement('div');
  div.className = 'card flex flex-row justify-between bg-white p-6';
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
  const interviewId = document.getElementById('rejected-card');
  const div = document.createElement('div');
  div.className = 'card flex flex-row justify-between bg-white p-6';
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


// interview jobs for delete button
document
  .getElementById('interview-jobs')
  .addEventListener('click', function (e) {
    
    const btn = e.target.closest('.delete-btn');
    if (!btn) return;

    const parentDiv = btn.closest('.card');
    if (!parentDiv) return;

   
    const name = parentDiv.querySelector('h2')?.innerText.trim();
    const title = parentDiv.querySelector('p')?.innerText.trim();

    
    parentDiv.remove();

    const interviewCardContainer = document.getElementById('interview-card');
    const allInterviewJobs = document.getElementById('total-interview');
    allInterviewJobs.innerText = interviewCardContainer.children.length;

    
    const totalJobs = document.getElementById('all-card');
    const allJobs = document.getElementById('total');
    allJobs.innerText = totalJobs.children.length;

    // Update main card status to 'Not Applied'
    const mainCard = Array.from(totalJobs.children).find((card) => {
      const cName = card.querySelector('h2').innerText.trim();
      const cTitle = card.querySelector('p').innerText.trim();
      return cName === name && cTitle === title;
    });

    if (mainCard) {
      const statusBtn = mainCard.querySelector('div:nth-child(3) button');
      if (statusBtn) {
        statusBtn.innerText = 'Not Applied';
        statusBtn.className = 'btn bg-gray-300 text-black';
      }
    }

   
    interview = interview.filter(
      (card) => !(card.name === name && card.title === title)
    );

    
    rejected = rejected.filter(
      (card) => !(card.name === name && card.title === title)
    );

   
    allInterviewJobs.innerText = interview.length;
    const allRejectedJobs = document.getElementById('total-rejected');
    allRejectedJobs.innerText = rejected.length;
  });


  // rejected jobs for delete button
document
  .getElementById('rejected-jobs')
  .addEventListener('click', function (e) {
    
    const btn = e.target.closest('.delete-btn');
    if (!btn) return;

    const parentDiv = btn.closest('.card');
    if (!parentDiv) return;

   
    const name = parentDiv.querySelector('h2')?.innerText.trim();
    const title = parentDiv.querySelector('p')?.innerText.trim();

    
    parentDiv.remove();

    const interviewCardContainer = document.getElementById('rejected-card');
    const allInterviewJobs = document.getElementById('total-rejected');
    allInterviewJobs.innerText = interviewCardContainer.children.length;

    
    const totalJobs = document.getElementById('all-card');
    const allJobs = document.getElementById('total');
    allJobs.innerText = totalJobs.children.length;

    // Update main card status to 'Not Applied'
    const mainCard = Array.from(totalJobs.children).find((card) => {
      const cName = card.querySelector('h2').innerText.trim();
      const cTitle = card.querySelector('p').innerText.trim();
      return cName === name && cTitle === title;
    });

    if (mainCard) {
      const statusBtn = mainCard.querySelector('div:nth-child(3) button');
      if (statusBtn) {
        statusBtn.innerText = 'Not Applied';
        statusBtn.className = 'btn bg-gray-300 text-black';
      }
    }

   
    interview = interview.filter(
      (card) => !(card.name === name && card.title === title)
    );

    
    rejected = rejected.filter(
      (card) => !(card.name === name && card.title === title)
    );

   
    allInterviewJobs.innerText = interview.length;
    const allRejectedJobs = document.getElementById('total-rejected');
    allRejectedJobs.innerText = rejected.length;
  });
