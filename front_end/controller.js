import * as view from "./view/view.js";

view.pageInit();

export function spaInit() {
    /**************버튼 누르면 페이지 이동 ************/
    document.addEventListener("DOMContentLoaded", () => {
        document.body.addEventListener("click", (e) => {
            if (e.target.matches("[data-link]")) {
                if (e.target.dataset.link === '')
                    history.pushState(null, null, location.origin);

                history.pushState(null, null, e.target.dataset.link);
                router();
            }
        });
        router();
    });

    /**************'뒤로 가기' 클릭 시**************/
    window.addEventListener("popstate", () => {
        router();
    })
}

function router() { //라우팅 수행
    const routes = [
        { path: "/", view: view.drawMainPage },
        { path: "/login", view: view.drawLoginPage },
        { path: "/sign-up", view: view.drawSignUpPage }
    ];

    const pageMatches = routes.map((route) => {
        return {
            route,
            isMatch: route.path === location.pathname,
        };
    });

    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
    console.log(pageMatches);
    match.route.view();
}

export function loginProcess() {
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;

    axios.post("/login", {
            id: id,
            password: password,
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}

export function signUpProcess() {
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;
    axios.post("/sign-up", {
            id: id,
            password: password,
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}