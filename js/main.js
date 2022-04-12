// code tao hieu ung scroll menu
window.onscroll = function () {
  var bodyWith = $(window).width();
  if (bodyWith >= 767.98) {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document.getElementById("headerFixed").style.width = "100%";
      document.getElementById("headerFixed").style.height = "60px";
      document.getElementById("headerFixed").style.background = "black";
      document.getElementById("navContainer").style.background = "black";
      document.getElementById("headerFixed").style.position = "fixed";
      document.getElementById("headerFixed").style.top = "0";
      document.getElementById("headerFixed").style.zIndex = "1000";
      document.getElementById("headerLogo").style.height = "60px";
    } else {
      document.getElementById("headerFixed").style.position = "absolute";
      document.getElementById("headerFixed").style.top = "0";
      document.getElementById("headerFixed").style.flexWrap = "wrap";
      document.getElementById("navContainer").style.background = "transparent";
      document.getElementById("headerFixed").style.background = "transparent";
      document.getElementById("headerFixed").style.height = "100px";
      document.getElementById("headerLogo").style.height = "100px";
    }
  }
};

// code tao hieu ung progress bar
const skillSelection = document.getElementById("bars__section");

const progressBars = document.querySelectorAll(".progress-bar");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

// function hideProgress() {
//   progressBars.forEach((p) => {
//     p.style.opacity = 0;
//     p.style.width = 0;
//   });
// }

window.addEventListener("scroll", () => {
  const sectionPos = skillSelection.getBoundingClientRect().top;
  const screenPos = window.innerHeight;
  progressBars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
  if (sectionPos < screenPos) {
    showProgress();
  }
  // else {
  //   // hideProgress();
  // }
});
