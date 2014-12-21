var whacAMole = (function () {
    var CONGRATULATIONS = 'Well done you are The Whac a Mole champion!',
        HEIGHT = 1,
        WIDTH = 7,
        LEVELUP = 100,
        initialize,
        levelHolder,
        level,
        li,
        liElements = [],
        prevMole,
        prepGame,
        prepStage,
        renderMole,
        renderStage,
        setUpEvents,
        scoreHolder,
        score,
        stage,
        span,
        speed = 1100,
        startGame,
        timer,
        utils = {
            id: function (id) {
                return document.getElementById(id);
            },
            getNodeAsInt: function (parent) {
                return parent.firstChild.nodeValue - 0;
            },
            setFirstChildValue: function (parentElem, value) {
                parentElem.firstChild.nodeValue = value;
            },
            setTimer: function (func, ms) {
                return setInterval(func, ms);
            }
        };

    initialize = function () {
        prepStage();
        renderStage();
        prepGame();
        setUpEvents();
        startGame();
    };

    prepStage = function () {
        span = document.createElement('span');
        li = document.createElement('li');
        stage = document.getElementsByTagName('ul')[0];
    };

    renderStage = function () {
        for (var i = 0; i < (HEIGHT * WIDTH); i++) {
            var cloneLi = li.cloneNode(false),
                cloneSpan = span.cloneNode(false);

            cloneLi.appendChild(cloneSpan);
            stage.appendChild(cloneLi);
            liElements.push(cloneLi);
        }
    };

    prepGame = function () {
        levelHolder = utils.id('level');
        level = utils.getNodeAsInt(levelHolder);
        scoreHolder = utils.id('score');
        score = utils.getNodeAsInt(scoreHolder);
    };

    setUpEvents = function () {
        stage.addEventListener('click', function(e) {
            if (e.target && 'span' === e.target.nodeName.toLowerCase()) {
                if ('mole' === e.target.parentNode.className ) {
                    score += 10;
                    utils.setFirstChildValue(scoreHolder, score);
                    e.target.parentNode.className = '';

                    if (0 === score%100) {
                        clearInterval(timer);
                        if (1000 === score) {
                            scoreHolder.parentNode.innerHTML = CONGRATULATIONS;
                        } else {
                            speed -= LEVELUP;
                            timer = utils.setTimer(renderMole, speed);

                            level++;
                            utils.setFirstChildValue(levelHolder, level);
                        }
                    }
                }
            }
        }, false);
    };

    startGame = function () {
        timer = utils.setTimer(renderMole, speed);
    };

    renderMole = function () {
        if (undefined !== prevMole) prevMole.className = '';
        prevMole = liElements[Math.floor((Math.random()*(HEIGHT * WIDTH))+1)-1];
        prevMole.className = 'mole';
    };

    return {
        init: initialize
    };
})();

window.addEventListener('DOMContentLoaded', function () {
    whacAMole.init();
});/**
 * Created by maayan on 16/12/2014.
 */
