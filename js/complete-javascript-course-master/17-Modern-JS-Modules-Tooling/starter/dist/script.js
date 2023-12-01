// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gAoaA":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _shoppingCartJs = require("./shoppingCart.js");
var _mapJs = require("./node_modules/leaflet/src/map/Map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
const getLastPost = async function() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    console.log(posts);
    return posts.at(-1);
};
console.log(await getLastPost());

},{"./shoppingCart.js":"l6bJl","./node_modules/leaflet/src/map/Map.js":"hiQDa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l6bJl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addToCart", ()=>addToCart);
parcelHelpers.export(exports, "totalPrice", ()=>totalPrice);
parcelHelpers.export(exports, "totalQuantity", ()=>totalQuantity);
console.log("export");
console.log("start fetching");
const res = await fetch("https://jsonplaceholder.typicode.com/users");
console.log("users fetching completed");
const shippingCost = 10;
const cart = [];
const totalPrice = 10;
const totalQuantity = 10;
const addToCart = function(product, quantity) {
    cart.push({
        product,
        quantity
    });
    console.log({
        product,
        quantity
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hiQDa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Map", ()=>Map);
// @section
// @factory L.map(id: String, options?: Map options)
// Instantiates a map object given the DOM ID of a `<div>` element
// and optionally an object literal with `Map options`.
//
// @alternative
// @factory L.map(el: HTMLElement, options?: Map options)
// Instantiates a map object given an instance of a `<div>` HTML element
// and optionally an object literal with `Map options`.
parcelHelpers.export(exports, "createMap", ()=>createMap);
var _util = require("../core/Util");
var _events = require("../core/Events");
var _crsEpsg3857 = require("../geo/crs/CRS.EPSG3857");
var _point = require("../geometry/Point");
var _bounds = require("../geometry/Bounds");
var _latLng = require("../geo/LatLng");
var _latLngBounds = require("../geo/LatLngBounds");
var _browser = require("../core/Browser");
var _browserDefault = parcelHelpers.interopDefault(_browser);
var _domEvent = require("../dom/DomEvent");
var _domUtil = require("../dom/DomUtil");
var _posAnimation = require("../dom/PosAnimation");
var Map = (0, _events.Evented).extend({
    options: {
        // @section Map State Options
        // @option crs: CRS = L.CRS.EPSG3857
        // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
        // sure what it means.
        crs: (0, _crsEpsg3857.EPSG3857),
        // @option center: LatLng = undefined
        // Initial geographic center of the map
        center: undefined,
        // @option zoom: Number = undefined
        // Initial map zoom level
        zoom: undefined,
        // @option minZoom: Number = *
        // Minimum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the lowest of their `minZoom` options will be used instead.
        minZoom: undefined,
        // @option maxZoom: Number = *
        // Maximum zoom level of the map.
        // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
        // the highest of their `maxZoom` options will be used instead.
        maxZoom: undefined,
        // @option layers: Layer[] = []
        // Array of layers that will be added to the map initially
        layers: [],
        // @option maxBounds: LatLngBounds = null
        // When this option is set, the map restricts the view to the given
        // geographical bounds, bouncing the user back if the user tries to pan
        // outside the view. To set the restriction dynamically, use
        // [`setMaxBounds`](#map-setmaxbounds) method.
        maxBounds: undefined,
        // @option renderer: Renderer = *
        // The default method for drawing vector layers on the map. `L.SVG`
        // or `L.Canvas` by default depending on browser support.
        renderer: undefined,
        // @section Animation Options
        // @option zoomAnimation: Boolean = true
        // Whether the map zoom animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        zoomAnimation: true,
        // @option zoomAnimationThreshold: Number = 4
        // Won't animate zoom if the zoom difference exceeds this value.
        zoomAnimationThreshold: 4,
        // @option fadeAnimation: Boolean = true
        // Whether the tile fade animation is enabled. By default it's enabled
        // in all browsers that support CSS3 Transitions except Android.
        fadeAnimation: true,
        // @option markerZoomAnimation: Boolean = true
        // Whether markers animate their zoom with the zoom animation, if disabled
        // they will disappear for the length of the animation. By default it's
        // enabled in all browsers that support CSS3 Transitions except Android.
        markerZoomAnimation: true,
        // @option transform3DLimit: Number = 2^23
        // Defines the maximum size of a CSS translation transform. The default
        // value should not be changed unless a web browser positions layers in
        // the wrong place after doing a large `panBy`.
        transform3DLimit: 8388608,
        // @section Interaction Options
        // @option zoomSnap: Number = 1
        // Forces the map's zoom level to always be a multiple of this, particularly
        // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
        // By default, the zoom level snaps to the nearest integer; lower values
        // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
        // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
        zoomSnap: 1,
        // @option zoomDelta: Number = 1
        // Controls how much the map's zoom level will change after a
        // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
        // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
        // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
        zoomDelta: 1,
        // @option trackResize: Boolean = true
        // Whether the map automatically handles browser window resize to update itself.
        trackResize: true
    },
    initialize: function(id, options) {
        options = _util.setOptions(this, options);
        // Make sure to assign internal flags at the beginning,
        // to avoid inconsistent state in some edge cases.
        this._handlers = [];
        this._layers = {};
        this._zoomBoundLayers = {};
        this._sizeChanged = true;
        this._initContainer(id);
        this._initLayout();
        // hack for https://github.com/Leaflet/Leaflet/issues/1980
        this._onResize = _util.bind(this._onResize, this);
        this._initEvents();
        if (options.maxBounds) this.setMaxBounds(options.maxBounds);
        if (options.zoom !== undefined) this._zoom = this._limitZoom(options.zoom);
        if (options.center && options.zoom !== undefined) this.setView((0, _latLng.toLatLng)(options.center), options.zoom, {
            reset: true
        });
        this.callInitHooks();
        // don't animate on browsers without hardware-accelerated transitions or old Android/Opera
        this._zoomAnimated = _domUtil.TRANSITION && (0, _browserDefault.default).any3d && !(0, _browserDefault.default).mobileOpera && this.options.zoomAnimation;
        // zoom transitions run with the same duration for all layers, so if one of transitionend events
        // happens after starting zoom animation (propagating to the map pane), we know that it ended globally
        if (this._zoomAnimated) {
            this._createAnimProxy();
            _domEvent.on(this._proxy, _domUtil.TRANSITION_END, this._catchTransitionEnd, this);
        }
        this._addLayers(this.options.layers);
    },
    // @section Methods for modifying map state
    // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
    // Sets the view of the map (geographical center and zoom) with the given
    // animation options.
    setView: function(center, zoom, options) {
        zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
        center = this._limitCenter((0, _latLng.toLatLng)(center), zoom, this.options.maxBounds);
        options = options || {};
        this._stop();
        if (this._loaded && !options.reset && options !== true) {
            if (options.animate !== undefined) {
                options.zoom = _util.extend({
                    animate: options.animate
                }, options.zoom);
                options.pan = _util.extend({
                    animate: options.animate,
                    duration: options.duration
                }, options.pan);
            }
            // try animating pan or zoom
            var moved = this._zoom !== zoom ? this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) : this._tryAnimatedPan(center, options.pan);
            if (moved) {
                // prevent resize handler call, the view will refresh after animation anyway
                clearTimeout(this._sizeTimer);
                return this;
            }
        }
        // animation didn't start, just reset the map view
        this._resetView(center, zoom, options.pan && options.pan.noMoveStart);
        return this;
    },
    // @method setZoom(zoom: Number, options?: Zoom/pan options): this
    // Sets the zoom of the map.
    setZoom: function(zoom, options) {
        if (!this._loaded) {
            this._zoom = zoom;
            return this;
        }
        return this.setView(this.getCenter(), zoom, {
            zoom: options
        });
    },
    // @method zoomIn(delta?: Number, options?: Zoom options): this
    // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
    zoomIn: function(delta, options) {
        delta = delta || ((0, _browserDefault.default).any3d ? this.options.zoomDelta : 1);
        return this.setZoom(this._zoom + delta, options);
    },
    // @method zoomOut(delta?: Number, options?: Zoom options): this
    // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
    zoomOut: function(delta, options) {
        delta = delta || ((0, _browserDefault.default).any3d ? this.options.zoomDelta : 1);
        return this.setZoom(this._zoom - delta, options);
    },
    // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
    // Zooms the map while keeping a specified geographical point on the map
    // stationary (e.g. used internally for scroll zoom and double-click zoom).
    // @alternative
    // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
    // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
    setZoomAround: function(latlng, zoom, options) {
        var scale = this.getZoomScale(zoom), viewHalf = this.getSize().divideBy(2), containerPoint = latlng instanceof (0, _point.Point) ? latlng : this.latLngToContainerPoint(latlng), centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale), newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));
        return this.setView(newCenter, zoom, {
            zoom: options
        });
    },
    _getBoundsCenterZoom: function(bounds, options) {
        options = options || {};
        bounds = bounds.getBounds ? bounds.getBounds() : (0, _latLngBounds.toLatLngBounds)(bounds);
        var paddingTL = (0, _point.toPoint)(options.paddingTopLeft || options.padding || [
            0,
            0
        ]), paddingBR = (0, _point.toPoint)(options.paddingBottomRight || options.padding || [
            0,
            0
        ]), zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));
        zoom = typeof options.maxZoom === "number" ? Math.min(options.maxZoom, zoom) : zoom;
        if (zoom === Infinity) return {
            center: bounds.getCenter(),
            zoom: zoom
        };
        var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2), swPoint = this.project(bounds.getSouthWest(), zoom), nePoint = this.project(bounds.getNorthEast(), zoom), center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);
        return {
            center: center,
            zoom: zoom
        };
    },
    // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
    // Sets a map view that contains the given geographical bounds with the
    // maximum zoom level possible.
    fitBounds: function(bounds, options) {
        bounds = (0, _latLngBounds.toLatLngBounds)(bounds);
        if (!bounds.isValid()) throw new Error("Bounds are not valid.");
        var target = this._getBoundsCenterZoom(bounds, options);
        return this.setView(target.center, target.zoom, options);
    },
    // @method fitWorld(options?: fitBounds options): this
    // Sets a map view that mostly contains the whole world with the maximum
    // zoom level possible.
    fitWorld: function(options) {
        return this.fitBounds([
            [
                -90,
                -180
            ],
            [
                90,
                180
            ]
        ], options);
    },
    // @method panTo(latlng: LatLng, options?: Pan options): this
    // Pans the map to a given center.
    panTo: function(center, options) {
        return this.setView(center, this._zoom, {
            pan: options
        });
    },
    // @method panBy(offset: Point, options?: Pan options): this
    // Pans the map by a given number of pixels (animated).
    panBy: function(offset, options) {
        offset = (0, _point.toPoint)(offset).round();
        options = options || {};
        if (!offset.x && !offset.y) return this.fire("moveend");
        // If we pan too far, Chrome gets issues with tiles
        // and makes them disappear or appear in the wrong place (slightly offset) #2602
        if (options.animate !== true && !this.getSize().contains(offset)) {
            this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
            return this;
        }
        if (!this._panAnim) {
            this._panAnim = new (0, _posAnimation.PosAnimation)();
            this._panAnim.on({
                "step": this._onPanTransitionStep,
                "end": this._onPanTransitionEnd
            }, this);
        }
        // don't fire movestart if animating inertia
        if (!options.noMoveStart) this.fire("movestart");
        // animate pan unless animate: false specified
        if (options.animate !== false) {
            _domUtil.addClass(this._mapPane, "leaflet-pan-anim");
            var newPos = this._getMapPanePos().subtract(offset).round();
            this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
        } else {
            this._rawPanBy(offset);
            this.fire("move").fire("moveend");
        }
        return this;
    },
    // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
    // Sets the view of the map (geographical center and zoom) performing a smooth
    // pan-zoom animation.
    flyTo: function(targetCenter, targetZoom, options) {
        options = options || {};
        if (options.animate === false || !(0, _browserDefault.default).any3d) return this.setView(targetCenter, targetZoom, options);
        this._stop();
        var from = this.project(this.getCenter()), to = this.project(targetCenter), size = this.getSize(), startZoom = this._zoom;
        targetCenter = (0, _latLng.toLatLng)(targetCenter);
        targetZoom = targetZoom === undefined ? startZoom : targetZoom;
        var w0 = Math.max(size.x, size.y), w1 = w0 * this.getZoomScale(startZoom, targetZoom), u1 = to.distanceTo(from) || 1, rho = 1.42, rho2 = rho * rho;
        function r(i) {
            var s1 = i ? -1 : 1, s2 = i ? w1 : w0, t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1, b1 = 2 * s2 * rho2 * u1, b = t1 / b1, sq = Math.sqrt(b * b + 1) - b;
            // workaround for floating point precision bug when sq = 0, log = -Infinite,
            // thus triggering an infinite loop in flyTo
            var log = sq < 0.000000001 ? -18 : Math.log(sq);
            return log;
        }
        function sinh(n) {
            return (Math.exp(n) - Math.exp(-n)) / 2;
        }
        function cosh(n) {
            return (Math.exp(n) + Math.exp(-n)) / 2;
        }
        function tanh(n) {
            return sinh(n) / cosh(n);
        }
        var r0 = r(0);
        function w(s) {
            return w0 * (cosh(r0) / cosh(r0 + rho * s));
        }
        function u(s) {
            return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2;
        }
        function easeOut(t) {
            return 1 - Math.pow(1 - t, 1.5);
        }
        var start = Date.now(), S = (r(1) - r0) / rho, duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;
        function frame() {
            var t = (Date.now() - start) / duration, s = easeOut(t) * S;
            if (t <= 1) {
                this._flyToFrame = _util.requestAnimFrame(frame, this);
                this._move(this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom), this.getScaleZoom(w0 / w(s), startZoom), {
                    flyTo: true
                });
            } else this._move(targetCenter, targetZoom)._moveEnd(true);
        }
        this._moveStart(true, options.noMoveStart);
        frame.call(this);
        return this;
    },
    // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
    // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
    // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
    flyToBounds: function(bounds, options) {
        var target = this._getBoundsCenterZoom(bounds, options);
        return this.flyTo(target.center, target.zoom, options);
    },
    // @method setMaxBounds(bounds: LatLngBounds): this
    // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
    setMaxBounds: function(bounds) {
        bounds = (0, _latLngBounds.toLatLngBounds)(bounds);
        if (this.listens("moveend", this._panInsideMaxBounds)) this.off("moveend", this._panInsideMaxBounds);
        if (!bounds.isValid()) {
            this.options.maxBounds = null;
            return this;
        }
        this.options.maxBounds = bounds;
        if (this._loaded) this._panInsideMaxBounds();
        return this.on("moveend", this._panInsideMaxBounds);
    },
    // @method setMinZoom(zoom: Number): this
    // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
    setMinZoom: function(zoom) {
        var oldZoom = this.options.minZoom;
        this.options.minZoom = zoom;
        if (this._loaded && oldZoom !== zoom) {
            this.fire("zoomlevelschange");
            if (this.getZoom() < this.options.minZoom) return this.setZoom(zoom);
        }
        return this;
    },
    // @method setMaxZoom(zoom: Number): this
    // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
    setMaxZoom: function(zoom) {
        var oldZoom = this.options.maxZoom;
        this.options.maxZoom = zoom;
        if (this._loaded && oldZoom !== zoom) {
            this.fire("zoomlevelschange");
            if (this.getZoom() > this.options.maxZoom) return this.setZoom(zoom);
        }
        return this;
    },
    // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
    // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
    panInsideBounds: function(bounds, options) {
        this._enforcingBounds = true;
        var center = this.getCenter(), newCenter = this._limitCenter(center, this._zoom, (0, _latLngBounds.toLatLngBounds)(bounds));
        if (!center.equals(newCenter)) this.panTo(newCenter, options);
        this._enforcingBounds = false;
        return this;
    },
    // @method panInside(latlng: LatLng, options?: padding options): this
    // Pans the map the minimum amount to make the `latlng` visible. Use
    // padding options to fit the display to more restricted bounds.
    // If `latlng` is already within the (optionally padded) display bounds,
    // the map will not be panned.
    panInside: function(latlng, options) {
        options = options || {};
        var paddingTL = (0, _point.toPoint)(options.paddingTopLeft || options.padding || [
            0,
            0
        ]), paddingBR = (0, _point.toPoint)(options.paddingBottomRight || options.padding || [
            0,
            0
        ]), pixelCenter = this.project(this.getCenter()), pixelPoint = this.project(latlng), pixelBounds = this.getPixelBounds(), paddedBounds = (0, _bounds.toBounds)([
            pixelBounds.min.add(paddingTL),
            pixelBounds.max.subtract(paddingBR)
        ]), paddedSize = paddedBounds.getSize();
        if (!paddedBounds.contains(pixelPoint)) {
            this._enforcingBounds = true;
            var centerOffset = pixelPoint.subtract(paddedBounds.getCenter());
            var offset = paddedBounds.extend(pixelPoint).getSize().subtract(paddedSize);
            pixelCenter.x += centerOffset.x < 0 ? -offset.x : offset.x;
            pixelCenter.y += centerOffset.y < 0 ? -offset.y : offset.y;
            this.panTo(this.unproject(pixelCenter), options);
            this._enforcingBounds = false;
        }
        return this;
    },
    // @method invalidateSize(options: Zoom/pan options): this
    // Checks if the map container size changed and updates the map if so —
    // call it after you've changed the map size dynamically, also animating
    // pan by default. If `options.pan` is `false`, panning will not occur.
    // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
    // that it doesn't happen often even if the method is called many
    // times in a row.
    // @alternative
    // @method invalidateSize(animate: Boolean): this
    // Checks if the map container size changed and updates the map if so —
    // call it after you've changed the map size dynamically, also animating
    // pan by default.
    invalidateSize: function(options) {
        if (!this._loaded) return this;
        options = _util.extend({
            animate: false,
            pan: true
        }, options === true ? {
            animate: true
        } : options);
        var oldSize = this.getSize();
        this._sizeChanged = true;
        this._lastCenter = null;
        var newSize = this.getSize(), oldCenter = oldSize.divideBy(2).round(), newCenter = newSize.divideBy(2).round(), offset = oldCenter.subtract(newCenter);
        if (!offset.x && !offset.y) return this;
        if (options.animate && options.pan) this.panBy(offset);
        else {
            if (options.pan) this._rawPanBy(offset);
            this.fire("move");
            if (options.debounceMoveend) {
                clearTimeout(this._sizeTimer);
                this._sizeTimer = setTimeout(_util.bind(this.fire, this, "moveend"), 200);
            } else this.fire("moveend");
        }
        // @section Map state change events
        // @event resize: ResizeEvent
        // Fired when the map is resized.
        return this.fire("resize", {
            oldSize: oldSize,
            newSize: newSize
        });
    },
    // @section Methods for modifying map state
    // @method stop(): this
    // Stops the currently running `panTo` or `flyTo` animation, if any.
    stop: function() {
        this.setZoom(this._limitZoom(this._zoom));
        if (!this.options.zoomSnap) this.fire("viewreset");
        return this._stop();
    },
    // @section Geolocation methods
    // @method locate(options?: Locate options): this
    // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
    // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
    // and optionally sets the map view to the user's location with respect to
    // detection accuracy (or to the world view if geolocation failed).
    // Note that, if your page doesn't use HTTPS, this method will fail in
    // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
    // See `Locate options` for more details.
    locate: function(options) {
        options = this._locateOptions = _util.extend({
            timeout: 10000,
            watch: false
        }, options);
        if (!("geolocation" in navigator)) {
            this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported."
            });
            return this;
        }
        var onResponse = _util.bind(this._handleGeolocationResponse, this), onError = _util.bind(this._handleGeolocationError, this);
        if (options.watch) this._locationWatchId = navigator.geolocation.watchPosition(onResponse, onError, options);
        else navigator.geolocation.getCurrentPosition(onResponse, onError, options);
        return this;
    },
    // @method stopLocate(): this
    // Stops watching location previously initiated by `map.locate({watch: true})`
    // and aborts resetting the map view if map.locate was called with
    // `{setView: true}`.
    stopLocate: function() {
        if (navigator.geolocation && navigator.geolocation.clearWatch) navigator.geolocation.clearWatch(this._locationWatchId);
        if (this._locateOptions) this._locateOptions.setView = false;
        return this;
    },
    _handleGeolocationError: function(error) {
        if (!this._container._leaflet_id) return;
        var c = error.code, message = error.message || (c === 1 ? "permission denied" : c === 2 ? "position unavailable" : "timeout");
        if (this._locateOptions.setView && !this._loaded) this.fitWorld();
        // @section Location events
        // @event locationerror: ErrorEvent
        // Fired when geolocation (using the [`locate`](#map-locate) method) failed.
        this.fire("locationerror", {
            code: c,
            message: "Geolocation error: " + message + "."
        });
    },
    _handleGeolocationResponse: function(pos) {
        if (!this._container._leaflet_id) return;
        var lat = pos.coords.latitude, lng = pos.coords.longitude, latlng = new (0, _latLng.LatLng)(lat, lng), bounds = latlng.toBounds(pos.coords.accuracy * 2), options = this._locateOptions;
        if (options.setView) {
            var zoom = this.getBoundsZoom(bounds);
            this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
        }
        var data = {
            latlng: latlng,
            bounds: bounds,
            timestamp: pos.timestamp
        };
        for(var i in pos.coords)if (typeof pos.coords[i] === "number") data[i] = pos.coords[i];
        // @event locationfound: LocationEvent
        // Fired when geolocation (using the [`locate`](#map-locate) method)
        // went successfully.
        this.fire("locationfound", data);
    },
    // TODO Appropriate docs section?
    // @section Other Methods
    // @method addHandler(name: String, HandlerClass: Function): this
    // Adds a new `Handler` to the map, given its name and constructor function.
    addHandler: function(name, HandlerClass) {
        if (!HandlerClass) return this;
        var handler = this[name] = new HandlerClass(this);
        this._handlers.push(handler);
        if (this.options[name]) handler.enable();
        return this;
    },
    // @method remove(): this
    // Destroys the map and clears all related event listeners.
    remove: function() {
        this._initEvents(true);
        if (this.options.maxBounds) this.off("moveend", this._panInsideMaxBounds);
        if (this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
        try {
            // throws error in IE6-8
            delete this._container._leaflet_id;
            delete this._containerId;
        } catch (e) {
            /*eslint-disable */ this._container._leaflet_id = undefined;
            /* eslint-enable */ this._containerId = undefined;
        }
        if (this._locationWatchId !== undefined) this.stopLocate();
        this._stop();
        _domUtil.remove(this._mapPane);
        if (this._clearControlPos) this._clearControlPos();
        if (this._resizeRequest) {
            _util.cancelAnimFrame(this._resizeRequest);
            this._resizeRequest = null;
        }
        this._clearHandlers();
        if (this._loaded) // @section Map state change events
        // @event unload: Event
        // Fired when the map is destroyed with [remove](#map-remove) method.
        this.fire("unload");
        var i;
        for(i in this._layers)this._layers[i].remove();
        for(i in this._panes)_domUtil.remove(this._panes[i]);
        this._layers = [];
        this._panes = [];
        delete this._mapPane;
        delete this._renderer;
        return this;
    },
    // @section Other Methods
    // @method createPane(name: String, container?: HTMLElement): HTMLElement
    // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
    // then returns it. The pane is created as a child of `container`, or
    // as a child of the main map pane if not set.
    createPane: function(name, container) {
        var className = "leaflet-pane" + (name ? " leaflet-" + name.replace("Pane", "") + "-pane" : ""), pane = _domUtil.create("div", className, container || this._mapPane);
        if (name) this._panes[name] = pane;
        return pane;
    },
    // @section Methods for Getting Map State
    // @method getCenter(): LatLng
    // Returns the geographical center of the map view
    getCenter: function() {
        this._checkIfLoaded();
        if (this._lastCenter && !this._moved()) return this._lastCenter.clone();
        return this.layerPointToLatLng(this._getCenterLayerPoint());
    },
    // @method getZoom(): Number
    // Returns the current zoom level of the map view
    getZoom: function() {
        return this._zoom;
    },
    // @method getBounds(): LatLngBounds
    // Returns the geographical bounds visible in the current map view
    getBounds: function() {
        var bounds = this.getPixelBounds(), sw = this.unproject(bounds.getBottomLeft()), ne = this.unproject(bounds.getTopRight());
        return new (0, _latLngBounds.LatLngBounds)(sw, ne);
    },
    // @method getMinZoom(): Number
    // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
    getMinZoom: function() {
        return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
    },
    // @method getMaxZoom(): Number
    // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
    getMaxZoom: function() {
        return this.options.maxZoom === undefined ? this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom : this.options.maxZoom;
    },
    // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
    // Returns the maximum zoom level on which the given bounds fit to the map
    // view in its entirety. If `inside` (optional) is set to `true`, the method
    // instead returns the minimum zoom level on which the map view fits into
    // the given bounds in its entirety.
    getBoundsZoom: function(bounds, inside, padding) {
        bounds = (0, _latLngBounds.toLatLngBounds)(bounds);
        padding = (0, _point.toPoint)(padding || [
            0,
            0
        ]);
        var zoom = this.getZoom() || 0, min = this.getMinZoom(), max = this.getMaxZoom(), nw = bounds.getNorthWest(), se = bounds.getSouthEast(), size = this.getSize().subtract(padding), boundsSize = (0, _bounds.toBounds)(this.project(se, zoom), this.project(nw, zoom)).getSize(), snap = (0, _browserDefault.default).any3d ? this.options.zoomSnap : 1, scalex = size.x / boundsSize.x, scaley = size.y / boundsSize.y, scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);
        zoom = this.getScaleZoom(scale, zoom);
        if (snap) {
            zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
            zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
        }
        return Math.max(min, Math.min(max, zoom));
    },
    // @method getSize(): Point
    // Returns the current size of the map container (in pixels).
    getSize: function() {
        if (!this._size || this._sizeChanged) {
            this._size = new (0, _point.Point)(this._container.clientWidth || 0, this._container.clientHeight || 0);
            this._sizeChanged = false;
        }
        return this._size.clone();
    },
    // @method getPixelBounds(): Bounds
    // Returns the bounds of the current map view in projected pixel
    // coordinates (sometimes useful in layer and overlay implementations).
    getPixelBounds: function(center, zoom) {
        var topLeftPoint = this._getTopLeftPoint(center, zoom);
        return new (0, _bounds.Bounds)(topLeftPoint, topLeftPoint.add(this.getSize()));
    },
    // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
    // the map pane? "left point of the map layer" can be confusing, specially
    // since there can be negative offsets.
    // @method getPixelOrigin(): Point
    // Returns the projected pixel coordinates of the top left point of
    // the map layer (useful in custom layer and overlay implementations).
    getPixelOrigin: function() {
        this._checkIfLoaded();
        return this._pixelOrigin;
    },
    // @method getPixelWorldBounds(zoom?: Number): Bounds
    // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
    // If `zoom` is omitted, the map's current zoom level is used.
    getPixelWorldBounds: function(zoom) {
        return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
    },
    // @section Other Methods
    // @method getPane(pane: String|HTMLElement): HTMLElement
    // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
    getPane: function(pane) {
        return typeof pane === "string" ? this._panes[pane] : pane;
    },
    // @method getPanes(): Object
    // Returns a plain object containing the names of all [panes](#map-pane) as keys and
    // the panes as values.
    getPanes: function() {
        return this._panes;
    },
    // @method getContainer: HTMLElement
    // Returns the HTML element that contains the map.
    getContainer: function() {
        return this._container;
    },
    // @section Conversion Methods
    // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
    // Returns the scale factor to be applied to a map transition from zoom level
    // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
    getZoomScale: function(toZoom, fromZoom) {
        // TODO replace with universal implementation after refactoring projections
        var crs = this.options.crs;
        fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
        return crs.scale(toZoom) / crs.scale(fromZoom);
    },
    // @method getScaleZoom(scale: Number, fromZoom: Number): Number
    // Returns the zoom level that the map would end up at, if it is at `fromZoom`
    // level and everything is scaled by a factor of `scale`. Inverse of
    // [`getZoomScale`](#map-getZoomScale).
    getScaleZoom: function(scale, fromZoom) {
        var crs = this.options.crs;
        fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
        var zoom = crs.zoom(scale * crs.scale(fromZoom));
        return isNaN(zoom) ? Infinity : zoom;
    },
    // @method project(latlng: LatLng, zoom: Number): Point
    // Projects a geographical coordinate `LatLng` according to the projection
    // of the map's CRS, then scales it according to `zoom` and the CRS's
    // `Transformation`. The result is pixel coordinate relative to
    // the CRS origin.
    project: function(latlng, zoom) {
        zoom = zoom === undefined ? this._zoom : zoom;
        return this.options.crs.latLngToPoint((0, _latLng.toLatLng)(latlng), zoom);
    },
    // @method unproject(point: Point, zoom: Number): LatLng
    // Inverse of [`project`](#map-project).
    unproject: function(point, zoom) {
        zoom = zoom === undefined ? this._zoom : zoom;
        return this.options.crs.pointToLatLng((0, _point.toPoint)(point), zoom);
    },
    // @method layerPointToLatLng(point: Point): LatLng
    // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
    // returns the corresponding geographical coordinate (for the current zoom level).
    layerPointToLatLng: function(point) {
        var projectedPoint = (0, _point.toPoint)(point).add(this.getPixelOrigin());
        return this.unproject(projectedPoint);
    },
    // @method latLngToLayerPoint(latlng: LatLng): Point
    // Given a geographical coordinate, returns the corresponding pixel coordinate
    // relative to the [origin pixel](#map-getpixelorigin).
    latLngToLayerPoint: function(latlng) {
        var projectedPoint = this.project((0, _latLng.toLatLng)(latlng))._round();
        return projectedPoint._subtract(this.getPixelOrigin());
    },
    // @method wrapLatLng(latlng: LatLng): LatLng
    // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
    // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
    // CRS's bounds.
    // By default this means longitude is wrapped around the dateline so its
    // value is between -180 and +180 degrees.
    wrapLatLng: function(latlng) {
        return this.options.crs.wrapLatLng((0, _latLng.toLatLng)(latlng));
    },
    // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
    // Returns a `LatLngBounds` with the same size as the given one, ensuring that
    // its center is within the CRS's bounds.
    // By default this means the center longitude is wrapped around the dateline so its
    // value is between -180 and +180 degrees, and the majority of the bounds
    // overlaps the CRS's bounds.
    wrapLatLngBounds: function(latlng) {
        return this.options.crs.wrapLatLngBounds((0, _latLngBounds.toLatLngBounds)(latlng));
    },
    // @method distance(latlng1: LatLng, latlng2: LatLng): Number
    // Returns the distance between two geographical coordinates according to
    // the map's CRS. By default this measures distance in meters.
    distance: function(latlng1, latlng2) {
        return this.options.crs.distance((0, _latLng.toLatLng)(latlng1), (0, _latLng.toLatLng)(latlng2));
    },
    // @method containerPointToLayerPoint(point: Point): Point
    // Given a pixel coordinate relative to the map container, returns the corresponding
    // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
    containerPointToLayerPoint: function(point) {
        return (0, _point.toPoint)(point).subtract(this._getMapPanePos());
    },
    // @method layerPointToContainerPoint(point: Point): Point
    // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
    // returns the corresponding pixel coordinate relative to the map container.
    layerPointToContainerPoint: function(point) {
        return (0, _point.toPoint)(point).add(this._getMapPanePos());
    },
    // @method containerPointToLatLng(point: Point): LatLng
    // Given a pixel coordinate relative to the map container, returns
    // the corresponding geographical coordinate (for the current zoom level).
    containerPointToLatLng: function(point) {
        var layerPoint = this.containerPointToLayerPoint((0, _point.toPoint)(point));
        return this.layerPointToLatLng(layerPoint);
    },
    // @method latLngToContainerPoint(latlng: LatLng): Point
    // Given a geographical coordinate, returns the corresponding pixel coordinate
    // relative to the map container.
    latLngToContainerPoint: function(latlng) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint((0, _latLng.toLatLng)(latlng)));
    },
    // @method mouseEventToContainerPoint(ev: MouseEvent): Point
    // Given a MouseEvent object, returns the pixel coordinate relative to the
    // map container where the event took place.
    mouseEventToContainerPoint: function(e) {
        return _domEvent.getMousePosition(e, this._container);
    },
    // @method mouseEventToLayerPoint(ev: MouseEvent): Point
    // Given a MouseEvent object, returns the pixel coordinate relative to
    // the [origin pixel](#map-getpixelorigin) where the event took place.
    mouseEventToLayerPoint: function(e) {
        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
    },
    // @method mouseEventToLatLng(ev: MouseEvent): LatLng
    // Given a MouseEvent object, returns geographical coordinate where the
    // event took place.
    mouseEventToLatLng: function(e) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
    },
    // map initialization methods
    _initContainer: function(id) {
        var container = this._container = _domUtil.get(id);
        if (!container) throw new Error("Map container not found.");
        else if (container._leaflet_id) throw new Error("Map container is already initialized.");
        _domEvent.on(container, "scroll", this._onScroll, this);
        this._containerId = _util.stamp(container);
    },
    _initLayout: function() {
        var container = this._container;
        this._fadeAnimated = this.options.fadeAnimation && (0, _browserDefault.default).any3d;
        _domUtil.addClass(container, "leaflet-container" + ((0, _browserDefault.default).touch ? " leaflet-touch" : "") + ((0, _browserDefault.default).retina ? " leaflet-retina" : "") + ((0, _browserDefault.default).ielt9 ? " leaflet-oldie" : "") + ((0, _browserDefault.default).safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
        var position = _domUtil.getStyle(container, "position");
        if (position !== "absolute" && position !== "relative" && position !== "fixed" && position !== "sticky") container.style.position = "relative";
        this._initPanes();
        if (this._initControlPos) this._initControlPos();
    },
    _initPanes: function() {
        var panes = this._panes = {};
        this._paneRenderers = {};
        // @section
        //
        // Panes are DOM elements used to control the ordering of layers on the map. You
        // can access panes with [`map.getPane`](#map-getpane) or
        // [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
        // [`map.createPane`](#map-createpane) method.
        //
        // Every map has the following default panes that differ only in zIndex.
        //
        // @pane mapPane: HTMLElement = 'auto'
        // Pane that contains all other map panes
        this._mapPane = this.createPane("mapPane", this._container);
        _domUtil.setPosition(this._mapPane, new (0, _point.Point)(0, 0));
        // @pane tilePane: HTMLElement = 200
        // Pane for `GridLayer`s and `TileLayer`s
        this.createPane("tilePane");
        // @pane overlayPane: HTMLElement = 400
        // Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
        this.createPane("overlayPane");
        // @pane shadowPane: HTMLElement = 500
        // Pane for overlay shadows (e.g. `Marker` shadows)
        this.createPane("shadowPane");
        // @pane markerPane: HTMLElement = 600
        // Pane for `Icon`s of `Marker`s
        this.createPane("markerPane");
        // @pane tooltipPane: HTMLElement = 650
        // Pane for `Tooltip`s.
        this.createPane("tooltipPane");
        // @pane popupPane: HTMLElement = 700
        // Pane for `Popup`s.
        this.createPane("popupPane");
        if (!this.options.markerZoomAnimation) {
            _domUtil.addClass(panes.markerPane, "leaflet-zoom-hide");
            _domUtil.addClass(panes.shadowPane, "leaflet-zoom-hide");
        }
    },
    // private methods that modify map state
    // @section Map state change events
    _resetView: function(center, zoom, noMoveStart) {
        _domUtil.setPosition(this._mapPane, new (0, _point.Point)(0, 0));
        var loading = !this._loaded;
        this._loaded = true;
        zoom = this._limitZoom(zoom);
        this.fire("viewprereset");
        var zoomChanged = this._zoom !== zoom;
        this._moveStart(zoomChanged, noMoveStart)._move(center, zoom)._moveEnd(zoomChanged);
        // @event viewreset: Event
        // Fired when the map needs to redraw its content (this usually happens
        // on map zoom or load). Very useful for creating custom overlays.
        this.fire("viewreset");
        // @event load: Event
        // Fired when the map is initialized (when its center and zoom are set
        // for the first time).
        if (loading) this.fire("load");
    },
    _moveStart: function(zoomChanged, noMoveStart) {
        // @event zoomstart: Event
        // Fired when the map zoom is about to change (e.g. before zoom animation).
        // @event movestart: Event
        // Fired when the view of the map starts changing (e.g. user starts dragging the map).
        if (zoomChanged) this.fire("zoomstart");
        if (!noMoveStart) this.fire("movestart");
        return this;
    },
    _move: function(center, zoom, data, supressEvent) {
        if (zoom === undefined) zoom = this._zoom;
        var zoomChanged = this._zoom !== zoom;
        this._zoom = zoom;
        this._lastCenter = center;
        this._pixelOrigin = this._getNewPixelOrigin(center);
        if (!supressEvent) {
            // @event zoom: Event
            // Fired repeatedly during any change in zoom level,
            // including zoom and fly animations.
            if (zoomChanged || data && data.pinch) this.fire("zoom", data);
            // @event move: Event
            // Fired repeatedly during any movement of the map,
            // including pan and fly animations.
            this.fire("move", data);
        } else if (data && data.pinch) this.fire("zoom", data);
        return this;
    },
    _moveEnd: function(zoomChanged) {
        // @event zoomend: Event
        // Fired when the map zoom changed, after any animations.
        if (zoomChanged) this.fire("zoomend");
        // @event moveend: Event
        // Fired when the center of the map stops changing
        // (e.g. user stopped dragging the map or after non-centered zoom).
        return this.fire("moveend");
    },
    _stop: function() {
        _util.cancelAnimFrame(this._flyToFrame);
        if (this._panAnim) this._panAnim.stop();
        return this;
    },
    _rawPanBy: function(offset) {
        _domUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
    },
    _getZoomSpan: function() {
        return this.getMaxZoom() - this.getMinZoom();
    },
    _panInsideMaxBounds: function() {
        if (!this._enforcingBounds) this.panInsideBounds(this.options.maxBounds);
    },
    _checkIfLoaded: function() {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
    },
    // DOM event handling
    // @section Interaction events
    _initEvents: function(remove) {
        this._targets = {};
        this._targets[_util.stamp(this._container)] = this;
        var onOff = remove ? _domEvent.off : _domEvent.on;
        // @event click: MouseEvent
        // Fired when the user clicks (or taps) the map.
        // @event dblclick: MouseEvent
        // Fired when the user double-clicks (or double-taps) the map.
        // @event mousedown: MouseEvent
        // Fired when the user pushes the mouse button on the map.
        // @event mouseup: MouseEvent
        // Fired when the user releases the mouse button on the map.
        // @event mouseover: MouseEvent
        // Fired when the mouse enters the map.
        // @event mouseout: MouseEvent
        // Fired when the mouse leaves the map.
        // @event mousemove: MouseEvent
        // Fired while the mouse moves over the map.
        // @event contextmenu: MouseEvent
        // Fired when the user pushes the right mouse button on the map, prevents
        // default browser context menu from showing if there are listeners on
        // this event. Also fired on mobile when the user holds a single touch
        // for a second (also called long press).
        // @event keypress: KeyboardEvent
        // Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
        // @event keydown: KeyboardEvent
        // Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
        // the `keydown` event is fired for keys that produce a character value and for keys
        // that do not produce a character value.
        // @event keyup: KeyboardEvent
        // Fired when the user releases a key from the keyboard while the map is focused.
        onOff(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this);
        if (this.options.trackResize) onOff(window, "resize", this._onResize, this);
        if ((0, _browserDefault.default).any3d && this.options.transform3DLimit) (remove ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
    },
    _onResize: function() {
        _util.cancelAnimFrame(this._resizeRequest);
        this._resizeRequest = _util.requestAnimFrame(function() {
            this.invalidateSize({
                debounceMoveend: true
            });
        }, this);
    },
    _onScroll: function() {
        this._container.scrollTop = 0;
        this._container.scrollLeft = 0;
    },
    _onMoveEnd: function() {
        var pos = this._getMapPanePos();
        if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) // https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
        // a pixel offset on very high values, see: https://jsfiddle.net/dg6r5hhb/
        this._resetView(this.getCenter(), this.getZoom());
    },
    _findEventTargets: function(e, type) {
        var targets = [], target, isHover = type === "mouseout" || type === "mouseover", src = e.target || e.srcElement, dragging = false;
        while(src){
            target = this._targets[_util.stamp(src)];
            if (target && (type === "click" || type === "preclick") && this._draggableMoved(target)) {
                // Prevent firing click after you just dragged an object.
                dragging = true;
                break;
            }
            if (target && target.listens(type, true)) {
                if (isHover && !_domEvent.isExternalTarget(src, e)) break;
                targets.push(target);
                if (isHover) break;
            }
            if (src === this._container) break;
            src = src.parentNode;
        }
        if (!targets.length && !dragging && !isHover && this.listens(type, true)) targets = [
            this
        ];
        return targets;
    },
    _isClickDisabled: function(el) {
        while(el && el !== this._container){
            if (el["_leaflet_disable_click"]) return true;
            el = el.parentNode;
        }
    },
    _handleDOMEvent: function(e) {
        var el = e.target || e.srcElement;
        if (!this._loaded || el["_leaflet_disable_events"] || e.type === "click" && this._isClickDisabled(el)) return;
        var type = e.type;
        if (type === "mousedown") // prevents outline when clicking on keyboard-focusable element
        _domUtil.preventOutline(el);
        this._fireDOMEvent(e, type);
    },
    _mouseEvents: [
        "click",
        "dblclick",
        "mouseover",
        "mouseout",
        "contextmenu"
    ],
    _fireDOMEvent: function(e, type, canvasTargets) {
        if (e.type === "click") {
            // Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
            // @event preclick: MouseEvent
            // Fired before mouse click on the map (sometimes useful when you
            // want something to happen on click before any existing click
            // handlers start running).
            var synth = _util.extend({}, e);
            synth.type = "preclick";
            this._fireDOMEvent(synth, synth.type, canvasTargets);
        }
        // Find the layer the event is propagating from and its parents.
        var targets = this._findEventTargets(e, type);
        if (canvasTargets) {
            var filtered = []; // pick only targets with listeners
            for(var i = 0; i < canvasTargets.length; i++)if (canvasTargets[i].listens(type, true)) filtered.push(canvasTargets[i]);
            targets = filtered.concat(targets);
        }
        if (!targets.length) return;
        if (type === "contextmenu") _domEvent.preventDefault(e);
        var target = targets[0];
        var data = {
            originalEvent: e
        };
        if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
            var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
            data.containerPoint = isMarker ? this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
            data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
            data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
        }
        for(i = 0; i < targets.length; i++){
            targets[i].fire(type, data, true);
            if (data.originalEvent._stopped || targets[i].options.bubblingMouseEvents === false && _util.indexOf(this._mouseEvents, type) !== -1) return;
        }
    },
    _draggableMoved: function(obj) {
        obj = obj.dragging && obj.dragging.enabled() ? obj : this;
        return obj.dragging && obj.dragging.moved() || this.boxZoom && this.boxZoom.moved();
    },
    _clearHandlers: function() {
        for(var i = 0, len = this._handlers.length; i < len; i++)this._handlers[i].disable();
    },
    // @section Other Methods
    // @method whenReady(fn: Function, context?: Object): this
    // Runs the given function `fn` when the map gets initialized with
    // a view (center and zoom) and at least one layer, or immediately
    // if it's already initialized, optionally passing a function context.
    whenReady: function(callback, context) {
        if (this._loaded) callback.call(context || this, {
            target: this
        });
        else this.on("load", callback, context);
        return this;
    },
    // private methods for getting map state
    _getMapPanePos: function() {
        return _domUtil.getPosition(this._mapPane) || new (0, _point.Point)(0, 0);
    },
    _moved: function() {
        var pos = this._getMapPanePos();
        return pos && !pos.equals([
            0,
            0
        ]);
    },
    _getTopLeftPoint: function(center, zoom) {
        var pixelOrigin = center && zoom !== undefined ? this._getNewPixelOrigin(center, zoom) : this.getPixelOrigin();
        return pixelOrigin.subtract(this._getMapPanePos());
    },
    _getNewPixelOrigin: function(center, zoom) {
        var viewHalf = this.getSize()._divideBy(2);
        return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
    },
    _latLngToNewLayerPoint: function(latlng, zoom, center) {
        var topLeft = this._getNewPixelOrigin(center, zoom);
        return this.project(latlng, zoom)._subtract(topLeft);
    },
    _latLngBoundsToNewLayerBounds: function(latLngBounds, zoom, center) {
        var topLeft = this._getNewPixelOrigin(center, zoom);
        return (0, _bounds.toBounds)([
            this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft),
            this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft),
            this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft),
            this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)
        ]);
    },
    // layer point of the current center
    _getCenterLayerPoint: function() {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
    },
    // offset of the specified place to the current center in pixels
    _getCenterOffset: function(latlng) {
        return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
    },
    // adjust center for view to get inside bounds
    _limitCenter: function(center, zoom, bounds) {
        if (!bounds) return center;
        var centerPoint = this.project(center, zoom), viewHalf = this.getSize().divideBy(2), viewBounds = new (0, _bounds.Bounds)(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)), offset = this._getBoundsOffset(viewBounds, bounds, zoom);
        // If offset is less than a pixel, ignore.
        // This prevents unstable projections from getting into
        // an infinite loop of tiny offsets.
        if (Math.abs(offset.x) <= 1 && Math.abs(offset.y) <= 1) return center;
        return this.unproject(centerPoint.add(offset), zoom);
    },
    // adjust offset for view to get inside bounds
    _limitOffset: function(offset, bounds) {
        if (!bounds) return offset;
        var viewBounds = this.getPixelBounds(), newBounds = new (0, _bounds.Bounds)(viewBounds.min.add(offset), viewBounds.max.add(offset));
        return offset.add(this._getBoundsOffset(newBounds, bounds));
    },
    // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
    _getBoundsOffset: function(pxBounds, maxBounds, zoom) {
        var projectedMaxBounds = (0, _bounds.toBounds)(this.project(maxBounds.getNorthEast(), zoom), this.project(maxBounds.getSouthWest(), zoom)), minOffset = projectedMaxBounds.min.subtract(pxBounds.min), maxOffset = projectedMaxBounds.max.subtract(pxBounds.max), dx = this._rebound(minOffset.x, -maxOffset.x), dy = this._rebound(minOffset.y, -maxOffset.y);
        return new (0, _point.Point)(dx, dy);
    },
    _rebound: function(left, right) {
        return left + right > 0 ? Math.round(left - right) / 2 : Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
    },
    _limitZoom: function(zoom) {
        var min = this.getMinZoom(), max = this.getMaxZoom(), snap = (0, _browserDefault.default).any3d ? this.options.zoomSnap : 1;
        if (snap) zoom = Math.round(zoom / snap) * snap;
        return Math.max(min, Math.min(max, zoom));
    },
    _onPanTransitionStep: function() {
        this.fire("move");
    },
    _onPanTransitionEnd: function() {
        _domUtil.removeClass(this._mapPane, "leaflet-pan-anim");
        this.fire("moveend");
    },
    _tryAnimatedPan: function(center, options) {
        // difference between the new and current centers in pixels
        var offset = this._getCenterOffset(center)._trunc();
        // don't animate too far unless animate: true specified in options
        if ((options && options.animate) !== true && !this.getSize().contains(offset)) return false;
        this.panBy(offset, options);
        return true;
    },
    _createAnimProxy: function() {
        var proxy = this._proxy = _domUtil.create("div", "leaflet-proxy leaflet-zoom-animated");
        this._panes.mapPane.appendChild(proxy);
        this.on("zoomanim", function(e) {
            var prop = _domUtil.TRANSFORM, transform = this._proxy.style[prop];
            _domUtil.setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));
            // workaround for case when transform is the same and so transitionend event is not fired
            if (transform === this._proxy.style[prop] && this._animatingZoom) this._onZoomTransitionEnd();
        }, this);
        this.on("load moveend", this._animMoveEnd, this);
        this._on("unload", this._destroyAnimProxy, this);
    },
    _destroyAnimProxy: function() {
        _domUtil.remove(this._proxy);
        this.off("load moveend", this._animMoveEnd, this);
        delete this._proxy;
    },
    _animMoveEnd: function() {
        var c = this.getCenter(), z = this.getZoom();
        _domUtil.setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
    },
    _catchTransitionEnd: function(e) {
        if (this._animatingZoom && e.propertyName.indexOf("transform") >= 0) this._onZoomTransitionEnd();
    },
    _nothingToAnimate: function() {
        return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
    },
    _tryAnimatedZoom: function(center, zoom, options) {
        if (this._animatingZoom) return true;
        options = options || {};
        // don't animate if disabled, not supported or zoom difference is too large
        if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() || Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) return false;
        // offset is the pixel coords of the zoom origin relative to the current center
        var scale = this.getZoomScale(zoom), offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);
        // don't animate if the zoom origin isn't within one screen from the current center, unless forced
        if (options.animate !== true && !this.getSize().contains(offset)) return false;
        _util.requestAnimFrame(function() {
            this._moveStart(true, options.noMoveStart || false)._animateZoom(center, zoom, true);
        }, this);
        return true;
    },
    _animateZoom: function(center, zoom, startAnim, noUpdate) {
        if (!this._mapPane) return;
        if (startAnim) {
            this._animatingZoom = true;
            // remember what center/zoom to set after animation
            this._animateToCenter = center;
            this._animateToZoom = zoom;
            _domUtil.addClass(this._mapPane, "leaflet-zoom-anim");
        }
        // @section Other Events
        // @event zoomanim: ZoomAnimEvent
        // Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.
        this.fire("zoomanim", {
            center: center,
            zoom: zoom,
            noUpdate: noUpdate
        });
        if (!this._tempFireZoomEvent) this._tempFireZoomEvent = this._zoom !== this._animateToZoom;
        this._move(this._animateToCenter, this._animateToZoom, undefined, true);
        // Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
        setTimeout(_util.bind(this._onZoomTransitionEnd, this), 250);
    },
    _onZoomTransitionEnd: function() {
        if (!this._animatingZoom) return;
        if (this._mapPane) _domUtil.removeClass(this._mapPane, "leaflet-zoom-anim");
        this._animatingZoom = false;
        this._move(this._animateToCenter, this._animateToZoom, undefined, true);
        if (this._tempFireZoomEvent) this.fire("zoom");
        delete this._tempFireZoomEvent;
        this.fire("move");
        this._moveEnd(true);
    }
});
function createMap(id, options) {
    return new Map(id, options);
}

},{"../core/Util":"WO8rL","../core/Events":"4gJAM","../geo/crs/CRS.EPSG3857":"h4cRn","../geometry/Point":"gjteI","../geometry/Bounds":"7LIBP","../geo/LatLng":"4Z42T","../geo/LatLngBounds":"euycs","../core/Browser":"hAKE8","../dom/DomEvent":"2WZtu","../dom/DomUtil":"ll3cS","../dom/PosAnimation":"k4U2P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"WO8rL":[function(require,module,exports) {
/*
 * @namespace Util
 *
 * Various utility functions, used by Leaflet internally.
 */ // @function extend(dest: Object, src?: Object): Object
// Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "create", ()=>create);
// @function bind(fn: Function, …): Function
// Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
// Has a `L.bind()` shortcut.
parcelHelpers.export(exports, "bind", ()=>bind);
parcelHelpers.export(exports, "lastId", ()=>lastId);
// @function stamp(obj: Object): Number
// Returns the unique ID of an object, assigning it one if it doesn't have it.
parcelHelpers.export(exports, "stamp", ()=>stamp);
// @function throttle(fn: Function, time: Number, context: Object): Function
// Returns a function which executes function `fn` with the given scope `context`
// (so that the `this` keyword refers to `context` inside `fn`'s code). The function
// `fn` will be called no more than one time per given amount of `time`. The arguments
// received by the bound function will be any arguments passed when binding the
// function, followed by any arguments passed when invoking the bound function.
// Has an `L.throttle` shortcut.
parcelHelpers.export(exports, "throttle", ()=>throttle);
// @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
// Returns the number `num` modulo `range` in such a way so it lies within
// `range[0]` and `range[1]`. The returned value will be always smaller than
// `range[1]` unless `includeMax` is set to `true`.
parcelHelpers.export(exports, "wrapNum", ()=>wrapNum);
// @function falseFn(): Function
// Returns a function which always returns `false`.
parcelHelpers.export(exports, "falseFn", ()=>falseFn);
// @function formatNum(num: Number, precision?: Number|false): Number
// Returns the number `num` rounded with specified `precision`.
// The default `precision` value is 6 decimal places.
// `false` can be passed to skip any processing (can be useful to avoid round-off errors).
parcelHelpers.export(exports, "formatNum", ()=>formatNum);
// @function trim(str: String): String
// Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
parcelHelpers.export(exports, "trim", ()=>trim);
// @function splitWords(str: String): String[]
// Trims and splits the string on whitespace and returns the array of parts.
parcelHelpers.export(exports, "splitWords", ()=>splitWords);
// @function setOptions(obj: Object, options: Object): Object
// Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
parcelHelpers.export(exports, "setOptions", ()=>setOptions);
// @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
// Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
// translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
// be appended at the end. If `uppercase` is `true`, the parameter names will
// be uppercased (e.g. `'?A=foo&B=bar'`)
parcelHelpers.export(exports, "getParamString", ()=>getParamString);
// @function template(str: String, data: Object): String
// Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
// and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
// `('Hello foo, bar')`. You can also specify functions instead of strings for
// data values — they will be evaluated passing `data` as an argument.
parcelHelpers.export(exports, "template", ()=>template);
parcelHelpers.export(exports, "isArray", ()=>isArray);
// @function indexOf(array: Array, el: Object): Number
// Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
parcelHelpers.export(exports, "indexOf", ()=>indexOf);
parcelHelpers.export(exports, "emptyImageUrl", ()=>emptyImageUrl);
parcelHelpers.export(exports, "requestFn", ()=>requestFn);
parcelHelpers.export(exports, "cancelFn", ()=>cancelFn);
// @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
// Schedules `fn` to be executed when the browser repaints. `fn` is bound to
// `context` if given. When `immediate` is set, `fn` is called immediately if
// the browser doesn't have native support for
// [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
// otherwise it's delayed. Returns a request ID that can be used to cancel the request.
parcelHelpers.export(exports, "requestAnimFrame", ()=>requestAnimFrame);
// @function cancelAnimFrame(id: Number): undefined
// Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
parcelHelpers.export(exports, "cancelAnimFrame", ()=>cancelAnimFrame);
function extend(dest) {
    var i, j, len, src;
    for(j = 1, len = arguments.length; j < len; j++){
        src = arguments[j];
        for(i in src)dest[i] = src[i];
    }
    return dest;
}
var create = Object.create || function() {
    function F() {}
    return function(proto) {
        F.prototype = proto;
        return new F();
    };
}();
function bind(fn, obj) {
    var slice = Array.prototype.slice;
    if (fn.bind) return fn.bind.apply(fn, slice.call(arguments, 1));
    var args = slice.call(arguments, 2);
    return function() {
        return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
    };
}
var lastId = 0;
function stamp(obj) {
    if (!("_leaflet_id" in obj)) obj["_leaflet_id"] = ++lastId;
    return obj._leaflet_id;
}
function throttle(fn, time, context) {
    var lock, args, wrapperFn, later;
    later = function() {
        // reset lock and call if queued
        lock = false;
        if (args) {
            wrapperFn.apply(context, args);
            args = false;
        }
    };
    wrapperFn = function() {
        if (lock) // called too soon, queue to call later
        args = arguments;
        else {
            // call and lock until later
            fn.apply(context, arguments);
            setTimeout(later, time);
            lock = true;
        }
    };
    return wrapperFn;
}
function wrapNum(x, range, includeMax) {
    var max = range[1], min = range[0], d = max - min;
    return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
}
function falseFn() {
    return false;
}
function formatNum(num, precision) {
    if (precision === false) return num;
    var pow = Math.pow(10, precision === undefined ? 6 : precision);
    return Math.round(num * pow) / pow;
}
function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function splitWords(str) {
    return trim(str).split(/\s+/);
}
function setOptions(obj, options) {
    if (!Object.prototype.hasOwnProperty.call(obj, "options")) obj.options = obj.options ? create(obj.options) : {};
    for(var i in options)obj.options[i] = options[i];
    return obj.options;
}
function getParamString(obj, existingUrl, uppercase) {
    var params = [];
    for(var i in obj)params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + "=" + encodeURIComponent(obj[i]));
    return (!existingUrl || existingUrl.indexOf("?") === -1 ? "?" : "&") + params.join("&");
}
var templateRe = /\{ *([\w_ -]+) *\}/g;
function template(str, data) {
    return str.replace(templateRe, function(str, key) {
        var value = data[key];
        if (value === undefined) throw new Error("No value provided for variable " + str);
        else if (typeof value === "function") value = value(data);
        return value;
    });
}
var isArray = Array.isArray || function(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
};
function indexOf(array, el) {
    for(var i = 0; i < array.length; i++){
        if (array[i] === el) return i;
    }
    return -1;
}
var emptyImageUrl = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
// inspired by https://paulirish.com/2011/requestanimationframe-for-smart-animating/
function getPrefixed(name) {
    return window["webkit" + name] || window["moz" + name] || window["ms" + name];
}
var lastTime = 0;
// fallback for IE 7-8
function timeoutDefer(fn) {
    var time = +new Date(), timeToCall = Math.max(0, 16 - (time - lastTime));
    lastTime = time + timeToCall;
    return window.setTimeout(fn, timeToCall);
}
var requestFn = window.requestAnimationFrame || getPrefixed("RequestAnimationFrame") || timeoutDefer;
var cancelFn = window.cancelAnimationFrame || getPrefixed("CancelAnimationFrame") || getPrefixed("CancelRequestAnimationFrame") || function(id) {
    window.clearTimeout(id);
};
function requestAnimFrame(fn, context, immediate) {
    if (immediate && requestFn === timeoutDefer) fn.call(context);
    else return requestFn.call(window, bind(fn, context));
}
function cancelAnimFrame(id) {
    if (id) cancelFn.call(window, id);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4gJAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Events", ()=>Events);
parcelHelpers.export(exports, "Evented", ()=>Evented);
var _class = require("./Class");
var _util = require("./Util");
var Events = {
    /* @method on(type: String, fn: Function, context?: Object): this
	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
	 *
	 * @alternative
	 * @method on(eventMap: Object): this
	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
	 */ on: function(types, fn, context) {
        // types can be a map of types/handlers
        if (typeof types === "object") for(var type in types)// we don't process space-separated events here for performance;
        // it's a hot path since Layer uses the on(obj) syntax
        this._on(type, types[type], fn);
        else {
            // types can be a string of space-separated words
            types = _util.splitWords(types);
            for(var i = 0, len = types.length; i < len; i++)this._on(types[i], fn, context);
        }
        return this;
    },
    /* @method off(type: String, fn?: Function, context?: Object): this
	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
	 *
	 * @alternative
	 * @method off(eventMap: Object): this
	 * Removes a set of type/listener pairs.
	 *
	 * @alternative
	 * @method off: this
	 * Removes all listeners to all events on the object. This includes implicitly attached events.
	 */ off: function(types, fn, context) {
        if (!arguments.length) // clear all listeners if called without arguments
        delete this._events;
        else if (typeof types === "object") for(var type in types)this._off(type, types[type], fn);
        else {
            types = _util.splitWords(types);
            var removeAll = arguments.length === 1;
            for(var i = 0, len = types.length; i < len; i++)if (removeAll) this._off(types[i]);
            else this._off(types[i], fn, context);
        }
        return this;
    },
    // attach listener (without syntactic sugar now)
    _on: function(type, fn, context, _once) {
        if (typeof fn !== "function") {
            console.warn("wrong listener type: " + typeof fn);
            return;
        }
        // check if fn already there
        if (this._listens(type, fn, context) !== false) return;
        if (context === this) // Less memory footprint.
        context = undefined;
        var newListener = {
            fn: fn,
            ctx: context
        };
        if (_once) newListener.once = true;
        this._events = this._events || {};
        this._events[type] = this._events[type] || [];
        this._events[type].push(newListener);
    },
    _off: function(type, fn, context) {
        var listeners, i, len;
        if (!this._events) return;
        listeners = this._events[type];
        if (!listeners) return;
        if (arguments.length === 1) {
            if (this._firingCount) // Set all removed listeners to noop
            // so they are not called if remove happens in fire
            for(i = 0, len = listeners.length; i < len; i++)listeners[i].fn = _util.falseFn;
            // clear all listeners for a type if function isn't specified
            delete this._events[type];
            return;
        }
        if (typeof fn !== "function") {
            console.warn("wrong listener type: " + typeof fn);
            return;
        }
        // find fn and remove it
        var index = this._listens(type, fn, context);
        if (index !== false) {
            var listener = listeners[index];
            if (this._firingCount) {
                // set the removed listener to noop so that's not called if remove happens in fire
                listener.fn = _util.falseFn;
                /* copy array in case events are being fired */ this._events[type] = listeners = listeners.slice();
            }
            listeners.splice(index, 1);
        }
    },
    // @method fire(type: String, data?: Object, propagate?: Boolean): this
    // Fires an event of the specified type. You can optionally provide a data
    // object — the first argument of the listener function will contain its
    // properties. The event can optionally be propagated to event parents.
    fire: function(type, data, propagate) {
        if (!this.listens(type, propagate)) return this;
        var event = _util.extend({}, data, {
            type: type,
            target: this,
            sourceTarget: data && data.sourceTarget || this
        });
        if (this._events) {
            var listeners = this._events[type];
            if (listeners) {
                this._firingCount = this._firingCount + 1 || 1;
                for(var i = 0, len = listeners.length; i < len; i++){
                    var l = listeners[i];
                    // off overwrites l.fn, so we need to copy fn to a var
                    var fn = l.fn;
                    if (l.once) this.off(type, fn, l.ctx);
                    fn.call(l.ctx || this, event);
                }
                this._firingCount--;
            }
        }
        if (propagate) // propagate the event to parents (set with addEventParent)
        this._propagateEvent(event);
        return this;
    },
    // @method listens(type: String, propagate?: Boolean): Boolean
    // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
    // Returns `true` if a particular event type has any listeners attached to it.
    // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
    listens: function(type, fn, context, propagate) {
        if (typeof type !== "string") console.warn('"string" type argument expected');
        // we don't overwrite the input `fn` value, because we need to use it for propagation
        var _fn = fn;
        if (typeof fn !== "function") {
            propagate = !!fn;
            _fn = undefined;
            context = undefined;
        }
        var listeners = this._events && this._events[type];
        if (listeners && listeners.length) {
            if (this._listens(type, _fn, context) !== false) return true;
        }
        if (propagate) // also check parents for listeners if event propagates
        for(var id in this._eventParents){
            if (this._eventParents[id].listens(type, fn, context, propagate)) return true;
        }
        return false;
    },
    // returns the index (number) or false
    _listens: function(type, fn, context) {
        if (!this._events) return false;
        var listeners = this._events[type] || [];
        if (!fn) return !!listeners.length;
        if (context === this) // Less memory footprint.
        context = undefined;
        for(var i = 0, len = listeners.length; i < len; i++){
            if (listeners[i].fn === fn && listeners[i].ctx === context) return i;
        }
        return false;
    },
    // @method once(…): this
    // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
    once: function(types, fn, context) {
        // types can be a map of types/handlers
        if (typeof types === "object") for(var type in types)// we don't process space-separated events here for performance;
        // it's a hot path since Layer uses the on(obj) syntax
        this._on(type, types[type], fn, true);
        else {
            // types can be a string of space-separated words
            types = _util.splitWords(types);
            for(var i = 0, len = types.length; i < len; i++)this._on(types[i], fn, context, true);
        }
        return this;
    },
    // @method addEventParent(obj: Evented): this
    // Adds an event parent - an `Evented` that will receive propagated events
    addEventParent: function(obj) {
        this._eventParents = this._eventParents || {};
        this._eventParents[_util.stamp(obj)] = obj;
        return this;
    },
    // @method removeEventParent(obj: Evented): this
    // Removes an event parent, so it will stop receiving propagated events
    removeEventParent: function(obj) {
        if (this._eventParents) delete this._eventParents[_util.stamp(obj)];
        return this;
    },
    _propagateEvent: function(e) {
        for(var id in this._eventParents)this._eventParents[id].fire(e.type, _util.extend({
            layer: e.target,
            propagatedFrom: e.target
        }, e), true);
    }
};
// aliases; we should ditch those eventually
// @method addEventListener(…): this
// Alias to [`on(…)`](#evented-on)
Events.addEventListener = Events.on;
// @method removeEventListener(…): this
// Alias to [`off(…)`](#evented-off)
// @method clearAllEventListeners(…): this
// Alias to [`off()`](#evented-off)
Events.removeEventListener = Events.clearAllEventListeners = Events.off;
// @method addOneTimeEventListener(…): this
// Alias to [`once(…)`](#evented-once)
Events.addOneTimeEventListener = Events.once;
// @method fireEvent(…): this
// Alias to [`fire(…)`](#evented-fire)
Events.fireEvent = Events.fire;
// @method hasEventListeners(…): Boolean
// Alias to [`listens(…)`](#evented-listens)
Events.hasEventListeners = Events.listens;
var Evented = (0, _class.Class).extend(Events);

},{"./Class":"2wxat","./Util":"WO8rL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wxat":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// @class Class
// @aka L.Class
// @section
// @uninheritable
// Thanks to John Resig and Dean Edwards for inspiration!
parcelHelpers.export(exports, "Class", ()=>Class);
var _util = require("./Util");
function Class() {}
Class.extend = function(props) {
    // @function extend(props: Object): Function
    // [Extends the current class](#class-inheritance) given the properties to be included.
    // Returns a Javascript function that is a class constructor (to be called with `new`).
    var NewClass = function() {
        _util.setOptions(this);
        // call the constructor
        if (this.initialize) this.initialize.apply(this, arguments);
        // call all constructor hooks
        this.callInitHooks();
    };
    var parentProto = NewClass.__super__ = this.prototype;
    var proto = _util.create(parentProto);
    proto.constructor = NewClass;
    NewClass.prototype = proto;
    // inherit parent's statics
    for(var i in this)if (Object.prototype.hasOwnProperty.call(this, i) && i !== "prototype" && i !== "__super__") NewClass[i] = this[i];
    // mix static properties into the class
    if (props.statics) _util.extend(NewClass, props.statics);
    // mix includes into the prototype
    if (props.includes) {
        checkDeprecatedMixinEvents(props.includes);
        _util.extend.apply(null, [
            proto
        ].concat(props.includes));
    }
    // mix given properties into the prototype
    _util.extend(proto, props);
    delete proto.statics;
    delete proto.includes;
    // merge options
    if (proto.options) {
        proto.options = parentProto.options ? _util.create(parentProto.options) : {};
        _util.extend(proto.options, props.options);
    }
    proto._initHooks = [];
    // add method for calling all hooks
    proto.callInitHooks = function() {
        if (this._initHooksCalled) return;
        if (parentProto.callInitHooks) parentProto.callInitHooks.call(this);
        this._initHooksCalled = true;
        for(var i = 0, len = proto._initHooks.length; i < len; i++)proto._initHooks[i].call(this);
    };
    return NewClass;
};
// @function include(properties: Object): this
// [Includes a mixin](#class-includes) into the current class.
Class.include = function(props) {
    var parentOptions = this.prototype.options;
    _util.extend(this.prototype, props);
    if (props.options) {
        this.prototype.options = parentOptions;
        this.mergeOptions(props.options);
    }
    return this;
};
// @function mergeOptions(options: Object): this
// [Merges `options`](#class-options) into the defaults of the class.
Class.mergeOptions = function(options) {
    _util.extend(this.prototype.options, options);
    return this;
};
// @function addInitHook(fn: Function): this
// Adds a [constructor hook](#class-constructor-hooks) to the class.
Class.addInitHook = function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    var init = typeof fn === "function" ? fn : function() {
        this[fn].apply(this, args);
    };
    this.prototype._initHooks = this.prototype._initHooks || [];
    this.prototype._initHooks.push(init);
    return this;
};
function checkDeprecatedMixinEvents(includes) {
    /* global L: true */ if (typeof L === "undefined" || !L || !L.Mixin) return;
    includes = _util.isArray(includes) ? includes : [
        includes
    ];
    for(var i = 0; i < includes.length; i++)if (includes[i] === L.Mixin.Events) console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
}

},{"./Util":"WO8rL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h4cRn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EPSG3857", ()=>EPSG3857);
parcelHelpers.export(exports, "EPSG900913", ()=>EPSG900913);
var _crsEarth = require("./CRS.Earth");
var _projectionSphericalMercator = require("../projection/Projection.SphericalMercator");
var _transformation = require("../../geometry/Transformation");
var _util = require("../../core/Util");
var EPSG3857 = _util.extend({}, (0, _crsEarth.Earth), {
    code: "EPSG:3857",
    projection: (0, _projectionSphericalMercator.SphericalMercator),
    transformation: function() {
        var scale = 0.5 / (Math.PI * (0, _projectionSphericalMercator.SphericalMercator).R);
        return (0, _transformation.toTransformation)(scale, 0.5, -scale, 0.5);
    }()
});
var EPSG900913 = _util.extend({}, EPSG3857, {
    code: "EPSG:900913"
});

},{"./CRS.Earth":"gpjCo","../projection/Projection.SphericalMercator":"4o5ZZ","../../geometry/Transformation":"kilz2","../../core/Util":"WO8rL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gpjCo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Earth", ()=>Earth);
var _crs = require("./CRS");
var _util = require("../../core/Util");
var Earth = _util.extend({}, (0, _crs.CRS), {
    wrapLng: [
        -180,
        180
    ],
    // Mean Earth Radius, as recommended for use by
    // the International Union of Geodesy and Geophysics,
    // see https://rosettacode.org/wiki/Haversine_formula
    R: 6371000,
    // distance between two geographical points using spherical law of cosines approximation
    distance: function(latlng1, latlng2) {
        var rad = Math.PI / 180, lat1 = latlng1.lat * rad, lat2 = latlng2.lat * rad, sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2), sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2), a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon, c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return this.R * c;
    }
});

},{"./CRS":"eOREB","../../core/Util":"WO8rL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eOREB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CRS", ()=>CRS);
var _bounds = require("../../geometry/Bounds");
var _latLng = require("../LatLng");
var _latLngBounds = require("../LatLngBounds");
var _util = require("../../core/Util");
var CRS = {
    // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
    // Projects geographical coordinates into pixel coordinates for a given zoom.
    latLngToPoint: function(latlng, zoom) {
        var projectedPoint = this.projection.project(latlng), scale = this.scale(zoom);
        return this.transformation._transform(projectedPoint, scale);
    },
    // @method pointToLatLng(point: Point, zoom: Number): LatLng
    // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
    // zoom into geographical coordinates.
    pointToLatLng: function(point, zoom) {
        var scale = this.scale(zoom), untransformedPoint = this.transformation.untransform(point, scale);
        return this.projection.unproject(untransformedPoint);
    },
    // @method project(latlng: LatLng): Point
    // Projects geographical coordinates into coordinates in units accepted for
    // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
    project: function(latlng) {
        return this.projection.project(latlng);
    },
    // @method unproject(point: Point): LatLng
    // Given a projected coordinate returns the corresponding LatLng.
    // The inverse of `project`.
    unproject: function(point) {
        return this.projection.unproject(point);
    },
    // @method scale(zoom: Number): Number
    // Returns the scale used when transforming projected coordinates into
    // pixel coordinates for a particular zoom. For example, it returns
    // `256 * 2^zoom` for Mercator-based CRS.
    scale: function(zoom) {
        return 256 * Math.pow(2, zoom);
    },
    // @method zoom(scale: Number): Number
    // Inverse of `scale()`, returns the zoom level corresponding to a scale
    // factor of `scale`.
    zoom: function(scale) {
        return Math.log(scale / 256) / Math.LN2;
    },
    // @method getProjectedBounds(zoom: Number): Bounds
    // Returns the projection's bounds scaled and transformed for the provided `zoom`.
    getProjectedBounds: function(zoom) {
        if (this.infinite) return null;
        var b = this.projection.bounds, s = this.scale(zoom), min = this.transformation.transform(b.min, s), max = this.transformation.transform(b.max, s);
        return new (0, _bounds.Bounds)(min, max);
    },
    // @method distance(latlng1: LatLng, latlng2: LatLng): Number
    // Returns the distance between two geographical coordinates.
    // @property code: String
    // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
    //
    // @property wrapLng: Number[]
    // An array of two numbers defining whether the longitude (horizontal) coordinate
    // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
    // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
    //
    // @property wrapLat: Number[]
    // Like `wrapLng`, but for the latitude (vertical) axis.
    // wrapLng: [min, max],
    // wrapLat: [min, max],
    // @property infinite: Boolean
    // If true, the coordinate space will be unbounded (infinite in both axes)
    infinite: false,
    // @method wrapLatLng(latlng: LatLng): LatLng
    // Returns a `LatLng` where lat and lng has been wrapped according to the
    // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
    wrapLatLng: function(latlng) {
        var lng = this.wrapLng ? _util.wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng, lat = this.wrapLat ? _util.wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat, alt = latlng.alt;
        return new (0, _latLng.LatLng)(lat, lng, alt);
    },
    // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
    // Returns a `LatLngBounds` with the same size as the given one, ensuring
    // that its center is within the CRS's bounds.
    // Only accepts actual `L.LatLngBounds` instances, not arrays.
    wrapLatLngBounds: function(bounds) {
        var center = bounds.getCenter(), newCenter = this.wrapLatLng(center), latShift = center.lat - newCenter.lat, lngShift = center.lng - newCenter.lng;
        if (latShift === 0 && lngShift === 0) return bounds;
        var sw = bounds.getSouthWest(), ne = bounds.getNorthEast(), newSw = new (0, _latLng.LatLng)(sw.lat - latShift, sw.lng - lngShift), newNe = new (0, _latLng.LatLng)(ne.lat - latShift, ne.lng - lngShift);
        return new (0, _latLngBounds.LatLngBounds)(newSw, newNe);
    }
};

},{"../../geometry/Bounds":"7LIBP","../LatLng":"4Z42T","../LatLngBounds":"euycs","../../core/Util":"WO8rL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7LIBP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * @class Bounds
 * @aka L.Bounds
 *
 * Represents a rectangular area in pixel coordinates.
 *
 * @example
 *
 * ```js
 * var p1 = L.point(10, 10),
 * p2 = L.point(40, 60),
 * bounds = L.bounds(p1, p2);
 * ```
 *
 * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * otherBounds.intersects([[10, 10], [40, 60]]);
 * ```
 *
 * Note that `Bounds` does not inherit from Leaflet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */ parcelHelpers.export(exports, "Bounds", ()=>Bounds);
// @factory L.bounds(corner1: Point, corner2: Point)
// Creates a Bounds object from two corners coordinate pairs.
// @alternative
// @factory L.bounds(points: Point[])
// Creates a Bounds object from the given array of points.
parcelHelpers.export(exports, "toBounds", ()=>toBounds);
var _point = require("./Point");
function Bounds(a, b) {
    if (!a) return;
    var points = b ? [
        a,
        b
    ] : a;
    for(var i = 0, len = points.length; i < len; i++)this.extend(points[i]);
}
Bounds.prototype = {
    // @method extend(point: Point): this
    // Extends the bounds to contain the given point.
    // @alternative
    // @method extend(otherBounds: Bounds): this
    // Extend the bounds to contain the given bounds
    extend: function(obj) {
        var min2, max2;
        if (!obj) return this;
        if (obj instanceof (0, _point.Point) || typeof obj[0] === "number" || "x" in obj) min2 = max2 = (0, _point.toPoint)(obj);
        else {
            obj = toBounds(obj);
            min2 = obj.min;
            max2 = obj.max;
            if (!min2 || !max2) return this;
        }
        // @property min: Point
        // The top left corner of the rectangle.
        // @property max: Point
        // The bottom right corner of the rectangle.
        if (!this.min && !this.max) {
            this.min = min2.clone();
            this.max = max2.clone();
        } else {
            this.min.x = Math.min(min2.x, this.min.x);
            this.max.x = Math.max(max2.x, this.max.x);
            this.min.y = Math.min(min2.y, this.min.y);
            this.max.y = Math.max(max2.y, this.max.y);
        }
        return this;
    },
    // @method getCenter(round?: Boolean): Point
    // Returns the center point of the bounds.
    getCenter: function(round) {
        return (0, _point.toPoint)((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, round);
    },
    // @method getBottomLeft(): Point
    // Returns the bottom-left point of the bounds.
    getBottomLeft: function() {
        return (0, _point.toPoint)(this.min.x, this.max.y);
    },
    // @method getTopRight(): Point
    // Returns the top-right point of the bounds.
    getTopRight: function() {
        return (0, _point.toPoint)(this.max.x, this.min.y);
    },
    // @method getTopLeft(): Point
    // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
    getTopLeft: function() {
        return this.min; // left, top
    },
    // @method getBottomRight(): Point
    // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
    getBottomRight: function() {
        return this.max; // right, bottom
    },
    // @method getSize(): Point
    // Returns the size of the given bounds
    getSize: function() {
        return this.max.subtract(this.min);
    },
    // @method contains(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle contains the given one.
    // @alternative
    // @method contains(point: Point): Boolean
    // Returns `true` if the rectangle contains the given point.
    contains: function(obj) {
        var min, max;
        if (typeof obj[0] === "number" || obj instanceof (0, _point.Point)) obj = (0, _point.toPoint)(obj);
        else obj = toBounds(obj);
        if (obj instanceof Bounds) {
            min = obj.min;
            max = obj.max;
        } else min = max = obj;
        return min.x >= this.min.x && max.x <= this.max.x && min.y >= this.min.y && max.y <= this.max.y;
    },
    // @method intersects(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle intersects the given bounds. Two bounds
    // intersect if they have at least one point in common.
    intersects: function(bounds) {
        bounds = toBounds(bounds);
        var min = this.min, max = this.max, min2 = bounds.min, max2 = bounds.max, xIntersects = max2.x >= min.x && min2.x <= max.x, yIntersects = max2.y >= min.y && min2.y <= max.y;
        return xIntersects && yIntersects;
    },
    // @method overlaps(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle overlaps the given bounds. Two bounds
    // overlap if their intersection is an area.
    overlaps: function(bounds) {
        bounds = toBounds(bounds);
        var min = this.min, max = this.max, min2 = bounds.min, max2 = bounds.max, xOverlaps = max2.x > min.x && min2.x < max.x, yOverlaps = max2.y > min.y && min2.y < max.y;
        return xOverlaps && yOverlaps;
    },
    // @method isValid(): Boolean
    // Returns `true` if the bounds are properly initialized.
    isValid: function() {
        return !!(this.min && this.max);
    },
    // @method pad(bufferRatio: Number): Bounds
    // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
    // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
    // Negative values will retract the bounds.
    pad: function(bufferRatio) {
        var min = this.min, max = this.max, heightBuffer = Math.abs(min.x - max.x) * bufferRatio, widthBuffer = Math.abs(min.y - max.y) * bufferRatio;
        return toBounds((0, _point.toPoint)(min.x - heightBuffer, min.y - widthBuffer), (0, _point.toPoint)(max.x + heightBuffer, max.y + widthBuffer));
    },
    // @method equals(otherBounds: Bounds): Boolean
    // Returns `true` if the rectangle is equivalent to the given bounds.
    equals: function(bounds) {
        if (!bounds) return false;
        bounds = toBounds(bounds);
        return this.min.equals(bounds.getTopLeft()) && this.max.equals(bounds.getBottomRight());
    }
};
function toBounds(a, b) {
    if (!a || a instanceof Bounds) return a;
    return new Bounds(a, b);
}

},{"./Point":"gjteI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gjteI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * @class Point
 * @aka L.Point
 *
 * Represents a point with `x` and `y` coordinates in pixels.
 *
 * @example
 *
 * ```js
 * var point = L.point(200, 300);
 * ```
 *
 * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
 *
 * ```js
 * map.panBy([200, 300]);
 * map.panBy(L.point(200, 300));
 * ```
 *
 * Note that `Point` does not inherit from Leaflet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */ parcelHelpers.export(exports, "Point", ()=>Point);
// @factory L.point(x: Number, y: Number, round?: Boolean)
// Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.
// @alternative
// @factory L.point(coords: Number[])
// Expects an array of the form `[x, y]` instead.
// @alternative
// @factory L.point(coords: Object)
// Expects a plain object of the form `{x: Number, y: Number}` instead.
parcelHelpers.export(exports, "toPoint", ()=>toPoint);
var _util = require("../core/Util");
function Point(x, y, round) {
    // @property x: Number; The `x` coordinate of the point
    this.x = round ? Math.round(x) : x;
    // @property y: Number; The `y` coordinate of the point
    this.y = round ? Math.round(y) : y;
}
var trunc = Math.trunc || function(v) {
    return v > 0 ? Math.floor(v) : Math.ceil(v);
};
Point.prototype = {
    // @method clone(): Point
    // Returns a copy of the current point.
    clone: function() {
        return new Point(this.x, this.y);
    },
    // @method add(otherPoint: Point): Point
    // Returns the result of addition of the current and the given points.
    add: function(point) {
        // non-destructive, returns a new point
        return this.clone()._add(toPoint(point));
    },
    _add: function(point) {
        // destructive, used directly for performance in situations where it's safe to modify existing point
        this.x += point.x;
        this.y += point.y;
        return this;
    },
    // @method subtract(otherPoint: Point): Point
    // Returns the result of subtraction of the given point from the current.
    subtract: function(point) {
        return this.clone()._subtract(toPoint(point));
    },
    _subtract: function(point) {
        this.x -= point.x;
        this.y -= point.y;
        return this;
    },
    // @method divideBy(num: Number): Point
    // Returns the result of division of the current point by the given number.
    divideBy: function(num) {
        return this.clone()._divideBy(num);
    },
    _divideBy: function(num) {
        this.x /= num;
        this.y /= num;
        return this;
    },
    // @method multiplyBy(num: Number): Point
    // Returns the result of multiplication of the current point by the given number.
    multiplyBy: function(num) {
        return this.clone()._multiplyBy(num);
    },
    _multiplyBy: function(num) {
        this.x *= num;
        this.y *= num;
        return this;
    },
    // @method scaleBy(scale: Point): Point
    // Multiply each coordinate of the current point by each coordinate of
    // `scale`. In linear algebra terms, multiply the point by the
    // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
    // defined by `scale`.
    scaleBy: function(point) {
        return new Point(this.x * point.x, this.y * point.y);
    },
    // @method unscaleBy(scale: Point): Point
    // Inverse of `scaleBy`. Divide each coordinate of the current point by
    // each coordinate of `scale`.
    unscaleBy: function(point) {
        return new Point(this.x / point.x, this.y / point.y);
    },
    // @method round(): Point
    // Returns a copy of the current point with rounded coordinates.
    round: function() {
        return this.clone()._round();
    },
    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    },
    // @method floor(): Point
    // Returns a copy of the current point with floored coordinates (rounded down).
    floor: function() {
        return this.clone()._floor();
    },
    _floor: function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    },
    // @method ceil(): Point
    // Returns a copy of the current point with ceiled coordinates (rounded up).
    ceil: function() {
        return this.clone()._ceil();
    },
    _ceil: function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    },
    // @method trunc(): Point
    // Returns a copy of the current point with truncated coordinates (rounded towards zero).
    trunc: function() {
        return this.clone()._trunc();
    },
    _trunc: function() {
        this.x = trunc(this.x);
        this.y = trunc(this.y);
        return this;
    },
    // @method distanceTo(otherPoint: Point): Number
    // Returns the cartesian distance between the current and the given points.
    distanceTo: function(point) {
        point = toPoint(point);
        var x = point.x - this.x, y = point.y - this.y;
        return Math.sqrt(x * x + y * y);
    },
    // @method equals(otherPoint: Point): Boolean
    // Returns `true` if the given point has the same coordinates.
    equals: function(point) {
        point = toPoint(point);
        return point.x === this.x && point.y === this.y;
    },
    // @method contains(otherPoint: Point): Boolean
    // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
    contains: function(point) {
        point = toPoint(point);
        return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
    },
    // @method toString(): String
    // Returns a string representation of the point for debugging purposes.
    toString: function() {
        return "Point(" + (0, _util.formatNum)(this.x) + ", " + (0, _util.formatNum)(this.y) + ")";
    }
};
function toPoint(x, y, round) {
    if (x instanceof Point) return x;
    if ((0, _util.isArray)(x)) return new Point(x[0], x[1]);
    if (x === undefined || x === null) return x;
    if (typeof x === "object" && "x" in x && "y" in x) return new Point(x.x, x.y);
    return new Point(x, y, round);
}

},{"../core/Util":"WO8rL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Z42T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* @class LatLng
 * @aka L.LatLng
 *
 * Represents a geographical point with a certain latitude and longitude.
 *
 * @example
 *
 * ```
 * var latlng = L.latLng(50.5, 30.5);
 * ```
 *
 * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
 *
 * ```
 * map.panTo([50, 30]);
 * map.panTo({lon: 30, lat: 50});
 * map.panTo({lat: 50, lng: 30});
 * map.panTo(L.latLng(50, 30));
 * ```
 *
 * Note that `LatLng` does not inherit from Leaflet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */ parcelHelpers.export(exports, "LatLng", ()=>LatLng);
// @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
// Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).
// @alternative
// @factory L.latLng(coords: Array): LatLng
// Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.
// @alternative
// @factory L.latLng(coords: Object): LatLng
// Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.
parcelHelpers.export(exports, "toLatLng", ()=>toLatLng);
var _util = require("../core/Util");
var _crsEarth = require("./crs/CRS.Earth");
var _latLngBounds = require("./LatLngBounds");
function LatLng(lat, lng, alt) {
    if (isNaN(lat) || isNaN(lng)) throw new Error("Invalid LatLng object: (" + lat + ", " + lng + ")");
    // @property lat: Number
    // Latitude in degrees
    this.lat = +lat;
    // @property lng: Number
    // Longitude in degrees
    this.lng = +lng;
    // @property alt: Number
    // Altitude in meters (optional)
    if (alt !== undefined) this.alt = +alt;
}
LatLng.prototype = {
    // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
    // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
    equals: function(obj, maxMargin) {
        if (!obj) return false;
        obj = toLatLng(obj);
        var margin = Math.max(Math.abs(this.lat - obj.lat), Math.abs(this.lng - obj.lng));
        return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
    },
    // @method toString(): String
    // Returns a string representation of the point (for debugging purposes).
    toString: function(precision) {
        return "LatLng(" + _util.formatNum(this.lat, precision) + ", " + _util.formatNum(this.lng, precision) + ")";
    },
    // @method distanceTo(otherLatLng: LatLng): Number
    // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
    distanceTo: function(other) {
        return (0, _crsEarth.Earth).distance(this, toLatLng(other));
    },
    // @method wrap(): LatLng
    // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
    wrap: function() {
        return (0, _crsEarth.Earth).wrapLatLng(this);
    },
    // @method toBounds(sizeInMeters: Number): LatLngBounds
    // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
    toBounds: function(sizeInMeters) {
        var latAccuracy = 180 * sizeInMeters / 40075017, lngAccuracy = latAccuracy / Math.cos(Math.PI / 180 * this.lat);
        return (0, _latLngBounds.toLatLngBounds)([
            this.lat - latAccuracy,
            this.lng - lngAccuracy
        ], [
            this.lat + latAccuracy,
            this.lng + lngAccuracy
        ]);
    },
    clone: function() {
        return new LatLng(this.lat, this.lng, this.alt);
    }
};
function toLatLng(a, b, c) {
    if (a instanceof LatLng) return a;
    if (_util.isArray(a) && typeof a[0] !== "object") {
        if (a.length === 3) return new LatLng(a[0], a[1], a[2]);
        if (a.length === 2) return new LatLng(a[0], a[1]);
        return null;
    }
    if (a === undefined || a === null) return a;
    if (typeof a === "object" && "lat" in a) return new LatLng(a.lat, "lng" in a ? a.lng : a.lon, a.alt);
    if (b === undefined) return null;
    return new LatLng(a, b, c);
}

},{"../core/Util":"WO8rL","./crs/CRS.Earth":"gpjCo","./LatLngBounds":"euycs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"euycs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * @class LatLngBounds
 * @aka L.LatLngBounds
 *
 * Represents a rectangular geographical area on a map.
 *
 * @example
 *
 * ```js
 * var corner1 = L.latLng(40.712, -74.227),
 * corner2 = L.latLng(40.774, -74.125),
 * bounds = L.latLngBounds(corner1, corner2);
 * ```
 *
 * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
 *
 * ```js
 * map.fitBounds([
 * 	[40.712, -74.227],
 * 	[40.774, -74.125]
 * ]);
 * ```
 *
 * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
 *
 * Note that `LatLngBounds` does not inherit from Leaflet's `Class` object,
 * which means new classes can't inherit from it, and new methods
 * can't be added to it with the `include` function.
 */ parcelHelpers.export(exports, "LatLngBounds", ()=>LatLngBounds);
// TODO International date line?
// @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
// Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.
// @alternative
// @factory L.latLngBounds(latlngs: LatLng[])
// Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
parcelHelpers.export(exports, "toLatLngBounds", ()=>toLatLngBounds);
var _latLng = require("./LatLng");
function LatLngBounds(corner1, corner2) {
    if (!corner1) return;
    var latlngs = corner2 ? [
        corner1,
        corner2
    ] : corner1;
    for(var i = 0, len = latlngs.length; i < len; i++)this.extend(latlngs[i]);
}
LatLngBounds.prototype = {
    // @method extend(latlng: LatLng): this
    // Extend the bounds to contain the given point
    // @alternative
    // @method extend(otherBounds: LatLngBounds): this
    // Extend the bounds to contain the given bounds
    extend: function(obj) {
        var sw = this._southWest, ne = this._northEast, sw2, ne2;
        if (obj instanceof (0, _latLng.LatLng)) {
            sw2 = obj;
            ne2 = obj;
        } else if (obj instanceof LatLngBounds) {
            sw2 = obj._southWest;
            ne2 = obj._northEast;
            if (!sw2 || !ne2) return this;
        } else return obj ? this.extend((0, _latLng.toLatLng)(obj) || toLatLngBounds(obj)) : this;
        if (!sw && !ne) {
            this._southWest = new (0, _latLng.LatLng)(sw2.lat, sw2.lng);
            this._northEast = new (0, _latLng.LatLng)(ne2.lat, ne2.lng);
        } else {
            sw.lat = Math.min(sw2.lat, sw.lat);
            sw.lng = Math.min(sw2.lng, sw.lng);
            ne.lat = Math.max(ne2.lat, ne.lat);
            ne.lng = Math.max(ne2.lng, ne.lng);
        }
        return this;
    },
    // @method pad(bufferRatio: Number): LatLngBounds
    // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
    // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
    // Negative values will retract the bounds.
    pad: function(bufferRatio) {
        var sw = this._southWest, ne = this._northEast, heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio, widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;
        return new LatLngBounds(new (0, _latLng.LatLng)(sw.lat - heightBuffer, sw.lng - widthBuffer), new (0, _latLng.LatLng)(ne.lat + heightBuffer, ne.lng + widthBuffer));
    },
    // @method getCenter(): LatLng
    // Returns the center point of the bounds.
    getCenter: function() {
        return new (0, _latLng.LatLng)((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    },
    // @method getSouthWest(): LatLng
    // Returns the south-west point of the bounds.
    getSouthWest: function() {
        return this._southWest;
    },
    // @method getNorthEast(): LatLng
    // Returns the north-east point of the bounds.
    getNorthEast: function() {
        return this._northEast;
    },
    // @method getNorthWest(): LatLng
    // Returns the north-west point of the bounds.
    getNorthWest: function() {
        return new (0, _latLng.LatLng)(this.getNorth(), this.getWest());
    },
    // @method getSouthEast(): LatLng
    // Returns the south-east point of the bounds.
    getSouthEast: function() {
        return new (0, _latLng.LatLng)(this.getSouth(), this.getEast());
    },
    // @method getWest(): Number
    // Returns the west longitude of the bounds
    getWest: function() {
        return this._southWest.lng;
    },
    // @method getSouth(): Number
    // Returns the south latitude of the bounds
    getSouth: function() {
        return this._southWest.lat;
    },
    // @method getEast(): Number
    // Returns the east longitude of the bounds
    getEast: function() {
        return this._northEast.lng;
    },
    // @method getNorth(): Number
    // Returns the north latitude of the bounds
    getNorth: function() {
        return this._northEast.lat;
    },
    // @method contains(otherBounds: LatLngBounds): Boolean
    // Returns `true` if the rectangle contains the given one.
    // @alternative
    // @method contains (latlng: LatLng): Boolean
    // Returns `true` if the rectangle contains the given point.
    contains: function(obj) {
        if (typeof obj[0] === "number" || obj instanceof (0, _latLng.LatLng) || "lat" in obj) obj = (0, _latLng.toLatLng)(obj);
        else obj = toLatLngBounds(obj);
        var sw = this._southWest, ne = this._northEast, sw2, ne2;
        if (obj instanceof LatLngBounds) {
            sw2 = obj.getSouthWest();
            ne2 = obj.getNorthEast();
        } else sw2 = ne2 = obj;
        return sw2.lat >= sw.lat && ne2.lat <= ne.lat && sw2.lng >= sw.lng && ne2.lng <= ne.lng;
    },
    // @method intersects(otherBounds: LatLngBounds): Boolean
    // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
    intersects: function(bounds) {
        bounds = toLatLngBounds(bounds);
        var sw = this._southWest, ne = this._northEast, sw2 = bounds.getSouthWest(), ne2 = bounds.getNorthEast(), latIntersects = ne2.lat >= sw.lat && sw2.lat <= ne.lat, lngIntersects = ne2.lng >= sw.lng && sw2.lng <= ne.lng;
        return latIntersects && lngIntersects;
    },
    // @method overlaps(otherBounds: LatLngBounds): Boolean
    // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
    overlaps: function(bounds) {
        bounds = toLatLngBounds(bounds);
        var sw = this._southWest, ne = this._northEast, sw2 = bounds.getSouthWest(), ne2 = bounds.getNorthEast(), latOverlaps = ne2.lat > sw.lat && sw2.lat < ne.lat, lngOverlaps = ne2.lng > sw.lng && sw2.lng < ne.lng;
        return latOverlaps && lngOverlaps;
    },
    // @method toBBoxString(): String
    // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
    toBBoxString: function() {
        return [
            this.getWest(),
            this.getSouth(),
            this.getEast(),
            this.getNorth()
        ].join(",");
    },
    // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
    // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
    equals: function(bounds, maxMargin) {
        if (!bounds) return false;
        bounds = toLatLngBounds(bounds);
        return this._southWest.equals(bounds.getSouthWest(), maxMargin) && this._northEast.equals(bounds.getNorthEast(), maxMargin);
    },
    // @method isValid(): Boolean
    // Returns `true` if the bounds are properly initialized.
    isValid: function() {
        return !!(this._southWest && this._northEast);
    }
};
function toLatLngBounds(a, b) {
    if (a instanceof LatLngBounds) return a;
    return new LatLngBounds(a, b);
}

},{"./LatLng":"4Z42T","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4o5ZZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SphericalMercator", ()=>SphericalMercator);
var _latLng = require("../LatLng");
var _bounds = require("../../geometry/Bounds");
var _point = require("../../geometry/Point");
/*
 * @namespace Projection
 * @projection L.Projection.SphericalMercator
 *
 * Spherical Mercator projection — the most common projection for online maps,
 * used by almost all free and commercial tile providers. Assumes that Earth is
 * a sphere. Used by the `EPSG:3857` CRS.
 */ var earthRadius = 6378137;
var SphericalMercator = {
    R: earthRadius,
    MAX_LATITUDE: 85.0511287798,
    project: function(latlng) {
        var d = Math.PI / 180, max = this.MAX_LATITUDE, lat = Math.max(Math.min(max, latlng.lat), -max), sin = Math.sin(lat * d);
        return new (0, _point.Point)(this.R * latlng.lng * d, this.R * Math.log((1 + sin) / (1 - sin)) / 2);
    },
    unproject: function(point) {
        var d = 180 / Math.PI;
        return new (0, _latLng.LatLng)((2 * Math.atan(Math.exp(point.y / this.R)) - Math.PI / 2) * d, point.x * d / this.R);
    },
    bounds: function() {
        var d = earthRadius * Math.PI;
        return new (0, _bounds.Bounds)([
            -d,
            -d
        ], [
            d,
            d
        ]);
    }()
};

},{"../LatLng":"4Z42T","../../geometry/Bounds":"7LIBP","../../geometry/Point":"gjteI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kilz2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * @class Transformation
 * @aka L.Transformation
 *
 * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
 * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
 * the reverse. Used by Leaflet in its projections code.
 *
 * @example
 *
 * ```js
 * var transformation = L.transformation(2, 5, -1, 10),
 * 	p = L.point(1, 2),
 * 	p2 = transformation.transform(p), //  L.point(7, 8)
 * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
 * ```
 */ // factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
// Creates a `Transformation` object with the given coefficients.
parcelHelpers.export(exports, "Transformation", ()=>Transformation);
// factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
// Instantiates a Transformation object with the given coefficients.
// @alternative
// @factory L.transformation(coefficients: Array): Transformation
// Expects an coefficients array of the form
// `[a: Number, b: Number, c: Number, d: Number]`.
parcelHelpers.export(exports, "toTransformation", ()=>toTransformation);
var _point = require("./Point");
var _util = require("../core/Util");
function Transformation(a, b, c, d) {
    if (_util.isArray(a)) {
        // use array properties
        this._a = a[0];
        this._b = a[1];
        this._c = a[2];
        this._d = a[3];
        return;
    }
    this._a = a;
    this._b = b;
    this._c = c;
    this._d = d;
}
Transformation.prototype = {
    // @method transform(point: Point, scale?: Number): Point
    // Returns a transformed point, optionally multiplied by the given scale.
    // Only accepts actual `L.Point` instances, not arrays.
    transform: function(point, scale) {
        return this._transform(point.clone(), scale);
    },
    // destructive transform (faster)
    _transform: function(point, scale) {
        scale = scale || 1;
        point.x = scale * (this._a * point.x + this._b);
        point.y = scale * (this._c * point.y + this._d);
        return point;
    },
    // @method untransform(point: Point, scale?: Number): Point
    // Returns the reverse transformation of the given point, optionally divided
    // by the given scale. Only accepts actual `L.Point` instances, not arrays.
    untransform: function(point, scale) {
        scale = scale || 1;
        return new (0, _point.Point)((point.x / scale - this._b) / this._a, (point.y / scale - this._d) / this._c);
    }
};
function toTransformation(a, b, c, d) {
    return new Transformation(a, b, c, d);
}

},{"./Point":"gjteI","../core/Util":"WO8rL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hAKE8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _util = require("./Util");
var _svgUtil = require("../layer/vector/SVG.Util");
/*
 * @namespace Browser
 * @aka L.Browser
 *
 * A namespace with static properties for browser/feature detection used by Leaflet internally.
 *
 * @example
 *
 * ```js
 * if (L.Browser.ielt9) {
 *   alert('Upgrade your browser, dude!');
 * }
 * ```
 */ var style = document.documentElement.style;
// @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
var ie = "ActiveXObject" in window;
// @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.
var ielt9 = ie && !document.addEventListener;
// @property edge: Boolean; `true` for the Edge web browser.
var edge = "msLaunchUri" in navigator && !("documentMode" in document);
// @property webkit: Boolean;
// `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
var webkit = userAgentContains("webkit");
// @property android: Boolean
// **Deprecated.** `true` for any browser running on an Android platform.
var android = userAgentContains("android");
// @property android23: Boolean; **Deprecated.** `true` for browsers running on Android 2 or Android 3.
var android23 = userAgentContains("android 2") || userAgentContains("android 3");
/* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */ var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit
// @property androidStock: Boolean; **Deprecated.** `true` for the Android stock browser (i.e. not Chrome)
var androidStock = android && userAgentContains("Google") && webkitVer < 537 && !("AudioNode" in window);
// @property opera: Boolean; `true` for the Opera browser
var opera = !!window.opera;
// @property chrome: Boolean; `true` for the Chrome browser.
var chrome = !edge && userAgentContains("chrome");
// @property gecko: Boolean; `true` for gecko-based browsers like Firefox.
var gecko = userAgentContains("gecko") && !webkit && !opera && !ie;
// @property safari: Boolean; `true` for the Safari browser.
var safari = !chrome && userAgentContains("safari");
var phantom = userAgentContains("phantom");
// @property opera12: Boolean
// `true` for the Opera browser supporting CSS transforms (version 12 or later).
var opera12 = "OTransition" in style;
// @property win: Boolean; `true` when the browser is running in a Windows platform
var win = navigator.platform.indexOf("Win") === 0;
// @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.
var ie3d = ie && "transition" in style;
// @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.
var webkit3d = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !android23;
// @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.
var gecko3d = "MozPerspective" in style;
// @property any3d: Boolean
// `true` for all browsers supporting CSS transforms.
var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;
// @property mobile: Boolean; `true` for all browsers running in a mobile device.
var mobile = typeof orientation !== "undefined" || userAgentContains("mobile");
// @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.
var mobileWebkit = mobile && webkit;
// @property mobileWebkit3d: Boolean
// `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
var mobileWebkit3d = mobile && webkit3d;
// @property msPointer: Boolean
// `true` for browsers implementing the Microsoft touch events model (notably IE10).
var msPointer = !window.PointerEvent && window.MSPointerEvent;
// @property pointer: Boolean
// `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
var pointer = !!(window.PointerEvent || msPointer);
// @property touchNative: Boolean
// `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
// **This does not necessarily mean** that the browser is running in a computer with
// a touchscreen, it only means that the browser is capable of understanding
// touch events.
var touchNative = "ontouchstart" in window || !!window.TouchEvent;
// @property touch: Boolean
// `true` for all browsers supporting either [touch](#browser-touch) or [pointer](#browser-pointer) events.
// Note: pointer events will be preferred (if available), and processed for all `touch*` listeners.
var touch = !window.L_NO_TOUCH && (touchNative || pointer);
// @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.
var mobileOpera = mobile && opera;
// @property mobileGecko: Boolean
// `true` for gecko-based browsers running in a mobile device.
var mobileGecko = mobile && gecko;
// @property retina: Boolean
// `true` for browsers on a high-resolution "retina" screen or on any screen when browser's display zoom is more than 100%.
var retina = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1;
// @property passiveEvents: Boolean
// `true` for browsers that support passive events.
var passiveEvents = function() {
    var supportsPassiveOption = false;
    try {
        var opts = Object.defineProperty({}, "passive", {
            get: function() {
                supportsPassiveOption = true;
            }
        });
        window.addEventListener("testPassiveEventSupport", _util.falseFn, opts);
        window.removeEventListener("testPassiveEventSupport", _util.falseFn, opts);
    } catch (e) {
    // Errors can safely be ignored since this is only a browser support test.
    }
    return supportsPassiveOption;
}();
// @property canvas: Boolean
// `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
var canvas = function() {
    return !!document.createElement("canvas").getContext;
}();
// @property svg: Boolean
// `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
var svg = !!(document.createElementNS && (0, _svgUtil.svgCreate)("svg").createSVGRect);
var inlineSvg = !!svg && function() {
    var div = document.createElement("div");
    div.innerHTML = "<svg/>";
    return (div.firstChild && div.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
}();
// @property vml: Boolean
// `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
var vml = !svg && function() {
    try {
        var div = document.createElement("div");
        div.innerHTML = '<v:shape adj="1"/>';
        var shape = div.firstChild;
        shape.style.behavior = "url(#default#VML)";
        return shape && typeof shape.adj === "object";
    } catch (e) {
        return false;
    }
}();
// @property mac: Boolean; `true` when the browser is running in a Mac platform
var mac = navigator.platform.indexOf("Mac") === 0;
// @property mac: Boolean; `true` when the browser is running in a Linux platform
var linux = navigator.platform.indexOf("Linux") === 0;
function userAgentContains(str) {
    return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
}
exports.default = {
    ie: ie,
    ielt9: ielt9,
    edge: edge,
    webkit: webkit,
    android: android,
    android23: android23,
    androidStock: androidStock,
    opera: opera,
    chrome: chrome,
    gecko: gecko,
    safari: safari,
    phantom: phantom,
    opera12: opera12,
    win: win,
    ie3d: ie3d,
    webkit3d: webkit3d,
    gecko3d: gecko3d,
    any3d: any3d,
    mobile: mobile,
    mobileWebkit: mobileWebkit,
    mobileWebkit3d: mobileWebkit3d,
    msPointer: msPointer,
    pointer: pointer,
    touch: touch,
    touchNative: touchNative,
    mobileOpera: mobileOpera,
    mobileGecko: mobileGecko,
    retina: retina,
    passiveEvents: passiveEvents,
    canvas: canvas,
    svg: svg,
    vml: vml,
    inlineSvg: inlineSvg,
    mac: mac,
    linux: linux
};

},{"./Util":"WO8rL","../layer/vector/SVG.Util":"c49Q7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c49Q7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// @namespace SVG; @section
// There are several static functions which can be called without instantiating L.SVG:
// @function create(name: String): SVGElement
// Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
// corresponding to the class name passed. For example, using 'line' will return
// an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
parcelHelpers.export(exports, "svgCreate", ()=>svgCreate);
// @function pointsToPath(rings: Point[], closed: Boolean): String
// Generates a SVG path string for multiple rings, with each ring turning
// into "M..L..L.." instructions
parcelHelpers.export(exports, "pointsToPath", ()=>pointsToPath);
var _browser = require("../../core/Browser");
var _browserDefault = parcelHelpers.interopDefault(_browser);
function svgCreate(name) {
    return document.createElementNS("http://www.w3.org/2000/svg", name);
}
function pointsToPath(rings, closed) {
    var str = "", i, j, len, len2, points, p;
    for(i = 0, len = rings.length; i < len; i++){
        points = rings[i];
        for(j = 0, len2 = points.length; j < len2; j++){
            p = points[j];
            str += (j ? "L" : "M") + p.x + " " + p.y;
        }
        // closes the ring for polygons; "x" is VML syntax
        str += closed ? (0, _browserDefault.default).svg ? "z" : "x" : "";
    }
    // SVG complains about empty path strings
    return str || "M0 0";
}

},{"../../core/Browser":"hAKE8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2WZtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * @namespace DomEvent
 * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
 */ // Inspired by John Resig, Dean Edwards and YUI addEvent implementations.
// @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Adds a listener function (`fn`) to a particular DOM event type of the
// element `el`. You can optionally specify the context of the listener
// (object the `this` keyword will point to). You can also pass several
// space-separated types (e.g. `'click dblclick'`).
// @alternative
// @function on(el: HTMLElement, eventMap: Object, context?: Object): this
// Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
parcelHelpers.export(exports, "on", ()=>on);
// @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
// Removes a previously added listener function.
// Note that if you passed a custom context to on, you must pass the same
// context to `off` in order to remove the listener.
// @alternative
// @function off(el: HTMLElement, eventMap: Object, context?: Object): this
// Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
// @alternative
// @function off(el: HTMLElement, types: String): this
// Removes all previously added listeners of given types.
// @alternative
// @function off(el: HTMLElement): this
// Removes all previously added listeners from given HTMLElement
parcelHelpers.export(exports, "off", ()=>off);
// @function stopPropagation(ev: DOMEvent): this
// Stop the given event from propagation to parent elements. Used inside the listener functions:
// ```js
// L.DomEvent.on(div, 'click', function (ev) {
// 	L.DomEvent.stopPropagation(ev);
// });
// ```
parcelHelpers.export(exports, "stopPropagation", ()=>stopPropagation);
// @function disableScrollPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'wheel'` events (plus browser variants).
parcelHelpers.export(exports, "disableScrollPropagation", ()=>disableScrollPropagation);
// @function disableClickPropagation(el: HTMLElement): this
// Adds `stopPropagation` to the element's `'click'`, `'dblclick'`, `'contextmenu'`,
// `'mousedown'` and `'touchstart'` events (plus browser variants).
parcelHelpers.export(exports, "disableClickPropagation", ()=>disableClickPropagation);
// @function preventDefault(ev: DOMEvent): this
// Prevents the default action of the DOM Event `ev` from happening (such as
// following a link in the href of the a element, or doing a POST request
// with page reload when a `<form>` is submitted).
// Use it inside listener functions.
parcelHelpers.export(exports, "preventDefault", ()=>preventDefault);
// @function stop(ev: DOMEvent): this
// Does `stopPropagation` and `preventDefault` at the same time.
parcelHelpers.export(exports, "stop", ()=>stop);
// @function getPropagationPath(ev: DOMEvent): Array
// Compatibility polyfill for [`Event.composedPath()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath).
// Returns an array containing the `HTMLElement`s that the given DOM event
// should propagate to (if not stopped).
parcelHelpers.export(exports, "getPropagationPath", ()=>getPropagationPath);
// @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
// Gets normalized mouse position from a DOM event relative to the
// `container` (border excluded) or to the whole page if not specified.
parcelHelpers.export(exports, "getMousePosition", ()=>getMousePosition);
// @function getWheelDelta(ev: DOMEvent): Number
// Gets normalized wheel delta from a wheel DOM event, in vertical
// pixels scrolled (negative if scrolling down).
// Events from pointing devices without precise scrolling are mapped to
// a best guess of 60 pixels.
parcelHelpers.export(exports, "getWheelDelta", ()=>getWheelDelta);
// check if element really left/entered the event target (for mouseenter/mouseleave)
parcelHelpers.export(exports, "isExternalTarget", ()=>isExternalTarget);
// @function addListener(…): this
// Alias to [`L.DomEvent.on`](#domevent-on)
parcelHelpers.export(exports, "addListener", ()=>on);
// @function removeListener(…): this
// Alias to [`L.DomEvent.off`](#domevent-off)
parcelHelpers.export(exports, "removeListener", ()=>off);
var _point = require("../geometry/Point");
var _util = require("../core/Util");
var _browser = require("../core/Browser");
var _browserDefault = parcelHelpers.interopDefault(_browser);
var _domEventPointer = require("./DomEvent.Pointer");
var _domEventDoubleTap = require("./DomEvent.DoubleTap");
var _domUtil = require("./DomUtil");
function on(obj, types, fn, context) {
    if (types && typeof types === "object") for(var type in types)addOne(obj, type, types[type], fn);
    else {
        types = _util.splitWords(types);
        for(var i = 0, len = types.length; i < len; i++)addOne(obj, types[i], fn, context);
    }
    return this;
}
var eventsKey = "_leaflet_events";
function off(obj, types, fn, context) {
    if (arguments.length === 1) {
        batchRemove(obj);
        delete obj[eventsKey];
    } else if (types && typeof types === "object") for(var type in types)removeOne(obj, type, types[type], fn);
    else {
        types = _util.splitWords(types);
        if (arguments.length === 2) batchRemove(obj, function(type) {
            return _util.indexOf(types, type) !== -1;
        });
        else for(var i = 0, len = types.length; i < len; i++)removeOne(obj, types[i], fn, context);
    }
    return this;
}
function batchRemove(obj, filterFn) {
    for(var id in obj[eventsKey]){
        var type = id.split(/\d/)[0];
        if (!filterFn || filterFn(type)) removeOne(obj, type, null, null, id);
    }
}
var mouseSubst = {
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    wheel: !("onwheel" in window) && "mousewheel"
};
function addOne(obj, type, fn, context) {
    var id = type + _util.stamp(fn) + (context ? "_" + _util.stamp(context) : "");
    if (obj[eventsKey] && obj[eventsKey][id]) return this;
    var handler = function(e) {
        return fn.call(context || obj, e || window.event);
    };
    var originalHandler = handler;
    if (!(0, _browserDefault.default).touchNative && (0, _browserDefault.default).pointer && type.indexOf("touch") === 0) // Needs DomEvent.Pointer.js
    handler = (0, _domEventPointer.addPointerListener)(obj, type, handler);
    else if ((0, _browserDefault.default).touch && type === "dblclick") handler = (0, _domEventDoubleTap.addDoubleTapListener)(obj, handler);
    else if ("addEventListener" in obj) {
        if (type === "touchstart" || type === "touchmove" || type === "wheel" || type === "mousewheel") obj.addEventListener(mouseSubst[type] || type, handler, (0, _browserDefault.default).passiveEvents ? {
            passive: false
        } : false);
        else if (type === "mouseenter" || type === "mouseleave") {
            handler = function(e) {
                e = e || window.event;
                if (isExternalTarget(obj, e)) originalHandler(e);
            };
            obj.addEventListener(mouseSubst[type], handler, false);
        } else obj.addEventListener(type, originalHandler, false);
    } else obj.attachEvent("on" + type, handler);
    obj[eventsKey] = obj[eventsKey] || {};
    obj[eventsKey][id] = handler;
}
function removeOne(obj, type, fn, context, id) {
    id = id || type + _util.stamp(fn) + (context ? "_" + _util.stamp(context) : "");
    var handler = obj[eventsKey] && obj[eventsKey][id];
    if (!handler) return this;
    if (!(0, _browserDefault.default).touchNative && (0, _browserDefault.default).pointer && type.indexOf("touch") === 0) (0, _domEventPointer.removePointerListener)(obj, type, handler);
    else if ((0, _browserDefault.default).touch && type === "dblclick") (0, _domEventDoubleTap.removeDoubleTapListener)(obj, handler);
    else if ("removeEventListener" in obj) obj.removeEventListener(mouseSubst[type] || type, handler, false);
    else obj.detachEvent("on" + type, handler);
    obj[eventsKey][id] = null;
}
function stopPropagation(e) {
    if (e.stopPropagation) e.stopPropagation();
    else if (e.originalEvent) e.originalEvent._stopped = true;
    else e.cancelBubble = true;
    return this;
}
function disableScrollPropagation(el) {
    addOne(el, "wheel", stopPropagation);
    return this;
}
function disableClickPropagation(el) {
    on(el, "mousedown touchstart dblclick contextmenu", stopPropagation);
    el["_leaflet_disable_click"] = true;
    return this;
}
function preventDefault(e) {
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    return this;
}
function stop(e) {
    preventDefault(e);
    stopPropagation(e);
    return this;
}
function getPropagationPath(ev) {
    if (ev.composedPath) return ev.composedPath();
    var path = [];
    var el = ev.target;
    while(el){
        path.push(el);
        el = el.parentNode;
    }
    return path;
}
function getMousePosition(e, container) {
    if (!container) return new (0, _point.Point)(e.clientX, e.clientY);
    var scale = (0, _domUtil.getScale)(container), offset = scale.boundingClientRect; // left and top  values are in page scale (like the event clientX/Y)
    return new (0, _point.Point)(// offset.left/top values are in page scale (like clientX/Y),
    // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
    (e.clientX - offset.left) / scale.x - container.clientLeft, (e.clientY - offset.top) / scale.y - container.clientTop);
}
//  except , Safari and
// We need double the scroll pixels (see #7403 and #4538) for all Browsers
// except OSX (Mac) -> 3x, Chrome running on Linux 1x
var wheelPxFactor = (0, _browserDefault.default).linux && (0, _browserDefault.default).chrome ? window.devicePixelRatio : (0, _browserDefault.default).mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
function getWheelDelta(e) {
    return (0, _browserDefault.default).edge ? e.wheelDeltaY / 2 : e.deltaY && e.deltaMode === 0 ? -e.deltaY / wheelPxFactor : e.deltaY && e.deltaMode === 1 ? -e.deltaY * 20 : e.deltaY && e.deltaMode === 2 ? -e.deltaY * 60 : e.deltaX || e.deltaZ ? 0 : e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : e.detail && Math.abs(e.detail) < 32765 ? -e.detail * 20 : e.detail ? e.detail / -32765 * 60 : 0;
}
function isExternalTarget(el, e) {
    var related = e.relatedTarget;
    if (!related) return true;
    try {
        while(related && related !== el)related = related.parentNode;
    } catch (err) {
        return false;
    }
    return related !== el;
}

},{"../geometry/Point":"gjteI","../core/Util":"WO8rL","../core/Browser":"hAKE8","./DomEvent.Pointer":"ji1Bz","./DomEvent.DoubleTap":"kR6jS","./DomUtil":"ll3cS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ji1Bz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Provides a touch events wrapper for (ms)pointer events.
// ref https://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890
parcelHelpers.export(exports, "addPointerListener", ()=>addPointerListener);
parcelHelpers.export(exports, "removePointerListener", ()=>removePointerListener);
var _domEvent = require("./DomEvent");
var _browser = require("../core/Browser");
var _browserDefault = parcelHelpers.interopDefault(_browser);
var _util = require("../core/Util");
/*
 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
 */ var POINTER_DOWN = (0, _browserDefault.default).msPointer ? "MSPointerDown" : "pointerdown";
var POINTER_MOVE = (0, _browserDefault.default).msPointer ? "MSPointerMove" : "pointermove";
var POINTER_UP = (0, _browserDefault.default).msPointer ? "MSPointerUp" : "pointerup";
var POINTER_CANCEL = (0, _browserDefault.default).msPointer ? "MSPointerCancel" : "pointercancel";
var pEvent = {
    touchstart: POINTER_DOWN,
    touchmove: POINTER_MOVE,
    touchend: POINTER_UP,
    touchcancel: POINTER_CANCEL
};
var handle = {
    touchstart: _onPointerStart,
    touchmove: _handlePointer,
    touchend: _handlePointer,
    touchcancel: _handlePointer
};
var _pointers = {};
var _pointerDocListener = false;
function addPointerListener(obj, type, handler) {
    if (type === "touchstart") _addPointerDocListener();
    if (!handle[type]) {
        console.warn("wrong event specified:", type);
        return 0, _util.falseFn;
    }
    handler = handle[type].bind(this, handler);
    obj.addEventListener(pEvent[type], handler, false);
    return handler;
}
function removePointerListener(obj, type, handler) {
    if (!pEvent[type]) {
        console.warn("wrong event specified:", type);
        return;
    }
    obj.removeEventListener(pEvent[type], handler, false);
}
function _globalPointerDown(e) {
    _pointers[e.pointerId] = e;
}
function _globalPointerMove(e) {
    if (_pointers[e.pointerId]) _pointers[e.pointerId] = e;
}
function _globalPointerUp(e) {
    delete _pointers[e.pointerId];
}
function _addPointerDocListener() {
    // need to keep track of what pointers and how many are active to provide e.touches emulation
    if (!_pointerDocListener) {
        // we listen document as any drags that end by moving the touch off the screen get fired there
        document.addEventListener(POINTER_DOWN, _globalPointerDown, true);
        document.addEventListener(POINTER_MOVE, _globalPointerMove, true);
        document.addEventListener(POINTER_UP, _globalPointerUp, true);
        document.addEventListener(POINTER_CANCEL, _globalPointerUp, true);
        _pointerDocListener = true;
    }
}
function _handlePointer(handler, e) {
    if (e.pointerType === (e.MSPOINTER_TYPE_MOUSE || "mouse")) return;
    e.touches = [];
    for(var i in _pointers)e.touches.push(_pointers[i]);
    e.changedTouches = [
        e
    ];
    handler(e);
}
function _onPointerStart(handler, e) {
    // IE10 specific: MsTouch needs preventDefault. See #2000
    if (e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH) _domEvent.preventDefault(e);
    _handlePointer(handler, e);
}

},{"./DomEvent":"2WZtu","../core/Browser":"hAKE8","../core/Util":"WO8rL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kR6jS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addDoubleTapListener", ()=>addDoubleTapListener);
parcelHelpers.export(exports, "removeDoubleTapListener", ()=>removeDoubleTapListener);
var _domEvent = require("./DomEvent");
/*
 * Extends the event handling code with double tap support for mobile browsers.
 *
 * Note: currently most browsers fire native dblclick, with only a few exceptions
 * (see https://github.com/Leaflet/Leaflet/issues/7012#issuecomment-595087386)
 */ function makeDblclick(event) {
    // in modern browsers `type` cannot be just overridden:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only
    var newEvent = {}, prop, i;
    for(i in event){
        prop = event[i];
        newEvent[i] = prop && prop.bind ? prop.bind(event) : prop;
    }
    event = newEvent;
    newEvent.type = "dblclick";
    newEvent.detail = 2;
    newEvent.isTrusted = false;
    newEvent._simulated = true; // for debug purposes
    return newEvent;
}
var delay = 200;
function addDoubleTapListener(obj, handler) {
    // Most browsers handle double tap natively
    obj.addEventListener("dblclick", handler);
    // On some platforms the browser doesn't fire native dblclicks for touch events.
    // It seems that in all such cases `detail` property of `click` event is always `1`.
    // So here we rely on that fact to avoid excessive 'dblclick' simulation when not needed.
    var last = 0, detail;
    function simDblclick(e) {
        if (e.detail !== 1) {
            detail = e.detail; // keep in sync to avoid false dblclick in some cases
            return;
        }
        if (e.pointerType === "mouse" || e.sourceCapabilities && !e.sourceCapabilities.firesTouchEvents) return;
        // When clicking on an <input>, the browser generates a click on its
        // <label> (and vice versa) triggering two clicks in quick succession.
        // This ignores clicks on elements which are a label with a 'for'
        // attribute (or children of such a label), but not children of
        // a <input>.
        var path = _domEvent.getPropagationPath(e);
        if (path.some(function(el) {
            return el instanceof HTMLLabelElement && el.attributes.for;
        }) && !path.some(function(el) {
            return el instanceof HTMLInputElement || el instanceof HTMLSelectElement;
        })) return;
        var now = Date.now();
        if (now - last <= delay) {
            detail++;
            if (detail === 2) handler(makeDblclick(e));
        } else detail = 1;
        last = now;
    }
    obj.addEventListener("click", simDblclick);
    return {
        dblclick: handler,
        simDblclick: simDblclick
    };
}
function removeDoubleTapListener(obj, handlers) {
    obj.removeEventListener("dblclick", handlers.dblclick);
    obj.removeEventListener("click", handlers.simDblclick);
}

},{"./DomEvent":"2WZtu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ll3cS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TRANSFORM", ()=>TRANSFORM);
parcelHelpers.export(exports, "TRANSITION", ()=>TRANSITION);
parcelHelpers.export(exports, "TRANSITION_END", ()=>TRANSITION_END);
// @function get(id: String|HTMLElement): HTMLElement
// Returns an element given its DOM id, or returns the element itself
// if it was passed directly.
parcelHelpers.export(exports, "get", ()=>get);
// @function getStyle(el: HTMLElement, styleAttrib: String): String
// Returns the value for a certain style attribute on an element,
// including computed values or values set through CSS.
parcelHelpers.export(exports, "getStyle", ()=>getStyle);
// @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
// Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
parcelHelpers.export(exports, "create", ()=>create);
// @function remove(el: HTMLElement)
// Removes `el` from its parent element
parcelHelpers.export(exports, "remove", ()=>remove);
// @function empty(el: HTMLElement)
// Removes all of `el`'s children elements from `el`
parcelHelpers.export(exports, "empty", ()=>empty);
// @function toFront(el: HTMLElement)
// Makes `el` the last child of its parent, so it renders in front of the other children.
parcelHelpers.export(exports, "toFront", ()=>toFront);
// @function toBack(el: HTMLElement)
// Makes `el` the first child of its parent, so it renders behind the other children.
parcelHelpers.export(exports, "toBack", ()=>toBack);
// @function hasClass(el: HTMLElement, name: String): Boolean
// Returns `true` if the element's class attribute contains `name`.
parcelHelpers.export(exports, "hasClass", ()=>hasClass);
// @function addClass(el: HTMLElement, name: String)
// Adds `name` to the element's class attribute.
parcelHelpers.export(exports, "addClass", ()=>addClass);
// @function removeClass(el: HTMLElement, name: String)
// Removes `name` from the element's class attribute.
parcelHelpers.export(exports, "removeClass", ()=>removeClass);
// @function setClass(el: HTMLElement, name: String)
// Sets the element's class.
parcelHelpers.export(exports, "setClass", ()=>setClass);
// @function getClass(el: HTMLElement): String
// Returns the element's class.
parcelHelpers.export(exports, "getClass", ()=>getClass);
// @function setOpacity(el: HTMLElement, opacity: Number)
// Set the opacity of an element (including old IE support).
// `opacity` must be a number from `0` to `1`.
parcelHelpers.export(exports, "setOpacity", ()=>setOpacity);
// @function testProp(props: String[]): String|false
// Goes through the array of style names and returns the first name
// that is a valid style name for an element. If no such name is found,
// it returns false. Useful for vendor-prefixed styles like `transform`.
parcelHelpers.export(exports, "testProp", ()=>testProp);
// @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
// Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
// and optionally scaled by `scale`. Does not have an effect if the
// browser doesn't support 3D CSS transforms.
parcelHelpers.export(exports, "setTransform", ()=>setTransform);
// @function setPosition(el: HTMLElement, position: Point)
// Sets the position of `el` to coordinates specified by `position`,
// using CSS translate or top/left positioning depending on the browser
// (used by Leaflet internally to position its layers).
parcelHelpers.export(exports, "setPosition", ()=>setPosition);
// @function getPosition(el: HTMLElement): Point
// Returns the coordinates of an element previously positioned with setPosition.
parcelHelpers.export(exports, "getPosition", ()=>getPosition);
parcelHelpers.export(exports, "disableTextSelection", ()=>disableTextSelection);
parcelHelpers.export(exports, "enableTextSelection", ()=>enableTextSelection);
// @function disableImageDrag()
// As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
// for `dragstart` DOM events, usually generated when the user drags an image.
parcelHelpers.export(exports, "disableImageDrag", ()=>disableImageDrag);
// @function enableImageDrag()
// Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
parcelHelpers.export(exports, "enableImageDrag", ()=>enableImageDrag);
// @function preventOutline(el: HTMLElement)
// Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
// of the element `el` invisible. Used internally by Leaflet to prevent
// focusable elements from displaying an outline when the user performs a
// drag interaction on them.
parcelHelpers.export(exports, "preventOutline", ()=>preventOutline);
// @function restoreOutline()
// Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
parcelHelpers.export(exports, "restoreOutline", ()=>restoreOutline);
// @function getSizedParentNode(el: HTMLElement): HTMLElement
// Finds the closest parent node which size (width and height) is not null.
parcelHelpers.export(exports, "getSizedParentNode", ()=>getSizedParentNode);
// @function getScale(el: HTMLElement): Object
// Computes the CSS scale currently applied on the element.
// Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
// and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
parcelHelpers.export(exports, "getScale", ()=>getScale);
var _domEvent = require("./DomEvent");
var _util = require("../core/Util");
var _point = require("../geometry/Point");
var _browser = require("../core/Browser");
var _browserDefault = parcelHelpers.interopDefault(_browser);
var TRANSFORM = testProp([
    "transform",
    "webkitTransform",
    "OTransform",
    "MozTransform",
    "msTransform"
]);
var TRANSITION = testProp([
    "webkitTransition",
    "transition",
    "OTransition",
    "MozTransition",
    "msTransition"
]);
var TRANSITION_END = TRANSITION === "webkitTransition" || TRANSITION === "OTransition" ? TRANSITION + "End" : "transitionend";
function get(id) {
    return typeof id === "string" ? document.getElementById(id) : id;
}
function getStyle(el, style) {
    var value = el.style[style] || el.currentStyle && el.currentStyle[style];
    if ((!value || value === "auto") && document.defaultView) {
        var css = document.defaultView.getComputedStyle(el, null);
        value = css ? css[style] : null;
    }
    return value === "auto" ? null : value;
}
function create(tagName, className, container) {
    var el = document.createElement(tagName);
    el.className = className || "";
    if (container) container.appendChild(el);
    return el;
}
function remove(el) {
    var parent = el.parentNode;
    if (parent) parent.removeChild(el);
}
function empty(el) {
    while(el.firstChild)el.removeChild(el.firstChild);
}
function toFront(el) {
    var parent = el.parentNode;
    if (parent && parent.lastChild !== el) parent.appendChild(el);
}
function toBack(el) {
    var parent = el.parentNode;
    if (parent && parent.firstChild !== el) parent.insertBefore(el, parent.firstChild);
}
function hasClass(el, name) {
    if (el.classList !== undefined) return el.classList.contains(name);
    var className = getClass(el);
    return className.length > 0 && new RegExp("(^|\\s)" + name + "(\\s|$)").test(className);
}
function addClass(el, name) {
    if (el.classList !== undefined) {
        var classes = _util.splitWords(name);
        for(var i = 0, len = classes.length; i < len; i++)el.classList.add(classes[i]);
    } else if (!hasClass(el, name)) {
        var className = getClass(el);
        setClass(el, (className ? className + " " : "") + name);
    }
}
function removeClass(el, name) {
    if (el.classList !== undefined) el.classList.remove(name);
    else setClass(el, _util.trim((" " + getClass(el) + " ").replace(" " + name + " ", " ")));
}
function setClass(el, name) {
    if (el.className.baseVal === undefined) el.className = name;
    else // in case of SVG element
    el.className.baseVal = name;
}
function getClass(el) {
    // Check if the element is an SVGElementInstance and use the correspondingElement instead
    // (Required for linked SVG elements in IE11.)
    if (el.correspondingElement) el = el.correspondingElement;
    return el.className.baseVal === undefined ? el.className : el.className.baseVal;
}
function setOpacity(el, value) {
    if ("opacity" in el.style) el.style.opacity = value;
    else if ("filter" in el.style) _setOpacityIE(el, value);
}
function _setOpacityIE(el, value) {
    var filter = false, filterName = "DXImageTransform.Microsoft.Alpha";
    // filters collection throws an error if we try to retrieve a filter that doesn't exist
    try {
        filter = el.filters.item(filterName);
    } catch (e) {
        // don't set opacity to 1 if we haven't already set an opacity,
        // it isn't needed and breaks transparent pngs.
        if (value === 1) return;
    }
    value = Math.round(value * 100);
    if (filter) {
        filter.Enabled = value !== 100;
        filter.Opacity = value;
    } else el.style.filter += " progid:" + filterName + "(opacity=" + value + ")";
}
function testProp(props) {
    var style = document.documentElement.style;
    for(var i = 0; i < props.length; i++){
        if (props[i] in style) return props[i];
    }
    return false;
}
function setTransform(el, offset, scale) {
    var pos = offset || new (0, _point.Point)(0, 0);
    el.style[TRANSFORM] = ((0, _browserDefault.default).ie3d ? "translate(" + pos.x + "px," + pos.y + "px)" : "translate3d(" + pos.x + "px," + pos.y + "px,0)") + (scale ? " scale(" + scale + ")" : "");
}
function setPosition(el, point) {
    /*eslint-disable */ el._leaflet_pos = point;
    /* eslint-enable */ if ((0, _browserDefault.default).any3d) setTransform(el, point);
    else {
        el.style.left = point.x + "px";
        el.style.top = point.y + "px";
    }
}
function getPosition(el) {
    // this method is only used for elements previously positioned using setPosition,
    // so it's safe to cache the position for performance
    return el._leaflet_pos || new (0, _point.Point)(0, 0);
}
var disableTextSelection;
var enableTextSelection;
var _userSelect;
if ("onselectstart" in document) {
    disableTextSelection = function() {
        _domEvent.on(window, "selectstart", _domEvent.preventDefault);
    };
    enableTextSelection = function() {
        _domEvent.off(window, "selectstart", _domEvent.preventDefault);
    };
} else {
    var userSelectProperty = testProp([
        "userSelect",
        "WebkitUserSelect",
        "OUserSelect",
        "MozUserSelect",
        "msUserSelect"
    ]);
    disableTextSelection = function() {
        if (userSelectProperty) {
            var style = document.documentElement.style;
            _userSelect = style[userSelectProperty];
            style[userSelectProperty] = "none";
        }
    };
    enableTextSelection = function() {
        if (userSelectProperty) {
            document.documentElement.style[userSelectProperty] = _userSelect;
            _userSelect = undefined;
        }
    };
}
function disableImageDrag() {
    _domEvent.on(window, "dragstart", _domEvent.preventDefault);
}
function enableImageDrag() {
    _domEvent.off(window, "dragstart", _domEvent.preventDefault);
}
var _outlineElement, _outlineStyle;
function preventOutline(element) {
    while(element.tabIndex === -1)element = element.parentNode;
    if (!element.style) return;
    restoreOutline();
    _outlineElement = element;
    _outlineStyle = element.style.outlineStyle;
    element.style.outlineStyle = "none";
    _domEvent.on(window, "keydown", restoreOutline);
}
function restoreOutline() {
    if (!_outlineElement) return;
    _outlineElement.style.outlineStyle = _outlineStyle;
    _outlineElement = undefined;
    _outlineStyle = undefined;
    _domEvent.off(window, "keydown", restoreOutline);
}
function getSizedParentNode(element) {
    do element = element.parentNode;
    while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);
    return element;
}
function getScale(element) {
    var rect = element.getBoundingClientRect(); // Read-only in old browsers.
    return {
        x: rect.width / element.offsetWidth || 1,
        y: rect.height / element.offsetHeight || 1,
        boundingClientRect: rect
    };
}

},{"./DomEvent":"2WZtu","../core/Util":"WO8rL","../geometry/Point":"gjteI","../core/Browser":"hAKE8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k4U2P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PosAnimation", ()=>PosAnimation);
var _util = require("../core/Util");
var _events = require("../core/Events");
var _domUtil = require("../dom/DomUtil");
var PosAnimation = (0, _events.Evented).extend({
    // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
    // Run an animation of a given element to a new position, optionally setting
    // duration in seconds (`0.25` by default) and easing linearity factor (3rd
    // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
    // `0.5` by default).
    run: function(el, newPos, duration, easeLinearity) {
        this.stop();
        this._el = el;
        this._inProgress = true;
        this._duration = duration || 0.25;
        this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);
        this._startPos = _domUtil.getPosition(el);
        this._offset = newPos.subtract(this._startPos);
        this._startTime = +new Date();
        // @event start: Event
        // Fired when the animation starts
        this.fire("start");
        this._animate();
    },
    // @method stop()
    // Stops the animation (if currently running).
    stop: function() {
        if (!this._inProgress) return;
        this._step(true);
        this._complete();
    },
    _animate: function() {
        // animation loop
        this._animId = _util.requestAnimFrame(this._animate, this);
        this._step();
    },
    _step: function(round) {
        var elapsed = +new Date() - this._startTime, duration = this._duration * 1000;
        if (elapsed < duration) this._runFrame(this._easeOut(elapsed / duration), round);
        else {
            this._runFrame(1);
            this._complete();
        }
    },
    _runFrame: function(progress, round) {
        var pos = this._startPos.add(this._offset.multiplyBy(progress));
        if (round) pos._round();
        _domUtil.setPosition(this._el, pos);
        // @event step: Event
        // Fired continuously during the animation.
        this.fire("step");
    },
    _complete: function() {
        _util.cancelAnimFrame(this._animId);
        this._inProgress = false;
        // @event end: Event
        // Fired when the animation ends.
        this.fire("end");
    },
    _easeOut: function(t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
    }
});

},{"../core/Util":"WO8rL","../core/Events":"4gJAM","../dom/DomUtil":"ll3cS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gAoaA","6rimH"], "6rimH", "parcelRequire7e89")

//# sourceMappingURL=script.js.map
