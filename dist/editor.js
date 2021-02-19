/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/block-assets/font-family.js":
/*!************************************************!*\
  !*** ./src/blocks/block-assets/font-family.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var fontFmily = ["ABeeZee", "Abel", "Aclonica", "Acme", "Aguafina Script", "Akronim", "Aladin", "Alegreya SC", "Alex Brush", "Allura", "Almendra", "Almendra Display", "Amatic SC", "Amita", "Arizonia", "Arimo", "Arvo", "Asap Condensed", "Bad Script", "Balsamiq Sans", "Barrio", "Berkshire Swash", "Bubblegum Sans", "Bungee Hairline", "Butcherman", "Catamaran", "Dancing Script", "Do Hyeon", "Dokdo", "Dosis", "Dr Sugiyama", "Eater", "Ewert", "Fascinate Inline", "Faster One", "Finger Paint", "Gorditas", "Great Vibes", "Habibi", "Hanuman", "Hanalei", "IM Fell Great Primer SC", "Iceberg", "Iceland", "Indie Flower", "Inter", "Irish Grover", "Italianno", "Itim", "Jacques Francois", "Jacques Francois Shadow", "Jim Nightshade", "Joti One", "Julius Sans One", "Just Me Again Down Here", "Kaushan Script", "Keania One", "Kirang Haerang", "Kite One", "Kristi", "Kumar One Outline", "Lakki Reddy", "Leckerli One", "Lily Script One", "Liu Jian Mao Cao", "Londrina Shadow", "Love Ya Like A Sister", "Major Mono Display", "Mandali", "Marck Script", "Merienda", "Merienda One", "Merriweather Sans", "Michroma", "Miltonian Tattoo", "Mountains of Christmas", "Mukta Vaani", "Niramit", "Nosifer", "Nova Script", "Norican", "Offside", "Orbitron", "PT Sans Caption", "Pacifico", "Palanquin Dark", "Piedra", "Playfair Display", "Poiret One", "Princess Sofia", "Zilla Slab", "Zhi Mang Xing", "Zeyada", "ZCOOL XiaoWei", "ZCOOL KuaiLe", "Yeon Sung", "Yellowtail", "Yatra One", "Yanone Kaffeesatz", "Yesteryear", "Wire One", "Wendy One", "Wellfleet", "Warnes", "Walter Turncoat", "Wallpoet", "Waiting for the Sunrise", "Volkhov", "Viga", "Vibur", "Vibes", "Vast Shadow", "Vampiro One", "VT323", "Unlock", "Unkempt", "UnifrakturMaguntia", "Unica One", "Underdog", "Uncial Antiqua", "Ultra", "Ubuntu", "Ubuntu Mono", "Turret Road", "Turret Road", "Tulpen One", "Trochut", "Trocchi", "Trade Winds", "Tomorrow", "Titan One", "Timmana", "Tillana", "The Girl Next Door", "Text Me One", "Tenali Ramakrishna", "Tauri", "Tangerine", "Syncopate", "Swanky and Moo Moo", "Suravaram", "Supermercado One", "Sunshiney", "Sulphur Point", "Sue Ellen Francisco", "Stylish", "Stint Ultra Expanded", "Stardos Stencil", "Stalinist One", "Stalemate", "Srisakdi", "Sriracha", "Spirax", "Spicy Rice", "Special Elite", "Space Mono", "Source Code Pro", "Sonsie One", "Sofia", "Sofadi One", "Snowburst One", "Snippet", "Sniglet", "Smokum", "Slackey", "Skranji", "Six Caps", "Sirin Stencil", "Simonetta", "Sigmar One", "Shrikhand", "Short Stack", "Shojumaru", "Shadows Into Light Two", "Shadows Into Light", "Seymour One", "Sevillana", "Sedgwick Ave Display", "Sedgwick Ave", "Seaweed Script", "Satisfy", "Sarina", "Sancreek", "Saira Stencil One", "Sail", "Sacramento", "Rye", "Ruthie", "Ruslan Display", "Rum Raisin", "Ruge Boogie", "Rubik Mono One", "Rouge Script", "Rosarivo", "Romanesco", "Rock Salt", "Rochester", "Roboto", "Risque", "Ribeye Marrow", "Ribeye", "Revalia", "Reenie Beanie", "Redressed", "Red Rose", "Ravi Prakash", "Ranga", "Rancho", "Ranchers", "Raleway Dots", "Rakkas", "Rajdhani", "Racing Sans One", "Quintessential", "Qwigley", "Quicksand"];
/* harmony default export */ __webpack_exports__["default"] = (fontFmily);

/***/ }),

