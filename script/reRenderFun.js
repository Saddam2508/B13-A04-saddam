function rejectedReRender(target) {
  const parentDiv = target.closest(".card");
  if (!parentDiv) return;

  const allCardDivs = Array.from(document.getElementById("all-card").children);

  const name = parentDiv.querySelector("h2").innerText.trim();
  const title = parentDiv.querySelector("p").innerText.trim();

  const mainCard = allCardDivs.find(
    (card) =>
      card.querySelector("h2").innerText.trim() === name &&
      card.querySelector("p").innerText.trim() === title,
  );

  if (mainCard) {
    mainCard.querySelector("div:nth-child(3) button").innerText = "Rejected";
    mainCard.querySelector("div:nth-child(3) button").className =
      "btn bg-red-400";
  }
  // remove from interview section DOM
  const interviewCards = document.querySelectorAll("#interview-card .card");
  interviewCards.forEach((card) => {
    const cName = card.querySelector("h2").innerText.trim();
    const cTitle = card.querySelector("p").innerText.trim();

    if (cName === name && cTitle === title) {
      card.remove();
    }
  });

  interview = interview.filter(
    (card) => !(card.name.trim() === name && card.title.trim() === title),
  );

  const cardInfo = {
    name: parentDiv.querySelector("h2").innerText,
    title: parentDiv.querySelector("p").innerText,
    salary: parentDiv.querySelector("div:nth-child(2) p").innerText,
    jobDisc: parentDiv.querySelector("div:nth-child(3) p").innerText,
    statusAfter: "rejected",
    statusButtonClx: "btn bg-red-400",
    buttonPressClx: "rejected-btn btn border-2 border-red-400 text-red-400",
  };
  rejected.push(cardInfo);
  rejectedCard(cardInfo);

  // counter update
  allInterviewJobs.innerText = interview.length;
  allRejectedJobs.innerText = rejected.length;
  const allInterviewJobsCount = document.getElementById("interview-count");
  allInterviewJobsCount.innerText = `${interview.length} of ${allJobs.innerText}`;
  const allRejectedJobsCount = document.getElementById("rejected-count");
  allRejectedJobsCount.innerText = `${rejected.length} of ${allJobs.innerText}`;
  noInterviewAvailable();
}

function interviewReRender(target) {
  const parentDiv = target.closest(".card");
  if (!parentDiv) return;

  const allCardDivs = Array.from(document.getElementById("all-card").children);

  const name = parentDiv.querySelector("h2").innerText.trim();
  const title = parentDiv.querySelector("p").innerText.trim();

  const mainCard = allCardDivs.find(
    (card) =>
      card.querySelector("h2").innerText.trim() === name &&
      card.querySelector("p").innerText.trim() === title,
  );

  if (mainCard) {
    mainCard.querySelector("div:nth-child(3) button").innerText = "interview";
    mainCard.querySelector("div:nth-child(3) button").className =
      "btn bg-green-400";
  }
  // remove from rejected section DOM
  const rejectedCards = document.querySelectorAll("#rejected-card .card");
  rejectedCards.forEach((card) => {
    const cName = card.querySelector("h2").innerText.trim();
    const cTitle = card.querySelector("p").innerText.trim();

    if (cName === name && cTitle === title) {
      card.remove();
    }
  });

  rejected = rejected.filter(
    (card) => !(card.name.trim() === name && card.title.trim() === title),
  );

  const cardInfo = {
    name: parentDiv.querySelector("h2").innerText,
    title: parentDiv.querySelector("p").innerText,
    salary: parentDiv.querySelector("div:nth-child(2) p").innerText,
    jobDisc: parentDiv.querySelector("div:nth-child(3) p").innerText,
    statusAfter: "interview",
    statusButtonClx: "btn bg-green-400",
    buttonPressClx:
      "interview-btn btn border-2 border-green-400 text-green-400",
  };
  interview.push(cardInfo);
  interviewCard(cardInfo);
  // counter update
  allRejectedJobs.innerText = rejected.length;
  allInterviewJobs.innerText = interview.length;
  const allInterviewJobsCount = document.getElementById("interview-count");
  allInterviewJobsCount.innerText = `${interview.length} of ${allJobs.innerText}`;
  const allRejectedJobsCount = document.getElementById("rejected-count");
  allRejectedJobsCount.innerText = `${rejected.length} of ${allJobs.innerText}`;
  noRejectedAvailable();
}
