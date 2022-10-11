const details = document.querySelectorAll("details");

details.forEach(detail => {
    detail.addEventListener("click", (event) => {
        details.forEach(det => {
            if (det.hasAttribute("open") && det !== detail) {
                det.removeAttribute("open");
            }
        });
    });
});