/***/ "./src/blocks/block-assets/icons.js":
/*!******************************************!*\
  !*** ./src/blocks/block-assets/icons.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var icons_ = ["fas fa-ad", "fas fa-address-book", "fas fa-address-card", "fas fa-adjust", "fas fa-air-freshener", "fas fa-align-center", "fas fa-align-justify", "fas fa-align-left", "fas fa-align-right", "fas fa-allergies", "fas fa-ambulance", "fas fa-american-sign-language-interpreting", "fas fa-anchor", "fas fa-angle-double-down", "fas fa-angle-double-left", "fas fa-angle-double-right", "fas fa-angle-double-up", "fas fa-angle-down", "fas fa-angle-left", "fas fa-angle-right", "fas fa-angle-up", "fas fa-angry", "fas fa-ankh", "fas fa-apple-alt", "fas fa-archive", "fas fa-archway", "fas fa-arrow-alt-circle-down", "fas fa-arrow-alt-circle-left", "fas fa-arrow-alt-circle-right", "fas fa-arrow-alt-circle-up", "fas fa-arrow-circle-down", "fas fa-arrow-circle-left", "fas fa-arrow-circle-right", "fas fa-arrow-circle-up", "fas fa-arrow-down", "fas fa-arrow-left", "fas fa-arrow-right", "fas fa-arrow-up", "fas fa-arrows-alt", "fas fa-arrows-alt-h", "fas fa-arrows-alt-v", "fas fa-assistive-listening-systems", "fas fa-asterisk", "fas fa-at", "fas fa-atlas", "fas fa-atom", "fas fa-audio-description", "fas fa-award", "fas fa-baby", "fas fa-baby-carriage", "fas fa-backspace", "fas fa-backward", "fas fa-balance-scale", "fas fa-ban", "fas fa-band-aid", "fas fa-barcode", "fas fa-bars", "fas fa-baseball-ball", "fas fa-basketball-ball", "fas fa-bath", "fas fa-battery-empty", "fas fa-battery-full", "fas fa-battery-half", "fas fa-battery-quarter", "fas fa-battery-three-quarters", "fas fa-bed", "fas fa-beer", "fas fa-bell", "fas fa-bell-slash", "fas fa-bezier-curve", "fas fa-bible", "fas fa-bicycle", "fas fa-binoculars", "fas fa-biohazard", "fas fa-birthday-cake", "fas fa-blender", "fas fa-blender-phone", "fas fa-blind", "fas fa-blog", "fas fa-bold", "fas fa-bolt", "fas fa-bomb", "fas fa-bone", "fas fa-bong", "fas fa-book", "fas fa-book-dead", "fas fa-book-open", "fas fa-book-reader", "fas fa-bookmark", "fas fa-bowling-ball", "fas fa-box", "fas fa-box-open", "fas fa-boxes", "fas fa-braille", "fas fa-brain", "fas fa-briefcase", "fas fa-briefcase-medical", "fas fa-broadcast-tower", "fas fa-broom", "fas fa-brush", "fas fa-bug", "fas fa-building", "fas fa-bullhorn", "fas fa-bullseye", "fas fa-burn", "fas fa-bus", "fas fa-bus-alt", "fas fa-business-time", "fas fa-calculator", "fas fa-calendar", "fas fa-calendar-alt", "fas fa-calendar-check", "fas fa-calendar-day", "fas fa-calendar-minus", "fas fa-calendar-plus", "fas fa-calendar-times", "fas fa-calendar-week", "fas fa-camera", "fas fa-camera-retro", "fas fa-campground", "fas fa-candy-cane", "fas fa-cannabis", "fas fa-capsules", "fas fa-car", "fas fa-car-alt", "fas fa-car-battery", "fas fa-car-crash", "fas fa-car-side", "fas fa-caret-down", "fas fa-caret-left", "fas fa-caret-right", "fas fa-caret-square-down", "fas fa-caret-square-left", "fas fa-caret-square-right", "fas fa-caret-square-up", "fas fa-caret-up", "fas fa-carrot", "fas fa-cart-arrow-down", "fas fa-cart-plus", "fas fa-cash-register", "fas fa-cat", "fas fa-certificate", "fas fa-chair", "fas fa-chalkboard", "fas fa-chalkboard-teacher", "fas fa-charging-station", "fas fa-chart-area", "fas fa-chart-bar", "fas fa-chart-line", "fas fa-chart-pie", "fas fa-check", "fas fa-check-circle", "fas fa-check-double", "fas fa-check-square", "fas fa-chess", "fas fa-chess-bishop", "fas fa-chess-board", "fas fa-chess-king", "fas fa-chess-knight", "fas fa-chess-pawn", "fas fa-chess-queen", "fas fa-chess-rook", "fas fa-chevron-circle-down", "fas fa-chevron-circle-left", "fas fa-chevron-circle-right", "fas fa-chevron-circle-up", "fas fa-chevron-down", "fas fa-chevron-left", "fas fa-chevron-right", "fas fa-chevron-up", "fas fa-child", "fas fa-church", "fas fa-circle", "fas fa-circle-notch", "fas fa-city", "fas fa-clipboard", "fas fa-clipboard-check", "fas fa-clipboard-list", "fas fa-clock", "fas fa-clone", "fas fa-closed-captioning", "fas fa-cloud", "fas fa-cloud-download-alt", "fas fa-cloud-meatball", "fas fa-cloud-moon", "fas fa-cloud-moon-rain", "fas fa-cloud-rain", "fas fa-cloud-showers-heavy", "fas fa-cloud-sun", "fas fa-cloud-sun-rain", "fas fa-cloud-upload-alt", "fas fa-cocktail", "fas fa-code", "fas fa-code-branch", "fas fa-coffee", "fas fa-cog", "fas fa-cogs", "fas fa-coins", "fas fa-columns", "fas fa-comment", "fas fa-comment-alt", "fas fa-comment-dollar", "fas fa-comment-dots", "fas fa-comment-slash", "fas fa-comments", "fas fa-comments-dollar", "fas fa-compact-disc", "fas fa-compass", "fas fa-compress", "fas fa-compress-arrows-alt", "fas fa-concierge-bell", "fas fa-cookie", "fas fa-cookie-bite", "fas fa-copy", "fas fa-copyright", "fas fa-couch", "fas fa-credit-card", "fas fa-crop", "fas fa-crop-alt", "fas fa-cross", "fas fa-crosshairs", "fas fa-crow", "fas fa-crown", "fas fa-cube", "fas fa-cubes", "fas fa-cut", "fas fa-database", "fas fa-deaf", "fas fa-democrat", "fas fa-desktop", "fas fa-dharmachakra", "fas fa-diagnoses", "fas fa-dice", "fas fa-dice-d20", "fas fa-dice-d6", "fas fa-dice-five", "fas fa-dice-four", "fas fa-dice-one", "fas fa-dice-six", "fas fa-dice-three", "fas fa-dice-two", "fas fa-digital-tachograph", "fas fa-directions", "fas fa-divide", "fas fa-dizzy", "fas fa-dna", "fas fa-dog", "fas fa-dollar-sign", "fas fa-dolly", "fas fa-dolly-flatbed", "fas fa-donate", "fas fa-door-closed", "fas fa-door-open", "fas fa-dot-circle", "fas fa-dove", "fas fa-download", "fas fa-drafting-compass", "fas fa-dragon", "fas fa-draw-polygon", "fas fa-drum", "fas fa-drum-steelpan", "fas fa-drumstick-bite", "fas fa-dumbbell", "fas fa-dumpster", "fas fa-dumpster-fire", "fas fa-dungeon", "fas fa-edit", "fas fa-eject", "fas fa-ellipsis-h", "fas fa-ellipsis-v", "fas fa-envelope", "fas fa-envelope-open", "fas fa-envelope-open-text", "fas fa-envelope-square", "fas fa-equals", "fas fa-eraser", "fas fa-ethernet", "fas fa-euro-sign", "fas fa-exchange-alt", "fas fa-exclamation", "fas fa-exclamation-circle", "fas fa-exclamation-triangle", "fas fa-expand", "fas fa-expand-arrows-alt", "fas fa-external-link-alt", "fas fa-external-link-square-alt", "fas fa-eye", "fas fa-eye-dropper", "fas fa-eye-slash", "fas fa-fast-backward", "fas fa-fast-forward", "fas fa-fax", "fas fa-feather", "fas fa-feather-alt", "fas fa-female", "fas fa-fighter-jet", "fas fa-file", "fas fa-file-alt", "fas fa-file-archive", "fas fa-file-audio", "fas fa-file-code", "fas fa-file-contract", "fas fa-file-csv", "fas fa-file-download", "fas fa-file-excel", "fas fa-file-export", "fas fa-file-image", "fas fa-file-import", "fas fa-file-invoice", "fas fa-file-invoice-dollar", "fas fa-file-medical", "fas fa-file-medical-alt", "fas fa-file-pdf", "fas fa-file-powerpoint", "fas fa-file-prescription", "fas fa-file-signature", "fas fa-file-upload", "fas fa-file-video", "fas fa-file-word", "fas fa-fill", "fas fa-fill-drip", "fas fa-film", "fas fa-filter", "fas fa-fingerprint", "fas fa-fire", "fas fa-fire-alt", "fas fa-fire-extinguisher", "fas fa-first-aid", "fas fa-fish", "fas fa-fist-raised", "fas fa-flag", "fas fa-flag-checkered", "fas fa-flag-usa", "fas fa-flask", "fas fa-flushed", "fas fa-folder", "fas fa-folder-minus", "fas fa-folder-open", "fas fa-folder-plus", "fas fa-font", "fas fa-football-ball", "fas fa-forward", "fas fa-frog", "fas fa-frown", "fas fa-frown-open", "fas fa-funnel-dollar", "fas fa-futbol", "fas fa-gamepad", "fas fa-gas-pump", "fas fa-gavel", "fas fa-gem", "fas fa-genderless", "fas fa-ghost", "fas fa-gift", "fas fa-gifts", "fas fa-glass-cheers", "fas fa-glass-martini", "fas fa-glass-martini-alt", "fas fa-glass-whiskey", "fas fa-glasses", "fas fa-globe", "fas fa-globe-africa", "fas fa-globe-americas", "fas fa-globe-asia", "fas fa-globe-europe", "fas fa-golf-ball", "fas fa-gopuram", "fas fa-graduation-cap", "fas fa-greater-than", "fas fa-greater-than-equal", "fas fa-grimace", "fas fa-grin", "fas fa-grin-alt", "fas fa-grin-beam", "fas fa-grin-beam-sweat", "fas fa-grin-hearts", "fas fa-grin-squint", "fas fa-grin-squint-tears", "fas fa-grin-stars", "fas fa-grin-tears", "fas fa-grin-tongue", "fas fa-grin-tongue-squint", "fas fa-grin-tongue-wink", "fas fa-grin-wink", "fas fa-grip-horizontal", "fas fa-grip-lines", "fas fa-grip-lines-vertical", "fas fa-grip-vertical", "fas fa-guitar", "fas fa-h-square", "fas fa-hammer", "fas fa-hamsa", "fas fa-hand-holding", "fas fa-hand-holding-heart", "fas fa-hand-holding-usd", "fas fa-hand-lizard", "fas fa-hand-paper", "fas fa-hand-peace", "fas fa-hand-point-down", "fas fa-hand-point-left", "fas fa-hand-point-right", "fas fa-hand-point-up", "fas fa-hand-pointer", "fas fa-hand-rock", "fas fa-hand-scissors", "fas fa-hand-spock", "fas fa-hands", "fas fa-hands-helping", "fas fa-handshake", "fas fa-hanukiah", "fas fa-hashtag", "fas fa-hat-wizard", "fas fa-haykal", "fas fa-hdd", "fas fa-heading", "fas fa-headphones", "fas fa-headphones-alt", "fas fa-headset", "fas fa-heart", "fas fa-heart-broken", "fas fa-heartbeat", "fas fa-helicopter", "fas fa-highlighter", "fas fa-hiking", "fas fa-hippo", "fas fa-history", "fas fa-hockey-puck", "fas fa-holly-berry", "fas fa-home", "fas fa-horse", "fas fa-horse-head", "fas fa-hospital", "fas fa-hospital-alt", "fas fa-hospital-symbol", "fas fa-hot-tub", "fas fa-hotel", "fas fa-hourglass", "fas fa-hourglass-end", "fas fa-hourglass-half", "fas fa-hourglass-start", "fas fa-house-damage", "fas fa-hryvnia", "fas fa-i-cursor", "fas fa-icicles", "fas fa-id-badge", "fas fa-id-card", "fas fa-id-card-alt", "fas fa-igloo", "fas fa-image", "fas fa-images", "fas fa-inbox", "fas fa-indent", "fas fa-industry", "fas fa-infinity", "fas fa-info", "fas fa-info-circle", "fas fa-italic", "fas fa-jedi", "fas fa-joint", "fas fa-journal-whills", "fas fa-kaaba", "fas fa-key", "fas fa-keyboard", "fas fa-khanda", "fas fa-kiss", "fas fa-kiss-beam", "fas fa-kiss-wink-heart", "fas fa-kiwi-bird", "fas fa-landmark", "fas fa-language", "fas fa-laptop", "fas fa-laptop-code", "fas fa-laugh", "fas fa-laugh-beam", "fas fa-laugh-squint", "fas fa-laugh-wink", "fas fa-layer-group", "fas fa-leaf", "fas fa-lemon", "fas fa-less-than", "fas fa-less-than-equal", "fas fa-level-down-alt", "fas fa-level-up-alt", "fas fa-life-ring", "fas fa-lightbulb", "fas fa-link", "fas fa-lira-sign", "fas fa-list", "fas fa-list-alt", "fas fa-list-ol", "fas fa-list-ul", "fas fa-location-arrow", "fas fa-lock", "fas fa-lock-open", "fas fa-long-arrow-alt-down", "fas fa-long-arrow-alt-left", "fas fa-long-arrow-alt-right", "fas fa-long-arrow-alt-up", "fas fa-low-vision", "fas fa-luggage-cart", "fas fa-magic", "fas fa-magnet", "fas fa-mail-bulk", "fas fa-male", "fas fa-map", "fas fa-map-marked", "fas fa-map-marked-alt", "fas fa-map-marker", "fas fa-map-marker-alt", "fas fa-map-pin", "fas fa-map-signs", "fas fa-marker", "fas fa-mars", "fas fa-mars-double", "fas fa-mars-stroke", "fas fa-mars-stroke-h", "fas fa-mars-stroke-v", "fas fa-mask", "fas fa-medal", "fas fa-medkit", "fas fa-meh", "fas fa-meh-blank", "fas fa-meh-rolling-eyes", "fas fa-memory", "fas fa-menorah", "fas fa-mercury", "fas fa-meteor", "fas fa-microchip", "fas fa-microphone", "fas fa-microphone-alt", "fas fa-microphone-alt-slash", "fas fa-microphone-slash", "fas fa-microscope", "fas fa-minus", "fas fa-minus-circle", "fas fa-minus-square", "fas fa-mitten", "fas fa-mobile", "fas fa-mobile-alt", "fas fa-money-bill", "fas fa-money-bill-alt", "fas fa-money-bill-wave", "fas fa-money-bill-wave-alt", "fas fa-money-check", "fas fa-money-check-alt", "fas fa-monument", "fas fa-moon", "fas fa-mortar-pestle", "fas fa-mosque", "fas fa-motorcycle", "fas fa-mountain", "fas fa-mouse-pointer", "fas fa-mug-hot", "fas fa-music", "fas fa-network-wired", "fas fa-neuter", "fas fa-newspaper", "fas fa-not-equal", "fas fa-notes-medical", "fas fa-object-group", "fas fa-object-ungroup", "fas fa-oil-can", "fas fa-om", "fas fa-otter", "fas fa-outdent", "fas fa-paint-brush", "fas fa-paint-roller", "fas fa-palette", "fas fa-pallet", "fas fa-paper-plane", "fas fa-paperclip", "fas fa-parachute-box", "fas fa-paragraph", "fas fa-parking", "fas fa-passport", "fas fa-pastafarianism", "fas fa-paste", "fas fa-pause", "fas fa-pause-circle", "fas fa-paw", "fas fa-peace", "fas fa-pen", "fas fa-pen-alt", "fas fa-pen-fancy", "fas fa-pen-nib", "fas fa-pen-square", "fas fa-pencil-alt", "fas fa-pencil-ruler", "fas fa-people-carry", "fas fa-percent", "fas fa-percentage", "fas fa-person-booth", "fas fa-phone", "fas fa-phone-slash", "fas fa-phone-square", "fas fa-phone-volume", "fas fa-piggy-bank", "fas fa-pills", "fas fa-place-of-worship", "fas fa-plane", "fas fa-plane-arrival", "fas fa-plane-departure", "fas fa-play", "fas fa-play-circle", "fas fa-plug", "fas fa-plus", "fas fa-plus-circle", "fas fa-plus-square", "fas fa-podcast", "fas fa-poll", "fas fa-poll-h", "fas fa-poo", "fas fa-poo-storm", "fas fa-poop", "fas fa-portrait", "fas fa-pound-sign", "fas fa-power-off", "fas fa-pray", "fas fa-praying-hands", "fas fa-prescription", "fas fa-prescription-bottle", "fas fa-prescription-bottle-alt", "fas fa-print", "fas fa-procedures", "fas fa-project-diagram", "fas fa-puzzle-piece", "fas fa-qrcode", "fas fa-question", "fas fa-question-circle", "fas fa-quidditch", "fas fa-quote-left", "fas fa-quote-right", "fas fa-quran", "fas fa-radiation", "fas fa-radiation-alt", "fas fa-rainbow", "fas fa-random", "fas fa-receipt", "fas fa-recycle", "fas fa-redo", "fas fa-redo-alt", "fas fa-registered", "fas fa-reply", "fas fa-reply-all", "fas fa-republican", "fas fa-restroom", "fas fa-retweet", "fas fa-ribbon", "fas fa-ring", "fas fa-road", "fas fa-robot", "fas fa-rocket", "fas fa-route", "fas fa-rss", "fas fa-rss-square", "fas fa-ruble-sign", "fas fa-ruler", "fas fa-ruler-combined", "fas fa-ruler-horizontal", "fas fa-ruler-vertical", "fas fa-running", "fas fa-rupee-sign", "fas fa-sad-cry", "fas fa-sad-tear", "fas fa-satellite", "fas fa-satellite-dish", "fas fa-save", "fas fa-school", "fas fa-screwdriver", "fas fa-scroll", "fas fa-sd-card", "fas fa-search", "fas fa-search-dollar", "fas fa-search-location", "fas fa-search-minus", "fas fa-search-plus", "fas fa-seedling", "fas fa-server", "fas fa-shapes", "fas fa-share", "fas fa-share-alt", "fas fa-share-alt-square", "fas fa-share-square", "fas fa-shekel-sign", "fas fa-shield-alt", "fas fa-ship", "fas fa-shipping-fast", "fas fa-shoe-prints", "fas fa-shopping-bag", "fas fa-shopping-basket", "fas fa-shopping-cart", "fas fa-shower", "fas fa-shuttle-van", "fas fa-sign", "fas fa-sign-in-alt", "fas fa-sign-language", "fas fa-sign-out-alt", "fas fa-signal", "fas fa-signature", "fas fa-sim-card", "fas fa-sitemap", "fas fa-skating", "fas fa-skiing", "fas fa-skiing-nordic", "fas fa-skull", "fas fa-skull-crossbones", "fas fa-slash", "fas fa-sleigh", "fas fa-sliders-h", "fas fa-smile", "fas fa-smile-beam", "fas fa-smile-wink", "fas fa-smog", "fas fa-smoking", "fas fa-smoking-ban", "fas fa-sms", "fas fa-snowboarding", "fas fa-snowflake", "fas fa-snowman", "fas fa-snowplow", "fas fa-socks", "fas fa-solar-panel", "fas fa-sort", "fas fa-sort-alpha-down", "fas fa-sort-alpha-up", "fas fa-sort-amount-down", "fas fa-sort-amount-up", "fas fa-sort-down", "fas fa-sort-numeric-down", "fas fa-sort-numeric-up", "fas fa-sort-up", "fas fa-spa", "fas fa-space-shuttle", "fas fa-spider", "fas fa-spinner", "fas fa-splotch", "fas fa-spray-can", "fas fa-square", "fas fa-square-full", "fas fa-square-root-alt", "fas fa-stamp", "fas fa-star", "fas fa-star-and-crescent", "fas fa-star-half", "fas fa-star-half-alt", "fas fa-star-of-david", "fas fa-star-of-life", "fas fa-step-backward", "fas fa-step-forward", "fas fa-stethoscope", "fas fa-sticky-note", "fas fa-stop", "fas fa-stop-circle", "fas fa-stopwatch", "fas fa-store", "fas fa-store-alt", "fas fa-stream", "fas fa-street-view", "fas fa-strikethrough", "fas fa-stroopwafel", "fas fa-subscript", "fas fa-subway", "fas fa-suitcase", "fas fa-suitcase-rolling", "fas fa-sun", "fas fa-superscript", "fas fa-surprise", "fas fa-swatchbook", "fas fa-swimmer", "fas fa-swimming-pool", "fas fa-synagogue", "fas fa-sync", "fas fa-sync-alt", "fas fa-syringe", "fas fa-table", "fas fa-table-tennis", "fas fa-tablet", "fas fa-tablet-alt", "fas fa-tablets", "fas fa-tachometer-alt", "fas fa-tag", "fas fa-tags", "fas fa-tape", "fas fa-tasks", "fas fa-taxi", "fas fa-teeth", "fas fa-teeth-open", "fas fa-temperature-high", "fas fa-temperature-low", "fas fa-tenge", "fas fa-terminal", "fas fa-text-height", "fas fa-text-width", "fas fa-th", "fas fa-th-large", "fas fa-th-list", "fas fa-theater-masks", "fas fa-thermometer", "fas fa-thermometer-empty", "fas fa-thermometer-full", "fas fa-thermometer-half", "fas fa-thermometer-quarter", "fas fa-thermometer-three-quarters", "fas fa-thumbs-down", "fas fa-thumbs-up", "fas fa-thumbtack", "fas fa-ticket-alt", "fas fa-times", "fas fa-times-circle", "fas fa-tint", "fas fa-tint-slash", "fas fa-tired", "fas fa-toggle-off", "fas fa-toggle-on", "fas fa-toilet", "fas fa-toilet-paper", "fas fa-toolbox", "fas fa-tools", "fas fa-tooth", "fas fa-torah", "fas fa-torii-gate", "fas fa-tractor", "fas fa-trademark", "fas fa-traffic-light", "fas fa-train", "fas fa-tram", "fas fa-transgender", "fas fa-transgender-alt", "fas fa-trash", "fas fa-trash-alt", "fas fa-tree", "fas fa-trophy", "fas fa-truck", "fas fa-truck-loading", "fas fa-truck-monster", "fas fa-truck-moving", "fas fa-truck-pickup", "fas fa-tshirt", "fas fa-tty", "fas fa-tv", "fas fa-umbrella", "fas fa-umbrella-beach", "fas fa-underline", "fas fa-undo", "fas fa-undo-alt", "fas fa-universal-access", "fas fa-university", "fas fa-unlink", "fas fa-unlock", "fas fa-unlock-alt", "fas fa-upload", "fas fa-user", "fas fa-user-alt", "fas fa-user-alt-slash", "fas fa-user-astronaut", "fas fa-user-check", "fas fa-user-circle", "fas fa-user-clock", "fas fa-user-cog", "fas fa-user-edit", "fas fa-user-friends", "fas fa-user-graduate", "fas fa-user-injured", "fas fa-user-lock", "fas fa-user-md", "fas fa-user-minus", "fas fa-user-ninja", "fas fa-user-plus", "fas fa-user-secret", "fas fa-user-shield", "fas fa-user-slash", "fas fa-user-tag", "fas fa-user-tie", "fas fa-user-times", "fas fa-users", "fas fa-users-cog", "fas fa-utensil-spoon", "fas fa-utensils", "fas fa-vector-square", "fas fa-venus", "fas fa-venus-double", "fas fa-venus-mars", "fas fa-vial", "fas fa-vials", "fas fa-video", "fas fa-video-slash", "fas fa-vihara", "fas fa-volleyball-ball", "fas fa-volume-down", "fas fa-volume-mute", "fas fa-volume-off", "fas fa-volume-up", "fas fa-vote-yea", "fas fa-vr-cardboard", "fas fa-walking", "fas fa-wallet", "fas fa-warehouse", "fas fa-water", "fas fa-weight", "fas fa-weight-hanging", "fas fa-wheelchair", "fas fa-wifi", "fas fa-wind", "fas fa-window-close", "fas fa-window-maximize", "fas fa-window-minimize", "fas fa-window-restore", "fas fa-wine-bottle", "fas fa-wine-glass", "fas fa-wine-glass-alt", "fas fa-won-sign", "fas fa-wrench", "fas fa-x-ray", "fas fa-yen-sign", "fas fa-yin-yang", "far fa-address-book", "far fa-address-card", "far fa-angry", "far fa-arrow-alt-circle-down", "far fa-arrow-alt-circle-left", "far fa-arrow-alt-circle-right", "far fa-arrow-alt-circle-up", "far fa-bell", "far fa-bell-slash", "far fa-bookmark", "far fa-building", "far fa-calendar", "far fa-calendar-alt", "far fa-calendar-check", "far fa-calendar-minus", "far fa-calendar-plus", "far fa-calendar-times", "far fa-caret-square-down", "far fa-caret-square-left", "far fa-caret-square-right", "far fa-caret-square-up", "far fa-chart-bar", "far fa-check-circle", "far fa-check-square", "far fa-circle", "far fa-clipboard", "far fa-clock", "far fa-clone", "far fa-closed-captioning", "far fa-comment", "far fa-comment-alt", "far fa-comment-dots", "far fa-comments", "far fa-compass", "far fa-copy", "far fa-copyright", "far fa-credit-card", "far fa-dizzy", "far fa-dot-circle", "far fa-edit", "far fa-envelope", "far fa-envelope-open", "far fa-eye", "far fa-eye-slash", "far fa-file", "far fa-file-alt", "far fa-file-archive", "far fa-file-audio", "far fa-file-code", "far fa-file-excel", "far fa-file-image", "far fa-file-pdf", "far fa-file-powerpoint", "far fa-file-video", "far fa-file-word", "far fa-flag", "far fa-flushed", "far fa-folder", "far fa-folder-open", "far fa-frown", "far fa-frown-open", "far fa-futbol", "far fa-gem", "far fa-grimace", "far fa-grin", "far fa-grin-alt", "far fa-grin-beam", "far fa-grin-beam-sweat", "far fa-grin-hearts", "far fa-grin-squint", "far fa-grin-squint-tears", "far fa-grin-stars", "far fa-grin-tears", "far fa-grin-tongue", "far fa-grin-tongue-squint", "far fa-grin-tongue-wink", "far fa-grin-wink", "far fa-hand-lizard", "far fa-hand-paper", "far fa-hand-peace", "far fa-hand-point-down", "far fa-hand-point-left", "far fa-hand-point-right", "far fa-hand-point-up", "far fa-hand-pointer", "far fa-hand-rock", "far fa-hand-scissors", "far fa-hand-spock", "far fa-handshake", "far fa-hdd", "far fa-heart", "far fa-hospital", "far fa-hourglass", "far fa-id-badge", "far fa-id-card", "far fa-image", "far fa-images", "far fa-keyboard", "far fa-kiss", "far fa-kiss-beam", "far fa-kiss-wink-heart", "far fa-laugh", "far fa-laugh-beam", "far fa-laugh-squint", "far fa-laugh-wink", "far fa-lemon", "far fa-life-ring", "far fa-lightbulb", "far fa-list-alt", "far fa-map", "far fa-meh", "far fa-meh-blank", "far fa-meh-rolling-eyes", "far fa-minus-square", "far fa-money-bill-alt", "far fa-moon", "far fa-newspaper", "far fa-object-group", "far fa-object-ungroup", "far fa-paper-plane", "far fa-pause-circle", "far fa-play-circle", "far fa-plus-square", "far fa-question-circle", "far fa-registered", "far fa-sad-cry", "far fa-sad-tear", "far fa-save", "far fa-share-square", "far fa-smile", "far fa-smile-beam", "far fa-smile-wink", "far fa-snowflake", "far fa-square", "far fa-star", "far fa-star-half", "far fa-sticky-note", "far fa-stop-circle", "far fa-sun", "far fa-surprise", "far fa-thumbs-down", "far fa-thumbs-up", "far fa-times-circle", "far fa-tired", "far fa-trash-alt", "far fa-user", "far fa-user-circle", "far fa-window-close", "far fa-window-maximize", "far fa-window-minimize", "far fa-window-restore", "fab fa-500px", "fab fa-accessible-icon", "fab fa-accusoft", "fab fa-acquisitions-incorporated", "fab fa-adn", "fab fa-adobe", "fab fa-adversal", "fab fa-affiliatetheme", "fab fa-algolia", "fab fa-alipay", "fab fa-amazon", "fab fa-amazon-pay", "fab fa-amilia", "fab fa-android", "fab fa-angellist", "fab fa-angrycreative", "fab fa-angular", "fab fa-app-store", "fab fa-app-store-ios", "fab fa-apper", "fab fa-apple", "fab fa-apple-pay", "fab fa-artstation", "fab fa-asymmetrik", "fab fa-atlassian", "fab fa-audible", "fab fa-autoprefixer", "fab fa-avianex", "fab fa-aviato", "fab fa-aws", "fab fa-bandcamp", "fab fa-behance", "fab fa-behance-square", "fab fa-bimobject", "fab fa-bitbucket", "fab fa-bitcoin", "fab fa-bity", "fab fa-black-tie", "fab fa-blackberry", "fab fa-blogger", "fab fa-blogger-b", "fab fa-bluetooth", "fab fa-bluetooth-b", "fab fa-btc", "fab fa-buromobelexperte", "fab fa-buysellads", "fab fa-canadian-maple-leaf", "fab fa-cc-amazon-pay", "fab fa-cc-amex", "fab fa-cc-apple-pay", "fab fa-cc-diners-club", "fab fa-cc-discover", "fab fa-cc-jcb", "fab fa-cc-mastercard", "fab fa-cc-paypal", "fab fa-cc-stripe", "fab fa-cc-visa", "fab fa-centercode", "fab fa-centos", "fab fa-chrome", "fab fa-cloudscale", "fab fa-cloudsmith", "fab fa-cloudversify", "fab fa-codepen", "fab fa-codiepie", "fab fa-confluence", "fab fa-connectdevelop", "fab fa-contao", "fab fa-cpanel", "fab fa-creative-commons", "fab fa-creative-commons-by", "fab fa-creative-commons-nc", "fab fa-creative-commons-nc-eu", "fab fa-creative-commons-nc-jp", "fab fa-creative-commons-nd", "fab fa-creative-commons-pd", "fab fa-creative-commons-pd-alt", "fab fa-creative-commons-remix", "fab fa-creative-commons-sa", "fab fa-creative-commons-sampling", "fab fa-creative-commons-sampling-plus", "fab fa-creative-commons-share", "fab fa-creative-commons-zero", "fab fa-critical-role", "fab fa-css3", "fab fa-css3-alt", "fab fa-cuttlefish", "fab fa-d-and-d", "fab fa-d-and-d-beyond", "fab fa-dashcube", "fab fa-delicious", "fab fa-deploydog", "fab fa-deskpro", "fab fa-dev", "fab fa-deviantart", "fab fa-dhl", "fab fa-diaspora", "fab fa-digg", "fab fa-digital-ocean", "fab fa-discord", "fab fa-discourse", "fab fa-dochub", "fab fa-docker", "fab fa-draft2digital", "fab fa-dribbble", "fab fa-dribbble-square", "fab fa-dropbox", "fab fa-drupal", "fab fa-dyalog", "fab fa-earlybirds", "fab fa-ebay", "fab fa-edge", "fab fa-elementor", "fab fa-ello", "fab fa-ember", "fab fa-empire", "fab fa-envira", "fab fa-erlang", "fab fa-ethereum", "fab fa-etsy", "fab fa-expeditedssl", "fab fa-facebook", "fab fa-facebook-f", "fab fa-facebook-messenger", "fab fa-facebook-square", "fab fa-fantasy-flight-games", "fab fa-fedex", "fab fa-fedora", "fab fa-figma", "fab fa-firefox", "fab fa-first-order", "fab fa-first-order-alt", "fab fa-firstdraft", "fab fa-flickr", "fab fa-flipboard", "fab fa-fly", "fab fa-font-awesome", "fab fa-font-awesome-alt", "fab fa-font-awesome-flag", "fab fa-fonticons", "fab fa-fonticons-fi", "fab fa-fort-awesome", "fab fa-fort-awesome-alt", "fab fa-forumbee", "fab fa-foursquare", "fab fa-free-code-camp", "fab fa-freebsd", "fab fa-fulcrum", "fab fa-galactic-republic", "fab fa-galactic-senate", "fab fa-get-pocket", "fab fa-gg", "fab fa-gg-circle", "fab fa-git", "fab fa-git-square", "fab fa-github", "fab fa-github-alt", "fab fa-github-square", "fab fa-gitkraken", "fab fa-gitlab", "fab fa-gitter", "fab fa-glide", "fab fa-glide-g", "fab fa-gofore", "fab fa-goodreads", "fab fa-goodreads-g", "fab fa-google", "fab fa-google-drive", "fab fa-google-play", "fab fa-google-plus", "fab fa-google-plus-g", "fab fa-google-plus-square", "fab fa-google-wallet", "fab fa-gratipay", "fab fa-grav", "fab fa-gripfire", "fab fa-grunt", "fab fa-gulp", "fab fa-hacker-news", "fab fa-hacker-news-square", "fab fa-hackerrank", "fab fa-hips", "fab fa-hire-a-helper", "fab fa-hooli", "fab fa-hornbill", "fab fa-hotjar", "fab fa-houzz", "fab fa-html5", "fab fa-hubspot", "fab fa-imdb", "fab fa-instagram", "fab fa-intercom", "fab fa-internet-explorer", "fab fa-invision", "fab fa-ioxhost", "fab fa-itunes", "fab fa-itunes-note", "fab fa-java", "fab fa-jedi-order", "fab fa-jenkins", "fab fa-jira", "fab fa-joget", "fab fa-joomla", "fab fa-js", "fab fa-js-square", "fab fa-jsfiddle", "fab fa-kaggle", "fab fa-keybase", "fab fa-keycdn", "fab fa-kickstarter", "fab fa-kickstarter-k", "fab fa-korvue", "fab fa-laravel", "fab fa-lastfm", "fab fa-lastfm-square", "fab fa-leanpub", "fab fa-less", "fab fa-line", "fab fa-linkedin", "fab fa-linkedin-in", "fab fa-linode", "fab fa-linux", "fab fa-lyft", "fab fa-magento", "fab fa-mailchimp", "fab fa-mandalorian", "fab fa-markdown", "fab fa-mastodon", "fab fa-maxcdn", "fab fa-medapps", "fab fa-medium", "fab fa-medium-m", "fab fa-medrt", "fab fa-meetup", "fab fa-megaport", "fab fa-mendeley", "fab fa-microsoft", "fab fa-mix", "fab fa-mixcloud", "fab fa-mizuni", "fab fa-modx", "fab fa-monero", "fab fa-napster", "fab fa-neos", "fab fa-nimblr", "fab fa-nintendo-switch", "fab fa-node", "fab fa-node-js", "fab fa-npm", "fab fa-ns8", "fab fa-nutritionix", "fab fa-odnoklassniki", "fab fa-odnoklassniki-square", "fab fa-old-republic", "fab fa-opencart", "fab fa-openid", "fab fa-opera", "fab fa-optin-monster", "fab fa-osi", "fab fa-page4", "fab fa-pagelines", "fab fa-palfed", "fab fa-patreon", "fab fa-paypal", "fab fa-penny-arcade", "fab fa-periscope", "fab fa-phabricator", "fab fa-phoenix-framework", "fab fa-phoenix-squadron", "fab fa-php", "fab fa-pied-piper", "fab fa-pied-piper-alt", "fab fa-pied-piper-hat", "fab fa-pied-piper-pp", "fab fa-pinterest", "fab fa-pinterest-p", "fab fa-pinterest-square", "fab fa-playstation", "fab fa-product-hunt", "fab fa-pushed", "fab fa-python", "fab fa-qq", "fab fa-quinscape", "fab fa-quora", "fab fa-r-project", "fab fa-raspberry-pi", "fab fa-ravelry", "fab fa-react", "fab fa-reacteurope", "fab fa-readme", "fab fa-rebel", "fab fa-red-river", "fab fa-reddit", "fab fa-reddit-alien", "fab fa-reddit-square", "fab fa-redhat", "fab fa-renren", "fab fa-replyd", "fab fa-researchgate", "fab fa-resolving", "fab fa-rev", "fab fa-rocketchat", "fab fa-rockrms", "fab fa-safari", "fab fa-sass", "fab fa-schlix", "fab fa-scribd", "fab fa-searchengin", "fab fa-sellcast", "fab fa-sellsy", "fab fa-servicestack", "fab fa-shirtsinbulk", "fab fa-shopware", "fab fa-simplybuilt", "fab fa-sistrix", "fab fa-sith", "fab fa-sketch", "fab fa-skyatlas", "fab fa-skype", "fab fa-slack", "fab fa-slack-hash", "fab fa-slideshare", "fab fa-snapchat", "fab fa-snapchat-ghost", "fab fa-snapchat-square", "fab fa-soundcloud", "fab fa-sourcetree", "fab fa-speakap", "fab fa-spotify", "fab fa-squarespace", "fab fa-stack-exchange", "fab fa-stack-overflow", "fab fa-staylinked", "fab fa-steam", "fab fa-steam-square", "fab fa-steam-symbol", "fab fa-sticker-mule", "fab fa-strava", "fab fa-stripe", "fab fa-stripe-s", "fab fa-studiovinari", "fab fa-stumbleupon", "fab fa-stumbleupon-circle", "fab fa-superpowers", "fab fa-supple", "fab fa-suse", "fab fa-teamspeak", "fab fa-telegram", "fab fa-telegram-plane", "fab fa-tencent-weibo", "fab fa-the-red-yeti", "fab fa-themeco", "fab fa-themeisle", "fab fa-think-peaks", "fab fa-trade-federation", "fab fa-trello", "fab fa-tripadvisor", "fab fa-tumblr", "fab fa-tumblr-square", "fab fa-twitch", "fab fa-twitter", "fab fa-twitter-square", "fab fa-typo3", "fab fa-uber", "fab fa-ubuntu", "fab fa-uikit", "fab fa-uniregistry", "fab fa-untappd", "fab fa-ups", "fab fa-usb", "fab fa-usps", "fab fa-ussunnah", "fab fa-vaadin", "fab fa-viacoin", "fab fa-viadeo", "fab fa-viadeo-square", "fab fa-viber", "fab fa-vimeo", "fab fa-vimeo-square", "fab fa-vimeo-v", "fab fa-vine", "fab fa-vk", "fab fa-vnv", "fab fa-vuejs", "fab fa-weebly", "fab fa-weibo", "fab fa-weixin", "fab fa-whatsapp", "fab fa-whatsapp-square", "fab fa-whmcs", "fab fa-wikipedia-w", "fab fa-windows", "fab fa-wix", "fab fa-wizards-of-the-coast", "fab fa-wolf-pack-battalion", "fab fa-wordpress", "fab fa-wordpress-simple", "fab fa-wpbeginner", "fab fa-wpexplorer", "fab fa-wpforms", "fab fa-wpressr", "fab fa-xbox", "fab fa-xing", "fab fa-xing-square", "fab fa-y-combinator", "fab fa-yahoo", "fab fa-yandex", "fab fa-yandex-international", "fab fa-yarn", "fab fa-yelp", "fab fa-yoast", "fab fa-youtube", "fab fa-youtube-square", "fab fa-zhihu"];
/* harmony default export */ __webpack_exports__["default"] = (icons_);

