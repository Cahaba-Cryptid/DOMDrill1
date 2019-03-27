document.addEventListener("DOMContentLoaded", function () {
    let div1 = document.createElement('div');
    div1.className = 'header-container';

    document.body.appendChild(div1);

    let h1New = document.createElement('h1');
    let h1Text = document.createTextNode('This is and h1');

    h1New.appendChild(h1Text);
    div1.appendChild(h1New);

    let h2New = document.createElement('h2');
    let h2Text = document.createTextNode('This is an h2');

    h2New.appendChild(h2Text);
    div1.appendChild(h2New);

    let h3New = document.createElement('h3');
    let h3Text = document.createTextNode('This is an h3');

    h3New.appendChild(h3Text);
    div1.appendChild(h3New);

    let h4New = document.createElement('h4');
    let h4Text = document.createTextNode('This is an h4');

    h4New.appendChild(h4Text);
    div1.appendChild(h4New);

    let h5New = document.createElement('h5');
    let h5Text = document.createTextNode('This is an h5');

    h5New.appendChild(h5Text);
    div1.appendChild(h5New);

    let h6New = document.createElement('h6');
    let h6Text = document.createTextNode('This is an h6');

    h6New.appendChild(h6Text);
    div1.appendChild(h6New);

    h1New.className = 'h1';
    h2New.className = 'h2';
    h3New.className = 'h3';
    h4New.className = 'h4';
    h5New.className = 'h5';
    h6New.className = 'h6';

    let rainbow = ['DeepPink', 'FireBrick', 'GreenYellow', 'Lavender', 'Wheat', 'SpringGreen', 'Sienna', 'PowderBlue'];

    function getRandomColor() {
        let randomColor = rainbow[Math.floor(Math.random() * rainbow.length)];
        return randomColor;
    }

    h1New.addEventListener('dblclick', function () {
        let randoRainbow = getRandomColor();
        h1New.style.color = randoRainbow;
    })

    h2New.addEventListener('dblclick', function () {
        let randoRainbow = getRandomColor();
        h2New.style.color = randoRainbow;
    })

    h3New.addEventListener('dblclick', function () {
        let randoRainbow = getRandomColor();
        h3New.style.color = randoRainbow;
    })

    h4New.addEventListener('dblclick', function () {
        let randoRainbow = getRandomColor();
        h4New.style.color = randoRainbow;
    })

    h5New.addEventListener('dblclick', function () {
        let randoRainbow = getRandomColor();
        h5New.style.color = randoRainbow;
    })

    h6New.addEventListener('dblclick', function () {
        let randoRainbow = getRandomColor();
        h6New.style.color = randoRainbow;
    })

    let x = 1;
    function insertListItem() {
        let ulList = document.createElement('ul');
        let listItem = document.createElement('li');
        let text = document.createTextNode('This is list item ' + [x++]);
        listItem.appendChild(text);
        ulList.appendChild(listItem);
        document.body.appendChild(ulList);

        listItem.addEventListener('click', function () {
            let randomColor = getRandomColor();
            ulList.style.color = randomColor;
        })

        listItem.addEventListener('dblclick', function () {
            this.remove();
        });
    }
    document.getElementsByClassName('btn')[0].addEventListener('click', function () {
        insertListItem();
    })

});

