(function () {
				const yesStorage = () => {
					let storage;
					try {
						storage = window['localStorage'];
						storage.setItem('__rbStorageSet', 'x');
						storage.removeItem('__rbStorageSet');
						return true;
					} catch {
						return false;
					}
				};
				let currentMode = null;
				const darkModeID = 'D_journopulse.io_news';
								currentMode = yesStorage() ? localStorage.getItem(darkModeID) || null : 'default';
				if (!currentMode) {
										currentMode = 'default';
					yesStorage() && localStorage.setItem(darkModeID, 'default');
									}
				document.body.setAttribute('data-theme', currentMode === 'dark' ? 'dark' : 'default');
							})();

(function() {
	window.mc4wp = window.mc4wp || {
		listeners: [],
		forms: {
			on: function(evt, cb) {
				window.mc4wp.listeners.push(
					{
						event   : evt,
						callback: cb
					}
				);
			}
		}
	}
})();

(function() {
	window.mc4wp = window.mc4wp || {
		listeners: [],
		forms: {
			on: function(evt, cb) {
				window.mc4wp.listeners.push(
					{
						event   : evt,
						callback: cb
					}
				);
			}
		}
	}
})();

(function () {
				const yesStorage = () => {
					let storage;
					try {
						storage = window['localStorage'];
						storage.setItem('__rbStorageSet', 'x');
						storage.removeItem('__rbStorageSet');
						return true;
					} catch {
						return false;
					}
				};
								const darkModeID = 'D_journopulse.io_news';
				const currentMode = yesStorage() ? (localStorage.getItem(darkModeID) || 'default') : 'default';
				const selector = currentMode === 'dark' ? '.mode-icon-dark' : '.mode-icon-default';
				const icons = document.querySelectorAll(selector);
				if (icons.length) {
					icons.forEach(icon => icon.classList.add('activated'));
				}
				
								const privacyBox = document.getElementById('rb-privacy');
				const currentPrivacy = yesStorage() ? localStorage.getItem('RubyPrivacyAllowed') || '' : '1';
				if (!currentPrivacy && privacyBox?.classList) {
					privacyBox.classList.add('activated');
				}
								const readingSize = yesStorage() ? sessionStorage.getItem('rubyResizerStep') || '' : '1';
				if (readingSize) {
					const body = document.querySelector('body');
					switch (readingSize) {
						case '2':
							body.classList.add('medium-entry-size');
							break;
						case '3':
							body.classList.add('big-entry-size');
							break;
					}
				}
			})();

(function() {function maybePrefixUrlField () {
  const value = this.value.trim()
  if (value !== '' && value.indexOf('http') !== 0) {
    this.value = 'http://' + value
  }
}

const urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]')
for (let j = 0; j < urlFields.length; j++) {
  urlFields[j].addEventListener('blur', maybePrefixUrlField)
}
})();

const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
					const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
						entries.forEach( ( entry ) => {
							if ( entry.isIntersecting ) {
								let lazyloadBackground = entry.target;
								if( lazyloadBackground ) {
									lazyloadBackground.classList.add( 'e-lazyloaded' );
								}
								lazyloadBackgroundObserver.unobserve( entry.target );
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' } );
					lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
						lazyloadBackgroundObserver.observe( lazyloadBackground );
					} );
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach( ( event ) => {
					document.addEventListener( event, lazyloadRunObserver );
				} );

var journopulseCoreParams = {"ajaxurl":"https://journopulse.io/news/wp-admin/admin-ajax.php","darkModeID":"D_journopulse.io_news","yesPersonalized":"1","cookieDomain":"journopulse.io","cookiePath":"/","mSiteID":"news"};
//# sourceURL=journopulse-core-js-extra

wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after

var wpcf7 = {"api":{"root":"https://journopulse.io/news/wp-json/","namespace":"contact-form-7/v1"},"cached":"1"};
//# sourceURL=contact-form-7-js-extra

var journopulseParams = {"sliderSpeed":"5000","sliderEffect":"slide","sliderFMode":"1","twitterName":"","highlightShares":"1","highlightShareFacebook":"1","highlightShareTwitter":"1","highlightShareReddit":"1","singleLoadNextLimit":"20","liveInterval":"600"};
//# sourceURL=journopulse-global-js-extra

var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"3.31.2","is_static":false,"experimentalFeatures":{"additional_custom_breakpoints":true,"e_element_cache":true,"home_screen":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"cloud-library":true,"e_opt_in_v4_page":true},"urls":{"assets":"https:\/\/journopulse.io\/news\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/journopulse.io\/news\/wp-admin\/admin-ajax.php","uploadUrl":"https:\/\/journopulse.io\/news\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"1b0d68fd93"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":1350,"title":"How%20to%20Take%20the%20Perfect%20Instagram%20Selfie%3A%20Dos%20%26%20Don%27ts%20%E2%80%93%20Standard%20News","excerpt":"","featuredImage":"https:\/\/journopulse.io\/news\/wp-content\/uploads\/2021\/10\/n3-1024x683.jpg"}};
//# sourceURL=elementor-frontend-js-before

/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=https://journopulse.io/news/wp-includes/js/wp-emoji-loader.min.js