/***/ }),

/***/ "./src/blocks/icon-block/editor.scss":
/*!*******************************************!*\
  !*** ./src/blocks/icon-block/editor.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/icon-block/index.js":
/*!****************************************!*\
  !*** ./src/blocks/icon-block/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/icon-block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-assets/icons */ "./src/blocks/block-assets/icons.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _block_assets_font_family__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../block-assets/font-family */ "./src/blocks/block-assets/font-family.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("zita-blocks/icon-block", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Icon", "zita-blocks"),
  icon: "star-empty",
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Use a slide title for your main title for the slide.", "zita-blocks"),
  category: "zita-category",
  keywords: ["icon", "iconbox"],
  attributes: {
    iconClass: {
      type: "string",
      default: "fab fa-wordpress-simple"
    },
    iconColor: {
      type: "string",
      default: "#0693e3"
    },
    iconBgColor: {
      type: "string",
      default: "#EEF6F9"
    },
    titleColor: {
      type: "string",
      default: "#0693e3"
    },
    iconFontsize: {
      type: "number",
      default: 55
    },
    titleFontsize: {
      type: "number",
      default: 24
    },
    titleTxt: {
      type: "string",
      default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Icon Title", "zita-blocks")
    },
    titleArrenge: {
      type: "string",
      default: "column"
    },
    itemAlign: {
      type: "text",
      default: "center"
    },
    titleMarginTop: {
      type: "number",
      defalut: 18
    },
    titleMarginRight: {
      type: "number"
    },
    titleMarginBottom: {
      type: "number"
    },
    titleMarginLeft: {
      type: "number",
      default: 11
    },
    titleOnOff: {
      type: "boolean",
      default: true
    },
    iconPaddingTop: {
      type: "number",
      default: 16
    },
    iconPaddingRight: {
      type: "number",
      default: 20
    },
    titleTag: {
      type: "string",
      default: "p"
    },
    titleFF: {
      type: "string",
      default: "Ubuntu Mono"
    },
    iconBorder: {
      type: "boolean",
      default: false
    },
    iconBorderWidth: {
      type: "number",
      default: 2
    },
    iconBorderRadius: {
      type: "number",
      default: 50
    },
    iconBorderColor: {
      type: "string",
      default: "#ffa600"
    },
    iconSpace: {
      type: "number",
      default: 79
    }
  },
  example: function example() {},
  // example: {
  // attributes: {
  //   backgroundType: "gradient",
  //   backgroundGradient:
  //     "linear-gradient(-225deg, rgb(255, 5, 124) 0%, rgb(141, 11, 147) 50%, rgb(50, 21, 117) 100%)",
  //   align: "center",
  //   quoteStyle: "quotes",
  //   paddingTop: 30,
  //   paddingBottom: 30,
  //   blockquoteAlign: "center",
  //   textColor: "#FFFFFF",
  //   content: "An inspiring quote...",
  // },
  // },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var iconClass = attributes.iconClass,
        iconColor = attributes.iconColor,
        iconBgColor = attributes.iconBgColor,
        titleColor = attributes.titleColor,
        iconFontsize = attributes.iconFontsize,
        titleFF = attributes.titleFF,
        titleFontsize = attributes.titleFontsize,
        titleMarginTop = attributes.titleMarginTop,
        titleMarginRight = attributes.titleMarginRight,
        titleMarginBottom = attributes.titleMarginBottom,
        titleMarginLeft = attributes.titleMarginLeft,
        titleTxt = attributes.titleTxt,
        titleArrenge = attributes.titleArrenge,
        itemAlign = attributes.itemAlign,
        titleOnOff = attributes.titleOnOff,
        iconPaddingTop = attributes.iconPaddingTop,
        iconPaddingRight = attributes.iconPaddingRight,
        titleTag = attributes.titleTag,
        iconBorder = attributes.iconBorder,
        iconBorderWidth = attributes.iconBorderWidth,
        iconBorderRadius = attributes.iconBorderRadius,
        iconBorderColor = attributes.iconBorderColor,
        iconSpace = attributes.iconSpace;
    var borderStyle = iconBorder ? {
      borderWidth: iconBorderWidth + "px",
      borderStyle: "solid",
      borderColor: iconBorderColor,
      borderRadius: iconBorderRadius + "%",
      width: iconSpace + "px",
      height: iconSpace + "px"
    } : null;

    var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
        _useState2 = _slicedToArray(_useState, 2),
        activeIconContainer = _useState2[0],
        activeIconContainerSet = _useState2[1];

    var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(_block_assets_icons__WEBPACK_IMPORTED_MODULE_1__["default"]),
        _useState4 = _slicedToArray(_useState3, 2),
        iconList = _useState4[0],
        setIconList = _useState4[1];

    var iconReff = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
      var handler = function handler(event) {
        if (!iconReff.current.contains(event.target)) {
          activeIconContainerSet(false);
        }
      };

      if (activeIconContainer) document.addEventListener("mousedown", handler);
      return function () {
        document.removeEventListener("mousedown", handler);
      };
    });

    var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
        _useState6 = _slicedToArray(_useState5, 2),
        activeFamilyContainer2 = _useState6[0],
        activeFamilyDrop2 = _useState6[1];

    var familyRef2 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
      var handler = function handler(event) {
        if (!familyRef2.current.contains(event.target)) {
          activeFamilyDrop2(false);
        }
      };

      if (activeFamilyContainer2) document.addEventListener("mouseup", handler);
      return function () {
        document.removeEventListener("mouseup", handler);
      };
    });
    return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Icon Setting", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Choose Icon", "zita-blocks"))), wp.element.createElement("div", {
      ref: iconReff,
      className: "wpgt-radio-wrap ".concat(activeIconContainer ? "active" : "")
    }, wp.element.createElement("div", {
      className: "selected-icon",
      onClick: function onClick(e) {
        // let set__container = !activeIconContainer;
        activeIconContainerSet(true);
      }
    }, wp.element.createElement("i", {
      className: iconClass
    }), wp.element.createElement("div", {
      className: "search-container"
    }, wp.element.createElement("i", {
      className: "fas fa-search"
    }), wp.element.createElement("input", {
      type: "text",
      onChange: function onChange(e) {
        var value_ = e.target.value;

        if (value_ != "") {
          var newAr = _block_assets_icons__WEBPACK_IMPORTED_MODULE_1__["default"].filter(function (checkStr) {
            return checkStr.search(value_) != -1;
          });

          if (newAr.length) {
            setIconList(newAr);
          }
        } else {
          setIconList(_block_assets_icons__WEBPACK_IMPORTED_MODULE_1__["default"]);
        }
      }
    }))), wp.element.createElement("div", {
      className: "wpgt-radio-container",
      onChange: function onChange(e) {
        setAttributes({
          iconClass: e.target.value
        });
      }
    }, iconList.map(function (iconValue) {
      return wp.element.createElement("div", {
        className: "wpgt-radio-wrapper"
      }, wp.element.createElement("input", {
        id: "wpgt-Radio-" + iconValue,
        type: "radio",
        name: "wpgt-choose-icon",
        className: "radio-input",
        value: iconValue
      }), wp.element.createElement("label", {
        htmlFor: "wpgt-Radio-" + iconValue
      }, wp.element.createElement("i", {
        className: iconValue
      })));
    }))), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Icon Position", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      value: titleArrenge // e.g: value = [ 'a', 'c' ]
      ,
      onChange: function onChange(e) {
        setAttributes({
          titleArrenge: e,
          titleMarginTop: 0,
          titleMarginRight: 0,
          titleMarginBottom: 0,
          titleMarginLeft: 0
        });
      },
      options: [{
        value: null,
        label: "Select a User",
        disabled: true
      }, {
        value: "unset",
        label: "Left"
      }, {
        value: "row-reverse",
        label: "Right"
      }, {
        value: "column",
        label: "Top"
      }, {
        value: "column-reverse",
        label: "Bottom"
      }]
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Space Between Icon and Title", "zita-blocks"))), titleArrenge == "column" && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Top", "zita-blocks"),
      value: titleMarginTop,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          titleMarginTop: e
        });
      }
    }), titleArrenge == "row-reverse" && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Right", "zita-blocks"),
      value: titleMarginRight,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          titleMarginRight: e
        });
      }
    }), titleArrenge == "column-reverse" && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Bottom", "zita-blocks"),
      value: titleMarginBottom,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          titleMarginBottom: e
        });
      }
    }), titleArrenge == "unset" && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Left", "zita-blocks"),
      value: titleMarginLeft,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          titleMarginLeft: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Size", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      value: iconFontsize,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          iconFontsize: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
      label: iconBorder ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Disable", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Enable", "zita-blocks"),
      checked: iconBorder,
      onChange: function onChange(e) {
        return setAttributes({
          iconBorder: e
        });
      }
    }), iconBorder && wp.element.createElement("div", {
      className: "icon-border-setting"
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Width", "zita-blocks"),
      value: iconBorderWidth,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          iconBorderWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Radius", "zita-blocks"),
      value: iconBorderRadius,
      min: 0,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          iconBorderRadius: e
        });
      }
    }), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Color", "zita-blocks")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
      onChange: function onChange(color) {
        return setAttributes({
          iconBorderColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Icon Space", "zita-blocks"),
      value: iconSpace,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          iconSpace: e
        });
      }
    }))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Title Setting", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
      label: titleOnOff ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Hide", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Show", "zita-blocks"),
      checked: titleOnOff,
      onChange: function onChange(e) {
        return setAttributes({
          titleOnOff: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Choose Tag", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      value: titleTag // e.g: value = [ 'a', 'c' ]
      ,
      onChange: function onChange(e) {
        return setAttributes({
          titleTag: e
        });
      },
      options: [{
        value: null,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Choose Tag", "zita-blocks"),
        disabled: true
      }, {
        value: "h1",
        label: "h1"
      }, {
        value: "h2",
        label: "h2"
      }, {
        value: "h3",
        label: "h3"
      }, {
        value: "p",
        label: "p"
      }]
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Size", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      value: titleFontsize,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          titleFontsize: e
        });
      }
    }), wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Family", "zita-blocks"))), wp.element.createElement("div", {
      ref: familyRef2,
      className: "font-family-drop-down ".concat(activeFamilyContainer2 ? "active" : "")
    }, wp.element.createElement("div", {
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer2;
        activeFamilyDrop2(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: titleFF
      }
    }, titleFF ? titleFF : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Choose Family", "zita-blocks"))), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            titleFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    }))))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Color Setting", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Background Color", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ColorPicker"], {
      onChangeComplete: function onChangeComplete(colorBg) {
        var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");
        setAttributes({
          iconBgColor: color
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Icon Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
      onChange: function onChange(color) {
        return setAttributes({
          iconColor: color
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Title Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
      onChange: function onChange(e) {
        return setAttributes({
          titleColor: e
        });
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Container Setting", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Padding", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Top & Bottom", "zita-blocks"),
      value: iconPaddingTop,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          iconPaddingTop: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Left & Right", "zita-blocks"),
      value: iconPaddingRight,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          iconPaddingRight: e
        });
      }
    }))), wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["AlignmentToolbar"], {
      value: itemAlign,
      onChange: function onChange(e) {
        var side = e == "left" ? "left" : e == "right" ? "flex-end" : "center";
        setAttributes({
          itemAlign: side
        });
      }
    })), wp.element.createElement("div", {
      className: "themehunk-icon-block",
      style: {
        "justify-content": itemAlign
      }
    }, wp.element.createElement("div", {
      style: {
        "flex-direction": titleArrenge,
        backgroundColor: iconBgColor,
        paddingTop: iconPaddingTop + "px",
        paddingRight: iconPaddingRight + "px",
        paddingBottom: iconPaddingTop + "px",
        paddingLeft: iconPaddingRight + "px"
      }
    }, wp.element.createElement("div", {
      className: "icon-container",
      style: borderStyle
    }, wp.element.createElement("i", {
      style: {
        color: iconColor,
        fontSize: iconFontsize + "px"
      },
      className: iconClass
    })), titleOnOff && wp.element.createElement("div", {
      className: "text-container"
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      key: "editable",
      tagName: titleTag,
      placeholder: "Icon Title",
      value: titleTxt,
      onChange: function onChange(e) {
        return setAttributes({
          titleTxt: e
        });
      },
      style: {
        color: titleColor,
        fontSize: titleFontsize + "px",
        marginTop: titleMarginTop + "px",
        marginRight: titleMarginRight + "px",
        marginBottom: titleMarginBottom + "px",
        marginLeft: titleMarginLeft + "px",
        fontFamily: titleFF
      }
    })))))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var iconClass = attributes.iconClass,
        iconColor = attributes.iconColor,
        iconBgColor = attributes.iconBgColor,
        titleColor = attributes.titleColor,
        iconFontsize = attributes.iconFontsize,
        titleFontsize = attributes.titleFontsize,
        titleMarginTop = attributes.titleMarginTop,
        titleMarginRight = attributes.titleMarginRight,
        titleMarginBottom = attributes.titleMarginBottom,
        titleMarginLeft = attributes.titleMarginLeft,
        titleTxt = attributes.titleTxt,
        titleArrenge = attributes.titleArrenge,
        titleFF = attributes.titleFF,
        itemAlign = attributes.itemAlign,
        titleOnOff = attributes.titleOnOff,
        titleTag = attributes.titleTag,
        iconBorder = attributes.iconBorder,
        iconBorderWidth = attributes.iconBorderWidth,
        iconBorderRadius = attributes.iconBorderRadius,
        iconBorderColor = attributes.iconBorderColor,
        iconSpace = attributes.iconSpace,
        iconPaddingTop = attributes.iconPaddingTop,
        iconPaddingRight = attributes.iconPaddingRight;
    var borderStyle = iconBorder ? {
      borderWidth: iconBorderWidth + "px",
      borderStyle: "solid",
      borderColor: iconBorderColor,
      borderRadius: iconBorderRadius + "%",
      width: iconSpace + "px",
      height: iconSpace + "px"
    } : null; // console.log(borderStyle);

    return wp.element.createElement("div", {
      className: "themehunk-icon-block",
      style: {
        "justify-content": itemAlign
      }
    }, wp.element.createElement("div", {
      style: {
        "flex-direction": titleArrenge,
        backgroundColor: iconBgColor,
        paddingTop: iconPaddingTop + "px",
        paddingRight: iconPaddingRight + "px",
        paddingBottom: iconPaddingTop + "px",
        paddingLeft: iconPaddingRight + "px"
      }
    }, wp.element.createElement("div", {
      className: "icon-container",
      style: borderStyle
    }, wp.element.createElement("i", {
      style: {
        color: iconColor,
        fontSize: iconFontsize + "px"
      },
      className: iconClass
    })), titleOnOff && wp.element.createElement("div", {
      className: "text-container"
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: titleTag,
      value: titleTxt,
      style: {
        color: titleColor,
        fontSize: titleFontsize + "px",
        marginTop: titleMarginTop + "px",
        marginRight: titleMarginRight + "px",
        marginBottom: titleMarginBottom + "px",
        marginLeft: titleMarginLeft + "px",
        fontFamily: titleFF
      }
    }))));
  }
});

/***/ }),

