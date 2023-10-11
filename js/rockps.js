let choice = document.getElementsByClassName("selection");

function select(obj, index) {
    for (let i=0; i<3; i++) {
        choice[i].removeAttribute("style");
    }

    choice[index].style.borderColor = "black";
}

function play() {
    while (document.getElementById("user").lastChild || document.getElementById("opponent").lastChild) {
        document.getElementById("user").lastChild.remove();
        document.getElementById("opponent").lastChild.remove();
    }
    if (document.querySelector("section.output > h1"))
        document.querySelector("section.output > h1").remove();

    let current = () => { 
        let index;
        for (let i=0; i<3; i++) {
            if (choice[i].style.borderColor)
                index = i;
        }
        return index;
    }

    let opponent = Math.floor(Math.random() * 3);

    let userImg = document.createElement("img");
    if (current() == 0)
        userImg.src = "img/rockps/rock.png";
    else if (current() == 1)
        userImg.src = "img/rockps/scissor.png";
    else
        userImg.src = "img/rockps/paper.png";
    document.getElementById("user").append(userImg);

    let opponentImg = document.createElement("img");
    if (opponent == 0)
        opponentImg.src = "img/rockps/rock.png";
    else if (opponent == 1)
        opponentImg.src = "img/rockps/scissor.png";
    else
        opponentImg.src = "img/rockps/paper.png";
    document.getElementById("opponent").append(opponentImg);

    let text = document.createElement("h1");

    if (current() == 0 && opponent == 0)
        text.innerText = "It's a tie!";
    else if (current() == 0 && opponent == 1)
        text.innerText = "You Won!";
    else if (current() == 0 && opponent == 2)
        text.innerText = "Sad... you lose D:";
    else if (current() == 1 && opponent == 0)
        text.innerText = "Sad... you lose D:";
    else if (current() == 1 && opponent == 1)
        text.innerText = "It's a tie!";
    else if (current() == 1 && opponent == 2)
        text.innerText = "You Won!";
    else if (current() == 2 && opponent == 0)
        text.innerText = "You Won!";
    else if (current() == 2 && opponent == 1)
        text.innerText = "Sad... you lose D:";
    else if (current() == 2 && opponent == 2)
        text.innerText = "It's a tie!";

    document.querySelector("section.output").append(text);

    document.querySelector("div.versus").style.display = ("flex");
}