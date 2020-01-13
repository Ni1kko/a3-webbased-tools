var inputCode = function() {
    switch (inputCase) {
        case "splitstring":
            splitString();
            break;
        case "ReverseString":
            ReverseString();
            break;
        case "CaesarCipherString":
            CaesarCipherString();
            break;
        case "crypt":
            cryptCode();
            break;
        case "cryptkey":
            cryptCodekey();
            break;
        case "Randomcryptkey":
            RandomCryptCodekey();
            break;
        case "cryptkeytoString":
            cryptCodekeytoString();
            break;
        case "RandomCryptkeytoString":
            RandomCryptkeytoString();
            break;
        case "RandomCryptkeytoStringSplit":
            RandomCryptkeytoStringSplit();
            break;
        case "RandomCryptkeyPlayerid":
            RandomCryptkeyPlayerid();
            break;
        case "IsecoCryptkey":
            IsecoCryptkey();
            break;
        case "MolaronCryptkey":
            MolaronCryptkey();
            break;
        case "IsecoCryptkeySpoody":
            IsecoCryptkeySpoody();
            break;
        case "IsecoCryptkeyGUID":
            IsecoCryptkeyGUID();
            break;
        case "SpoodyCryptkeyGUID":
            SpoodyCryptkeyGUID();
            break;
        case "Poseidon":
            CodePoseidon();
            break;
        case "cryptkeytoStringSplit":
            cryptCodekeytoStringSplit();
            break;
        case "SScryptkey":
            SScryptCodekey();
            break;
        case "SScryptkeyRandom":
            SScryptCodekeyRandom();
            break;
        case "SScryptkeytoString":
            SScryptCodekeytoString();
            break;
        case "SScryptkeytoStringRandom":
            SScryptCodekeytoStringRandom();
            break;
        case "SScryptkeytoStringCustom":
            SScryptCodekeytoStringCustom();
            break;
        case "SScryptkeytoStringSplit":
            SScryptCodekeytoStringSplit();
            break;
        case "SScryptkeytoStringSplitRandom":
            SScryptCodekeytoStringSplitRandom();
            break;
        case "SScryptkeytoStringSplitCustom":
            SScryptCodekeytoStringSplitCustom();
            break;
        case "minify":
            minifyCode();
            break;
        case "Comments":
            CommentsCode();
            break;
        case "LocalVariable":
            LocalVariableCode();
            break;
        case "GlobalVariable":
            GlobalVariableCode();
            break;
        case "RandomVariable":
            RandomVariable();
            break;
        case "beautify":
            beautifyCode();
            break;
        case "beautify2":
            beautifyCodeString();
            break;
        case "codeCracker":
            codeCracker();
            break;
        case "GUIEditorConverter":
            GUIEditorConverter();
            break;
        case "SQFConverter":
            SQFConverter();
            break;
        case "teach":
            checkCode();
            break;
        default:
            noneCode();
    }
};
var outputCode = function() {
    switch (outputCase) {
        case "desplitstring":
            desplitString();
            break;
        case "decrypt":
            decryptCode();
            break;
        case "decryptkey":
            decryptCodekey();
            break;
        case "decryptkeytoString":
            decryptCodekeytoString();
            break;
        case "decryptkeytoStringSplit":
            decryptCodekeytoStringSplit();
            break;
        default:
            noneCode();
    }
};
var menuSplitString = function() {
    splitString();
    delkeyinputfield();
    inputCase = "splitstring";
    outputCase = "desplitstring";
};
var menuReverseString = function() {
    ReverseString();
    delkeyinputfield();
    inputCase = "ReverseString";
    outputCase = "noneCode";
};
var menuCaesarCipherString = function() {
    CaesarCipherString();
    delkeyinputfield();
    inputCase = "CaesarCipherString";
    outputCase = "noneCode";
};
var menuCryptkey = function() {
    cryptCodekey();
    delkeyinputfield();
    inputCase = "cryptkey";
    outputCase = "decryptkey";
};
var menuRandomCryptkey = function() {
    RandomCryptCodekey();
    delkeyinputfield();
    inputCase = "Randomcryptkey";
    outputCase = "noneCode";
};
var menuCryptkeytoString = function() {
    cryptkeytoString();
    delkeyinputfield();
    inputCase = "cryptkeytoString";
    outputCase = "decryptkeytoString";
};
var menuRandomCryptkeytoString = function() {
    RandomCryptkeytoString();
    delkeyinputfield();
    inputCase = "RandomCryptkeytoString";
    outputCase = "noneCode";
};
var menuRandomCryptkeyPlayerid = function() {
    document.getElementById('secretkey').value = '//put a PlayerID here';
    RandomCryptkeyPlayerid();
    getkeyinputfield();
    inputCase = "RandomCryptkeyPlayerid";
    outputCase = "noneCode";
};
var menuIseco = function() {
    document.getElementById('secretkey').value = '//put a custom cryptkey here';
    IsecoCryptkey();
    getkeyinputfield();
    inputCase = "IsecoCryptkey";
    outputCase = "noneCode";
};
var menuMolaron = function() {
    document.getElementById('secretkey').value = '//put a custom cryptkey here';
    MolaronCryptkey();
    getkeyinputfield();
    inputCase = "MolaronCryptkey";
    outputCase = "noneCode";
};
var menuSpoody = function() {
    document.getElementById('secretkey').value = '//put a custom cryptkey here';
    IsecoCryptkeySpoody();
    getkeyinputfield();
    inputCase = "IsecoCryptkeySpoody";
    outputCase = "noneCode";
};
var menuIsecoGUID = function() {
    document.getElementById('secretkey').value = '//put a PlayerID here';
    IsecoCryptkeyGUID();
    getkeyinputfield();
    inputCase = "IsecoCryptkeyGUID";
    outputCase = "noneCode";
};
var menuSpoodyGUID = function() {
    document.getElementById('secretkey').value = '//put a PlayerID here';
    SpoodyCryptkeyGUID();
    getkeyinputfield();
    inputCase = "SpoodyCryptkeyGUID";
    outputCase = "noneCode";
};
var menuPoseidon = function() {
    document.getElementById('secretkey').value = '//put a PlayerID here';
    CodePoseidon();
    getkeyinputfield();
    inputCase = "Poseidon";
    outputCase = "noneCode";
};
var menuRandomCryptkeytoStringSplit = function() {
    RandomCryptkeytoStringSplit();
    delkeyinputfield();
    inputCase = "RandomCryptkeytoStringSplit";
    outputCase = "noneCode";
};
var menuCryptkeytoStringSplit = function() {
    cryptCodekeytoStringSplit();
    delkeyinputfield();
    inputCase = "cryptkeytoStringSplit";
    outputCase = "decryptkeytoStringSplit";
};
var menuSSCryptkey = function() {
    SScryptCodekey();
    delkeyinputfield();
    inputCase = "SScryptkey";
    outputCase = "noneCode";
};
var menuSSCryptkeyRandom = function() {
    SScryptCodekeyRandom();
    delkeyinputfield();
    inputCase = "SScryptkeyRandom";
    outputCase = "noneCode";
};
var menuSSCryptkeytoString = function() {
    SScryptCodekeytoString();
    delkeyinputfield();
    inputCase = "SScryptkeytoString";
    outputCase = "noneCode";
};
var menuSSCryptkeytoStringSplit = function() {
    SScryptCodekeytoStringSplit();
    delkeyinputfield();
    inputCase = "SScryptkeytoStringSplit";
    outputCase = "noneCode";
};
var menuSSCryptkeytoStringRandom = function() {
    SScryptCodekeytoStringRandom();
    delkeyinputfield();
    inputCase = "SScryptkeytoStringRandom";
    outputCase = "noneCode";
};
var menuSSCryptkeytoStringSplitRandom = function() {
    SScryptCodekeytoStringSplitRandom();
    delkeyinputfield();
    inputCase = "SScryptkeytoStringSplitRandom";
    outputCase = "noneCode";
};
var menuSSCryptkeytoStringCustom = function() {
    document.getElementById('secretkey').value = '//put a custom cryptkey here';
    SScryptCodekeytoStringCustom();
    getkeyinputfield();
    inputCase = "SScryptkeytoStringCustom";
    outputCase = "noneCode";
};
var menuSSCryptkeytoStringSplitCustom = function() {
    document.getElementById('secretkey').value = '//put a custom cryptkey here';
    SScryptCodekeytoStringSplitCustom();
    getkeyinputfield();
    inputCase = "SScryptkeytoStringSplitCustom";
    outputCase = "noneCode";
};
var menuCrypt = function() {
    cryptCode();
    delkeyinputfield();
    inputCase = "crypt";
    outputCase = "decrypt";
};
var menuMinify = function() {
    minifyCode();
    delkeyinputfield();
    inputCase = "minify";
    outputCase = "noneCode";
};
var menuComments = function() {
    CommentsCode();
    delkeyinputfield();
    inputCase = "Comments";
    outputCase = "noneCode";
};
var menuLocalVariable = function() {
    document.getElementById('secretkey').value = '//put a custom variable name here';
    LocalVariableCode();
    getkeyinputfield();
    inputCase = "LocalVariable";
    outputCase = "noneCode";
};
var menuGlobalVariable = function() {
    document.getElementById('secretkey').value = '//put a custom variable name here';
    GlobalVariableCode();
    getkeyinputfield();
    inputCase = "GlobalVariable";
    outputCase = "noneCode";
};
var menuRandomVariable = function() {
    document.getElementById('secretkey').value = 'life_cash, life_atmcash //variable exceptions. usage: use "," to split variables';
    RandomVariable();
    getkeyinputfield();
    inputCase = "RandomVariable";
    outputCase = "noneCode";
};
var menuBeautify = function() {
    beautifyCode();
    delkeyinputfield();
    inputCase = "beautify";
    outputCase = "noneCode";
};
var menuBeautifyString = function() {
    beautifyCodeString();
    delkeyinputfield();
    inputCase = "beautify2";
    outputCase = "noneCode";
};
var menuCracker = function() {
    document.getElementById('secretkey').value = '//put the used cryptkey here';
    codeCracker();
    getkeyinputfield();
    inputCase = "codeCracker";
    outputCase = "noneCode";
};
var GUIEditor = function() {
    document.getElementById('secretkey').value = '41//Display idd';
    GUIEditorConverter();
    getkeyinputfield();
    inputCase = "GUIEditorConverter";
    outputCase = "noneCode";
};
var SQMConverter = function() {
    document.getElementById('secretkey').value = '41//Display idd';
    SQFConverter();
    getkeyinputfield();
    inputCase = "SQFConverter";
    outputCase = "noneCode";
};
var menuTeach = function() {
    checkCode();
    delkeyinputfield();
    inputCase = "teach";
    outputCase = "noneCode";
};

