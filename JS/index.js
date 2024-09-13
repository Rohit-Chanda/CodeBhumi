// hero section
function toggleOverlay() {
  document.querySelectorAll(".carousel-overlay").forEach((overlay) => {
    overlay.classList.toggle("white");
  });
}
//course
document.addEventListener("DOMContentLoaded", () => {
  // Get course ID from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get("course");

  // Fetch the course data from JSON
  fetch("data/courses.json")
    .then((response) => response.json())
    .then((data) => {
      const course = data.courses.find((course) => course.id === courseId);
      if (course) {
        // Dynamically update the course details
        document.getElementById("course-title").innerText = course.title;
        document.getElementById("course-description").innerText =
          course.description;
        document.getElementById("course-start-date").innerText =
          course.startDate;
        document.getElementById("course-duration").innerText = course.duration;
        // Display course overview
        document.getElementById("course-overview").innerText =
          course.details.courseOverview;

        // Display what you will learn
        const learnList = document.getElementById("what-you-will-learn");
        course.details.whatYouWillLearn.forEach((item) => {
          const listItem = document.createElement("li");
          listItem.innerText = item;
          learnList.appendChild(listItem);
        });

        // Display target audience
        document.getElementById("target-audience").innerText =
          course.details.targetAudience;

        // Display why join
        document.getElementById("why-join").innerText = course.details.whyJoin;

        // Display FAQs
        const faqContainer = document.getElementById("faq-container");
        course.faq.forEach((faq) => {
          const faqElement = document.createElement("div");
          faqElement.classList.add("faq-item");

          const questionElement = document.createElement("h4");
          questionElement.innerText = faq.question;
          faqElement.appendChild(questionElement);

          const answerElement = document.createElement("p");
          answerElement.innerText = faq.answer;
          faqElement.appendChild(answerElement);

          faqContainer.appendChild(faqElement);
        });

        // Modify the enroll button to redirect to join-us.html
        document
          .getElementById("enroll-button")
          .addEventListener("click", () => {
            window.location.href = `join-us.html?course=${encodeURIComponent(
              course.title
            )}`;
          });
      } else {
        document.getElementById("course-title").innerText = "Course not found";
      }
    })
    .catch((error) => console.error("Error fetching course data:", error));
});

// join us
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const courseName = urlParams.get("course");
  document.getElementById("course").value = courseName || "Unknown Course"; // Add a fallback
});
//Thank-you
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const courseName = urlParams.get("courseName"); // Get course name from URL
  const email = urlParams.get("email"); // Get email from URL

  // Update courseName and email in HTML
  if (courseName) {
    document.getElementById("courseName").textContent = courseName;
  } else {
    console.error("courseName is not found in URL.");
  }

  if (email) {
    document.getElementById("email").textContent = email;
  } else {
    console.error("email is not found in URL.");
  }
});
