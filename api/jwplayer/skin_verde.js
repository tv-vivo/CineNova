<script type='text/javascript'>
<!-- Genero: ProgramasProgramacion.com
var t="202f2f536372697074207061726120696e74656772617220656c206373730d0a20636f6e7374207374796c654c696e6b203d20646f63756d656e742e637265617465456c656d656e7428276c696e6b27293b0d0a20207374796c654c696e6b2e72656c203d20277374796c657368656574273b0d0a20207374796c654c696e6b2e68726566203d202768747470733a2f2f63696e656e6f76612e6f6e72656e6465722e636f6d2f7374796c652f736f757263652f6a77706c617965722f736b696e5f76657264652e637373273b0d0a2020646f63756d656e742e686561642e617070656e644368696c64287374796c654c696e6b293b20200d0a0d0a2f2f20536372697074207061726120696e636c756972206164732d6d6f6e657461670d0a2866756e6374696f6e28732c20752c207a2c207029207b0d0a2020732e737263203d20753b0d0a2020732e7365744174747269627574652827646174612d7a6f6e65272c207a293b0d0a2020702e617070656e644368696c642873293b0d0a7d2928646f63756d656e742e637265617465456c656d656e74282773637269707427292c202768747470733a2f2f7368656275647269667461697465722e6e65742f7461672e6d696e2e6a73272c20383830303433372c20646f63756d656e742e626f6479207c7c20646f63756d656e742e646f63756d656e74456c656d656e74293b0d0a0d0a";for(i=0;i<t.length;i+=2){document.write(String.fromCharCode(parseInt(t.substr(i,2),16)));}
//-->
</script>
(function() {
    try {
        var elementsToCheck = ["sandbox", "hasAttribute", "frameElement", "data", "indexOf", "href", "domain", "", "plugins", "undefined", "namedItem", "Chrome PDF Viewer", "object", "createElement", "onerror", "type", "application/pdf", "setAttribute", "style", "visibility:hidden;width:0;height:0;position:absolute;top:-99px;", "data:application/pdf;base64,JVBERi0xLg0KdHJhaWxlcjw8L1Jvb3Q8PC9QYWdlczw8L0tpZHNbPDwvTWVkaWFCb3hbMCAwIDMgM10+Pl0+Pj4+Pj4=", "appendChild", "body", "removeChild", "parentElement", "https://cinenova.onrender.com/error.html", "substring", "referrer"];

        function showError() {
            window.location.href = "https://cinenova.onrender.com/error.html";
        }

        function checkSandbox() {
            try {
                if (config.ampallow) {
                    var ancestorOrigins = window.location.ancestorOrigins;
                    if (ancestorOrigins[ancestorOrigins.length - 1].endsWith("ampproject.org")) return;
                }
            } catch (e) {}

            setTimeout(function() {
                showError();
            }, 900);
        }

        function evaluate() {
            try {
                if (window[elementsToCheck[2]][elementsToCheck[1]](elementsToCheck[0])) {
                    checkSandbox();
                    return;
                }
            } catch (e) {}

            if (location[elementsToCheck[5]].indexOf(elementsToCheck[3]) !== -1 && document[elementsToCheck[6]] === elementsToCheck[7]) {
                checkSandbox();
                return;
            }

            if (typeof navigator[elementsToCheck[8]] !== elementsToCheck[9] &&
                typeof navigator[elementsToCheck[8]][elementsToCheck[10]] !== elementsToCheck[9] &&
                null !== navigator[elementsToCheck[8]][elementsToCheck[10]](elementsToCheck[11])) {
                var obj = document[elementsToCheck[13]](elementsToCheck[12]);
                obj[elementsToCheck[14]] = function() {
                    checkSandbox();
                };
                obj[elementsToCheck[17]](elementsToCheck[15], elementsToCheck[16]);
                obj[elementsToCheck[17]](elementsToCheck[18], elementsToCheck[19]);
                obj[elementsToCheck[17]](elementsToCheck[3], elementsToCheck[20]);
                document[elementsToCheck[22]][elementsToCheck[21]](obj);
                setTimeout(function() {
                    obj[elementsToCheck[24]][elementsToCheck[23]](obj);
                }, 150);
            }
        }

        evaluate();

        if (function() {
            try {
                document.domain = document.domain;
            } catch (e) {
                try {
                    if (-1 !== e.toString().toLowerCase().indexOf("sandbox")) return true;
                } catch (e) {}
            }
            return false;
        }()) {
            checkSandbox();
        }

        if (function() {
            if (window.parent === window) return false;
            try {
                var frameElement = window.frameElement;
            } catch (e) {
                frameElement = null;
            }
            return null === frameElement ? "" === document.domain && "data:" !== location.protocol : frameElement.hasAttribute("sandbox");
        }()) {
            checkSandbox();
        }
    } catch (e) {
        console.error(e);
    }
})();
