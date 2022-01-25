import { spaInit } from "../controller.js";
import { $rootContent } from "../model/html_element.js";
import { loginProcess, signUpProcess } from "../controller.js";

export function pageInit() {
    document.body.innerHTML = `
  <div class="menu-bar">
    <div class="menu-bar__left"><img src="menu_button.svg"></div>
    <div class="menu-bar__center" data-link="">아주대 직방</div>
    <div class="menu-bar__right" data-link="login">Log In</div>
  </div>
  <div class="content-box">
    <div class="root-content">
    </div>
  </div>
  `;

    spaInit();
};


export function drawMainPage() {
    document.querySelector('.root-content').innerHTML = ``;
}

export function drawLoginPage() {
    document.querySelector('.root-content').innerHTML = `
    <form class="login-signup" action="/login" method="post">
      <input class="login-signup__input" id="id" type="text" name="id" placeholder="아이디를 입력해주세요"/>
      <input class="login-signup__input" id="password" type="password" name="password" placeholder="비밀번호를 입력해주세요"/>
      <input class="login-signup__button" type="button" name="sign-up" value="회원가입" data-link="sign-up"/>
      <input class="login-signup__button" id="login-button" type="submit" name="log-in" value="로그인"/>
    </form>
    `;
    //document.querySelector('#login-button').addEventListener("click", loginProcess)
}

export function drawSignUpPage() {
    document.querySelector('.root-content').innerHTML = `
  <div class="login-signup">
    <input class="login-signup__input" id="id" type="text" name="id" placeholder="아이디를 입력해주세요">
    <input class="login-signup__input" id="password" type="password" name="password" placeholder="비밀번호를 입력해주세요">
    <input class="login-signup__input" type="text" name="region" placeholder="지역을 입력해주세요">
    <input class="login-signup__button" type="button" name="cancel" value="취소" data-link="login">
    <input class="login-signup__button" id="sign-up-button" type="button" name="sign-up" value="회원가입" data-link="login">
  </div>
  `;
    document.querySelector('#sign-up-button').addEventListener("click", signUpProcess)
}


function deleteElementAll() { // root-content의 요소 모두 지움
    $rootContent = document.querySelector(".root-content");
    while ($rootContent.hasChildNodes()) {
        $rootContent.removeChild($rootContent.firstChild);
    }
}