/***/ "./src/blocks/pricing-table/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/pricing-table/editor.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/pricing-table/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/pricing-table/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parent */ "./src/blocks/pricing-table/parent.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/pricing-table/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_assets_font_family__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-assets/font-family */ "./src/blocks/block-assets/font-family.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var attrS = {
  headingTxt: {
    type: "string",
    default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Basic", "zita-blocks")
  },
  headingFontSize: {
    type: "number",
    default: 29
  },
  headingColor: {
    type: "string",
    default: "#ffffff"
  },
  headingFF: {
    type: "string"
  },
  headingDescription: {
    type: "string"
  },
  headerBackground: {
    type: "string",
    default: "#5f5f5f"
  },
  descriptionColor: {
    type: "string",
    default: "grey"
  },
  descriptionFontSize: {
    type: "number"
  },
  descriptionFF: {
    type: "string"
  },
  middleTxt: {
    type: "string",
    default: "<p>Email Marketing</p><p>Email Builder</p><p>Client Testing</p><p>2 User Free</p><p>Multiple Email Support</p>"
  },
  pointsColor: {
    type: "string",
    default: "white"
  },
  middleBgColor: {
    type: "string",
    default: "#2B2B2B"
  },
  pointsFontSize: {
    type: "number",
    default: 16
  },
  pointsSpaceBw: {
    type: "number",
    default: 24
  },
  pointAlign: {
    type: "string",
    default: "center"
  },
  pointsFF: {
    type: "string"
  },
  currencyC: {
    type: "string",
    default: "$"
  },
  // currencyColor: { type: "string" },
  currencyFs: {
    type: "number",
    default: 16
  },
  priceMonth: {
    type: "string",
    default: "99"
  },
  currencyFormate: {
    type: "boolean",
    default: true
  },
  currencyFontWeight: {
    type: "string"
  },
  priceMonthPrice: {
    type: "string",
    default: "/ month"
  },
  priceMonthPriceFs: {
    type: "string"
  },
  priceMonthPriceColor: {
    type: "string",
    default: "#c2c4c4"
  },
  pricePosition: {
    type: "string",
    default: "top"
  },
  priceFontSize: {
    type: "number",
    default: 50
  },
  priceColor: {
    type: "string",
    default: "#ffffff"
  },
  priceBgColor: {
    type: "string"
  },
  priceFF: {
    type: "string"
  },
  priceInline: {
    type: "boolean",
    default: true
  },
  pricePadding: {
    type: "number",
    default: 0
  },
  priceBorder: {
    type: "boolean",
    default: false
  },
  priceBorderWidth: {
    type: "number",
    default: 2
  },
  priceBorderRadius: {
    type: "number",
    default: 50
  },
  priceBorderColor: {
    type: "string",
    default: "#ffa600"
  },
  priceSpace: {
    type: "number",
    default: 100
  },
  linkTxt: {
    type: "string",
    default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("ORDER NOW", "zita-blocks")
  },
  linkLink: {
    type: "string",
    default: "#"
  },
  linkTarget: {
    type: "boolean",
    default: false
  },
  linkColor: {
    type: "string"
  },
  linkBgColor: {
    type: "string",
    default: "#f1b426"
  },
  linkFontSize: {
    type: "number"
  },
  linkBorder: {
    type: "boolean",
    default: false
  },
  linkBorderWidth: {
    type: "number",
    default: 1
  },
  linkBorderRadius: {
    type: "number",
    default: 2
  },
  linkBorderColor: {
    type: "string"
  },
  linkSpaceV: {
    type: "number",
    default: 14
  },
  linkSpaceH: {
    type: "number",
    default: 45
  },
  bottomTxt: {
    type: "string",
    default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Terms & Conditions", "zita-blocks")
  },
  bottomTxtColor: {
    type: "string",
    default: "white"
  },
  bottomTxtFontSize: {
    type: "number"
  },
  bottomTxtFF: {
    type: "string"
  },
  footerBgColor: {
    type: "string",
    default: "#2B2B2B"
  },
  // containerBgColor: {
  //   type: "string",
  // },
  containerBorder: {
    type: "boolean",
    default: false
  },
  containerBorderWidth: {
    type: "number"
  },
  containerBorderRadius: {
    type: "number"
  },
  containerBorderColor: {
    type: "string"
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("zita-blocks/pricing-table-table", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Price Table Colomn", "zita-blocks"),
  icon: "table-col-before",
  category: "zita-category",
  parent: ["zita-blocks/pricing-table-section"],
  keywords: ["price", "pricebox"],
  attributes: attrS,
  example: function example() {},
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var headerBackground = attributes.headerBackground,
        headingTxt = attributes.headingTxt,
        headingFontSize = attributes.headingFontSize,
        headingColor = attributes.headingColor,
        headingFF = attributes.headingFF,
        headingDescription = attributes.headingDescription,
        descriptionColor = attributes.descriptionColor,
        descriptionFontSize = attributes.descriptionFontSize,
        descriptionFF = attributes.descriptionFF,
        middleTxt = attributes.middleTxt,
        middleBgColor = attributes.middleBgColor,
        pointsColor = attributes.pointsColor,
        pointsFontSize = attributes.pointsFontSize,
        pointsSpaceBw = attributes.pointsSpaceBw,
        pointsFF = attributes.pointsFF,
        pointAlign = attributes.pointAlign,
        priceMonth = attributes.priceMonth,
        priceMonthPrice = attributes.priceMonthPrice,
        priceMonthPriceFs = attributes.priceMonthPriceFs,
        priceMonthPriceColor = attributes.priceMonthPriceColor,
        pricePosition = attributes.pricePosition,
        priceFontSize = attributes.priceFontSize,
        priceColor = attributes.priceColor,
        priceBgColor = attributes.priceBgColor,
        priceFF = attributes.priceFF,
        priceInline = attributes.priceInline,
        currencyFontWeight = attributes.currencyFontWeight,
        priceBorder = attributes.priceBorder,
        priceBorderWidth = attributes.priceBorderWidth,
        priceBorderRadius = attributes.priceBorderRadius,
        priceBorderColor = attributes.priceBorderColor,
        priceSpace = attributes.priceSpace,
        priceSpaceV = attributes.priceSpaceV,
        priceSpaceH = attributes.priceSpaceH,
        currencyC = attributes.currencyC,
        currencyFs = attributes.currencyFs,
        currencyFormate = attributes.currencyFormate,
        linkTxt = attributes.linkTxt,
        linkLink = attributes.linkLink,
        linkTarget = attributes.linkTarget,
        linkColor = attributes.linkColor,
        linkBgColor = attributes.linkBgColor,
        linkFontSize = attributes.linkFontSize,
        linkBorder = attributes.linkBorder,
        linkBorderWidth = attributes.linkBorderWidth,
        linkBorderRadius = attributes.linkBorderRadius,
        linkBorderColor = attributes.linkBorderColor,
        linkSpaceH = attributes.linkSpaceH,
        linkSpaceV = attributes.linkSpaceV,
        bottomTxt = attributes.bottomTxt,
        bottomTxtColor = attributes.bottomTxtColor,
        bottomTxtFontSize = attributes.bottomTxtFontSize,
        bottomTxtFF = attributes.bottomTxtFF,
        footerBgColor = attributes.footerBgColor,
        containerBorder = attributes.containerBorder,
        containerBorderWidth = attributes.containerBorderWidth,
        containerBorderRadius = attributes.containerBorderRadius,
        containerBorderColor = attributes.containerBorderColor;
    var containerBorderStyle = containerBorder ? {
      borderWidth: containerBorderWidth + "px",
      borderStyle: "solid",
      borderColor: containerBorderColor,
      borderRadius: containerBorderRadius + "px"
    } : {};
    var priceStyle = {
      backgroundColor: priceBgColor,
      fontFamily: priceFF,
      fontWeight: currencyFontWeight
    };
    if (priceBorder) priceStyle = _objectSpread(_objectSpread({}, priceStyle), {
      borderWidth: priceBorderWidth + "px",
      borderRadius: priceBorderRadius + (!priceInline ? "%" : "px"),
      borderColor: priceBorderColor,
      borderStyle: "solid"
    });

    if (!priceInline) {
      priceStyle = _objectSpread(_objectSpread({}, priceStyle), {
        height: priceSpace + "px",
        width: priceSpace + "px"
      });
    } else {
      priceStyle = _objectSpread(_objectSpread({}, priceStyle), {
        paddingTop: priceSpaceV + "px",
        paddingBottom: priceSpaceV + "px",
        paddingLeft: priceSpaceH + "px",
        paddingRight: priceSpaceH + "px"
      });
    }

    var link_style = {
      color: linkColor,
      backgroundColor: linkBgColor,
      fontSize: linkFontSize + "px",
      paddingLeft: linkSpaceH + "px",
      paddingRight: linkSpaceH + "px",
      paddingTop: linkSpaceV + "px",
      paddingBottom: linkSpaceV + "px"
    };
    link_style = linkBorder ? _objectSpread(_objectSpread({}, {
      borderWidth: linkBorderWidth + "px",
      borderRadius: linkBorderRadius + "px",
      borderStyle: "solid",
      borderColor: linkBorderColor
    }), link_style) : link_style; // one

    var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
        _useState2 = _slicedToArray(_useState, 2),
        activeFamilyContainer = _useState2[0],
        activeFamilyDrop = _useState2[1];

    var familyRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      var handler = function handler(event) {
        if (!familyRef.current.contains(event.target)) {
          activeFamilyDrop(false);
        }
      };

      if (activeFamilyContainer) document.addEventListener("mouseup", handler);
      return function () {
        document.removeEventListener("mouseup", handler);
      };
    }); // two

    var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
        _useState4 = _slicedToArray(_useState3, 2),
        activeFamilyContainer2 = _useState4[0],
        activeFamilyDrop2 = _useState4[1];

    var familyRef2 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      var handler = function handler(event) {
        if (!familyRef2.current.contains(event.target)) {
          activeFamilyDrop2(false);
        }
      };

      if (activeFamilyContainer2) document.addEventListener("mouseup", handler);
      return function () {
        document.removeEventListener("mouseup", handler);
      };
    });
    return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Header Section", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement("p", {
      className: "block-inside"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Header Setting", "zita-blocks")), wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Family", "zita-blocks"))), wp.element.createElement("div", {
      ref: familyRef,
      className: "font-family-drop-down ".concat(activeFamilyContainer ? "active" : "")
    }, wp.element.createElement("div", {
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer;
        activeFamilyDrop(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: headingFF
      }
    }, headingFF ? headingFF : "Choose Family")), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            headingFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    })))), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: headingColor,
      onChange: function onChange(color) {
        return setAttributes({
          headingColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Size", "zita-blocks"),
      value: headingFontSize,
      min: 0,
      max: 60,
      onChange: function onChange(e) {
        return setAttributes({
          headingFontSize: e
        });
      }
    }), wp.element.createElement("p", {
      className: "block-inside"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Short Description", "zita-blocks")), wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Family", "zita-blocks"))), wp.element.createElement("div", {
      ref: familyRef2,
      className: "font-family-drop-down ".concat(activeFamilyContainer2 ? "active" : "")
    }, wp.element.createElement("div", {
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer2;
        activeFamilyDrop2(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: descriptionFF
      }
    }, descriptionFF ? descriptionFF : "Choose Family")), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            descriptionFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    })))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Size", "zita-blocks"),
      value: descriptionFontSize,
      min: 0,
      max: 60,
      onChange: function onChange(e) {
        return setAttributes({
          descriptionFontSize: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: descriptionColor,
      onChange: function onChange(color) {
        return setAttributes({
          descriptionColor: color
        });
      }
    }), wp.element.createElement("p", {
      className: "block-inside"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Background Color", "zita-blocks")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ColorPicker"], {
      color: headerBackground,
      onChangeComplete: function onChangeComplete(colorBg) {
        var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");
        setAttributes({
          headerBackground: color
        });
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: "Price Setting",
      initialOpen: false
    }, wp.element.createElement("p", {
      className: "block-inside"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Position", "zita-blocks")), wp.element.createElement("div", {
      className: "column-layout-num-column text_"
    }, wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      name: "price-position",
      id: "price-position-top",
      checked: pricePosition == "top" ? true : false,
      onChange: function onChange() {
        return setAttributes({
          pricePosition: "top"
        });
      }
    }), wp.element.createElement("label", {
      for: "price-position-top"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Top", "zita-blocks"))), wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      name: "price-position",
      id: "price-position-bottom",
      checked: pricePosition == "bottom" ? true : false,
      onChange: function onChange() {
        return setAttributes({
          pricePosition: "bottom"
        });
      }
    }), wp.element.createElement("label", {
      for: "price-position-bottom"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Bottom", "zita-blocks")))), wp.element.createElement("p", {
      className: "block-inside"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Price", "zita-blocks")), wp.element.createElement("div", {
      className: "flex-section"
    }, wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Price", "zita-blocks")), wp.element.createElement("input", {
      type: "number",
      value: priceMonth,
      onChange: function onChange(e) {
        setAttributes({
          priceMonth: e.target.value
        });
      }
    })), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Color", "zita-blocks")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: priceColor,
      onChange: function onChange(color) {
        return setAttributes({
          priceColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Size", "zita-blocks"),
      value: priceFontSize,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          priceFontSize: e
        });
      }
    }), wp.element.createElement("p", {
      className: "block-inside"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Currency", "zita-blocks")), wp.element.createElement("div", {
      className: "flex-section"
    }, wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Currency", "zita-blocks")), wp.element.createElement("select", {
      value: currencyC,
      onChange: function onChange(e) {
        setAttributes({
          currencyC: e.target.value
        });
      }
    }, [["$", "Dollar"], ["€", "Euro"], ["฿", "Baht"], ["₣", "Franc"], ["ƒ", "Guilder"], ["kr", "Krona"], ["₤", "Lira"], ["₹", "Rupee (Indian)"], ["₧", "Peseta"], ["₱", "Peso"], ["£", "Pound Sterling"], ["R$", "Real"], ["₽", "Ruble"], ["₨", "Rupee"], ["₪", "Shekel"], ["¥", "Yen/Yuan"], ["₩", "Won"], ["", "Custom"]].map(function (v) {
      return wp.element.createElement("option", {
        value: v[0]
      }, v[0] + " " + v[1]);
    }))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Size", "zita-blocks"),
      value: currencyFs,
      min: 0,
      max: 60,
      onChange: function onChange(e) {
        return setAttributes({
          currencyFs: e
        });
      }
    }), wp.element.createElement("div", {
      className: "flex-section"
    }, wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Formate", "zita-blocks")), wp.element.createElement("select", {
      value: currencyFormate,
      onChange: function onChange(e) {
        var raised = e.target.value == 1 ? true : false;
        setAttributes({
          currencyFormate: raised
        });
        if (raised) setAttributes({
          currencyFs: 8
        });
      }
    }, wp.element.createElement("option", {
      value: "0"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Normal", "zita-blocks")), wp.element.createElement("option", {
      value: "1"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Rasied", "zita-blocks")))), wp.element.createElement("p", {
      className: "block-inside"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Text", "zita-blocks")), wp.element.createElement("div", {
      className: "flex-section"
    }, wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Enter Text", "zita-blocks")), wp.element.createElement("input", {
      type: "text",
      value: priceMonthPrice,
      onChange: function onChange(e) {
        setAttributes({
          priceMonthPrice: e.target.value
        });
      }
    })), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Color", "zita-blocks")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: priceMonthPriceColor,
      onChange: function onChange(color) {
        return setAttributes({
          priceMonthPriceColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Size", "zita-blocks"),
      value: priceMonthPriceFs,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          priceMonthPriceFs: e
        });
      }
    }), wp.element.createElement("p", {
      className: "block-inside"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Advance Setting", "zita-blocks")), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Layout", "zita-blocks")), wp.element.createElement("div", {
      className: "column-layout-num-column text_"
    }, wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      id: "price-layout-rounded",
      name: "price-layout",
      checked: !priceInline ? true : false,
      onChange: function onChange() {
        return setAttributes({
          priceInline: false
        });
      }
    }), wp.element.createElement("label", {
      for: "price-layout-rounded"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Rounded", "zita-blocks"))), wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      id: "price-layout-box",
      name: "price-layout",
      checked: priceInline ? true : false,
      onChange: function onChange() {
        return setAttributes({
          priceInline: true
        });
      }
    }), wp.element.createElement("label", {
      for: "price-layout-box"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Box", "zita-blocks")))), !priceInline && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Price Space", "zita-blocks"),
      value: priceSpace,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          priceSpace: e
        });
      }
    }), priceInline && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Top/Bottom", "zita-blocks"),
      value: priceSpaceV,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          priceSpaceV: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Left/Right", "zita-blocks"),
      value: priceSpaceH,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          priceSpaceH: e
        });
      }
    })), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: priceBorder ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Disable", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Enable", "zita-blocks"),
      checked: priceBorder,
      onChange: function onChange(e) {
        return setAttributes({
          priceBorder: e
        });
      }
    }), priceBorder && wp.element.createElement("div", {
      className: "icon-border-setting"
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Width", "zita-blocks"),
      value: priceBorderWidth,
      min: 0,
      max: 20,
      onChange: function onChange(e) {
        return setAttributes({
          priceBorderWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Radius", "zita-blocks"),
      value: priceBorderRadius,
      min: 0,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          priceBorderRadius: e
        });
      }
    }), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Color", "zita-blocks")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: priceBorderColor,
      onChange: function onChange(color) {
        return setAttributes({
          priceBorderColor: color
        });
      }
    })), wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Family", "zita-blocks"))), wp.element.createElement("div", {
      ref: familyRef,
      className: "font-family-drop-down ".concat(activeFamilyContainer ? "active" : "")
    }, wp.element.createElement("div", {
      ref: familyRef,
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer;
        activeFamilyDrop(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: priceFF
      }
    }, priceFF ? priceFF : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Choose Family", "zita-blocks"))), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            priceFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    })))), wp.element.createElement("div", {
      className: "flex-section"
    }, wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Weight", "zita-blocks")), wp.element.createElement("select", {
      value: currencyFontWeight,
      onChange: function onChange(e) {
        setAttributes({
          currencyFontWeight: e.target.value
        });
      }
    }, wp.element.createElement("option", {
      value: "400"
    }, "400"), wp.element.createElement("option", {
      value: "500"
    }, "500"), wp.element.createElement("option", {
      value: "700"
    }, "700"), wp.element.createElement("option", {
      value: "900"
    }, "900"), wp.element.createElement("option", {
      value: "bold"
    }, "Bold"), wp.element.createElement("option", {
      value: "bolder"
    }, "Bolder"))), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Background Color", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ColorPicker"], {
      color: priceBgColor,
      onChangeComplete: function onChangeComplete(colorBg) {
        var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");
        setAttributes({
          priceBgColor: color
        });
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: "Middle Section",
      initialOpen: false
    }, wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Family", "zita-blocks"))), wp.element.createElement("div", {
      ref: familyRef,
      className: "font-family-drop-down ".concat(activeFamilyContainer ? "active" : "")
    }, wp.element.createElement("div", {
      ref: familyRef,
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer;
        activeFamilyDrop(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: pointsFF
      }
    }, pointsFF ? pointsFF : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Choose Family", "zita-blocks"))), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            pointsFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    })))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Size", "zita-blocks"),
      value: pointsFontSize,
      min: 0,
      max: 60,
      onChange: function onChange(e) {
        return setAttributes({
          pointsFontSize: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Space Between Text", "zita-blocks"),
      value: pointsSpaceBw,
      min: 0,
      max: 60,
      onChange: function onChange(e) {
        return setAttributes({
          pointsSpaceBw: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Text Align", "zita-blocks"))), wp.element.createElement("div", {
      className: "column-layout-num-column text_"
    }, wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      name: "points-align",
      id: "points-align-top",
      checked: pointAlign == "left" ? true : false,
      onChange: function onChange() {
        return setAttributes({
          pointAlign: "left"
        });
      }
    }), wp.element.createElement("label", {
      for: "points-align-top"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Left", "zita-blocks"))), wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      name: "points-align",
      id: "points-align-bottom",
      checked: pointAlign == "center" ? true : false,
      onChange: function onChange() {
        return setAttributes({
          pointAlign: "center"
        });
      }
    }), wp.element.createElement("label", {
      for: "points-align-bottom"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Center", "zita-blocks")))), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: pointsColor,
      onChange: function onChange(color) {
        return setAttributes({
          pointsColor: color
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Background Color", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ColorPicker"], {
      color: middleBgColor,
      onChangeComplete: function onChangeComplete(colorBg) {
        var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");
        setAttributes({
          middleBgColor: color
        });
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Button Section", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement("p", {
      className: "block-inside"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Button", "zita-blocks")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Size", "zita-blocks"),
      value: linkFontSize,
      min: 0,
      max: 70,
      onChange: function onChange(e) {
        return setAttributes({
          linkFontSize: e
        });
      }
    }), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Color", "zita-blocks")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: linkColor,
      onChange: function onChange(color) {
        return setAttributes({
          linkColor: color
        });
      }
    }), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Background Color", "zita-blocks")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: linkBgColor,
      onChange: function onChange(color) {
        return setAttributes({
          linkBgColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Height", "zita-blocks"),
      value: linkSpaceV,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          linkSpaceV: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Width", "zita-blocks"),
      value: linkSpaceH,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          linkSpaceH: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: linkBorder ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Disable", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Enable", "zita-blocks"),
      checked: linkBorder,
      onChange: function onChange(e) {
        return setAttributes({
          linkBorder: e
        });
      }
    }), linkBorder && wp.element.createElement("div", {
      className: "icon-border-setting"
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Width", "zita-blocks"),
      value: linkBorderWidth,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          linkBorderWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Radius", "zita-blocks"),
      value: linkBorderRadius,
      min: 0,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          linkBorderRadius: e
        });
      }
    }), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Color", "zita-blocks")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: linkBorderColor,
      onChange: function onChange(color) {
        return setAttributes({
          linkBorderColor: color
        });
      }
    })), wp.element.createElement("p", {
      className: "block-inside"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Small Text", "zita-blocks")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Size", "zita-blocks"),
      value: bottomTxtFontSize,
      min: 0,
      max: 70,
      onChange: function onChange(e) {
        return setAttributes({
          bottomTxtFontSize: e
        });
      }
    }), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Color", "zita-blocks")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: bottomTxtColor,
      onChange: function onChange(color) {
        return setAttributes({
          bottomTxtColor: color
        });
      }
    }), wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Font Family", "zita-blocks"))), wp.element.createElement("div", {
      ref: familyRef,
      className: "font-family-drop-down ".concat(activeFamilyContainer ? "active" : "")
    }, wp.element.createElement("div", {
      ref: familyRef,
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer;
        activeFamilyDrop(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: bottomTxtFF
      }
    }, bottomTxtFF ? bottomTxtFF : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Choose Family", "zita-blocks"))), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            bottomTxtFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    })))), wp.element.createElement("p", {
      className: "block-inside"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Background Color", "zita-blocks")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ColorPicker"], {
      color: footerBgColor,
      onChangeComplete: function onChangeComplete(colorBg) {
        var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");
        setAttributes({
          footerBgColor: color
        });
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Container Settings", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: containerBorder ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Disable", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Enable", "zita-blocks"),
      checked: containerBorder,
      onChange: function onChange(e) {
        return setAttributes({
          containerBorder: e
        });
      }
    }), containerBorder && wp.element.createElement("div", {
      className: "icon-border-setting"
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Width", "zita-blocks"),
      value: containerBorderWidth,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          containerBorderWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Radius", "zita-blocks"),
      value: containerBorderRadius,
      min: 0,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          containerBorderRadius: e
        });
      }
    }), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Color", "zita-blocks")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
      value: containerBorderColor,
      onChange: function onChange(color) {
        return setAttributes({
          containerBorderColor: color
        });
      }
    })))), wp.element.createElement("div", {
      className: "pricing-table-wrapper",
      style: containerBorderStyle
    }, wp.element.createElement("div", _defineProperty({
      style: {
        backgroundColor: headerBackground
      },
      className: "pricing-table-top"
    }, "style", {
      backgroundColor: headerBackground
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      key: "editable",
      tagName: "h3",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Pricing Table", "zita-blocks"),
      value: headingTxt,
      style: {
        fontSize: headingFontSize + "px",
        color: headingColor,
        fontFamily: headingFF
      },
      onChange: function onChange(e) {
        return setAttributes({
          headingTxt: e
        });
      }
    }), pricePosition == "top" && wp.element.createElement("div", {
      className: "price_ ".concat(priceInline ? "inline_" : "box_"),
      style: priceStyle
    }, wp.element.createElement("div", {
      style: {
        color: priceColor
      },
      className: currencyFormate ? "rasied" : ""
    }, wp.element.createElement("p", {
      style: {
        fontSize: currencyFs
      }
    }, currencyC), wp.element.createElement("p", {
      style: {
        fontSize: priceFontSize + "px"
      }
    }, priceMonth)), wp.element.createElement("p", {
      style: {
        fontSize: priceMonthPriceFs + "px",
        color: priceMonthPriceColor
      }
    }, priceMonthPrice)), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      key: "editable",
      tagName: "p",
      style: {
        fontSize: descriptionFontSize + "px",
        color: descriptionColor,
        fontFamily: descriptionFF
      },
      value: headingDescription,
      onChange: function onChange(e) {
        return setAttributes({
          headingDescription: e
        });
      }
    })), wp.element.createElement("div", {
      className: "pricing-table-middle",
      style: {
        backgroundColor: middleBgColor
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      key: "editable",
      tagName: "div",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Pricing Description", "zita-blocks"),
      multiline: "p",
      style: {
        fontSize: pointsFontSize + "px",
        color: pointsColor,
        fontFamily: pointsFF,
        marginTop: pointsSpaceBw + "px",
        marginBottom: pointsSpaceBw + "px",
        textAlign: pointAlign
      },
      value: middleTxt,
      onChange: function onChange(e) {
        setAttributes({
          middleTxt: e
        });
      }
    })), wp.element.createElement("div", {
      className: "pricing-table-bottom",
      style: {
        backgroundColor: footerBgColor
      }
    }, pricePosition == "bottom" && wp.element.createElement("div", {
      className: "price_ ".concat(priceInline ? "inline_" : "box_"),
      style: priceStyle
    }, wp.element.createElement("div", {
      style: {
        color: priceColor
      },
      className: currencyFormate ? "rasied" : ""
    }, wp.element.createElement("p", {
      style: {
        fontSize: currencyFs
      }
    }, currencyC), wp.element.createElement("p", {
      style: {
        fontSize: priceFontSize + "px"
      }
    }, priceMonth)), wp.element.createElement("p", {
      style: {
        fontSize: priceMonthPriceFs + "px",
        color: priceMonthPriceColor
      }
    }, priceMonthPrice)), wp.element.createElement("div", {
      className: "link_button"
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      key: "editable",
      tagName: "a",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Click Me", "zita-blocks"),
      value: linkTxt,
      onChange: function onChange(e) {
        return setAttributes({
          linkTxt: e
        });
      },
      style: link_style
    })), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
      className: "bottom-text",
      key: "editable",
      tagName: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Price", "zita-blocks"),
      value: bottomTxt,
      onChange: function onChange(e) {
        return setAttributes({
          bottomTxt: e
        });
      },
      style: {
        color: bottomTxtColor,
        fontSize: bottomTxtFontSize + "px",
        fontFamily: bottomTxtFF
      }
    })))];
  },
  save: function save(props) {
    var _props$attributes = props.attributes,
        headerBackground = _props$attributes.headerBackground,
        headingTxt = _props$attributes.headingTxt,
        headingFontSize = _props$attributes.headingFontSize,
        headingColor = _props$attributes.headingColor,
        headingFF = _props$attributes.headingFF,
        headingDescription = _props$attributes.headingDescription,
        descriptionColor = _props$attributes.descriptionColor,
        descriptionFontSize = _props$attributes.descriptionFontSize,
        descriptionFF = _props$attributes.descriptionFF,
        middleTxt = _props$attributes.middleTxt,
        middleBgColor = _props$attributes.middleBgColor,
        pointsColor = _props$attributes.pointsColor,
        pointsFontSize = _props$attributes.pointsFontSize,
        pointAlign = _props$attributes.pointAlign,
        pointsSpaceBw = _props$attributes.pointsSpaceBw,
        pointsFF = _props$attributes.pointsFF,
        priceMonth = _props$attributes.priceMonth,
        priceMonthPrice = _props$attributes.priceMonthPrice,
        priceMonthPriceFs = _props$attributes.priceMonthPriceFs,
        priceMonthPriceColor = _props$attributes.priceMonthPriceColor,
        pricePosition = _props$attributes.pricePosition,
        priceFontSize = _props$attributes.priceFontSize,
        priceColor = _props$attributes.priceColor,
        priceBgColor = _props$attributes.priceBgColor,
        priceFF = _props$attributes.priceFF,
        priceInline = _props$attributes.priceInline,
        currencyFontWeight = _props$attributes.currencyFontWeight,
        priceBorder = _props$attributes.priceBorder,
        priceBorderWidth = _props$attributes.priceBorderWidth,
        priceBorderRadius = _props$attributes.priceBorderRadius,
        priceBorderColor = _props$attributes.priceBorderColor,
        priceSpace = _props$attributes.priceSpace,
        priceSpaceV = _props$attributes.priceSpaceV,
        priceSpaceH = _props$attributes.priceSpaceH,
        currencyC = _props$attributes.currencyC,
        currencyFs = _props$attributes.currencyFs,
        currencyFormate = _props$attributes.currencyFormate,
        linkTxt = _props$attributes.linkTxt,
        linkLink = _props$attributes.linkLink,
        linkTarget = _props$attributes.linkTarget,
        linkColor = _props$attributes.linkColor,
        linkBgColor = _props$attributes.linkBgColor,
        linkFontSize = _props$attributes.linkFontSize,
        linkBorder = _props$attributes.linkBorder,
        linkBorderWidth = _props$attributes.linkBorderWidth,
        linkBorderRadius = _props$attributes.linkBorderRadius,
        linkBorderColor = _props$attributes.linkBorderColor,
        linkSpaceH = _props$attributes.linkSpaceH,
        linkSpaceV = _props$attributes.linkSpaceV,
        bottomTxt = _props$attributes.bottomTxt,
        bottomTxtColor = _props$attributes.bottomTxtColor,
        bottomTxtFontSize = _props$attributes.bottomTxtFontSize,
        bottomTxtFF = _props$attributes.bottomTxtFF,
        footerBgColor = _props$attributes.footerBgColor,
        containerBorder = _props$attributes.containerBorder,
        containerBorderWidth = _props$attributes.containerBorderWidth,
        containerBorderRadius = _props$attributes.containerBorderRadius,
        containerBorderColor = _props$attributes.containerBorderColor;
    var containerBorderStyle = containerBorder ? {
      borderWidth: containerBorderWidth + "px",
      borderStyle: "solid",
      borderColor: containerBorderColor,
      borderRadius: containerBorderRadius + "px"
    } : {}; // price style

    var priceStyle = {
      backgroundColor: priceBgColor,
      fontFamily: priceFF,
      fontWeight: currencyFontWeight
    };
    if (priceBorder) priceStyle = _objectSpread(_objectSpread({}, priceStyle), {
      borderWidth: priceBorderWidth + "px",
      borderRadius: priceBorderRadius + (!priceInline ? "%" : "px"),
      borderColor: priceBorderColor,
      borderStyle: "solid"
    });

    if (!priceInline) {
      priceStyle = _objectSpread(_objectSpread({}, priceStyle), {
        height: priceSpace + "px",
        width: priceSpace + "px"
      });
    } else {
      priceStyle = _objectSpread(_objectSpread({}, priceStyle), {
        paddingTop: priceSpaceV + "px",
        paddingBottom: priceSpaceV + "px",
        paddingLeft: priceSpaceH + "px",
        paddingRight: priceSpaceH + "px"
      });
    }

    var link_style = {
      color: linkColor,
      backgroundColor: linkBgColor,
      fontSize: linkFontSize + "px",
      paddingLeft: linkSpaceH + "px",
      paddingRight: linkSpaceH + "px",
      paddingTop: linkSpaceV + "px",
      paddingBottom: linkSpaceV + "px"
    };
    link_style = linkBorder ? _objectSpread(_objectSpread({}, {
      borderWidth: linkBorderWidth + "px",
      borderRadius: linkBorderRadius + "px",
      borderStyle: "solid",
      borderColor: linkBorderColor
    }), link_style) : link_style;
    return wp.element.createElement("div", {
      className: "pricing-table-wrapper",
      style: containerBorderStyle
    }, wp.element.createElement("div", _defineProperty({
      style: {
        backgroundColor: headerBackground
      },
      className: "pricing-table-top"
    }, "style", {
      backgroundColor: headerBackground
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "h3",
      value: headingTxt,
      style: {
        fontSize: headingFontSize + "px",
        color: headingColor,
        fontFamily: headingFF
      }
    }), pricePosition == "top" && wp.element.createElement("div", {
      className: "price_ ".concat(priceInline ? "inline_" : "box_"),
      style: priceStyle
    }, wp.element.createElement("div", {
      style: {
        color: priceColor
      },
      className: currencyFormate ? "rasied" : ""
    }, wp.element.createElement("p", {
      style: {
        fontSize: currencyFs
      }
    }, currencyC), wp.element.createElement("p", {
      style: {
        fontSize: priceFontSize + "px"
      }
    }, priceMonth)), wp.element.createElement("p", {
      style: {
        fontSize: priceMonthPriceFs + "px",
        color: priceMonthPriceColor
      }
    }, priceMonthPrice)), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "p",
      style: {
        fontSize: descriptionFontSize + "px",
        color: descriptionColor,
        fontFamily: descriptionFF
      },
      value: headingDescription
    })), wp.element.createElement("div", {
      className: "pricing-table-middle",
      style: {
        backgroundColor: middleBgColor
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "div",
      multiline: "p",
      style: {
        fontSize: pointsFontSize + "px",
        color: pointsColor,
        fontFamily: pointsFF,
        marginTop: pointsSpaceBw + "px",
        marginBottom: pointsSpaceBw + "px",
        textAlign: pointAlign
      },
      value: middleTxt
    })), wp.element.createElement("div", {
      className: "pricing-table-bottom",
      style: {
        backgroundColor: footerBgColor
      }
    }, pricePosition == "bottom" && wp.element.createElement("div", {
      className: "price_ ".concat(priceInline ? "inline_" : "box_"),
      style: priceStyle
    }, wp.element.createElement("div", {
      style: {
        color: priceColor
      },
      className: currencyFormate ? "rasied" : ""
    }, wp.element.createElement("p", {
      style: {
        fontSize: currencyFs
      }
    }, currencyC), wp.element.createElement("p", {
      style: {
        fontSize: priceFontSize + "px"
      }
    }, priceMonth)), wp.element.createElement("p", {
      style: {
        fontSize: priceMonthPriceFs + "px",
        color: priceMonthPriceColor
      }
    }, priceMonthPrice)), wp.element.createElement("div", {
      className: "link_button"
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      tagName: "a",
      value: linkTxt,
      style: link_style
    })), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
      className: "bottom-text",
      tagName: "p",
      value: bottomTxt,
      style: {
        color: bottomTxtColor,
        fontSize: bottomTxtFontSize + "px",
        fontFamily: bottomTxtFF
      }
    })));
  }
});

