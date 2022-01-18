import { spaInit } from "../controller.js";

(function pageInit() {
    document.body.innerHTML += `
    <div class="menu-bar">
      <div class="menu-bar__left"><img src="menu_button.svg"></div>
      <div class="menu-bar__center" data-link="">아주대 직방</div>
      <div class="menu-bar__right" data-link="log-in">Log In</div>
    </div>
    <div class="root-content">
    </div>
    `;

    spaInit();
}());

function drawLoginPage() {

}