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

  parentDiv.remove();
  const totalJobs = document.getElementById('all-card');
  const allJobs = document.getElementById('total');
  allJobs.innerText = totalJobs.children.length;
});

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
