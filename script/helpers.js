function showOnly(id) {
  const allJobs = document.getElementById('all-jobs');
  const interview = document.getElementById('interview-jobs');
  const rejected = document.getElementById('rejected-jobs');

  allJobs.classList.add('hidden');
  interview.classList.add('hidden');
  rejected.classList.add('hidden');

  const selected = document.getElementById(id);
  selected.classList.remove('hidden');
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

