function noLayout() {
    document.getElementById('container').classList.value = '';
}

function verticalLayout() {
    noLayout();
    document.getElementById('container').classList.add('vertical');
}

function horizontalLayout() {
    noLayout();
    document.getElementById('container').classList.add('horizontal');
}

function gridLayout() {
    noLayout();
    document.getElementById('container').classList.add('grid');
}



function showTools() {
    blankAll();
    document.getElementById('cardTools').innerHTML = /*HTML*/`

        <div class="innerCard">De to viktigste verktøyene vi skal bruke er disse:
            <ul>
                <li>Koderedigeringsprogrammet <a href=https://code.visualstudio.com>Visual Studio Code</a>
                Vi skal bruke noen <i>extensions:</i>
                <ul>
                    <li>JavaScript-booster</li>
                    <li>es6-string-html</li>
                    <li>live-server</li>
                    <li>live-share</li>
                </ul>
                    </li>
                    <li>Nettleseren <a href=https://www.google.com/intl/no/chrome>Google Chrome</a></li>
            </ul >
        </div>
`;
}
function showHTML() {
    blankAll();
    document.getElementById('cardHTML').innerHTML = /*HTML*/`

<div class="innerCard">
    Vi bruker HTML til å definere et dokument.
    <ul>
        <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
        <li>Tagger for grunnleggende formatering av tekst</li>
        <li>&lt;div&gt;</li>
        <li>&lt;input type="text"&gt;</li>
        <li>&lt;button&gt;</li>
        <li><a href=https://www.w3schools.com/html/default.asp>W3Schools HTML Tutorial</a></li>
        <li><a href=https://www.w3schools.com/tags/default.asp>W3Schools HTML Reference</a></li>
    </ul>
</div>
`;
}

function showCSS() {
    blankAll();
    document.getElementById('cardCSS').innerHTML = /*HTML*/`

<div class="innerCard">
    Vi bruker CSS til å style et dokument, altså farger, fonter, utseende og lignende.
    <ul>
        <li>background-color</li>
        <li>color</li>
        <li>padding</li>
        <li>margin</li>
        <li>border</li>
        <li>text-align</li>
        <li>font-size</li>
        <li><a href=https://css-tricks.com/snippets/css/a-guide-to-flexbox>Flexbox</a></li>
        <li><a href=https://css-tricks.com/snippets/css/complete-guide-grid>Grid</a></li>
        <li><a href=https://www.w3schools.com/css/default.asp>W3Schools CSS Tutorial</a></li>
        <li><a href=https://www.w3schools.com/cssref/default.asp>W3Schools CSS Reference</a></li>
    </ul>
</div>
`;
}

function showJavaScript() {
    blankAll();
    document.getElementById('cardJavaScript').innerHTML = /*HTML*/`

    <div class="innerCard">
    Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering ved
    å
    manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
    <ul>
        <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
            Moodle.
        </li>
        <li><a href=https://www.w3schools.com/jsref/default.asp>W3Schools JavaScript Reference</a></li>
    </ul>
</div>
`;
}


function showBodyGame() {
    blankAll();
    document.getElementById('cardGame').innerHTML = /*HTML*/`
    
    <div id="head" class="bodyPart"></div>
    <div id="body" class="bodyPart"></div>
    <div id="legs" class="bodyPart"></div>

    `;
    selectHead1();
    selectBody1();
    selectLegs1();

}

function blankAll() {
    document.getElementById('cardTools').innerHTML = '';
    document.getElementById('cardCSS').innerHTML = '';
    document.getElementById('cardHTML').innerHTML = '';
    document.getElementById('cardJavaScript').innerHTML = '';
    document.getElementById('cardGame').innerHTML = '';
}

function selectHead1() {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selectHead4()">◀</button>
        <img src="img/head1.png" />
        <button onclick="selectHead2()">▶</button>
    `;
}

function selectHead2() {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selectHead1()">◀</button>
        <img src="img/head2.png" />
        <button onclick="selectHead3()">▶</button>
    `;
}

function selectHead3() {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selectHead2()">◀</button>
        <img src="img/head3.png" />
        <button onclick="selectHead4()">▶</button>
    `;
}

function selectHead4() {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selectHead3()">◀</button>
        <img src="img/head4.png" />
        <button onclick="selectHead1()">▶</button>
    `;
}

function selectBody1() {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectBody4()">◀</button>
        <img src="img/body1.png" />
        <button onclick="selectBody2()">▶</button>
    `;
}

function selectBody2() {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectBody1()">◀</button>
        <img src="img/body2.png" />
        <button onclick="selectBody3()">▶</button>
    `;
}

function selectBody3() {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectBody2()">◀</button>
        <img src="img/body3.png" />
        <button onclick="selectBody4()">▶</button>
    `;
}

function selectBody4() {
    document.getElementById('body').innerHTML = /*HTML*/`
        <button onclick="selectBody3()">◀</button>
        <img src="img/body4.png" />
        <button onclick="selectBody1()">▶</button>
    `;
}

function selectLegs1() {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectLegs4()">◀</button>
        <img src="img/legs1.png" />
        <button onclick="selectLegs2()">▶</button>
    `;
}

function selectLegs2() {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectLegs1()">◀</button>
        <img src="img/legs2.png" />
        <button onclick="selectLegs3()">▶</button>
    `;
}

function selectLegs3() {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectLegs2()">◀</button>
        <img src="img/legs3.png" />
        <button onclick="selectLegs4()">▶</button>
    `;
}

function selectLegs4() {
    document.getElementById('legs').innerHTML = /*HTML*/`
        <button onclick="selectLegs3()">◀</button>
        <img src="img/legs4.png" />
        <button onclick="selectLegs1()">▶</button>
    `;
}