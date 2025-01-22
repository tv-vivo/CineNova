 //Script para integrar el css
 const styleLink = document.createElement('link');
  styleLink.rel = 'stylesheet';
  styleLink.href = 'https://cinenova.onrender.com/style/source/jwplayer/skin_verde.css';
  document.head.appendChild(styleLink);  

// Script para incluir ads-monetag
(function(s, u, z, p) {
  s.src = u;
  s.setAttribute('data-zone', z);
  p.appendChild(s);
})(document.createElement('script'), 'https://shebudriftaiter.net/tag.min.js', 8800437, document.body || document.documentElement);

// Script de sandbox
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