/***/ }),

/***/ "./src/blocks/pricing-table/parent.js":
/*!********************************************!*\
  !*** ./src/blocks/pricing-table/parent.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("zita-blocks/pricing-table-section", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Pricing Table", "zita-blocks"),
  icon: "table-col-before",
  // description: "Pricing Table",
  category: "zita-category",
  supports: {
    align: ["center", "left", "right", "wide", "full"]
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {// return { "data-align": "wide" };
  },
  attributes: {
    align: {
      type: "string",
      default: "wide"
    },
    columns: {
      type: "number",
      default: 2
    },
    fullWidth: {
      type: "string",
      default: ""
    }
  },
  edit: function edit(props) {
    // console.log(props);
    var className = props.className,
        attributes = props.attributes,
        setAttributes = props.setAttributes;
    var columns = attributes.columns,
        fullWidth = attributes.fullWidth;
    var MY_TEMPLATE = [["zita-blocks/pricing-table-table"], ["zita-blocks/pricing-table-table", {
      headingTxt: "Advance",
      priceMonth: "159",
      middleTxt: "<p>Email Marketing</p><p>Email Builder</p><p>Client Testing</p><p>10 User Free</p><p>Multiple Email Support</p>"
    }]];
    return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Number Of Column", "zita-blocks"),
      value: columns,
      onChange: function onChange(v) {
        setAttributes({
          columns: v
        });
      },
      min: 1,
      max: 4
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Column Layout", "zita-blocks"))), wp.element.createElement("div", {
      className: "column-layout-num-column"
    }, wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      value: "box",
      name: "column-layout",
      id: "column-layout-box",
      onChange: function onChange() {
        return setAttributes({
          fullWidth: ""
        });
      }
    }), wp.element.createElement("label", {
      for: "column-layout-box"
    }, wp.element.createElement("img", {
      src: plugin_url.url + "assets/img/box-layout.png"
    }))), wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      value: "full",
      name: "column-layout",
      id: "column-layout-full",
      onChange: function onChange() {
        return setAttributes({
          fullWidth: "full-width"
        });
      }
    }), wp.element.createElement("label", {
      for: "column-layout-full"
    }, wp.element.createElement("img", {
      src: plugin_url.url + "assets/img/100percent.png"
    })))))), wp.element.createElement("div", {
      className: "".concat(className, " ").concat(fullWidth, " column-count-").concat(columns, " ")
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
      template: MY_TEMPLATE,
      allowedBlocks: ["zita-blocks/pricing-table-table"]
    }))];
  },
  save: function save(props) {
    // const { attributes } = props;
    var _props$attributes = props.attributes,
        columns = _props$attributes.columns,
        fullWidth = _props$attributes.fullWidth; // console.log(columns);

    return wp.element.createElement("div", {
      className: "".concat(fullWidth, " column-count-").concat(columns, " ")
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
  }
});

/***/ }),

/***/ "./src/blocks/progress-bar-pie/editor.scss":
/*!*************************************************!*\
  !*** ./src/blocks/progress-bar-pie/editor.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/progress-bar-pie/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/progress-bar-pie/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/progress-bar-pie/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
 // import fontFamily from "../block-assets/font-family";
// import icons_ from "../block-assets/icons";





var attrs_ = {
  circleRadius: {
    type: "number",
    default: 80
  },
  strokeWidth: {
    type: "number",
    default: 15
  },
  strokeColor: {
    type: "string",
    default: "blue"
  },
  strokeBgColor: {
    type: "string",
    default: "grey"
  },
  fillBgColor: {
    type: "string",
    default: "pink"
  },
  animationDelay: {
    type: "number",
    default: 10
  },
  lineCap: {
    type: "boolean",
    default: false
  },
  alignment: {
    type: "string",
    default: "center"
  },
  text: {
    type: "number",
    default: 50
  },
  textFs: {
    type: "number",
    default: 18
  },
  textColor: {
    type: "string",
    default: "black"
  },
  percentTitleE: {
    type: "boolean",
    default: true
  },
  percentTitle: {
    type: "string",
    default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Add Title", "zita-blocks")
  },
  percentTitleFs: {
    type: "number"
  },
  percentTitleColor: {
    type: "string"
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("zita-blocks/progress-bar-pie", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Circular Progress Bar", "zita-blocks"),
  icon: wp.element.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "enable-background": "new 0 0 24 24",
    viewBox: "0 0 24 24",
    fill: "black",
    width: "18px",
    height: "18px"
  }, wp.element.createElement("g", null, wp.element.createElement("rect", {
    fill: "none",
    height: "24",
    width: "24"
  }), wp.element.createElement("path", {
    d: "M15.5,13.5c0,2-2.5,3.5-2.5,5h-2c0-1.5-2.5-3-2.5-5c0-1.93,1.57-3.5,3.5-3.5h0C13.93,10,15.5,11.57,15.5,13.5z M13,19.5h-2 V21h2V19.5z M19,13c0,1.68-0.59,3.21-1.58,4.42l1.42,1.42C20.18,17.27,21,15.23,21,13c0-2.74-1.23-5.19-3.16-6.84l-1.42,1.42 C17.99,8.86,19,10.82,19,13z M16,5l-4-4v3c0,0,0,0,0,0c-4.97,0-9,4.03-9,9c0,2.23,0.82,4.27,2.16,5.84l1.42-1.42 C5.59,16.21,5,14.68,5,13c0-3.86,3.14-7,7-7c0,0,0,0,0,0v3L16,5z"
  }))),
  // description: "progress bar.",
  category: "zita-category",
  keywords: ["circular progress", "circular progress bar"],
  attributes: attrs_,
  example: function example() {},
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var circleRadius = attributes.circleRadius,
        strokeWidth = attributes.strokeWidth,
        strokeColor = attributes.strokeColor,
        strokeBgColor = attributes.strokeBgColor,
        fillBgColor = attributes.fillBgColor,
        lineCap = attributes.lineCap,
        animationDelay = attributes.animationDelay,
        alignment = attributes.alignment,
        text = attributes.text,
        textFs = attributes.textFs,
        textColor = attributes.textColor,
        percentTitleE = attributes.percentTitleE,
        percentTitle = attributes.percentTitle,
        percentTitleColor = attributes.percentTitleColor,
        percentTitleFs = attributes.percentTitleFs;
    var HW = circleRadius * 2 + strokeWidth;
    var cxCy = HW / 2;
    return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Circle Setting", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Percent", "zita-blocks"),
      value: text,
      min: 1,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          text: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Width", "zita-blocks"),
      value: circleRadius,
      min: 1,
      max: 150,
      onChange: function onChange(e) {
        return setAttributes({
          circleRadius: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Stroke Width", "zita-blocks"),
      value: strokeWidth,
      min: 1,
      max: 150,
      onChange: function onChange(e) {
        return setAttributes({
          strokeWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Animation Delay", "zita-blocks"),
      value: animationDelay,
      min: 1,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          animationDelay: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Stroke Edges Type", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
      label: lineCap ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Flat", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Circular", "zita-blocks"),
      checked: lineCap,
      onChange: function onChange(e) {
        return setAttributes({
          lineCap: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Stroke Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: strokeColor,
      onChange: function onChange(color) {
        return setAttributes({
          strokeColor: color
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Stroke Background Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: strokeBgColor,
      onChange: function onChange(color) {
        return setAttributes({
          strokeBgColor: color
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Fill Background Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: fillBgColor,
      onChange: function onChange(color) {
        return setAttributes({
          fillBgColor: color
        });
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Text Setting", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement("p", {
      className: "block-inside"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Title Setting", "zita-blocks")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
      label: percentTitleE ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Hide", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Show", "zita-blocks"),
      checked: percentTitleE,
      onChange: function onChange(e) {
        return setAttributes({
          percentTitleE: e
        });
      }
    }), percentTitleE && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Font Size", "zita-blocks"),
      value: percentTitleFs,
      min: 1,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          percentTitleFs: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: percentTitleColor,
      onChange: function onChange(color) {
        return setAttributes({
          percentTitleColor: color
        });
      }
    })), wp.element.createElement("p", {
      className: "block-inside"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Percent Setting", "zita-blocks")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Font Size", "zita-blocks"),
      value: textFs,
      min: 1,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          textFs: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: textColor,
      onChange: function onChange(color) {
        return setAttributes({
          textColor: color
        });
      }
    }))), wp.element.createElement("div", {
      className: "thk-progress-bar-wrapper-pie"
    }, wp.element.createElement("div", {
      className: "zita-block-pie-circle"
    }, wp.element.createElement("div", {
      className: "pie-circle_"
    }, wp.element.createElement("div", {
      className: "text-sction"
    }, percentTitleE && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      className: "title_",
      key: "editable",
      tagName: "span",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Add Title", "zita-blocks"),
      value: percentTitle,
      onChange: function onChange(e) {
        return setAttributes({
          percentTitle: e
        });
      },
      style: {
        color: percentTitleColor,
        fontSize: percentTitleFs + "px"
      }
    }), wp.element.createElement("span", {
      className: "percent_",
      style: {
        fontSize: textFs + "px",
        color: textColor
      }
    }, text, "%")), wp.element.createElement("svg", {
      height: HW,
      width: HW
    }, wp.element.createElement("circle", {
      cx: cxCy,
      cy: cxCy,
      r: circleRadius,
      fill: fillBgColor
    }), wp.element.createElement("circle", {
      cx: cxCy,
      cy: cxCy,
      r: circleRadius,
      fill: "none",
      "stroke-width": strokeWidth,
      stroke: strokeBgColor
    }), wp.element.createElement("circle", {
      r: circleRadius,
      cx: cxCy,
      cy: cxCy,
      "stroke-width": strokeWidth,
      fill: "none",
      stroke: strokeColor,
      "stroke-linecap": lineCap ? "round" : "flat",
      "stroke-dasharray": "".concat(text * (Math.PI * (circleRadius * 2) / 100), " ").concat(Math.PI * (circleRadius * 2))
    })))))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var circleRadius = attributes.circleRadius,
        strokeWidth = attributes.strokeWidth,
        strokeColor = attributes.strokeColor,
        strokeBgColor = attributes.strokeBgColor,
        fillBgColor = attributes.fillBgColor,
        animationDelay = attributes.animationDelay,
        lineCap = attributes.lineCap,
        alignment = attributes.alignment,
        text = attributes.text,
        textFs = attributes.textFs,
        textColor = attributes.textColor,
        percentTitleE = attributes.percentTitleE,
        percentTitle = attributes.percentTitle,
        percentTitleColor = attributes.percentTitleColor,
        percentTitleFs = attributes.percentTitleFs;
    var circleData = {
      radius: circleRadius,
      strokeWidth: strokeWidth,
      strokeColor: strokeColor,
      strokeBgColor: strokeBgColor,
      lineCap: lineCap,
      animationDelay: animationDelay,
      text: text
    };
    circleData = JSON.stringify(circleData);
    var HW = circleRadius * 2 + strokeWidth;
    var cxCy = HW / 2;
    return wp.element.createElement("div", {
      className: "thk-progress-bar-wrapper-pie"
    }, wp.element.createElement("div", {
      className: "zita-block-pie-circle front_"
    }, wp.element.createElement("div", {
      className: "pie-circle_"
    }, wp.element.createElement("div", {
      className: "text-sction"
    }, percentTitleE && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      className: "title_",
      tagName: "span",
      value: percentTitle,
      style: {
        color: percentTitleColor,
        fontSize: percentTitleFs + "px"
      }
    }), wp.element.createElement("span", {
      className: "percent_",
      style: {
        fontSize: textFs + "px",
        color: textColor
      }
    })), wp.element.createElement("svg", {
      height: HW,
      width: HW,
      data: circleData
    }, wp.element.createElement("circle", {
      cx: cxCy,
      cy: cxCy,
      r: circleRadius,
      fill: fillBgColor
    }), wp.element.createElement("circle", {
      cx: cxCy,
      cy: cxCy,
      r: circleRadius,
      fill: "none",
      "stroke-width": strokeWidth,
      stroke: strokeBgColor
    }), wp.element.createElement("circle", {
      className: "percent-apply",
      r: circleRadius,
      cx: cxCy,
      cy: cxCy,
      fill: "none",
      "stroke-linecap": lineCap ? "round" : "flat"
    })))));
  }
});

/***/ }),

