function showOnly(id, countId) {
  const allJobs = document.getElementById('all-jobs');
  const interview = document.getElementById('interview-jobs');
  const rejected = document.getElementById('rejected-jobs');
  const allCount = document.getElementById('all-count');
  const interviewCount = document.getElementById('interview-count');
  const rejectedCount = document.getElementById('rejected-count');

  allJobs.classList.add('hidden');
  interview.classList.add('hidden');
  rejected.classList.add('hidden');
  allCount.classList.add('hidden');
  interviewCount.classList.add('hidden');
  rejectedCount.classList.add('hidden');

  const selected = document.getElementById(id);
  selected.classList.remove('hidden');
  const selectedCount = document.getElementById(countId);
  selectedCount.classList.remove('hidden');
}

//all jobs for delete button
document.getElementById('all-jobs').addEventListener('click', function (e) {
  const btn = e.target.closest('.delete-btn');
  if (!btn) return;

  const parentDiv = btn.closest('.card');
  if (!parentDiv) return;
  const name = parentDiv.querySelector('h2').innerText.trim();
  const title = parentDiv.querySelector('p').innerText.trim();
  parentDiv.remove();

  // remove from interview section DOM
  const interviewCards = document.querySelectorAll('#interview-card .card');
  interviewCards.forEach((card) => {
    const cName = card.querySelector('h2').innerText.trim();
    const cTitle = card.querySelector('p').innerText.trim();

    if (cName === name && cTitle === title) {
      card.remove();
    }
  });

  // remove from rejected section DOM
  const rejectedCards = document.querySelectorAll('#rejected-card .card');
  rejectedCards.forEach((card) => {
    const cName = card.querySelector('h2').innerText.trim();
    const cTitle = card.querySelector('p').innerText.trim();

    if (cName === name && cTitle === title) {
      card.remove();
    }
  });

  interview = interview.filter(
    (card) => !(card.name.trim() === name && card.title.trim() === title)
  );

  rejected = rejected.filter(
    (card) => !(card.name.trim() === name && card.title.trim() === title)
  );

  //count update
  const totalJobs = document.getElementById('all-card');
  const allJobs = document.getElementById('total');
  allJobs.innerText = totalJobs.children.length - 1;
  const allJobsCount = document.getElementById('all-count');
  allJobsCount.innerText = `${totalJobs.children.length - 1} of ${allJobs.innerText}`;
  noAllJobsAvailable();
  const allInterviewJobsCount = document.getElementById('interview-count');
  allInterviewJobsCount.innerText = `${interview.length} of ${allJobs.innerText}`;
  const allInterviewJobs = document.getElementById('total-interview');
  allInterviewJobs.innerText = interview.length;
  noInterviewAvailable();
  const allRejectedJobsCount = document.getElementById('rejected-count');
  allRejectedJobsCount.innerText = `${rejected.length} of ${allJobs.innerText}`;
  const allRejectedJobs = document.getElementById('total-rejected');
  allRejectedJobs.innerText = rejected.length;
  noRejectedAvailable();
});

//No jobs available function

function noAllJobsAvailable() {
  const totalJobs = document.getElementById('all-card');
  if (totalJobs.children.length - 1 === 0) {
    const noCard = document.querySelector('.no-carded');
    noCard.classList.remove('hidden');
  } else {
    const noCard = document.querySelector('.no-carded');
    noCard.classList.add('hidden');
  }
}
//No jobs available function

function noInterviewAvailable() {
  if (interview.length === 0) {
    const noCard = document.querySelector('.no-card');
    noCard.classList.remove('hidden');
  } else {
    const noCard = document.querySelector('.no-card');
    noCard.classList.add('hidden');
  }
}

//No jobs available function

function noRejectedAvailable() {
  if (rejected.length === 0) {
    const noCard = document.querySelector('.no-cards');
    noCard.classList.remove('hidden');
  } else {
    const noCard = document.querySelector('.no-cards');
    noCard.classList.add('hidden');
  }
}
