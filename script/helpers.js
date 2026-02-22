function showOnly(id) {
  const allJobs = document.getElementById("all-jobs");
  const interview = document.getElementById("interview-jobs");
  const rejected = document.getElementById("rejected-jobs");

  allJobs.classList.add("hidden");
  interview.classList.add("hidden");
  rejected.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