/***/ "./src/blocks/progress-bar/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/progress-bar/editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/progress-bar/index.js":
/*!******************************************!*\
  !*** ./src/blocks/progress-bar/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/progress-bar/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





var attrs_ = {
  percentTitle: {
    type: "string",
    default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Percent title", "zita-blocks")
  },
  titleFs: {
    type: "number"
  },
  titleFf: {
    type: "string"
  },
  titleIn: {
    type: "boolean",
    default: false
  },
  titleColor: {
    type: "string"
  },
  progressHeight: {
    type: "number",
    default: 12
  },
  percent: {
    type: "number",
    default: 40
  },
  animationDelay: {
    type: "number",
    default: 10
  },
  percentColor: {
    type: "string",
    default: "yellow"
  },
  percentBgColor: {
    type: "string"
  },
  borderRadius: {
    type: "number"
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("zita-blocks/progress-block", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Linear Progress Bar", "zita-blocks"),
  icon: "update",
  // description: "progress bar.",
  category: "zita-category",
  keywords: ["progress", "progress bar"],
  attributes: attrs_,
  example: function example() {},
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var percent = attributes.percent,
        progressHeight = attributes.progressHeight,
        percentTitle = attributes.percentTitle,
        titleIn = attributes.titleIn,
        titleFs = attributes.titleFs,
        titleFf = attributes.titleFf,
        animationDelay = attributes.animationDelay,
        titleColor = attributes.titleColor,
        percentColor = attributes.percentColor,
        percentBgColor = attributes.percentBgColor,
        borderRadius = attributes.borderRadius;
    return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Title Setting", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
      label: titleIn ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Outside", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Inside", "zita-blocks"),
      checked: titleIn,
      onChange: function onChange(e) {
        return setAttributes({
          titleIn: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Font Size", "zita-blocks"),
      value: titleFs,
      min: 1,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          titleFs: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: titleColor,
      onChange: function onChange(color) {
        return setAttributes({
          titleColor: color
        });
      }
    })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Progress Bar Setting", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Height", "zita-blocks"),
      value: progressHeight,
      min: 1,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          progressHeight: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Percent", "zita-blocks"),
      value: percent,
      min: 1,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          percent: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Border Radius", "zita-blocks"),
      value: borderRadius,
      min: 1,
      max: 60,
      onChange: function onChange(e) {
        return setAttributes({
          borderRadius: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Animation Delay", "zita-blocks"),
      value: animationDelay,
      min: 1,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          animationDelay: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: percentColor,
      onChange: function onChange(color) {
        return setAttributes({
          percentColor: color
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Background Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
      value: percentBgColor,
      onChange: function onChange(color) {
        return setAttributes({
          percentBgColor: color
        });
      }
    }))), wp.element.createElement("div", {
      className: "thk-progress-bar-wrapper"
    }, wp.element.createElement("div", {
      className: "zita-linear-progress-bar"
    }, wp.element.createElement("div", {
      className: "txt-section",
      style: {
        fontSize: titleFs,
        color: titleColor
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      value: percentTitle,
      tagName: "p",
      onChange: function onChange(e) {
        return setAttributes({
          percentTitle: e
        });
      }
    }), !titleIn && wp.element.createElement("span", {
      className: "percent_"
    }, percent, "%")), wp.element.createElement("div", {
      style: {
        backgroundColor: percentBgColor,
        height: progressHeight + "px",
        borderRadius: borderRadius + "px"
      },
      className: "line_"
    }, wp.element.createElement("div", {
      style: {
        width: percent + "%",
        backgroundColor: percentColor
      },
      className: "line-inner_"
    }, titleIn && wp.element.createElement("span", {
      className: "percent_"
    }, percent, "%")))))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var progressHeight = attributes.progressHeight,
        percent = attributes.percent,
        percentTitle = attributes.percentTitle,
        titleIn = attributes.titleIn,
        titleFs = attributes.titleFs,
        titleFf = attributes.titleFf,
        titleColor = attributes.titleColor,
        percentColor = attributes.percentColor,
        percentBgColor = attributes.percentBgColor,
        borderRadius = attributes.borderRadius,
        animationDelay = attributes.animationDelay;
    return wp.element.createElement("div", {
      className: "thk-progress-bar-wrapper"
    }, wp.element.createElement("div", {
      className: "zita-linear-progress-bar front_",
      percent: percent,
      delay: animationDelay
    }, wp.element.createElement("div", {
      className: "txt-section",
      style: {
        fontSize: titleFs,
        color: titleColor
      }
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
      value: percentTitle,
      tagName: "p"
    }), !titleIn && wp.element.createElement("span", {
      className: "percent_"
    })), wp.element.createElement("div", {
      style: {
        backgroundColor: percentBgColor,
        height: progressHeight + "px",
        borderRadius: borderRadius + "px"
      },
      className: "line_"
    }, wp.element.createElement("div", {
      style: {
        backgroundColor: percentColor
      },
      className: "line-inner_"
    }, titleIn && wp.element.createElement("span", {
      className: "percent_"
    })))));
  }
});

/***/ }),

/***/ "./src/blocks/service-section/editor.scss":
/*!************************************************!*\
  !*** ./src/blocks/service-section/editor.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/service-section/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/service-section/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parent */ "./src/blocks/service-section/parent.js");
/* harmony import */ var _block_assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-assets/icons */ "./src/blocks/block-assets/icons.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/service-section/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _block_assets_font_family__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block-assets/font-family */ "./src/blocks/block-assets/font-family.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var attrSave = {
  image: {
    type: "string",
    default: "icon"
  },
  imageWidth: {
    type: "number",
    default: 30
  },
  imageUrl: {
    type: "string",
    default: plugin_url.url + "assets/img/image2.jpg"
  },
  imageBorderRadius: {
    type: "number",
    default: 0
  },
  imagePadding: {
    type: "number",
    default: 0
  },
  title: {
    type: "string",
    default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Add Title", "zita-blocks")
  },
  titleFontSize: {
    type: "number",
    default: "21"
  },
  titleColor: {
    type: "string",
    default: "#ffa600"
  },
  titleFF: {
    type: "string"
  },
  description: {
    type: "string",
    default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Add Service Description", "zita-blocks")
  },
  descriptionFontSize: {
    type: "number",
    default: "21"
  },
  descriptionColor: {
    type: "string"
  },
  descriptionFF: {
    type: "string",
    default: "Arimo"
  },
  containerBgColor: {
    type: "string",
    default: "#EEF6F9"
  },
  containerBorder: {
    type: "boolean",
    default: false
  },
  containerBorderWidth: {
    type: "number",
    default: 2
  },
  containerBorderRadius: {
    type: "number",
    default: 3
  },
  containerBorderColor: {
    type: "string",
    default: "black"
  },
  containerSpace: {
    type: "number",
    default: 0
  },
  //   icon
  iconClass: {
    type: "string",
    default: "fas fa-coffee"
  },
  iconFontsize: {
    type: "number",
    default: "40"
  },
  iconColor: {
    type: "string",
    default: "#ffa600"
  },
  iconBgColor: {
    type: "string"
  },
  iconBorder: {
    type: "boolean",
    default: true
  },
  iconBorderWidth: {
    type: "number",
    default: 2
  },
  iconBorderRadius: {
    type: "number",
    default: 50
  },
  iconBorderColor: {
    type: "string",
    default: "#ffa600"
  },
  iconSpace: {
    type: "number",
    default: 79
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlockType"])("zita-blocks/icon-image-content", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("icon Image content", "zita-blocks"),
  icon: "editor-insertmore",
  category: "zita-category",
  parent: ["zita-blocks/block-column-parent"],
  getEditWrapperProps: function getEditWrapperProps(attributes) {},
  keywords: ["service", "service-section"],
  attributes: attrSave,
  // example: () => {},
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var image = attributes.image,
        imageWidth = attributes.imageWidth,
        imageUrl = attributes.imageUrl,
        imagePadding = attributes.imagePadding,
        imageBorderRadius = attributes.imageBorderRadius,
        title = attributes.title,
        titleFontSize = attributes.titleFontSize,
        titleColor = attributes.titleColor,
        titleFF = attributes.titleFF,
        description = attributes.description,
        descriptionFF = attributes.descriptionFF,
        descriptionFontSize = attributes.descriptionFontSize,
        descriptionColor = attributes.descriptionColor,
        containerBgColor = attributes.containerBgColor,
        containerBorder = attributes.containerBorder,
        containerBorderWidth = attributes.containerBorderWidth,
        containerBorderRadius = attributes.containerBorderRadius,
        containerBorderColor = attributes.containerBorderColor,
        containerSpace = attributes.containerSpace,
        iconFontsize = attributes.iconFontsize,
        iconClass = attributes.iconClass,
        iconColor = attributes.iconColor,
        iconBgColor = attributes.iconBgColor,
        iconBorder = attributes.iconBorder,
        iconBorderWidth = attributes.iconBorderWidth,
        iconBorderRadius = attributes.iconBorderRadius,
        iconBorderColor = attributes.iconBorderColor,
        iconSpace = attributes.iconSpace; //icon border

    var borderStyle = iconBorder ? {
      borderWidth: iconBorderWidth + "px",
      borderStyle: "solid",
      borderColor: iconBorderColor,
      borderRadius: iconBorderRadius + "%",
      width: iconSpace + "px",
      height: iconSpace + "px"
    } : {};
    borderStyle = _objectSpread(_objectSpread({}, borderStyle), {
      backgroundColor: iconBgColor
    }); //icon border

    var imageStyle = {
      width: imageWidth + "%",
      borderRadius: imageBorderRadius + "px",
      padding: imagePadding + "px"
    };
    var containerBorderStyle = containerBorder ? {
      borderWidth: containerBorderWidth + "px",
      borderStyle: "solid",
      borderColor: containerBorderColor,
      borderRadius: containerBorderRadius + "px"
    } : {};
    containerBorderStyle = containerBgColor ? _objectSpread(_objectSpread({}, containerBorderStyle), {
      backgroundColor: containerBgColor,
      paddingTop: containerSpace + "px",
      paddingBottom: containerSpace + "px"
    }) : containerBorderStyle;

    var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
        _useState2 = _slicedToArray(_useState, 2),
        activeIconContainer = _useState2[0],
        activeIconContainerSet = _useState2[1];

    var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])(_block_assets_icons__WEBPACK_IMPORTED_MODULE_1__["default"]),
        _useState4 = _slicedToArray(_useState3, 2),
        iconList = _useState4[0],
        setIconList = _useState4[1];

    var iconReff = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      var handler = function handler(event) {
        if (!iconReff.current.contains(event.target)) {
          activeIconContainerSet(false);
        }
      };

      if (activeIconContainer) document.addEventListener("mousedown", handler);
      return function () {
        document.removeEventListener("mousedown", handler);
      };
    });

    var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
        _useState6 = _slicedToArray(_useState5, 2),
        activeFamilyContainer = _useState6[0],
        activeFamilyDrop = _useState6[1];

    var familyRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useRef"])();
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
      var handler = function handler(event) {
        if (!familyRef.current.contains(event.target)) {
          activeFamilyDrop(false);
        }
      };

      if (activeFamilyContainer) document.addEventListener("mouseup", handler);
      return function () {
        document.removeEventListener("mouseup", handler);
      };
    });
    return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Image and Icon Setting", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Choose Image Or Icon", "zita-blocks"), " ")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: image == "image" ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Icon", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Image", "zita-blocks"),
      checked: image == "image" ? true : false,
      onChange: function onChange(e) {
        setAttributes({
          image: e ? "image" : "icon"
        });
      }
    }), image == "image" && wp.element.createElement("div", {
      className: "service-image-setting"
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["MediaUpload"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Choose Image", "zita-blocks"),
      onSelect: function onSelect(e) {
        setAttributes({
          imageUrl: e.sizes.full.url
        });
      },
      value: imageUrl,
      render: function render(_ref) {
        var open = _ref.open;
        return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
          onClick: open,
          icon: "upload",
          className: "service-image-uploader editor-media-placeholder__button is-button is-default is-large"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Open Media Library", "zita-blocks"));
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Width", "zita-blocks"),
      value: imageWidth,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          imageWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Padding", "zita-blocks"),
      value: imagePadding,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          imagePadding: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Border Radius", "zita-blocks"),
      value: imageBorderRadius,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          imageBorderRadius: e
        });
      }
    })), image == "icon" && wp.element.createElement("div", {
      className: "service-icon-setting"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Choose Icon", "zita-blocks"))), wp.element.createElement("div", {
      ref: iconReff,
      className: "wpgt-radio-wrap ".concat(activeIconContainer ? "active" : "")
    }, wp.element.createElement("div", {
      className: "selected-icon",
      onClick: function onClick(e) {
        // let set__container = !activeIconContainer;
        activeIconContainerSet(true);
      }
    }, wp.element.createElement("i", {
      className: iconClass
    }), wp.element.createElement("div", {
      className: "search-container"
    }, wp.element.createElement("i", {
      className: "fas fa-search"
    }), wp.element.createElement("input", {
      type: "text",
      onChange: function onChange(e) {
        var value_ = e.target.value;

        if (value_ != "") {
          var newAr = _block_assets_icons__WEBPACK_IMPORTED_MODULE_1__["default"].filter(function (checkStr) {
            return checkStr.search(value_) != -1;
          });

          if (newAr.length) {
            setIconList(newAr);
          }
        } else {
          setIconList(_block_assets_icons__WEBPACK_IMPORTED_MODULE_1__["default"]);
        }
      }
    }))), wp.element.createElement("div", {
      className: "wpgt-radio-container",
      onChange: function onChange(e) {
        setAttributes({
          iconClass: e.target.value
        });
      }
    }, iconList.map(function (iconValue) {
      return wp.element.createElement("div", {
        className: "wpgt-radio-wrapper"
      }, wp.element.createElement("input", {
        id: "wpgt-Radio-" + iconValue,
        type: "radio",
        name: "wpgt-choose-icon",
        className: "radio-input",
        value: iconValue
      }), wp.element.createElement("label", {
        htmlFor: "wpgt-Radio-" + iconValue
      }, wp.element.createElement("i", {
        className: iconValue
      })));
    }))), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Font Size", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      value: iconFontsize,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          iconFontsize: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      onChange: function onChange(color) {
        return setAttributes({
          iconColor: color
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Background Color", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ColorPicker"], {
      onChangeComplete: function onChangeComplete(colorBg) {
        var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");
        setAttributes({
          iconBgColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: iconBorder ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Disable", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Enable", "zita-blocks"),
      checked: iconBorder,
      onChange: function onChange(e) {
        return setAttributes({
          iconBorder: e
        });
      }
    }), iconBorder && wp.element.createElement("div", {
      className: "icon-border-setting"
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Border Width", "zita-blocks"),
      value: iconBorderWidth,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          iconBorderWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Border Radius", "zita-blocks"),
      value: iconBorderRadius,
      min: 0,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          iconBorderRadius: e
        });
      }
    }), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Border Color", "zita-blocks")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      onChange: function onChange(color) {
        return setAttributes({
          iconBorderColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Icon Space", "zita-blocks"),
      value: iconSpace,
      min: 0,
      max: 200,
      onChange: function onChange(e) {
        return setAttributes({
          iconSpace: e
        });
      }
    })))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Title Settings", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Font Size", "zita-blocks"),
      value: titleFontSize,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          titleFontSize: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Color", "zita-blocks"), " ")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      value: titleColor,
      onChange: function onChange(e) {
        return setAttributes({
          titleColor: e
        });
      }
    }), wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Font Family", "zita-blocks"))), wp.element.createElement("div", {
      ref: familyRef,
      className: "font-family-drop-down ".concat(activeFamilyContainer ? "active" : "")
    }, wp.element.createElement("div", {
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer;
        activeFamilyDrop(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: titleFF
      }
    }, titleFF ? titleFF : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Choose Family", "zita-blocks"))), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            titleFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    }))))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Description Settings", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Font Size", "zita-blocks"),
      value: descriptionFontSize,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          descriptionFontSize: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Color", "zita-blocks"), " ")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      value: descriptionColor,
      onChange: function onChange(e) {
        return setAttributes({
          descriptionColor: e
        });
      }
    }), wp.element.createElement("div", {
      className: "THK-font-family-wrapper"
    }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Font Family", "zita-blocks"))), wp.element.createElement("div", {
      ref: familyRef,
      className: "font-family-drop-down ".concat(activeFamilyContainer ? "active" : "")
    }, wp.element.createElement("div", {
      onClick: function onClick() {
        var applyActive = !activeFamilyContainer;
        activeFamilyDrop(applyActive);
      },
      className: "font-family-show"
    }, wp.element.createElement("span", {
      style: {
        fontFamily: descriptionFF
      }
    }, descriptionFF ? descriptionFF : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Choose Family", "zita-blocks"))), wp.element.createElement("div", {
      className: "family-items"
    }, _block_assets_font_family__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (family, key_) {
      return wp.element.createElement("span", {
        onClick: function onClick() {
          return setAttributes({
            descriptionFF: family
          });
        },
        style: {
          fontFamily: family
        }
      }, family);
    }))))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Container Settings", "zita-blocks"),
      initialOpen: false
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ColorPicker"], {
      onChangeComplete: function onChangeComplete(colorBg) {
        var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");
        setAttributes({
          containerBgColor: color
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Container Space", "zita-blocks"),
      value: containerSpace,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          containerSpace: e
        });
      }
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Border", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: containerBorder ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Disable", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Enable", "zita-blocks"),
      checked: containerBorder,
      onChange: function onChange(e) {
        return setAttributes({
          containerBorder: e
        });
      }
    }), containerBorder && wp.element.createElement("div", {
      className: "icon-border-setting"
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Border Width", "zita-blocks"),
      value: containerBorderWidth,
      min: 0,
      max: 100,
      onChange: function onChange(e) {
        return setAttributes({
          containerBorderWidth: e
        });
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Border Radius", "zita-blocks"),
      value: containerBorderRadius,
      min: 0,
      max: 50,
      onChange: function onChange(e) {
        return setAttributes({
          containerBorderRadius: e
        });
      }
    }), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Border Color", "zita-blocks")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      onChange: function onChange(color) {
        return setAttributes({
          containerBorderColor: color
        });
      }
    })))), wp.element.createElement("div", {
      className: "service-section-wrapper",
      style: containerBorderStyle
    }, wp.element.createElement("div", {
      className: "service-image-icon ".concat(image == "icon" ? "icon_" : "")
    }, image == "image" && wp.element.createElement("div", {
      className: "service-image-section"
    }, wp.element.createElement("img", {
      style: imageStyle,
      src: imageUrl
    })), image == "icon" && wp.element.createElement("div", {
      className: "icon-container",
      style: borderStyle
    }, wp.element.createElement("i", {
      style: {
        color: iconColor,
        fontSize: iconFontsize + "px"
      },
      className: iconClass
    }))), wp.element.createElement("div", {
      className: "service-title-description"
    }, wp.element.createElement("div", null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"], {
      key: "editable",
      tagName: "h1",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Service Title", "zita-blocks"),
      value: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])(title, "zita-blocks"),
      onChange: function onChange(e) {
        return setAttributes({
          title: e
        });
      },
      style: {
        color: titleColor,
        fontSize: titleFontSize + "px",
        fontFamily: titleFF
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"], {
      key: "editable",
      tagName: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])("Service Description", "zita-blocks"),
      value: description,
      onChange: function onChange(e) {
        return setAttributes({
          description: e
        });
      },
      style: {
        color: descriptionColor,
        fontSize: descriptionFontSize + "px",
        fontFamily: descriptionFF
      }
    }))))];
  },
  save: function save(props) {
    var attributes = props.attributes;
    var image = attributes.image,
        imageWidth = attributes.imageWidth,
        imageUrl = attributes.imageUrl,
        imagePadding = attributes.imagePadding,
        imageBorderRadius = attributes.imageBorderRadius,
        title = attributes.title,
        titleFontSize = attributes.titleFontSize,
        titleColor = attributes.titleColor,
        description = attributes.description,
        descriptionFontSize = attributes.descriptionFontSize,
        descriptionColor = attributes.descriptionColor,
        containerBgColor = attributes.containerBgColor,
        containerBorder = attributes.containerBorder,
        containerBorderWidth = attributes.containerBorderWidth,
        containerBorderRadius = attributes.containerBorderRadius,
        containerBorderColor = attributes.containerBorderColor,
        containerSpace = attributes.containerSpace,
        iconFontsize = attributes.iconFontsize,
        iconClass = attributes.iconClass,
        iconColor = attributes.iconColor,
        iconBgColor = attributes.iconBgColor,
        iconBorder = attributes.iconBorder,
        iconBorderWidth = attributes.iconBorderWidth,
        iconBorderRadius = attributes.iconBorderRadius,
        iconBorderColor = attributes.iconBorderColor,
        iconSpace = attributes.iconSpace; //icon border

    var borderStyle = iconBorder ? {
      borderWidth: iconBorderWidth + "px",
      borderStyle: "solid",
      borderColor: iconBorderColor,
      borderRadius: iconBorderRadius + "%",
      width: iconSpace + "px",
      height: iconSpace + "px"
    } : {};
    borderStyle = _objectSpread(_objectSpread({}, borderStyle), {
      backgroundColor: iconBgColor
    }); //icon border

    var imageStyle = {
      width: imageWidth + "%",
      borderRadius: imageBorderRadius + "px",
      padding: imagePadding + "px"
    };
    var containerBorderStyle = containerBorder ? {
      borderWidth: containerBorderWidth + "px",
      borderStyle: "solid",
      borderColor: containerBorderColor,
      borderRadius: containerBorderRadius + "px"
    } : {};
    containerBorderStyle = containerBgColor ? _objectSpread(_objectSpread({}, containerBorderStyle), {
      backgroundColor: containerBgColor,
      paddingTop: containerSpace + "px",
      paddingBottom: containerSpace + "px"
    }) : containerBorderStyle;
    return wp.element.createElement("div", {
      className: "service-section-wrapper",
      style: containerBorderStyle
    }, wp.element.createElement("div", {
      className: "service-image-icon ".concat(image == "icon" ? "icon_" : "")
    }, image == "image" && wp.element.createElement("div", {
      className: "service-image-section"
    }, wp.element.createElement("img", {
      style: imageStyle,
      src: imageUrl
    })), image == "icon" && wp.element.createElement("div", {
      className: "icon-container",
      style: borderStyle
    }, wp.element.createElement("i", {
      style: {
        color: iconColor,
        fontSize: iconFontsize + "px"
      },
      className: iconClass
    }))), wp.element.createElement("div", {
      className: "service-title-description"
    }, wp.element.createElement("div", null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
      tagName: "h1",
      value: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])(title, "zita-blocks"),
      style: {
        color: titleColor,
        fontSize: titleFontSize + "px"
      }
    }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
      tagName: "p",
      value: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])(description, "zita-blocks"),
      style: {
        color: descriptionColor,
        fontSize: descriptionFontSize + "px"
      }
    }))));
  }
});