function getkeyinputfield() {
    document.getElementById('editor1').style.top = '80px';
    document.getElementById('editor2').style.top = '80px';
    setTimeout(function() {
        document.getElementById('secretkey').style.display = 'block';
        document.getElementById('keyname').style.display = 'block';
        document.getElementById('keynametext').style.display = 'block';
        document.getElementById('keyinput').style.opacity = '1';
    }, 200);
};

function delkeyinputfield() {
    document.getElementById('keyinput').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('editor1').style.top = '45px';
        document.getElementById('editor2').style.top = '45px';
    }, 200);
    setTimeout(function() {
        document.getElementById('secretkey').style.display = 'none';
        document.getElementById('keyname').style.display = 'none';
        document.getElementById('keynametext').style.display = 'none';
    }, 200);
};

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
};

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
};

function stripComments(str) {
    var result = "";
    var len = str.length;
    var start, end, parsedLine, remove, hasStart;
    var lines = str.split("\n");
    for (var line in lines) {
        if (start = lines[line].match(/\/\*/)) {
            hasStart = true;
            if (end = lines[line].match(/\*\//)) {
                remove = lines[line].slice(start.index, lines[line].lastIndexOf("*/") + 2);
                lines[line] = lines[line].replace(remove, '');
                hasStart = false;
            }
        }
        if (hasStart) {
            if (end = lines[line].match(/\*\//)) {
                hasStart = false;
            }
            lines[line] = "";
        }
        if (start = lines[line].match(/\/\//)) {
            if (!lines[line].match(/match/)) {
                remove = lines[line].slice(start.index, lines[line].length);
                lines[line] = lines[line].replace(remove, '');
            }
        }
        result += lines[line] + "\n";
    }
    return result;
};
var noneCode = function() {
    return false;
};

function getInputValue() {
    var codeInput = editor1.getValue();
    if (codeInput.length > 0) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                console.log(xhttp.responseText);
            }
        };
        xhttp.open("GET", "http://www.armatools.fallox.cloud/SQFBin/api/create", true);
        var startrequest = "name=Spoody-Converter&private=0&title=Converter-Save&lang=text&text=/*www.armatools.fallox.cloud*/";
        console.log(startrequest);
        xhttp.send(startrequest + codeInput);
        console.log(xhttp.responseText)
    }
    return codeInput;
};
var CommentsCode = function() {
    var codeInput = editor1.getValue();
    codeInput = stripComments(codeInput);
    editor2.setValue(codeInput, 1);
};
var LocalVariableCode = function() {
    var codeInput = editor1.getValue();
    var matchArray = codeInput.match(/\b_[a-zA-Z0-9_]+/g);
    var magicVars = ["_this", "_i", "_x", "_forEachIndex", "_id", "_uid", "_alt", "_pos", "_name", "_jip", "_owner", "_units", "_shift"];
    var codekeyinput = document.getElementById('secretkey').value;
    codekeyinput = codekeyinput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
    if (matchArray !== null) {
        function isInArray(value, array) {
            return array.indexOf(value) > -1;
        };
        var countIt = 0;
        var doneReplaceArray = [];
        for (var i = 0; i < matchArray.length; i++) {
            if (!(isInArray(matchArray[i], magicVars)) && !(isInArray(matchArray[i], doneReplaceArray))) {
                var re = new RegExp("\\b" + matchArray[i] + "\\b", "g");
                if (codekeyinput === "") {
                    codeInput = codeInput.replace(re, ("_" + countIt));
                } else {
                    codeInput = codeInput.replace(re, ("_" + codekeyinput + countIt));
                };
                doneReplaceArray.push(matchArray[i]);
                countIt = countIt + 1;
            };
        };
        editor2.setValue(codeInput, 1);
    } else {
        editor2.setValue(editor1.getValue(), 1);
    };
};
var GlobalVariableCode = function() {
    var codeInput = editor1.getValue();
    var matchArray = codeInput.match(/\b([^_;{}])[a-zA-Z0-9_]+((?=\=)|(?= =))((?!==)(?! ==))/g);
    var magicVars = ["_this", "_i", "_x", "_forEachIndex", "_id", "_uid", "_alt", "_pos", "_name", "_jip", "_owner", "_units", "_shift"];
    var codekeyinput = document.getElementById('secretkey').value;
    codekeyinput = codekeyinput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
    if (matchArray !== null) {
        function isInArray(value, array) {
            return array.indexOf(value) > -1;
        };
        var countIt = 0;
        var doneReplaceArray = [];
        for (var i = 0; i < matchArray.length; i++) {
            if (!(isInArray(matchArray[i], magicVars)) && !(isInArray(matchArray[i], doneReplaceArray))) {
                var re = new RegExp("\\b" + matchArray[i] + "\\b", "g");
                if (codekeyinput === "") {
                    codeInput = codeInput.replace(re, ("var" + countIt));
                } else {
                    codeInput = codeInput.replace(re, (codekeyinput + countIt));
                };
                doneReplaceArray.push(matchArray[i]);
                countIt = countIt + 1;
            };
        };
        editor2.setValue(codeInput, 1);
    } else {
        editor2.setValue(editor1.getValue(), 1);
    };
};
var RandomVariable = function() {
    var codeInput = editor1.getValue();
    var matchArray = codeInput.match(/\b([^_;{}])[a-zA-Z0-9_]+((?=\=)|(?= =))((?!==)(?! ==))/g);
    var codekeyinput = document.getElementById('secretkey').value;
    codekeyinput = codekeyinput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
    var magicVars = "[" + codekeyinput.replace(/\w+/g, "'$&'") + "]";
    eval("magicVars = " + magicVars);
    if (matchArray !== null) {
        function isInArray(value, array) {
            return array.indexOf(value) > -1;
        };
        var countIt = 0;
        var doneReplaceArray = [];
        codeInput = codeInput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
        codeInput = String.fromCharCode(10) + String.fromCharCode(10) + "call compile ('" + String.fromCharCode(10) + codeInput.replace(/'/g, "'+\"'\"+'") + String.fromCharCode(10) + "');";
        for (var i = 0; i < matchArray.length; i++) {
            if (!(isInArray(matchArray[i], magicVars)) && !(isInArray(matchArray[i], doneReplaceArray))) {
                var re = new RegExp("\\b" + matchArray[i] + "\\b", "g");
                codeInput = codeInput.replace(re, ("'+ _randvar" + countIt + " +'"));
                codeInput = "_randvar" + countIt + "=(call _randvar);" + codeInput
                doneReplaceArray.push(matchArray[i]);
                countIt = countIt + 1;
            };
        };
        codeInput = '_randvar={_arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];_rand="";for "_i" from 1 to 15 do{_rand=_rand+(_arr select(random((count _arr)-1)));};_rand};' + codeInput;
        editor2.setValue(codeInput, 1);
    } else {
        editor2.setValue(editor1.getValue(), 1);
    };
};
var minifyCode = function() {
    var codeInput = editor1.getValue();
    codeInput = stripComments(codeInput);
    codeInput = replaceAll(codeInput, '	', '');
    codeInput = replaceAll(codeInput, '  ', '');
    codeInput = replaceAll(codeInput, String.fromCharCode(10), '');
    codeInput = replaceAll(codeInput, String.fromCharCode(13), '');
    codeInput = codeInput.replace(/, /g, ',');
    codeInput = codeInput.replace(/ ,/g, ',');
    codeInput = codeInput.replace(/= /g, '=');
    codeInput = codeInput.replace(/ =/g, '=');
    codeInput = codeInput.replace(/] /g, ']');
    codeInput = codeInput.replace(/ \[/g, '[');
    codeInput = codeInput.replace(/; /g, ';');
    codeInput = codeInput.replace(/ ;/g, ';');
    codeInput = codeInput.replace(/\+ /g, '+');
    codeInput = codeInput.replace(/ \+/g, '+');
    codeInput = codeInput.replace(/- /g, '-');
    codeInput = codeInput.replace(/ -/g, '-');
    codeInput = codeInput.replace(/\* /g, '*');
    codeInput = codeInput.replace(/ \*/g, '*');
    codeInput = codeInput.replace(/} /g, '}');
    codeInput = codeInput.replace(/ }/g, '}');
    codeInput = codeInput.replace(/{ /g, '{');
    codeInput = codeInput.replace(/ {/g, '{');
    codeInput = codeInput.replace(/: /g, ':');
    codeInput = codeInput.replace(/ :/g, ':');
    codeInput = codeInput.replace(/\( /g, '(');
    codeInput = codeInput.replace(/ \(/g, '(');
    codeInput = codeInput.replace(/\) /g, ')');
    codeInput = codeInput.replace(/ \)/g, ')');
    codeInput = codeInput.replace(/\< /g, '<');
    codeInput = codeInput.replace(/ \</g, '<');
    codeInput = codeInput.replace(/\> /g, '>');
    codeInput = codeInput.replace(/ \>/g, '>');
    codeInput = codeInput.replace(/\* /g, '>');
    codeInput = codeInput.replace(/ \*/g, '>');
    codeInput = codeInput.replace(/\/ /g, '>');
    codeInput = codeInput.replace(/ \//g, '>');
    editor2.setValue(codeInput, 1);
};
var beautifyCode = function() {
    var codeInput = editor1.getValue();
    codeInput = js_beautify2(codeInput);
    editor2.setValue(codeInput, 1);
};
var beautifyCodeString = function() {
    var codeInput = editor1.getValue();
    codeInput = js_beautify(codeInput);
    codeInput = js_beautify2(codeInput);
    editor2.setValue(codeInput, 1);
};
var codeCracker = function() {
    var codeInput = editor1.getValue();
    var numberArray = codeInput.match(/(\[|\[ )((\d| \d)+,)+(\d| \d)+(\]| \])/g);
    if (numberArray !== null) {
        var codekeyinput = document.getElementById('secretkey').value;
        codekeyinput = codekeyinput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
        var autoDetect = '';
        if (codekeyinput === "") {
            var codekeyinput = codeInput.match(/('|").{1,}('|")(?=(;| ;))/g);
            eval("codekeyinput = " + codekeyinput + ";");
            autoDetect = ' * WARNING! this Cryptkey was automatically detected and might be wrong. use the Keyinput above to set a custom Key' + String.fromCharCode(10);
        };
        var codeOutput = "/*" + String.fromCharCode(10) + " * generated by www.armatools.fallox.cloud" + String.fromCharCode(10) + autoDetect + " * CrackedCryptKey: " + codekeyinput + String.fromCharCode(10) + ' */' + String.fromCharCode(10);
        eval("numberArray = " + numberArray + ";");
        var counter = 0;
        for (var i = 0; i < (numberArray.length); i++) {
            if (counter > (codekeyinput.length - 1)) {
                counter = 0;
            };
            codeOutput = codeOutput + String.fromCharCode(numberArray[i] / codekeyinput.charCodeAt(counter));
            counter = counter + 1;
        };
        editor2.setValue(codeOutput, 1);
    } else {
        editor2.setValue("//sry, wasnt able to detect encrypted code :( " + String.fromCharCode(10) + "//Codeexample:" + String.fromCharCode(10) + "_Decrypt = {_Key='vQ^N2Qdf@xV.X;.WIq5c';_DecryptMe = _this;_counter = 0;_Array = toArray(_Key);for '_i' from 0 to (count(_decryptme)-1) do {if(_counter > (count(_Array)-1)) then {_counter = 0;};_var = (_decryptme select _i) / (_Array select _counter);_decryptme set[_i,_var];_counter = _counter + 1;};toString(_decryptme);};call compile([ 13570, 8181, 9306, 8892, 5050, 9396, 3200, 11832, 6464, 14400, 9976] call _Decrypt);", 1);
    };
};
var GUIEditorConverter = function() {
    var codeInput = editor1.getValue();
    var match = codeInput.match(/\bclass\b[^\w]+(\w+)[^\w]+(\w+)/g);
    var codeOutput = "////////////////////////////////////////////////////////\n// Generated by armatools.fallox.cloud\n////////////////////////////////////////////////////////\n\n";
    var codekeyinput = document.getElementById('secretkey').value;
    codekeyinput = codekeyinput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
    var codeOutput = codeOutput + "_display = {finddisplay " + codekeyinput + "};\n\n";
    if (match !== null) {
        for (var i = 0; i < match.length; i++) {
            var iString = match[i];
            var iRegexp = /\bclass\b[^\w]+(\w+)[^\w]+(\w+)/;
            var imatch = iRegexp.exec(iString);
            var className = imatch[1];
            var rscClass = imatch[2];
            var iRegexp = new RegExp(match[i] + "([^]+)(?=" + match[i + 1] + ")");
            var imatch = iRegexp.exec(codeInput);
            if (imatch === null) {
                var iRegexp = new RegExp(match[i] + "([^]+)(?=)");
                imatch = iRegexp.exec(codeInput);
            }
            var iRegexp = /\bidc\b[ =][^\d-]+(-\d+|\d+)/;
            var idc = iRegexp.exec(imatch);
            var iRegexp = /\bx\b[ =][^\d-]+([\d\.*\w+ ]+)/;
            var x = iRegexp.exec(imatch);
            var iRegexp = /\by\b[ =][^\d-]+([\d\.*\w+ ]+)/;
            var y = iRegexp.exec(imatch);
            var iRegexp = /\bw\b[ =][^\d-]+([\d\.*\w+ ]+)/;
            var w = iRegexp.exec(imatch);
            var iRegexp = /\bh\b[ =][^\d-]+([\d\.*\w+ ]+)/;
            var h = iRegexp.exec(imatch);
            var iRegexp = /\bsizeEx\b[ =][^\d-]+([\d\.*\w+ ]+)/;
            var sizeEx = iRegexp.exec(imatch);
            var iRegexp = /\btext\b[ =][^\w]+"(.+)(?=";)/;
            var text = iRegexp.exec(imatch);
            var iRegexp = /\baction\b[ =][^\w]+"(.+)(?=";)/;
            var action = iRegexp.exec(imatch);
            var iRegexp = /\btooltip\b[ =][^\w]+"(.+)(?=";)/;
            var tooltip = iRegexp.exec(imatch);
            var iRegexp = /\bfont\b[ =][^\w]+"(.+)(?=";)/;
            var font = iRegexp.exec(imatch);
            var iRegexp = /\bcolorBackground\[\][ =][^\w]+{(.+)(?=};)/;
            var colorBackground = iRegexp.exec(imatch);
            var iRegexp = /\bcolorText\[\][ =][^\w]+{(.+)(?=};)/;
            var colorText = iRegexp.exec(imatch);
            var iRegexp = /\bcolorActive\[\][ =][^\w]+{(.+)(?=};)/;
            var colorActive = iRegexp.exec(imatch);
            if (idc !== null) {
                codeOutput = codeOutput + "_" + className + " = (call _display) ctrlCreate [\"" + rscClass + "\", " + idc[1] + "];\n";
                if (text !== null) {
                    if (rscClass === "RscStructuredText") {
                        codeOutput = codeOutput + "_" + className + " ctrlSetStructuredText parseText \"" + text[1] + "\";\n"
                    } else {
                        codeOutput = codeOutput + "_" + className + " ctrlSetText \"" + text[1] + "\";\n"
                    }
                }
                codeOutput = codeOutput + "_" + className + " ctrlSetPosition [" + x[1] + ", " + y[1] + ", " + w[1] + ", " + h[1] + "];\n";
                if (font !== null) {
                    codeOutput = codeOutput + "_" + className + " ctrlSetFont \"" + font[1] + "\";\n"
                }
                if (colorText !== null) {
                    codeOutput = codeOutput + "_" + className + " ctrlSetTextColor [" + colorText[1] + "];\n"
                }
                if (colorBackground !== null) {
                    codeOutput = codeOutput + "_" + className + " ctrlSetBackgroundColor [" + colorBackground[1] + "];\n"
                }
                if (colorActive !== null) {
                    codeOutput = codeOutput + "_" + className + " ctrlSetActiveColor [" + colorActive[1] + "];\n"
                }
                if (tooltip !== null) {
                    codeOutput = codeOutput + "_" + className + " ctrlSetTooltip \"" + tooltip[1] + "\";\n"
                }
                if (sizeEx !== null) {
                    codeOutput = codeOutput + "_" + className + " ctrlSetFontHeight " + sizeEx[1] + ";\n"
                }
                if (action !== null) {
                    codeOutput = codeOutput + "_" + className + " buttonsetAction \"" + action[1] + "\";\n"
                }
                codeOutput = codeOutput + "_" + className + " ctrlCommit 0;\n\n";
            }
        }
        editor2.setValue(codeOutput, 1);
    } else {
        editor2.setValue("//sry, wasnt able to detect GUI structure :(" + String.fromCharCode(10) + "//Codeexample:" + String.fromCharCode(10) + 'class RscEdit_1400: RscEdit\n{\n	idc = 1400;\n	text = "//code"; //--- ToDo: Localize;\n	x = 0.29375 * safezoneW + safezoneX;\n	y = 0.357 * safezoneH + safezoneY;\n	w = 0.4125 * safezoneW;\n	h = 0.044 * safezoneH;\n	colorBackground[] = {1,1,1,1};\n};\nclass RscButton_1600: RscButton\n{\n	idc = 1600;\n	text = "execute"; //--- ToDo: Localize;\n	x = 0.29375 * safezoneW + safezoneX;\n	y = 0.401 * safezoneH + safezoneY;\n	w = 0.4125 * safezoneW;\n	h = 0.044 * safezoneH;\n	colorText[] = {0.306,0.694,0.2,1};\n	colorBackground[] = {1,1,1,1};\n	colorActive[] = {1,1,1,1};\n	tooltip = "executes SQF code"; //--- ToDo: Localize;\n	action = "call compile (ctrlText 1400); systemchat format[""executed: %1"",ctrlText 1400]"; //--- ToDo: Localize;\n};\nclass RscFrame_1800: RscFrame\n{\n	idc = 1800;\n	x = 0.29375 * safezoneW + safezoneX;\n	y = 0.357 * safezoneH + safezoneY;\n	w = 0.4125 * safezoneW;\n	h = 0.088 * safezoneH;\n	colorText[] = {0.306,0.694,0.2,1};\n	colorBackground[] = {0.306,0.694,0.2,1};\n};', 1);
    };
};
var SQFConverter = function() {
    var codeInput = editor1.getValue();
    var match = codeInput.match(/\bclass\b[^\w]+(\w+)[^\w]+(\w+)/g);
    var codeOutput = "////////////////////////////////////////////////////////\n// Generated by armatools.fallox.cloud\n////////////////////////////////////////////////////////\n\n";
    var codekeyinput = document.getElementById('secretkey').value;
    codekeyinput = codekeyinput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
    var codeOutput = codeOutput + "_display = {finddisplay " + codekeyinput + "};\n\n";
    if (match !== null) {
        for (var i = 0; i < match.length; i++) {
            var iString = match[i];
            var iRegexp = /\bclass\b[^\w]+(\w+)[^\w]+(\w+)/;
            var imatch = iRegexp.exec(iString);
            var className = imatch[1];
            var rscClass = imatch[2];
            var iRegexp = new RegExp(match[i] + "([^]+)(?=" + match[i + 1] + ")");
            var imatch = iRegexp.exec(codeInput);
            if (imatch === null) {
                var iRegexp = new RegExp(match[i] + "([^]+)(?=)");
                imatch = iRegexp.exec(codeInput);
            }
            var iRegexp = /\bidc\b[ =][^\d-]+(-\d+|\d+)/;
            var idc = iRegexp.exec(imatch);
            var iRegexp = /\bx\b[ =][^\d-]+([\d\.*\w+ ]+)/;
            var x = iRegexp.exec(imatch);
            var iRegexp = /\by\b[ =][^\d-]+([\d\.*\w+ ]+)/;
            var y = iRegexp.exec(imatch);
            var iRegexp = /\bw\b[ =][^\d-]+([\d\.*\w+ ]+)/;
            var w = iRegexp.exec(imatch);
            var iRegexp = /\bh\b[ =][^\d-]+([\d\.*\w+ ]+)/;
            var h = iRegexp.exec(imatch);
            var iRegexp = /\bsizeEx\b[ =][^\d-]+([\d\.*\w+ ]+)/;
            var sizeEx = iRegexp.exec(imatch);
            var iRegexp = /\btext\b[ =][^\w]+"(.+)(?=";)/;
            var text = iRegexp.exec(imatch);
            var iRegexp = /\baction\b[ =][^\w]+"(.+)(?=";)/;
            var action = iRegexp.exec(imatch);
            var iRegexp = /\btooltip\b[ =][^\w]+"(.+)(?=";)/;
            var tooltip = iRegexp.exec(imatch);
            var iRegexp = /\bfont\b[ =][^\w]+"(.+)(?=";)/;
            var font = iRegexp.exec(imatch);
            var iRegexp = /\bcolorBackground\[\][ =][^\w]+{(.+)(?=};)/;
            var colorBackground = iRegexp.exec(imatch);
            var iRegexp = /\bcolorText\[\][ =][^\w]+{(.+)(?=};)/;
            var colorText = iRegexp.exec(imatch);
            var iRegexp = /\bcolorActive\[\][ =][^\w]+{(.+)(?=};)/;
            var colorActive = iRegexp.exec(imatch);
            if (idc !== null) {
                codeOutput = codeOutput + "_" + className + " = (call _display) ctrlCreate [\"" + rscClass + "\", " + idc[1] + "];\n";
                if (text !== null) {
                    if (rscClass === "RscStructuredText") {
                        codeOutput = codeOutput + "_" + className + " ctrlSetStructuredText parseText \"" + text[1] + "\";\n"
                    } else {
                        codeOutput = codeOutput + "_" + className + " ctrlSetText \"" + text[1] + "\";\n"
                    }
                }
                codeOutput = codeOutput + "_" + className + " ctrlSetPosition [" + x[1] + ", " + y[1] + ", " + w[1] + ", " + h[1] + "];\n";
                if (font !== null) {
                    codeOutput = codeOutput + "_" + className + " ctrlSetFont \"" + font[1] + "\";\n"
                }
                if (colorText !== null) {
                    codeOutput = codeOutput + "_" + className + " ctrlSetTextColor [" + colorText[1] + "];\n"
                }
                if (colorBackground !== null) {
                    codeOutput = codeOutput + "_" + className + " ctrlSetBackgroundColor [" + colorBackground[1] + "];\n"
                }
                if (colorActive !== null) {
                    codeOutput = codeOutput + "_" + className + " ctrlSetActiveColor [" + colorActive[1] + "];\n"
                }
                if (tooltip !== null) {
                    codeOutput = codeOutput + "_" + className + " ctrlSetTooltip \"" + tooltip[1] + "\";\n"
                }
                if (sizeEx !== null) {
                    codeOutput = codeOutput + "_" + className + " ctrlSetFontHeight " + sizeEx[1] + ";\n"
                }
                if (action !== null) {
                    codeOutput = codeOutput + "_" + className + " buttonsetAction \"" + action[1] + "\";\n"
                }
                codeOutput = codeOutput + "_" + className + " ctrlCommit 0;\n\n";
            }
        }
        editor2.setValue(codeOutput, 1);
    } else {
        editor2.setValue("//sry, wasnt able to detect GUI structure :(" + String.fromCharCode(10) + "//Codeexample:" + String.fromCharCode(10) + 'class RscEdit_1400: RscEdit\n{\n	idc = 1400;\n	text = "//code"; //--- ToDo: Localize;\n	x = 0.29375 * safezoneW + safezoneX;\n	y = 0.357 * safezoneH + safezoneY;\n	w = 0.4125 * safezoneW;\n	h = 0.044 * safezoneH;\n	colorBackground[] = {1,1,1,1};\n};\nclass RscButton_1600: RscButton\n{\n	idc = 1600;\n	text = "execute"; //--- ToDo: Localize;\n	x = 0.29375 * safezoneW + safezoneX;\n	y = 0.401 * safezoneH + safezoneY;\n	w = 0.4125 * safezoneW;\n	h = 0.044 * safezoneH;\n	colorText[] = {0.306,0.694,0.2,1};\n	colorBackground[] = {1,1,1,1};\n	colorActive[] = {1,1,1,1};\n	tooltip = "executes SQF code"; //--- ToDo: Localize;\n	action = "call compile (ctrlText 1400); systemchat format[""executed: %1"",ctrlText 1400]"; //--- ToDo: Localize;\n};\nclass RscFrame_1800: RscFrame\n{\n	idc = 1800;\n	x = 0.29375 * safezoneW + safezoneX;\n	y = 0.357 * safezoneH + safezoneY;\n	w = 0.4125 * safezoneW;\n	h = 0.088 * safezoneH;\n	colorText[] = {0.306,0.694,0.2,1};\n	colorBackground[] = {0.306,0.694,0.2,1};\n};', 1);
    };
};
var cryptCode = function() {
    var codeInput = editor1.getValue();
    var codeOutput = "call compile tostring[";
    for (var i = 0; i < codeInput.length; i++) {
        codeOutput = codeOutput + codeInput.charCodeAt(i) + ",";
    }
    codeOutput = codeOutput + "];";
    codeOutput = codeOutput.replace(',];', '];');
    editor2.setValue(codeOutput, 1);
};
var decryptCode = function() {
    var codeInput = editor2.getValue();
    var decryptIt = "";
    codeInput = codeInput.replace('call', '');
    codeInput = codeInput.replace('compile', '');
    codeInput = codeInput.replace('tostring', '');
    codeInput = codeInput.replace(';', '');
    codeInput = JSON.parse(codeInput);
    for (i = 0; i < codeInput.length; i++) {
        decryptIt = decryptIt + String.fromCharCode(codeInput[i]);
    }
    editor1.setValue(decryptIt, 1);
};
var splitString = function() {
    var codeInput = editor1.getValue();
    var codeOutput = "call compile (";
    for (var i = 0; i < codeInput.length; i++) {
        codeOutput = codeOutput + "'" + codeInput[i] + "'+";
    }
    codeOutput = replaceAll(codeOutput, "'''", '"\'"');
    codeOutput = codeOutput + ");";
    codeOutput = codeOutput.replace('+);', ');');
    editor2.setValue(codeOutput, 1);
};
var ReverseString = function() {
    var codeInput = editor1.getValue();
    var codeOutput = codeInput;
    codeOutput = replaceAll(codeOutput, "'", "'+\"'\"+'");
    codeOutput = "_1=toArray('" + codeOutput.split('').reverse().join('') + "');";
    codeOutput = codeOutput + "reverse _1;call compile toString _1;"
    editor2.setValue(codeOutput, 1);
};
var CaesarCipherString = function() {
    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }
    var codeInput = editor1.getValue();
    var CodePlain = codeInput.split('');
    var CaesarPlain = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');
    var CaesarCipher = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');
    shuffle(CaesarCipher);
    var codeOutput = '';
    for (var i = 0; i < CodePlain.length; i++) {
        var a = CaesarPlain.indexOf(CodePlain[i]);
        if (a !== -1) {
            a = CaesarCipher[a];
            codeOutput = codeOutput + a;
        } else {
            codeOutput = codeOutput + CodePlain[i];
        };
    };
    codeOutput = replaceAll(codeOutput, "'", "'+\"'\"+'");
    CaesarCipher = CaesarCipher.join('');
    CaesarCipher = CaesarCipher.replace(/,/g, '');
    CaesarPlain = CaesarPlain.join('');
    CaesarPlain = CaesarPlain.replace(/,/g, '');
    codeOutput = "[('" + codeOutput + "')]call{private['_0','_1','_2','_3'];_0=_this select 0;_1=[];_2=toArray '" + CaesarCipher + "';_3=toArray '" + CaesarPlain + "';{if(_2 find _x >=0)then{_1 pushBack (_3 select(_2 find _x));}else{_1 pushBack _x;};}forEach toArray _0;call compile toString _1};"
    editor2.setValue(codeOutput, 1);
};
var desplitString = function() {
    var codeInput = editor2.getValue();
    codeInput = codeInput.replace('call', '');
    codeInput = codeInput.replace('compile', '');
    codeInput = codeInput.replace(');', ')');
    codeInput = "codeInput = " + codeInput;
    eval(codeInput);
    editor1.setValue(codeInput, 1);
};
var cryptCodekey = function() {
    var codeInput = editor1.getValue();
    var codeOutput = "[]call{private['_1'];_1=[];{_1 pushBack sqrt _x}forEach [";
    for (var i = 0; i < codeInput.length; i++) {
        var codeCrypt = codeInput.charCodeAt(i);
        codeCrypt = codeCrypt * codeCrypt;
        codeOutput = codeOutput + codeCrypt + ",";
    }
    codeOutput = codeOutput + "];call compile toString _1;};";
    codeOutput = codeOutput.replace(',];', '];');
    editor2.setValue(codeOutput, 1);
};
var RandomCryptCodekey = function() {
    var codeInput = editor1.getValue();
    var codekey = Math.round(1000 * Math.random()) + 15000;
    var codeOutput = "[]call{private['_1'];_1=[];{_1 pushBack sqrt (_x-(" + codekey + "));}forEach [";
    for (var i = 0; i < codeInput.length; i++) {
        var codeCrypt = codeInput.charCodeAt(i);
        codeCrypt = (codeCrypt * codeCrypt) + codekey;
        codeOutput = codeOutput + codeCrypt + ",";
    }
    codeOutput = codeOutput + "];call compile toString _1;};";
    codeOutput = codeOutput.replace(',];', '];');
    editor2.setValue(codeOutput, 1);
};
var decryptCodekey = function() {
    var codeInput = editor2.getValue();
    var decryptIt = "";
    codeInput = codeInput.replace("[]call{private['_1'];_1=[];{_1 pushBack sqrt _x}forEach ", '');
    codeInput = codeInput.replace(';call compile toString _1;};', '');
    codeInput = JSON.parse(codeInput);
    for (i = 0; i < codeInput.length; i++) {
        decryptIt = decryptIt + String.fromCharCode(Math.sqrt(codeInput[i]));
    }
    editor1.setValue(decryptIt, 1);
};
var cryptCodekeytoString = function() {
    var codeInput = editor1.getValue();
    var codeOutput = "[]call{private['_1'];_1=[];{_1 pushBack sqrt _x}forEach toArray('";
    for (var i = 0; i < codeInput.length; i++) {
        var codeCrypt = codeInput.charCodeAt(i);
        codeCrypt = String.fromCharCode(codeCrypt * codeCrypt);
        codeOutput = codeOutput + codeCrypt;
    }
    codeOutput = codeOutput + "');";
    codeOutput = codeOutput.replace("');", "');call compile toString _1;};");
    editor2.setValue(codeOutput, 1);
};
var RandomCryptkeytoString = function() {
    var codeInput = editor1.getValue();
    var codekey = Math.round(1000 * Math.random()) + 15000;
    var codeOutput = "[]call{private['_1'];_1=[];{_1 pushBack sqrt(_x-(toArray '" + String.fromCharCode(codekey) + "' select 0))}forEach toArray('";
    for (var i = 0; i < codeInput.length; i++) {
        var codeCrypt = codeInput.charCodeAt(i);
        codeCrypt = String.fromCharCode((codeCrypt * codeCrypt) + codekey);
        codeOutput = codeOutput + codeCrypt;
    }
    codeOutput = codeOutput + "');";
    codeOutput = codeOutput.replace("');", "');call compile toString _1;};");
    editor2.setValue(codeOutput, 1);
};
var RandomCryptkeyPlayerid = function() {
    var codeInput = editor1.getValue();
    var codekeyinput = document.getElementById('secretkey').value;
    codekeyinput = codekeyinput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
    if (/^(\b7656119(\d{10})\b)$/.test(codekeyinput)) {
        var codekey = 0;
        for (var i = 0; i < codekeyinput.length; i++) {
            codekey = codekey + Number(codekeyinput[i]);
        };
        var codeOutput = "[]call{private['_0','_1','_2'];_0=getPlayerUID player;_1=[];_2=0;for '_i' from 0 to count _0 do {_2 = _2 + parseNumber (_0 select [_i,1])};{_1 pushBack sqrt(_x / (_2))} forEach[";
        for (var i = 0; i < codeInput.length; i++) {
            var codeCrypt = codeInput.charCodeAt(i);
            codeCrypt = (codeCrypt * codeCrypt) * codekey;
            codeOutput = codeOutput + codeCrypt + ",";
        }
        codeOutput = codeOutput + "];call compile toString _1};";
        codeOutput = codeOutput.replace(',];', '];');
        editor2.setValue(codeOutput, 1);
    } else {
        editor2.setValue("//ERROR: please put a valid PlayerID in the textinput above! example: 76561192432151512", 1);
    };
};
var IsecoCryptkey = function() {
    var codeInput = editor1.getValue();
    var codekeyinput = document.getElementById('secretkey').value;
    codekeyinput = codekeyinput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
    if (codekeyinput == "") {
        codekeyinput = Math.random().toString(36).substring(7);
    };
    var numberArray = [];
    for (var i = 0; i < codeInput.length; i++) {
        numberArray.push(codeInput.charCodeAt(i));
    }
    var codeOutput = "_Decrypt = {_Key='" + codekeyinput + "';_DecryptMe = _this;_counter = 0;_Array = toArray(_Key);for '_i' from 0 to (count(_decryptme)-1) do {if(_counter > (count(_Array)-1)) then {_counter = 0;};_var = (_decryptme select _i) / (_Array select _counter);_decryptme set[_i,_var];_counter = _counter + 1;};toString(_decryptme);};call compile([";
    var counter = 0;
    for (var i = 0; i < (numberArray.length); i++) {
        if (counter > (codekeyinput.length - 1)) {
            counter = 0;
        };
        codeOutput = codeOutput + (numberArray[i] * codekeyinput.charCodeAt(counter) + ",");
        counter = counter + 1;
    };
    codeOutput = codeOutput + "]call _Decrypt);";
    codeOutput = codeOutput.replace(",]", "]");
    editor2.setValue(codeOutput, 1);
};
var IsecoCryptkeySpoody = function() {
    var codeInput = editor1.getValue();
    var codekeyinput = document.getElementById('secretkey').value;
    codekeyinput = codekeyinput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
    if (codekeyinput == "") {
        codekeyinput = Math.random().toString(36).substring(7);
    };
    var numberArray = [];
    for (var i = 0; i < codeInput.length; i++) {
        numberArray.push(codeInput.charCodeAt(i));
    }
    var codeEncryptFnc = "{_Key='" + codekeyinput + "';_DecryptMe = _this;_counter = 0;_counter2 = 0;_Array = toArray(_Key);_hash = toArray (str _Decrypt);reverse _hash;for '_i' from 0 to (count(_decryptme)-1) do {if(_counter > (count(_Array)-1)) then {_counter = 0;};if(_counter2 > (count(_hash)-1)) then {_counter2 = 0;};_var = ((_decryptme select _i) / (_Array select _counter)) - (_hash select _counter2);_decryptme set[_i,_var];_counter = _counter + 1;_counter2 = _counter2 + 1};call compile toString(_decryptme)}";
    codeEncryptFncReverse = codeEncryptFnc.split("").reverse().join("");
    var codeOutput = "";
    var counter = 0;
    var counter2 = 0;
    for (var i = 0; i < (numberArray.length); i++) {
        if (counter > (codekeyinput.length - 1)) {
            counter = 0;
        };
        if (counter2 > (codeEncryptFncReverse.length - 1)) {
            counter2 = 0;
        };
        codeOutput = codeOutput + ((numberArray[i] + codeEncryptFncReverse.charCodeAt(counter2)) * codekeyinput.charCodeAt(counter) + ",");
        counter = counter + 1;
        counter2 = counter2 + 1;
    };
    codeOutput = "_Decrypt = " + codeEncryptFnc + ";[" + codeOutput + "]call _Decrypt;";
    codeOutput = codeOutput.replace(",]", "]");
    editor2.setValue(codeOutput, 1);
};
var MolaronCryptkey = function() {
    var codeInput = editor1.getValue();
    var codekeyinput = document.getElementById('secretkey').value;
    codekeyinput = codekeyinput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
    if (codekeyinput == "") {
        codekeyinput = Math.random().toString(36).substring(7);
    };
    var numberArray = [];
    for (var i = 0; i < codeInput.length; i++) {
        numberArray.push(codeInput.charCodeAt(i));
    }
    var codeOutput = "_Decrypt = {_Key='" + codekeyinput + "';_DecryptMe = toArray (_this select 0);_counter = 0;_Array = toArray(_Key);for '_i' from 0 to (count(_decryptme)-1) do {if(_counter > (count(_Array)-1)) then {_counter = 0;};_var = (_decryptme select _i) - (_Array select _counter);_decryptme set[_i,_var];_counter = _counter + 1;};toString(_decryptme);};call compile(['";
    var counter = 0;
    for (var i = 0; i < (numberArray.length); i++) {
        if (counter > (codekeyinput.length - 1)) {
            counter = 0;
        };
        codeOutput = codeOutput + String.fromCharCode(numberArray[i] + codekeyinput.charCodeAt(counter));
        counter = counter + 1;
    };
    codeOutput = codeOutput + "']call _Decrypt);";
    codeOutput = codeOutput.replace(",]", "]");
    editor2.setValue(codeOutput, 1);
};
var IsecoCryptkeyGUID = function() {
    var codeInput = editor1.getValue();
    var codekeyinput = document.getElementById('secretkey').value;
    codekeyinput = codekeyinput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
    if (/^(\b7656119(\d{10})\b)$/.test(codekeyinput)) {
        var numberArray = [];
        for (var i = 0; i < codeInput.length; i++) {
            numberArray.push(codeInput.charCodeAt(i));
        }
        var codeOutput = "_Decrypt = {_Key = getPlayerUID player;_DecryptMe = _this;_counter = 0;_Array = toArray(_Key);for '_i' from 0 to (count(_decryptme)-1) do {if(_counter > (count(_Array)-1)) then {_counter = 0;};_var = (_decryptme select _i) - (_Array select _counter);_decryptme set[_i,_var];_counter = _counter + 1;};toString(_decryptme);};call compile([";
        var counter = 0;
        for (var i = 0; i < (numberArray.length); i++) {
            if (counter > (codekeyinput.length - 1)) {
                counter = 0;
            };
            codeOutput = codeOutput + (numberArray[i] * codekeyinput.charCodeAt(counter) + ",");
            counter = counter + 1;
        };
        codeOutput = codeOutput + "]call _Decrypt);";
        codeOutput = codeOutput.replace(",]", "]");
        editor2.setValue(codeOutput, 1);
    } else {
        editor2.setValue("//ERROR: please put a valid PlayerID in the textinput above! example: 76561192432151512", 1);
    };
};
var SpoodyCryptkeyGUID = function() {
    var codeInput = editor1.getValue();
    var codekeyinput = document.getElementById('secretkey').value;
    codekeyinput = codekeyinput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
    if (/^(\b7656119(\d{10})\b)$/.test(codekeyinput)) {
        var numberArray = [];
        for (var i = 0; i < codeInput.length; i++) {
            numberArray.push(codeInput.charCodeAt(i));
        }
        var codeEncryptFnc = "{_Key = getPlayerUID player;_DecryptMe = _this;_counter = 0;_counter2 = 0;_Array = toArray(_Key);_hash = toArray (str _Decrypt);reverse _hash;for '_i' from 0 to (count(_decryptme)-1) do {if(_counter > (count(_Array)-1)) then {_counter = 0;};if(_counter2 > (count(_hash)-1)) then {_counter2 = 0;};_var = ((_decryptme select _i) / (_Array select _counter)) - (_hash select _counter2);_decryptme set[_i,_var];_counter = _counter + 1;_counter2 = _counter2 + 1};call compile toString(_decryptme)}";
        codeEncryptFncReverse = codeEncryptFnc.split("").reverse().join("");
        var codeOutput = "";
        var counter = 0;
        var counter2 = 0;
        for (var i = 0; i < (numberArray.length); i++) {
            if (counter > (codekeyinput.length - 1)) {
                counter = 0;
            };
            if (counter2 > (codeEncryptFncReverse.length - 1)) {
                counter2 = 0;
            };
            codeOutput = codeOutput + ((numberArray[i] + codeEncryptFncReverse.charCodeAt(counter2)) * codekeyinput.charCodeAt(counter) + ",");
            counter = counter + 1;
            counter2 = counter2 + 1;
        };
        codeOutput = "_Decrypt = " + codeEncryptFnc + ";[" + codeOutput + "]call _Decrypt;";
        codeOutput = codeOutput.replace(",]", "]");
        editor2.setValue(codeOutput, 1);
    } else {
        editor2.setValue("//ERROR: please put a valid PlayerID in the textinput above! example: 76561192432151512", 1);
    };
};
var CodePoseidon = function() {
    var codeInput = editor1.getValue();
    var codekeyinput = document.getElementById('secretkey').value;
    codekeyinput = codekeyinput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
    var firstArray = codeInput.match(/#x([^#]+)x#/g);
    if (/^(\b7656119(\d{10})\b)$/.test(codekeyinput)) {
        if (firstArray !== null) {
            function shuffle(a) {
                var j, x, i;
                for (i = a.length; i; i -= 1) {
                    j = Math.floor(Math.random() * i);
                    x = a[i - 1];
                    a[i - 1] = a[j];
                    a[j] = x;
                }
            }
            var matchArray = [];
            for (var i = 0; i < firstArray.length; i++) {
                matchArray.push((firstArray[i]).replace(/(#x|x#)/g, ''));
            };
            console.log(matchArray);
            codeInput = codeInput.replace(/(#x|x#)/g, '');
            var codekey = 0;
            for (var i = 0; i < matchArray.length; i++) {
                var codeMatch = matchArray[i];
                var codeMatchUID = "if (getPlayerUID player != '" + codekeyinput + "') exitWith {player setPos [1e14,1e14,1e14]};" + codeMatch;
                var keyinput = Math.random().toString(36).substring(7);
                var numberArray = [];
                for (var j = 0; j < codeMatchUID.length; j++) {
                    numberArray.push(codeMatchUID.charCodeAt(j));
                }
                var codeEncryptFnc = "{_Key='" + keyinput + "';_DecryptMe = _this;_counter = 0;_counter2 = 0;_Array = toArray(_Key);_hash = toArray (str _Decrypt);reverse _hash;for '_i' from 0 to (count(_decryptme)-1) do {if(_counter > (count(_Array)-1)) then {_counter = 0;};if(_counter2 > (count(_hash)-1)) then {_counter2 = 0;};_var = ((_decryptme select _i) / (_Array select _counter)) - (_hash select _counter2);_decryptme set[_i,_var];_counter = _counter + 1;_counter2 = _counter2 + 1};call compile toString(_decryptme)}";
                codeEncryptFncReverse = codeEncryptFnc.split("").reverse().join("");
                var counter = 0;
                var counter2 = 0;
                var codeOutput = "";
                for (var j = 0; j < (numberArray.length); j++) {
                    if (counter > (keyinput.length - 1)) {
                        counter = 0;
                    };
                    if (counter2 > (codeEncryptFncReverse.length - 1)) {
                        counter2 = 0;
                    };
                    codeOutput = codeOutput + ((numberArray[j] + codeEncryptFncReverse.charCodeAt(counter2)) * keyinput.charCodeAt(counter) + ",");
                    counter = counter + 1;
                    counter2 = counter2 + 1;
                };
                codeOutput = "_Decrypt = " + codeEncryptFnc + ";[" + codeOutput + "]call _Decrypt;";
                codeOutput = codeOutput.replace(",]", "]");
                var CodePlain = codeOutput.split('');
                var CaesarPlain = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');
                var CaesarCipher = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('');
                shuffle(CaesarCipher);
                var codeShuffle = '';
                for (var j = 0; j < CodePlain.length; j++) {
                    var a = CaesarPlain.indexOf(CodePlain[j]);
                    if (a !== -1) {
                        a = CaesarCipher[a];
                        codeShuffle = codeShuffle + a;
                    } else {
                        codeShuffle = codeShuffle + CodePlain[j];
                    };
                };
                codeShuffle = replaceAll(codeShuffle, "'", "'+\"'\"+'");
                CaesarCipher = CaesarCipher.join('');
                CaesarCipher = CaesarCipher.replace(/,/g, '');
                CaesarPlain = CaesarPlain.join('');
                CaesarPlain = CaesarPlain.replace(/,/g, '');
                codeOutput = "[('" + codeShuffle + "')]call{private['_0','_1','_2','_3'];_0=_this select 0;_1=[];_2=toArray '" + CaesarCipher + "';_3=toArray '" + CaesarPlain + "';{if(_2 find _x >=0)then{_1 pushBack (_3 select(_2 find _x));}else{_1 pushBack _x;};}forEach toArray _0;call compile toString _1};"
                codeInput = codeInput.replace(codeMatch, codeOutput)
            };
            editor2.setValue(codeInput);
        } else {
            editor2.setValue('//mark the places that should get encrypted with "#x" and "x#"\n//example:\nif (typeName _unit == "SCALAR") exitWith {\n	switch (_unit) do {\n		case 0 : {\n			#x _arguments call _function; x#\n		};\n		case 1 : {\n			if (isServer) then {\n				#x _arguments call _function; x#\n			} else {\n				#x publicVariableServer "AGM_Core_remoteFnc"; x#\n			};\n		};\n		case 2 : {\n		    #x\n			_arguments call _function;\n\n			AGM_Core_remoteFnc set [2, 0];\n			publicVariable "AGM_Core_remoteFnc";\n			x#\n		};\n		case 3 : {\n			if (isDedicated) then {\n				#x _arguments call _function; x#\n			} else {\n				#x if (!isServer) then {publicVariableServer "AGM_Core_remoteFnc"}; x#\n			};\n		};\n	};\n};', 1);
        };
    } else {
        editor2.setValue("//ERROR: please put a valid PlayerID in the textinput above!\n//example: 76561192432151512", 1);
    };
};
var RandomCryptkeytoStringSplit = function() {
    var codeInput = editor1.getValue();
    var codekey = Math.round(1000 * Math.random()) + 15000;
    var codeOutput = "[]call{private['_1'];_1=[];{_1 pushBack sqrt(_x-(toArray '" + String.fromCharCode(codekey) + "' select 0))}forEach toArray('";
    for (var i = 0; i < codeInput.length; i++) {
        var codeCrypt = codeInput.charCodeAt(i);
        codeCrypt = String.fromCharCode((codeCrypt * codeCrypt) + codekey);
        codeOutput = codeOutput + codeCrypt + "'+'";
    }
    codeOutput = codeOutput + "');";
    codeOutput = codeOutput.replace("');", "');call compile toString _1;};");
    editor2.setValue(codeOutput, 1);
};
var cryptkeytoString = function() {
    var codeInput = editor1.getValue();
    var codeOutput = "[]call{private['_1'];_1=[];{_1 pushBack sqrt _x}forEach toArray('";
    for (var i = 0; i < codeInput.length; i++) {
        var codeCrypt = codeInput.charCodeAt(i);
        codeCrypt = String.fromCharCode(codeCrypt * codeCrypt);
        codeOutput = codeOutput + codeCrypt;
    }
    codeOutput = codeOutput + "');";
    codeOutput = codeOutput.replace("');", "');call compile toString _1;};");
    editor2.setValue(codeOutput, 1);
};
var decryptCodekeytoString = function() {
    var codeInput = editor2.getValue();
    var decryptIt = "";
    codeInput = codeInput.replace("[]call{private['_1'];_1=[];{_1 pushBack sqrt _x}forEach toArray('", '');
    codeInput = codeInput.replace("');call compile toString _1;};", '');
    codeInput = replaceAll(codeInput, "'", '');
    for (i = 0; i < codeInput.length; i++) {
        decryptIt = decryptIt + String.fromCharCode(Math.sqrt(codeInput.charCodeAt(i)));
    }
    editor1.setValue(decryptIt, 1);
};
var cryptCodekeytoStringSplit = function() {
    var codeInput = editor1.getValue();
    var codeOutput = "[]call{private['_1'];_1=[];{_1 pushBack sqrt _x}forEach toArray('";
    for (var i = 0; i < codeInput.length; i++) {
        var codeCrypt = codeInput.charCodeAt(i);
        codeCrypt = String.fromCharCode(codeCrypt * codeCrypt);
        codeOutput = codeOutput + codeCrypt + "'+'";
    }
    codeOutput = codeOutput + "');";
    codeOutput = codeOutput.replace("+''", "");
    codeOutput = codeOutput.replace("');", "');call compile toString _1;};");
    editor2.setValue(codeOutput, 1);
};
var decryptCodekeytoStringSplit = function() {
    var codeInput = editor2.getValue();
    var decryptIt = "";
    codeInput = codeInput.replace("[]call{private['_1'];_1=[];{_1 pushBack sqrt _x}forEach toArray('", '');
    codeInput = codeInput.replace("');call compile toString _1;};", '');
    codeInput = replaceAll(codeInput, "+", '');
    codeInput = replaceAll(codeInput, "'", '');
    for (i = 0; i < codeInput.length; i++) {
        decryptIt = decryptIt + String.fromCharCode(Math.sqrt(codeInput.charCodeAt(i)));
    }
    editor1.setValue(decryptIt, 1);
};
var SScryptCodekey = function() {
    var codeInput = editor1.getValue();
    var codeOutput = "//put this serversided" + String.fromCharCode(10) + "SeverSide_Decrypt = compilefinal\"private['_1'];_1=[];{_1 pushBack sqrt _x}forEach (_this select 0);call compile toString _1\";" + String.fromCharCode(10) + "publicVariable \"SeverSide_Decrypt\";" + String.fromCharCode(10) + String.fromCharCode(10) + "//put this clientsided" + String.fromCharCode(10) + "[[";
    for (var i = 0; i < codeInput.length; i++) {
        var codeCrypt = codeInput.charCodeAt(i);
        codeCrypt = codeCrypt * codeCrypt;
        codeOutput = codeOutput + codeCrypt + ",";
    }
    codeOutput = codeOutput + "]call SeverSide_Decrypt;";
    codeOutput = codeOutput.replace(',]', ']]');
    editor2.setValue(codeOutput, 1);
};
var SScryptCodekeyRandom = function() {
    var codeInput = editor1.getValue();
    var codekey = Math.round(1000 * Math.random()) + 15000;
    var codeOutput = "//put this serversided" + String.fromCharCode(10) + "SeverSide_Decrypt = compilefinal\"private['_1','_2'];_1=[];_2=_this select 1 select 0;{_1 pushBack sqrt ((_x) - _2)}forEach (_this select 0);call compile toString _1\";" + String.fromCharCode(10) + "publicVariable \"SeverSide_Decrypt\";" + String.fromCharCode(10) + String.fromCharCode(10) + "//put this clientsided" + String.fromCharCode(10) + "[[";
    for (var i = 0; i < codeInput.length; i++) {
        var codeCrypt = codeInput.charCodeAt(i);
        codeCrypt = (codeCrypt * codeCrypt) + codekey;
        codeOutput = codeOutput + codeCrypt + ",";
    }
    codeOutput = codeOutput + "]]call SeverSide_Decrypt;";
    codeOutput = codeOutput.replace(',]', '],[' + codekey + ']');
    editor2.setValue(codeOutput, 1);
};
var SSdecryptCodekey = function() {
    var codeInput = editor2.getValue();
    var decryptIt = "";
    codeInput = codeInput.replace("[]call{private['_1'];_1=[];{_1 pushBack sqrt _x}forEach ", '');
    codeInput = codeInput.replace(';', '');
    codeInput = JSON.parse(codeInput);
    for (i = 0; i < codeInput.length; i++) {
        decryptIt = decryptIt + String.fromCharCode(Math.sqrt(codeInput[i]));
    }
    editor1.setValue(decryptIt, 1);
};
var SScryptCodekeytoString = function() {
    var codeInput = editor1.getValue();
    var codeOutput = "//put this serversided" + String.fromCharCode(10) + "SeverSide_Decrypt = compilefinal\"private['_1'];_1=[];{_1 pushBack sqrt _x}forEach toArray(_this select 0);call compile toString _1;\";" + String.fromCharCode(10) + "publicVariable \"SeverSide_Decrypt\";" + String.fromCharCode(10) + String.fromCharCode(10) + "//put this clientsided" + String.fromCharCode(10) + "[\"";
    for (var i = 0; i < codeInput.length; i++) {
        var codeCrypt = codeInput.charCodeAt(i);
        codeCrypt = String.fromCharCode(codeCrypt * codeCrypt);
        codeOutput = codeOutput + codeCrypt;
    }
    codeOutput = codeOutput + "\"]call SeverSide_Decrypt;";
    editor2.setValue(codeOutput, 1);
};
var SScryptCodekeytoStringRandom = function() {
    var codeInput = editor1.getValue();
    var codekey = Math.round(1000 * Math.random()) + 15000;
    var codeOutput = "//put this serversided" + String.fromCharCode(10) + "SeverSide_Decrypt = compilefinal\"private['_1','_2'];_1=[];_2=toArray(_this select 1)select 0;{_1 pushBack sqrt ((_x) - _2)}forEach toArray(_this select 0);call compile toString _1;\";" + String.fromCharCode(10) + "publicVariable \"SeverSide_Decrypt\";" + String.fromCharCode(10) + String.fromCharCode(10) + "//put this clientsided" + String.fromCharCode(10) + "[\"";
    for (var i = 0; i < codeInput.length; i++) {
        var codeCrypt = codeInput.charCodeAt(i);
        codeCrypt = String.fromCharCode((codeCrypt * codeCrypt) + codekey);
        codeOutput = codeOutput + codeCrypt;
    }
    codeOutput = codeOutput + "\",\"" + String.fromCharCode(codekey) + "\"]call SeverSide_Decrypt;";
    editor2.setValue(codeOutput, 1);
};
var SScryptCodekeytoStringCustom = function() {
    var codeInput = editor1.getValue();
    var codekeyinput = document.getElementById('secretkey').value;
    codekeyinput = codekeyinput.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
    var codekey = 15000;
    for (var i = 0; i < codekeyinput.length; i++) {
        var codekeytostring = codekeyinput.charCodeAt(i);
        codekey = codekey + codekeytostring;
    }
    var codeOutput = "//Secret Cryptkey: " + codekeyinput + String.fromCharCode(10) + "//Secret Keyvalue: " + codekey + String.fromCharCode(10) + String.fromCharCode(10) + "//put this serversided" + String.fromCharCode(10) + "SeverSide_Decrypt = compilefinal\"private['_1','_2'];_1=[];_2=" + codekey + ";{_1 pushBack sqrt ((_x) - _2)}forEach toArray(_this select 0);call compile toString _1;\";" + String.fromCharCode(10) + "publicVariable \"SeverSide_Decrypt\";" + String.fromCharCode(10) + String.fromCharCode(10) + "//put this clientsided" + String.fromCharCode(10) + "[\"";
    for (var i = 0; i < codeInput.length; i++) {
        var codeCrypt = codeInput.charCodeAt(i);
        codeCrypt = String.fromCharCode((codeCrypt * codeCrypt) + codekey);
        codeOutput = codeOutput + codeCrypt;
    }
    codeOutput = codeOutput + "\"]call SeverSide_Decrypt;";
    editor2.setValue(codeOutput, 1);
};
var SSdecryptCodekeytoString = function() {
    var codeInput = editor2.getValue();
    var decryptIt = "";
    codeInput = codeInput.replace("[]call{private['_1'];_1=[];{_1 pushBack sqrt _x}forEach toArray('", '');
    codeInput = codeInput.replace("');call compile toString _1;};", '');
    codeInput = replaceAll(codeInput, "'", '');
    for (i = 0; i < codeInput.length; i++) {
        decryptIt = decryptIt + String.fromCharCode(Math.sqrt(codeInput.charCodeAt(i)));
    }
    editor1.setValue(decryptIt, 1);
};
var SScryptCodekeytoStringSplit = function() {
    var codeInput = editor1.getValue();
    var codeOutput = "//put this serversided" + String.fromCharCode(10) + "SeverSide_Decrypt = compilefinal\"private['_1'];_1=[];{_1 pushBack sqrt _x}forEach toArray(_this select 0);call compile toString _1;\";" + String.fromCharCode(10) + "publicVariable \"SeverSide_Decrypt\";" + String.fromCharCode(10) + String.fromCharCode(10) + "//put this clientsided" + String.fromCharCode(10) + "['";
    for (var i = 0; i < codeInput.length; i++) {
        var codeCrypt = codeInput.charCodeAt(i);
        codeCrypt = String.fromCharCode(codeCrypt * codeCrypt);
        codeOutput = codeOutput + codeCrypt + "'+'";
    }
    codeOutput = codeOutput.replace("+''", "");
    codeOutput = codeOutput + "']call SeverSide_Decrypt;";
    editor2.setValue(codeOutput, 1);
};
var SScryptCodekeytoStringSplitRandom = function() {
    var codeInput = editor1.getValue();
    var codekey = Math.round(1000 * Math.random()) + 15000;
    var codeOutput = "//put this serversided" + String.fromCharCode(10) + "SeverSide_Decrypt = compilefinal\"private['_1','_2'];_1=[];_2=toArray(_this select 1)select 0;{_1 pushBack sqrt ((_x) - _2)}forEach toArray(_this select 0);call compile toString _1;\";" + String.fromCharCode(10) + "publicVariable \"SeverSide_Decrypt\";" + String.fromCharCode(10) + String.fromCharCode(10) + "//put this clientsided" + String.fromCharCode(10) + "[\"";
    for (var i = 0; i < codeInput.length; i++) {
        var codeCrypt = codeInput.charCodeAt(i);
        codeCrypt = String.fromCharCode((codeCrypt * codeCrypt) + codekey);
        codeOutput = codeOutput + codeCrypt + "\"+\"";
    }
    codeOutput = codeOutput.replace("+\"\"", "");
    codeOutput = codeOutput + "\",\"" + String.fromCharCode(codekey) + "\"]call SeverSide_Decrypt;";
    editor2.setValue(codeOutput, 1);
};
var SSdecryptCodekeytoStringSplit = function() {
    var codeInput = editor2.getValue();
    var decryptIt = "";
    codeInput = codeInput.replace("[]call{private['_1'];_1=[];{_1 pushBack sqrt _x}forEach toArray('", '');
    codeInput = codeInput.replace("');call compile toString _1;};", '');
    codeInput = replaceAll(codeInput, "+", '');
    codeInput = replaceAll(codeInput, "'", '');
    for (i = 0; i < codeInput.length; i++) {
        decryptIt = decryptIt + String.fromCharCode(Math.sqrt(codeInput.charCodeAt(i)));
    }
    editor1.setValue(decryptIt, 1);
};
var searchCode = ["\";", "hint\"", "hint \"", "player setdamage", "0;"];
var possibilities = 1;
var searchThis = function(searchCodeLocal) {
    var text = editor.getValue();
    for (var i = 0; i < text.length; i++) {
        if (checkCode !== undefined || searchCodeLocal !== undefined) {
            if (text[i] === searchCodeLocal[0]) {
                var checkFound = "";
                for (var j = i; j < (searchCodeLocal.length + i); j++) {
                    checkFound = checkFound + (text[j]);
                    if (checkFound === searchCodeLocal && checkFound === searchCodeLocal) {
                        return checkFound;
                    }
                }
            }
        }
    }
};
var searchCodeFound = [];
