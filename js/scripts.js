var EXTERNAL = {
    "PUSHER" : "Z:\\Public\\Artiom\\WR_CAP\\WR_CAP latest\\Pusher\\WRPusher.exe",
    "CAPTURER" : "Z:\\Public\\Artiom\\WR_CAP\\WR_CAP latest\\Capturer\\WRCapturer.exe",
    "CHANGEIP" : "Z:\\Public\\Artiom\\ChangeHostsFile\\ChangeHostsFile.exe",

    "CTTESTCTA" : "https://ct.test/cta/",
    "PRODCTA" : "https://adm01.clicktale.net",
    "CTTESTMASTER" : "https://ct.test/ctlogin/MasterUserLogin.aspx",
    "PRODMASTER" : "https://login.app.clicktale.com/MasterUserLogin.aspx",
    "CTTESTCT" : "http://ct.test/ctc4/",
    "PRODCT" : "http://www.clicktale.com/",
    "STAGECT" : "https://loginst.app.clicktale.com/Login.aspx",
    "TESTINGPORTAL" : "http://ctqatest.com/qa/",
    "ATTENIX" : "http://asp.ovdimnet.com/",
    "CLICKA" : "http://clicka/Pages/Home.aspx",
    "TENBIS" : "https://www.10bis.co.il"
};

function openExternalItem(item)
{
    var gui = require('nw.gui');
    gui.Shell.openItem(item);
}

function openExternalUrl(item)
{
    var gui = require('nw.gui');
    gui.Shell.openExternal(item);
}

function aboutClick()
{
    var gui = require('nw.gui');
    gui.Shell.openExternal("https://www.linkedin.com/profile/view?id=362940492")
}

function chromeBook()
{
    var gui = require('nw.gui');
    gui.Shell.openExternal("chrome://bookmarks/")
}

function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

function addBrowserExtension()
{
    var locationBits=window.location.href.split("?"),
        newURL;
    if(locationBits.length > 1){
        newURL=locationBits[0]+ " ? ";
        if(/^ct=/.test(locationBits[1])){
            newURL+=locationBits[1].replace(/^ct=[^& #]*/, "ct=enable,debug ");
        }
        else if(/&ct=/.test(locationBits[1])){
            newURL+=locationBits[1].replace(/&ct=[^& #]*/, "&ct=enable,debug");
        }else{
            newURL+= "ct=enable,debug& "+locationBits[1];
        }
    }
    else
    {
        var locationBits2=locationBits[0].split( " # ");
        newURL=locationBits2[0]+ " ?ct=enable,debug ";

        if(locationBits2.length > 1)
        {
            newURL+= " # "+locationBits2[1];
        }
    }
    window.location.href=newURL;
}

function addCTBM()
{
    var scr=document.createElement('script');
    scr.id='ctbm_script';
    scr.src='https://cs3.clicktale.dom:666/JS/CTBM.js';
    scr.type='text/javascript';
    document.body.appendChild(scr);
}

function toggleGameVisibility() {
    var elemStyle = document.getElementById("toggleMe").style;
    elemStyle.display = "";
    if(elemStyle.visibility == "hidden" ) {
        elemStyle.visibility = "visible";
    }
    else {
        elemStyle.visibility = "hidden";
    }
}

var currentString = "";

KeyboardJS.on(' i , m , r , i ', function(letter) {
    currentString += KeyboardJS.key.name(letter.keyCode);
    if(currentString == "imri")
    {
        currentString = "";
        toggleGameVisibility();
    }
});

function showLoading(){
    var line = new ProgressBar.Line('#example-line-container', {
        color: '#FCB03C'
    });

    line.animate(1);
}

function showLoading2(){
    var line = new ProgressBar.Line('#example-line-container2', {
        color: '#FCB03C'
    });

    line.animate(1);
}

function showLoading3(){
    var line = new ProgressBar.Line('#example-line-container3', {
        color: '#FCB03C'
    });

    line.animate(1);
}

function showLoading4(){
    var line = new ProgressBar.Line('#example-line-container4', {
        color: '#FCB03C'
    });

    line.animate(1);
}

function showLoading5(){
    var line = new ProgressBar.Line('#example-line-container5', {
        color: '#FCB03C'
    });

    line.animate(1);
}

function showLoading6(){
    var line = new ProgressBar.Line('#example-line-container6', {
        color: '#FCB03C'
    });

    line.animate(1);
}

var IPMap =
{
    "Localhost"     : "127.0.0.1",
    "ReleaseBox"    : "192.168.186.14",
    "Auto2"         : "192.168.186.246",
    "Prever"        : "192.168.186.210",
    "CoreServices"  : "192.168.186.13",
    "RecorderBox"   : "192.168.186.204",
    "Branch1"       : "192.168.186.247",
    "Redesign"      : ""
};

function changeIP(MapItem){
    var hostile = require('hostile'),
        hostNames = ["ct.test", "qadump.clicltale.net", "dmz.ct.test", "appcdnenv.clicktale.com"];

    for(var x in hostNames)
    {
        var ci = hostNames[x];
        console.log("Blattt ", ci);
        hostile.set(MapItem, ci, function (err) {
            if (err) {
                console.error(err)
            }
        });
    }


    for(var i = 0; i < hostNames.length; i++)
    {
        var currentIterator = hostNames[i];
        hostile.set(MapItem, currentIterator, function (err) {
            if (err) {
                console.error(err)
            }
        });
    }


    loadHost();
}

$(function(){
    loadHost();
});

function loadHost()
{
    var hostile = require("hostile");
    var preserveFormatting = false;

    hostile.get(preserveFormatting, function (err, lines) {
        if (err) {
            console.error(err.message)
        }
        lines.forEach(function (line) {
            var IPADD = "";

            console.log(line[0]);

            if(line[1].trim().length === 0)
                return;

            IPADD = line[0];

          $("#ipHolder").html(IPADD);
            /*   if(IPADD.length > 1)
              {
                  $(".mainBtn3[data-ipaddress='" + IPADD + "']").addClass("active");
              } */
        })
    })
}