/***/ }),

/***/ "./src/blocks/service-section/parent.js":
/*!**********************************************!*\
  !*** ./src/blocks/service-section/parent.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("zita-blocks/block-column-parent", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Service Section", "zita-blocks"),
  icon: "grid-view",
  // description: "Parent Of all Column Member",
  category: "zita-category",
  supports: {
    align: ["center", "left", "right", "wide", "full"]
  },
  attributes: {
    align: {
      type: "string",
      default: "wide"
    },
    columns: {
      type: "number",
      default: 2
    },
    fullWidth: {
      type: "string",
      default: ""
    }
  },
  // example: () => {},
  edit: function edit(props) {
    var className = props.className,
        attributes = props.attributes,
        setAttributes = props.setAttributes;
    var columns = attributes.columns,
        fullWidth = attributes.fullWidth;
    var MY_TEMPLATE = [["zita-blocks/icon-image-content"], ["zita-blocks/icon-image-content"]];
    return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Number Of Column", "zita-blocks"),
      value: columns,
      onChange: function onChange(v) {
        return setAttributes({
          columns: v
        });
      },
      min: 1,
      max: 4
    }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Column Layout", "zita-blocks"))), wp.element.createElement("div", {
      className: "column-layout-num-column"
    }, wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      value: "",
      name: "column-layout",
      id: "column-layout-box",
      onChange: function onChange() {
        return setAttributes({
          fullWidth: ""
        });
      }
    }), wp.element.createElement("label", {
      for: "column-layout-box"
    }, wp.element.createElement("img", {
      src: plugin_url.url + "assets/img/box-layout.png"
    }))), wp.element.createElement("div", null, wp.element.createElement("input", {
      type: "radio",
      value: "full-width",
      name: "column-layout",
      id: "column-layout-full",
      onChange: function onChange() {
        return setAttributes({
          fullWidth: "full-width"
        });
      }
    }), wp.element.createElement("label", {
      for: "column-layout-full"
    }, wp.element.createElement("img", {
      src: plugin_url.url + "assets/img/100percent.png"
    })))))), wp.element.createElement("div", {
      className: "".concat(className, " ").concat(fullWidth, " column-count-").concat(columns, " ")
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
      template: MY_TEMPLATE,
      allowedBlocks: ["zita-blocks/icon-image-content"]
    }))];
  },
  save: function save(props) {
    var attributes = props.attributes;
    var columns = attributes.columns,
        fullWidth = attributes.fullWidth;
    return wp.element.createElement("div", {
      className: "".concat(fullWidth, " column-count-").concat(columns, " ")
    }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
  }
});

/***/ }),

