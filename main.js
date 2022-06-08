document.querySelector('.b').addEventListener("click", () => {

    let arrColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    let grad1 = "";
    let grad2 = "";
    let randomIndex = 0;

    for (let i = 0; i < 6; i++) {
        randomIndex = Math.floor(Math.random() * arrColor.length);
        grad1 += arrColor[randomIndex];

        randomIndex = Math.floor(Math.random() * arrColor.length);
        grad2 += arrColor[randomIndex];
    }

    document.body.style.background =
        `linear-gradient(to bottom right, #${grad1}, #${grad2})`;
});