export function spaInit() {
    /**************버튼 누르면 페이지 이동 ************/
    document.addEventListener("DOMContentLoaded", () => {
        document.body.addEventListener("click", (e) => {
            if (e.target.matches("[data-link]")) {
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

async function router() { //라우팅 수행
    const routes = [
        { path: "/", view: () => console.log("draw Main page") },
        { path: "/log-in", view: () => console.log("draw log-in page") }
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