/***/ "./src/blocks/zita-block-slider/edit.js":
/*!**********************************************!*\
  !*** ./src/blocks/zita-block-slider/edit.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var bgImageWrapper = plugin_url.url + "assets/img/image2.jpg";

var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "addSlide", function () {
      var defaultArray = {
        container: {
          bgImage: bgImageWrapper,
          overlayColor: "",
          bgSize: "cover"
        },
        wrapper: {
          bgcolor: "",
          border: "",
          alignment: "left",
          spacing: "2"
        },
        title: {
          text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("This Is Title text", "zita-blocks"),
          fontSize: 17,
          color: "red"
        },
        text: {
          text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Add Description", "zita-blocks"),
          fontSize: 17,
          color: "red"
        },
        buttoneOne: {
          enable: true,
          text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button One", "zita-blocks"),
          link: "#",
          target: false,
          fontSize: "",
          color: "",
          backgroundColor: "",
          height: "",
          width: "",
          border: false,
          borderColor: "",
          borderWidth: "",
          borderRadius: ""
        },
        buttoneTwo: {
          enable: true,
          text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button Two", "zita-blocks"),
          link: "#",
          target: false,
          fontSize: "",
          color: "",
          backgroundColor: "",
          height: "",
          width: "",
          border: false,
          borderColor: "",
          borderWidth: "",
          borderRadius: ""
        }
      };
      var slides_ = _this.props.attributes.slides;

      _this.props.setAttributes({
        slides: [].concat(_toConsumableArray(slides_), [defaultArray])
      });

      _this.setState({
        selectedSlide: slides_.length
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateSlides", function (value, for_, type) {
      var slides_ = _this.props.attributes.slides;

      var newSlide = _toConsumableArray(slides_);

      newSlide[_this.state.selectedSlide][for_][type] = value;

      _this.props.setAttributes({
        slides: newSlide
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateGlobalSlide", function (value, for_, type) {
      var sliderSetting = _this.props.attributes.sliderSetting;

      var newSetting = _toConsumableArray(sliderSetting);

      if (type) {
        newSetting[0][for_][type] = value;
      } else {
        newSetting[0][for_] = value;
      }

      _this.props.setAttributes({
        sliderSetting: newSetting
      });
    });

    _this.state = {
      selectedSlide: 0,
      twoBtn: "buttoneOne",
      trigger: "linear"
    };
    return _this;
  }

  _createClass(Edit, [{
    key: "removeSlide",
    value: function removeSlide() {
      var slides_ = this.props.attributes.slides;
      var removeItem = this.state.selectedSlide;
      var afterRemove = [].concat(_toConsumableArray(slides_.slice(0, removeItem)), _toConsumableArray(slides_.slice(removeItem + 1)));
      this.props.setAttributes({
        slides: afterRemove
      });
      this.setState({
        selectedSlide: removeItem - 1 >= 0 ? removeItem - 1 : removeItem
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$attribute = this.props.attributes,
          slides = _this$props$attribute.slides,
          sliderSetting = _this$props$attribute.sliderSetting;
      var thisState = this.state;
      var stateIndex = thisState.selectedSlide;
      var currentSlide = slides[stateIndex]; // console.log(slides);
      // console.log(currentSlide);

      var activeTwoBtnState = thisState.twoBtn;
      var triggerActive = thisState.trigger;
      var buttonOneStyle = {
        fontSize: currentSlide.buttoneOne.fontSize,
        color: currentSlide.buttoneOne.color,
        backgroundColor: currentSlide.buttoneOne.backgroundColor,
        paddingTop: currentSlide.buttoneOne.height,
        paddingBottom: currentSlide.buttoneOne.height,
        paddingLeft: currentSlide.buttoneOne.width,
        paddingRight: currentSlide.buttoneOne.width
      };
      buttonOneStyle = currentSlide.buttoneOne.border ? _objectSpread(_objectSpread({}, {
        borderColor: currentSlide.buttoneOne.borderColor,
        borderWidth: currentSlide.buttoneOne.borderWidth,
        borderRadius: currentSlide.buttoneOne.borderRadius,
        borderStyle: "solid"
      }), buttonOneStyle) : buttonOneStyle;
      var buttonTwoStyle = {
        fontSize: currentSlide.buttoneTwo.fontSize,
        color: currentSlide.buttoneTwo.color,
        backgroundColor: currentSlide.buttoneTwo.backgroundColor,
        paddingTop: currentSlide.buttoneTwo.height,
        paddingBottom: currentSlide.buttoneTwo.height,
        paddingLeft: currentSlide.buttoneTwo.width,
        paddingRight: currentSlide.buttoneTwo.width
      };
      buttonTwoStyle = currentSlide.buttoneTwo.border ? _objectSpread(_objectSpread({}, {
        borderColor: currentSlide.buttoneTwo.borderColor,
        borderWidth: currentSlide.buttoneTwo.borderWidth,
        borderRadius: currentSlide.buttoneTwo.borderRadius,
        borderStyle: "solid"
      }), buttonTwoStyle) : buttonTwoStyle;
      sliderSetting = sliderSetting[0];
      var leftRightStyle = {
        color: sliderSetting.leftRightTrigger.color,
        backgroundColor: sliderSetting.leftRightTrigger.backgroundColor,
        fontSize: sliderSetting.leftRightTrigger.fontSize
      };
      var SlideulStyle = null;

      if (sliderSetting.dimension.height) {
        SlideulStyle = {
          minHeight: sliderSetting.dimension.custom_height
        };
      }

      return [wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["InspectorControls"], null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Slider Setting", "zita-blocks"),
        initialOpen: false
      }, wp.element.createElement("p", {
        className: "block-inside"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Slider Dimension", "zita-blocks")), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Width", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.dimension.width ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Full Width", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Custom Width", "zita-blocks"),
        checked: sliderSetting.dimension.width,
        onChange: function onChange(e) {
          _this2.updateGlobalSlide(e, "dimension", "width");
        }
      }), sliderSetting.dimension.width && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Width", "zita-blocks"),
        value: sliderSetting.dimension.custom_width,
        min: 200,
        max: 1400,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "dimension", "custom_width");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Height", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.dimension.width ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Auto", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Custom Height", "zita-blocks"),
        checked: sliderSetting.dimension.height,
        onChange: function onChange(e) {
          _this2.updateGlobalSlide(e, "dimension", "height");
        }
      }), sliderSetting.dimension.height && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Height", "zita-blocks"),
        value: sliderSetting.dimension.custom_height,
        min: 360,
        max: 1000,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "dimension", "custom_height");
        }
      }), wp.element.createElement("p", {
        className: "block-inside"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Slider Effect", "zita-blocks")), wp.element.createElement("div", {
        class: "zita-switcher-button-section"
      }, wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.updateGlobalSlide("slideEffect", "sliderEffect");
        },
        className: sliderSetting.sliderEffect == "slideEffect" ? "selected" : ""
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Slide", "zita-blocks")), wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.updateGlobalSlide("fadeEffect", "sliderEffect");
        },
        className: sliderSetting.sliderEffect == "fadeEffect" ? "selected" : ""
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Fade", "zita-blocks"))), wp.element.createElement("p", {
        className: "block-inside"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Trigger", "zita-blocks")), wp.element.createElement("div", {
        class: "zita-switcher-button-section"
      }, wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            trigger: "linear"
          });
        },
        className: triggerActive == "linear" ? "selected" : ""
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Linear", "zita-blocks")), wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            trigger: "left"
          });
        },
        className: triggerActive == "left" ? "selected" : ""
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Left Right", "zita-blocks")), wp.element.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            trigger: "auto"
          });
        },
        className: triggerActive == "auto" ? "selected" : ""
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Auto", "zita-blocks"))), triggerActive == "linear" && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.linearTrigger.enable ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Disable", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Enable", "zita-blocks"),
        checked: sliderSetting.linearTrigger.enable,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "linearTrigger", "enable");
        }
      }), sliderSetting.linearTrigger.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Size", "zita-blocks"),
        value: sliderSetting.linearTrigger.fontSize,
        min: 0,
        max: 70,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "linearTrigger", "fontSize");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Color", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: sliderSetting.linearTrigger.color,
        onChangeComplete: function onChangeComplete(colorBg) {
          var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");

          _this2.updateGlobalSlide(color, "linearTrigger", "color");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Active Color", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: sliderSetting.linearTrigger.activeColor,
        onChangeComplete: function onChangeComplete(colorBg) {
          var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");

          _this2.updateGlobalSlide(color, "linearTrigger", "activeColor");
        }
      }))), triggerActive == "left" && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.leftRightTrigger.enable ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Disable", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Enable", "zita-blocks"),
        checked: sliderSetting.leftRightTrigger.enable,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "leftRightTrigger", "enable");
        }
      }), sliderSetting.leftRightTrigger.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Font Size", "zita-blocks"),
        value: sliderSetting.leftRightTrigger.fontSize,
        min: 0,
        max: 70,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "leftRightTrigger", "fontSize");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["ColorPalette"], {
        value: sliderSetting.leftRightTrigger.color,
        onChange: function onChange(color) {
          return _this2.updateGlobalSlide(color, "leftRightTrigger", "color");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Background Color", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: sliderSetting.leftRightTrigger.backgroundColor,
        onChangeComplete: function onChangeComplete(colorBg) {
          var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");

          _this2.updateGlobalSlide(color, "leftRightTrigger", "backgroundColor");
        }
      }))), triggerActive == "auto" && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: sliderSetting.autoTrigger.enable ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Disable", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Enable", "zita-blocks"),
        checked: sliderSetting.autoTrigger.enable,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "autoTrigger", "enable");
        }
      }), sliderSetting.autoTrigger.enable && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Slide Delay", "zita-blocks"),
        value: sliderSetting.autoTrigger.delay,
        min: 0,
        max: 12,
        onChange: function onChange(e) {
          return _this2.updateGlobalSlide(e, "autoTrigger", "delay");
        }
      }))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Slide Setting", "zita-blocks"),
        initialOpen: false
      }, wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Background image", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["MediaUpload"], {
        allowedType: "image",
        onSelect: function onSelect(newImage) {
          return _this2.updateSlides(newImage.sizes.full.url, "container", "bgImage");
        },
        value: currentSlide.container.bgImage,
        render: function render(_ref) {
          var open = _ref.open;
          return wp.element.createElement("div", {
            onClick: open,
            className: "zita-block-image-uploader"
          }, wp.element.createElement("div", null, wp.element.createElement("i", {
            className: "fas fa-plus"
          })), wp.element.createElement("img", {
            src: currentSlide.container.bgImage
          }));
        }
      }), wp.element.createElement("div", {
        className: "flex-section"
      }, wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Background Size", "zita-blocks")), wp.element.createElement("select", {
        value: currentSlide.container.bgSize,
        onChange: function onChange(e) {
          _this2.updateSlides(e.target.value, "container", "bgSize");
        }
      }, wp.element.createElement("option", {
        value: "auto"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Auto", "zita-blocks")), wp.element.createElement("option", {
        value: "cover"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Cover", "zita-blocks")), wp.element.createElement("option", {
        value: "contain"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Contain", "zita-blocks")))), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Overlay Color", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: currentSlide.container.overlayColor,
        onChangeComplete: function onChangeComplete(colorBg) {
          var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");

          _this2.updateSlides(color, "container", "overlayColor");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Content Alignment", "zita-blocks"))), wp.element.createElement("div", {
        className: "zita-alignment"
      }, wp.element.createElement("div", null, wp.element.createElement("span", {
        onClick: function onClick() {
          _this2.updateSlides("left", "wrapper", "alignment");
        },
        className: "dashicons dashicons-editor-alignleft ".concat(currentSlide.wrapper.alignment == "left" ? "active" : "")
      })), wp.element.createElement("div", null, wp.element.createElement("span", {
        onClick: function onClick() {
          _this2.updateSlides("center", "wrapper", "alignment");
        },
        className: "dashicons dashicons-editor-aligncenter ".concat(currentSlide.wrapper.alignment == "center" ? "active" : "")
      })), wp.element.createElement("div", null, wp.element.createElement("span", {
        onClick: function onClick() {
          _this2.updateSlides("right", "wrapper", "alignment");
        },
        className: "dashicons dashicons-editor-alignright ".concat(currentSlide.wrapper.alignment == "right" ? "active" : "")
      })))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Text Setting", "zita-blocks"),
        initialOpen: false
      }, wp.element.createElement("p", {
        className: "block-inside"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Header Setting", "zita-blocks")), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Font Size", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        value: currentSlide.title.fontSize,
        min: 0,
        max: 100,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, "title", "fontSize");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["ColorPalette"], {
        value: currentSlide.title.color,
        onChange: function onChange(color) {
          return _this2.updateSlides(color, "title", "color");
        }
      }), wp.element.createElement("p", {
        className: "block-inside"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Description Setting", "zita-blocks")), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Font Size", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        value: currentSlide.text.fontSize,
        min: 0,
        max: 100,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, "text", "fontSize");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Color", "zita-blocks"))), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["ColorPalette"], {
        value: currentSlide.text.color,
        onChange: function onChange(color) {
          return _this2.updateSlides(color, "text", "color");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Text Vertical Space", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        value: currentSlide.wrapper.spacing,
        min: 0,
        max: 30,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, "wrapper", "spacing");
        }
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button Setting", "zita-blocks"),
        initialOpen: false
      }, wp.element.createElement("div", {
        className: "zita-switcher-button-section"
      }, wp.element.createElement("span", {
        className: activeTwoBtnState == "buttoneOne" ? "selected" : "",
        onClick: function onClick() {
          _this2.setState({
            twoBtn: "buttoneOne"
          });
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button 1", "zita-blocks")), wp.element.createElement("span", {
        className: activeTwoBtnState == "buttoneTwo" ? "selected" : "",
        onClick: function onClick() {
          _this2.setState({
            twoBtn: "buttoneTwo"
          });
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button 2", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: currentSlide[activeTwoBtnState].enable ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Disable", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Enable", "zita-blocks"),
        checked: currentSlide[activeTwoBtnState].enable,
        onChange: function onChange(e) {
          _this2.updateSlides(e, activeTwoBtnState, "enable");
        }
      }), currentSlide[activeTwoBtnState].enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Font Size", "zita-blocks"),
        value: currentSlide[activeTwoBtnState].fontSize,
        min: 0,
        max: 70,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, activeTwoBtnState, "fontSize");
        }
      }), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Color", "zita-blocks")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["ColorPalette"], {
        value: currentSlide[activeTwoBtnState].color,
        onChange: function onChange(color) {
          return _this2.updateSlides(color, activeTwoBtnState, "color");
        }
      }), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Background Color", "zita-blocks")), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: currentSlide[activeTwoBtnState].backgroundColor,
        onChangeComplete: function onChangeComplete(colorBg) {
          var color = "rgba(".concat(colorBg.rgb.r, ",").concat(colorBg.rgb.g, ",").concat(colorBg.rgb.b, ",").concat(colorBg.rgb.a, ")");

          _this2.updateSlides(color, activeTwoBtnState, "backgroundColor");
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Height", "zita-blocks"),
        value: currentSlide[activeTwoBtnState].height,
        min: 0,
        max: 30,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, activeTwoBtnState, "height");
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Width", "zita-blocks"),
        value: currentSlide[activeTwoBtnState].width,
        min: 0,
        max: 30,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, activeTwoBtnState, "width");
        }
      }), wp.element.createElement("p", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Border", "zita-blocks"))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: currentSlide[activeTwoBtnState].border ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Disable", "zita-blocks") : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Enable", "zita-blocks"),
        checked: currentSlide[activeTwoBtnState].border,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, activeTwoBtnState, "border");
        }
      }), currentSlide[activeTwoBtnState].border && wp.element.createElement("div", {
        className: "icon-border-setting"
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Border Width", "zita-blocks"),
        value: currentSlide[activeTwoBtnState].borderWidth,
        min: 0,
        max: 100,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, activeTwoBtnState, "borderWidth");
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Border Radius", "zita-blocks"),
        value: currentSlide[activeTwoBtnState].borderRadius,
        min: 0,
        max: 50,
        onChange: function onChange(e) {
          return _this2.updateSlides(e, activeTwoBtnState, "borderRadius");
        }
      }), wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Border Color", "zita-blocks")), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["ColorPalette"], {
        value: currentSlide[activeTwoBtnState].borderColor,
        onChange: function onChange(color) {
          return _this2.updateSlides(color, activeTwoBtnState, "borderColor");
        }
      }))))), wp.element.createElement("div", {
        className: "zita-block-slide-wrapper"
      }, wp.element.createElement("div", {
        className: "zita-slider-bullet"
      }, wp.element.createElement("ul", {
        className: "zita-slider-ul-bullet"
      }, slides.map(function (val, index_) {
        return wp.element.createElement("li", {
          key: index_,
          className: stateIndex == index_ ? "selected_" : null
        }, wp.element.createElement("span", {
          onClick: function onClick(e) {
            _this2.setState({
              selectedSlide: index_
            });
          }
        }));
      }), slides.length < 8 && wp.element.createElement("li", {
        className: "add-item"
      }, wp.element.createElement("span", {
        onClick: function onClick() {
          _this2.addSlide();
        }
      }, wp.element.createElement("i", {
        className: "fas fa-plus"
      }))))), wp.element.createElement("div", {
        className: "zita-slider-container"
      }, sliderSetting.linearTrigger.enable && wp.element.createElement("ul", {
        className: "zita-slider-bullet-trigger"
      }, slides.map(function (val, index_) {
        var trigStyle = {
          height: sliderSetting.linearTrigger.fontSize + "px",
          width: sliderSetting.linearTrigger.fontSize + "px"
        };
        trigStyle = index_ != stateIndex ? _objectSpread(_objectSpread({}, trigStyle), {
          backgroundColor: sliderSetting.linearTrigger.color
        }) : _objectSpread(_objectSpread({}, trigStyle), {
          backgroundColor: sliderSetting.linearTrigger.activeColor
        });
        return wp.element.createElement("li", {
          className: "".concat(index_ == stateIndex ? "selected_" : "")
        }, wp.element.createElement("span", {
          style: trigStyle
        }));
      })), sliderSetting.leftRightTrigger.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("div", {
        className: "zita-slider-bullet-next-prev next"
      }, wp.element.createElement("span", {
        style: leftRightStyle
      }, wp.element.createElement("i", {
        class: "fas fa-arrow-right"
      }))), wp.element.createElement("div", {
        className: "zita-slider-bullet-next-prev prev"
      }, wp.element.createElement("span", {
        style: leftRightStyle
      }, wp.element.createElement("i", {
        class: "fas fa-arrow-left"
      })))), slides.length > 1 && wp.element.createElement("span", {
        className: "zita-remove-slide",
        onClick: function onClick(e) {
          _this2.removeSlide();
        }
      }, wp.element.createElement("i", {
        className: "fas fa-trash-alt"
      })), wp.element.createElement("ul", {
        className: "zita-slider-ul-slides",
        style: SlideulStyle
      }, slides.map(function (val, index_) {
        return wp.element.createElement("li", {
          onClick: function onClick(e) {
            _this2.setState({
              selectedSlide: index_
            });
          },
          key: index_,
          className: stateIndex == index_ ? "selected_" : null
        }, wp.element.createElement("div", {
          className: "zita-slider-wrapper"
        }, wp.element.createElement("div", {
          className: "zita-slider-container"
        }, wp.element.createElement("div", {
          className: "zita-slider-content-wrapper"
        }, wp.element.createElement("div", {
          className: "zita-slider-image-container",
          style: {
            backgroundSize: val.container.bgSize,
            backgroundImage: "url(" + val.container.bgImage + ")"
          }
        }), wp.element.createElement("div", {
          className: "zita-slider-text ".concat(val.wrapper.alignment),
          style: {
            backgroundColor: val.container.overlayColor
          }
        }, wp.element.createElement("div", {
          style: {
            marginTop: val.wrapper.spacing + "px",
            marginBottom: val.wrapper.spacing + "px"
          }
        }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"], {
          key: "editable",
          tagName: "h1",
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Service Title", "zita-blocks"),
          value: val.title.text,
          onChange: function onChange(e) {
            return _this2.updateSlides(e, "title", "text");
          },
          style: {
            fontSize: val.title.fontSize + "px",
            color: val.title.color
          }
        }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"], {
          key: "editable",
          tagName: "h2",
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Service Title", "zita-blocks"),
          value: val.text.text,
          onChange: function onChange(e) {
            return _this2.updateSlides(e, "text", "text");
          },
          style: {
            fontSize: val.text.fontSize + "px",
            color: val.text.color
          }
        }), wp.element.createElement("div", {
          className: "button-container"
        }, val.buttoneOne.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"], {
          key: "editable",
          tagName: "a",
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button One", "zita-blocks"),
          value: val.buttoneOne.text,
          onChange: function onChange(e) {
            return _this2.updateSlides(e, "buttoneOne", "text");
          },
          style: buttonOneStyle
        })), val.buttoneTwo.enable && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["RichText"], {
          key: "editable",
          tagName: "a",
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button Two", "zita-blocks"),
          value: val.buttoneTwo.text,
          onChange: function onChange(e) {
            return _this2.updateSlides(e, "buttoneTwo", "text");
          },
          style: buttonTwoStyle
        }))))))));
      }))))];
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/blocks/zita-block-slider/editor.scss":
/*!**************************************************!*\
  !*** ./src/blocks/zita-block-slider/editor.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/zita-block-slider/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/zita-block-slider/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/zita-block-slider/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/zita-block-slider/edit.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var bgImageWrapper = plugin_url.url + "assets/img/image2.jpg";


var attrSave = {
  sliderSetting: {
    type: "array",
    default: [{
      dimension: {
        width: false,
        custom_width: 580,
        height: false,
        custom_height: 360
      },
      sliderEffect: "fadeEffect",
      linearTrigger: {
        enable: true,
        fontSize: 20,
        color: "rgba(231,192,192,1)",
        activeColor: "rgba(68,222,68,1)"
      },
      leftRightTrigger: {
        enable: true,
        fontSize: 20,
        color: "rgba(231,192,192,1)",
        backgroundColor: "rgb(128, 128, 128)"
      },
      autoTrigger: {
        enable: true,
        delay: 4
      }
    }]
  },
  slides: {
    type: "array",
    default: [{
      container: {
        bgImage: bgImageWrapper,
        overlayColor: "",
        bgSize: "cover"
      },
      wrapper: {
        bgcolor: "",
        border: "",
        alignment: "left",
        spacing: 2
      },
      title: {
        text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("This Is Title text", "zita-blocks"),
        fontSize: 17,
        color: "red"
      },
      text: {
        text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Add Description", "zita-blocks"),
        fontSize: 17,
        color: "red"
      },
      buttoneOne: {
        enable: true,
        text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button One", "zita-blocks"),
        link: "#",
        target: false,
        fontSize: "",
        color: "",
        backgroundColor: "",
        height: "",
        width: "",
        border: false,
        borderColor: "",
        borderWidth: "",
        borderRadius: ""
      },
      buttoneTwo: {
        enable: true,
        text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button Two", "zita-blocks"),
        link: "#",
        target: false,
        fontSize: "",
        color: "",
        backgroundColor: "",
        height: "",
        width: "",
        border: false,
        borderColor: "",
        borderWidth: "",
        borderRadius: ""
      }
    }, {
      container: {
        bgImage: bgImageWrapper,
        overlayColor: "",
        bgSize: "cover"
      },
      wrapper: {
        bgcolor: "",
        border: "",
        alignment: "left",
        spacing: 2
      },
      title: {
        text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("This Is Title text", "zita-blocks"),
        fontSize: 17,
        color: "red"
      },
      text: {
        text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Add Description", "zita-blocks"),
        fontSize: 17,
        color: "red"
      },
      buttoneOne: {
        enable: true,
        text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button One", "zita-blocks"),
        link: "#",
        target: false,
        fontSize: "",
        color: "",
        backgroundColor: "",
        height: "",
        width: "",
        border: false,
        borderColor: "",
        borderWidth: "",
        borderRadius: ""
      },
      buttoneTwo: {
        enable: true,
        text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button Two", "zita-blocks"),
        link: "#",
        target: false,
        fontSize: "",
        color: "",
        backgroundColor: "",
        height: "",
        width: "",
        border: false,
        borderColor: "",
        borderWidth: "",
        borderRadius: ""
      }
    }, {
      container: {
        bgImage: bgImageWrapper,
        overlayColor: "",
        bgSize: "cover"
      },
      wrapper: {
        bgcolor: "",
        border: "",
        alignment: "left",
        spacing: 2
      },
      title: {
        text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("This Is Title text", "zita-blocks"),
        fontSize: 17,
        color: "red"
      },
      text: {
        text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Add Description", "zita-blocks"),
        fontSize: 17,
        color: "red"
      },
      buttoneOne: {
        enable: true,
        text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button One", "zita-blocks"),
        link: "#",
        target: false,
        fontSize: "",
        color: "",
        backgroundColor: "",
        height: "",
        width: "",
        border: false,
        borderColor: "",
        borderWidth: "",
        borderRadius: ""
      },
      buttoneTwo: {
        enable: true,
        text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button Two", "zita-blocks"),
        link: "#",
        target: false,
        fontSize: "",
        color: "",
        backgroundColor: "",
        height: "",
        width: "",
        border: false,
        borderColor: "",
        borderWidth: "",
        borderRadius: ""
      }
    }]
  }
};

var elementLiSlide = function elementLiSlide(val, index_) {
  var clone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var buttonOneStyle = {};
  if (val.buttoneOne.fontSize) buttonOneStyle.fontSize = val.buttoneOne.fontSize;
  if (val.buttoneOne.color) buttonOneStyle.color = val.buttoneOne.color;
  if (val.buttoneOne.backgroundColor) buttonOneStyle.backgroundColor = val.buttoneOne.backgroundColor;

  if (val.buttoneOne.height) {
    buttonOneStyle.paddingBottom = val.buttoneOne.height;
    buttonOneStyle.paddingTop = val.buttoneOne.height;
  }

  if (val.buttoneOne.width) {
    buttonOneStyle.paddingLeft = val.buttoneOne.width;
    buttonOneStyle.paddingRight = val.buttoneOne.width;
  }

  buttonOneStyle = val.buttoneOne.border ? _objectSpread(_objectSpread({}, {
    borderColor: val.buttoneOne.borderColor,
    borderWidth: val.buttoneOne.borderWidth,
    borderRadius: val.buttoneOne.borderRadius,
    borderStyle: "solid"
  }), buttonOneStyle) : buttonOneStyle;
  var buttonTwoStyle = {};
  if (val.buttoneTwo.fontSize) buttonTwoStyle.fontSize = val.buttoneTwo.fontSize;
  if (val.buttoneTwo.color) buttonTwoStyle.color = val.buttoneTwo.color;
  if (val.buttoneTwo.backgroundColor) buttonTwoStyle.backgroundColor = val.buttoneTwo.backgroundColor;

  if (val.buttoneTwo.height) {
    buttonTwoStyle.paddingBottom = val.buttoneTwo.height;
    buttonTwoStyle.paddingTop = val.buttoneTwo.height;
  }

  if (val.buttoneTwo.width) {
    buttonTwoStyle.paddingLeft = val.buttoneTwo.width;
    buttonTwoStyle.paddingRight = val.buttoneTwo.width;
  }

  buttonTwoStyle = val.buttoneTwo.border ? _objectSpread(_objectSpread({}, {
    borderColor: val.buttoneTwo.borderColor,
    borderWidth: val.buttoneTwo.borderWidth,
    borderRadius: val.buttoneTwo.borderRadius,
    borderStyle: "solid"
  }), buttonTwoStyle) : buttonTwoStyle;
  return wp.element.createElement("li", {
    key: index_,
    className: "slides ".concat(index_ == 0 ? "selected_" : "", " ").concat(clone ? clone : "")
  }, wp.element.createElement("div", {
    className: "zita-slider-wrapper"
  }, wp.element.createElement("div", {
    className: "zita-slider-container"
  }, wp.element.createElement("div", {
    className: "zita-slider-content-wrapper"
  }, wp.element.createElement("div", {
    className: "zita-slider-image-container",
    style: {
      backgroundSize: "cover",
      backgroundImage: "url(" + val.container.bgImage + ")"
    }
  }), wp.element.createElement("div", {
    className: "zita-slider-text ".concat(val.wrapper.alignment),
    style: {
      backgroundColor: val.container.overlayColor
    }
  }, wp.element.createElement("div", {
    style: val.wrapper.spacing && {
      marginTop: val.wrapper.spacing + "px",
      marginBottom: val.wrapper.spacing + "px"
    }
  }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
    tagName: "h1",
    value: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])(val.title.text, "zita-blocks"),
    style: {
      fontSize: val.title.fontSize + "px",
      color: val.title.color
    }
  }), wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
    tagName: "h2",
    value: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])(val.text.text, "zita-blocks"),
    style: {
      fontSize: val.text.fontSize + "px",
      color: val.text.color
    }
  }), wp.element.createElement("div", {
    className: "button-container"
  }, val.buttoneOne.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
    tagName: "a",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button One", "zita-blocks"),
    value: val.buttoneOne.text,
    style: buttonOneStyle
  })), val.buttoneTwo.enable && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"].Content, {
    tagName: "a",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Button One", "zita-blocks"),
    value: val.buttoneTwo.text,
    style: buttonTwoStyle
  }))))))));
};

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("zita-blocks/slide", {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Slider", "zita-blocks"),
  icon: "editor-code",
  category: "zita-category",
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var sliderSetting = attributes.sliderSetting;
    var sliderWidth = sliderSetting[0].dimension;
    var attr_ = {
      "data-align": "full"
    };

    if (sliderWidth.width && sliderWidth.custom_width) {
      attr_ = _objectSpread(_objectSpread({}, attr_), {
        style: {
          maxWidth: sliderWidth.custom_width + "px"
        }
      });
    }

    return attr_;
  },
  keywords: ["slider", "slider section"],
  attributes: attrSave,
  example: function example() {},
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save(props) {
    var _props$attributes = props.attributes,
        slides = _props$attributes.slides,
        sliderSetting = _props$attributes.sliderSetting;
    sliderSetting = sliderSetting[0];
    var leftRightStyle = {
      color: sliderSetting.leftRightTrigger.color,
      backgroundColor: sliderSetting.leftRightTrigger.backgroundColor,
      fontSize: sliderSetting.leftRightTrigger.fontSize
    };
    var trigStyle = "height: ".concat(sliderSetting.linearTrigger.fontSize, "px;width:").concat(sliderSetting.linearTrigger.fontSize, "px;background-color: ").concat(sliderSetting.linearTrigger.color, ";");
    var trigStyleObj = {
      height: sliderSetting.linearTrigger.fontSize + "px",
      width: sliderSetting.linearTrigger.fontSize + "px",
      backgroundColor: sliderSetting.linearTrigger.color
    };
    var sliderSettingJson = {};
    if (sliderSetting.dimension.width) sliderSettingJson = _objectSpread(_objectSpread({}, sliderSettingJson), {
      width: sliderSetting.dimension.custom_width
    });
    if (sliderSetting.dimension.height) sliderSettingJson = _objectSpread(_objectSpread({}, sliderSettingJson), {
      height: sliderSetting.dimension.custom_height
    });
    sliderSettingJson = JSON.stringify(sliderSettingJson);
    return wp.element.createElement("div", {
      className: "zita-block-slide-wrapper"
    }, wp.element.createElement("div", {
      className: "zita-slider-container",
      sliderDelay: sliderSetting.autoTrigger.delay > 0 && sliderSetting.autoTrigger.enable ? sliderSetting.autoTrigger.delay : 0
    }, sliderSetting.linearTrigger.enable && wp.element.createElement("ul", {
      className: "zita-slider-bullet-trigger",
      "active-color": sliderSetting.linearTrigger.activeColor,
      childStyle: trigStyle
    }, slides.map(function (val, index_) {
      return wp.element.createElement("li", {
        className: "".concat(index_ == 0 ? "selected_" : "")
      }, wp.element.createElement("span", {
        style: trigStyleObj
      }));
    })), sliderSetting.leftRightTrigger.enable && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("div", {
      className: "zita-slider-bullet-next-prev next"
    }, wp.element.createElement("span", {
      style: leftRightStyle
    }, wp.element.createElement("i", {
      class: "fas fa-arrow-right"
    }))), wp.element.createElement("div", {
      className: "zita-slider-bullet-next-prev prev"
    }, wp.element.createElement("span", {
      style: leftRightStyle
    }, wp.element.createElement("i", {
      class: "fas fa-arrow-left"
    })))), wp.element.createElement("ul", {
      className: "zita-slider-ul-slides ".concat(sliderSetting.sliderEffect),
      sliderSetting: sliderSettingJson
    }, slides.map(function (val, index_) {
      return elementLiSlide(val, index_);
    }))));
  }
});

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_icon_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/icon-block */ "./src/blocks/icon-block/index.js");
/* harmony import */ var _blocks_service_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/service-section */ "./src/blocks/service-section/index.js");
/* harmony import */ var _blocks_pricing_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/pricing-table */ "./src/blocks/pricing-table/index.js");
/* harmony import */ var _blocks_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/progress-bar */ "./src/blocks/progress-bar/index.js");
/* harmony import */ var _blocks_progress_bar_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/progress-bar-pie */ "./src/blocks/progress-bar-pie/index.js");
/* harmony import */ var _blocks_zita_block_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/zita-block-slider */ "./src/blocks/zita-block-slider/index.js");







/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["i18n"];

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map