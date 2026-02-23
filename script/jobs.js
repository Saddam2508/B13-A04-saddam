// job trucker
let interview = [];
let rejected = [];

//total job count for card
const allJobs = document.getElementById('total');
const allInterviewJobs = document.getElementById('total-interview');
const allRejectedJobs = document.getElementById('total-rejected');

const totalJobs = document.getElementById('all-card');

allJobs.innerText = totalJobs.children.length - 1;

//total job count for button right section
const allJobsCount = document.getElementById('all-count');
allJobsCount.innerText = `${totalJobs.children.length - 1} of ${allJobs.innerText}`;

const allInterviewJobsCount = document.getElementById('interview-count');
allInterviewJobsCount.innerText = `${interview.length} of ${allJobs.innerText}`;

const allRejectedJobsCount = document.getElementById('rejected-count');
allRejectedJobsCount.innerText = `${rejected.length} of ${allJobs.innerText}`;

// all button, all interview btn and all rejected btn
function handleMenu(element, id, countId) {
  const buttons = document.querySelector('.selected-btn');
  Array.from(buttons.children).forEach((button) => {
    button.classList.remove('bg-blue-500', 'text-white');
  });
  element.classList.add('bg-blue-500', 'text-black');
  showOnly(id, countId);
  noInterviewAvailable();
  noRejectedAvailable();
  noAllJobsAvailable();
}

//interview btn

document.getElementById('all-jobs').addEventListener('click', function (e) {
  // interview job create
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
    noInterviewAvailable();
    const allInterviewJobsCount = document.getElementById('interview-count');
    allInterviewJobsCount.innerText = `${interview.length} of ${allJobs.innerText}`;
  }

  // rejected jobs create
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
    noRejectedAvailable();
    const allRejectedJobsCount = document.getElementById('rejected-count');
    allRejectedJobsCount.innerText = `${rejected.length} of ${allJobs.innerText}`;
  }
});
// interview jobs transfer

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
          card.querySelector('h2').innerText.trim() === name &&
          card.querySelector('p').innerText.trim() === title
      );

      if (mainCard) {
        mainCard.querySelector('div:nth-child(3) button').innerText =
          'Rejected';
        mainCard.querySelector('div:nth-child(3) button').className =
          'btn bg-red-400';
      }

      interview = interview.filter(
        (card) => !(card.name.trim() === name && card.title.trim() === title)
      );

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
      const allInterviewJobsCount = document.getElementById('interview-count');
      allInterviewJobsCount.innerText = `${interview.length} of ${allJobs.innerText}`;
      const allRejectedJobsCount = document.getElementById('rejected-count');
      allRejectedJobsCount.innerText = `${rejected.length} of ${allJobs.innerText}`;
      noInterviewAvailable();
    }
  });

//reject jobs transfer
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
          card.querySelector('h2').innerText.trim() === name &&
          card.querySelector('p').innerText.trim() === title
      );

      if (mainCard) {
        mainCard.querySelector('div:nth-child(3) button').innerText =
          'interview';
        mainCard.querySelector('div:nth-child(3) button').className =
          'btn bg-green-400';
      }

      rejected = rejected.filter(
        (card) => !(card.name.trim() === name && card.title.trim() === title)
      );

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
      allRejectedJobs.innerText = rejected.length;
      allInterviewJobs.innerText = interview.length;
      const allInterviewJobsCount = document.getElementById('interview-count');
      allInterviewJobsCount.innerText = `${interview.length} of ${allJobs.innerText}`;
      const allRejectedJobsCount = document.getElementById('rejected-count');
      allRejectedJobsCount.innerText = `${rejected.length} of ${allJobs.innerText}`;
      noRejectedAvailable();
    }
  });

// interview jobs for delete button
document
  .getElementById('interview-jobs')
  .addEventListener('click', function (e) {
    const btn = e.target.closest('.delete-btn');
    if (!btn) return;

    const parentDiv = btn.closest('.card');
    if (!parentDiv) return;

    const name = parentDiv.querySelector('h2').innerText.trim();
    const title = parentDiv.querySelector('p').innerText.trim();

    parentDiv.remove();

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
      (card) => !(card.name.trim() === name && card.title.trim() === title)
    );

    const allInterviewJobs = document.getElementById('total-interview');
    allInterviewJobs.innerText = interview.length;

    const allInterviewJobsCount = document.getElementById('interview-count');
    allInterviewJobsCount.innerText = `${interview.length} of ${allJobs.innerText}`;
    noInterviewAvailable();
  });

// rejected jobs for delete button
document
  .getElementById('rejected-jobs')
  .addEventListener('click', function (e) {
    const btn = e.target.closest('.delete-btn');
    if (!btn) return;

    const parentDiv = btn.closest('.card');
    if (!parentDiv) return;

    const name = parentDiv.querySelector('h2').innerText.trim();
    const title = parentDiv.querySelector('p').innerText.trim();
    parentDiv.remove();

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

    rejected = rejected.filter(
      (card) => !(card.name.trim() === name && card.title.trim() === title)
    );

    const allRejectedJobs = document.getElementById('total-rejected');
    allRejectedJobs.innerText = rejected.length;
    const allRejectedJobsCount = document.getElementById('rejected-count');
    allRejectedJobsCount.innerText = `${rejected.length} of ${allJobs.innerText}`;
    noRejectedAvailable();
  });
