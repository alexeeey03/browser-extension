;{try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5aa43c99-e95f-45be-bf6b-09640380e01f",e._sentryDebugIdIdentifier="sentry-dbid-5aa43c99-e95f-45be-bf6b-09640380e01f")}catch(e){}};
{
    let _global =
      typeof window !== 'undefined' ?
        window :
        typeof global !== 'undefined' ?
          global :
          typeof globalThis !== 'undefined' ?
            globalThis :
            typeof self !== 'undefined' ?
              self :
              {};

    _global.SENTRY_RELEASE={id:"61be332b3452177256e0e83ab06e53e65570163e"};}
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/posthog-js/dist/module.js":
/*!************************************************!*\
  !*** ./node_modules/posthog-js/dist/module.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COPY_AUTOCAPTURE_EVENT: () => (/* binding */ v),
/* harmony export */   Compression: () => (/* binding */ e),
/* harmony export */   PostHog: () => (/* binding */ mo),
/* harmony export */   SurveyQuestionBranchingType: () => (/* binding */ mn),
/* harmony export */   SurveyQuestionType: () => (/* binding */ fn),
/* harmony export */   SurveyType: () => (/* binding */ gn),
/* harmony export */   "default": () => (/* binding */ yo),
/* harmony export */   knownUnsafeEditableEvent: () => (/* binding */ g),
/* harmony export */   posthog: () => (/* binding */ yo),
/* harmony export */   severityLevels: () => (/* binding */ f)
/* harmony export */ });
var e,t="undefined"!=typeof window?window:void 0,i="undefined"!=typeof globalThis?globalThis:t,r=Array.prototype,s=r.forEach,n=r.indexOf,o=null==i?void 0:i.navigator,a=null==i?void 0:i.document,l=null==i?void 0:i.location,u=null==i?void 0:i.fetch,c=null!=i&&i.XMLHttpRequest&&"withCredentials"in new i.XMLHttpRequest?i.XMLHttpRequest:void 0,d=null==i?void 0:i.AbortController,h=null==o?void 0:o.userAgent,_=null!=t?t:{},p={DEBUG:!1,LIB_VERSION:"1.208.0"},v="$copy_autocapture",g=["$snapshot","$pageview","$pageleave","$set","survey dismissed","survey sent","survey shown","$identify","$groupidentify","$create_alias","$$client_ingestion_warning","$web_experiment_applied","$feature_enrollment_update","$feature_flag_called"];!function(e){e.GZipJS="gzip-js",e.Base64="base64"}(e||(e={}));var f=["fatal","error","warning","log","info","debug"];function m(e,t){return-1!==e.indexOf(t)}var b=function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},y=function(e){return e.replace(/^\$/,"")};var w=Array.isArray,S=Object.prototype,E=S.hasOwnProperty,k=S.toString,x=w||function(e){return"[object Array]"===k.call(e)},I=e=>"function"==typeof e,C=e=>e===Object(e)&&!x(e),P=e=>{if(C(e)){for(var t in e)if(E.call(e,t))return!1;return!0}return!1},R=e=>void 0===e,F=e=>"[object String]"==k.call(e),T=e=>F(e)&&0===e.trim().length,$=e=>null===e,M=e=>R(e)||$(e),O=e=>"[object Number]"==k.call(e),L=e=>"[object Boolean]"===k.call(e),A=e=>e instanceof FormData,D=e=>m(g,e),N=e=>{var i={_log:function(i){if(t&&(p.DEBUG||_.POSTHOG_DEBUG)&&!R(t.console)&&t.console){for(var r=("__rrweb_original__"in t.console[i]?t.console[i].__rrweb_original__:t.console[i]),s=arguments.length,n=new Array(s>1?s-1:0),o=1;o<s;o++)n[o-1]=arguments[o];r(e,...n)}},info:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];i._log("log",...t)},warn:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];i._log("warn",...t)},error:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];i._log("error",...t)},critical:function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];console.error(e,...i)},uninitializedWarning:e=>{i.error("You must initialize PostHog before calling ".concat(e))},createLogger:t=>N("".concat(e," ").concat(t))};return i},q=N("[PostHog.js]"),B=q.createLogger,H=B("[ExternalScriptsLoader]"),U=(e,t,i)=>{if(e.config.disable_external_dependency_loading)return H.warn("".concat(t," was requested but loading of external scripts is disabled.")),i("Loading of external scripts is disabled");var r=()=>{if(!a)return i("document not found");var r=a.createElement("script");if(r.type="text/javascript",r.crossOrigin="anonymous",r.src=t,r.onload=e=>i(void 0,e),r.onerror=e=>i(e),e.config.prepare_external_dependency_script&&(r=e.config.prepare_external_dependency_script(r)),!r)return i("prepare_external_dependency_script returned null");var s,n=a.querySelectorAll("body > script");n.length>0?null===(s=n[0].parentNode)||void 0===s||s.insertBefore(r,n[0]):a.body.appendChild(r)};null!=a&&a.body?r():null==a||a.addEventListener("DOMContentLoaded",r)};function z(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function j(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?z(Object(i),!0).forEach((function(t){W(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):z(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function W(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function V(e,t){if(null==e)return{};var i,r,s=function(e,t){if(null==e)return{};var i,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}_.__PosthogExtensions__=_.__PosthogExtensions__||{},_.__PosthogExtensions__.loadExternalDependency=(e,t,i)=>{var r="/static/".concat(t,".js")+"?v=".concat(e.version);if("remote-config"===t&&(r="/array/".concat(e.config.token,"/config.js")),"toolbar"===t){var s=3e5,n=Math.floor(Date.now()/s)*s;r="".concat(r,"&t=").concat(n)}var o=e.requestRouter.endpointFor("assets",r);U(e,o,i)},_.__PosthogExtensions__.loadSiteApp=(e,t,i)=>{var r=e.requestRouter.endpointFor("api",t);U(e,r,i)};var G={};function J(e,t,i){if(x(e))if(s&&e.forEach===s)e.forEach(t,i);else if("length"in e&&e.length===+e.length)for(var r=0,n=e.length;r<n;r++)if(r in e&&t.call(i,e[r],r)===G)return}function Y(e,t,i){if(!M(e)){if(x(e))return J(e,t,i);if(A(e)){for(var r of e.entries())if(t.call(i,r[1],r[0])===G)return}else for(var s in e)if(E.call(e,s)&&t.call(i,e[s],s)===G)return}}var K=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return J(i,(function(t){for(var i in t)void 0!==t[i]&&(e[i]=t[i])})),e},X=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return J(i,(function(t){J(t,(function(t){e.push(t)}))})),e};function Q(e){for(var t=Object.keys(e),i=t.length,r=new Array(i);i--;)r[i]=[t[i],e[t[i]]];return r}var Z=function(e){try{return e()}catch(e){return}},ee=function(e){return function(){try{for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return e.apply(this,i)}catch(e){q.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."),q.critical(e)}}},te=function(e){var t={};return Y(e,(function(e,i){F(e)&&e.length>0&&(t[i]=e)})),t};function ie(e,t){return i=e,r=e=>F(e)&&!$(t)?e.slice(0,t):e,s=new Set,function e(t,i){return t!==Object(t)?r?r(t,i):t:s.has(t)?void 0:(s.add(t),x(t)?(n=[],J(t,(t=>{n.push(e(t))}))):(n={},Y(t,((t,i)=>{s.has(t)||(n[i]=e(t,i))}))),n);var n}(i);var i,r,s}var re=function(){function e(t){return t&&(t.preventDefault=e.preventDefault,t.stopPropagation=e.stopPropagation),t}return e.preventDefault=function(){this.returnValue=!1},e.stopPropagation=function(){this.cancelBubble=!0},function(i,r,s,n,o){if(i)if(i.addEventListener&&!n)i.addEventListener(r,s,!!o);else{var a="on"+r,l=i[a];i[a]=function(i,r,s){return function(n){if(n=n||e(null==t?void 0:t.event)){var o,a=!0;I(s)&&(o=s(n));var l=r.call(i,n);return!1!==o&&!1!==l||(a=!1),a}}}(i,s,l)}else q.error("No valid element provided to register_event")}}();function se(e,t){for(var i=0;i<e.length;i++)if(t(e[i]))return e[i]}var ne="$people_distinct_id",oe="__alias",ae="__timers",le="$autocapture_disabled_server_side",ue="$heatmaps_enabled_server_side",ce="$exception_capture_enabled_server_side",de="$web_vitals_enabled_server_side",he="$dead_clicks_enabled_server_side",_e="$web_vitals_allowed_metrics",pe="$session_recording_enabled_server_side",ve="$console_log_recording_enabled_server_side",ge="$session_recording_network_payload_capture",fe="$session_recording_canvas_recording",me="$replay_sample_rate",be="$replay_minimum_duration",ye="$replay_script_config",we="$sesid",Se="$session_is_sampled",Ee="$session_recording_url_trigger_activated_session",ke="$session_recording_event_trigger_activated_session",xe="$enabled_feature_flags",Ie="$early_access_features",Ce="$stored_person_properties",Pe="$stored_group_properties",Re="$surveys",Fe="$surveys_activated",Te="$flag_call_reported",$e="$user_state",Me="$client_session_props",Oe="$capture_rate_limit",Le="$initial_campaign_params",Ae="$initial_referrer_info",De="$initial_person_info",Ne="$epp",qe="__POSTHOG_TOOLBAR__",Be="$posthog_cookieless",He=[ne,oe,"__cmpns",ae,pe,ue,we,xe,$e,Ie,Pe,Ce,Re,Te,Me,Oe,Le,Ae,Ne],Ue=B("[FeatureFlags]"),ze="$active_feature_flags",je="$override_feature_flags",We="$feature_flag_payloads",Ve=e=>{var t={};for(var[i,r]of Q(e||{}))r&&(t[i]=r);return t};class Ge{constructor(e){W(this,"_override_warning",!1),W(this,"_hasLoadedFlags",!1),W(this,"_requestInFlight",!1),W(this,"_reloadingDisabled",!1),W(this,"_additionalReloadRequested",!1),W(this,"_decideCalled",!1),W(this,"_flagsLoadedFromRemote",!1),this.instance=e,this.featureFlagEventHandlers=[]}decide(){if(this.instance.config.__preview_remote_config)this._decideCalled=!0;else{var e=!this._reloadDebouncer&&(this.instance.config.advanced_disable_feature_flags||this.instance.config.advanced_disable_feature_flags_on_first_load);this._callDecideEndpoint({disableFlags:e})}}get hasLoadedFlags(){return this._hasLoadedFlags}getFlags(){return Object.keys(this.getFlagVariants())}getFlagVariants(){var e=this.instance.get_property(xe),t=this.instance.get_property(je);if(!t)return e||{};for(var i=K({},e),r=Object.keys(t),s=0;s<r.length;s++)i[r[s]]=t[r[s]];return this._override_warning||(Ue.warn(" Overriding feature flags!",{enabledFlags:e,overriddenFlags:t,finalFlags:i}),this._override_warning=!0),i}getFlagPayloads(){return this.instance.get_property(We)||{}}reloadFeatureFlags(){this._reloadingDisabled||this.instance.config.advanced_disable_feature_flags||this._reloadDebouncer||(this._reloadDebouncer=setTimeout((()=>{this._callDecideEndpoint()}),5))}clearDebouncer(){clearTimeout(this._reloadDebouncer),this._reloadDebouncer=void 0}ensureFlagsLoaded(){this._hasLoadedFlags||this._requestInFlight||this._reloadDebouncer||this.reloadFeatureFlags()}setAnonymousDistinctId(e){this.$anon_distinct_id=e}setReloadingPaused(e){this._reloadingDisabled=e}_callDecideEndpoint(t){if(this.clearDebouncer(),!this.instance.config.advanced_disable_decide)if(this._requestInFlight)this._additionalReloadRequested=!0;else{var i={token:this.instance.config.token,distinct_id:this.instance.get_distinct_id(),groups:this.instance.getGroups(),$anon_distinct_id:this.$anon_distinct_id,person_properties:this.instance.get_property(Ce),group_properties:this.instance.get_property(Pe)};(null!=t&&t.disableFlags||this.instance.config.advanced_disable_feature_flags)&&(i.disable_flags=!0),this._requestInFlight=!0,this.instance._send_request({method:"POST",url:this.instance.requestRouter.endpointFor("api","/decide/?v=3"),data:i,compression:this.instance.config.disable_compression?void 0:e.Base64,timeout:this.instance.config.feature_flag_request_timeout_ms,callback:e=>{var t,r,s=!0;(200===e.statusCode&&(this.$anon_distinct_id=void 0,s=!1),this._requestInFlight=!1,this._decideCalled)||(this._decideCalled=!0,this.instance._onRemoteConfig(null!==(r=e.json)&&void 0!==r?r:{}));i.disable_flags||(this._flagsLoadedFromRemote=!s,this.receivedFeatureFlags(null!==(t=e.json)&&void 0!==t?t:{},s),this._additionalReloadRequested&&(this._additionalReloadRequested=!1,this._callDecideEndpoint()))}})}}getFeatureFlag(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0){var i,r,s,n,o,a=this.getFlagVariants()[e],l="".concat(a),u=this.instance.get_property(Te)||{};if(t.send_event||!("send_event"in t))if(!(e in u)||!u[e].includes(l))x(u[e])?u[e].push(l):u[e]=[l],null===(i=this.instance.persistence)||void 0===i||i.register({[Te]:u}),this.instance.capture("$feature_flag_called",{$feature_flag:e,$feature_flag_response:a,$feature_flag_payload:this.getFeatureFlagPayload(e)||null,$feature_flag_bootstrapped_response:(null===(r=this.instance.config.bootstrap)||void 0===r||null===(s=r.featureFlags)||void 0===s?void 0:s[e])||null,$feature_flag_bootstrapped_payload:(null===(n=this.instance.config.bootstrap)||void 0===n||null===(o=n.featureFlagPayloads)||void 0===o?void 0:o[e])||null,$used_bootstrap_value:!this._flagsLoadedFromRemote});return a}Ue.warn('getFeatureFlag for key "'+e+"\" failed. Feature flags didn't load in time.")}getFeatureFlagPayload(e){return this.getFlagPayloads()[e]}isFeatureEnabled(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._hasLoadedFlags||this.getFlags()&&this.getFlags().length>0)return!!this.getFeatureFlag(e,t);Ue.warn('isFeatureEnabled for key "'+e+"\" failed. Feature flags didn't load in time.")}addFeatureFlagsHandler(e){this.featureFlagEventHandlers.push(e)}removeFeatureFlagsHandler(e){this.featureFlagEventHandlers=this.featureFlagEventHandlers.filter((t=>t!==e))}receivedFeatureFlags(e,t){if(this.instance.persistence){this._hasLoadedFlags=!0;var i=this.getFlagVariants(),r=this.getFlagPayloads();!function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=e.featureFlags,n=e.featureFlagPayloads;if(s)if(x(s)){var o={};if(s)for(var a=0;a<s.length;a++)o[s[a]]=!0;t&&t.register({[ze]:s,[xe]:o})}else{var l=s,u=n;e.errorsWhileComputingFlags&&(l=j(j({},i),l),u=j(j({},r),u)),t&&t.register({[ze]:Object.keys(Ve(l)),[xe]:l||{},[We]:u||{}})}}(e,this.instance.persistence,i,r),this._fireFeatureFlagsCallbacks(t)}}override(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.instance.__loaded||!this.instance.persistence)return Ue.uninitializedWarning("posthog.feature_flags.override");if(this._override_warning=t,!1===e)this.instance.persistence.unregister(je);else if(x(e)){for(var i={},r=0;r<e.length;r++)i[e[r]]=!0;this.instance.persistence.register({[je]:i})}else this.instance.persistence.register({[je]:e})}onFeatureFlags(e){if(this.addFeatureFlagsHandler(e),this._hasLoadedFlags){var{flags:t,flagVariants:i}=this._prepareFeatureFlagsForCallbacks();e(t,i)}return()=>this.removeFeatureFlagsHandler(e)}updateEarlyAccessFeatureEnrollment(e,t){var i,r=(this.instance.get_property(Ie)||[]).find((t=>t.flagKey===e)),s={["$feature_enrollment/".concat(e)]:t},n={$feature_flag:e,$feature_enrollment:t,$set:s};r&&(n.$early_access_feature_name=r.name),this.instance.capture("$feature_enrollment_update",n),this.setPersonPropertiesForFlags(s,!1);var o=j(j({},this.getFlagVariants()),{},{[e]:t});null===(i=this.instance.persistence)||void 0===i||i.register({[ze]:Object.keys(Ve(o)),[xe]:o}),this._fireFeatureFlagsCallbacks()}getEarlyAccessFeatures(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.instance.get_property(Ie);if(i&&!t)return e(i);this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/early_access_features/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{var i;if(t.json){var r=t.json.earlyAccessFeatures;return null===(i=this.instance.persistence)||void 0===i||i.register({[Ie]:r}),e(r)}}})}_prepareFeatureFlagsForCallbacks(){var e=this.getFlags(),t=this.getFlagVariants();return{flags:e.filter((e=>t[e])),flagVariants:Object.keys(t).filter((e=>t[e])).reduce(((e,i)=>(e[i]=t[i],e)),{})}}_fireFeatureFlagsCallbacks(e){var{flags:t,flagVariants:i}=this._prepareFeatureFlagsForCallbacks();this.featureFlagEventHandlers.forEach((r=>r(t,i,{errorsLoading:e})))}setPersonPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.instance.get_property(Ce)||{};this.instance.register({[Ce]:j(j({},i),e)}),t&&this.instance.reloadFeatureFlags()}resetPersonPropertiesForFlags(){this.instance.unregister(Ce)}setGroupPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this.instance.get_property(Pe)||{};0!==Object.keys(i).length&&Object.keys(i).forEach((t=>{i[t]=j(j({},i[t]),e[t]),delete e[t]})),this.instance.register({[Pe]:j(j({},i),e)}),t&&this.instance.reloadFeatureFlags()}resetGroupPropertiesForFlags(e){if(e){var t=this.instance.get_property(Pe)||{};this.instance.register({[Pe]:j(j({},t),{},{[e]:{}})})}else this.instance.unregister(Pe)}}Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Number.isInteger||(Number.isInteger=function(e){return O(e)&&isFinite(e)&&Math.floor(e)===e});var Je="0123456789abcdef";class Ye{constructor(e){if(this.bytes=e,16!==e.length)throw new TypeError("not 128-bit length")}static fromFieldsV7(e,t,i,r){if(!Number.isInteger(e)||!Number.isInteger(t)||!Number.isInteger(i)||!Number.isInteger(r)||e<0||t<0||i<0||r<0||e>0xffffffffffff||t>4095||i>1073741823||r>4294967295)throw new RangeError("invalid field value");var s=new Uint8Array(16);return s[0]=e/Math.pow(2,40),s[1]=e/Math.pow(2,32),s[2]=e/Math.pow(2,24),s[3]=e/Math.pow(2,16),s[4]=e/Math.pow(2,8),s[5]=e,s[6]=112|t>>>8,s[7]=t,s[8]=128|i>>>24,s[9]=i>>>16,s[10]=i>>>8,s[11]=i,s[12]=r>>>24,s[13]=r>>>16,s[14]=r>>>8,s[15]=r,new Ye(s)}toString(){for(var e="",t=0;t<this.bytes.length;t++)e=e+Je.charAt(this.bytes[t]>>>4)+Je.charAt(15&this.bytes[t]),3!==t&&5!==t&&7!==t&&9!==t||(e+="-");if(36!==e.length)throw new Error("Invalid UUIDv7 was generated");return e}clone(){return new Ye(this.bytes.slice(0))}equals(e){return 0===this.compareTo(e)}compareTo(e){for(var t=0;t<16;t++){var i=this.bytes[t]-e.bytes[t];if(0!==i)return Math.sign(i)}return 0}}class Ke{constructor(){W(this,"timestamp",0),W(this,"counter",0),W(this,"random",new Ze)}generate(){var e=this.generateOrAbort();if(R(e)){this.timestamp=0;var t=this.generateOrAbort();if(R(t))throw new Error("Could not generate UUID after timestamp reset");return t}return e}generateOrAbort(){var e=Date.now();if(e>this.timestamp)this.timestamp=e,this.resetCounter();else{if(!(e+1e4>this.timestamp))return;this.counter++,this.counter>4398046511103&&(this.timestamp++,this.resetCounter())}return Ye.fromFieldsV7(this.timestamp,Math.trunc(this.counter/Math.pow(2,30)),this.counter&Math.pow(2,30)-1,this.random.nextUint32())}resetCounter(){this.counter=1024*this.random.nextUint32()+(1023&this.random.nextUint32())}}var Xe,Qe=e=>{if("undefined"!=typeof UUIDV7_DENY_WEAK_RNG&&UUIDV7_DENY_WEAK_RNG)throw new Error("no cryptographically strong RNG available");for(var t=0;t<e.length;t++)e[t]=65536*Math.trunc(65536*Math.random())+Math.trunc(65536*Math.random());return e};t&&!R(t.crypto)&&crypto.getRandomValues&&(Qe=e=>crypto.getRandomValues(e));class Ze{constructor(){W(this,"buffer",new Uint32Array(8)),W(this,"cursor",1/0)}nextUint32(){return this.cursor>=this.buffer.length&&(Qe(this.buffer),this.cursor=0),this.buffer[this.cursor++]}}var et=()=>tt().toString(),tt=()=>(Xe||(Xe=new Ke)).generate(),it="Thu, 01 Jan 1970 00:00:00 GMT",rt="";var st=/[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;function nt(e,t){if(t){var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;if(rt)return rt;if(!t)return"";if(["localhost","127.0.0.1"].includes(e))return"";for(var i=e.split("."),r=Math.min(i.length,8),s="dmn_chk_"+et(),n=new RegExp("(^|;)\\s*"+s+"=1");!rt&&r--;){var o=i.slice(r).join("."),l=s+"=1;domain=."+o;t.cookie=l,n.test(t.cookie)&&(t.cookie=l+";expires="+it,rt=o)}return rt}(e);if(!i){var r=(e=>{var t=e.match(st);return t?t[0]:""})(e);r!==i&&q.info("Warning: cookie subdomain discovery mismatch",r,i),i=r}return i?"; domain=."+i:""}return""}var ot={is_supported:()=>!!a,error:function(e){q.error("cookieStore error: "+e)},get:function(e){if(a){try{for(var t=e+"=",i=a.cookie.split(";").filter((e=>e.length)),r=0;r<i.length;r++){for(var s=i[r];" "==s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(t))return decodeURIComponent(s.substring(t.length,s.length))}}catch(e){}return null}},parse:function(e){var t;try{t=JSON.parse(ot.get(e))||{}}catch(e){}return t},set:function(e,t,i,r,s){if(a)try{var n="",o="",l=nt(a.location.hostname,r);if(i){var u=new Date;u.setTime(u.getTime()+24*i*60*60*1e3),n="; expires="+u.toUTCString()}s&&(o="; secure");var c=e+"="+encodeURIComponent(JSON.stringify(t))+n+"; SameSite=Lax; path=/"+l+o;return c.length>3686.4&&q.warn("cookieStore warning: large cookie, len="+c.length),a.cookie=c,c}catch(e){return}},remove:function(e,t){try{ot.set(e,"",-1,t)}catch(e){return}}},at=null,lt={is_supported:function(){if(!$(at))return at;var e=!0;if(R(t))e=!1;else try{var i="__mplssupport__";lt.set(i,"xyz"),'"xyz"'!==lt.get(i)&&(e=!1),lt.remove(i)}catch(t){e=!1}return e||q.error("localStorage unsupported; falling back to cookie store"),at=e,e},error:function(e){q.error("localStorage error: "+e)},get:function(e){try{return null==t?void 0:t.localStorage.getItem(e)}catch(e){lt.error(e)}return null},parse:function(e){try{return JSON.parse(lt.get(e))||{}}catch(e){}return null},set:function(e,i){try{null==t||t.localStorage.setItem(e,JSON.stringify(i))}catch(e){lt.error(e)}},remove:function(e){try{null==t||t.localStorage.removeItem(e)}catch(e){lt.error(e)}}},ut=["distinct_id",we,Se,Ne,De],ct=j(j({},lt),{},{parse:function(e){try{var t={};try{t=ot.parse(e)||{}}catch(e){}var i=K(t,JSON.parse(lt.get(e)||"{}"));return lt.set(e,i),i}catch(e){}return null},set:function(e,t,i,r,s,n){try{lt.set(e,t,void 0,void 0,n);var o={};ut.forEach((e=>{t[e]&&(o[e]=t[e])})),Object.keys(o).length&&ot.set(e,o,i,r,s,n)}catch(e){lt.error(e)}},remove:function(e,i){try{null==t||t.localStorage.removeItem(e),ot.remove(e,i)}catch(e){lt.error(e)}}}),dt={},ht={is_supported:function(){return!0},error:function(e){q.error("memoryStorage error: "+e)},get:function(e){return dt[e]||null},parse:function(e){return dt[e]||null},set:function(e,t){dt[e]=t},remove:function(e){delete dt[e]}},_t=null,pt={is_supported:function(){if(!$(_t))return _t;if(_t=!0,R(t))_t=!1;else try{var e="__support__";pt.set(e,"xyz"),'"xyz"'!==pt.get(e)&&(_t=!1),pt.remove(e)}catch(e){_t=!1}return _t},error:function(e){q.error("sessionStorage error: ",e)},get:function(e){try{return null==t?void 0:t.sessionStorage.getItem(e)}catch(e){pt.error(e)}return null},parse:function(e){try{return JSON.parse(pt.get(e))||null}catch(e){}return null},set:function(e,i){try{null==t||t.sessionStorage.setItem(e,JSON.stringify(i))}catch(e){pt.error(e)}},remove:function(e){try{null==t||t.sessionStorage.removeItem(e)}catch(e){pt.error(e)}}},vt=["localhost","127.0.0.1"],gt=e=>{var t=null==a?void 0:a.createElement("a");return R(t)?null:(t.href=e,t)},ft=function(e,t){return!!function(e){try{new RegExp(e)}catch(e){return!1}return!0}(t)&&new RegExp(t).test(e)},mt=function(e){var t,i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",s=[];return Y(e,(function(e,r){R(e)||R(r)||"undefined"===r||(t=encodeURIComponent((e=>e instanceof File)(e)?e.name:e.toString()),i=encodeURIComponent(r),s[s.length]=i+"="+t)})),s.join(r)},bt=function(e,t){for(var i,r=((e.split("#")[0]||"").split("?")[1]||"").split("&"),s=0;s<r.length;s++){var n=r[s].split("=");if(n[0]===t){i=n;break}}if(!x(i)||i.length<2)return"";var o=i[1];try{o=decodeURIComponent(o)}catch(e){q.error("Skipping decoding for malformed query param: "+o)}return o.replace(/\+/g," ")},yt=function(e,t,i){if(!e||!t||!t.length)return e;for(var r=e.split("#"),s=r[0]||"",n=r[1],o=s.split("?"),a=o[1],l=o[0],u=(a||"").split("&"),c=[],d=0;d<u.length;d++){var h=u[d].split("=");x(h)&&(t.includes(h[0])?c.push(h[0]+"="+i):c.push(u[d]))}var _=l;return null!=a&&(_+="?"+c.join("&")),null!=n&&(_+="#"+n),_},wt=function(e,t){var i=e.match(new RegExp(t+"=([^&]*)"));return i?i[1]:null},St="Mobile",Et="iOS",kt="Android",xt="Tablet",It=kt+" "+xt,Ct="iPad",Pt="Apple",Rt=Pt+" Watch",Ft="Safari",Tt="BlackBerry",$t="Samsung",Mt=$t+"Browser",Ot=$t+" Internet",Lt="Chrome",At=Lt+" OS",Dt=Lt+" "+Et,Nt="Internet Explorer",qt=Nt+" "+St,Bt="Opera",Ht=Bt+" Mini",Ut="Edge",zt="Microsoft "+Ut,jt="Firefox",Wt=jt+" "+Et,Vt="Nintendo",Gt="PlayStation",Jt="Xbox",Yt=kt+" "+St,Kt=St+" "+Ft,Xt="Windows",Qt=Xt+" Phone",Zt="Nokia",ei="Ouya",ti="Generic",ii=ti+" "+St.toLowerCase(),ri=ti+" "+xt.toLowerCase(),si="Konqueror",ni="(\\d+(\\.\\d+)?)",oi=new RegExp("Version/"+ni),ai=new RegExp(Jt,"i"),li=new RegExp(Gt+" \\w+","i"),ui=new RegExp(Vt+" \\w+","i"),ci=new RegExp(Tt+"|PlayBook|BB10","i"),di={"NT3.51":"NT 3.11","NT4.0":"NT 4.0","5.0":"2000",5.1:"XP",5.2:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1",6.4:"10","10.0":"10"};var hi=(e,t)=>t&&m(t,Pt)||function(e){return m(e,Ft)&&!m(e,Lt)&&!m(e,kt)}(e),_i=function(e,t){return t=t||"",m(e," OPR/")&&m(e,"Mini")?Ht:m(e," OPR/")?Bt:ci.test(e)?Tt:m(e,"IE"+St)||m(e,"WPDesktop")?qt:m(e,Mt)?Ot:m(e,Ut)||m(e,"Edg/")?zt:m(e,"FBIOS")?"Facebook "+St:m(e,"UCWEB")||m(e,"UCBrowser")?"UC Browser":m(e,"CriOS")?Dt:m(e,"CrMo")||m(e,Lt)?Lt:m(e,kt)&&m(e,Ft)?Yt:m(e,"FxiOS")?Wt:m(e.toLowerCase(),si.toLowerCase())?si:hi(e,t)?m(e,St)?Kt:Ft:m(e,jt)?jt:m(e,"MSIE")||m(e,"Trident/")?Nt:m(e,"Gecko")?jt:""},pi={[qt]:[new RegExp("rv:"+ni)],[zt]:[new RegExp(Ut+"?\\/"+ni)],[Lt]:[new RegExp("("+Lt+"|CrMo)\\/"+ni)],[Dt]:[new RegExp("CriOS\\/"+ni)],"UC Browser":[new RegExp("(UCBrowser|UCWEB)\\/"+ni)],[Ft]:[oi],[Kt]:[oi],[Bt]:[new RegExp("(Opera|OPR)\\/"+ni)],[jt]:[new RegExp(jt+"\\/"+ni)],[Wt]:[new RegExp("FxiOS\\/"+ni)],[si]:[new RegExp("Konqueror[:/]?"+ni,"i")],[Tt]:[new RegExp(Tt+" "+ni),oi],[Yt]:[new RegExp("android\\s"+ni,"i")],[Ot]:[new RegExp(Mt+"\\/"+ni)],[Nt]:[new RegExp("(rv:|MSIE )"+ni)],Mozilla:[new RegExp("rv:"+ni)]},vi=[[new RegExp(Jt+"; "+Jt+" (.*?)[);]","i"),e=>[Jt,e&&e[1]||""]],[new RegExp(Vt,"i"),[Vt,""]],[new RegExp(Gt,"i"),[Gt,""]],[ci,[Tt,""]],[new RegExp(Xt,"i"),(e,t)=>{if(/Phone/.test(t)||/WPDesktop/.test(t))return[Qt,""];if(new RegExp(St).test(t)&&!/IEMobile\b/.test(t))return[Xt+" "+St,""];var i=/Windows NT ([0-9.]+)/i.exec(t);if(i&&i[1]){var r=i[1],s=di[r]||"";return/arm/i.test(t)&&(s="RT"),[Xt,s]}return[Xt,""]}],[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,e=>{if(e&&e[3]){var t=[e[3],e[4],e[5]||"0"];return[Et,t.join(".")]}return[Et,""]}],[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,e=>{var t="";return e&&e.length>=3&&(t=R(e[2])?e[3]:e[2]),["watchOS",t]}],[new RegExp("("+kt+" (\\d+)\\.(\\d+)\\.?(\\d+)?|"+kt+")","i"),e=>{if(e&&e[2]){var t=[e[2],e[3],e[4]||"0"];return[kt,t.join(".")]}return[kt,""]}],[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,e=>{var t=["Mac OS X",""];if(e&&e[1]){var i=[e[1],e[2],e[3]||"0"];t[1]=i.join(".")}return t}],[/Mac/i,["Mac OS X",""]],[/CrOS/,[At,""]],[/Linux|debian/i,["Linux",""]]],gi=function(e){return ui.test(e)?Vt:li.test(e)?Gt:ai.test(e)?Jt:new RegExp(ei,"i").test(e)?ei:new RegExp("("+Qt+"|WPDesktop)","i").test(e)?Qt:/iPad/.test(e)?Ct:/iPod/.test(e)?"iPod Touch":/iPhone/.test(e)?"iPhone":/(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e)?Rt:ci.test(e)?Tt:/(kobo)\s(ereader|touch)/i.test(e)?"Kobo":new RegExp(Zt,"i").test(e)?Zt:/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e)||/(kf[a-z]+)( bui|\)).+silk\//i.test(e)?"Kindle Fire":/(Android|ZTE)/i.test(e)?!new RegExp(St).test(e)||/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e)?/pixel[\daxl ]{1,6}/i.test(e)&&!/pixel c/i.test(e)||/(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e)||/lmy47v/i.test(e)&&!/QTAQZ3/i.test(e)?kt:It:kt:new RegExp("(pda|"+St+")","i").test(e)?ii:new RegExp(xt,"i").test(e)&&!new RegExp(xt+" pc","i").test(e)?ri:""},fi="https?://(.*)",mi=["gclid","gclsrc","dclid","gbraid","wbraid","fbclid","msclkid","twclid","li_fat_id","igshid","ttclid","rdt_cid","irclid","_kx"],bi=X(["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gad_source","mc_cid"],mi),yi="<masked>",wi={campaignParams:function(){var{customTrackedParams:e,maskPersonalDataProperties:t,customPersonalDataProperties:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!a)return{};var r=t?X([],mi,i||[]):[];return this._campaignParamsFromUrl(yt(a.URL,r,yi),e)},_campaignParamsFromUrl:function(e,t){var i=bi.concat(t||[]),r={};return Y(i,(function(t){var i=bt(e,t);r[t]=i||null})),r},_searchEngine:function(e){return e?0===e.search(fi+"google.([^/?]*)")?"google":0===e.search(fi+"bing.com")?"bing":0===e.search(fi+"yahoo.com")?"yahoo":0===e.search(fi+"duckduckgo.com")?"duckduckgo":null:null},_searchInfoFromReferrer:function(e){var t=wi._searchEngine(e),i="yahoo"!=t?"q":"p",r={};if(!$(t)){r.$search_engine=t;var s=a?bt(a.referrer,i):"";s.length&&(r.ph_keyword=s)}return r},searchInfo:function(){var e=null==a?void 0:a.referrer;return e?this._searchInfoFromReferrer(e):{}},browser:_i,browserVersion:function(e,t){var i=_i(e,t),r=pi[i];if(R(r))return null;for(var s=0;s<r.length;s++){var n=r[s],o=e.match(n);if(o)return parseFloat(o[o.length-2])}return null},browserLanguage:function(){return navigator.language||navigator.userLanguage},browserLanguagePrefix:function(){var e=this.browserLanguage();return"string"==typeof e?e.split("-")[0]:void 0},os:function(e){for(var t=0;t<vi.length;t++){var[i,r]=vi[t],s=i.exec(e),n=s&&(I(r)?r(s,e):r);if(n)return n}return["",""]},device:gi,deviceType:function(e){var t=gi(e);return t===Ct||t===It||"Kobo"===t||"Kindle Fire"===t||t===ri?xt:t===Vt||t===Jt||t===Gt||t===ei?"Console":t===Rt?"Wearable":t?St:"Desktop"},referrer:function(){return(null==a?void 0:a.referrer)||"$direct"},referringDomain:function(){var e;return null!=a&&a.referrer&&(null===(e=gt(a.referrer))||void 0===e?void 0:e.host)||"$direct"},referrerInfo:function(){return{$referrer:this.referrer(),$referring_domain:this.referringDomain()}},initialPersonInfo:function(){return{r:this.referrer().substring(0,1e3),u:null==l?void 0:l.href.substring(0,1e3)}},initialPersonPropsFromInfo:function(e){var t,{r:i,u:r}=e,s={$initial_referrer:i,$initial_referring_domain:null==i?void 0:"$direct"==i?"$direct":null===(t=gt(i))||void 0===t?void 0:t.host};if(r){s.$initial_current_url=r;var n=gt(r);s.$initial_host=null==n?void 0:n.host,s.$initial_pathname=null==n?void 0:n.pathname,Y(this._campaignParamsFromUrl(r),(function(e,t){s["$initial_"+y(t)]=e}))}i&&Y(this._searchInfoFromReferrer(i),(function(e,t){s["$initial_"+y(t)]=e}));return s},timezone:function(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return}},timezoneOffset:function(){try{return(new Date).getTimezoneOffset()}catch(e){return}},properties:function(){var{maskPersonalDataProperties:e,customPersonalDataProperties:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!h)return{};var r=e?X([],mi,i||[]):[],[s,n]=wi.os(h);return K(te({$os:s,$os_version:n,$browser:wi.browser(h,navigator.vendor),$device:wi.device(h),$device_type:wi.deviceType(h),$timezone:wi.timezone(),$timezone_offset:wi.timezoneOffset()}),{$current_url:yt(null==l?void 0:l.href,r,yi),$host:null==l?void 0:l.host,$pathname:null==l?void 0:l.pathname,$raw_user_agent:h.length>1e3?h.substring(0,997)+"...":h,$browser_version:wi.browserVersion(h,navigator.vendor),$browser_language:wi.browserLanguage(),$browser_language_prefix:wi.browserLanguagePrefix(),$screen_height:null==t?void 0:t.screen.height,$screen_width:null==t?void 0:t.screen.width,$viewport_height:null==t?void 0:t.innerHeight,$viewport_width:null==t?void 0:t.innerWidth,$lib:"web",$lib_version:p.LIB_VERSION,$insert_id:Math.random().toString(36).substring(2,10)+Math.random().toString(36).substring(2,10),$time:Date.now()/1e3})},people_properties:function(){if(!h)return{};var[e,t]=wi.os(h);return K(te({$os:e,$os_version:t,$browser:wi.browser(h,navigator.vendor)}),{$browser_version:wi.browserVersion(h,navigator.vendor)})}},Si=["cookie","localstorage","localstorage+cookie","sessionstorage","memory"];class Ei{constructor(e){this.config=e,this.props={},this.campaign_params_saved=!1,this.name=(e=>{var t="";return e.token&&(t=e.token.replace(/\+/g,"PL").replace(/\//g,"SL").replace(/=/g,"EQ")),e.persistence_name?"ph_"+e.persistence_name:"ph_"+t+"_posthog"})(e),this.storage=this.buildStorage(e),this.load(),e.debug&&q.info("Persistence loaded",e.persistence,j({},this.props)),this.update_config(e,e),this.save()}buildStorage(e){-1===Si.indexOf(e.persistence.toLowerCase())&&(q.critical("Unknown persistence type "+e.persistence+"; falling back to localStorage+cookie"),e.persistence="localStorage+cookie");var t=e.persistence.toLowerCase();return"localstorage"===t&&lt.is_supported()?lt:"localstorage+cookie"===t&&ct.is_supported()?ct:"sessionstorage"===t&&pt.is_supported()?pt:"memory"===t?ht:"cookie"===t?ot:ct.is_supported()?ct:ot}properties(){var e={};return Y(this.props,(function(t,i){if(i===xe&&C(t))for(var r=Object.keys(t),s=0;s<r.length;s++)e["$feature/".concat(r[s])]=t[r[s]];else a=i,l=!1,($(o=He)?l:n&&o.indexOf===n?-1!=o.indexOf(a):(Y(o,(function(e){if(l||(l=e===a))return G})),l))||(e[i]=t);var o,a,l})),e}load(){if(!this.disabled){var e=this.storage.parse(this.name);e&&(this.props=K({},e))}}save(){this.disabled||this.storage.set(this.name,this.props,this.expire_days,this.cross_subdomain,this.secure,this.config.debug)}remove(){this.storage.remove(this.name,!1),this.storage.remove(this.name,!0)}clear(){this.remove(),this.props={}}register_once(e,t,i){if(C(e)){R(t)&&(t="None"),this.expire_days=R(i)?this.default_expiry:i;var r=!1;if(Y(e,((e,i)=>{this.props.hasOwnProperty(i)&&this.props[i]!==t||(this.props[i]=e,r=!0)})),r)return this.save(),!0}return!1}register(e,t){if(C(e)){this.expire_days=R(t)?this.default_expiry:t;var i=!1;if(Y(e,((t,r)=>{e.hasOwnProperty(r)&&this.props[r]!==t&&(this.props[r]=t,i=!0)})),i)return this.save(),!0}return!1}unregister(e){e in this.props&&(delete this.props[e],this.save())}update_campaign_params(){if(!this.campaign_params_saved){var e=wi.campaignParams({customTrackedParams:this.config.custom_campaign_params,maskPersonalDataProperties:this.config.mask_personal_data_properties,customPersonalDataProperties:this.config.custom_personal_data_properties});P(te(e))||this.register(e),this.campaign_params_saved=!0}}update_search_keyword(){this.register(wi.searchInfo())}update_referrer_info(){this.register_once(wi.referrerInfo(),void 0)}set_initial_person_info(){this.props[Le]||this.props[Ae]||this.register_once({[De]:wi.initialPersonInfo()},void 0)}get_referrer_info(){return te({$referrer:this.props.$referrer,$referring_domain:this.props.$referring_domain})}get_initial_props(){var e={};Y([Ae,Le],(t=>{var i=this.props[t];i&&Y(i,(function(t,i){e["$initial_"+y(i)]=t}))}));var t=this.props[De];if(t){var i=wi.initialPersonPropsFromInfo(t);K(e,i)}return e}safe_merge(e){return Y(this.props,(function(t,i){i in e||(e[i]=t)})),e}update_config(e,t){if(this.default_expiry=this.expire_days=e.cookie_expiration,this.set_disabled(e.disable_persistence),this.set_cross_subdomain(e.cross_subdomain_cookie),this.set_secure(e.secure_cookie),e.persistence!==t.persistence){var i=this.buildStorage(e),r=this.props;this.clear(),this.storage=i,this.props=r,this.save()}}set_disabled(e){this.disabled=e,this.disabled?this.remove():this.save()}set_cross_subdomain(e){e!==this.cross_subdomain&&(this.cross_subdomain=e,this.remove(),this.save())}get_cross_subdomain(){return!!this.cross_subdomain}set_secure(e){e!==this.secure&&(this.secure=e,this.remove(),this.save())}set_event_timer(e,t){var i=this.props[ae]||{};i[e]=t,this.props[ae]=i,this.save()}remove_event_timer(e){var t=(this.props[ae]||{})[e];return R(t)||(delete this.props[ae][e],this.save()),t}get_property(e){return this.props[e]}set_property(e,t){this.props[e]=t,this.save()}}function ki(e){var t,i;return(null===(t=JSON.stringify(e,(i=[],function(e,t){if(C(t)){for(;i.length>0&&i[i.length-1]!==this;)i.pop();return i.includes(t)?"[Circular]":(i.push(t),t)}return t})))||void 0===t?void 0:t.length)||0}function xi(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6606028.8;if(e.size>=t&&e.data.length>1){var i=Math.floor(e.data.length/2),r=e.data.slice(0,i),s=e.data.slice(i);return[xi({size:ki(r),data:r,sessionId:e.sessionId,windowId:e.windowId}),xi({size:ki(s),data:s,sessionId:e.sessionId,windowId:e.windowId})].flatMap((e=>e))}return[e]}var Ii=(e=>(e[e.DomContentLoaded=0]="DomContentLoaded",e[e.Load=1]="Load",e[e.FullSnapshot=2]="FullSnapshot",e[e.IncrementalSnapshot=3]="IncrementalSnapshot",e[e.Meta=4]="Meta",e[e.Custom=5]="Custom",e[e.Plugin=6]="Plugin",e))(Ii||{}),Ci=(e=>(e[e.Mutation=0]="Mutation",e[e.MouseMove=1]="MouseMove",e[e.MouseInteraction=2]="MouseInteraction",e[e.Scroll=3]="Scroll",e[e.ViewportResize=4]="ViewportResize",e[e.Input=5]="Input",e[e.TouchMove=6]="TouchMove",e[e.MediaInteraction=7]="MediaInteraction",e[e.StyleSheetRule=8]="StyleSheetRule",e[e.CanvasMutation=9]="CanvasMutation",e[e.Font=10]="Font",e[e.Log=11]="Log",e[e.Drag=12]="Drag",e[e.StyleDeclaration=13]="StyleDeclaration",e[e.Selection=14]="Selection",e[e.AdoptedStyleSheet=15]="AdoptedStyleSheet",e[e.CustomElement=16]="CustomElement",e))(Ci||{});function Pi(e){var t;return e instanceof Element&&(e.id===qe||!(null===(t=e.closest)||void 0===t||!t.call(e,".toolbar-global-fade-container")))}function Ri(e){return!!e&&1===e.nodeType}function Fi(e,t){return!!e&&!!e.tagName&&e.tagName.toLowerCase()===t.toLowerCase()}function Ti(e){return!!e&&3===e.nodeType}function $i(e){return!!e&&11===e.nodeType}function Mi(e){return e?b(e).split(/\s+/):[]}function Oi(e){var i=null==t?void 0:t.location.href;return!!(i&&e&&e.some((e=>i.match(e))))}function Li(e){var t="";switch(typeof e.className){case"string":t=e.className;break;case"object":t=(e.className&&"baseVal"in e.className?e.className.baseVal:null)||e.getAttribute("class")||"";break;default:t=""}return Mi(t)}function Ai(e){return M(e)?null:b(e).split(/(\s+)/).filter((e=>Ki(e))).join("").replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)}function Di(e){var t="";return Ui(e)&&!zi(e)&&e.childNodes&&e.childNodes.length&&Y(e.childNodes,(function(e){var i;Ti(e)&&e.textContent&&(t+=null!==(i=Ai(e.textContent))&&void 0!==i?i:"")})),b(t)}function Ni(e){return R(e.target)?e.srcElement||null:null!==(t=e.target)&&void 0!==t&&t.shadowRoot?e.composedPath()[0]||null:e.target||null;var t}var qi=["a","button","form","input","select","textarea","label"];function Bi(e){var t=e.parentNode;return!(!t||!Ri(t))&&t}function Hi(e,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,n=arguments.length>4?arguments[4]:void 0;if(!t||!e||Fi(e,"html")||!Ri(e))return!1;if(null!=r&&r.url_allowlist&&!Oi(r.url_allowlist))return!1;if(null!=r&&r.url_ignorelist&&Oi(r.url_ignorelist))return!1;if(null!=r&&r.dom_event_allowlist){var o=r.dom_event_allowlist;if(o&&!o.some((e=>i.type===e)))return!1}for(var a=!1,l=[e],u=!0,c=e;c.parentNode&&!Fi(c,"body");)if($i(c.parentNode))l.push(c.parentNode.host),c=c.parentNode.host;else{if(!(u=Bi(c)))break;if(s||qi.indexOf(u.tagName.toLowerCase())>-1)a=!0;else{var d=t.getComputedStyle(u);d&&"pointer"===d.getPropertyValue("cursor")&&(a=!0)}l.push(u),c=u}if(!function(e,t){var i=null==t?void 0:t.element_allowlist;if(R(i))return!0;var r=function(e){if(i.some((t=>e.tagName.toLowerCase()===t)))return{v:!0}};for(var s of e){var n=r(s);if("object"==typeof n)return n.v}return!1}(l,r))return!1;if(!function(e,t){var i=null==t?void 0:t.css_selector_allowlist;if(R(i))return!0;var r=function(e){if(i.some((t=>e.matches(t))))return{v:!0}};for(var s of e){var n=r(s);if("object"==typeof n)return n.v}return!1}(l,r))return!1;var h=t.getComputedStyle(e);if(h&&"pointer"===h.getPropertyValue("cursor")&&"click"===i.type)return!0;var _=e.tagName.toLowerCase();switch(_){case"html":return!1;case"form":return(n||["submit"]).indexOf(i.type)>=0;case"input":case"select":case"textarea":return(n||["change","click"]).indexOf(i.type)>=0;default:return a?(n||["click"]).indexOf(i.type)>=0:(n||["click"]).indexOf(i.type)>=0&&(qi.indexOf(_)>-1||"true"===e.getAttribute("contenteditable"))}}function Ui(e){for(var t=e;t.parentNode&&!Fi(t,"body");t=t.parentNode){var i=Li(t);if(m(i,"ph-sensitive")||m(i,"ph-no-capture"))return!1}if(m(Li(e),"ph-include"))return!0;var r=e.type||"";if(F(r))switch(r.toLowerCase()){case"hidden":case"password":return!1}var s=e.name||e.id||"";if(F(s)){if(/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(s.replace(/[^a-zA-Z0-9]/g,"")))return!1}return!0}function zi(e){return!!(Fi(e,"input")&&!["button","checkbox","submit","reset"].includes(e.type)||Fi(e,"select")||Fi(e,"textarea")||"true"===e.getAttribute("contenteditable"))}var ji="(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",Wi=new RegExp("^(?:".concat(ji,")$")),Vi=new RegExp(ji),Gi="\\d{3}-?\\d{2}-?\\d{4}",Ji=new RegExp("^(".concat(Gi,")$")),Yi=new RegExp("(".concat(Gi,")"));function Ki(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(M(e))return!1;if(F(e)){if(e=b(e),(t?Wi:Vi).test((e||"").replace(/[- ]/g,"")))return!1;if((t?Ji:Yi).test(e))return!1}return!0}function Xi(e){var t=Di(e);return Ki(t="".concat(t," ").concat(Qi(e)).trim())?t:""}function Qi(e){var t="";return e&&e.childNodes&&e.childNodes.length&&Y(e.childNodes,(function(e){var i;if(e&&"span"===(null===(i=e.tagName)||void 0===i?void 0:i.toLowerCase()))try{var r=Di(e);t="".concat(t," ").concat(r).trim(),e.childNodes&&e.childNodes.length&&(t="".concat(t," ").concat(Qi(e)).trim())}catch(e){q.error("[AutoCapture]",e)}})),t}function Zi(e){return function(e){var t=e.map((e=>{var t,i,r="";if(e.tag_name&&(r+=e.tag_name),e.attr_class)for(var s of(e.attr_class.sort(),e.attr_class))r+=".".concat(s.replace(/"/g,""));var n=j(j(j(j({},e.text?{text:e.text}:{}),{},{"nth-child":null!==(t=e.nth_child)&&void 0!==t?t:0,"nth-of-type":null!==(i=e.nth_of_type)&&void 0!==i?i:0},e.href?{href:e.href}:{}),e.attr_id?{attr_id:e.attr_id}:{}),e.attributes),o={};return Q(n).sort(((e,t)=>{var[i]=e,[r]=t;return i.localeCompare(r)})).forEach((e=>{var[t,i]=e;return o[er(t.toString())]=er(i.toString())})),r+=":",r+=Q(n).map((e=>{var[t,i]=e;return"".concat(t,'="').concat(i,'"')})).join("")}));return t.join(";")}(function(e){return e.map((e=>{var t,i,r={text:null===(t=e.$el_text)||void 0===t?void 0:t.slice(0,400),tag_name:e.tag_name,href:null===(i=e.attr__href)||void 0===i?void 0:i.slice(0,2048),attr_class:tr(e),attr_id:e.attr__id,nth_child:e.nth_child,nth_of_type:e.nth_of_type,attributes:{}};return Q(e).filter((e=>{var[t]=e;return 0===t.indexOf("attr__")})).forEach((e=>{var[t,i]=e;return r.attributes[t]=i})),r}))}(e))}function er(e){return e.replace(/"|\\"/g,'\\"')}function tr(e){var t=e.attr__class;return t?x(t)?t:Mi(t):void 0}var ir="[SessionRecording]",rr="redacted",sr={initiatorTypes:["audio","beacon","body","css","early-hint","embed","fetch","frame","iframe","icon","image","img","input","link","navigation","object","ping","script","track","video","xmlhttprequest"],maskRequestFn:e=>e,recordHeaders:!1,recordBody:!1,recordInitialRequests:!1,recordPerformance:!1,performanceEntryTypeToObserve:["first-input","navigation","paint","resource"],payloadSizeLimitBytes:1e6,payloadHostDenyList:[".lr-ingest.io",".ingest.sentry.io",".clarity.ms","analytics.google.com"]},nr=["authorization","x-forwarded-for","authorization","cookie","set-cookie","x-api-key","x-real-ip","remote-addr","forwarded","proxy-authorization","x-csrf-token","x-csrftoken","x-xsrf-token"],or=["password","secret","passwd","api_key","apikey","auth","credentials","mysql_pwd","privatekey","private_key","token"],ar=["/s/","/e/","/i/"];function lr(e,t,i,r){if(M(e))return e;var s=(null==t?void 0:t["content-length"])||function(e){return new Blob([e]).size}(e);return F(s)&&(s=parseInt(s)),s>i?ir+" ".concat(r," body too large to record (").concat(s," bytes)"):e}function ur(e,t){if(M(e))return e;var i=e;return Ki(i,!1)||(i=ir+" "+t+" body "+rr),Y(or,(e=>{var r,s;null!==(r=i)&&void 0!==r&&r.length&&-1!==(null===(s=i)||void 0===s?void 0:s.indexOf(e))&&(i=ir+" "+t+" body "+rr+" as might contain: "+e)})),i}var cr=(e,t)=>{var i,r,s,n={payloadSizeLimitBytes:sr.payloadSizeLimitBytes,performanceEntryTypeToObserve:[...sr.performanceEntryTypeToObserve],payloadHostDenyList:[...t.payloadHostDenyList||[],...sr.payloadHostDenyList]},o=!1!==e.session_recording.recordHeaders&&t.recordHeaders,a=!1!==e.session_recording.recordBody&&t.recordBody,l=!1!==e.capture_performance&&t.recordPerformance,u=(i=n,s=Math.min(1e6,null!==(r=i.payloadSizeLimitBytes)&&void 0!==r?r:1e6),e=>(null!=e&&e.requestBody&&(e.requestBody=lr(e.requestBody,e.requestHeaders,s,"Request")),null!=e&&e.responseBody&&(e.responseBody=lr(e.responseBody,e.responseHeaders,s,"Response")),e)),c=t=>{return u(((e,t)=>{var i,r=gt(e.name),s=0===t.indexOf("http")?null===(i=gt(t))||void 0===i?void 0:i.pathname:t;"/"===s&&(s="");var n=null==r?void 0:r.pathname.replace(s||"","");if(!(r&&n&&ar.some((e=>0===n.indexOf(e)))))return e})((r=(i=t).requestHeaders,M(r)||Y(Object.keys(null!=r?r:{}),(e=>{nr.includes(e.toLowerCase())&&(r[e]=rr)})),i),e.api_host));var i,r},d=I(e.session_recording.maskNetworkRequestFn);return d&&I(e.session_recording.maskCapturedNetworkRequestFn)&&q.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."),d&&(e.session_recording.maskCapturedNetworkRequestFn=t=>{var i=e.session_recording.maskNetworkRequestFn({url:t.name});return j(j({},t),{},{name:null==i?void 0:i.url})}),n.maskRequestFn=I(e.session_recording.maskCapturedNetworkRequestFn)?t=>{var i,r,s,n=c(t);return n&&null!==(i=null===(r=(s=e.session_recording).maskCapturedNetworkRequestFn)||void 0===r?void 0:r.call(s,n))&&void 0!==i?i:void 0}:e=>function(e){if(!R(e))return e.requestBody=ur(e.requestBody,"Request"),e.responseBody=ur(e.responseBody,"Response"),e}(c(e)),j(j(j({},sr),n),{},{recordHeaders:o,recordBody:a,recordPerformance:l,recordInitialRequests:l})};function dr(e,t,i,r,s){return t>i&&(q.warn("min cannot be greater than max."),t=i),O(e)?e>i?(r&&q.warn(r+" cannot be  greater than max: "+i+". Using max value instead."),i):e<t?(r&&q.warn(r+" cannot be less than min: "+t+". Using min value instead."),t):e:(r&&q.warn(r+" must be a number. using max or fallback. max: "+i+", fallback: "+s),dr(s||i,t,i,r))}class hr{constructor(e){var t,i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};W(this,"bucketSize",100),W(this,"refillRate",10),W(this,"mutationBuckets",{}),W(this,"loggedTracker",{}),W(this,"refillBuckets",(()=>{Object.keys(this.mutationBuckets).forEach((e=>{this.mutationBuckets[e]=this.mutationBuckets[e]+this.refillRate,this.mutationBuckets[e]>=this.bucketSize&&delete this.mutationBuckets[e]}))})),W(this,"getNodeOrRelevantParent",(e=>{var t=this.rrweb.mirror.getNode(e);if("svg"!==(null==t?void 0:t.nodeName)&&t instanceof Element){var i=t.closest("svg");if(i)return[this.rrweb.mirror.getId(i),i]}return[e,t]})),W(this,"numberOfChanges",(e=>{var t,i,r,s,n,o,a,l;return(null!==(t=null===(i=e.removes)||void 0===i?void 0:i.length)&&void 0!==t?t:0)+(null!==(r=null===(s=e.attributes)||void 0===s?void 0:s.length)&&void 0!==r?r:0)+(null!==(n=null===(o=e.texts)||void 0===o?void 0:o.length)&&void 0!==n?n:0)+(null!==(a=null===(l=e.adds)||void 0===l?void 0:l.length)&&void 0!==a?a:0)})),W(this,"throttleMutations",(e=>{if(3!==e.type||0!==e.data.source)return e;var t=e.data,i=this.numberOfChanges(t);t.attributes&&(t.attributes=t.attributes.filter((e=>{var t,i,r,[s,n]=this.getNodeOrRelevantParent(e.id);if(0===this.mutationBuckets[s])return!1;(this.mutationBuckets[s]=null!==(t=this.mutationBuckets[s])&&void 0!==t?t:this.bucketSize,this.mutationBuckets[s]=Math.max(this.mutationBuckets[s]-1,0),0===this.mutationBuckets[s])&&(this.loggedTracker[s]||(this.loggedTracker[s]=!0,null===(i=(r=this.options).onBlockedNode)||void 0===i||i.call(r,s,n)));return e})));var r=this.numberOfChanges(t);return 0!==r||i===r?e:void 0})),this.rrweb=e,this.options=r,this.refillRate=dr(null!==(t=this.options.refillRate)&&void 0!==t?t:this.refillRate,0,100,"mutation throttling refill rate"),this.bucketSize=dr(null!==(i=this.options.bucketSize)&&void 0!==i?i:this.bucketSize,0,100,"mutation throttling bucket size"),setInterval((()=>{this.refillBuckets()}),1e3)}}var _r=Uint8Array,pr=Uint16Array,vr=Uint32Array,gr=new _r([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fr=new _r([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),mr=new _r([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),br=function(e,t){for(var i=new pr(31),r=0;r<31;++r)i[r]=t+=1<<e[r-1];var s=new vr(i[30]);for(r=1;r<30;++r)for(var n=i[r];n<i[r+1];++n)s[n]=n-i[r]<<5|r;return[i,s]},yr=br(gr,2),wr=yr[0],Sr=yr[1];wr[28]=258,Sr[258]=28;for(var Er=br(fr,0)[1],kr=new pr(32768),xr=0;xr<32768;++xr){var Ir=(43690&xr)>>>1|(21845&xr)<<1;Ir=(61680&(Ir=(52428&Ir)>>>2|(13107&Ir)<<2))>>>4|(3855&Ir)<<4,kr[xr]=((65280&Ir)>>>8|(255&Ir)<<8)>>>1}var Cr=function(e,t,i){for(var r=e.length,s=0,n=new pr(t);s<r;++s)++n[e[s]-1];var o,a=new pr(t);for(s=0;s<t;++s)a[s]=a[s-1]+n[s-1]<<1;if(i){o=new pr(1<<t);var l=15-t;for(s=0;s<r;++s)if(e[s])for(var u=s<<4|e[s],c=t-e[s],d=a[e[s]-1]++<<c,h=d|(1<<c)-1;d<=h;++d)o[kr[d]>>>l]=u}else for(o=new pr(r),s=0;s<r;++s)o[s]=kr[a[e[s]-1]++]>>>15-e[s];return o},Pr=new _r(288);for(xr=0;xr<144;++xr)Pr[xr]=8;for(xr=144;xr<256;++xr)Pr[xr]=9;for(xr=256;xr<280;++xr)Pr[xr]=7;for(xr=280;xr<288;++xr)Pr[xr]=8;var Rr=new _r(32);for(xr=0;xr<32;++xr)Rr[xr]=5;var Fr=Cr(Pr,9,0),Tr=Cr(Rr,5,0),$r=function(e){return(e/8>>0)+(7&e&&1)},Mr=function(e,t,i){(null==i||i>e.length)&&(i=e.length);var r=new(e instanceof pr?pr:e instanceof vr?vr:_r)(i-t);return r.set(e.subarray(t,i)),r},Or=function(e,t,i){i<<=7&t;var r=t/8>>0;e[r]|=i,e[r+1]|=i>>>8},Lr=function(e,t,i){i<<=7&t;var r=t/8>>0;e[r]|=i,e[r+1]|=i>>>8,e[r+2]|=i>>>16},Ar=function(e,t){for(var i=[],r=0;r<e.length;++r)e[r]&&i.push({s:r,f:e[r]});var s=i.length,n=i.slice();if(!s)return[new _r(0),0];if(1==s){var o=new _r(i[0].s+1);return o[i[0].s]=1,[o,1]}i.sort((function(e,t){return e.f-t.f})),i.push({s:-1,f:25001});var a=i[0],l=i[1],u=0,c=1,d=2;for(i[0]={s:-1,f:a.f+l.f,l:a,r:l};c!=s-1;)a=i[i[u].f<i[d].f?u++:d++],l=i[u!=c&&i[u].f<i[d].f?u++:d++],i[c++]={s:-1,f:a.f+l.f,l:a,r:l};var h=n[0].s;for(r=1;r<s;++r)n[r].s>h&&(h=n[r].s);var _=new pr(h+1),p=Dr(i[c-1],_,0);if(p>t){r=0;var v=0,g=p-t,f=1<<g;for(n.sort((function(e,t){return _[t.s]-_[e.s]||e.f-t.f}));r<s;++r){var m=n[r].s;if(!(_[m]>t))break;v+=f-(1<<p-_[m]),_[m]=t}for(v>>>=g;v>0;){var b=n[r].s;_[b]<t?v-=1<<t-_[b]++-1:++r}for(;r>=0&&v;--r){var y=n[r].s;_[y]==t&&(--_[y],++v)}p=t}return[new _r(_),p]},Dr=function(e,t,i){return-1==e.s?Math.max(Dr(e.l,t,i+1),Dr(e.r,t,i+1)):t[e.s]=i},Nr=function(e){for(var t=e.length;t&&!e[--t];);for(var i=new pr(++t),r=0,s=e[0],n=1,o=function(e){i[r++]=e},a=1;a<=t;++a)if(e[a]==s&&a!=t)++n;else{if(!s&&n>2){for(;n>138;n-=138)o(32754);n>2&&(o(n>10?n-11<<5|28690:n-3<<5|12305),n=0)}else if(n>3){for(o(s),--n;n>6;n-=6)o(8304);n>2&&(o(n-3<<5|8208),n=0)}for(;n--;)o(s);n=1,s=e[a]}return[i.subarray(0,r),t]},qr=function(e,t){for(var i=0,r=0;r<t.length;++r)i+=e[r]*t[r];return i},Br=function(e,t,i){var r=i.length,s=$r(t+2);e[s]=255&r,e[s+1]=r>>>8,e[s+2]=255^e[s],e[s+3]=255^e[s+1];for(var n=0;n<r;++n)e[s+n+4]=i[n];return 8*(s+4+r)},Hr=function(e,t,i,r,s,n,o,a,l,u,c){Or(t,c++,i),++s[256];for(var d=Ar(s,15),h=d[0],_=d[1],p=Ar(n,15),v=p[0],g=p[1],f=Nr(h),m=f[0],b=f[1],y=Nr(v),w=y[0],S=y[1],E=new pr(19),k=0;k<m.length;++k)E[31&m[k]]++;for(k=0;k<w.length;++k)E[31&w[k]]++;for(var x=Ar(E,7),I=x[0],C=x[1],P=19;P>4&&!I[mr[P-1]];--P);var R,F,T,$,M=u+5<<3,O=qr(s,Pr)+qr(n,Rr)+o,L=qr(s,h)+qr(n,v)+o+14+3*P+qr(E,I)+(2*E[16]+3*E[17]+7*E[18]);if(M<=O&&M<=L)return Br(t,c,e.subarray(l,l+u));if(Or(t,c,1+(L<O)),c+=2,L<O){R=Cr(h,_,0),F=h,T=Cr(v,g,0),$=v;var A=Cr(I,C,0);Or(t,c,b-257),Or(t,c+5,S-1),Or(t,c+10,P-4),c+=14;for(k=0;k<P;++k)Or(t,c+3*k,I[mr[k]]);c+=3*P;for(var D=[m,w],N=0;N<2;++N){var q=D[N];for(k=0;k<q.length;++k){var B=31&q[k];Or(t,c,A[B]),c+=I[B],B>15&&(Or(t,c,q[k]>>>5&127),c+=q[k]>>>12)}}}else R=Fr,F=Pr,T=Tr,$=Rr;for(k=0;k<a;++k)if(r[k]>255){B=r[k]>>>18&31;Lr(t,c,R[B+257]),c+=F[B+257],B>7&&(Or(t,c,r[k]>>>23&31),c+=gr[B]);var H=31&r[k];Lr(t,c,T[H]),c+=$[H],H>3&&(Lr(t,c,r[k]>>>5&8191),c+=fr[H])}else Lr(t,c,R[r[k]]),c+=F[r[k]];return Lr(t,c,R[256]),c+F[256]},Ur=new vr([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),zr=function(){for(var e=new vr(256),t=0;t<256;++t){for(var i=t,r=9;--r;)i=(1&i&&3988292384)^i>>>1;e[t]=i}return e}(),jr=function(){var e=4294967295;return{p:function(t){for(var i=e,r=0;r<t.length;++r)i=zr[255&i^t[r]]^i>>>8;e=i},d:function(){return 4294967295^e}}},Wr=function(e,t,i,r,s){return function(e,t,i,r,s,n){var o=e.length,a=new _r(r+o+5*(1+Math.floor(o/7e3))+s),l=a.subarray(r,a.length-s),u=0;if(!t||o<8)for(var c=0;c<=o;c+=65535){var d=c+65535;d<o?u=Br(l,u,e.subarray(c,d)):(l[c]=n,u=Br(l,u,e.subarray(c,o)))}else{for(var h=Ur[t-1],_=h>>>13,p=8191&h,v=(1<<i)-1,g=new pr(32768),f=new pr(v+1),m=Math.ceil(i/3),b=2*m,y=function(t){return(e[t]^e[t+1]<<m^e[t+2]<<b)&v},w=new vr(25e3),S=new pr(288),E=new pr(32),k=0,x=0,I=(c=0,0),C=0,P=0;c<o;++c){var R=y(c),F=32767&c,T=f[R];if(g[F]=T,f[R]=F,C<=c){var $=o-c;if((k>7e3||I>24576)&&$>423){u=Hr(e,l,0,w,S,E,x,I,P,c-P,u),I=k=x=0,P=c;for(var M=0;M<286;++M)S[M]=0;for(M=0;M<30;++M)E[M]=0}var O=2,L=0,A=p,D=F-T&32767;if($>2&&R==y(c-D))for(var N=Math.min(_,$)-1,q=Math.min(32767,c),B=Math.min(258,$);D<=q&&--A&&F!=T;){if(e[c+O]==e[c+O-D]){for(var H=0;H<B&&e[c+H]==e[c+H-D];++H);if(H>O){if(O=H,L=D,H>N)break;var U=Math.min(D,H-2),z=0;for(M=0;M<U;++M){var j=c-D+M+32768&32767,W=j-g[j]+32768&32767;W>z&&(z=W,T=j)}}}D+=(F=T)-(T=g[F])+32768&32767}if(L){w[I++]=268435456|Sr[O]<<18|Er[L];var V=31&Sr[O],G=31&Er[L];x+=gr[V]+fr[G],++S[257+V],++E[G],C=c+O,++k}else w[I++]=e[c],++S[e[c]]}}u=Hr(e,l,n,w,S,E,x,I,P,c-P,u)}return Mr(a,0,r+$r(u)+s)}(e,null==t.level?6:t.level,null==t.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(e.length)))):12+t.mem,i,r,!s)},Vr=function(e,t,i){for(;i;++t)e[t]=i,i>>>=8},Gr=function(e,t){var i=t.filename;if(e[0]=31,e[1]=139,e[2]=8,e[8]=t.level<2?4:9==t.level?2:0,e[9]=3,0!=t.mtime&&Vr(e,4,Math.floor(new Date(t.mtime||Date.now())/1e3)),i){e[3]=8;for(var r=0;r<=i.length;++r)e[r+10]=i.charCodeAt(r)}},Jr=function(e){return 10+(e.filename&&e.filename.length+1||0)};function Yr(e,t){void 0===t&&(t={});var i=jr(),r=e.length;i.p(e);var s=Wr(e,t,Jr(t),8),n=s.length;return Gr(s,t),Vr(s,n-8,i.d()),Vr(s,n-4,r),s}function Kr(e,t){var i=e.length;if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);for(var r=new _r(e.length+(e.length>>>1)),s=0,n=function(e){r[s++]=e},o=0;o<i;++o){if(s+5>r.length){var a=new _r(s+8+(i-o<<1));a.set(r),r=a}var l=e.charCodeAt(o);l<128||t?n(l):l<2048?(n(192|l>>>6),n(128|63&l)):l>55295&&l<57344?(n(240|(l=65536+(1047552&l)|1023&e.charCodeAt(++o))>>>18),n(128|l>>>12&63),n(128|l>>>6&63),n(128|63&l)):(n(224|l>>>12),n(128|l>>>6&63),n(128|63&l))}return Mr(r,0,s)}var Xr="[SessionRecording]",Qr=B(Xr),Zr=3e5,es=[Ci.MouseMove,Ci.MouseInteraction,Ci.Scroll,Ci.ViewportResize,Ci.Input,Ci.TouchMove,Ci.MediaInteraction,Ci.Drag],ts=e=>({rrwebMethod:e,enqueuedAt:Date.now(),attempt:1});function is(e){return function(e,t){for(var i="",r=0;r<e.length;){var s=e[r++];s<128||t?i+=String.fromCharCode(s):s<224?i+=String.fromCharCode((31&s)<<6|63&e[r++]):s<240?i+=String.fromCharCode((15&s)<<12|(63&e[r++])<<6|63&e[r++]):(s=((15&s)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536,i+=String.fromCharCode(55296|s>>10,56320|1023&s))}return i}(Yr(Kr(JSON.stringify(e))),!0)}function rs(e){return e.type===Ii.Custom&&"sessionIdle"===e.data.tag}function ss(e,t){return t.some((t=>"regex"===t.matching&&new RegExp(t.url).test(e)))}class ns{get sessionIdleThresholdMilliseconds(){return this.instance.config.session_recording.session_idle_threshold_ms||3e5}get rrwebRecord(){var e,t;return null==_||null===(e=_.__PosthogExtensions__)||void 0===e||null===(t=e.rrweb)||void 0===t?void 0:t.record}get started(){return this._captureStarted}get sessionManager(){if(!this.instance.sessionManager)throw new Error(Xr+" must be started with a valid sessionManager.");return this.instance.sessionManager}get fullSnapshotIntervalMillis(){var e,t;return"trigger_pending"===this.triggerStatus?6e4:null!==(e=null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.full_snapshot_interval_millis)&&void 0!==e?e:Zr}get isSampled(){var e=this.instance.get_property(Se);return L(e)?e:null}get sessionDuration(){var e,t,i=null===(e=this.buffer)||void 0===e?void 0:e.data[(null===(t=this.buffer)||void 0===t?void 0:t.data.length)-1],{sessionStartTimestamp:r}=this.sessionManager.checkAndGetSessionAndWindowId(!0);return i?i.timestamp-r:null}get isRecordingEnabled(){var e=!!this.instance.get_property(pe),i=!this.instance.config.disable_session_recording;return t&&e&&i}get isConsoleLogCaptureEnabled(){var e=!!this.instance.get_property(ve),t=this.instance.config.enable_recording_console_log;return null!=t?t:e}get canvasRecording(){var e,t,i,r,s,n,o=this.instance.config.session_recording.captureCanvas,a=this.instance.get_property(fe),l=null!==(e=null!==(t=null==o?void 0:o.recordCanvas)&&void 0!==t?t:null==a?void 0:a.enabled)&&void 0!==e&&e,u=null!==(i=null!==(r=null==o?void 0:o.canvasFps)&&void 0!==r?r:null==a?void 0:a.fps)&&void 0!==i?i:0,c=null!==(s=null!==(n=null==o?void 0:o.canvasQuality)&&void 0!==n?n:null==a?void 0:a.quality)&&void 0!==s?s:0;return{enabled:l,fps:dr(u,0,12,"canvas recording fps"),quality:dr(c,0,1,"canvas recording quality")}}get networkPayloadCapture(){var e,t,i=this.instance.get_property(ge),r={recordHeaders:null===(e=this.instance.config.session_recording)||void 0===e?void 0:e.recordHeaders,recordBody:null===(t=this.instance.config.session_recording)||void 0===t?void 0:t.recordBody},s=(null==r?void 0:r.recordHeaders)||(null==i?void 0:i.recordHeaders),n=(null==r?void 0:r.recordBody)||(null==i?void 0:i.recordBody),o=C(this.instance.config.capture_performance)?this.instance.config.capture_performance.network_timing:this.instance.config.capture_performance,a=!!(L(o)?o:null==i?void 0:i.capturePerformance);return s||n||a?{recordHeaders:s,recordBody:n,recordPerformance:a}:void 0}get sampleRate(){var e=this.instance.get_property(me);return O(e)?e:null}get minimumDuration(){var e=this.instance.get_property(be);return O(e)?e:null}get status(){return this.receivedDecide?this.isRecordingEnabled?this._urlBlocked?"paused":M(this._linkedFlag)||this._linkedFlagSeen?"trigger_pending"===this.triggerStatus?"buffering":L(this.isSampled)?this.isSampled?"sampled":"disabled":"active":"buffering":"disabled":"buffering"}get urlTriggerStatus(){var e;return 0===this._urlTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(Ee))===this.sessionId?"trigger_activated":"trigger_pending"}get eventTriggerStatus(){var e;return 0===this._eventTriggers.length?"trigger_disabled":(null===(e=this.instance)||void 0===e?void 0:e.get_property(ke))===this.sessionId?"trigger_activated":"trigger_pending"}get triggerStatus(){var e="trigger_activated"===this.eventTriggerStatus||"trigger_activated"===this.urlTriggerStatus,t="trigger_pending"===this.eventTriggerStatus||"trigger_pending"===this.urlTriggerStatus;return e?"trigger_activated":t?"trigger_pending":"trigger_disabled"}constructor(e){if(W(this,"queuedRRWebEvents",[]),W(this,"isIdle",!1),W(this,"_linkedFlagSeen",!1),W(this,"_lastActivityTimestamp",Date.now()),W(this,"_linkedFlag",null),W(this,"_removePageViewCaptureHook",void 0),W(this,"_onSessionIdListener",void 0),W(this,"_persistDecideOnSessionListener",void 0),W(this,"_samplingSessionListener",void 0),W(this,"_urlTriggers",[]),W(this,"_urlBlocklist",[]),W(this,"_urlBlocked",!1),W(this,"_eventTriggers",[]),W(this,"_removeEventTriggerCaptureHook",void 0),W(this,"_forceAllowLocalhostNetworkCapture",!1),W(this,"_onBeforeUnload",(()=>{this._flushBuffer()})),W(this,"_onOffline",(()=>{this._tryAddCustomEvent("browser offline",{})})),W(this,"_onOnline",(()=>{this._tryAddCustomEvent("browser online",{})})),W(this,"_onVisibilityChange",(()=>{if(null!=a&&a.visibilityState){var e="window "+a.visibilityState;this._tryAddCustomEvent(e,{})}})),this.instance=e,this._captureStarted=!1,this._endpoint="/s/",this.stopRrweb=void 0,this.receivedDecide=!1,!this.instance.sessionManager)throw Qr.error("started without valid sessionManager"),new Error(Xr+" started without valid sessionManager. This is a bug.");if(this.instance.config.__preview_experimental_cookieless_mode)throw new Error(Xr+" cannot be used with __preview_experimental_cookieless_mode.");var{sessionId:t,windowId:i}=this.sessionManager.checkAndGetSessionAndWindowId();this.sessionId=t,this.windowId=i,this.buffer=this.clearBuffer(),this.sessionIdleThresholdMilliseconds>=this.sessionManager.sessionTimeoutMs&&Qr.warn("session_idle_threshold_ms (".concat(this.sessionIdleThresholdMilliseconds,") is greater than the session timeout (").concat(this.sessionManager.sessionTimeoutMs,"). Session will never be detected as idle"))}startIfEnabledOrStop(e){this.isRecordingEnabled?(this._startCapture(e),null==t||t.addEventListener("beforeunload",this._onBeforeUnload),null==t||t.addEventListener("offline",this._onOffline),null==t||t.addEventListener("online",this._onOnline),null==t||t.addEventListener("visibilitychange",this._onVisibilityChange),this._setupSampling(),this._addEventTriggerListener(),M(this._removePageViewCaptureHook)&&(this._removePageViewCaptureHook=this.instance.on("eventCaptured",(e=>{try{if("$pageview"===e.event){var t=null!=e&&e.properties.$current_url?this._maskUrl(null==e?void 0:e.properties.$current_url):"";if(!t)return;this._tryAddCustomEvent("$pageview",{href:t})}}catch(e){Qr.error("Could not add $pageview to rrweb session",e)}}))),this._onSessionIdListener||(this._onSessionIdListener=this.sessionManager.onSessionId(((e,t,i)=>{var r,s,n,o;i&&(this._tryAddCustomEvent("$session_id_change",{sessionId:e,windowId:t,changeReason:i}),null===(r=this.instance)||void 0===r||null===(s=r.persistence)||void 0===s||s.unregister(ke),null===(n=this.instance)||void 0===n||null===(o=n.persistence)||void 0===o||o.unregister(Ee))})))):this.stopRecording()}stopRecording(){var e,i,r,s;this._captureStarted&&this.stopRrweb&&(this.stopRrweb(),this.stopRrweb=void 0,this._captureStarted=!1,null==t||t.removeEventListener("beforeunload",this._onBeforeUnload),null==t||t.removeEventListener("offline",this._onOffline),null==t||t.removeEventListener("online",this._onOnline),null==t||t.removeEventListener("visibilitychange",this._onVisibilityChange),this.clearBuffer(),clearInterval(this._fullSnapshotTimer),null===(e=this._removePageViewCaptureHook)||void 0===e||e.call(this),this._removePageViewCaptureHook=void 0,null===(i=this._removeEventTriggerCaptureHook)||void 0===i||i.call(this),this._removeEventTriggerCaptureHook=void 0,null===(r=this._onSessionIdListener)||void 0===r||r.call(this),this._onSessionIdListener=void 0,null===(s=this._samplingSessionListener)||void 0===s||s.call(this),this._samplingSessionListener=void 0,Qr.info("stopped"))}makeSamplingDecision(e){var t,i=this.sessionId!==e,r=this.sampleRate;if(O(r)){var s,n=this.isSampled,o=i||!L(n);if(o)s=Math.random()<r;else s=n;o&&(s?this._reportStarted("sampled"):Qr.warn("Sample rate (".concat(r,") has determined that this sessionId (").concat(e,") will not be sent to the server.")),this._tryAddCustomEvent("samplingDecisionMade",{sampleRate:r,isSampled:s})),null===(t=this.instance.persistence)||void 0===t||t.register({[Se]:s})}else{var a;null===(a=this.instance.persistence)||void 0===a||a.register({[Se]:null})}}onRemoteConfig(e){var t,i,r,s,n,o;(this._tryAddCustomEvent("$remote_config_received",e),this._persistRemoteConfig(e),this._linkedFlag=(null===(t=e.sessionRecording)||void 0===t?void 0:t.linkedFlag)||null,null!==(i=e.sessionRecording)&&void 0!==i&&i.endpoint)&&(this._endpoint=null===(o=e.sessionRecording)||void 0===o?void 0:o.endpoint);if(this._setupSampling(),!M(this._linkedFlag)&&!this._linkedFlagSeen){var a=F(this._linkedFlag)?this._linkedFlag:this._linkedFlag.flag,l=F(this._linkedFlag)?null:this._linkedFlag.variant;this.instance.onFeatureFlags(((e,t)=>{var i=C(t)&&a in t,r=l?t[a]===l:i;r&&this._reportStarted("linked_flag_matched",{linkedFlag:a,linkedVariant:l}),this._linkedFlagSeen=r}))}null!==(r=e.sessionRecording)&&void 0!==r&&r.urlTriggers&&(this._urlTriggers=e.sessionRecording.urlTriggers),null!==(s=e.sessionRecording)&&void 0!==s&&s.urlBlocklist&&(this._urlBlocklist=e.sessionRecording.urlBlocklist),null!==(n=e.sessionRecording)&&void 0!==n&&n.eventTriggers&&(this._eventTriggers=e.sessionRecording.eventTriggers),this.receivedDecide=!0,this.startIfEnabledOrStop()}_setupSampling(){O(this.sampleRate)&&M(this._samplingSessionListener)&&(this._samplingSessionListener=this.sessionManager.onSessionId((e=>{this.makeSamplingDecision(e)})))}_persistRemoteConfig(e){if(this.instance.persistence){var t,i=this.instance.persistence,r=()=>{var t,r,s,n,o,a,l,u,c=null===(t=e.sessionRecording)||void 0===t?void 0:t.sampleRate,d=M(c)?null:parseFloat(c),h=null===(r=e.sessionRecording)||void 0===r?void 0:r.minimumDurationMilliseconds;i.register({[pe]:!!e.sessionRecording,[ve]:null===(s=e.sessionRecording)||void 0===s?void 0:s.consoleLogRecordingEnabled,[ge]:j({capturePerformance:e.capturePerformance},null===(n=e.sessionRecording)||void 0===n?void 0:n.networkPayloadCapture),[fe]:{enabled:null===(o=e.sessionRecording)||void 0===o?void 0:o.recordCanvas,fps:null===(a=e.sessionRecording)||void 0===a?void 0:a.canvasFps,quality:null===(l=e.sessionRecording)||void 0===l?void 0:l.canvasQuality},[me]:d,[be]:R(h)?null:h,[ye]:null===(u=e.sessionRecording)||void 0===u?void 0:u.scriptConfig})};r(),null===(t=this._persistDecideOnSessionListener)||void 0===t||t.call(this),this._persistDecideOnSessionListener=this.sessionManager.onSessionId(r)}}log(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log";null===(t=this.instance.sessionRecording)||void 0===t||t.onRRwebEmit({type:6,data:{plugin:"rrweb/console@1",payload:{level:i,trace:[],payload:[JSON.stringify(e)]}},timestamp:Date.now()})}_startCapture(e){if(!R(Object.assign)&&!R(Array.from)&&!(this._captureStarted||this.instance.config.disable_session_recording||this.instance.consent.isOptedOut())){var t,i;if(this._captureStarted=!0,this.sessionManager.checkAndGetSessionAndWindowId(),this.rrwebRecord)this._onScriptLoaded();else null===(t=_.__PosthogExtensions__)||void 0===t||null===(i=t.loadExternalDependency)||void 0===i||i.call(t,this.instance,this.scriptName,(e=>{if(e)return Qr.error("could not load recorder",e);this._onScriptLoaded()}));Qr.info("starting"),"active"===this.status&&this._reportStarted(e||"recording_initialized")}}get scriptName(){var e,t,i;return(null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t||null===(i=t.get_property(ye))||void 0===i?void 0:i.script)||"recorder"}isInteractiveEvent(e){var t;return 3===e.type&&-1!==es.indexOf(null===(t=e.data)||void 0===t?void 0:t.source)}_updateWindowAndSessionIds(e){var t=this.isInteractiveEvent(e);t||this.isIdle||e.timestamp-this._lastActivityTimestamp>this.sessionIdleThresholdMilliseconds&&(this.isIdle=!0,clearInterval(this._fullSnapshotTimer),this._tryAddCustomEvent("sessionIdle",{eventTimestamp:e.timestamp,lastActivityTimestamp:this._lastActivityTimestamp,threshold:this.sessionIdleThresholdMilliseconds,bufferLength:this.buffer.data.length,bufferSize:this.buffer.size}),this._flushBuffer());var i=!1;if(t&&(this._lastActivityTimestamp=e.timestamp,this.isIdle&&(this.isIdle=!1,this._tryAddCustomEvent("sessionNoLongerIdle",{reason:"user activity",type:e.type}),i=!0)),!this.isIdle){var{windowId:r,sessionId:s}=this.sessionManager.checkAndGetSessionAndWindowId(!t,e.timestamp),n=this.sessionId!==s,o=this.windowId!==r;this.windowId=r,this.sessionId=s,n||o?(this.stopRecording(),this.startIfEnabledOrStop("session_id_changed")):i&&this._scheduleFullSnapshot()}}_tryRRWebMethod(e){try{return e.rrwebMethod(),!0}catch(t){return this.queuedRRWebEvents.length<10?this.queuedRRWebEvents.push({enqueuedAt:e.enqueuedAt||Date.now(),attempt:e.attempt++,rrwebMethod:e.rrwebMethod}):Qr.warn("could not emit queued rrweb event.",t,e),!1}}_tryAddCustomEvent(e,t){return this._tryRRWebMethod(ts((()=>this.rrwebRecord.addCustomEvent(e,t))))}_tryTakeFullSnapshot(){return this._tryRRWebMethod(ts((()=>this.rrwebRecord.takeFullSnapshot())))}_onScriptLoaded(){var e,t={blockClass:"ph-no-capture",blockSelector:void 0,ignoreClass:"ph-ignore-input",maskTextClass:"ph-mask",maskTextSelector:void 0,maskTextFn:void 0,maskAllInputs:!0,maskInputOptions:{password:!0},maskInputFn:void 0,slimDOMOptions:{},collectFonts:!1,inlineStylesheet:!0,recordCrossOriginIframes:!1},i=this.instance.config.session_recording;for(var[r,s]of Object.entries(i||{}))r in t&&("maskInputOptions"===r?t.maskInputOptions=j({password:!0},s):t[r]=s);if(this.canvasRecording&&this.canvasRecording.enabled&&(t.recordCanvas=!0,t.sampling={canvas:this.canvasRecording.fps},t.dataURLOptions={type:"image/webp",quality:this.canvasRecording.quality}),this.rrwebRecord){this.mutationRateLimiter=null!==(e=this.mutationRateLimiter)&&void 0!==e?e:new hr(this.rrwebRecord,{refillRate:this.instance.config.session_recording.__mutationRateLimiterRefillRate,bucketSize:this.instance.config.session_recording.__mutationRateLimiterBucketSize,onBlockedNode:(e,t)=>{var i="Too many mutations on node '".concat(e,"'. Rate limiting. This could be due to SVG animations or something similar");Qr.info(i,{node:t}),this.log(Xr+" "+i,"warn")}});var n=this._gatherRRWebPlugins();this.stopRrweb=this.rrwebRecord(j({emit:e=>{this.onRRwebEmit(e)},plugins:n},t)),this._lastActivityTimestamp=Date.now(),this.isIdle=!1,this._tryAddCustomEvent("$session_options",{sessionRecordingOptions:t,activePlugins:n.map((e=>null==e?void 0:e.name))}),this._tryAddCustomEvent("$posthog_config",{config:this.instance.config})}else Qr.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")}_scheduleFullSnapshot(){if(this._fullSnapshotTimer&&clearInterval(this._fullSnapshotTimer),!this.isIdle){var e=this.fullSnapshotIntervalMillis;e&&(this._fullSnapshotTimer=setInterval((()=>{this._tryTakeFullSnapshot()}),e))}}_gatherRRWebPlugins(){var e,t,i,r,s=[],n=null===(e=_.__PosthogExtensions__)||void 0===e||null===(t=e.rrwebPlugins)||void 0===t?void 0:t.getRecordConsolePlugin;n&&this.isConsoleLogCaptureEnabled&&s.push(n());var o=null===(i=_.__PosthogExtensions__)||void 0===i||null===(r=i.rrwebPlugins)||void 0===r?void 0:r.getRecordNetworkPlugin;this.networkPayloadCapture&&I(o)&&(!vt.includes(location.hostname)||this._forceAllowLocalhostNetworkCapture?s.push(o(cr(this.instance.config,this.networkPayloadCapture))):Qr.info("NetworkCapture not started because we are on localhost."));return s}onRRwebEmit(e){var t;if(this._processQueuedEvents(),e&&C(e)){if(e.type===Ii.Meta){var i=this._maskUrl(e.data.href);if(this._lastHref=i,!i)return;e.data.href=i}else this._pageViewFallBack();if(this._checkUrlTriggerConditions(),"paused"!==this.status||function(e){return e.type===Ii.Custom&&"recording paused"===e.data.tag}(e)){e.type===Ii.FullSnapshot&&this._scheduleFullSnapshot(),e.type===Ii.FullSnapshot&&"trigger_pending"===this.triggerStatus&&this.clearBuffer();var r=this.mutationRateLimiter?this.mutationRateLimiter.throttleMutations(e):e;if(r){var s=function(e){var t=e;if(t&&C(t)&&6===t.type&&C(t.data)&&"rrweb/console@1"===t.data.plugin){t.data.payload.payload.length>10&&(t.data.payload.payload=t.data.payload.payload.slice(0,10),t.data.payload.payload.push("...[truncated]"));for(var i=[],r=0;r<t.data.payload.payload.length;r++)t.data.payload.payload[r]&&t.data.payload.payload[r].length>2e3?i.push(t.data.payload.payload[r].slice(0,2e3)+"...[truncated]"):i.push(t.data.payload.payload[r]);return t.data.payload.payload=i,e}return e}(r);if(this._updateWindowAndSessionIds(s),!this.isIdle||rs(s)){if(rs(s)){var n=s.data.payload;if(n){var o=n.lastActivityTimestamp,a=n.threshold;s.timestamp=o+a}}var l=null===(t=this.instance.config.session_recording.compress_events)||void 0===t||t?function(e){if(ki(e)<1024)return e;try{if(e.type===Ii.FullSnapshot)return j(j({},e),{},{data:is(e.data),cv:"2024-10"});if(e.type===Ii.IncrementalSnapshot&&e.data.source===Ci.Mutation)return j(j({},e),{},{cv:"2024-10",data:j(j({},e.data),{},{texts:is(e.data.texts),attributes:is(e.data.attributes),removes:is(e.data.removes),adds:is(e.data.adds)})});if(e.type===Ii.IncrementalSnapshot&&e.data.source===Ci.StyleSheetRule)return j(j({},e),{},{cv:"2024-10",data:j(j({},e.data),{},{adds:is(e.data.adds),removes:is(e.data.removes)})})}catch(e){Qr.error("could not compress event - will use uncompressed event",e)}return e}(s):s,u={$snapshot_bytes:ki(l),$snapshot_data:l,$session_id:this.sessionId,$window_id:this.windowId};"disabled"!==this.status?this._captureSnapshotBuffered(u):this.clearBuffer()}}}}}_pageViewFallBack(){if(!this.instance.config.capture_pageview&&t){var e=this._maskUrl(t.location.href);this._lastHref!==e&&(this._tryAddCustomEvent("$url_changed",{href:e}),this._lastHref=e)}}_processQueuedEvents(){if(this.queuedRRWebEvents.length){var e=[...this.queuedRRWebEvents];this.queuedRRWebEvents=[],e.forEach((e=>{Date.now()-e.enqueuedAt<=2e3&&this._tryRRWebMethod(e)}))}}_maskUrl(e){var t=this.instance.config.session_recording;if(t.maskNetworkRequestFn){var i,r={url:e};return null===(i=r=t.maskNetworkRequestFn(r))||void 0===i?void 0:i.url}return e}clearBuffer(){return this.buffer={size:0,data:[],sessionId:this.sessionId,windowId:this.windowId},this.buffer}_flushBuffer(){this.flushBufferTimer&&(clearTimeout(this.flushBufferTimer),this.flushBufferTimer=void 0);var e=this.minimumDuration,t=this.sessionDuration,i=O(t)&&t>=0,r=O(e)&&i&&t<e;if("buffering"===this.status||"paused"===this.status||r)return this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3),this.buffer;this.buffer.data.length>0&&xi(this.buffer).forEach((e=>{this._captureSnapshot({$snapshot_bytes:e.size,$snapshot_data:e.data,$session_id:e.sessionId,$window_id:e.windowId,$lib:"web",$lib_version:p.LIB_VERSION})}));return this.clearBuffer()}_captureSnapshotBuffered(e){var t,i=2+((null===(t=this.buffer)||void 0===t?void 0:t.data.length)||0);!this.isIdle&&(this.buffer.size+e.$snapshot_bytes+i>943718.4||this.buffer.sessionId!==this.sessionId)&&(this.buffer=this._flushBuffer()),this.buffer.size+=e.$snapshot_bytes,this.buffer.data.push(e.$snapshot_data),this.flushBufferTimer||this.isIdle||(this.flushBufferTimer=setTimeout((()=>{this._flushBuffer()}),2e3))}_captureSnapshot(e){this.instance.capture("$snapshot",e,{_url:this.instance.requestRouter.endpointFor("api",this._endpoint),_noTruncate:!0,_batchKey:"recordings",skip_client_rate_limiting:!0})}_checkUrlTriggerConditions(){if(void 0!==t&&t.location.href){var e=t.location.href,i="paused"===this.status,r=ss(e,this._urlBlocklist);r&&!i?this._pauseRecording():!r&&i&&this._resumeRecording(),ss(e,this._urlTriggers)&&this._activateTrigger("url")}}_activateTrigger(e){var t,i;"trigger_pending"===this.triggerStatus&&(null===(t=this.instance)||void 0===t||null===(i=t.persistence)||void 0===i||i.register({["url"===e?Ee:ke]:this.sessionId}),this._flushBuffer(),this._reportStarted(e+"_trigger_matched"))}_pauseRecording(){"paused"!==this.status&&(this._urlBlocked=!0,clearInterval(this._fullSnapshotTimer),Qr.info("recording paused due to URL blocker"),this._tryAddCustomEvent("recording paused",{reason:"url blocker"}))}_resumeRecording(){"paused"===this.status&&(this._urlBlocked=!1,this._tryTakeFullSnapshot(),this._scheduleFullSnapshot(),this._tryAddCustomEvent("recording resumed",{reason:"left blocked url"}),Qr.info("recording resumed"))}_addEventTriggerListener(){0!==this._eventTriggers.length&&M(this._removeEventTriggerCaptureHook)&&(this._removeEventTriggerCaptureHook=this.instance.on("eventCaptured",(e=>{try{this._eventTriggers.includes(e.event)&&this._activateTrigger("event")}catch(e){Qr.error("Could not activate event trigger",e)}})))}overrideLinkedFlag(){this._linkedFlagSeen=!0,this._tryTakeFullSnapshot(),this._reportStarted("linked_flag_overridden")}overrideSampling(){var e;null===(e=this.instance.persistence)||void 0===e||e.register({[Se]:!0}),this._tryTakeFullSnapshot(),this._reportStarted("sampling_overridden")}overrideTrigger(e){this._activateTrigger(e)}_reportStarted(e,t){this.instance.register_for_session({$session_recording_start_reason:e}),Qr.info(e.replace("_"," "),t),m(["recording_initialized","session_id_changed"],e)||this._tryAddCustomEvent(e,t)}}var os=B("[RemoteConfig]");class as{constructor(e){this.instance=e}get remoteConfig(){var e,t;return null===(e=_._POSTHOG_REMOTE_CONFIG)||void 0===e||null===(t=e[this.instance.config.token])||void 0===t?void 0:t.config}_loadRemoteConfigJs(e){var t,i,r;null!==(t=_.__PosthogExtensions__)&&void 0!==t&&t.loadExternalDependency?null===(i=_.__PosthogExtensions__)||void 0===i||null===(r=i.loadExternalDependency)||void 0===r||r.call(i,this.instance,"remote-config",(()=>e(this.remoteConfig))):(os.error("PostHog Extensions not found. Cannot load remote config."),e())}_loadRemoteConfigJSON(e){this.instance._send_request({method:"GET",url:this.instance.requestRouter.endpointFor("assets","/array/".concat(this.instance.config.token,"/config")),callback:t=>{e(t.json)}})}load(){try{if(this.remoteConfig)return os.info("Using preloaded remote config",this.remoteConfig),void this.onRemoteConfig(this.remoteConfig);if(this.instance.config.advanced_disable_decide)return void os.warn("Remote config is disabled. Falling back to local config.");this._loadRemoteConfigJs((e=>{if(!e)return os.info("No config found after loading remote JS config. Falling back to JSON."),void this._loadRemoteConfigJSON((e=>{this.onRemoteConfig(e)}));this.onRemoteConfig(e)}))}catch(e){os.error("Error loading remote config",e)}}onRemoteConfig(e){e?this.instance.config.__preview_remote_config?(this.instance._onRemoteConfig(e),!1!==e.hasFeatureFlags&&this.instance.featureFlags.ensureFlagsLoaded()):os.info("__preview_remote_config is disabled. Logging config instead",e):os.error("Failed to fetch remote config from PostHog.")}}var ls,us=null!=t&&t.location?wt(t.location.hash,"__posthog")||wt(location.hash,"state"):null,cs="_postHogToolbarParams",ds=B("[Toolbar]");!function(e){e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(ls||(ls={}));class hs{constructor(e){this.instance=e}setToolbarState(e){_.ph_toolbar_state=e}getToolbarState(){var e;return null!==(e=_.ph_toolbar_state)&&void 0!==e?e:ls.UNINITIALIZED}maybeLoadToolbar(){var e,i,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(!t||!a)return!1;r=null!==(e=r)&&void 0!==e?e:t.location,n=null!==(i=n)&&void 0!==i?i:t.history;try{if(!s){try{t.localStorage.setItem("test","test"),t.localStorage.removeItem("test")}catch(e){return!1}s=null==t?void 0:t.localStorage}var o,l=us||wt(r.hash,"__posthog")||wt(r.hash,"state"),u=l?Z((()=>JSON.parse(atob(decodeURIComponent(l)))))||Z((()=>JSON.parse(decodeURIComponent(l)))):null;return u&&"ph_authorize"===u.action?((o=u).source="url",o&&Object.keys(o).length>0&&(u.desiredHash?r.hash=u.desiredHash:n?n.replaceState(n.state,"",r.pathname+r.search):r.hash="")):((o=JSON.parse(s.getItem(cs)||"{}")).source="localstorage",delete o.userIntent),!(!o.token||this.instance.config.token!==o.token)&&(this.loadToolbar(o),!0)}catch(e){return!1}}_callLoadToolbar(e){var t=_.ph_load_toolbar||_.ph_load_editor;!M(t)&&I(t)?t(e,this.instance):ds.warn("No toolbar load function found")}loadToolbar(e){var i=!(null==a||!a.getElementById(qe));if(!t||i)return!1;var r="custom"===this.instance.requestRouter.region&&this.instance.config.advanced_disable_toolbar_metrics,s=j(j({token:this.instance.config.token},e),{},{apiURL:this.instance.requestRouter.endpointFor("ui")},r?{instrument:!1}:{});if(t.localStorage.setItem(cs,JSON.stringify(j(j({},s),{},{source:void 0}))),this.getToolbarState()===ls.LOADED)this._callLoadToolbar(s);else if(this.getToolbarState()===ls.UNINITIALIZED){var n,o;this.setToolbarState(ls.LOADING),null===(n=_.__PosthogExtensions__)||void 0===n||null===(o=n.loadExternalDependency)||void 0===o||o.call(n,this.instance,"toolbar",(e=>{if(e)return ds.error("[Toolbar] Failed to load",e),void this.setToolbarState(ls.UNINITIALIZED);this.setToolbarState(ls.LOADED),this._callLoadToolbar(s)})),re(t,"turbolinks:load",(()=>{this.setToolbarState(ls.UNINITIALIZED),this.loadToolbar(s)}))}return!0}_loadEditor(e){return this.loadToolbar(e)}maybeLoadEditor(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return this.maybeLoadToolbar(e,t,i)}}class _s{constructor(e){W(this,"isPaused",!0),W(this,"queue",[]),W(this,"flushTimeoutMs",3e3),this.sendRequest=e}enqueue(e){this.queue.push(e),this.flushTimeout||this.setFlushTimeout()}unload(){this.clearFlushTimeout();var e=this.queue.length>0?this.formatQueue():{},t=Object.values(e),i=[...t.filter((e=>0===e.url.indexOf("/e"))),...t.filter((e=>0!==e.url.indexOf("/e")))];i.map((e=>{this.sendRequest(j(j({},e),{},{transport:"sendBeacon"}))}))}enable(){this.isPaused=!1,this.setFlushTimeout()}setFlushTimeout(){var e=this;this.isPaused||(this.flushTimeout=setTimeout((()=>{if(this.clearFlushTimeout(),this.queue.length>0){var t=this.formatQueue(),i=function(i){var r=t[i],s=(new Date).getTime();r.data&&x(r.data)&&Y(r.data,(e=>{e.offset=Math.abs(e.timestamp-s),delete e.timestamp})),e.sendRequest(r)};for(var r in t)i(r)}}),this.flushTimeoutMs))}clearFlushTimeout(){clearTimeout(this.flushTimeout),this.flushTimeout=void 0}formatQueue(){var e={};return Y(this.queue,(t=>{var i,r=t,s=(r?r.batchKey:null)||r.url;R(e[s])&&(e[s]=j(j({},r),{},{data:[]})),null===(i=e[s].data)||void 0===i||i.push(r.data)})),this.queue=[],e}}var ps=function(e){var t,i,r,s,n="";for(t=i=0,r=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,s=0;s<r;s++){var o=e.charCodeAt(s),a=null;o<128?i++:a=o>127&&o<2048?String.fromCharCode(o>>6|192,63&o|128):String.fromCharCode(o>>12|224,o>>6&63|128,63&o|128),$(a)||(i>t&&(n+=e.substring(t,i)),n+=a,t=i=s+1)}return i>t&&(n+=e.substring(t,e.length)),n},vs=!!c||!!u,gs="text/plain",fs=(e,t)=>{var[i,r]=e.split("?"),s=j({},t);null==r||r.split("&").forEach((e=>{var[t]=e.split("=");delete s[t]}));var n=mt(s);return n=n?(r?r+"&":"")+n:r,"".concat(i,"?").concat(n)},ms=(e,t)=>JSON.stringify(e,((e,t)=>"bigint"==typeof t?t.toString():t),t),bs=t=>{var{data:i,compression:r}=t;if(i){if(r===e.GZipJS){var s=Yr(Kr(ms(i)),{mtime:0}),n=new Blob([s],{type:gs});return{contentType:gs,body:n,estimatedSize:n.size}}if(r===e.Base64){var o=function(e){var t,i,r,s,n,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=0,l=0,u="",c=[];if(!e)return e;e=ps(e);do{t=(n=e.charCodeAt(a++)<<16|e.charCodeAt(a++)<<8|e.charCodeAt(a++))>>18&63,i=n>>12&63,r=n>>6&63,s=63&n,c[l++]=o.charAt(t)+o.charAt(i)+o.charAt(r)+o.charAt(s)}while(a<e.length);switch(u=c.join(""),e.length%3){case 1:u=u.slice(0,-2)+"==";break;case 2:u=u.slice(0,-1)+"="}return u}(ms(i)),a=(e=>"data="+encodeURIComponent("string"==typeof e?e:ms(e)))(o);return{contentType:"application/x-www-form-urlencoded",body:a,estimatedSize:new Blob([a]).size}}var l=ms(i);return{contentType:"application/json",body:l,estimatedSize:new Blob([l]).size}}},ys=[];u&&ys.push({transport:"fetch",method:e=>{var t,i,{contentType:r,body:s,estimatedSize:n}=null!==(t=bs(e))&&void 0!==t?t:{},o=new Headers;Y(e.headers,(function(e,t){o.append(t,e)})),r&&o.append("Content-Type",r);var a=e.url,l=null;if(d){var c=new d;l={signal:c.signal,timeout:setTimeout((()=>c.abort()),e.timeout)}}u(a,j({method:(null==e?void 0:e.method)||"GET",headers:o,keepalive:"POST"===e.method&&(n||0)<52428.8,body:s,signal:null===(i=l)||void 0===i?void 0:i.signal},e.fetchOptions)).then((t=>t.text().then((i=>{var r,s={statusCode:t.status,text:i};if(200===t.status)try{s.json=JSON.parse(i)}catch(e){q.error(e)}null===(r=e.callback)||void 0===r||r.call(e,s)})))).catch((t=>{var i;q.error(t),null===(i=e.callback)||void 0===i||i.call(e,{statusCode:0,text:t})})).finally((()=>l?clearTimeout(l.timeout):null))}}),c&&ys.push({transport:"XHR",method:e=>{var t,i=new c;i.open(e.method||"GET",e.url,!0);var{contentType:r,body:s}=null!==(t=bs(e))&&void 0!==t?t:{};Y(e.headers,(function(e,t){i.setRequestHeader(t,e)})),r&&i.setRequestHeader("Content-Type",r),e.timeout&&(i.timeout=e.timeout),i.withCredentials=!0,i.onreadystatechange=()=>{if(4===i.readyState){var t,r={statusCode:i.status,text:i.responseText};if(200===i.status)try{r.json=JSON.parse(i.responseText)}catch(e){}null===(t=e.callback)||void 0===t||t.call(e,r)}},i.send(s)}}),null!=o&&o.sendBeacon&&ys.push({transport:"sendBeacon",method:e=>{var t=fs(e.url,{beacon:"1"});try{var i,{contentType:r,body:s}=null!==(i=bs(e))&&void 0!==i?i:{},n="string"==typeof s?new Blob([s],{type:r}):s;o.sendBeacon(t,n)}catch(e){}}});var ws=["retriesPerformedSoFar"];class Ss{constructor(e){W(this,"isPolling",!1),W(this,"pollIntervalMs",3e3),W(this,"queue",[]),this.instance=e,this.queue=[],this.areWeOnline=!0,!R(t)&&"onLine"in t.navigator&&(this.areWeOnline=t.navigator.onLine,t.addEventListener("online",(()=>{this.areWeOnline=!0,this.flush()})),t.addEventListener("offline",(()=>{this.areWeOnline=!1})))}retriableRequest(e){var{retriesPerformedSoFar:t}=e,i=V(e,ws);O(t)&&t>0&&(i.url=fs(i.url,{retry_count:t})),this.instance._send_request(j(j({},i),{},{callback:e=>{var r;200!==e.statusCode&&(e.statusCode<400||e.statusCode>=500)&&(null!=t?t:0)<10?this.enqueue(j({retriesPerformedSoFar:t},i)):null===(r=i.callback)||void 0===r||r.call(i,e)}}))}enqueue(e){var t=e.retriesPerformedSoFar||0;e.retriesPerformedSoFar=t+1;var i=function(e){var t=3e3*Math.pow(2,e),i=t/2,r=Math.min(18e5,t),s=(Math.random()-.5)*(r-i);return Math.ceil(r+s)}(t),r=Date.now()+i;this.queue.push({retryAt:r,requestOptions:e});var s="Enqueued failed request for retry in ".concat(i);navigator.onLine||(s+=" (Browser is offline)"),q.warn(s),this.isPolling||(this.isPolling=!0,this.poll())}poll(){this.poller&&clearTimeout(this.poller),this.poller=setTimeout((()=>{this.areWeOnline&&this.queue.length>0&&this.flush(),this.poll()}),this.pollIntervalMs)}flush(){var e=Date.now(),t=[],i=this.queue.filter((i=>i.retryAt<e||(t.push(i),!1)));if(this.queue=t,i.length>0)for(var{requestOptions:r}of i)this.retriableRequest(r)}unload(){for(var{requestOptions:e}of(this.poller&&(clearTimeout(this.poller),this.poller=void 0),this.queue))try{this.instance._send_request(j(j({},e),{},{transport:"sendBeacon"}))}catch(e){q.error(e)}this.queue=[]}}var Es,ks=B("[SessionId]");class xs{constructor(e,t,i){var r;if(W(this,"_sessionIdChangedHandlers",[]),!e.persistence)throw new Error("SessionIdManager requires a PostHogPersistence instance");if(e.config.__preview_experimental_cookieless_mode)throw new Error("SessionIdManager cannot be used with __preview_experimental_cookieless_mode");this.config=e.config,this.persistence=e.persistence,this._windowId=void 0,this._sessionId=void 0,this._sessionStartTimestamp=null,this._sessionActivityTimestamp=null,this._sessionIdGenerator=t||et,this._windowIdGenerator=i||et;var s=this.config.persistence_name||this.config.token,n=this.config.session_idle_timeout_seconds||1800;if(this._sessionTimeoutMs=1e3*dr(n,60,36e3,"session_idle_timeout_seconds",1800),e.register({$configured_session_timeout_ms:this._sessionTimeoutMs}),this.resetIdleTimer(),this._window_id_storage_key="ph_"+s+"_window_id",this._primary_window_exists_storage_key="ph_"+s+"_primary_window_exists",this._canUseSessionStorage()){var o=pt.parse(this._window_id_storage_key),a=pt.parse(this._primary_window_exists_storage_key);o&&!a?this._windowId=o:pt.remove(this._window_id_storage_key),pt.set(this._primary_window_exists_storage_key,!0)}if(null!==(r=this.config.bootstrap)&&void 0!==r&&r.sessionID)try{var l=(e=>{var t=e.replace(/-/g,"");if(32!==t.length)throw new Error("Not a valid UUID");if("7"!==t[12])throw new Error("Not a UUIDv7");return parseInt(t.substring(0,12),16)})(this.config.bootstrap.sessionID);this._setSessionId(this.config.bootstrap.sessionID,(new Date).getTime(),l)}catch(e){ks.error("Invalid sessionID in bootstrap",e)}this._listenToReloadWindow()}get sessionTimeoutMs(){return this._sessionTimeoutMs}onSessionId(e){return R(this._sessionIdChangedHandlers)&&(this._sessionIdChangedHandlers=[]),this._sessionIdChangedHandlers.push(e),this._sessionId&&e(this._sessionId,this._windowId),()=>{this._sessionIdChangedHandlers=this._sessionIdChangedHandlers.filter((t=>t!==e))}}_canUseSessionStorage(){return"memory"!==this.config.persistence&&!this.persistence.disabled&&pt.is_supported()}_setWindowId(e){e!==this._windowId&&(this._windowId=e,this._canUseSessionStorage()&&pt.set(this._window_id_storage_key,e))}_getWindowId(){return this._windowId?this._windowId:this._canUseSessionStorage()?pt.parse(this._window_id_storage_key):null}_setSessionId(e,t,i){e===this._sessionId&&t===this._sessionActivityTimestamp&&i===this._sessionStartTimestamp||(this._sessionStartTimestamp=i,this._sessionActivityTimestamp=t,this._sessionId=e,this.persistence.register({[we]:[t,e,i]}))}_getSessionId(){if(this._sessionId&&this._sessionActivityTimestamp&&this._sessionStartTimestamp)return[this._sessionActivityTimestamp,this._sessionId,this._sessionStartTimestamp];var e=this.persistence.props[we];return x(e)&&2===e.length&&e.push(e[0]),e||[0,null,0]}resetSessionId(){this._setSessionId(null,null,null)}_listenToReloadWindow(){null==t||t.addEventListener("beforeunload",(()=>{this._canUseSessionStorage()&&pt.remove(this._primary_window_exists_storage_key)}))}checkAndGetSessionAndWindowId(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.config.__preview_experimental_cookieless_mode)throw new Error("checkAndGetSessionAndWindowId should not be called in __preview_experimental_cookieless_mode");var i=t||(new Date).getTime(),[r,s,n]=this._getSessionId(),o=this._getWindowId(),a=O(n)&&n>0&&Math.abs(i-n)>864e5,l=!1,u=!s,c=!e&&Math.abs(i-r)>this.sessionTimeoutMs;u||c||a?(s=this._sessionIdGenerator(),o=this._windowIdGenerator(),ks.info("new session ID generated",{sessionId:s,windowId:o,changeReason:{noSessionId:u,activityTimeout:c,sessionPastMaximumLength:a}}),n=i,l=!0):o||(o=this._windowIdGenerator(),l=!0);var d=0===r||!e||a?i:r,h=0===n?(new Date).getTime():n;return this._setWindowId(o),this._setSessionId(s,d,h),e||this.resetIdleTimer(),l&&this._sessionIdChangedHandlers.forEach((e=>e(s,o,l?{noSessionId:u,activityTimeout:c,sessionPastMaximumLength:a}:void 0))),{sessionId:s,windowId:o,sessionStartTimestamp:h,changeReason:l?{noSessionId:u,activityTimeout:c,sessionPastMaximumLength:a}:void 0,lastActivityTimestamp:r}}resetIdleTimer(){clearTimeout(this._enforceIdleTimeout),this._enforceIdleTimeout=setTimeout((()=>{this.resetSessionId()}),1.1*this.sessionTimeoutMs)}}!function(e){e.US="us",e.EU="eu",e.CUSTOM="custom"}(Es||(Es={}));var Is="i.posthog.com";class Cs{constructor(e){W(this,"_regionCache",{}),this.instance=e}get apiHost(){var e=this.instance.config.api_host.trim().replace(/\/$/,"");return"https://app.posthog.com"===e?"https://us.i.posthog.com":e}get uiHost(){var e,t=null===(e=this.instance.config.ui_host)||void 0===e?void 0:e.replace(/\/$/,"");return t||(t=this.apiHost.replace(".".concat(Is),".posthog.com")),"https://app.posthog.com"===t?"https://us.posthog.com":t}get region(){return this._regionCache[this.apiHost]||(/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=Es.US:/https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)?this._regionCache[this.apiHost]=Es.EU:this._regionCache[this.apiHost]=Es.CUSTOM),this._regionCache[this.apiHost]}endpointFor(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t&&(t="/"===t[0]?t:"/".concat(t)),"ui"===e)return this.uiHost+t;if(this.region===Es.CUSTOM)return this.apiHost+t;var i=Is+t;switch(e){case"assets":return"https://".concat(this.region,"-assets.").concat(i);case"api":return"https://".concat(this.region,".").concat(i)}}}var Ps="posthog-js";function Rs(e){var{organization:t,projectId:i,prefix:r,severityAllowList:s=["error"]}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=>{var o,a,l,u,c;if(!("*"===s||s.includes(n.level))||!e.__loaded)return n;n.tags||(n.tags={});var d=e.requestRouter.endpointFor("ui","/project/".concat(e.config.token,"/person/").concat(e.get_distinct_id()));n.tags["PostHog Person URL"]=d,e.sessionRecordingStarted()&&(n.tags["PostHog Recording URL"]=e.get_session_replay_url({withTimestamp:!0}));var h=(null===(o=n.exception)||void 0===o?void 0:o.values)||[];h.forEach((e=>{e.stacktrace&&(e.stacktrace.type="raw",e.stacktrace.frames.forEach((e=>{e.platform="web:javascript"})))}));var _={$exception_message:(null===(a=h[0])||void 0===a?void 0:a.value)||n.message,$exception_type:null===(l=h[0])||void 0===l?void 0:l.type,$exception_personURL:d,$exception_level:n.level,$exception_list:h,$sentry_event_id:n.event_id,$sentry_exception:n.exception,$sentry_exception_message:(null===(u=h[0])||void 0===u?void 0:u.value)||n.message,$sentry_exception_type:null===(c=h[0])||void 0===c?void 0:c.type,$sentry_tags:n.tags};return t&&i&&(_.$sentry_url=(r||"https://sentry.io/organizations/")+t+"/issues/?project="+i+"&query="+n.event_id),e.exceptions.sendExceptionEvent(_),n}}class Fs{constructor(e,t,i,r,s){this.name=Ps,this.setupOnce=function(n){n(Rs(e,{organization:t,projectId:i,prefix:r,severityAllowList:s}))}}}var Ts=B("[SegmentIntegration]");function $s(e,t){var i=e.config.segment;if(!i)return t();!function(e,t){var i=e.config.segment;if(!i)return t();var r=i=>{var r=()=>i.anonymousId()||et();e.config.get_device_id=r,i.id()&&(e.register({distinct_id:i.id(),$device_id:r()}),e.persistence.set_property($e,"identified")),t()},s=i.user();"then"in s&&I(s.then)?s.then((e=>r(e))):r(s)}(e,(()=>{i.register((e=>{Promise&&Promise.resolve||Ts.warn("This browser does not have Promise support, and can not use the segment integration");var t=(t,i)=>{var r;if(!i)return t;t.event.userId||t.event.anonymousId===e.get_distinct_id()||(Ts.info("No userId set, resetting PostHog"),e.reset()),t.event.userId&&t.event.userId!==e.get_distinct_id()&&(Ts.info("UserId set, identifying with PostHog"),e.identify(t.event.userId));var s=e._calculate_event_properties(i,null!==(r=t.event.properties)&&void 0!==r?r:{},new Date);return t.event.properties=Object.assign({},s,t.event.properties),t};return{name:"PostHog JS",type:"enrichment",version:"1.0.0",isLoaded:()=>!0,load:()=>Promise.resolve(),track:e=>t(e,e.event.event),page:e=>t(e,"$pageview"),identify:e=>t(e,"$identify"),screen:e=>t(e,"$screen")}})(e)).then((()=>{t()}))}))}class Ms{constructor(e){this._instance=e}doPageView(e,i){var r,s=this._previousPageViewProperties(e,i);return this._currentPageview={pathname:null!==(r=null==t?void 0:t.location.pathname)&&void 0!==r?r:"",pageViewId:i,timestamp:e},this._instance.scrollManager.resetContext(),s}doPageLeave(e){var t;return this._previousPageViewProperties(e,null===(t=this._currentPageview)||void 0===t?void 0:t.pageViewId)}doEvent(){var e;return{$pageview_id:null===(e=this._currentPageview)||void 0===e?void 0:e.pageViewId}}_previousPageViewProperties(e,t){var i=this._currentPageview;if(!i)return{$pageview_id:t};var r={$pageview_id:t,$prev_pageview_id:i.pageViewId},s=this._instance.scrollManager.getContext();if(s&&!this._instance.config.disable_scroll_properties){var{maxScrollHeight:n,lastScrollY:o,maxScrollY:a,maxContentHeight:l,lastContentY:u,maxContentY:c}=s;if(!(R(n)||R(o)||R(a)||R(l)||R(u)||R(c))){n=Math.ceil(n),o=Math.ceil(o),a=Math.ceil(a),l=Math.ceil(l),u=Math.ceil(u),c=Math.ceil(c);var d=n<=1?1:dr(o/n,0,1),h=n<=1?1:dr(a/n,0,1),_=l<=1?1:dr(u/l,0,1),p=l<=1?1:dr(c/l,0,1);r=K(r,{$prev_pageview_last_scroll:o,$prev_pageview_last_scroll_percentage:d,$prev_pageview_max_scroll:a,$prev_pageview_max_scroll_percentage:h,$prev_pageview_last_content:u,$prev_pageview_last_content_percentage:_,$prev_pageview_max_content:c,$prev_pageview_max_content_percentage:p})}}return i.pathname&&(r.$prev_pageview_pathname=i.pathname),i.timestamp&&(r.$prev_pageview_duration=(e.getTime()-i.timestamp.getTime())/1e3),r}}var Os,Ls,As,Ds,Ns,qs,Bs,Hs,Us={},zs=[],js=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ws=Array.isArray;function Vs(e,t){for(var i in t)e[i]=t[i];return e}function Gs(e){var t=e.parentNode;t&&t.removeChild(e)}function Js(e,t,i,r,s){var n={type:e,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==s?++As:s,__i:-1,__u:0};return null==s&&null!=Ls.vnode&&Ls.vnode(n),n}function Ys(e){return e.children}function Ks(e,t){this.props=e,this.context=t}function Xs(e,t){if(null==t)return e.__?Xs(e.__,e.__i+1):null;for(var i;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e)return i.__e;return"function"==typeof e.type?Xs(e):null}function Qs(e){var t,i;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(i=e.__k[t])&&null!=i.__e){e.__e=e.__c.base=i.__e;break}return Qs(e)}}function Zs(e){(!e.__d&&(e.__d=!0)&&Ds.push(e)&&!en.__r++||Ns!==Ls.debounceRendering)&&((Ns=Ls.debounceRendering)||qs)(en)}function en(){var e,t,i,r,s,n,o,a,l;for(Ds.sort(Bs);e=Ds.shift();)e.__d&&(t=Ds.length,r=void 0,n=(s=(i=e).__v).__e,a=[],l=[],(o=i.__P)&&((r=Vs({},s)).__v=s.__v+1,Ls.vnode&&Ls.vnode(r),cn(o,r,s,i.__n,void 0!==o.ownerSVGElement,32&s.__u?[n]:null,a,null==n?Xs(s):n,!!(32&s.__u),l),r.__.__k[r.__i]=r,dn(a,r,l),r.__e!=n&&Qs(r)),Ds.length>t&&Ds.sort(Bs));en.__r=0}function tn(e,t,i,r,s,n,o,a,l,u,c){var d,h,_,p,v,g=r&&r.__k||zs,f=t.length;for(i.__d=l,rn(i,t,g),l=i.__d,d=0;d<f;d++)null!=(_=i.__k[d])&&"boolean"!=typeof _&&"function"!=typeof _&&(h=-1===_.__i?Us:g[_.__i]||Us,_.__i=d,cn(e,_,h,s,n,o,a,l,u,c),p=_.__e,_.ref&&h.ref!=_.ref&&(h.ref&&_n(h.ref,null,_),c.push(_.ref,_.__c||p,_)),null==v&&null!=p&&(v=p),65536&_.__u||h.__k===_.__k?l=sn(_,l,e):"function"==typeof _.type&&void 0!==_.__d?l=_.__d:p&&(l=p.nextSibling),_.__d=void 0,_.__u&=-196609);i.__d=l,i.__e=v}function rn(e,t,i){var r,s,n,o,a,l=t.length,u=i.length,c=u,d=0;for(e.__k=[],r=0;r<l;r++)null!=(s=e.__k[r]=null==(s=t[r])||"boolean"==typeof s||"function"==typeof s?null:"string"==typeof s||"number"==typeof s||"bigint"==typeof s||s.constructor==String?Js(null,s,null,null,s):Ws(s)?Js(Ys,{children:s},null,null,null):void 0===s.constructor&&s.__b>0?Js(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)?(s.__=e,s.__b=e.__b+1,a=nn(s,i,o=r+d,c),s.__i=a,n=null,-1!==a&&(c--,(n=i[a])&&(n.__u|=131072)),null==n||null===n.__v?(-1==a&&d--,"function"!=typeof s.type&&(s.__u|=65536)):a!==o&&(a===o+1?d++:a>o?c>l-o?d+=a-o:d--:d=a<o&&a==o-1?a-o:0,a!==r+d&&(s.__u|=65536))):(n=i[r])&&null==n.key&&n.__e&&(n.__e==e.__d&&(e.__d=Xs(n)),pn(n,n,!1),i[r]=null,c--);if(c)for(r=0;r<u;r++)null!=(n=i[r])&&0==(131072&n.__u)&&(n.__e==e.__d&&(e.__d=Xs(n)),pn(n,n))}function sn(e,t,i){var r,s;if("function"==typeof e.type){for(r=e.__k,s=0;r&&s<r.length;s++)r[s]&&(r[s].__=e,t=sn(r[s],t,i));return t}return e.__e!=t&&(i.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function nn(e,t,i,r){var s=e.key,n=e.type,o=i-1,a=i+1,l=t[i];if(null===l||l&&s==l.key&&n===l.type)return i;if(r>(null!=l&&0==(131072&l.__u)?1:0))for(;o>=0||a<t.length;){if(o>=0){if((l=t[o])&&0==(131072&l.__u)&&s==l.key&&n===l.type)return o;o--}if(a<t.length){if((l=t[a])&&0==(131072&l.__u)&&s==l.key&&n===l.type)return a;a++}}return-1}function on(e,t,i){"-"===t[0]?e.setProperty(t,null==i?"":i):e[t]=null==i?"":"number"!=typeof i||js.test(t)?i:i+"px"}function an(e,t,i,r,s){var n;e:if("style"===t)if("string"==typeof i)e.style.cssText=i;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)i&&t in i||on(e.style,t,"");if(i)for(t in i)r&&i[t]===r[t]||on(e.style,t,i[t])}else if("o"===t[0]&&"n"===t[1])n=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=i,i?r?i.u=r.u:(i.u=Date.now(),e.addEventListener(t,n?un:ln,n)):e.removeEventListener(t,n?un:ln,n);else{if(s)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&"role"!==t&&t in e)try{e[t]=null==i?"":i;break e}catch(e){}"function"==typeof i||(null==i||!1===i&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,i))}}function ln(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(Ls.event?Ls.event(e):e)}function un(e){return this.l[e.type+!0](Ls.event?Ls.event(e):e)}function cn(e,t,i,r,s,n,o,a,l,u){var c,d,h,_,p,v,g,f,m,b,y,w,S,E,k,x=t.type;if(void 0!==t.constructor)return null;128&i.__u&&(l=!!(32&i.__u),n=[a=t.__e=i.__e]),(c=Ls.__b)&&c(t);e:if("function"==typeof x)try{if(f=t.props,m=(c=x.contextType)&&r[c.__c],b=c?m?m.props.value:c.__:r,i.__c?g=(d=t.__c=i.__c).__=d.__E:("prototype"in x&&x.prototype.render?t.__c=d=new x(f,b):(t.__c=d=new Ks(f,b),d.constructor=x,d.render=vn),m&&m.sub(d),d.props=f,d.state||(d.state={}),d.context=b,d.__n=r,h=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=x.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=Vs({},d.__s)),Vs(d.__s,x.getDerivedStateFromProps(f,d.__s))),_=d.props,p=d.state,d.__v=t,h)null==x.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==x.getDerivedStateFromProps&&f!==_&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(f,b),!d.__e&&(null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(f,d.__s,b)||t.__v===i.__v)){for(t.__v!==i.__v&&(d.props=f,d.state=d.__s,d.__d=!1),t.__e=i.__e,t.__k=i.__k,t.__k.forEach((function(e){e&&(e.__=t)})),y=0;y<d._sb.length;y++)d.__h.push(d._sb[y]);d._sb=[],d.__h.length&&o.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(f,d.__s,b),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(_,p,v)}))}if(d.context=b,d.props=f,d.__P=e,d.__e=!1,w=Ls.__r,S=0,"prototype"in x&&x.prototype.render){for(d.state=d.__s,d.__d=!1,w&&w(t),c=d.render(d.props,d.state,d.context),E=0;E<d._sb.length;E++)d.__h.push(d._sb[E]);d._sb=[]}else do{d.__d=!1,w&&w(t),c=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++S<25);d.state=d.__s,null!=d.getChildContext&&(r=Vs(Vs({},r),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(_,p)),tn(e,Ws(k=null!=c&&c.type===Ys&&null==c.key?c.props.children:c)?k:[k],t,i,r,s,n,o,a,l,u),d.base=t.__e,t.__u&=-161,d.__h.length&&o.push(d),g&&(d.__E=d.__=null)}catch(e){t.__v=null,l||null!=n?(t.__e=a,t.__u|=l?160:32,n[n.indexOf(a)]=null):(t.__e=i.__e,t.__k=i.__k),Ls.__e(e,t,i)}else null==n&&t.__v===i.__v?(t.__k=i.__k,t.__e=i.__e):t.__e=hn(i.__e,t,i,r,s,n,o,l,u);(c=Ls.diffed)&&c(t)}function dn(e,t,i){t.__d=void 0;for(var r=0;r<i.length;r++)_n(i[r],i[++r],i[++r]);Ls.__c&&Ls.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){Ls.__e(e,t.__v)}}))}function hn(e,t,i,r,s,n,o,a,l){var u,c,d,h,_,p,v,g=i.props,f=t.props,m=t.type;if("svg"===m&&(s=!0),null!=n)for(u=0;u<n.length;u++)if((_=n[u])&&"setAttribute"in _==!!m&&(m?_.localName===m:3===_.nodeType)){e=_,n[u]=null;break}if(null==e){if(null===m)return document.createTextNode(f);e=s?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,f.is&&f),n=null,a=!1}if(null===m)g===f||a&&e.data===f||(e.data=f);else{if(n=n&&Os.call(e.childNodes),g=i.props||Us,!a&&null!=n)for(g={},u=0;u<e.attributes.length;u++)g[(_=e.attributes[u]).name]=_.value;for(u in g)_=g[u],"children"==u||("dangerouslySetInnerHTML"==u?d=_:"key"===u||u in f||an(e,u,null,_,s));for(u in f)_=f[u],"children"==u?h=_:"dangerouslySetInnerHTML"==u?c=_:"value"==u?p=_:"checked"==u?v=_:"key"===u||a&&"function"!=typeof _||g[u]===_||an(e,u,_,g[u],s);if(c)a||d&&(c.__html===d.__html||c.__html===e.innerHTML)||(e.innerHTML=c.__html),t.__k=[];else if(d&&(e.innerHTML=""),tn(e,Ws(h)?h:[h],t,i,r,s&&"foreignObject"!==m,n,o,n?n[0]:i.__k&&Xs(i,0),a,l),null!=n)for(u=n.length;u--;)null!=n[u]&&Gs(n[u]);a||(u="value",void 0!==p&&(p!==e[u]||"progress"===m&&!p||"option"===m&&p!==g[u])&&an(e,u,p,g[u],!1),u="checked",void 0!==v&&v!==e[u]&&an(e,u,v,g[u],!1))}return e}function _n(e,t,i){try{"function"==typeof e?e(t):e.current=t}catch(e){Ls.__e(e,i)}}function pn(e,t,i){var r,s;if(Ls.unmount&&Ls.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||_n(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){Ls.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(s=0;s<r.length;s++)r[s]&&pn(r[s],t,i||"function"!=typeof e.type);i||null==e.__e||Gs(e.__e),e.__=e.__e=e.__d=void 0}function vn(e,t,i){return this.constructor(e,i)}Os=zs.slice,Ls={__e:function(e,t,i,r){for(var s,n,o;t=t.__;)if((s=t.__c)&&!s.__)try{if((n=s.constructor)&&null!=n.getDerivedStateFromError&&(s.setState(n.getDerivedStateFromError(e)),o=s.__d),null!=s.componentDidCatch&&(s.componentDidCatch(e,r||{}),o=s.__d),o)return s.__E=s}catch(t){e=t}throw e}},As=0,Ks.prototype.setState=function(e,t){var i;i=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=Vs({},this.state),"function"==typeof e&&(e=e(Vs({},i),this.props)),e&&Vs(i,e),null!=e&&this.__v&&(t&&this._sb.push(t),Zs(this))},Ks.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Zs(this))},Ks.prototype.render=Ys,Ds=[],qs="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Bs=function(e,t){return e.__v.__b-t.__v.__b},en.__r=0,Hs=0;var gn,fn,mn;!function(e,t){var i={__c:t="__cC"+Hs++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var i,r;return this.getChildContext||(i=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&i.some((function(e){e.__e=!0,Zs(e)}))},this.sub=function(e){i.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){i.splice(i.indexOf(e),1),t&&t.call(e)}}),e.children}};i.Provider.__=i.Consumer.contextType=i}({isPreviewMode:!1,previewPageIndex:0,handleCloseSurveyPopup:()=>{},isPopup:!0,onPreviewSubmit:()=>{}}),function(e){e.Popover="popover",e.API="api",e.Widget="widget"}(gn||(gn={})),function(e){e.Open="open",e.MultipleChoice="multiple_choice",e.SingleChoice="single_choice",e.Rating="rating",e.Link="link"}(fn||(fn={})),function(e){e.NextQuestion="next_question",e.End="end",e.ResponseBased="response_based",e.SpecificQuestion="specific_question"}(mn||(mn={}));class bn{constructor(){W(this,"events",{}),this.events={}}on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),()=>{this.events[e]=this.events[e].filter((e=>e!==t))}}emit(e,t){for(var i of this.events[e]||[])i(t);for(var r of this.events["*"]||[])r(e,t)}}class yn{constructor(e){W(this,"_debugEventEmitter",new bn),W(this,"checkStep",((e,t)=>this.checkStepEvent(e,t)&&this.checkStepUrl(e,t)&&this.checkStepElement(e,t))),W(this,"checkStepEvent",((e,t)=>null==t||!t.event||(null==e?void 0:e.event)===(null==t?void 0:t.event))),this.instance=e,this.actionEvents=new Set,this.actionRegistry=new Set}init(){var e;if(!R(null===(e=this.instance)||void 0===e?void 0:e._addCaptureHook)){var t;null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.on(e,t)}))}}register(e){var t,i;if(!R(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)&&(e.forEach((e=>{var t,i;null===(t=this.actionRegistry)||void 0===t||t.add(e),null===(i=e.steps)||void 0===i||i.forEach((e=>{var t;null===(t=this.actionEvents)||void 0===t||t.add((null==e?void 0:e.event)||"")}))})),null!==(i=this.instance)&&void 0!==i&&i.autocapture)){var r,s=new Set;e.forEach((e=>{var t;null===(t=e.steps)||void 0===t||t.forEach((e=>{null!=e&&e.selector&&s.add(null==e?void 0:e.selector)}))})),null===(r=this.instance)||void 0===r||r.autocapture.setElementSelectors(s)}}on(e,t){var i;null!=t&&0!=e.length&&(this.actionEvents.has(e)||this.actionEvents.has(null==t?void 0:t.event))&&this.actionRegistry&&(null===(i=this.actionRegistry)||void 0===i?void 0:i.size)>0&&this.actionRegistry.forEach((e=>{this.checkAction(t,e)&&this._debugEventEmitter.emit("actionCaptured",e.name)}))}_addActionHook(e){this.onAction("actionCaptured",(t=>e(t)))}checkAction(e,t){if(null==(null==t?void 0:t.steps))return!1;for(var i of t.steps)if(this.checkStep(e,i))return!0;return!1}onAction(e,t){return this._debugEventEmitter.on(e,t)}checkStepUrl(e,t){if(null!=t&&t.url){var i,r=null==e||null===(i=e.properties)||void 0===i?void 0:i.$current_url;if(!r||"string"!=typeof r)return!1;if(!yn.matchString(r,null==t?void 0:t.url,(null==t?void 0:t.url_matching)||"contains"))return!1}return!0}static matchString(e,i,r){switch(r){case"regex":return!!t&&ft(e,i);case"exact":return i===e;case"contains":var s=yn.escapeStringRegexp(i).replace(/_/g,".").replace(/%/g,".*");return ft(e,s);default:return!1}}static escapeStringRegexp(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}checkStepElement(e,t){if((null!=t&&t.href||null!=t&&t.tag_name||null!=t&&t.text)&&!this.getElementsList(e).some((e=>!(null!=t&&t.href&&!yn.matchString(e.href||"",null==t?void 0:t.href,(null==t?void 0:t.href_matching)||"exact"))&&((null==t||!t.tag_name||e.tag_name===(null==t?void 0:t.tag_name))&&!(null!=t&&t.text&&!yn.matchString(e.text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact")&&!yn.matchString(e.$el_text||"",null==t?void 0:t.text,(null==t?void 0:t.text_matching)||"exact"))))))return!1;if(null!=t&&t.selector){var i,r=null==e||null===(i=e.properties)||void 0===i?void 0:i.$element_selectors;if(!r)return!1;if(!r.includes(null==t?void 0:t.selector))return!1}return!0}getElementsList(e){return null==(null==e?void 0:e.properties.$elements)?[]:null==e?void 0:e.properties.$elements}}class wn{constructor(e){this.instance=e,this.eventToSurveys=new Map,this.actionToSurveys=new Map}register(e){var t;R(null===(t=this.instance)||void 0===t?void 0:t._addCaptureHook)||(this.setupEventBasedSurveys(e),this.setupActionBasedSurveys(e))}setupActionBasedSurveys(e){var t=e.filter((e=>{var t,i,r,s;return(null===(t=e.conditions)||void 0===t?void 0:t.actions)&&(null===(i=e.conditions)||void 0===i||null===(r=i.actions)||void 0===r||null===(s=r.values)||void 0===s?void 0:s.length)>0}));if(0!==t.length){if(null==this.actionMatcher){this.actionMatcher=new yn(this.instance),this.actionMatcher.init();this.actionMatcher._addActionHook((e=>{this.onAction(e)}))}t.forEach((e=>{var t,i,r,s,n,o,a,l,u,c;e.conditions&&null!==(t=e.conditions)&&void 0!==t&&t.actions&&null!==(i=e.conditions)&&void 0!==i&&null!==(r=i.actions)&&void 0!==r&&r.values&&(null===(s=e.conditions)||void 0===s||null===(n=s.actions)||void 0===n||null===(o=n.values)||void 0===o?void 0:o.length)>0&&(null===(a=this.actionMatcher)||void 0===a||a.register(e.conditions.actions.values),null===(l=e.conditions)||void 0===l||null===(u=l.actions)||void 0===u||null===(c=u.values)||void 0===c||c.forEach((t=>{if(t&&t.name){var i=this.actionToSurveys.get(t.name);i&&i.push(e.id),this.actionToSurveys.set(t.name,i||[e.id])}})))}))}}setupEventBasedSurveys(e){var t;if(0!==e.filter((e=>{var t,i,r,s;return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(i=e.conditions)||void 0===i||null===(r=i.events)||void 0===r||null===(s=r.values)||void 0===s?void 0:s.length)>0})).length){null===(t=this.instance)||void 0===t||t._addCaptureHook(((e,t)=>{this.onEvent(e,t)})),e.forEach((e=>{var t,i,r;null===(t=e.conditions)||void 0===t||null===(i=t.events)||void 0===i||null===(r=i.values)||void 0===r||r.forEach((t=>{if(t&&t.name){var i=this.eventToSurveys.get(t.name);i&&i.push(e.id),this.eventToSurveys.set(t.name,i||[e.id])}}))}))}}onEvent(e,t){var i,r,s=(null===(i=this.instance)||void 0===i||null===(r=i.persistence)||void 0===r?void 0:r.props[Fe])||[];if(wn.SURVEY_SHOWN_EVENT_NAME==e&&t&&s.length>0){var n,o=null==t||null===(n=t.properties)||void 0===n?void 0:n.$survey_id;if(o){var a=s.indexOf(o);a>=0&&(s.splice(a,1),this._updateActivatedSurveys(s))}}else this.eventToSurveys.has(e)&&this._updateActivatedSurveys(s.concat(this.eventToSurveys.get(e)||[]))}onAction(e){var t,i,r=(null===(t=this.instance)||void 0===t||null===(i=t.persistence)||void 0===i?void 0:i.props[Fe])||[];this.actionToSurveys.has(e)&&this._updateActivatedSurveys(r.concat(this.actionToSurveys.get(e)||[]))}_updateActivatedSurveys(e){var t,i;null===(t=this.instance)||void 0===t||null===(i=t.persistence)||void 0===i||i.register({[Fe]:[...new Set(e)]})}getSurveys(){var e,t,i=null===(e=this.instance)||void 0===e||null===(t=e.persistence)||void 0===t?void 0:t.props[Fe];return i||[]}getEventToSurveys(){return this.eventToSurveys}_getActionMatcher(){return this.actionMatcher}}W(wn,"SURVEY_SHOWN_EVENT_NAME","survey shown");var Sn=B("[Surveys]"),En={icontains:e=>!!t&&t.location.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:e=>!!t&&-1===t.location.href.toLowerCase().indexOf(e.toLowerCase()),regex:e=>!!t&&ft(t.location.href,e),not_regex:e=>!!t&&!ft(t.location.href,e),exact:e=>(null==t?void 0:t.location.href)===e,is_not:e=>(null==t?void 0:t.location.href)!==e};function kn(e,t,i){var r,s=e.questions[t],n=t+1;if(null===(r=s.branching)||void 0===r||!r.type)return t===e.questions.length-1?mn.End:n;if(s.branching.type===mn.End)return mn.End;if(s.branching.type===mn.SpecificQuestion){if(Number.isInteger(s.branching.index))return s.branching.index}else if(s.branching.type===mn.ResponseBased){if(s.type===fn.SingleChoice){var o,a,l=s.choices.indexOf("".concat(i));if(null!==(o=s.branching)&&void 0!==o&&null!==(a=o.responseValues)&&void 0!==a&&a.hasOwnProperty(l)){var u=s.branching.responseValues[l];return Number.isInteger(u)?u:u===mn.End?mn.End:n}}else if(s.type===fn.Rating){var c,d;if("number"!=typeof i||!Number.isInteger(i))throw new Error("The response type must be an integer");var h=function(e,t){if(3===t){if(e<1||e>3)throw new Error("The response must be in range 1-3");return 1===e?"negative":2===e?"neutral":"positive"}if(5===t){if(e<1||e>5)throw new Error("The response must be in range 1-5");return e<=2?"negative":3===e?"neutral":"positive"}if(7===t){if(e<1||e>7)throw new Error("The response must be in range 1-7");return e<=3?"negative":4===e?"neutral":"positive"}if(10===t){if(e<0||e>10)throw new Error("The response must be in range 0-10");return e<=6?"detractors":e<=8?"passives":"promoters"}throw new Error("The scale must be one of: 3, 5, 7, 10")}(i,s.scale);if(null!==(c=s.branching)&&void 0!==c&&null!==(d=c.responseValues)&&void 0!==d&&d.hasOwnProperty(h)){var _=s.branching.responseValues[h];return Number.isInteger(_)?_:_===mn.End?mn.End:n}}return n}return Sn.warn("Falling back to next question index due to unexpected branching type"),n}class xn{constructor(e){W(this,"getNextSurveyStep",kn),this.instance=e,this._surveyEventReceiver=null}onRemoteConfig(e){this._decideServerResponse=!!e.surveys,Sn.info("decideServerResponse set to ".concat(this._decideServerResponse)),this.loadIfEnabled()}reset(){localStorage.removeItem("lastSeenSurveyDate");var e=(()=>{for(var e=[],t=0;t<localStorage.length;t++){var i=localStorage.key(t);null!=i&&i.startsWith("seenSurvey_")&&e.push(i)}return e})();e.forEach((e=>localStorage.removeItem(e)))}loadIfEnabled(){if(!this._surveyManager)if(this.instance.config.disable_surveys)Sn.info("Disabled. Not loading surveys.");else{var e=null==_?void 0:_.__PosthogExtensions__;if(e){var t=e.generateSurveys;if(this._decideServerResponse)if(null==this._surveyEventReceiver&&(this._surveyEventReceiver=new wn(this.instance)),t)this._surveyManager=t(this.instance);else{var i=e.loadExternalDependency;i?i(this.instance,"surveys",(t=>{var i;t?Sn.error("Could not load surveys script",t):this._surveyManager=null===(i=e.generateSurveys)||void 0===i?void 0:i.call(e,this.instance)})):Sn.error("PostHog loadExternalDependency extension not found. Cannot load remote config.")}else Sn.warn("Decide not loaded yet. Not loading surveys.")}else Sn.error("PostHog Extensions not found.")}}getSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.instance.config.disable_surveys)return Sn.info("Disabled. Not loading surveys."),e([]);null==this._surveyEventReceiver&&(this._surveyEventReceiver=new wn(this.instance));var i=this.instance.get_property(Re);if(i&&!t)return Sn.info("Surveys already loaded, using existing data."),e(i);this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/surveys/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{var i,r=t.statusCode;if(200!==r||!t.json)return Sn.error("Surveys API could not be loaded, status: ".concat(r)),e([]);var s,n=t.json.surveys||[],o=n.filter((e=>{var t,i,r,s,n,o,a,l,u,c,d,h;return(null===(t=e.conditions)||void 0===t?void 0:t.events)&&(null===(i=e.conditions)||void 0===i||null===(r=i.events)||void 0===r?void 0:r.values)&&(null===(s=e.conditions)||void 0===s||null===(n=s.events)||void 0===n||null===(o=n.values)||void 0===o?void 0:o.length)>0||(null===(a=e.conditions)||void 0===a?void 0:a.actions)&&(null===(l=e.conditions)||void 0===l||null===(u=l.actions)||void 0===u?void 0:u.values)&&(null===(c=e.conditions)||void 0===c||null===(d=c.actions)||void 0===d||null===(h=d.values)||void 0===h?void 0:h.length)>0}));o.length>0&&(null===(s=this._surveyEventReceiver)||void 0===s||s.register(o));return null===(i=this.instance.persistence)||void 0===i||i.register({[Re]:n}),e(n)}})}getActiveMatchingSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.getSurveys((t=>{var i,r=t.filter((e=>!(!e.start_date||e.end_date))).filter((e=>{var t,i,r,s;if(!e.conditions)return!0;var n=null===(t=e.conditions)||void 0===t||!t.url||En[null!==(i=null===(r=e.conditions)||void 0===r?void 0:r.urlMatchType)&&void 0!==i?i:"icontains"](e.conditions.url),o=null===(s=e.conditions)||void 0===s||!s.selector||(null==a?void 0:a.querySelector(e.conditions.selector));return n&&o})),s=null===(i=this._surveyEventReceiver)||void 0===i?void 0:i.getSurveys(),n=r.filter((e=>{var t,i,r,n,o,a,l,u,c,d,h;if(!(e.linked_flag_key||e.targeting_flag_key||e.internal_targeting_flag_key||null!==(t=e.feature_flag_keys)&&void 0!==t&&t.length))return!0;var _=!e.linked_flag_key||this.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),p=!e.targeting_flag_key||this.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key),v=(null===(i=e.conditions)||void 0===i?void 0:i.events)&&(null===(r=e.conditions)||void 0===r||null===(n=r.events)||void 0===n?void 0:n.values)&&(null===(o=e.conditions)||void 0===o||null===(a=o.events)||void 0===a?void 0:a.values.length)>0,g=(null===(l=e.conditions)||void 0===l?void 0:l.actions)&&(null===(u=e.conditions)||void 0===u||null===(c=u.actions)||void 0===c?void 0:c.values)&&(null===(d=e.conditions)||void 0===d||null===(h=d.actions)||void 0===h?void 0:h.values.length)>0,f=!v&&!g||(null==s?void 0:s.includes(e.id)),m=this._canActivateRepeatedly(e),b=!(e.internal_targeting_flag_key&&!m)||this.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key),y=this.checkFlags(e);return _&&p&&b&&f&&y}));return e(n)}),t)}checkFlags(e){var t;return null===(t=e.feature_flag_keys)||void 0===t||!t.length||e.feature_flag_keys.every((e=>{var{key:t,value:i}=e;return!t||!i||this.instance.featureFlags.isFeatureEnabled(i)}))}_canActivateRepeatedly(e){var t;return M(null===(t=_.__PosthogExtensions__)||void 0===t?void 0:t.canActivateRepeatedly)?(Sn.warn("init was not called"),!1):_.__PosthogExtensions__.canActivateRepeatedly(e)}canRenderSurvey(e){M(this._surveyManager)?Sn.warn("init was not called"):this.getSurveys((t=>{var i=t.filter((t=>t.id===e))[0];this._surveyManager.canRenderSurvey(i)}))}renderSurvey(e,t){M(this._surveyManager)?Sn.warn("init was not called"):this.getSurveys((i=>{var r=i.filter((t=>t.id===e))[0];this._surveyManager.renderSurvey(r,null==a?void 0:a.querySelector(t))}))}}var In=B("[RateLimiter]");class Cn{constructor(e){var t,i;W(this,"serverLimits",{}),W(this,"lastEventRateLimited",!1),W(this,"checkForLimiting",(e=>{var t=e.text;if(t&&t.length)try{(JSON.parse(t).quota_limited||[]).forEach((e=>{In.info("".concat(e||"events"," is quota limited.")),this.serverLimits[e]=(new Date).getTime()+6e4}))}catch(e){return void In.warn('could not rate limit - continuing. Error: "'.concat(null==e?void 0:e.message,'"'),{text:t})}})),this.instance=e,this.captureEventsPerSecond=(null===(t=e.config.rate_limiting)||void 0===t?void 0:t.events_per_second)||10,this.captureEventsBurstLimit=Math.max((null===(i=e.config.rate_limiting)||void 0===i?void 0:i.events_burst_limit)||10*this.captureEventsPerSecond,this.captureEventsPerSecond),this.lastEventRateLimited=this.clientRateLimitContext(!0).isRateLimited}clientRateLimitContext(){var e,t,i,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=(new Date).getTime(),n=null!==(e=null===(t=this.instance.persistence)||void 0===t?void 0:t.get_property(Oe))&&void 0!==e?e:{tokens:this.captureEventsBurstLimit,last:s};n.tokens+=(s-n.last)/1e3*this.captureEventsPerSecond,n.last=s,n.tokens>this.captureEventsBurstLimit&&(n.tokens=this.captureEventsBurstLimit);var o=n.tokens<1;return o||r||(n.tokens=Math.max(0,n.tokens-1)),!o||this.lastEventRateLimited||r||this.instance.capture("$$client_ingestion_warning",{$$client_ingestion_warning_message:"posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond," events per second and ").concat(this.captureEventsBurstLimit," events burst limit.")},{skip_client_rate_limiting:!0}),this.lastEventRateLimited=o,null===(i=this.instance.persistence)||void 0===i||i.set_property(Oe,n),{isRateLimited:o,remainingTokens:n.tokens}}isServerRateLimited(e){var t=this.serverLimits[e||"events"]||!1;return!1!==t&&(new Date).getTime()<t}}var Pn=e=>{var t=null==e?void 0:e.config;return j({initialPathName:(null==l?void 0:l.pathname)||"",referringDomain:wi.referringDomain()},wi.campaignParams({customTrackedParams:null==t?void 0:t.custom_campaign_params,maskPersonalDataProperties:null==t?void 0:t.mask_personal_data_properties,customPersonalDataProperties:null==t?void 0:t.custom_personal_data_properties}))};class Rn{constructor(e,t,i,r){W(this,"_onSessionIdCallback",(e=>{var t=this._getStoredProps();if(!t||t.sessionId!==e){var i={sessionId:e,props:this._sessionSourceParamGenerator(this.instance)};this._persistence.register({[Me]:i})}})),this.instance=e,this._sessionIdManager=t,this._persistence=i,this._sessionSourceParamGenerator=r||Pn,this._sessionIdManager.onSessionId(this._onSessionIdCallback)}_getStoredProps(){return this._persistence.props[Me]}getSessionProps(){var e,t=null===(e=this._getStoredProps())||void 0===e?void 0:e.props;return t?{$client_session_initial_referring_host:t.referringDomain,$client_session_initial_pathname:t.initialPathName,$client_session_initial_utm_source:t.utm_source,$client_session_initial_utm_campaign:t.utm_campaign,$client_session_initial_utm_medium:t.utm_medium,$client_session_initial_utm_content:t.utm_content,$client_session_initial_utm_term:t.utm_term}:{}}}var Fn=["ahrefsbot","ahrefssiteaudit","applebot","baiduspider","better uptime bot","bingbot","bingpreview","bot.htm","bot.php","crawler","deepscan","duckduckbot","facebookexternal","facebookcatalog","gptbot","http://yandex.com/bots","hubspot","ia_archiver","linkedinbot","mj12bot","msnbot","nessus","petalbot","pinterest","prerender","rogerbot","screaming frog","semrushbot","sitebulb","slurp","turnitin","twitterbot","vercelbot","yahoo! slurp","yandexbot","headlesschrome","cypress","Google-HotelAdsVerifier","adsbot-google","apis-google","duplexweb-google","feedfetcher-google","google favicon","google web preview","google-read-aloud","googlebot","googleweblight","mediapartners-google","storebot-google","Bytespider;"],Tn=function(e,t){if(!e)return!1;var i=e.toLowerCase();return Fn.concat(t||[]).some((e=>{var t=e.toLowerCase();return-1!==i.indexOf(t)}))},$n=function(e,t){if(!e)return!1;var i=e.userAgent;if(i&&Tn(i,t))return!0;try{var r=null==e?void 0:e.userAgentData;if(null!=r&&r.brands&&r.brands.some((e=>Tn(null==e?void 0:e.brand,t))))return!0}catch(e){}return!!e.webdriver};class Mn{constructor(){this.clicks=[]}isRageClick(e,t,i){var r=this.clicks[this.clicks.length-1];if(r&&Math.abs(e-r.x)+Math.abs(t-r.y)<30&&i-r.timestamp<1e3){if(this.clicks.push({x:e,y:t,timestamp:i}),3===this.clicks.length)return!0}else this.clicks=[{x:e,y:t,timestamp:i}];return!1}}var On=B("[Dead Clicks]"),Ln=()=>!0,An=e=>{var t,i=!(null===(t=e.instance.persistence)||void 0===t||!t.get_property(he)),r=e.instance.config.capture_dead_clicks;return L(r)?r:i};class Dn{get lazyLoadedDeadClicksAutocapture(){return this._lazyLoadedDeadClicksAutocapture}constructor(e,t,i){this.instance=e,this.isEnabled=t,this.onCapture=i,this.startIfEnabled()}onRemoteConfig(e){this.instance.persistence&&this.instance.persistence.register({[he]:null==e?void 0:e.captureDeadClicks}),this.startIfEnabled()}startIfEnabled(){this.isEnabled(this)&&this.loadScript((()=>{this.start()}))}loadScript(e){var t,i,r;null!==(t=_.__PosthogExtensions__)&&void 0!==t&&t.initDeadClicksAutocapture&&e(),null===(i=_.__PosthogExtensions__)||void 0===i||null===(r=i.loadExternalDependency)||void 0===r||r.call(i,this.instance,"dead-clicks-autocapture",(t=>{t?On.error("failed to load script",t):e()}))}start(){var e;if(a){if(!this._lazyLoadedDeadClicksAutocapture&&null!==(e=_.__PosthogExtensions__)&&void 0!==e&&e.initDeadClicksAutocapture){var t=C(this.instance.config.capture_dead_clicks)?this.instance.config.capture_dead_clicks:{};t.__onCapture=this.onCapture,this._lazyLoadedDeadClicksAutocapture=_.__PosthogExtensions__.initDeadClicksAutocapture(this.instance,t),this._lazyLoadedDeadClicksAutocapture.start(a),On.info("starting...")}}else On.error("`document` not found. Cannot start.")}stop(){this._lazyLoadedDeadClicksAutocapture&&(this._lazyLoadedDeadClicksAutocapture.stop(),this._lazyLoadedDeadClicksAutocapture=void 0,On.info("stopping..."))}}var Nn=B("[Heatmaps]");function qn(e){return C(e)&&"clientX"in e&&"clientY"in e&&O(e.clientX)&&O(e.clientY)}class Bn{constructor(e){var i;W(this,"rageclicks",new Mn),W(this,"_enabledServerSide",!1),W(this,"_initialized",!1),W(this,"_flushInterval",null),this.instance=e,this._enabledServerSide=!(null===(i=this.instance.persistence)||void 0===i||!i.props[ue]),null==t||t.addEventListener("beforeunload",(()=>{this.flush()}))}get flushIntervalMilliseconds(){var e=5e3;return C(this.instance.config.capture_heatmaps)&&this.instance.config.capture_heatmaps.flush_interval_milliseconds&&(e=this.instance.config.capture_heatmaps.flush_interval_milliseconds),e}get isEnabled(){return R(this.instance.config.capture_heatmaps)?R(this.instance.config.enable_heatmaps)?this._enabledServerSide:this.instance.config.enable_heatmaps:!1!==this.instance.config.capture_heatmaps}startIfEnabled(){if(this.isEnabled){if(this._initialized)return;Nn.info("starting..."),this._setupListeners(),this._flushInterval=setInterval(this.flush.bind(this),this.flushIntervalMilliseconds)}else{var e,t;clearInterval(null!==(e=this._flushInterval)&&void 0!==e?e:void 0),null===(t=this.deadClicksCapture)||void 0===t||t.stop(),this.getAndClearBuffer()}}onRemoteConfig(e){var t=!!e.heatmaps;this.instance.persistence&&this.instance.persistence.register({[ue]:t}),this._enabledServerSide=t,this.startIfEnabled()}getAndClearBuffer(){var e=this.buffer;return this.buffer=void 0,e}_onDeadClick(e){this._onClick(e.originalEvent,"deadclick")}_setupListeners(){t&&a&&(re(a,"click",(e=>this._onClick(e||(null==t?void 0:t.event))),!1,!0),re(a,"mousemove",(e=>this._onMouseMove(e||(null==t?void 0:t.event))),!1,!0),this.deadClicksCapture=new Dn(this.instance,Ln,this._onDeadClick.bind(this)),this.deadClicksCapture.startIfEnabled(),this._initialized=!0)}_getProperties(e,i){var r=this.instance.scrollManager.scrollY(),s=this.instance.scrollManager.scrollX(),n=this.instance.scrollManager.scrollElement(),o=function(e,i,r){for(var s=e;s&&Ri(s)&&!Fi(s,"body");){if(s===r)return!1;if(m(i,null==t?void 0:t.getComputedStyle(s).position))return!0;s=Bi(s)}return!1}(Ni(e),["fixed","sticky"],n);return{x:e.clientX+(o?0:s),y:e.clientY+(o?0:r),target_fixed:o,type:i}}_onClick(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click";if(!Pi(e.target)&&qn(e)){var r=this._getProperties(e,i);null!==(t=this.rageclicks)&&void 0!==t&&t.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._capture(j(j({},r),{},{type:"rageclick"})),this._capture(r)}}_onMouseMove(e){!Pi(e.target)&&qn(e)&&(clearTimeout(this._mouseMoveTimeout),this._mouseMoveTimeout=setTimeout((()=>{this._capture(this._getProperties(e,"mousemove"))}),500))}_capture(e){if(t){var i=t.location.href;this.buffer=this.buffer||{},this.buffer[i]||(this.buffer[i]=[]),this.buffer[i].push(e)}}flush(){this.buffer&&!P(this.buffer)&&this.instance.capture("$$heatmap",{$heatmap_data:this.getAndClearBuffer()})}}class Hn{constructor(e){W(this,"_updateScrollData",(()=>{var e,t,i,r;this.context||(this.context={});var s=this.scrollElement(),n=this.scrollY(),o=s?Math.max(0,s.scrollHeight-s.clientHeight):0,a=n+((null==s?void 0:s.clientHeight)||0),l=(null==s?void 0:s.scrollHeight)||0;this.context.lastScrollY=Math.ceil(n),this.context.maxScrollY=Math.max(n,null!==(e=this.context.maxScrollY)&&void 0!==e?e:0),this.context.maxScrollHeight=Math.max(o,null!==(t=this.context.maxScrollHeight)&&void 0!==t?t:0),this.context.lastContentY=a,this.context.maxContentY=Math.max(a,null!==(i=this.context.maxContentY)&&void 0!==i?i:0),this.context.maxContentHeight=Math.max(l,null!==(r=this.context.maxContentHeight)&&void 0!==r?r:0)})),this.instance=e}getContext(){return this.context}resetContext(){var e=this.context;return setTimeout(this._updateScrollData,0),e}startMeasuringScrollPosition(){null==t||t.addEventListener("scroll",this._updateScrollData,!0),null==t||t.addEventListener("scrollend",this._updateScrollData,!0),null==t||t.addEventListener("resize",this._updateScrollData)}scrollElement(){if(!this.instance.config.scroll_root_selector)return null==t?void 0:t.document.documentElement;var e=x(this.instance.config.scroll_root_selector)?this.instance.config.scroll_root_selector:[this.instance.config.scroll_root_selector];for(var i of e){var r=null==t?void 0:t.document.querySelector(i);if(r)return r}}scrollY(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement();return e&&e.scrollTop||0}return t&&(t.scrollY||t.pageYOffset||t.document.documentElement.scrollTop)||0}scrollX(){if(this.instance.config.scroll_root_selector){var e=this.scrollElement();return e&&e.scrollLeft||0}return t&&(t.scrollX||t.pageXOffset||t.document.documentElement.scrollLeft)||0}}var Un=B("[AutoCapture]");function zn(e,t){return t.length>e?t.slice(0,e)+"...":t}function jn(e){if(e.previousElementSibling)return e.previousElementSibling;var t=e;do{t=t.previousSibling}while(t&&!Ri(t));return t}function Wn(e,t,i,r){var s=e.tagName.toLowerCase(),n={tag_name:s};qi.indexOf(s)>-1&&!i&&("a"===s.toLowerCase()||"button"===s.toLowerCase()?n.$el_text=zn(1024,Xi(e)):n.$el_text=zn(1024,Di(e)));var o=Li(e);o.length>0&&(n.classes=o.filter((function(e){return""!==e}))),Y(e.attributes,(function(i){var s;if((!zi(e)||-1!==["name","id","class","aria-label"].indexOf(i.name))&&((null==r||!r.includes(i.name))&&!t&&Ki(i.value)&&(s=i.name,!F(s)||"_ngcontent"!==s.substring(0,10)&&"_nghost"!==s.substring(0,7)))){var o=i.value;"class"===i.name&&(o=Mi(o).join(" ")),n["attr__"+i.name]=zn(1024,o)}}));for(var a=1,l=1,u=e;u=jn(u);)a++,u.tagName===e.tagName&&l++;return n.nth_child=a,n.nth_of_type=l,n}function Vn(e,i){for(var r,s,{e:n,maskAllElementAttributes:o,maskAllText:a,elementAttributeIgnoreList:l,elementsChainAsString:u}=i,c=[e],d=e;d.parentNode&&!Fi(d,"body");)$i(d.parentNode)?(c.push(d.parentNode.host),d=d.parentNode.host):(c.push(d.parentNode),d=d.parentNode);var h,_=[],p={},v=!1,g=!1;if(Y(c,(e=>{var t=Ui(e);"a"===e.tagName.toLowerCase()&&(v=e.getAttribute("href"),v=t&&v&&Ki(v)&&v),m(Li(e),"ph-no-capture")&&(g=!0),_.push(Wn(e,o,a,l));var i=function(e){if(!Ui(e))return{};var t={};return Y(e.attributes,(function(e){if(e.name&&0===e.name.indexOf("data-ph-capture-attribute")){var i=e.name.replace("data-ph-capture-attribute-",""),r=e.value;i&&r&&Ki(r)&&(t[i]=r)}})),t}(e);K(p,i)})),g)return{props:{},explicitNoCapture:g};if(a||("a"===e.tagName.toLowerCase()||"button"===e.tagName.toLowerCase()?_[0].$el_text=Xi(e):_[0].$el_text=Di(e)),v){var f,b;_[0].attr__href=v;var y=null===(f=gt(v))||void 0===f?void 0:f.host,w=null==t||null===(b=t.location)||void 0===b?void 0:b.host;y&&w&&y!==w&&(h=v)}return{props:K({$event_type:n.type,$ce_version:1},u?{}:{$elements:_},{$elements_chain:Zi(_)},null!==(r=_[0])&&void 0!==r&&r.$el_text?{$el_text:null===(s=_[0])||void 0===s?void 0:s.$el_text}:{},h&&"click"===n.type?{$external_click_url:h}:{},p)}}class Gn{constructor(e){W(this,"_initialized",!1),W(this,"_isDisabledServerSide",null),W(this,"rageclicks",new Mn),W(this,"_elementsChainAsString",!1),this.instance=e,this._elementSelectors=null}get config(){var e,t,i=C(this.instance.config.autocapture)?this.instance.config.autocapture:{};return i.url_allowlist=null===(e=i.url_allowlist)||void 0===e?void 0:e.map((e=>new RegExp(e))),i.url_ignorelist=null===(t=i.url_ignorelist)||void 0===t?void 0:t.map((e=>new RegExp(e))),i}_addDomEventHandlers(){if(this.isBrowserSupported()){if(t&&a){var e=e=>{e=e||(null==t?void 0:t.event);try{this._captureEvent(e)}catch(e){Un.error("Failed to capture event",e)}},i=e=>{e=e||(null==t?void 0:t.event),this._captureEvent(e,v)};re(a,"submit",e,!1,!0),re(a,"change",e,!1,!0),re(a,"click",e,!1,!0),this.config.capture_copied_text&&(re(a,"copy",i,!1,!0),re(a,"cut",i,!1,!0))}}else Un.info("Disabling Automatic Event Collection because this browser is not supported")}startIfEnabled(){this.isEnabled&&!this._initialized&&(this._addDomEventHandlers(),this._initialized=!0)}onRemoteConfig(e){e.elementsChainAsString&&(this._elementsChainAsString=e.elementsChainAsString),this.instance.persistence&&this.instance.persistence.register({[le]:!!e.autocapture_opt_out}),this._isDisabledServerSide=!!e.autocapture_opt_out,this.startIfEnabled()}setElementSelectors(e){this._elementSelectors=e}getElementSelectors(e){var t,i=[];return null===(t=this._elementSelectors)||void 0===t||t.forEach((t=>{var r=null==a?void 0:a.querySelectorAll(t);null==r||r.forEach((r=>{e===r&&i.push(t)}))})),i}get isEnabled(){var e,t,i=null===(e=this.instance.persistence)||void 0===e?void 0:e.props[le],r=this._isDisabledServerSide;if($(r)&&!L(i)&&!this.instance.config.advanced_disable_decide)return!1;var s=null!==(t=this._isDisabledServerSide)&&void 0!==t?t:!!i;return!!this.instance.config.autocapture&&!s}_captureEvent(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$autocapture";if(this.isEnabled){var r,s=Ni(e);if(Ti(s)&&(s=s.parentNode||null),"$autocapture"===i&&"click"===e.type&&e instanceof MouseEvent)this.instance.config.rageclick&&null!==(r=this.rageclicks)&&void 0!==r&&r.isRageClick(e.clientX,e.clientY,(new Date).getTime())&&this._captureEvent(e,"$rageclick");var n=i===v;if(s&&Hi(s,e,this.config,n,n?["copy","cut"]:void 0)){var{props:o,explicitNoCapture:a}=Vn(s,{e:e,maskAllElementAttributes:this.instance.config.mask_all_element_attributes,maskAllText:this.instance.config.mask_all_text,elementAttributeIgnoreList:this.config.element_attribute_ignorelist,elementsChainAsString:this._elementsChainAsString});if(a)return!1;var l=this.getElementSelectors(s);if(l&&l.length>0&&(o.$element_selectors=l),i===v){var u,c=Ai(null==t||null===(u=t.getSelection())||void 0===u?void 0:u.toString()),d=e.type||"clipboard";if(!c)return!1;o.$selected_content=c,o.$copy_type=d}return this.instance.capture(i,o),!0}}}isBrowserSupported(){return I(null==a?void 0:a.querySelectorAll)}}var Jn=B("[TracingHeaders]");class Yn{constructor(e){W(this,"_restoreXHRPatch",void 0),W(this,"_restoreFetchPatch",void 0),W(this,"_startCapturing",(()=>{var e,t,i,r;R(this._restoreXHRPatch)&&(null===(e=_.__PosthogExtensions__)||void 0===e||null===(t=e.tracingHeadersPatchFns)||void 0===t||t._patchXHR(this.instance.sessionManager));R(this._restoreFetchPatch)&&(null===(i=_.__PosthogExtensions__)||void 0===i||null===(r=i.tracingHeadersPatchFns)||void 0===r||r._patchFetch(this.instance.sessionManager))})),this.instance=e}_loadScript(e){var t,i,r;null!==(t=_.__PosthogExtensions__)&&void 0!==t&&t.tracingHeadersPatchFns&&e(),null===(i=_.__PosthogExtensions__)||void 0===i||null===(r=i.loadExternalDependency)||void 0===r||r.call(i,this.instance,"tracing-headers",(t=>{if(t)return Jn.error("failed to load script",t);e()}))}startIfEnabledOrStop(){var e,t;this.instance.config.__add_tracing_headers?this._loadScript(this._startCapturing):(null===(e=this._restoreXHRPatch)||void 0===e||e.call(this),null===(t=this._restoreFetchPatch)||void 0===t||t.call(this),this._restoreXHRPatch=void 0,this._restoreFetchPatch=void 0)}}var Kn;!function(e){e[e.PENDING=-1]="PENDING",e[e.DENIED=0]="DENIED",e[e.GRANTED=1]="GRANTED"}(Kn||(Kn={}));class Xn{constructor(e){this.instance=e}get config(){return this.instance.config}get consent(){return this.getDnt()?Kn.DENIED:this.storedConsent}isOptedOut(){return this.consent===Kn.DENIED||this.consent===Kn.PENDING&&this.config.opt_out_capturing_by_default}isOptedIn(){return!this.isOptedOut()}optInOut(e){this.storage.set(this.storageKey,e?1:0,this.config.cookie_expiration,this.config.cross_subdomain_cookie,this.config.secure_cookie)}reset(){this.storage.remove(this.storageKey,this.config.cross_subdomain_cookie)}get storageKey(){var{token:e,opt_out_capturing_cookie_prefix:t}=this.instance.config;return(t||"__ph_opt_in_out_")+e}get storedConsent(){var e=this.storage.get(this.storageKey);return"1"===e?Kn.GRANTED:"0"===e?Kn.DENIED:Kn.PENDING}get storage(){if(!this._storage){var e=this.config.opt_out_capturing_persistence_type;this._storage="localStorage"===e?lt:ot;var t="localStorage"===e?ot:lt;t.get(this.storageKey)&&(this._storage.get(this.storageKey)||this.optInOut("1"===t.get(this.storageKey)),t.remove(this.storageKey,this.config.cross_subdomain_cookie))}return this._storage}getDnt(){return!!this.config.respect_dnt&&!!se([null==o?void 0:o.doNotTrack,null==o?void 0:o.msDoNotTrack,_.doNotTrack],(e=>m([!0,1,"1","yes"],e)))}}var Qn=B("[ExceptionAutocapture]");class Zn{constructor(e){var i;W(this,"originalOnUnhandledRejectionHandler",void 0),W(this,"startCapturing",(()=>{var e,i,r,s;if(t&&this.isEnabled&&!this.hasHandlers&&!this.isCapturing){var n=null===(e=_.__PosthogExtensions__)||void 0===e||null===(i=e.errorWrappingFunctions)||void 0===i?void 0:i.wrapOnError,o=null===(r=_.__PosthogExtensions__)||void 0===r||null===(s=r.errorWrappingFunctions)||void 0===s?void 0:s.wrapUnhandledRejection;if(n&&o)try{this.unwrapOnError=n(this.captureException.bind(this)),this.unwrapUnhandledRejection=o(this.captureException.bind(this))}catch(e){Qn.error("failed to start",e),this.stopCapturing()}else Qn.error("failed to load error wrapping functions - cannot start")}})),this.instance=e,this.remoteEnabled=!(null===(i=this.instance.persistence)||void 0===i||!i.props[ce]),this.startIfEnabled()}get isEnabled(){var e;return null!==(e=this.remoteEnabled)&&void 0!==e&&e}get isCapturing(){var e;return!(null==t||null===(e=t.onerror)||void 0===e||!e.__POSTHOG_INSTRUMENTED__)}get hasHandlers(){return this.originalOnUnhandledRejectionHandler||this.unwrapOnError}startIfEnabled(){this.isEnabled&&!this.isCapturing&&(Qn.info("enabled, starting..."),this.loadScript(this.startCapturing))}loadScript(e){var t,i;this.hasHandlers&&e(),null===(t=_.__PosthogExtensions__)||void 0===t||null===(i=t.loadExternalDependency)||void 0===i||i.call(t,this.instance,"exception-autocapture",(t=>{if(t)return Qn.error("failed to load script",t);e()}))}stopCapturing(){var e,t;null===(e=this.unwrapOnError)||void 0===e||e.call(this),null===(t=this.unwrapUnhandledRejection)||void 0===t||t.call(this)}onRemoteConfig(e){var t=e.autocaptureExceptions;this.remoteEnabled=!!t||!1,this.instance.persistence&&this.instance.persistence.register({[ce]:this.remoteEnabled}),this.startIfEnabled()}captureException(e){var t=this.instance.requestRouter.endpointFor("ui");e.$exception_personURL="".concat(t,"/project/").concat(this.instance.config.token,"/person/").concat(this.instance.get_distinct_id()),this.instance.exceptions.sendExceptionEvent(e)}}var eo=B("[Web Vitals]"),to=9e5;class io{constructor(e){var t;W(this,"_enabledServerSide",!1),W(this,"_initialized",!1),W(this,"buffer",{url:void 0,metrics:[],firstMetricTimestamp:void 0}),W(this,"_flushToCapture",(()=>{clearTimeout(this._delayedFlushTimer),0!==this.buffer.metrics.length&&(this.instance.capture("$web_vitals",this.buffer.metrics.reduce(((e,t)=>j(j({},e),{},{["$web_vitals_".concat(t.name,"_event")]:j({},t),["$web_vitals_".concat(t.name,"_value")]:t.value})),{})),this.buffer={url:void 0,metrics:[],firstMetricTimestamp:void 0})})),W(this,"_addToBuffer",(e=>{var t,i=null===(t=this.instance.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0);if(R(i))eo.error("Could not read session ID. Dropping metrics!");else{this.buffer=this.buffer||{url:void 0,metrics:[],firstMetricTimestamp:void 0};var r=this._currentURL();if(!R(r))if(M(null==e?void 0:e.name)||M(null==e?void 0:e.value))eo.error("Invalid metric received",e);else if(this._maxAllowedValue&&e.value>=this._maxAllowedValue)eo.error("Ignoring metric with value >= "+this._maxAllowedValue,e);else this.buffer.url!==r&&(this._flushToCapture(),this._delayedFlushTimer=setTimeout(this._flushToCapture,this.flushToCaptureTimeoutMs)),R(this.buffer.url)&&(this.buffer.url=r),this.buffer.firstMetricTimestamp=R(this.buffer.firstMetricTimestamp)?Date.now():this.buffer.firstMetricTimestamp,e.attribution&&e.attribution.interactionTargetElement&&(e.attribution.interactionTargetElement=void 0),this.buffer.metrics.push(j(j({},e),{},{$current_url:r,$session_id:i.sessionId,$window_id:i.windowId,timestamp:Date.now()})),this.buffer.metrics.length===this.allowedMetrics.length&&this._flushToCapture()}})),W(this,"_startCapturing",(()=>{var e,t,i,r,s=_.__PosthogExtensions__;R(s)||R(s.postHogWebVitalsCallbacks)||({onLCP:e,onCLS:t,onFCP:i,onINP:r}=s.postHogWebVitalsCallbacks),e&&t&&i&&r?(this.allowedMetrics.indexOf("LCP")>-1&&e(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("CLS")>-1&&t(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("FCP")>-1&&i(this._addToBuffer.bind(this)),this.allowedMetrics.indexOf("INP")>-1&&r(this._addToBuffer.bind(this)),this._initialized=!0):eo.error("web vitals callbacks not loaded - not starting")})),this.instance=e,this._enabledServerSide=!(null===(t=this.instance.persistence)||void 0===t||!t.props[de]),this.startIfEnabled()}get allowedMetrics(){var e,t,i=C(this.instance.config.capture_performance)?null===(e=this.instance.config.capture_performance)||void 0===e?void 0:e.web_vitals_allowed_metrics:void 0;return R(i)?(null===(t=this.instance.persistence)||void 0===t?void 0:t.props[_e])||["CLS","FCP","INP","LCP"]:i}get flushToCaptureTimeoutMs(){return(C(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals_delayed_flush_ms:void 0)||5e3}get _maxAllowedValue(){var e=C(this.instance.config.capture_performance)&&O(this.instance.config.capture_performance.__web_vitals_max_value)?this.instance.config.capture_performance.__web_vitals_max_value:to;return 0<e&&e<=6e4?to:e}get isEnabled(){var e=C(this.instance.config.capture_performance)?this.instance.config.capture_performance.web_vitals:void 0;return L(e)?e:this._enabledServerSide}startIfEnabled(){this.isEnabled&&!this._initialized&&(eo.info("enabled, starting..."),this.loadScript(this._startCapturing))}onRemoteConfig(e){var t=C(e.capturePerformance)&&!!e.capturePerformance.web_vitals,i=C(e.capturePerformance)?e.capturePerformance.web_vitals_allowed_metrics:void 0;this.instance.persistence&&(this.instance.persistence.register({[de]:t}),this.instance.persistence.register({[_e]:i})),this._enabledServerSide=t,this.startIfEnabled()}loadScript(e){var t,i,r;null!==(t=_.__PosthogExtensions__)&&void 0!==t&&t.postHogWebVitalsCallbacks&&e(),null===(i=_.__PosthogExtensions__)||void 0===i||null===(r=i.loadExternalDependency)||void 0===r||r.call(i,this.instance,"web-vitals",(t=>{t?eo.error("failed to load script",t):e()}))}_currentURL(){var e=t?t.location.href:void 0;return e||eo.error("Could not determine current URL"),e}}var ro={icontains:(e,i)=>!!t&&i.href.toLowerCase().indexOf(e.toLowerCase())>-1,not_icontains:(e,i)=>!!t&&-1===i.href.toLowerCase().indexOf(e.toLowerCase()),regex:(e,i)=>!!t&&ft(i.href,e),not_regex:(e,i)=>!!t&&!ft(i.href,e),exact:(e,t)=>t.href===e,is_not:(e,t)=>t.href!==e};class so{constructor(e){var t=this;W(this,"getWebExperimentsAndEvaluateDisplayLogic",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t.getWebExperiments((e=>{so.logInfo("retrieved web experiments from the server"),t._flagToExperiments=new Map,e.forEach((e=>{if(e.feature_flag_key){var i;if(t._flagToExperiments)so.logInfo("setting flag key ",e.feature_flag_key," to web experiment ",e),null===(i=t._flagToExperiments)||void 0===i||i.set(e.feature_flag_key,e);var r=t.instance.getFeatureFlag(e.feature_flag_key);F(r)&&e.variants[r]&&t.applyTransforms(e.name,r,e.variants[r].transforms)}else if(e.variants)for(var s in e.variants){var n=e.variants[s];so.matchesTestVariant(n)&&t.applyTransforms(e.name,s,n.transforms)}}))}),e)})),this.instance=e,this.instance.onFeatureFlags((e=>{this.onFeatureFlags(e)}))}onFeatureFlags(e){if(this._is_bot())so.logInfo("Refusing to render web experiment since the viewer is a likely bot");else if(!this.instance.config.disable_web_experiments){if(M(this._flagToExperiments))return this._flagToExperiments=new Map,this.loadIfEnabled(),void this.previewWebExperiment();so.logInfo("applying feature flags",e),e.forEach((e=>{var t;if(this._flagToExperiments&&null!==(t=this._flagToExperiments)&&void 0!==t&&t.has(e)){var i,r=this.instance.getFeatureFlag(e),s=null===(i=this._flagToExperiments)||void 0===i?void 0:i.get(e);r&&null!=s&&s.variants[r]&&this.applyTransforms(s.name,r,s.variants[r].transforms)}}))}}previewWebExperiment(){var e=so.getWindowLocation();if(null!=e&&e.search){var t=bt(null==e?void 0:e.search,"__experiment_id"),i=bt(null==e?void 0:e.search,"__experiment_variant");t&&i&&(so.logInfo("previewing web experiments ".concat(t," && ").concat(i)),this.getWebExperiments((e=>{this.showPreviewWebExperiment(parseInt(t),i,e)}),!1,!0))}}loadIfEnabled(){this.instance.config.disable_web_experiments||this.getWebExperimentsAndEvaluateDisplayLogic()}getWebExperiments(e,t,i){if(this.instance.config.disable_web_experiments&&!i)return e([]);var r=this.instance.get_property("$web_experiments");if(r&&!t)return e(r);this.instance._send_request({url:this.instance.requestRouter.endpointFor("api","/api/web_experiments/?token=".concat(this.instance.config.token)),method:"GET",callback:t=>{if(200!==t.statusCode||!t.json)return e([]);var i=t.json.experiments||[];return e(i)}})}showPreviewWebExperiment(e,t,i){var r=i.filter((t=>t.id===e));r&&r.length>0&&(so.logInfo("Previewing web experiment [".concat(r[0].name,"] with variant [").concat(t,"]")),this.applyTransforms(r[0].name,t,r[0].variants[t].transforms))}static matchesTestVariant(e){return!M(e.conditions)&&(so.matchUrlConditions(e)&&so.matchUTMConditions(e))}static matchUrlConditions(e){var t;if(M(e.conditions)||M(null===(t=e.conditions)||void 0===t?void 0:t.url))return!0;var i,r,s,n=so.getWindowLocation();return!!n&&(null===(i=e.conditions)||void 0===i||!i.url||ro[null!==(r=null===(s=e.conditions)||void 0===s?void 0:s.urlMatchType)&&void 0!==r?r:"icontains"](e.conditions.url,n))}static getWindowLocation(){return null==t?void 0:t.location}static matchUTMConditions(e){var t;if(M(e.conditions)||M(null===(t=e.conditions)||void 0===t?void 0:t.utm))return!0;var i=wi.campaignParams();if(i.utm_source){var r,s,n,o,a,l,u,c,d,h,_,p,v,g,f,m,b=null===(r=e.conditions)||void 0===r||null===(s=r.utm)||void 0===s||!s.utm_campaign||(null===(n=e.conditions)||void 0===n||null===(o=n.utm)||void 0===o?void 0:o.utm_campaign)==i.utm_campaign,y=null===(a=e.conditions)||void 0===a||null===(l=a.utm)||void 0===l||!l.utm_source||(null===(u=e.conditions)||void 0===u||null===(c=u.utm)||void 0===c?void 0:c.utm_source)==i.utm_source,w=null===(d=e.conditions)||void 0===d||null===(h=d.utm)||void 0===h||!h.utm_medium||(null===(_=e.conditions)||void 0===_||null===(p=_.utm)||void 0===p?void 0:p.utm_medium)==i.utm_medium,S=null===(v=e.conditions)||void 0===v||null===(g=v.utm)||void 0===g||!g.utm_term||(null===(f=e.conditions)||void 0===f||null===(m=f.utm)||void 0===m?void 0:m.utm_term)==i.utm_term;return b&&w&&S&&y}return!1}static logInfo(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];q.info("[WebExperiments] ".concat(e),i)}applyTransforms(e,t,i){this._is_bot()?so.logInfo("Refusing to render web experiment since the viewer is a likely bot"):"control"!==t?i.forEach((i=>{if(i.selector){var r;so.logInfo("applying transform of variant ".concat(t," for experiment ").concat(e," "),i);var s=null===(r=document)||void 0===r?void 0:r.querySelectorAll(i.selector);null==s||s.forEach((e=>{var t=e;i.attributes&&i.attributes.forEach((e=>{switch(e.name){case"text":t.innerText=e.value;break;case"html":t.innerHTML=e.value;break;case"cssClass":t.className=e.value;break;default:t.setAttribute(e.name,e.value)}})),i.text&&(t.innerText=i.text),i.html&&(t.parentElement?t.parentElement.innerHTML=i.html:t.innerHTML=i.html),i.css&&t.setAttribute("style",i.css)}))}})):so.logInfo("Control variants leave the page unmodified.")}_is_bot(){return o&&this.instance?$n(o,this.instance.config.custom_blocked_useragents):void 0}}class no{constructor(e){this.instance=e}sendExceptionEvent(e){this.instance.capture("$exception",e,{_noTruncate:!0,_batchKey:"exceptionEvent"})}}var oo=["$set_once","$set"],ao=B("[SiteApps]");class lo{constructor(e){this.instance=e,this.bufferedInvocations=[],this.apps={}}get isEnabled(){return!!this.instance.config.opt_in_site_apps}eventCollector(e,t){if(t){var i=this.globalsForEvent(t);this.bufferedInvocations.push(i),this.bufferedInvocations.length>1e3&&(this.bufferedInvocations=this.bufferedInvocations.slice(10))}}get siteAppLoaders(){var e,t;return null===(e=_._POSTHOG_REMOTE_CONFIG)||void 0===e||null===(t=e[this.instance.config.token])||void 0===t?void 0:t.siteApps}init(){if(this.isEnabled){var e=this.instance._addCaptureHook(this.eventCollector.bind(this));this.stopBuffering=()=>{e(),this.bufferedInvocations=[],this.stopBuffering=void 0}}}globalsForEvent(e){var t,i,r,s,n,o,a;if(!e)throw new Error("Event payload is required");var l={},u=this.instance.get_property("$groups")||[],c=this.instance.get_property("$stored_group_properties")||{};for(var[d,h]of Object.entries(c))l[d]={id:u[d],type:d,properties:h};var{$set_once:_,$set:p}=e;return{event:j(j({},V(e,oo)),{},{properties:j(j(j({},e.properties),p?{$set:j(j({},null!==(t=null===(i=e.properties)||void 0===i?void 0:i.$set)&&void 0!==t?t:{}),p)}:{}),_?{$set_once:j(j({},null!==(r=null===(s=e.properties)||void 0===s?void 0:s.$set_once)&&void 0!==r?r:{}),_)}:{}),elements_chain:null!==(n=null===(o=e.properties)||void 0===o?void 0:o.$elements_chain)&&void 0!==n?n:"",distinct_id:null===(a=e.properties)||void 0===a?void 0:a.distinct_id}),person:{properties:this.instance.get_property("$stored_person_properties")},groups:l}}setupSiteApp(e){var t={id:e.id,loaded:!1,errored:!1};this.apps[e.id]=t;var i=i=>{var r;for(var s of(this.apps[e.id].errored=!i,this.apps[e.id].loaded=!0,ao.info("Site app with id ".concat(e.id," ").concat(i?"loaded":"errored")),i&&this.bufferedInvocations.length&&(ao.info("Processing ".concat(this.bufferedInvocations.length," events for site app with id ").concat(e.id)),this.bufferedInvocations.forEach((e=>{var i;return null===(i=t.processEvent)||void 0===i?void 0:i.call(t,e)}))),Object.values(this.apps)))if(!s.loaded)return;null===(r=this.stopBuffering)||void 0===r||r.call(this)};try{var{processEvent:r}=e.init({posthog:this.instance,callback:e=>{i(e)}});r&&(t.processEvent=r)}catch(t){ao.error("Error while initializing PostHog app with config id ".concat(e.id),t),i(!1)}}onCapturedEvent(e){if(0!==Object.keys(this.apps).length){var t=this.globalsForEvent(e);for(var i of Object.values(this.apps))try{var r;null===(r=i.processEvent)||void 0===r||r.call(i,t)}catch(t){ao.error("Error while processing event ".concat(e.event," for site app ").concat(i.id),t)}}}onRemoteConfig(e){var t,i,r,s=this;if(null!==(t=this.siteAppLoaders)&&void 0!==t&&t.length){if(!this.isEnabled)return void ao.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');for(var n of this.siteAppLoaders)this.setupSiteApp(n);this.instance.on("eventCaptured",(e=>this.onCapturedEvent(e)))}else if(null===(i=this.stopBuffering)||void 0===i||i.call(this),null!==(r=e.siteApps)&&void 0!==r&&r.length)if(this.isEnabled){var o=function(e,t){var i,r;_["__$$ph_site_app_".concat(e)]=s.instance,null===(i=_.__PosthogExtensions__)||void 0===i||null===(r=i.loadSiteApp)||void 0===r||r.call(i,s.instance,t,(t=>{if(t)return ao.error("Error while initializing PostHog app with config id ".concat(e),t)}))};for(var{id:a,url:l}of e.siteApps)o(a,l)}else ao.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')}}function uo(e,t,i){return ms({distinct_id:e,userPropertiesToSet:t,userPropertiesToSetOnce:i})}var co={},ho=()=>{},_o="posthog",po=!vs&&-1===(null==h?void 0:h.indexOf("MSIE"))&&-1===(null==h?void 0:h.indexOf("Mozilla")),vo=()=>{var e,i,r;return{api_host:"https://us.i.posthog.com",ui_host:null,token:"",autocapture:!0,rageclick:!0,cross_subdomain_cookie:(i=null==a?void 0:a.location,r=null==i?void 0:i.hostname,!!F(r)&&"herokuapp.com"!==r.split(".").slice(-2).join(".")),persistence:"localStorage+cookie",persistence_name:"",loaded:ho,store_google:!0,custom_campaign_params:[],custom_blocked_useragents:[],save_referrer:!0,capture_pageview:!0,capture_pageleave:"if_capture_pageview",debug:l&&F(null==l?void 0:l.search)&&-1!==l.search.indexOf("__posthog_debug=true")||!1,verbose:!1,cookie_expiration:365,upgrade:!1,disable_session_recording:!1,disable_persistence:!1,disable_web_experiments:!0,disable_surveys:!1,enable_recording_console_log:void 0,secure_cookie:"https:"===(null==t||null===(e=t.location)||void 0===e?void 0:e.protocol),ip:!0,opt_out_capturing_by_default:!1,opt_out_persistence_by_default:!1,opt_out_useragent_filter:!1,opt_out_capturing_persistence_type:"localStorage",opt_out_capturing_cookie_prefix:null,opt_in_site_apps:!1,property_denylist:[],respect_dnt:!1,sanitize_properties:null,request_headers:{},inapp_protocol:"//",inapp_link_new_window:!1,request_batching:!0,properties_string_max_length:65535,session_recording:{},mask_all_element_attributes:!1,mask_all_text:!1,mask_personal_data_properties:!1,custom_personal_data_properties:[],advanced_disable_decide:!1,advanced_disable_feature_flags:!1,advanced_disable_feature_flags_on_first_load:!1,advanced_disable_toolbar_metrics:!1,feature_flag_request_timeout_ms:3e3,on_request_error:e=>{var t="Bad HTTP status: "+e.statusCode+" "+e.text;q.error(t)},get_device_id:e=>e,_onCapture:ho,capture_performance:void 0,name:"posthog",bootstrap:{},disable_compression:!1,session_idle_timeout_seconds:1800,person_profiles:"identified_only",__add_tracing_headers:!1,before_send:void 0}},go=e=>{var t={};R(e.process_person)||(t.person_profiles=e.process_person),R(e.xhr_headers)||(t.request_headers=e.xhr_headers),R(e.cookie_name)||(t.persistence_name=e.cookie_name),R(e.disable_cookie)||(t.disable_persistence=e.disable_cookie);var i=K({},t,e);return x(e.property_blacklist)&&(R(e.property_denylist)?i.property_denylist=e.property_blacklist:x(e.property_denylist)?i.property_denylist=[...e.property_blacklist,...e.property_denylist]:q.error("Invalid value for property_denylist config: "+e.property_denylist)),i};class fo{constructor(){W(this,"__forceAllowLocalhost",!1)}get _forceAllowLocalhost(){return this.__forceAllowLocalhost}set _forceAllowLocalhost(e){q.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"),this.__forceAllowLocalhost=e}}class mo{get decideEndpointWasHit(){var e,t;return null!==(e=null===(t=this.featureFlags)||void 0===t?void 0:t.hasLoadedFlags)&&void 0!==e&&e}constructor(){W(this,"webPerformance",new fo),W(this,"version",p.LIB_VERSION),W(this,"_internalEventEmitter",new bn),this.config=vo(),this.SentryIntegration=Fs,this.sentryIntegration=e=>function(e,t){var i=Rs(e,t);return{name:Ps,processEvent:e=>i(e)}}(this,e),this.__request_queue=[],this.__loaded=!1,this.analyticsDefaultEndpoint="/e/",this._initialPageviewCaptured=!1,this._initialPersonProfilesConfig=null,this._cachedIdentify=null,this.featureFlags=new Ge(this),this.toolbar=new hs(this),this.scrollManager=new Hn(this),this.pageViewManager=new Ms(this),this.surveys=new xn(this),this.experiments=new so(this),this.exceptions=new no(this),this.rateLimiter=new Cn(this),this.requestRouter=new Cs(this),this.consent=new Xn(this),this.people={set:(e,t,i)=>{var r=F(e)?{[e]:t}:e;this.setPersonProperties(r),null==i||i({})},set_once:(e,t,i)=>{var r=F(e)?{[e]:t}:e;this.setPersonProperties(void 0,r),null==i||i({})}},this.on("eventCaptured",(e=>q.info('send "'.concat(null==e?void 0:e.event,'"'),e)))}init(e,t,i){if(i&&i!==_o){var r,s=null!==(r=co[i])&&void 0!==r?r:new mo;return s._init(e,t,i),co[i]=s,co[_o][i]=s,s}return this._init(e,t,i)}_init(i){var r,s,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;if(R(i)||T(i))return q.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"),this;if(this.__loaded)return q.warn("You have already initialized PostHog! Re-initializing is a no-op"),this;this.__loaded=!0,this.config={},this._triggered_notifs=[],o.person_profiles&&(this._initialPersonProfilesConfig=o.person_profiles),this.set_config(K({},vo(),go(o),{name:a,token:i})),this.config.on_xhr_error&&q.error("on_xhr_error is deprecated. Use on_request_error instead"),this.compression=o.disable_compression?void 0:e.GZipJS,this.persistence=new Ei(this.config),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new Ei(j(j({},this.config),{},{persistence:"sessionStorage"}));var l=j({},this.persistence.props),u=j({},this.sessionPersistence.props);if(this._requestQueue=new _s((e=>this._send_retriable_request(e))),this._retryQueue=new Ss(this),this.__request_queue=[],this.config.__preview_experimental_cookieless_mode||(this.sessionManager=new xs(this),this.sessionPropsManager=new Rn(this,this.sessionManager,this.persistence)),new Yn(this).startIfEnabledOrStop(),this.siteApps=new lo(this),null===(r=this.siteApps)||void 0===r||r.init(),this.config.__preview_experimental_cookieless_mode||(this.sessionRecording=new ns(this),this.sessionRecording.startIfEnabledOrStop()),this.config.disable_scroll_properties||this.scrollManager.startMeasuringScrollPosition(),this.autocapture=new Gn(this),this.autocapture.startIfEnabled(),this.surveys.loadIfEnabled(),this.heatmaps=new Bn(this),this.heatmaps.startIfEnabled(),this.webVitalsAutocapture=new io(this),this.exceptionObserver=new Zn(this),this.exceptionObserver.startIfEnabled(),this.deadClicksAutocapture=new Dn(this,An),this.deadClicksAutocapture.startIfEnabled(),p.DEBUG=p.DEBUG||this.config.debug,p.DEBUG&&q.info("Starting in debug mode",{this:this,config:o,thisC:j({},this.config),p:l,s:u}),this._sync_opt_out_with_persistence(),void 0!==(null===(s=o.bootstrap)||void 0===s?void 0:s.distinctID)){var c,d,h=this.config.get_device_id(et()),_=null!==(c=o.bootstrap)&&void 0!==c&&c.isIdentifiedID?h:o.bootstrap.distinctID;this.persistence.set_property($e,null!==(d=o.bootstrap)&&void 0!==d&&d.isIdentifiedID?"identified":"anonymous"),this.register({distinct_id:o.bootstrap.distinctID,$device_id:_})}if(this._hasBootstrappedFeatureFlags()){var v,g,f=Object.keys((null===(v=o.bootstrap)||void 0===v?void 0:v.featureFlags)||{}).filter((e=>{var t,i;return!(null===(t=o.bootstrap)||void 0===t||null===(i=t.featureFlags)||void 0===i||!i[e])})).reduce(((e,t)=>{var i,r;return e[t]=(null===(i=o.bootstrap)||void 0===i||null===(r=i.featureFlags)||void 0===r?void 0:r[t])||!1,e}),{}),m=Object.keys((null===(g=o.bootstrap)||void 0===g?void 0:g.featureFlagPayloads)||{}).filter((e=>f[e])).reduce(((e,t)=>{var i,r,s,n;null!==(i=o.bootstrap)&&void 0!==i&&null!==(r=i.featureFlagPayloads)&&void 0!==r&&r[t]&&(e[t]=null===(s=o.bootstrap)||void 0===s||null===(n=s.featureFlagPayloads)||void 0===n?void 0:n[t]);return e}),{});this.featureFlags.receivedFeatureFlags({featureFlags:f,featureFlagPayloads:m})}if(this.config.__preview_experimental_cookieless_mode)this.register_once({distinct_id:Be,$device_id:null},"");else if(!this.get_distinct_id()){var b=this.config.get_device_id(et());this.register_once({distinct_id:b,$device_id:b},""),this.persistence.set_property($e,"anonymous")}return null==t||null===(n=t.addEventListener)||void 0===n||n.call(t,"onpagehide"in self?"pagehide":"unload",this._handle_unload.bind(this)),this.toolbar.maybeLoadToolbar(),o.segment?$s(this,(()=>this._loaded())):this._loaded(),I(this.config._onCapture)&&this.config._onCapture!==ho&&(q.warn("onCapture is deprecated. Please use `before_send` instead"),this.on("eventCaptured",(e=>this.config._onCapture(e.event,e)))),this}_onRemoteConfig(t){var i,r,s,n,o,l,u,c;if(!a||!a.body)return q.info("document not ready yet, trying again in 500 milliseconds..."),void setTimeout((()=>{this._onRemoteConfig(t)}),500);this.compression=void 0,t.supportedCompression&&!this.config.disable_compression&&(this.compression=m(t.supportedCompression,e.GZipJS)?e.GZipJS:m(t.supportedCompression,e.Base64)?e.Base64:void 0),null!==(i=t.analytics)&&void 0!==i&&i.endpoint&&(this.analyticsDefaultEndpoint=t.analytics.endpoint),this.set_config({person_profiles:this._initialPersonProfilesConfig?this._initialPersonProfilesConfig:"identified_only"}),null===(r=this.siteApps)||void 0===r||r.onRemoteConfig(t),null===(s=this.sessionRecording)||void 0===s||s.onRemoteConfig(t),null===(n=this.autocapture)||void 0===n||n.onRemoteConfig(t),null===(o=this.heatmaps)||void 0===o||o.onRemoteConfig(t),this.surveys.onRemoteConfig(t),null===(l=this.webVitalsAutocapture)||void 0===l||l.onRemoteConfig(t),null===(u=this.exceptionObserver)||void 0===u||u.onRemoteConfig(t),null===(c=this.deadClicksAutocapture)||void 0===c||c.onRemoteConfig(t)}_loaded(){try{this.config.loaded(this)}catch(e){q.critical("`loaded` function failed",e)}this._start_queue_if_opted_in(),this.config.capture_pageview&&setTimeout((()=>{this.consent.isOptedIn()&&this._captureInitialPageview()}),1),new as(this).load(),this.featureFlags.decide()}_start_queue_if_opted_in(){var e;this.has_opted_out_capturing()||this.config.request_batching&&(null===(e=this._requestQueue)||void 0===e||e.enable())}_dom_loaded(){this.has_opted_out_capturing()||J(this.__request_queue,(e=>this._send_retriable_request(e))),this.__request_queue=[],this._start_queue_if_opted_in()}_handle_unload(){var e,t;this.config.request_batching?(this._shouldCapturePageleave()&&this.capture("$pageleave"),null===(e=this._requestQueue)||void 0===e||e.unload(),null===(t=this._retryQueue)||void 0===t||t.unload()):this._shouldCapturePageleave()&&this.capture("$pageleave",null,{transport:"sendBeacon"})}_send_request(e){this.__loaded&&(po?this.__request_queue.push(e):this.rateLimiter.isServerRateLimited(e.batchKey)||(e.transport=e.transport||this.config.api_transport,e.url=fs(e.url,{ip:this.config.ip?1:0}),e.headers=j({},this.config.request_headers),e.compression="best-available"===e.compression?this.compression:e.compression,e.fetchOptions=e.fetchOptions||this.config.fetch_options,(e=>{var t,i,r,s=j({},e);s.timeout=s.timeout||6e4,s.url=fs(s.url,{_:(new Date).getTime().toString(),ver:p.LIB_VERSION,compression:s.compression});var n=null!==(t=s.transport)&&void 0!==t?t:"fetch",o=null!==(i=null===(r=se(ys,(e=>e.transport===n)))||void 0===r?void 0:r.method)&&void 0!==i?i:ys[0].method;if(!o)throw new Error("No available transport method");o(s)})(j(j({},e),{},{callback:t=>{var i,r,s;(this.rateLimiter.checkForLimiting(t),t.statusCode>=400)&&(null===(r=(s=this.config).on_request_error)||void 0===r||r.call(s,t));null===(i=e.callback)||void 0===i||i.call(e,t)}}))))}_send_retriable_request(e){this._retryQueue?this._retryQueue.retriableRequest(e):this._send_request(e)}_execute_array(e){var t,i=[],r=[],s=[];J(e,(e=>{e&&(t=e[0],x(t)?s.push(e):I(e)?e.call(this):x(e)&&"alias"===t?i.push(e):x(e)&&-1!==t.indexOf("capture")&&I(this[t])?s.push(e):r.push(e))}));var n=function(e,t){J(e,(function(e){if(x(e[0])){var i=t;Y(e,(function(e){i=i[e[0]].apply(i,e.slice(1))}))}else this[e[0]].apply(this,e.slice(1))}),t)};n(i,this),n(r,this),n(s,this)}_hasBootstrappedFeatureFlags(){var e,t;return(null===(e=this.config.bootstrap)||void 0===e?void 0:e.featureFlags)&&Object.keys(null===(t=this.config.bootstrap)||void 0===t?void 0:t.featureFlags).length>0||!1}push(e){this._execute_array([e])}capture(e,t,i){var r;if(this.__loaded&&this.persistence&&this.sessionPersistence&&this._requestQueue){if(!this.consent.isOptedOut())if(!R(e)&&F(e)){if(this.config.opt_out_useragent_filter||!this._is_bot()){var s=null!=i&&i.skip_client_rate_limiting?void 0:this.rateLimiter.clientRateLimitContext();if(null==s||!s.isRateLimited){this.sessionPersistence.update_search_keyword(),this.config.store_google&&this.sessionPersistence.update_campaign_params(),this.config.save_referrer&&this.sessionPersistence.update_referrer_info(),(this.config.store_google||this.config.save_referrer)&&this.persistence.set_initial_person_info();var n=new Date,o=(null==i?void 0:i.timestamp)||n,a=et(),l={uuid:a,event:e,properties:this._calculate_event_properties(e,t||{},o,a)};s&&(l.properties.$lib_rate_limit_remaining_tokens=s.remainingTokens),(null==i?void 0:i.$set)&&(l.$set=null==i?void 0:i.$set);var u=this._calculate_set_once_properties(null==i?void 0:i.$set_once);u&&(l.$set_once=u),(l=ie(l,null!=i&&i._noTruncate?null:this.config.properties_string_max_length)).timestamp=o,R(null==i?void 0:i.timestamp)||(l.properties.$event_time_override_provided=!0,l.properties.$event_time_override_system_time=n);var c=j(j({},l.properties.$set),l.$set);if(P(c)||this.setPersonPropertiesForFlags(c),!M(this.config.before_send)){var d=this._runBeforeSend(l);if(!d)return;l=d}this._internalEventEmitter.emit("eventCaptured",l);var h={method:"POST",url:null!==(r=null==i?void 0:i._url)&&void 0!==r?r:this.requestRouter.endpointFor("api",this.analyticsDefaultEndpoint),data:l,compression:"best-available",batchKey:null==i?void 0:i._batchKey};return!this.config.request_batching||i&&(null==i||!i._batchKey)||null!=i&&i.send_instantly?this._send_retriable_request(h):this._requestQueue.enqueue(h),l}q.critical("This capture call is ignored due to client rate limiting.")}}else q.error("No event name provided to posthog.capture")}else q.uninitializedWarning("posthog.capture")}_addCaptureHook(e){return this.on("eventCaptured",(t=>e(t.event,t)))}_calculate_event_properties(e,t,i,r){if(i=i||new Date,!this.persistence||!this.sessionPersistence)return t;var s=this.persistence.remove_event_timer(e),n=j({},t);if(n.token=this.config.token,this.config.__preview_experimental_cookieless_mode&&(n.$cookieless_mode=!0),"$snapshot"===e){var o=j(j({},this.persistence.properties()),this.sessionPersistence.properties());return n.distinct_id=o.distinct_id,(!F(n.distinct_id)&&!O(n.distinct_id)||T(n.distinct_id))&&q.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"),n}var l,u=wi.properties({maskPersonalDataProperties:this.config.mask_personal_data_properties,customPersonalDataProperties:this.config.custom_personal_data_properties});if(this.sessionManager){var{sessionId:c,windowId:d}=this.sessionManager.checkAndGetSessionAndWindowId();n.$session_id=c,n.$window_id=d}if(this.sessionRecording&&(n.$recording_status=this.sessionRecording.status),this.requestRouter.region===Es.CUSTOM&&(n.$lib_custom_api_host=this.config.api_host),this.sessionPropsManager&&this.config.__preview_send_client_session_params&&("$pageview"===e||"$pageleave"===e||"$autocapture"===e)){var _=this.sessionPropsManager.getSessionProps();n=K(n,_)}if(l="$pageview"===e?this.pageViewManager.doPageView(i,r):"$pageleave"===e?this.pageViewManager.doPageLeave(i):this.pageViewManager.doEvent(),n=K(n,l),"$pageview"===e&&a&&(n.title=a.title),!R(s)){var p=i.getTime()-s;n.$duration=parseFloat((p/1e3).toFixed(3))}h&&this.config.opt_out_useragent_filter&&(n.$browser_type=this._is_bot()?"bot":"browser"),(n=K({},u,this.persistence.properties(),this.sessionPersistence.properties(),n)).$is_identified=this._isIdentified(),x(this.config.property_denylist)?Y(this.config.property_denylist,(function(e){delete n[e]})):q.error("Invalid value for property_denylist config: "+this.config.property_denylist+" or property_blacklist config: "+this.config.property_blacklist);var v=this.config.sanitize_properties;v&&(q.error("sanitize_properties is deprecated. Use before_send instead"),n=v(n,e));var g=this._hasPersonProcessing();return n.$process_person_profile=g,g&&this._requirePersonProcessing("_calculate_event_properties"),n}_calculate_set_once_properties(e){if(!this.persistence||!this._hasPersonProcessing())return e;var t=K({},this.persistence.get_initial_props(),e||{}),i=this.config.sanitize_properties;return i&&(q.error("sanitize_properties is deprecated. Use before_send instead"),t=i(t,"$set_once")),P(t)?void 0:t}register(e,t){var i;null===(i=this.persistence)||void 0===i||i.register(e,t)}register_once(e,t,i){var r;null===(r=this.persistence)||void 0===r||r.register_once(e,t,i)}register_for_session(e){var t;null===(t=this.sessionPersistence)||void 0===t||t.register(e)}unregister(e){var t;null===(t=this.persistence)||void 0===t||t.unregister(e)}unregister_for_session(e){var t;null===(t=this.sessionPersistence)||void 0===t||t.unregister(e)}_register_single(e,t){this.register({[e]:t})}getFeatureFlag(e,t){return this.featureFlags.getFeatureFlag(e,t)}getFeatureFlagPayload(e){var t=this.featureFlags.getFeatureFlagPayload(e);try{return JSON.parse(t)}catch(e){return t}}isFeatureEnabled(e,t){return this.featureFlags.isFeatureEnabled(e,t)}reloadFeatureFlags(){this.featureFlags.reloadFeatureFlags()}updateEarlyAccessFeatureEnrollment(e,t){this.featureFlags.updateEarlyAccessFeatureEnrollment(e,t)}getEarlyAccessFeatures(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.featureFlags.getEarlyAccessFeatures(e,t)}on(e,t){return this._internalEventEmitter.on(e,t)}onFeatureFlags(e){return this.featureFlags.onFeatureFlags(e)}onSessionId(e){var t,i;return null!==(t=null===(i=this.sessionManager)||void 0===i?void 0:i.onSessionId(e))&&void 0!==t?t:()=>{}}getSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.surveys.getSurveys(e,t)}getActiveMatchingSurveys(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.surveys.getActiveMatchingSurveys(e,t)}renderSurvey(e,t){this.surveys.renderSurvey(e,t)}canRenderSurvey(e){this.surveys.canRenderSurvey(e)}getNextSurveyStep(e,t,i){return this.surveys.getNextSurveyStep(e,t,i)}identify(e,t,i){if(!this.__loaded||!this.persistence)return q.uninitializedWarning("posthog.identify");if(O(e)&&(e=e.toString(),q.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")),e){if(["distinct_id","distinctid"].includes(e.toLowerCase()))q.critical('The string "'.concat(e,'" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));else if(this._requirePersonProcessing("posthog.identify")){var r=this.get_distinct_id();if(this.register({$user_id:e}),!this.get_property("$device_id")){var s=r;this.register_once({$had_persisted_distinct_id:!0,$device_id:s},"")}e!==r&&e!==this.get_property(oe)&&(this.unregister(oe),this.register({distinct_id:e}));var n="anonymous"===(this.persistence.get_property($e)||"anonymous");e!==r&&n?(this.persistence.set_property($e,"identified"),this.setPersonPropertiesForFlags(t||{},!1),this.capture("$identify",{distinct_id:e,$anon_distinct_id:r},{$set:t||{},$set_once:i||{}}),this.featureFlags.setAnonymousDistinctId(r),this._cachedIdentify=uo(e,t,i)):(t||i)&&(this._cachedIdentify!==uo(e,t,i)?(this.setPersonProperties(t,i),this._cachedIdentify=uo(e,t,i)):q.info("A duplicate posthog.identify call was made with the same properties. It has been ignored.")),e!==r&&(this.reloadFeatureFlags(),this.unregister(Te))}}else q.error("Unique user id has not been set in posthog.identify")}setPersonProperties(e,t){(e||t)&&this._requirePersonProcessing("posthog.setPersonProperties")&&(this.setPersonPropertiesForFlags(e||{}),this.capture("$set",{$set:e||{},$set_once:t||{}}))}group(e,t,i){if(e&&t){if(this._requirePersonProcessing("posthog.group")){var r=this.getGroups();r[e]!==t&&this.resetGroupPropertiesForFlags(e),this.register({$groups:j(j({},r),{},{[e]:t})}),i&&(this.capture("$groupidentify",{$group_type:e,$group_key:t,$group_set:i}),this.setGroupPropertiesForFlags({[e]:i})),r[e]===t||i||this.reloadFeatureFlags()}}else q.error("posthog.group requires a group type and group key")}resetGroups(){this.register({$groups:{}}),this.resetGroupPropertiesForFlags(),this.reloadFeatureFlags()}setPersonPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.featureFlags.setPersonPropertiesForFlags(e,t)}resetPersonPropertiesForFlags(){this.featureFlags.resetPersonPropertiesForFlags()}setGroupPropertiesForFlags(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this._requirePersonProcessing("posthog.setGroupPropertiesForFlags")&&this.featureFlags.setGroupPropertiesForFlags(e,t)}resetGroupPropertiesForFlags(e){this.featureFlags.resetGroupPropertiesForFlags(e)}reset(e){var t,i,r,s;if(q.info("reset"),!this.__loaded)return q.uninitializedWarning("posthog.reset");var n=this.get_property("$device_id");if(this.consent.reset(),null===(t=this.persistence)||void 0===t||t.clear(),null===(i=this.sessionPersistence)||void 0===i||i.clear(),this.surveys.reset(),null===(r=this.persistence)||void 0===r||r.set_property($e,"anonymous"),null===(s=this.sessionManager)||void 0===s||s.resetSessionId(),this._cachedIdentify=null,this.config.__preview_experimental_cookieless_mode)this.register_once({distinct_id:Be,$device_id:null},"");else{var o=this.config.get_device_id(et());this.register_once({distinct_id:o,$device_id:e?o:n},"")}this.register({$last_posthog_reset:(new Date).toISOString()},1)}get_distinct_id(){return this.get_property("distinct_id")}getGroups(){return this.get_property("$groups")||{}}get_session_id(){var e,t;return null!==(e=null===(t=this.sessionManager)||void 0===t?void 0:t.checkAndGetSessionAndWindowId(!0).sessionId)&&void 0!==e?e:""}get_session_replay_url(e){if(!this.sessionManager)return"";var{sessionId:t,sessionStartTimestamp:i}=this.sessionManager.checkAndGetSessionAndWindowId(!0),r=this.requestRouter.endpointFor("ui","/project/".concat(this.config.token,"/replay/").concat(t));if(null!=e&&e.withTimestamp&&i){var s,n=null!==(s=e.timestampLookBack)&&void 0!==s?s:10;if(!i)return r;var o=Math.max(Math.floor(((new Date).getTime()-i)/1e3)-n,0);r+="?t=".concat(o)}return r}alias(e,t){return e===this.get_property(ne)?(q.critical("Attempting to create alias for existing People user - aborting."),-2):this._requirePersonProcessing("posthog.alias")?(R(t)&&(t=this.get_distinct_id()),e!==t?(this._register_single(oe,e),this.capture("$create_alias",{alias:e,distinct_id:t})):(q.warn("alias matches current distinct_id - skipping api call."),this.identify(e),-1)):void 0}set_config(e){var t,i,r,s,n=j({},this.config);C(e)&&(K(this.config,go(e)),null===(t=this.persistence)||void 0===t||t.update_config(this.config,n),this.sessionPersistence="sessionStorage"===this.config.persistence||"memory"===this.config.persistence?this.persistence:new Ei(j(j({},this.config),{},{persistence:"sessionStorage"})),lt.is_supported()&&"true"===lt.get("ph_debug")&&(this.config.debug=!0),this.config.debug&&(p.DEBUG=!0,q.info("set_config",{config:e,oldConfig:n,newConfig:j({},this.config)})),null===(i=this.sessionRecording)||void 0===i||i.startIfEnabledOrStop(),null===(r=this.autocapture)||void 0===r||r.startIfEnabled(),null===(s=this.heatmaps)||void 0===s||s.startIfEnabled(),this.surveys.loadIfEnabled(),this._sync_opt_out_with_persistence())}startSessionRecording(e){var t=!0===e,i={sampling:t||!(null==e||!e.sampling),linked_flag:t||!(null==e||!e.linked_flag),url_trigger:t||!(null==e||!e.url_trigger),event_trigger:t||!(null==e||!e.event_trigger)};if(Object.values(i).some(Boolean)){var r,s,n,o,a;if(null===(r=this.sessionManager)||void 0===r||r.checkAndGetSessionAndWindowId(),i.sampling)null===(s=this.sessionRecording)||void 0===s||s.overrideSampling();if(i.linked_flag)null===(n=this.sessionRecording)||void 0===n||n.overrideLinkedFlag();if(i.url_trigger)null===(o=this.sessionRecording)||void 0===o||o.overrideTrigger("url");if(i.event_trigger)null===(a=this.sessionRecording)||void 0===a||a.overrideTrigger("event")}this.set_config({disable_session_recording:!1})}stopSessionRecording(){this.set_config({disable_session_recording:!0})}sessionRecordingStarted(){var e;return!(null===(e=this.sessionRecording)||void 0===e||!e.started)}captureException(e,t){var i,r=new Error("PostHog syntheticException"),s=I(null===(i=_.__PosthogExtensions__)||void 0===i?void 0:i.parseErrorAsProperties)?j(j({},_.__PosthogExtensions__.parseErrorAsProperties([e.message,void 0,void 0,void 0,e],{syntheticException:r})),t):j({$exception_level:"error",$exception_list:[{type:e.name,value:e.message,mechanism:{handled:!0,synthetic:!1}}]},t);this.exceptions.sendExceptionEvent(s)}loadToolbar(e){return this.toolbar.loadToolbar(e)}get_property(e){var t;return null===(t=this.persistence)||void 0===t?void 0:t.props[e]}getSessionProperty(e){var t;return null===(t=this.sessionPersistence)||void 0===t?void 0:t.props[e]}toString(){var e,t=null!==(e=this.config.name)&&void 0!==e?e:_o;return t!==_o&&(t=_o+"."+t),t}_isIdentified(){var e,t;return"identified"===(null===(e=this.persistence)||void 0===e?void 0:e.get_property($e))||"identified"===(null===(t=this.sessionPersistence)||void 0===t?void 0:t.get_property($e))}_hasPersonProcessing(){var e,t,i,r;return!("never"===this.config.person_profiles||"identified_only"===this.config.person_profiles&&!this._isIdentified()&&P(this.getGroups())&&(null===(e=this.persistence)||void 0===e||null===(t=e.props)||void 0===t||!t[oe])&&(null===(i=this.persistence)||void 0===i||null===(r=i.props)||void 0===r||!r[Ne]))}_shouldCapturePageleave(){return!0===this.config.capture_pageleave||"if_capture_pageview"===this.config.capture_pageleave&&this.config.capture_pageview}createPersonProfile(){this._hasPersonProcessing()||this._requirePersonProcessing("posthog.createPersonProfile")&&this.setPersonProperties({},{})}_requirePersonProcessing(e){return"never"===this.config.person_profiles?(q.error(e+' was called, but process_person is set to "never". This call will be ignored.'),!1):(this._register_single(Ne,!0),!0)}_sync_opt_out_with_persistence(){var e,t,i,r,s=this.consent.isOptedOut(),n=this.config.opt_out_persistence_by_default,o=this.config.disable_persistence||s&&!!n;(null===(e=this.persistence)||void 0===e?void 0:e.disabled)!==o&&(null===(i=this.persistence)||void 0===i||i.set_disabled(o));(null===(t=this.sessionPersistence)||void 0===t?void 0:t.disabled)!==o&&(null===(r=this.sessionPersistence)||void 0===r||r.set_disabled(o))}opt_in_capturing(e){var t;(this.consent.optInOut(!0),this._sync_opt_out_with_persistence(),R(null==e?void 0:e.captureEventName)||null!=e&&e.captureEventName)&&this.capture(null!==(t=null==e?void 0:e.captureEventName)&&void 0!==t?t:"$opt_in",null==e?void 0:e.captureProperties,{send_instantly:!0});this.config.capture_pageview&&this._captureInitialPageview()}opt_out_capturing(){this.consent.optInOut(!1),this._sync_opt_out_with_persistence()}has_opted_in_capturing(){return this.consent.isOptedIn()}has_opted_out_capturing(){return this.consent.isOptedOut()}clear_opt_in_out_capturing(){this.consent.reset(),this._sync_opt_out_with_persistence()}_is_bot(){return o?$n(o,this.config.custom_blocked_useragents):void 0}_captureInitialPageview(){a&&!this._initialPageviewCaptured&&(this._initialPageviewCaptured=!0,this.capture("$pageview",{title:a.title},{send_instantly:!0}))}debug(e){!1===e?(null==t||t.console.log("You've disabled debug mode."),localStorage&&localStorage.removeItem("ph_debug"),this.set_config({debug:!1})):(null==t||t.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."),localStorage&&localStorage.setItem("ph_debug","true"),this.set_config({debug:!0}))}_runBeforeSend(e){if(M(this.config.before_send))return e;var t=x(this.config.before_send)?this.config.before_send:[this.config.before_send],i=e;for(var r of t){if(i=r(i),M(i)){var s="Event '".concat(e.event,"' was rejected in beforeSend function");return D(e.event)?q.warn("".concat(s,". This can cause unexpected behavior.")):q.info(s),null}i.properties&&!P(i.properties)||q.warn("Event '".concat(e.event,"' has no properties after beforeSend function, this is likely an error."))}return i}getPageViewId(){var e;return null===(e=this.pageViewManager._currentPageview)||void 0===e?void 0:e.pageViewId}}!function(e,t){for(var i=0;i<t.length;i++)e.prototype[t[i]]=ee(e.prototype[t[i]])}(mo,["identify"]);var bo,yo=(bo=co[_o]=new mo,function(){function e(){e.done||(e.done=!0,po=!1,Y(co,(function(e){e._dom_loaded()})))}null!=a&&a.addEventListener&&("complete"===a.readyState?e():a.addEventListener("DOMContentLoaded",e,!1)),t&&re(t,"load",e,!0)}(),bo);
//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./functions/checkErrors.js":
/*!**********************************!*\
  !*** ./functions/checkErrors.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkErrors: () => (/* binding */ checkErrors)
/* harmony export */ });
// проверка некоторых ошибок
function checkErrors(userName, userError, selectedColor, judgesArray) {
	if (userError) {
		return userError
	} else if (!selectedColor) {
		return 'Please, select the color'
	} else if (!judgesArray.includes(userName.toLowerCase())) {
		return 'The user was not a judge of this Hackathon'
	}
}


/***/ }),

/***/ "./functions/customDrawImage.js":
/*!**************************************!*\
  !*** ./functions/customDrawImage.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customDrawImage: () => (/* binding */ customDrawImage)
/* harmony export */ });
const customDrawImage = (page, content, x_coord, y_coord, width, height) => {
	page.drawImage(content, {
		x: x_coord,
		y: y_coord,
		width: width,
		height: height,
	})
}


/***/ }),

/***/ "./functions/customDrawText.js":
/*!*************************************!*\
  !*** ./functions/customDrawText.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customDrawText: () => (/* binding */ customDrawText)
/* harmony export */ });
const customDrawText = (page, content, x_coord, y_coord, fontSize, font, color) => {
	page.drawText(content, {
		x: x_coord,
		y: y_coord,
		size: fontSize,
		font: font,
		color: color,
	})
}


/***/ }),

/***/ "./functions/generateQrCode.js":
/*!*************************************!*\
  !*** ./functions/generateQrCode.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateQrCode: () => (/* binding */ generateQrCode)
/* harmony export */ });
async function generateQrCode(pdfDoc, url) {
	const qrCodeCanvas = document.createElement('canvas') // создаем canvas элемент
	await QRCode.toCanvas(qrCodeCanvas, url, {
		width: 160,
	}) // рисует QRCode на canvas элементе
	const qrCodeDataUrl = qrCodeCanvas.toDataURL() // конвертируем в base64
	const qrImage = await pdfDoc.embedPng(qrCodeDataUrl) // возвращает объект который можно встроить в PDF
	return qrImage
}


/***/ }),

/***/ "./functions/getCurrentDate.js":
/*!*************************************!*\
  !*** ./functions/getCurrentDate.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentDate: () => (/* binding */ getCurrentDate)
/* harmony export */ });
function getCurrentDate() {
	const currentDate = new Date()

	const day = currentDate.getDate()
	const month = currentDate.getMonth() + 1 // getMonth возвращает от 0 до 11, поэтому прибавляем 1
	const year = currentDate.getFullYear()

	const dayFormatted = day < 10 ? '0' + day : day // Если день меньше 10, добавляем ведущий 0
	const monthFormatted = month < 10 ? '0' + month : month // Если месяц меньше 10, добавляем ведущий 0

	const formattedDate = `${dayFormatted} / ${monthFormatted} / ${year}` // нужный формат 'DD / MM / YYYY'
	return formattedDate
}


/***/ }),

/***/ "./functions/getLoginUserName.js":
/*!***************************************!*\
  !*** ./functions/getLoginUserName.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoginUserName: () => (/* binding */ getLoginUserName)
/* harmony export */ });
async function getLoginUserName(activeTab) {
	// получаем ссылку на профиль из аватарки в правом верхнем углу страницы, также через executeScript
	const [result] = await chrome.scripting.executeScript({
		target: { tabId: activeTab.id },
		func: () => {
			const profileLink = document.querySelector('#global-nav-screen-name')?.getAttribute('href')
			return profileLink || null
		},
	})

	if (!result.result) {
		return { userError: 'Some kind of error has occurred, the profile has not been found' }
	}

	const profileLink = result.result // деструктуризируем результат
	const response = await fetch(profileLink) // запрашиваем html страницы профиля по ссылке на профиль
	const htmlText = await response.text() // получаем страницу в виде текста

	const parser = new DOMParser() // создаём временный парсер HTML который позволит разобрать строку в HTML
	const dom = parser.parseFromString(htmlText, 'text/html') // получаем HTML в виде DOM

	const nameElement = dom.querySelector('#portfolio-user-name') // ищем имя login пользователя

	if (!nameElement || !nameElement.childNodes[0].textContent.trim()) {
		return { userError: 'User name not found' }
	}

	// получаем текст внутри тега, игнорируя <small>, так как сайт имеет вот такую структуру
	// <h1 id="portfolio-user-name">Winston Esposito<small>(leha-geraskin-80)</small></h1>
	const fullName = nameElement.childNodes[0].textContent.trim().replace(/\s+/g, ' ')

	return { userName: fullName.toLowerCase(), userError: null } // возвращаем в нижнем регистре
}


/***/ }),

/***/ "./functions/hexToRgb.js":
/*!*******************************!*\
  !*** ./functions/hexToRgb.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hexToRgb: () => (/* binding */ hexToRgb)
/* harmony export */ });
// конвертирует цвет из формата hex в формат RGB
function hexToRgb(hex) {
	const r = parseInt(hex.slice(1, 3), 16) / 255
	const g = parseInt(hex.slice(3, 5), 16) / 255
	const b = parseInt(hex.slice(5, 7), 16) / 255
	return { r, g, b }
}


/***/ }),

/***/ "./functions/parsePageContent.js":
/*!***************************************!*\
  !*** ./functions/parsePageContent.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parsePageContent: () => (/* binding */ parsePageContent)
/* harmony export */ });
// запускает парсинг страницы с devpost.com
function parsePageContent() {
	// НАЗВАНИЕ
	const titleElement = document.querySelector('#introduction h1') // ищем название хакатона
	const titleText = titleElement ? titleElement.textContent.trim() : null

	// ДАТА
	const dateElement = document.querySelector('[data-dates-text]') // ищем дату
	const dateText = dateElement ? dateElement.textContent.trim() : null

	// СПИСОК СУДЕЙ
	const judgeElements = document.querySelectorAll('div.challenge_judge strong')
	const judgesArray = Array.from(judgeElements).map(el => el.textContent.trim().toLowerCase())

	return {
		dateHackathon: dateText,
		titleHackathon: titleText,
		judges: judgesArray,
	}
}


/***/ }),

/***/ "./functions/setupColorSelection.js":
/*!******************************************!*\
  !*** ./functions/setupColorSelection.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSelectedColor: () => (/* binding */ getSelectedColor),
/* harmony export */   setupColorSelection: () => (/* binding */ setupColorSelection)
/* harmony export */ });
let selectedColor = ''

// функция для визуального отображения выбора цвета (рамка)
function setupColorSelection() {
	const previews = document.querySelectorAll('.color_preview') // получаем 'кнопки' с цветами

	// на каждую 'кнопку' вешаем слушатель клика
	previews.forEach(preview => {
		preview.addEventListener('click', () => {
			// убираем предыдущую активную рамку если она есть
			document.querySelector('.color_preview.active')?.classList.remove('active')
			preview.classList.add('active') // добавляем рамку выбранному цвету
			selectedColor = preview.getAttribute('data-color') // обновляем выбранный цвет
		})
	})
}

// геттер для получения выбранного цвета
function getSelectedColor() {
	return selectedColor
}


/***/ }),

/***/ "./functions/switchInterface.js":
/*!**************************************!*\
  !*** ./functions/switchInterface.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   switchInterface: () => (/* binding */ switchInterface)
/* harmony export */ });
const switchInterface = state => {
	switch (state) {
		case 'openLoader':
			document.getElementById('result').style.display = 'none'
			document.getElementById('loader').style.display = 'block'
			document.getElementById('generateButton').disabled = true
			break
		case 'closeLoader':
			document.getElementById('result').style.display = 'none'
			document.getElementById('loader').style.display = 'none'
			document.getElementById('generateButton').disabled = false
			break
		case 'result':
			document.getElementById('loader').style.display = 'none'
			document.getElementById('generateButton').disabled = false
			document.getElementById('result').style.display = 'block'
			break
	}
}


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/asyncContext/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/asyncContext/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAsyncContextStrategy: () => (/* binding */ getAsyncContextStrategy),
/* harmony export */   setAsyncContextStrategy: () => (/* binding */ setAsyncContextStrategy)
/* harmony export */ });
/* harmony import */ var _carrier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../carrier.js */ "./node_modules/@sentry/core/build/esm/carrier.js");
/* harmony import */ var _stackStrategy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stackStrategy.js */ "./node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js");



/**
 * @private Private API with no semver guarantees!
 *
 * Sets the global async context strategy
 */
function setAsyncContextStrategy(strategy) {
  // Get main carrier (global for every environment)
  const registry = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_0__.getMainCarrier)();
  const sentry = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_0__.getSentryCarrier)(registry);
  sentry.acs = strategy;
}

/**
 * Get the current async context strategy.
 * If none has been setup, the default will be used.
 */
function getAsyncContextStrategy(carrier) {
  const sentry = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_0__.getSentryCarrier)(carrier);

  if (sentry.acs) {
    return sentry.acs;
  }

  // Otherwise, use the default one (stack)
  return (0,_stackStrategy_js__WEBPACK_IMPORTED_MODULE_1__.getStackAsyncContextStrategy)();
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncContextStack: () => (/* binding */ AsyncContextStack),
/* harmony export */   getStackAsyncContextStrategy: () => (/* binding */ getStackAsyncContextStrategy)
/* harmony export */ });
/* harmony import */ var _defaultScopes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defaultScopes.js */ "./node_modules/@sentry/core/build/esm/defaultScopes.js");
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scope.js */ "./node_modules/@sentry/core/build/esm/scope.js");
/* harmony import */ var _utils_hoist_is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils-hoist/is.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/is.js");
/* harmony import */ var _carrier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carrier.js */ "./node_modules/@sentry/core/build/esm/carrier.js");





/**
 * This is an object that holds a stack of scopes.
 */
class AsyncContextStack {

   constructor(scope, isolationScope) {
    let assignedScope;
    if (!scope) {
      assignedScope = new _scope_js__WEBPACK_IMPORTED_MODULE_0__.Scope();
    } else {
      assignedScope = scope;
    }

    let assignedIsolationScope;
    if (!isolationScope) {
      assignedIsolationScope = new _scope_js__WEBPACK_IMPORTED_MODULE_0__.Scope();
    } else {
      assignedIsolationScope = isolationScope;
    }

    // scope stack for domains or the process
    this._stack = [{ scope: assignedScope }];
    this._isolationScope = assignedIsolationScope;
  }

  /**
   * Fork a scope for the stack.
   */
   withScope(callback) {
    const scope = this._pushScope();

    let maybePromiseResult;
    try {
      maybePromiseResult = callback(scope);
    } catch (e) {
      this._popScope();
      throw e;
    }

    if ((0,_utils_hoist_is_js__WEBPACK_IMPORTED_MODULE_1__.isThenable)(maybePromiseResult)) {
      // @ts-expect-error - isThenable returns the wrong type
      return maybePromiseResult.then(
        res => {
          this._popScope();
          return res;
        },
        e => {
          this._popScope();
          throw e;
        },
      );
    }

    this._popScope();
    return maybePromiseResult;
  }

  /**
   * Get the client of the stack.
   */
   getClient() {
    return this.getStackTop().client ;
  }

  /**
   * Returns the scope of the top stack.
   */
   getScope() {
    return this.getStackTop().scope;
  }

  /**
   * Get the isolation scope for the stack.
   */
   getIsolationScope() {
    return this._isolationScope;
  }

  /**
   * Returns the topmost scope layer in the order domain > local > process.
   */
   getStackTop() {
    return this._stack[this._stack.length - 1] ;
  }

  /**
   * Push a scope to the stack.
   */
   _pushScope() {
    // We want to clone the content of prev scope
    const scope = this.getScope().clone();
    this._stack.push({
      client: this.getClient(),
      scope,
    });
    return scope;
  }

  /**
   * Pop a scope from the stack.
   */
   _popScope() {
    if (this._stack.length <= 1) return false;
    return !!this._stack.pop();
  }
}

/**
 * Get the global async context stack.
 * This will be removed during the v8 cycle and is only here to make migration easier.
 */
function getAsyncContextStack() {
  const registry = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_2__.getMainCarrier)();
  const sentry = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_2__.getSentryCarrier)(registry);

  return (sentry.stack = sentry.stack || new AsyncContextStack((0,_defaultScopes_js__WEBPACK_IMPORTED_MODULE_3__.getDefaultCurrentScope)(), (0,_defaultScopes_js__WEBPACK_IMPORTED_MODULE_3__.getDefaultIsolationScope)()));
}

function withScope(callback) {
  return getAsyncContextStack().withScope(callback);
}

function withSetScope(scope, callback) {
  const stack = getAsyncContextStack() ;
  return stack.withScope(() => {
    stack.getStackTop().scope = scope;
    return callback(scope);
  });
}

function withIsolationScope(callback) {
  return getAsyncContextStack().withScope(() => {
    return callback(getAsyncContextStack().getIsolationScope());
  });
}

/**
 * Get the stack-based async context strategy.
 */
function getStackAsyncContextStrategy() {
  return {
    withIsolationScope,
    withScope,
    withSetScope,
    withSetIsolationScope: (_isolationScope, callback) => {
      return withIsolationScope(callback);
    },
    getCurrentScope: () => getAsyncContextStack().getScope(),
    getIsolationScope: () => getAsyncContextStack().getIsolationScope(),
  };
}


//# sourceMappingURL=stackStrategy.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/carrier.js":
/*!********************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/carrier.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMainCarrier: () => (/* binding */ getMainCarrier),
/* harmony export */   getSentryCarrier: () => (/* binding */ getSentryCarrier)
/* harmony export */ });
/* harmony import */ var _utils_hoist_version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-hoist/version.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/version.js");
/* harmony import */ var _utils_hoist_worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils-hoist/worldwide.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js");



/**
 * An object that contains globally accessible properties and maintains a scope stack.
 * @hidden
 */

/**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/
function getMainCarrier() {
  // This ensures a Sentry carrier exists
  getSentryCarrier(_utils_hoist_worldwide_js__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_OBJ);
  return _utils_hoist_worldwide_js__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_OBJ;
}

/** Will either get the existing sentry carrier, or create a new one. */
function getSentryCarrier(carrier) {
  const __SENTRY__ = (carrier.__SENTRY__ = carrier.__SENTRY__ || {});

  // For now: First SDK that sets the .version property wins
  __SENTRY__.version = __SENTRY__.version || _utils_hoist_version_js__WEBPACK_IMPORTED_MODULE_1__.SDK_VERSION;

  // Intentionally populating and returning the version of "this" SDK instance
  // rather than what's set in .version so that "this" SDK always gets its carrier
  return (__SENTRY__[_utils_hoist_version_js__WEBPACK_IMPORTED_MODULE_1__.SDK_VERSION] = __SENTRY__[_utils_hoist_version_js__WEBPACK_IMPORTED_MODULE_1__.SDK_VERSION] || {});
}


//# sourceMappingURL=carrier.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/constants.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ENVIRONMENT: () => (/* binding */ DEFAULT_ENVIRONMENT)
/* harmony export */ });
const DEFAULT_ENVIRONMENT = 'production';


//# sourceMappingURL=constants.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/currentScopes.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/currentScopes.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClient: () => (/* binding */ getClient),
/* harmony export */   getCurrentScope: () => (/* binding */ getCurrentScope),
/* harmony export */   getGlobalScope: () => (/* binding */ getGlobalScope),
/* harmony export */   getIsolationScope: () => (/* binding */ getIsolationScope),
/* harmony export */   getTraceContextFromScope: () => (/* binding */ getTraceContextFromScope),
/* harmony export */   withIsolationScope: () => (/* binding */ withIsolationScope),
/* harmony export */   withScope: () => (/* binding */ withScope)
/* harmony export */ });
/* harmony import */ var _asyncContext_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asyncContext/index.js */ "./node_modules/@sentry/core/build/esm/asyncContext/index.js");
/* harmony import */ var _carrier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carrier.js */ "./node_modules/@sentry/core/build/esm/carrier.js");
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scope.js */ "./node_modules/@sentry/core/build/esm/scope.js");
/* harmony import */ var _utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils-hoist/object.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/object.js");
/* harmony import */ var _utils_hoist_worldwide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils-hoist/worldwide.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js");






/**
 * Get the currently active scope.
 */
function getCurrentScope() {
  const carrier = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_0__.getMainCarrier)();
  const acs = (0,_asyncContext_index_js__WEBPACK_IMPORTED_MODULE_1__.getAsyncContextStrategy)(carrier);
  return acs.getCurrentScope();
}

/**
 * Get the currently active isolation scope.
 * The isolation scope is active for the current execution context.
 */
function getIsolationScope() {
  const carrier = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_0__.getMainCarrier)();
  const acs = (0,_asyncContext_index_js__WEBPACK_IMPORTED_MODULE_1__.getAsyncContextStrategy)(carrier);
  return acs.getIsolationScope();
}

/**
 * Get the global scope.
 * This scope is applied to _all_ events.
 */
function getGlobalScope() {
  return (0,_utils_hoist_worldwide_js__WEBPACK_IMPORTED_MODULE_2__.getGlobalSingleton)('globalScope', () => new _scope_js__WEBPACK_IMPORTED_MODULE_3__.Scope());
}

/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 */

/**
 * Either creates a new active scope, or sets the given scope as active scope in the given callback.
 */
function withScope(
  ...rest
) {
  const carrier = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_0__.getMainCarrier)();
  const acs = (0,_asyncContext_index_js__WEBPACK_IMPORTED_MODULE_1__.getAsyncContextStrategy)(carrier);

  // If a scope is defined, we want to make this the active scope instead of the default one
  if (rest.length === 2) {
    const [scope, callback] = rest;

    if (!scope) {
      return acs.withScope(callback);
    }

    return acs.withSetScope(scope, callback);
  }

  return acs.withScope(rest[0]);
}

/**
 * Attempts to fork the current isolation scope and the current scope based on the current async context strategy. If no
 * async context strategy is set, the isolation scope and the current scope will not be forked (this is currently the
 * case, for example, in the browser).
 *
 * Usage of this function in environments without async context strategy is discouraged and may lead to unexpected behaviour.
 *
 * This function is intended for Sentry SDK and SDK integration development. It is not recommended to be used in "normal"
 * applications directly because it comes with pitfalls. Use at your own risk!
 */

/**
 * Either creates a new active isolation scope, or sets the given isolation scope as active scope in the given callback.
 */
function withIsolationScope(
  ...rest

) {
  const carrier = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_0__.getMainCarrier)();
  const acs = (0,_asyncContext_index_js__WEBPACK_IMPORTED_MODULE_1__.getAsyncContextStrategy)(carrier);

  // If a scope is defined, we want to make this the active scope instead of the default one
  if (rest.length === 2) {
    const [isolationScope, callback] = rest;

    if (!isolationScope) {
      return acs.withIsolationScope(callback);
    }

    return acs.withSetIsolationScope(isolationScope, callback);
  }

  return acs.withIsolationScope(rest[0]);
}

/**
 * Get the currently active client.
 */
function getClient() {
  return getCurrentScope().getClient();
}

/**
 * Get a trace context for the given scope.
 */
function getTraceContextFromScope(scope) {
  const propagationContext = scope.getPropagationContext();

  // TODO(v9): Use generateSpanId() instead of spanId
  // eslint-disable-next-line deprecation/deprecation
  const { traceId, spanId, parentSpanId } = propagationContext;

  const traceContext = (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_4__.dropUndefinedKeys)({
    trace_id: traceId,
    span_id: spanId,
    parent_span_id: parentSpanId,
  });

  return traceContext;
}


//# sourceMappingURL=currentScopes.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/debug-build.js":
/*!************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/debug-build.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEBUG_BUILD: () => (/* binding */ DEBUG_BUILD)
/* harmony export */ });
/**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */
const DEBUG_BUILD = (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__);


//# sourceMappingURL=debug-build.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/defaultScopes.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/defaultScopes.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultCurrentScope: () => (/* binding */ getDefaultCurrentScope),
/* harmony export */   getDefaultIsolationScope: () => (/* binding */ getDefaultIsolationScope)
/* harmony export */ });
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scope.js */ "./node_modules/@sentry/core/build/esm/scope.js");
/* harmony import */ var _utils_hoist_worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils-hoist/worldwide.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js");



/** Get the default current scope. */
function getDefaultCurrentScope() {
  return (0,_utils_hoist_worldwide_js__WEBPACK_IMPORTED_MODULE_0__.getGlobalSingleton)('defaultCurrentScope', () => new _scope_js__WEBPACK_IMPORTED_MODULE_1__.Scope());
}

/** Get the default isolation scope. */
function getDefaultIsolationScope() {
  return (0,_utils_hoist_worldwide_js__WEBPACK_IMPORTED_MODULE_0__.getGlobalSingleton)('defaultIsolationScope', () => new _scope_js__WEBPACK_IMPORTED_MODULE_1__.Scope());
}


//# sourceMappingURL=defaultScopes.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/eventProcessors.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/eventProcessors.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notifyEventProcessors: () => (/* binding */ notifyEventProcessors)
/* harmony export */ });
/* harmony import */ var _debug_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug-build.js */ "./node_modules/@sentry/core/build/esm/debug-build.js");
/* harmony import */ var _utils_hoist_is_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils-hoist/is.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/is.js");
/* harmony import */ var _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils-hoist/logger.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/logger.js");
/* harmony import */ var _utils_hoist_syncpromise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils-hoist/syncpromise.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js");





/**
 * Process an array of event processors, returning the processed event (or `null` if the event was dropped).
 */
function notifyEventProcessors(
  processors,
  event,
  hint,
  index = 0,
) {
  return new _utils_hoist_syncpromise_js__WEBPACK_IMPORTED_MODULE_0__.SyncPromise((resolve, reject) => {
    const processor = processors[index];
    if (event === null || typeof processor !== 'function') {
      resolve(event);
    } else {
      const result = processor({ ...event }, hint) ;

      _debug_build_js__WEBPACK_IMPORTED_MODULE_1__.DEBUG_BUILD && processor.id && result === null && _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`Event processor "${processor.id}" dropped event`);

      if ((0,_utils_hoist_is_js__WEBPACK_IMPORTED_MODULE_3__.isThenable)(result)) {
        void result
          .then(final => notifyEventProcessors(processors, final, hint, index + 1).then(resolve))
          .then(null, reject);
      } else {
        void notifyEventProcessors(processors, result, hint, index + 1)
          .then(resolve)
          .then(null, reject);
      }
    }
  });
}


//# sourceMappingURL=eventProcessors.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/exports.js":
/*!********************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/exports.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventProcessor: () => (/* binding */ addEventProcessor),
/* harmony export */   captureCheckIn: () => (/* binding */ captureCheckIn),
/* harmony export */   captureEvent: () => (/* binding */ captureEvent),
/* harmony export */   captureException: () => (/* binding */ captureException),
/* harmony export */   captureMessage: () => (/* binding */ captureMessage),
/* harmony export */   captureSession: () => (/* binding */ captureSession),
/* harmony export */   close: () => (/* binding */ close),
/* harmony export */   endSession: () => (/* binding */ endSession),
/* harmony export */   flush: () => (/* binding */ flush),
/* harmony export */   isEnabled: () => (/* binding */ isEnabled),
/* harmony export */   isInitialized: () => (/* binding */ isInitialized),
/* harmony export */   lastEventId: () => (/* binding */ lastEventId),
/* harmony export */   setContext: () => (/* binding */ setContext),
/* harmony export */   setExtra: () => (/* binding */ setExtra),
/* harmony export */   setExtras: () => (/* binding */ setExtras),
/* harmony export */   setTag: () => (/* binding */ setTag),
/* harmony export */   setTags: () => (/* binding */ setTags),
/* harmony export */   setUser: () => (/* binding */ setUser),
/* harmony export */   startSession: () => (/* binding */ startSession),
/* harmony export */   withMonitor: () => (/* binding */ withMonitor)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants.js */ "./node_modules/@sentry/core/build/esm/constants.js");
/* harmony import */ var _currentScopes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentScopes.js */ "./node_modules/@sentry/core/build/esm/currentScopes.js");
/* harmony import */ var _debug_build_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug-build.js */ "./node_modules/@sentry/core/build/esm/debug-build.js");
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./session.js */ "./node_modules/@sentry/core/build/esm/session.js");
/* harmony import */ var _utils_hoist_is_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils-hoist/is.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/is.js");
/* harmony import */ var _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils-hoist/logger.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/logger.js");
/* harmony import */ var _utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils-hoist/misc.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/misc.js");
/* harmony import */ var _utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils-hoist/time.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/time.js");
/* harmony import */ var _utils_hoist_worldwide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils-hoist/worldwide.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js");
/* harmony import */ var _utils_prepareEvent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/prepareEvent.js */ "./node_modules/@sentry/core/build/esm/utils/prepareEvent.js");











/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception The exception to capture.
 * @param hint Optional additional data to attach to the Sentry event.
 * @returns the id of the captured Sentry event.
 */
function captureException(exception, hint) {
  return (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope)().captureException(exception, (0,_utils_prepareEvent_js__WEBPACK_IMPORTED_MODULE_1__.parseEventHintOrCaptureContext)(hint));
}

/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param captureContext Define the level of the message or pass in additional data to attach to the message.
 * @returns the id of the captured message.
 */
function captureMessage(message, captureContext) {
  // This is necessary to provide explicit scopes upgrade, without changing the original
  // arity of the `captureMessage(message, level)` method.
  const level = typeof captureContext === 'string' ? captureContext : undefined;
  const context = typeof captureContext !== 'string' ? { captureContext } : undefined;
  return (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope)().captureMessage(message, level, context);
}

/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @param hint Optional additional data to attach to the Sentry event.
 * @returns the id of the captured event.
 */
function captureEvent(event, hint) {
  return (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope)().captureEvent(event, hint);
}

/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normalized.
 */
function setContext(name, context) {
  (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getIsolationScope)().setContext(name, context);
}

/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */
function setExtras(extras) {
  (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getIsolationScope)().setExtras(extras);
}

/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normalized.
 */
function setExtra(key, extra) {
  (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getIsolationScope)().setExtra(key, extra);
}

/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */
function setTags(tags) {
  (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getIsolationScope)().setTags(tags);
}

/**
 * Set key:value that will be sent as tags data with the event.
 *
 * Can also be used to unset a tag, by passing `undefined`.
 *
 * @param key String key of tag
 * @param value Value of tag
 */
function setTag(key, value) {
  (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getIsolationScope)().setTag(key, value);
}

/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */
function setUser(user) {
  (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getIsolationScope)().setUser(user);
}

/**
 * The last error event id of the isolation scope.
 *
 * Warning: This function really returns the last recorded error event id on the current
 * isolation scope. If you call this function after handling a certain error and another error
 * is captured in between, the last one is returned instead of the one you might expect.
 * Also, ids of events that were never sent to Sentry (for example because
 * they were dropped in `beforeSend`) could be returned.
 *
 * @returns The last event id of the isolation scope.
 */
function lastEventId() {
  return (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getIsolationScope)().lastEventId();
}

/**
 * Create a cron monitor check in and send it to Sentry.
 *
 * @param checkIn An object that describes a check in.
 * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
 * to create a monitor automatically when sending a check in.
 */
function captureCheckIn(checkIn, upsertMonitorConfig) {
  const scope = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope)();
  const client = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getClient)();
  if (!client) {
    _debug_build_js__WEBPACK_IMPORTED_MODULE_2__.DEBUG_BUILD && _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn('Cannot capture check-in. No client defined.');
  } else if (!client.captureCheckIn) {
    _debug_build_js__WEBPACK_IMPORTED_MODULE_2__.DEBUG_BUILD && _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn('Cannot capture check-in. Client does not support sending check-ins.');
  } else {
    return client.captureCheckIn(checkIn, upsertMonitorConfig, scope);
  }

  return (0,_utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_4__.uuid4)();
}

/**
 * Wraps a callback with a cron monitor check in. The check in will be sent to Sentry when the callback finishes.
 *
 * @param monitorSlug The distinct slug of the monitor.
 * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
 * to create a monitor automatically when sending a check in.
 */
function withMonitor(
  monitorSlug,
  callback,
  upsertMonitorConfig,
) {
  const checkInId = captureCheckIn({ monitorSlug, status: 'in_progress' }, upsertMonitorConfig);
  const now = (0,_utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_5__.timestampInSeconds)();

  function finishCheckIn(status) {
    captureCheckIn({ monitorSlug, status, checkInId, duration: (0,_utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_5__.timestampInSeconds)() - now });
  }

  return (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.withIsolationScope)(() => {
    let maybePromiseResult;
    try {
      maybePromiseResult = callback();
    } catch (e) {
      finishCheckIn('error');
      throw e;
    }

    if ((0,_utils_hoist_is_js__WEBPACK_IMPORTED_MODULE_6__.isThenable)(maybePromiseResult)) {
      Promise.resolve(maybePromiseResult).then(
        () => {
          finishCheckIn('ok');
        },
        e => {
          finishCheckIn('error');
          throw e;
        },
      );
    } else {
      finishCheckIn('ok');
    }

    return maybePromiseResult;
  });
}

/**
 * Call `flush()` on the current client, if there is one. See {@link Client.flush}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue. Omitting this parameter will cause
 * the client to wait until all events are sent before resolving the promise.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
async function flush(timeout) {
  const client = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getClient)();
  if (client) {
    return client.flush(timeout);
  }
  _debug_build_js__WEBPACK_IMPORTED_MODULE_2__.DEBUG_BUILD && _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn('Cannot flush events. No client defined.');
  return Promise.resolve(false);
}

/**
 * Call `close()` on the current client, if there is one. See {@link Client.close}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue before shutting down. Omitting this
 * parameter will cause the client to wait until all events are sent before disabling itself.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
async function close(timeout) {
  const client = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getClient)();
  if (client) {
    return client.close(timeout);
  }
  _debug_build_js__WEBPACK_IMPORTED_MODULE_2__.DEBUG_BUILD && _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn('Cannot flush events and disable SDK. No client defined.');
  return Promise.resolve(false);
}

/**
 * Returns true if Sentry has been properly initialized.
 */
function isInitialized() {
  return !!(0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getClient)();
}

/** If the SDK is initialized & enabled. */
function isEnabled() {
  const client = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getClient)();
  return !!client && client.getOptions().enabled !== false && !!client.getTransport();
}

/**
 * Add an event processor.
 * This will be added to the current isolation scope, ensuring any event that is processed in the current execution
 * context will have the processor applied.
 */
function addEventProcessor(callback) {
  (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getIsolationScope)().addEventProcessor(callback);
}

/**
 * Start a session on the current isolation scope.
 *
 * @param context (optional) additional properties to be applied to the returned session object
 *
 * @returns the new active session
 */
function startSession(context) {
  const client = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getClient)();
  const isolationScope = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getIsolationScope)();
  const currentScope = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope)();

  const { release, environment = _constants_js__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_ENVIRONMENT } = (client && client.getOptions()) || {};

  // Will fetch userAgent if called from browser sdk
  const { userAgent } = _utils_hoist_worldwide_js__WEBPACK_IMPORTED_MODULE_8__.GLOBAL_OBJ.navigator || {};

  const session = (0,_session_js__WEBPACK_IMPORTED_MODULE_9__.makeSession)({
    release,
    environment,
    user: currentScope.getUser() || isolationScope.getUser(),
    ...(userAgent && { userAgent }),
    ...context,
  });

  // End existing session if there's one
  const currentSession = isolationScope.getSession();
  if (currentSession && currentSession.status === 'ok') {
    (0,_session_js__WEBPACK_IMPORTED_MODULE_9__.updateSession)(currentSession, { status: 'exited' });
  }

  endSession();

  // Afterwards we set the new session on the scope
  isolationScope.setSession(session);

  // TODO (v8): Remove this and only use the isolation scope(?).
  // For v7 though, we can't "soft-break" people using getCurrentHub().getScope().setSession()
  currentScope.setSession(session);

  return session;
}

/**
 * End the session on the current isolation scope.
 */
function endSession() {
  const isolationScope = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getIsolationScope)();
  const currentScope = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope)();

  const session = currentScope.getSession() || isolationScope.getSession();
  if (session) {
    (0,_session_js__WEBPACK_IMPORTED_MODULE_9__.closeSession)(session);
  }
  _sendSessionUpdate();

  // the session is over; take it off of the scope
  isolationScope.setSession();

  // TODO (v8): Remove this and only use the isolation scope(?).
  // For v7 though, we can't "soft-break" people using getCurrentHub().getScope().setSession()
  currentScope.setSession();
}

/**
 * Sends the current Session on the scope
 */
function _sendSessionUpdate() {
  const isolationScope = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getIsolationScope)();
  const currentScope = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope)();
  const client = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getClient)();
  // TODO (v8): Remove currentScope and only use the isolation scope(?).
  // For v7 though, we can't "soft-break" people using getCurrentHub().getScope().setSession()
  const session = currentScope.getSession() || isolationScope.getSession();
  if (session && client) {
    client.captureSession(session);
  }
}

/**
 * Sends the current session on the scope to Sentry
 *
 * @param end If set the session will be marked as exited and removed from the scope.
 *            Defaults to `false`.
 */
function captureSession(end = false) {
  // both send the update and pull the session from the scope
  if (end) {
    endSession();
    return;
  }

  // only send the update
  _sendSessionUpdate();
}


//# sourceMappingURL=exports.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/metrics/metric-summary.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/metrics/metric-summary.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMetricSummaryJsonForSpan: () => (/* binding */ getMetricSummaryJsonForSpan),
/* harmony export */   updateMetricSummaryOnSpan: () => (/* binding */ updateMetricSummaryOnSpan)
/* harmony export */ });
/* harmony import */ var _utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils-hoist/object.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/object.js");


/**
 * key: bucketKey
 * value: [exportKey, MetricSummary]
 */

const METRICS_SPAN_FIELD = '_sentryMetrics';

/**
 * Fetches the metric summary if it exists for the passed span
 */
function getMetricSummaryJsonForSpan(span) {
  const storage = (span )[METRICS_SPAN_FIELD];

  if (!storage) {
    return undefined;
  }
  const output = {};

  for (const [, [exportKey, summary]] of storage) {
    const arr = output[exportKey] || (output[exportKey] = []);
    arr.push((0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__.dropUndefinedKeys)(summary));
  }

  return output;
}

/**
 * Updates the metric summary on a span.
 */
function updateMetricSummaryOnSpan(
  span,
  metricType,
  sanitizedName,
  value,
  unit,
  tags,
  bucketKey,
) {
  const existingStorage = (span )[METRICS_SPAN_FIELD];
  const storage =
    existingStorage ||
    ((span )[METRICS_SPAN_FIELD] = new Map());

  const exportKey = `${metricType}:${sanitizedName}@${unit}`;
  const bucketItem = storage.get(bucketKey);

  if (bucketItem) {
    const [, summary] = bucketItem;
    storage.set(bucketKey, [
      exportKey,
      {
        min: Math.min(summary.min, value),
        max: Math.max(summary.max, value),
        count: (summary.count += 1),
        sum: (summary.sum += value),
        tags: summary.tags,
      },
    ]);
  } else {
    storage.set(bucketKey, [
      exportKey,
      {
        min: value,
        max: value,
        count: 1,
        sum: value,
        tags,
      },
    ]);
  }
}


//# sourceMappingURL=metric-summary.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/scope.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/scope.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scope: () => (/* binding */ Scope)
/* harmony export */ });
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.js */ "./node_modules/@sentry/core/build/esm/session.js");
/* harmony import */ var _utils_hoist_is_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils-hoist/is.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/is.js");
/* harmony import */ var _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils-hoist/logger.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/logger.js");
/* harmony import */ var _utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils-hoist/misc.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/misc.js");
/* harmony import */ var _utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils-hoist/propagationContext.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js");
/* harmony import */ var _utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils-hoist/time.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/time.js");
/* harmony import */ var _utils_merge_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/merge.js */ "./node_modules/@sentry/core/build/esm/utils/merge.js");
/* harmony import */ var _utils_spanOnScope_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/spanOnScope.js */ "./node_modules/@sentry/core/build/esm/utils/spanOnScope.js");









/**
 * Default value for maximum number of breadcrumbs added to an event.
 */
const DEFAULT_MAX_BREADCRUMBS = 100;

/**
 * Holds additional event information.
 */
class ScopeClass  {
  /** Flag if notifying is happening. */

  /** Callback for client to receive scope changes. */

  /** Callback list that will be called during event processing. */

  /** Array of breadcrumbs. */

  /** User */

  /** Tags */

  /** Extra */

  /** Contexts */

  /** Attachments */

  /** Propagation Context for distributed tracing */

  /**
   * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
   * sent to Sentry
   */

  /** Fingerprint */

  /** Severity */

  /**
   * Transaction Name
   *
   * IMPORTANT: The transaction name on the scope has nothing to do with root spans/transaction objects.
   * It's purpose is to assign a transaction to the scope that's added to non-transaction events.
   */

  /** Session */

  /** Request Mode Session Status */
  // eslint-disable-next-line deprecation/deprecation

  /** The client on this scope */

  /** Contains the last event id of a captured event.  */

  // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.

   constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
    this._propagationContext = {
      traceId: (0,_utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_0__.generateTraceId)(),
      spanId: (0,_utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_0__.generateSpanId)(),
    };
  }

  /**
   * @inheritDoc
   */
   clone() {
    const newScope = new ScopeClass();
    newScope._breadcrumbs = [...this._breadcrumbs];
    newScope._tags = { ...this._tags };
    newScope._extra = { ...this._extra };
    newScope._contexts = { ...this._contexts };
    if (this._contexts.flags) {
      // We need to copy the `values` array so insertions on a cloned scope
      // won't affect the original array.
      newScope._contexts.flags = {
        values: [...this._contexts.flags.values],
      };
    }

    newScope._user = this._user;
    newScope._level = this._level;
    newScope._session = this._session;
    newScope._transactionName = this._transactionName;
    newScope._fingerprint = this._fingerprint;
    newScope._eventProcessors = [...this._eventProcessors];
    newScope._requestSession = this._requestSession;
    newScope._attachments = [...this._attachments];
    newScope._sdkProcessingMetadata = { ...this._sdkProcessingMetadata };
    newScope._propagationContext = { ...this._propagationContext };
    newScope._client = this._client;
    newScope._lastEventId = this._lastEventId;

    (0,_utils_spanOnScope_js__WEBPACK_IMPORTED_MODULE_1__._setSpanForScope)(newScope, (0,_utils_spanOnScope_js__WEBPACK_IMPORTED_MODULE_1__._getSpanForScope)(this));

    return newScope;
  }

  /**
   * @inheritDoc
   */
   setClient(client) {
    this._client = client;
  }

  /**
   * @inheritDoc
   */
   setLastEventId(lastEventId) {
    this._lastEventId = lastEventId;
  }

  /**
   * @inheritDoc
   */
   getClient() {
    return this._client ;
  }

  /**
   * @inheritDoc
   */
   lastEventId() {
    return this._lastEventId;
  }

  /**
   * @inheritDoc
   */
   addScopeListener(callback) {
    this._scopeListeners.push(callback);
  }

  /**
   * @inheritDoc
   */
   addEventProcessor(callback) {
    this._eventProcessors.push(callback);
    return this;
  }

  /**
   * @inheritDoc
   */
   setUser(user) {
    // If null is passed we want to unset everything, but still define keys,
    // so that later down in the pipeline any existing values are cleared.
    this._user = user || {
      email: undefined,
      id: undefined,
      ip_address: undefined,
      username: undefined,
    };

    if (this._session) {
      (0,_session_js__WEBPACK_IMPORTED_MODULE_2__.updateSession)(this._session, { user });
    }

    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   getUser() {
    return this._user;
  }

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line deprecation/deprecation
   getRequestSession() {
    return this._requestSession;
  }

  /**
   * @inheritDoc
   */
  // eslint-disable-next-line deprecation/deprecation
   setRequestSession(requestSession) {
    this._requestSession = requestSession;
    return this;
  }

  /**
   * @inheritDoc
   */
   setTags(tags) {
    this._tags = {
      ...this._tags,
      ...tags,
    };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setTag(key, value) {
    this._tags = { ...this._tags, [key]: value };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setExtras(extras) {
    this._extra = {
      ...this._extra,
      ...extras,
    };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setExtra(key, extra) {
    this._extra = { ...this._extra, [key]: extra };
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setFingerprint(fingerprint) {
    this._fingerprint = fingerprint;
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setLevel(level) {
    this._level = level;
    this._notifyScopeListeners();
    return this;
  }

  /**
   * Sets the transaction name on the scope so that the name of e.g. taken server route or
   * the page location is attached to future events.
   *
   * IMPORTANT: Calling this function does NOT change the name of the currently active
   * root span. If you want to change the name of the active root span, use
   * `Sentry.updateSpanName(rootSpan, 'new name')` instead.
   *
   * By default, the SDK updates the scope's transaction name automatically on sensible
   * occasions, such as a page navigation or when handling a new request on the server.
   */
   setTransactionName(name) {
    this._transactionName = name;
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setContext(key, context) {
    if (context === null) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete this._contexts[key];
    } else {
      this._contexts[key] = context;
    }

    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   setSession(session) {
    if (!session) {
      delete this._session;
    } else {
      this._session = session;
    }
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   getSession() {
    return this._session;
  }

  /**
   * @inheritDoc
   */
   update(captureContext) {
    if (!captureContext) {
      return this;
    }

    const scopeToMerge = typeof captureContext === 'function' ? captureContext(this) : captureContext;

    const [scopeInstance, requestSession] =
      scopeToMerge instanceof Scope
        ? // eslint-disable-next-line deprecation/deprecation
          [scopeToMerge.getScopeData(), scopeToMerge.getRequestSession()]
        : (0,_utils_hoist_is_js__WEBPACK_IMPORTED_MODULE_3__.isPlainObject)(scopeToMerge)
          ? [captureContext , (captureContext ).requestSession]
          : [];

    const { tags, extra, user, contexts, level, fingerprint = [], propagationContext } = scopeInstance || {};

    this._tags = { ...this._tags, ...tags };
    this._extra = { ...this._extra, ...extra };
    this._contexts = { ...this._contexts, ...contexts };

    if (user && Object.keys(user).length) {
      this._user = user;
    }

    if (level) {
      this._level = level;
    }

    if (fingerprint.length) {
      this._fingerprint = fingerprint;
    }

    if (propagationContext) {
      this._propagationContext = propagationContext;
    }

    if (requestSession) {
      this._requestSession = requestSession;
    }

    return this;
  }

  /**
   * @inheritDoc
   */
   clear() {
    // client is not cleared here on purpose!
    this._breadcrumbs = [];
    this._tags = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = undefined;
    this._transactionName = undefined;
    this._fingerprint = undefined;
    this._requestSession = undefined;
    this._session = undefined;
    (0,_utils_spanOnScope_js__WEBPACK_IMPORTED_MODULE_1__._setSpanForScope)(this, undefined);
    this._attachments = [];
    this.setPropagationContext({ traceId: (0,_utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_0__.generateTraceId)() });

    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   addBreadcrumb(breadcrumb, maxBreadcrumbs) {
    const maxCrumbs = typeof maxBreadcrumbs === 'number' ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;

    // No data has been changed, so don't notify scope listeners
    if (maxCrumbs <= 0) {
      return this;
    }

    const mergedBreadcrumb = {
      timestamp: (0,_utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_4__.dateTimestampInSeconds)(),
      ...breadcrumb,
    };

    const breadcrumbs = this._breadcrumbs;
    breadcrumbs.push(mergedBreadcrumb);
    this._breadcrumbs = breadcrumbs.length > maxCrumbs ? breadcrumbs.slice(-maxCrumbs) : breadcrumbs;

    this._notifyScopeListeners();

    return this;
  }

  /**
   * @inheritDoc
   */
   getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }

  /**
   * @inheritDoc
   */
   clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }

  /**
   * @inheritDoc
   */
   addAttachment(attachment) {
    this._attachments.push(attachment);
    return this;
  }

  /**
   * @inheritDoc
   */
   clearAttachments() {
    this._attachments = [];
    return this;
  }

  /** @inheritDoc */
   getScopeData() {
    return {
      breadcrumbs: this._breadcrumbs,
      attachments: this._attachments,
      contexts: this._contexts,
      tags: this._tags,
      extra: this._extra,
      user: this._user,
      level: this._level,
      fingerprint: this._fingerprint || [],
      eventProcessors: this._eventProcessors,
      propagationContext: this._propagationContext,
      sdkProcessingMetadata: this._sdkProcessingMetadata,
      transactionName: this._transactionName,
      span: (0,_utils_spanOnScope_js__WEBPACK_IMPORTED_MODULE_1__._getSpanForScope)(this),
    };
  }

  /**
   * @inheritDoc
   */
   setSDKProcessingMetadata(newData) {
    this._sdkProcessingMetadata = (0,_utils_merge_js__WEBPACK_IMPORTED_MODULE_5__.merge)(this._sdkProcessingMetadata, newData, 2);
    return this;
  }

  /**
   * @inheritDoc
   */
   setPropagationContext(
    context,
  ) {
    this._propagationContext = {
      // eslint-disable-next-line deprecation/deprecation
      spanId: (0,_utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_0__.generateSpanId)(),
      ...context,
    };
    return this;
  }

  /**
   * @inheritDoc
   */
   getPropagationContext() {
    return this._propagationContext;
  }

  /**
   * @inheritDoc
   */
   captureException(exception, hint) {
    const eventId = hint && hint.event_id ? hint.event_id : (0,_utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_6__.uuid4)();

    if (!this._client) {
      _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_7__.logger.warn('No client configured on scope - will not capture exception!');
      return eventId;
    }

    const syntheticException = new Error('Sentry syntheticException');

    this._client.captureException(
      exception,
      {
        originalException: exception,
        syntheticException,
        ...hint,
        event_id: eventId,
      },
      this,
    );

    return eventId;
  }

  /**
   * @inheritDoc
   */
   captureMessage(message, level, hint) {
    const eventId = hint && hint.event_id ? hint.event_id : (0,_utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_6__.uuid4)();

    if (!this._client) {
      _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_7__.logger.warn('No client configured on scope - will not capture message!');
      return eventId;
    }

    const syntheticException = new Error(message);

    this._client.captureMessage(
      message,
      level,
      {
        originalException: message,
        syntheticException,
        ...hint,
        event_id: eventId,
      },
      this,
    );

    return eventId;
  }

  /**
   * @inheritDoc
   */
   captureEvent(event, hint) {
    const eventId = hint && hint.event_id ? hint.event_id : (0,_utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_6__.uuid4)();

    if (!this._client) {
      _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_7__.logger.warn('No client configured on scope - will not capture event!');
      return eventId;
    }

    this._client.captureEvent(event, { ...hint, event_id: eventId }, this);

    return eventId;
  }

  /**
   * This will be called on every set call.
   */
   _notifyScopeListeners() {
    // We need this check for this._notifyingListeners to be able to work on scope during updates
    // If this check is not here we'll produce endless recursion when something is done with the scope
    // during the callback.
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach(callback => {
        callback(this);
      });
      this._notifyingListeners = false;
    }
  }
}

/**
 * Holds additional event information.
 */
const Scope = ScopeClass;

/**
 * Holds additional event information.
 */


//# sourceMappingURL=scope.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/semanticAttributes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/semanticAttributes.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SEMANTIC_ATTRIBUTE_CACHE_HIT: () => (/* binding */ SEMANTIC_ATTRIBUTE_CACHE_HIT),
/* harmony export */   SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE: () => (/* binding */ SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE),
/* harmony export */   SEMANTIC_ATTRIBUTE_CACHE_KEY: () => (/* binding */ SEMANTIC_ATTRIBUTE_CACHE_KEY),
/* harmony export */   SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME: () => (/* binding */ SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME),
/* harmony export */   SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD: () => (/* binding */ SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD),
/* harmony export */   SEMANTIC_ATTRIBUTE_PROFILE_ID: () => (/* binding */ SEMANTIC_ATTRIBUTE_PROFILE_ID),
/* harmony export */   SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME),
/* harmony export */   SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON),
/* harmony export */   SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT),
/* harmony export */   SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE),
/* harmony export */   SEMANTIC_ATTRIBUTE_SENTRY_OP: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_OP),
/* harmony export */   SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN),
/* harmony export */   SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE),
/* harmony export */   SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => (/* binding */ SEMANTIC_ATTRIBUTE_SENTRY_SOURCE),
/* harmony export */   SEMANTIC_ATTRIBUTE_URL_FULL: () => (/* binding */ SEMANTIC_ATTRIBUTE_URL_FULL)
/* harmony export */ });
/**
 * Use this attribute to represent the source of a span.
 * Should be one of: custom, url, route, view, component, task, unknown
 *
 */
const SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = 'sentry.source';

/**
 * Use this attribute to represent the sample rate used for a span.
 */
const SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = 'sentry.sample_rate';

/**
 * Use this attribute to represent the operation of a span.
 */
const SEMANTIC_ATTRIBUTE_SENTRY_OP = 'sentry.op';

/**
 * Use this attribute to represent the origin of a span.
 */
const SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = 'sentry.origin';

/** The reason why an idle span finished. */
const SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON = 'sentry.idle_span_finish_reason';

/** The unit of a measurement, which may be stored as a TimedEvent. */
const SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT = 'sentry.measurement_unit';

/** The value of a measurement, which may be stored as a TimedEvent. */
const SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE = 'sentry.measurement_value';

/**
 * A custom span name set by users guaranteed to be taken over any automatically
 * inferred name. This attribute is removed before the span is sent.
 *
 * @internal only meant for internal SDK usage
 * @hidden
 */
const SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = 'sentry.custom_span_name';

/**
 * The id of the profile that this span occurred in.
 */
const SEMANTIC_ATTRIBUTE_PROFILE_ID = 'sentry.profile_id';

const SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME = 'sentry.exclusive_time';

const SEMANTIC_ATTRIBUTE_CACHE_HIT = 'cache.hit';

const SEMANTIC_ATTRIBUTE_CACHE_KEY = 'cache.key';

const SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE = 'cache.item_size';

/** TODO: Remove these once we update to latest semantic conventions */
const SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD = 'http.request.method';
const SEMANTIC_ATTRIBUTE_URL_FULL = 'url.full';


//# sourceMappingURL=semanticAttributes.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/session.js":
/*!********************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/session.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeSession: () => (/* binding */ closeSession),
/* harmony export */   makeSession: () => (/* binding */ makeSession),
/* harmony export */   updateSession: () => (/* binding */ updateSession)
/* harmony export */ });
/* harmony import */ var _utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils-hoist/object.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/object.js");
/* harmony import */ var _utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils-hoist/time.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/time.js");
/* harmony import */ var _utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-hoist/misc.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/misc.js");







/**
 * Creates a new `Session` object by setting certain default parameters. If optional @param context
 * is passed, the passed properties are applied to the session object.
 *
 * @param context (optional) additional properties to be applied to the returned session object
 *
 * @returns a new `Session` object
 */
function makeSession(context) {
  // Both timestamp and started are in seconds since the UNIX epoch.
  const startingTime = (0,_utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_0__.timestampInSeconds)();

  const session = {
    sid: (0,_utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_1__.uuid4)(),
    init: true,
    timestamp: startingTime,
    started: startingTime,
    duration: 0,
    status: 'ok',
    errors: 0,
    ignoreDuration: false,
    toJSON: () => sessionToJSON(session),
  };

  if (context) {
    updateSession(session, context);
  }

  return session;
}

/**
 * Updates a session object with the properties passed in the context.
 *
 * Note that this function mutates the passed object and returns void.
 * (Had to do this instead of returning a new and updated session because closing and sending a session
 * makes an update to the session after it was passed to the sending logic.
 * @see BaseClient.captureSession )
 *
 * @param session the `Session` to update
 * @param context the `SessionContext` holding the properties that should be updated in @param session
 */
// eslint-disable-next-line complexity
function updateSession(session, context = {}) {
  if (context.user) {
    if (!session.ipAddress && context.user.ip_address) {
      session.ipAddress = context.user.ip_address;
    }

    if (!session.did && !context.did) {
      session.did = context.user.id || context.user.email || context.user.username;
    }
  }

  session.timestamp = context.timestamp || (0,_utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_0__.timestampInSeconds)();

  if (context.abnormal_mechanism) {
    session.abnormal_mechanism = context.abnormal_mechanism;
  }

  if (context.ignoreDuration) {
    session.ignoreDuration = context.ignoreDuration;
  }
  if (context.sid) {
    // Good enough uuid validation. — Kamil
    session.sid = context.sid.length === 32 ? context.sid : (0,_utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_1__.uuid4)();
  }
  if (context.init !== undefined) {
    session.init = context.init;
  }
  if (!session.did && context.did) {
    session.did = `${context.did}`;
  }
  if (typeof context.started === 'number') {
    session.started = context.started;
  }
  if (session.ignoreDuration) {
    session.duration = undefined;
  } else if (typeof context.duration === 'number') {
    session.duration = context.duration;
  } else {
    const duration = session.timestamp - session.started;
    session.duration = duration >= 0 ? duration : 0;
  }
  if (context.release) {
    session.release = context.release;
  }
  if (context.environment) {
    session.environment = context.environment;
  }
  if (!session.ipAddress && context.ipAddress) {
    session.ipAddress = context.ipAddress;
  }
  if (!session.userAgent && context.userAgent) {
    session.userAgent = context.userAgent;
  }
  if (typeof context.errors === 'number') {
    session.errors = context.errors;
  }
  if (context.status) {
    session.status = context.status;
  }
}

/**
 * Closes a session by setting its status and updating the session object with it.
 * Internally calls `updateSession` to update the passed session object.
 *
 * Note that this function mutates the passed session (@see updateSession for explanation).
 *
 * @param session the `Session` object to be closed
 * @param status the `SessionStatus` with which the session was closed. If you don't pass a status,
 *               this function will keep the previously set status, unless it was `'ok'` in which case
 *               it is changed to `'exited'`.
 */
function closeSession(session, status) {
  let context = {};
  if (status) {
    context = { status };
  } else if (session.status === 'ok') {
    context = { status: 'exited' };
  }

  updateSession(session, context);
}

/**
 * Serializes a passed session object to a JSON object with a slightly different structure.
 * This is necessary because the Sentry backend requires a slightly different schema of a session
 * than the one the JS SDKs use internally.
 *
 * @param session the session to be converted
 *
 * @returns a JSON object of the passed session
 */
function sessionToJSON(session) {
  return (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_2__.dropUndefinedKeys)({
    sid: `${session.sid}`,
    init: session.init,
    // Make sure that sec is converted to ms for date constructor
    started: new Date(session.started * 1000).toISOString(),
    timestamp: new Date(session.timestamp * 1000).toISOString(),
    status: session.status,
    errors: session.errors,
    did: typeof session.did === 'number' || typeof session.did === 'string' ? `${session.did}` : undefined,
    duration: session.duration,
    abnormal_mechanism: session.abnormal_mechanism,
    attrs: {
      release: session.release,
      environment: session.environment,
      ip_address: session.ipAddress,
      user_agent: session.userAgent,
    },
  });
}


//# sourceMappingURL=session.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   freezeDscOnSpan: () => (/* binding */ freezeDscOnSpan),
/* harmony export */   getDynamicSamplingContextFromClient: () => (/* binding */ getDynamicSamplingContextFromClient),
/* harmony export */   getDynamicSamplingContextFromScope: () => (/* binding */ getDynamicSamplingContextFromScope),
/* harmony export */   getDynamicSamplingContextFromSpan: () => (/* binding */ getDynamicSamplingContextFromSpan),
/* harmony export */   spanToBaggageHeader: () => (/* binding */ spanToBaggageHeader)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants.js */ "./node_modules/@sentry/core/build/esm/constants.js");
/* harmony import */ var _currentScopes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../currentScopes.js */ "./node_modules/@sentry/core/build/esm/currentScopes.js");
/* harmony import */ var _semanticAttributes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../semanticAttributes.js */ "./node_modules/@sentry/core/build/esm/semanticAttributes.js");
/* harmony import */ var _utils_hoist_baggage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils-hoist/baggage.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/baggage.js");
/* harmony import */ var _utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils-hoist/object.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/object.js");
/* harmony import */ var _utils_hasTracingEnabled_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/hasTracingEnabled.js */ "./node_modules/@sentry/core/build/esm/utils/hasTracingEnabled.js");
/* harmony import */ var _utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/spanUtils.js */ "./node_modules/@sentry/core/build/esm/utils/spanUtils.js");








/**
 * If you change this value, also update the terser plugin config to
 * avoid minification of the object property!
 */
const FROZEN_DSC_FIELD = '_frozenDsc';

/**
 * Freeze the given DSC on the given span.
 */
function freezeDscOnSpan(span, dsc) {
  const spanWithMaybeDsc = span ;
  (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__.addNonEnumerableProperty)(spanWithMaybeDsc, FROZEN_DSC_FIELD, dsc);
}

/**
 * Creates a dynamic sampling context from a client.
 *
 * Dispatches the `createDsc` lifecycle hook as a side effect.
 */
function getDynamicSamplingContextFromClient(trace_id, client) {
  const options = client.getOptions();

  const { publicKey: public_key } = client.getDsn() || {};

  const dsc = (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__.dropUndefinedKeys)({
    environment: options.environment || _constants_js__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ENVIRONMENT,
    release: options.release,
    public_key,
    trace_id,
  }) ;

  client.emit('createDsc', dsc);

  return dsc;
}

/**
 * Get the dynamic sampling context for the currently active scopes.
 */
function getDynamicSamplingContextFromScope(client, scope) {
  const propagationContext = scope.getPropagationContext();
  return propagationContext.dsc || getDynamicSamplingContextFromClient(propagationContext.traceId, client);
}

/**
 * Creates a dynamic sampling context from a span (and client and scope)
 *
 * @param span the span from which a few values like the root span name and sample rate are extracted.
 *
 * @returns a dynamic sampling context
 */
function getDynamicSamplingContextFromSpan(span) {
  const client = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_2__.getClient)();
  if (!client) {
    return {};
  }

  const rootSpan = (0,_utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_3__.getRootSpan)(span);

  // For core implementation, we freeze the DSC onto the span as a non-enumerable property
  const frozenDsc = (rootSpan )[FROZEN_DSC_FIELD];
  if (frozenDsc) {
    return frozenDsc;
  }

  // For OpenTelemetry, we freeze the DSC on the trace state
  const traceState = rootSpan.spanContext().traceState;
  const traceStateDsc = traceState && traceState.get('sentry.dsc');

  // If the span has a DSC, we want it to take precedence
  const dscOnTraceState = traceStateDsc && (0,_utils_hoist_baggage_js__WEBPACK_IMPORTED_MODULE_4__.baggageHeaderToDynamicSamplingContext)(traceStateDsc);

  if (dscOnTraceState) {
    return dscOnTraceState;
  }

  // Else, we generate it from the span
  const dsc = getDynamicSamplingContextFromClient(span.spanContext().traceId, client);
  const jsonSpan = (0,_utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_3__.spanToJSON)(rootSpan);
  const attributes = jsonSpan.data || {};
  const maybeSampleRate = attributes[_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_5__.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];

  if (maybeSampleRate != null) {
    dsc.sample_rate = `${maybeSampleRate}`;
  }

  // We don't want to have a transaction name in the DSC if the source is "url" because URLs might contain PII
  const source = attributes[_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_5__.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];

  // after JSON conversion, txn.name becomes jsonSpan.description
  const name = jsonSpan.description;
  if (source !== 'url' && name) {
    dsc.transaction = name;
  }

  // How can we even land here with hasTracingEnabled() returning false?
  // Otel creates a Non-recording span in Tracing Without Performance mode when handling incoming requests
  // So we end up with an active span that is not sampled (neither positively nor negatively)
  if ((0,_utils_hasTracingEnabled_js__WEBPACK_IMPORTED_MODULE_6__.hasTracingEnabled)()) {
    dsc.sampled = String((0,_utils_spanUtils_js__WEBPACK_IMPORTED_MODULE_3__.spanIsSampled)(rootSpan));
  }

  client.emit('createDsc', dsc, rootSpan);

  return dsc;
}

/**
 * Convert a Span to a baggage header.
 */
function spanToBaggageHeader(span) {
  const dsc = getDynamicSamplingContextFromSpan(span);
  return (0,_utils_hoist_baggage_js__WEBPACK_IMPORTED_MODULE_4__.dynamicSamplingContextToSentryBaggageHeader)(dsc);
}


//# sourceMappingURL=dynamicSamplingContext.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/tracing/spanstatus.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/tracing/spanstatus.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SPAN_STATUS_ERROR: () => (/* binding */ SPAN_STATUS_ERROR),
/* harmony export */   SPAN_STATUS_OK: () => (/* binding */ SPAN_STATUS_OK),
/* harmony export */   SPAN_STATUS_UNSET: () => (/* binding */ SPAN_STATUS_UNSET),
/* harmony export */   getSpanStatusFromHttpCode: () => (/* binding */ getSpanStatusFromHttpCode),
/* harmony export */   setHttpStatus: () => (/* binding */ setHttpStatus)
/* harmony export */ });
const SPAN_STATUS_UNSET = 0;
const SPAN_STATUS_OK = 1;
const SPAN_STATUS_ERROR = 2;

/**
 * Converts a HTTP status code into a sentry status with a message.
 *
 * @param httpStatus The HTTP response status code.
 * @returns The span status or unknown_error.
 */
// https://develop.sentry.dev/sdk/event-payloads/span/
function getSpanStatusFromHttpCode(httpStatus) {
  if (httpStatus < 400 && httpStatus >= 100) {
    return { code: SPAN_STATUS_OK };
  }

  if (httpStatus >= 400 && httpStatus < 500) {
    switch (httpStatus) {
      case 401:
        return { code: SPAN_STATUS_ERROR, message: 'unauthenticated' };
      case 403:
        return { code: SPAN_STATUS_ERROR, message: 'permission_denied' };
      case 404:
        return { code: SPAN_STATUS_ERROR, message: 'not_found' };
      case 409:
        return { code: SPAN_STATUS_ERROR, message: 'already_exists' };
      case 413:
        return { code: SPAN_STATUS_ERROR, message: 'failed_precondition' };
      case 429:
        return { code: SPAN_STATUS_ERROR, message: 'resource_exhausted' };
      case 499:
        return { code: SPAN_STATUS_ERROR, message: 'cancelled' };
      default:
        return { code: SPAN_STATUS_ERROR, message: 'invalid_argument' };
    }
  }

  if (httpStatus >= 500 && httpStatus < 600) {
    switch (httpStatus) {
      case 501:
        return { code: SPAN_STATUS_ERROR, message: 'unimplemented' };
      case 503:
        return { code: SPAN_STATUS_ERROR, message: 'unavailable' };
      case 504:
        return { code: SPAN_STATUS_ERROR, message: 'deadline_exceeded' };
      default:
        return { code: SPAN_STATUS_ERROR, message: 'internal_error' };
    }
  }

  return { code: SPAN_STATUS_ERROR, message: 'unknown_error' };
}

/**
 * Sets the Http status attributes on the current span based on the http code.
 * Additionally, the span's status is updated, depending on the http code.
 */
function setHttpStatus(span, httpStatus) {
  span.setAttribute('http.response.status_code', httpStatus);

  const spanStatus = getSpanStatusFromHttpCode(httpStatus);
  if (spanStatus.message !== 'unknown_error') {
    span.setStatus(spanStatus);
  }
}


//# sourceMappingURL=spanstatus.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/baggage.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/baggage.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BAGGAGE_HEADER_NAME: () => (/* binding */ BAGGAGE_HEADER_NAME),
/* harmony export */   MAX_BAGGAGE_STRING_LENGTH: () => (/* binding */ MAX_BAGGAGE_STRING_LENGTH),
/* harmony export */   SENTRY_BAGGAGE_KEY_PREFIX: () => (/* binding */ SENTRY_BAGGAGE_KEY_PREFIX),
/* harmony export */   SENTRY_BAGGAGE_KEY_PREFIX_REGEX: () => (/* binding */ SENTRY_BAGGAGE_KEY_PREFIX_REGEX),
/* harmony export */   baggageHeaderToDynamicSamplingContext: () => (/* binding */ baggageHeaderToDynamicSamplingContext),
/* harmony export */   dynamicSamplingContextToSentryBaggageHeader: () => (/* binding */ dynamicSamplingContextToSentryBaggageHeader),
/* harmony export */   parseBaggageHeader: () => (/* binding */ parseBaggageHeader)
/* harmony export */ });
/* harmony import */ var _debug_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug-build.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/debug-build.js");
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/is.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/logger.js");




/**
 * @deprecated Use a `"baggage"` string directly
 */
const BAGGAGE_HEADER_NAME = 'baggage';

const SENTRY_BAGGAGE_KEY_PREFIX = 'sentry-';

const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;

/**
 * Max length of a serialized baggage string
 *
 * https://www.w3.org/TR/baggage/#limits
 */
const MAX_BAGGAGE_STRING_LENGTH = 8192;

/**
 * Takes a baggage header and turns it into Dynamic Sampling Context, by extracting all the "sentry-" prefixed values
 * from it.
 *
 * @param baggageHeader A very bread definition of a baggage header as it might appear in various frameworks.
 * @returns The Dynamic Sampling Context that was found on `baggageHeader`, if there was any, `undefined` otherwise.
 */
function baggageHeaderToDynamicSamplingContext(
  // Very liberal definition of what any incoming header might look like
  baggageHeader,
) {
  const baggageObject = parseBaggageHeader(baggageHeader);

  if (!baggageObject) {
    return undefined;
  }

  // Read all "sentry-" prefixed values out of the baggage object and put it onto a dynamic sampling context object.
  const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
    if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
      const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
      acc[nonPrefixedKey] = value;
    }
    return acc;
  }, {});

  // Only return a dynamic sampling context object if there are keys in it.
  // A keyless object means there were no sentry values on the header, which means that there is no DSC.
  if (Object.keys(dynamicSamplingContext).length > 0) {
    return dynamicSamplingContext ;
  } else {
    return undefined;
  }
}

/**
 * Turns a Dynamic Sampling Object into a baggage header by prefixing all the keys on the object with "sentry-".
 *
 * @param dynamicSamplingContext The Dynamic Sampling Context to turn into a header. For convenience and compatibility
 * with the `getDynamicSamplingContext` method on the Transaction class ,this argument can also be `undefined`. If it is
 * `undefined` the function will return `undefined`.
 * @returns a baggage header, created from `dynamicSamplingContext`, or `undefined` either if `dynamicSamplingContext`
 * was `undefined`, or if `dynamicSamplingContext` didn't contain any values.
 */
function dynamicSamplingContextToSentryBaggageHeader(
  // this also takes undefined for convenience and bundle size in other places
  dynamicSamplingContext,
) {
  if (!dynamicSamplingContext) {
    return undefined;
  }

  // Prefix all DSC keys with "sentry-" and put them into a new object
  const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce(
    (acc, [dscKey, dscValue]) => {
      if (dscValue) {
        acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
      }
      return acc;
    },
    {},
  );

  return objectToBaggageHeader(sentryPrefixedDSC);
}

/**
 * Take a baggage header and parse it into an object.
 */
function parseBaggageHeader(
  baggageHeader,
) {
  if (!baggageHeader || (!(0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isString)(baggageHeader) && !Array.isArray(baggageHeader))) {
    return undefined;
  }

  if (Array.isArray(baggageHeader)) {
    // Combine all baggage headers into one object containing the baggage values so we can later read the Sentry-DSC-values from it
    return baggageHeader.reduce((acc, curr) => {
      const currBaggageObject = baggageHeaderToObject(curr);
      Object.entries(currBaggageObject).forEach(([key, value]) => {
        acc[key] = value;
      });
      return acc;
    }, {});
  }

  return baggageHeaderToObject(baggageHeader);
}

/**
 * Will parse a baggage header, which is a simple key-value map, into a flat object.
 *
 * @param baggageHeader The baggage header to parse.
 * @returns a flat object containing all the key-value pairs from `baggageHeader`.
 */
function baggageHeaderToObject(baggageHeader) {
  return baggageHeader
    .split(',')
    .map(baggageEntry => baggageEntry.split('=').map(keyOrValue => decodeURIComponent(keyOrValue.trim())))
    .reduce((acc, [key, value]) => {
      if (key && value) {
        acc[key] = value;
      }
      return acc;
    }, {});
}

/**
 * Turns a flat object (key-value pairs) into a baggage header, which is also just key-value pairs.
 *
 * @param object The object to turn into a baggage header.
 * @returns a baggage header string, or `undefined` if the object didn't have any values, since an empty baggage header
 * is not spec compliant.
 */
function objectToBaggageHeader(object) {
  if (Object.keys(object).length === 0) {
    // An empty baggage header is not spec compliant: We return undefined.
    return undefined;
  }

  return Object.entries(object).reduce((baggageHeader, [objectKey, objectValue], currentIndex) => {
    const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
    const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
    if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
      _debug_build_js__WEBPACK_IMPORTED_MODULE_1__.DEBUG_BUILD &&
        _logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(
          `Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`,
        );
      return baggageHeader;
    } else {
      return newBaggageHeader;
    }
  }, '');
}


//# sourceMappingURL=baggage.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/browser.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComponentName: () => (/* binding */ getComponentName),
/* harmony export */   getDomElement: () => (/* binding */ getDomElement),
/* harmony export */   getLocationHref: () => (/* binding */ getLocationHref),
/* harmony export */   htmlTreeAsString: () => (/* binding */ htmlTreeAsString)
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/is.js");
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js");



const WINDOW = _worldwide_js__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_OBJ ;

const DEFAULT_MAX_STRING_LENGTH = 80;

/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(
  elem,
  options = {},
) {
  if (!elem) {
    return '<unknown>';
  }

  // try/catch both:
  // - accessing event.target (see getsentry/raven-js#838, #768)
  // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
  // - can throw an exception in some circumstances.
  try {
    let currentElem = elem ;
    const MAX_TRAVERSE_HEIGHT = 5;
    const out = [];
    let height = 0;
    let len = 0;
    const separator = ' > ';
    const sepLength = separator.length;
    let nextStr;
    const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
    const maxStringLength = (!Array.isArray(options) && options.maxStringLength) || DEFAULT_MAX_STRING_LENGTH;

    while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
      nextStr = _htmlElementAsString(currentElem, keyAttrs);
      // bail out if
      // - nextStr is the 'html' element
      // - the length of the string that would be created exceeds maxStringLength
      //   (ignore this limit if we are on the first iteration)
      if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength)) {
        break;
      }

      out.push(nextStr);

      len += nextStr.length;
      currentElem = currentElem.parentNode;
    }

    return out.reverse().join(separator);
  } catch (_oO) {
    return '<unknown>';
  }
}

/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function _htmlElementAsString(el, keyAttrs) {
  const elem = el

;

  const out = [];

  if (!elem || !elem.tagName) {
    return '';
  }

  // @ts-expect-error WINDOW has HTMLElement
  if (WINDOW.HTMLElement) {
    // If using the component name annotation plugin, this value may be available on the DOM node
    if (elem instanceof HTMLElement && elem.dataset) {
      if (elem.dataset['sentryComponent']) {
        return elem.dataset['sentryComponent'];
      }
      if (elem.dataset['sentryElement']) {
        return elem.dataset['sentryElement'];
      }
    }
  }

  out.push(elem.tagName.toLowerCase());

  // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
  const keyAttrPairs =
    keyAttrs && keyAttrs.length
      ? keyAttrs.filter(keyAttr => elem.getAttribute(keyAttr)).map(keyAttr => [keyAttr, elem.getAttribute(keyAttr)])
      : null;

  if (keyAttrPairs && keyAttrPairs.length) {
    keyAttrPairs.forEach(keyAttrPair => {
      out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
    });
  } else {
    if (elem.id) {
      out.push(`#${elem.id}`);
    }

    const className = elem.className;
    if (className && (0,_is_js__WEBPACK_IMPORTED_MODULE_1__.isString)(className)) {
      const classes = className.split(/\s+/);
      for (const c of classes) {
        out.push(`.${c}`);
      }
    }
  }
  const allowedAttrs = ['aria-label', 'type', 'name', 'title', 'alt'];
  for (const k of allowedAttrs) {
    const attr = elem.getAttribute(k);
    if (attr) {
      out.push(`[${k}="${attr}"]`);
    }
  }

  return out.join('');
}

/**
 * A safe form of location.href
 */
function getLocationHref() {
  try {
    return WINDOW.document.location.href;
  } catch (oO) {
    return '';
  }
}

/**
 * Gets a DOM element by using document.querySelector.
 *
 * This wrapper will first check for the existence of the function before
 * actually calling it so that we don't have to take care of this check,
 * every time we want to access the DOM.
 *
 * Reason: DOM/querySelector is not available in all environments.
 *
 * We have to cast to any because utils can be consumed by a variety of environments,
 * and we don't want to break TS users. If you know what element will be selected by
 * `document.querySelector`, specify it as part of the generic call. For example,
 * `const element = getDomElement<Element>('selector');`
 *
 * @param selector the selector string passed on to document.querySelector
 *
 * @deprecated This method is deprecated and will be removed in the next major version.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDomElement(selector) {
  if (WINDOW.document && WINDOW.document.querySelector) {
    return WINDOW.document.querySelector(selector) ;
  }
  return null;
}

/**
 * Given a DOM element, traverses up the tree until it finds the first ancestor node
 * that has the `data-sentry-component` or `data-sentry-element` attribute with `data-sentry-component` taking
 * precedence. This attribute is added at build-time by projects that have the component name annotation plugin installed.
 *
 * @returns a string representation of the component for the provided DOM element, or `null` if not found
 */
function getComponentName(elem) {
  // @ts-expect-error WINDOW has HTMLElement
  if (!WINDOW.HTMLElement) {
    return null;
  }

  let currentElem = elem ;
  const MAX_TRAVERSE_HEIGHT = 5;
  for (let i = 0; i < MAX_TRAVERSE_HEIGHT; i++) {
    if (!currentElem) {
      return null;
    }

    if (currentElem instanceof HTMLElement) {
      if (currentElem.dataset['sentryComponent']) {
        return currentElem.dataset['sentryComponent'];
      }
      if (currentElem.dataset['sentryElement']) {
        return currentElem.dataset['sentryElement'];
      }
    }

    currentElem = currentElem.parentNode;
  }

  return null;
}


//# sourceMappingURL=browser.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/debug-build.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/debug-build.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEBUG_BUILD: () => (/* binding */ DEBUG_BUILD)
/* harmony export */ });
/**
 * This serves as a build time flag that will be true by default, but false in non-debug builds or if users replace `__SENTRY_DEBUG__` in their generated code.
 *
 * ATTENTION: This constant must never cross package boundaries (i.e. be exported) to guarantee that it can be used for tree shaking.
 */
const DEBUG_BUILD = (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__);


//# sourceMappingURL=debug-build.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/debug-ids.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/debug-ids.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDebugImagesForResources: () => (/* binding */ getDebugImagesForResources),
/* harmony export */   getFilenameToDebugIdMap: () => (/* binding */ getFilenameToDebugIdMap)
/* harmony export */ });
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js");


let parsedStackResults;
let lastKeysCount;
let cachedFilenameDebugIds;

/**
 * Returns a map of filenames to debug identifiers.
 */
function getFilenameToDebugIdMap(stackParser) {
  const debugIdMap = _worldwide_js__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_OBJ._sentryDebugIds;
  if (!debugIdMap) {
    return {};
  }

  const debugIdKeys = Object.keys(debugIdMap);

  // If the count of registered globals hasn't changed since the last call, we
  // can just return the cached result.
  if (cachedFilenameDebugIds && debugIdKeys.length === lastKeysCount) {
    return cachedFilenameDebugIds;
  }

  lastKeysCount = debugIdKeys.length;

  // Build a map of filename -> debug_id.
  cachedFilenameDebugIds = debugIdKeys.reduce((acc, stackKey) => {
    if (!parsedStackResults) {
      parsedStackResults = {};
    }

    const result = parsedStackResults[stackKey];

    if (result) {
      acc[result[0]] = result[1];
    } else {
      const parsedStack = stackParser(stackKey);

      for (let i = parsedStack.length - 1; i >= 0; i--) {
        const stackFrame = parsedStack[i];
        const filename = stackFrame && stackFrame.filename;
        const debugId = debugIdMap[stackKey];

        if (filename && debugId) {
          acc[filename] = debugId;
          parsedStackResults[stackKey] = [filename, debugId];
          break;
        }
      }
    }

    return acc;
  }, {});

  return cachedFilenameDebugIds;
}

/**
 * Returns a list of debug images for the given resources.
 */
function getDebugImagesForResources(
  stackParser,
  resource_paths,
) {
  const filenameDebugIdMap = getFilenameToDebugIdMap(stackParser);

  if (!filenameDebugIdMap) {
    return [];
  }

  const images = [];
  for (const path of resource_paths) {
    if (path && filenameDebugIdMap[path]) {
      images.push({
        type: 'sourcemap',
        code_file: path,
        debug_id: filenameDebugIdMap[path] ,
      });
    }
  }

  return images;
}


//# sourceMappingURL=debug-ids.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/is.js":
/*!***************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/is.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDOMError: () => (/* binding */ isDOMError),
/* harmony export */   isDOMException: () => (/* binding */ isDOMException),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isError: () => (/* binding */ isError),
/* harmony export */   isErrorEvent: () => (/* binding */ isErrorEvent),
/* harmony export */   isEvent: () => (/* binding */ isEvent),
/* harmony export */   isInstanceOf: () => (/* binding */ isInstanceOf),
/* harmony export */   isParameterizedString: () => (/* binding */ isParameterizedString),
/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),
/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive),
/* harmony export */   isRegExp: () => (/* binding */ isRegExp),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isSyntheticEvent: () => (/* binding */ isSyntheticEvent),
/* harmony export */   isThenable: () => (/* binding */ isThenable),
/* harmony export */   isVueViewModel: () => (/* binding */ isVueViewModel)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/unbound-method
const objectToString = Object.prototype.toString;

/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
  switch (objectToString.call(wat)) {
    case '[object Error]':
    case '[object Exception]':
    case '[object DOMException]':
    case '[object WebAssembly.Exception]':
      return true;
    default:
      return isInstanceOf(wat, Error);
  }
}
/**
 * Checks whether given value is an instance of the given built-in class.
 *
 * @param wat The value to be checked
 * @param className
 * @returns A boolean representing the result.
 */
function isBuiltin(wat, className) {
  return objectToString.call(wat) === `[object ${className}]`;
}

/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
  return isBuiltin(wat, 'ErrorEvent');
}

/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
  return isBuiltin(wat, 'DOMError');
}

/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
  return isBuiltin(wat, 'DOMException');
}

/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
  return isBuiltin(wat, 'String');
}

/**
 * Checks whether given string is parameterized
 * {@link isParameterizedString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isParameterizedString(wat) {
  return (
    typeof wat === 'object' &&
    wat !== null &&
    '__sentry_template_string__' in wat &&
    '__sentry_template_values__' in wat
  );
}

/**
 * Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
  return wat === null || isParameterizedString(wat) || (typeof wat !== 'object' && typeof wat !== 'function');
}

/**
 * Checks whether given value's type is an object literal, or a class instance.
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
  return isBuiltin(wat, 'Object');
}

/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isEvent(wat) {
  return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
}

/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isElement(wat) {
  return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
}

/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
  return isBuiltin(wat, 'RegExp');
}

/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return Boolean(wat && wat.then && typeof wat.then === 'function');
}

/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
  return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}

/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */
function isInstanceOf(wat, base) {
  try {
    return wat instanceof base;
  } catch (_e) {
    return false;
  }
}

/**
 * Checks whether given value's type is a Vue ViewModel.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isVueViewModel(wat) {
  // Not using Object.prototype.toString because in Vue 3 it would read the instance's Symbol(Symbol.toStringTag) property.
  return !!(typeof wat === 'object' && wat !== null && ((wat ).__isVue || (wat )._isVue));
}


//# sourceMappingURL=is.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/logger.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/logger.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONSOLE_LEVELS: () => (/* binding */ CONSOLE_LEVELS),
/* harmony export */   consoleSandbox: () => (/* binding */ consoleSandbox),
/* harmony export */   logger: () => (/* binding */ logger),
/* harmony export */   originalConsoleMethods: () => (/* binding */ originalConsoleMethods)
/* harmony export */ });
/* harmony import */ var _debug_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debug-build.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/debug-build.js");
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js");



/** Prefix for logging strings */
const PREFIX = 'Sentry Logger ';

const CONSOLE_LEVELS = [
  'debug',
  'info',
  'warn',
  'error',
  'log',
  'assert',
  'trace',
] ;

/** This may be mutated by the console instrumentation. */
const originalConsoleMethods

 = {};

/** JSDoc */

/**
 * Temporarily disable sentry console instrumentations.
 *
 * @param callback The function to run against the original `console` messages
 * @returns The results of the callback
 */
function consoleSandbox(callback) {
  if (!("console" in _worldwide_js__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_OBJ)) {
    return callback();
  }

  const console = _worldwide_js__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_OBJ.console ;
  const wrappedFuncs = {};

  const wrappedLevels = Object.keys(originalConsoleMethods) ;

  // Restore all wrapped console methods
  wrappedLevels.forEach(level => {
    const originalConsoleMethod = originalConsoleMethods[level] ;
    wrappedFuncs[level] = console[level] ;
    console[level] = originalConsoleMethod;
  });

  try {
    return callback();
  } finally {
    // Revert restoration to wrapped state
    wrappedLevels.forEach(level => {
      console[level] = wrappedFuncs[level] ;
    });
  }
}

function makeLogger() {
  let enabled = false;
  const logger = {
    enable: () => {
      enabled = true;
    },
    disable: () => {
      enabled = false;
    },
    isEnabled: () => enabled,
  };

  if (_debug_build_js__WEBPACK_IMPORTED_MODULE_1__.DEBUG_BUILD) {
    CONSOLE_LEVELS.forEach(name => {
      logger[name] = (...args) => {
        if (enabled) {
          consoleSandbox(() => {
            _worldwide_js__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_OBJ.console[name](`${PREFIX}[${name}]:`, ...args);
          });
        }
      };
    });
  } else {
    CONSOLE_LEVELS.forEach(name => {
      logger[name] = () => undefined;
    });
  }

  return logger ;
}

/**
 * This is a logger singleton which either logs things or no-ops if logging is not enabled.
 * The logger is a singleton on the carrier, to ensure that a consistent logger is used throughout the SDK.
 */
const logger = (0,_worldwide_js__WEBPACK_IMPORTED_MODULE_0__.getGlobalSingleton)('logger', makeLogger);


//# sourceMappingURL=logger.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/memo.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/memo.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memoBuilder: () => (/* binding */ memoBuilder)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Helper to decycle json objects
 *
 * @deprecated This function is deprecated and will be removed in the next major version.
 */
// TODO(v9): Move this function into normalize() directly
function memoBuilder() {
  const hasWeakSet = typeof WeakSet === 'function';
  const inner = hasWeakSet ? new WeakSet() : [];
  function memoize(obj) {
    if (hasWeakSet) {
      if (inner.has(obj)) {
        return true;
      }
      inner.add(obj);
      return false;
    }
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < inner.length; i++) {
      const value = inner[i];
      if (value === obj) {
        return true;
      }
    }
    inner.push(obj);
    return false;
  }

  function unmemoize(obj) {
    if (hasWeakSet) {
      inner.delete(obj);
    } else {
      for (let i = 0; i < inner.length; i++) {
        if (inner[i] === obj) {
          inner.splice(i, 1);
          break;
        }
      }
    }
  }
  return [memoize, unmemoize];
}


//# sourceMappingURL=memo.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/misc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/misc.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addContextToFrame: () => (/* binding */ addContextToFrame),
/* harmony export */   addExceptionMechanism: () => (/* binding */ addExceptionMechanism),
/* harmony export */   addExceptionTypeValue: () => (/* binding */ addExceptionTypeValue),
/* harmony export */   arrayify: () => (/* binding */ arrayify),
/* harmony export */   checkOrSetAlreadyCaught: () => (/* binding */ checkOrSetAlreadyCaught),
/* harmony export */   getEventDescription: () => (/* binding */ getEventDescription),
/* harmony export */   parseSemver: () => (/* binding */ parseSemver),
/* harmony export */   uuid4: () => (/* binding */ uuid4)
/* harmony export */ });
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/object.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/string.js");
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js");




/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
  const gbl = _worldwide_js__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_OBJ ;
  const crypto = gbl.crypto || gbl.msCrypto;

  let getRandomByte = () => Math.random() * 16;
  try {
    if (crypto && crypto.randomUUID) {
      return crypto.randomUUID().replace(/-/g, '');
    }
    if (crypto && crypto.getRandomValues) {
      getRandomByte = () => {
        // crypto.getRandomValues might return undefined instead of the typed array
        // in old Chromium versions (e.g. 23.0.1235.0 (151422))
        // However, `typedArray` is still filled in-place.
        // @see https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues#typedarray
        const typedArray = new Uint8Array(1);
        crypto.getRandomValues(typedArray);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return typedArray[0];
      };
    }
  } catch (_) {
    // some runtimes can crash invoking crypto
    // https://github.com/getsentry/sentry-javascript/issues/8935
  }

  // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
  // Concatenating the following numbers as strings results in '10000000100040008000100000000000'
  return (([1e7] ) + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, c =>
    // eslint-disable-next-line no-bitwise
    ((c ) ^ ((getRandomByte() & 15) >> ((c ) / 4))).toString(16),
  );
}

function getFirstException(event) {
  return event.exception && event.exception.values ? event.exception.values[0] : undefined;
}

/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
  const { message, event_id: eventId } = event;
  if (message) {
    return message;
  }

  const firstException = getFirstException(event);
  if (firstException) {
    if (firstException.type && firstException.value) {
      return `${firstException.type}: ${firstException.value}`;
    }
    return firstException.type || firstException.value || eventId || '<unknown>';
  }
  return eventId || '<unknown>';
}

/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */
function addExceptionTypeValue(event, value, type) {
  const exception = (event.exception = event.exception || {});
  const values = (exception.values = exception.values || []);
  const firstException = (values[0] = values[0] || {});
  if (!firstException.value) {
    firstException.value = value || '';
  }
  if (!firstException.type) {
    firstException.type = type || 'Error';
  }
}

/**
 * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
 *
 * @param event The event to modify.
 * @param newMechanism Mechanism data to add to the event.
 * @hidden
 */
function addExceptionMechanism(event, newMechanism) {
  const firstException = getFirstException(event);
  if (!firstException) {
    return;
  }

  const defaultMechanism = { type: 'generic', handled: true };
  const currentMechanism = firstException.mechanism;
  firstException.mechanism = { ...defaultMechanism, ...currentMechanism, ...newMechanism };

  if (newMechanism && 'data' in newMechanism) {
    const mergedData = { ...(currentMechanism && currentMechanism.data), ...newMechanism.data };
    firstException.mechanism.data = mergedData;
  }
}

// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
const SEMVER_REGEXP =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

/**
 * Represents Semantic Versioning object
 */

function _parseInt(input) {
  return parseInt(input || '', 10);
}

/**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */
function parseSemver(input) {
  const match = input.match(SEMVER_REGEXP) || [];
  const major = _parseInt(match[1]);
  const minor = _parseInt(match[2]);
  const patch = _parseInt(match[3]);
  return {
    buildmetadata: match[5],
    major: isNaN(major) ? undefined : major,
    minor: isNaN(minor) ? undefined : minor,
    patch: isNaN(patch) ? undefined : patch,
    prerelease: match[4],
  };
}

/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */
function addContextToFrame(lines, frame, linesOfContext = 5) {
  // When there is no line number in the frame, attaching context is nonsensical and will even break grouping
  if (frame.lineno === undefined) {
    return;
  }

  const maxLines = lines.length;
  const sourceLine = Math.max(Math.min(maxLines - 1, frame.lineno - 1), 0);

  frame.pre_context = lines
    .slice(Math.max(0, sourceLine - linesOfContext), sourceLine)
    .map((line) => (0,_string_js__WEBPACK_IMPORTED_MODULE_1__.snipLine)(line, 0));

  // We guard here to ensure this is not larger than the existing number of lines
  const lineIndex = Math.min(maxLines - 1, sourceLine);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  frame.context_line = (0,_string_js__WEBPACK_IMPORTED_MODULE_1__.snipLine)(lines[lineIndex], frame.colno || 0);

  frame.post_context = lines
    .slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext)
    .map((line) => (0,_string_js__WEBPACK_IMPORTED_MODULE_1__.snipLine)(line, 0));
}

/**
 * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
 * in question), and marks it captured if not.
 *
 * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
 * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
 * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
 * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
 * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
 * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
 * see it.
 *
 * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
 * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
 * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
 * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
 * must be done before the exception captured.
 *
 * @param A thrown exception to check or flag as having been seen
 * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
 */
function checkOrSetAlreadyCaught(exception) {
  if (isAlreadyCaptured(exception)) {
    return true;
  }

  try {
    // set it this way rather than by assignment so that it's not ennumerable and therefore isn't recorded by the
    // `ExtraErrorData` integration
    (0,_object_js__WEBPACK_IMPORTED_MODULE_2__.addNonEnumerableProperty)(exception , '__sentry_captured__', true);
  } catch (err) {
    // `exception` is a primitive, so we can't mark it seen
  }

  return false;
}

function isAlreadyCaptured(exception) {
  try {
    return (exception ).__sentry_captured__;
  } catch (e) {} // eslint-disable-line no-empty
}

/**
 * Checks whether the given input is already an array, and if it isn't, wraps it in one.
 *
 * @param maybeArray Input to turn into an array, if necessary
 * @returns The input, if already an array, or an array with the input as the only element, if not
 *
 * @deprecated This function has been deprecated and will not be replaced.
 */
function arrayify(maybeArray) {
  return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
}


//# sourceMappingURL=misc.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/normalize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/normalize.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   normalizeToSize: () => (/* binding */ normalizeToSize),
/* harmony export */   normalizeUrlToBase: () => (/* binding */ normalizeUrlToBase)
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/is.js");
/* harmony import */ var _memo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memo.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/memo.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/object.js");
/* harmony import */ var _stacktrace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stacktrace.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js");





/**
 * Recursively normalizes the given object.
 *
 * - Creates a copy to prevent original input mutation
 * - Skips non-enumerable properties
 * - When stringifying, calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
 * - Translates known global objects/classes to a string representations
 * - Takes care of `Error` object serialization
 * - Optionally limits depth of final output
 * - Optionally limits number of properties/elements included in any single object/array
 *
 * @param input The object to be normalized.
 * @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
 * @param maxProperties The max number of elements or properties to be included in any single array or
 * object in the normalized output.
 * @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalize(input, depth = 100, maxProperties = +Infinity) {
  try {
    // since we're at the outermost level, we don't provide a key
    return visit('', input, depth, maxProperties);
  } catch (err) {
    return { ERROR: `**non-serializable** (${err})` };
  }
}

/** JSDoc */
function normalizeToSize(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object,
  // Default Node.js REPL depth
  depth = 3,
  // 100kB, as 200kB is max payload size, so half sounds reasonable
  maxSize = 100 * 1024,
) {
  const normalized = normalize(object, depth);

  if (jsonSize(normalized) > maxSize) {
    return normalizeToSize(object, depth - 1, maxSize);
  }

  return normalized ;
}

/**
 * Visits a node to perform normalization on it
 *
 * @param key The key corresponding to the given node
 * @param value The node to be visited
 * @param depth Optional number indicating the maximum recursion depth
 * @param maxProperties Optional maximum number of properties/elements included in any single object/array
 * @param memo Optional Memo class handling decycling
 */
function visit(
  key,
  value,
  depth = +Infinity,
  maxProperties = +Infinity,
  // eslint-disable-next-line deprecation/deprecation
  memo = (0,_memo_js__WEBPACK_IMPORTED_MODULE_0__.memoBuilder)(),
) {
  const [memoize, unmemoize] = memo;

  // Get the simple cases out of the way first
  if (
    value == null || // this matches null and undefined -> eqeq not eqeqeq
    ['boolean', 'string'].includes(typeof value) ||
    (typeof value === 'number' && Number.isFinite(value))
  ) {
    return value ;
  }

  const stringified = stringifyValue(key, value);

  // Anything we could potentially dig into more (objects or arrays) will have come back as `"[object XXXX]"`.
  // Everything else will have already been serialized, so if we don't see that pattern, we're done.
  if (!stringified.startsWith('[object ')) {
    return stringified;
  }

  // From here on, we can assert that `value` is either an object or an array.

  // Do not normalize objects that we know have already been normalized. As a general rule, the
  // "__sentry_skip_normalization__" property should only be used sparingly and only should only be set on objects that
  // have already been normalized.
  if ((value )['__sentry_skip_normalization__']) {
    return value ;
  }

  // We can set `__sentry_override_normalization_depth__` on an object to ensure that from there
  // We keep a certain amount of depth.
  // This should be used sparingly, e.g. we use it for the redux integration to ensure we get a certain amount of state.
  const remainingDepth =
    typeof (value )['__sentry_override_normalization_depth__'] === 'number'
      ? ((value )['__sentry_override_normalization_depth__'] )
      : depth;

  // We're also done if we've reached the max depth
  if (remainingDepth === 0) {
    // At this point we know `serialized` is a string of the form `"[object XXXX]"`. Clean it up so it's just `"[XXXX]"`.
    return stringified.replace('object ', '');
  }

  // If we've already visited this branch, bail out, as it's circular reference. If not, note that we're seeing it now.
  if (memoize(value)) {
    return '[Circular ~]';
  }

  // If the value has a `toJSON` method, we call it to extract more information
  const valueWithToJSON = value ;
  if (valueWithToJSON && typeof valueWithToJSON.toJSON === 'function') {
    try {
      const jsonValue = valueWithToJSON.toJSON();
      // We need to normalize the return value of `.toJSON()` in case it has circular references
      return visit('', jsonValue, remainingDepth - 1, maxProperties, memo);
    } catch (err) {
      // pass (The built-in `toJSON` failed, but we can still try to do it ourselves)
    }
  }

  // At this point we know we either have an object or an array, we haven't seen it before, and we're going to recurse
  // because we haven't yet reached the max depth. Create an accumulator to hold the results of visiting each
  // property/entry, and keep track of the number of items we add to it.
  const normalized = (Array.isArray(value) ? [] : {}) ;
  let numAdded = 0;

  // Before we begin, convert`Error` and`Event` instances into plain objects, since some of each of their relevant
  // properties are non-enumerable and otherwise would get missed.
  const visitable = (0,_object_js__WEBPACK_IMPORTED_MODULE_1__.convertToPlainObject)(value );

  for (const visitKey in visitable) {
    // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
    if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
      continue;
    }

    if (numAdded >= maxProperties) {
      normalized[visitKey] = '[MaxProperties ~]';
      break;
    }

    // Recursively visit all the child nodes
    const visitValue = visitable[visitKey];
    normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);

    numAdded++;
  }

  // Once we've visited all the branches, remove the parent from memo storage
  unmemoize(value);

  // Return accumulated values
  return normalized;
}

/* eslint-disable complexity */
/**
 * Stringify the given value. Handles various known special values and types.
 *
 * Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
 * the number 1231 into "[Object Number]", nor on `null`, as it will throw.
 *
 * @param value The value to stringify
 * @returns A stringified representation of the given value
 */
function stringifyValue(
  key,
  // this type is a tiny bit of a cheat, since this function does handle NaN (which is technically a number), but for
  // our internal use, it'll do
  value,
) {
  try {
    if (key === 'domain' && value && typeof value === 'object' && (value )._events) {
      return '[Domain]';
    }

    if (key === 'domainEmitter') {
      return '[DomainEmitter]';
    }

    // It's safe to use `global`, `window`, and `document` here in this manner, as we are asserting using `typeof` first
    // which won't throw if they are not present.

    if (typeof global !== 'undefined' && value === global) {
      return '[Global]';
    }

    // eslint-disable-next-line no-restricted-globals
    if (typeof window !== 'undefined' && value === window) {
      return '[Window]';
    }

    // eslint-disable-next-line no-restricted-globals
    if (typeof document !== 'undefined' && value === document) {
      return '[Document]';
    }

    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isVueViewModel)(value)) {
      return '[VueViewModel]';
    }

    // React's SyntheticEvent thingy
    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isSyntheticEvent)(value)) {
      return '[SyntheticEvent]';
    }

    if (typeof value === 'number' && !Number.isFinite(value)) {
      return `[${value}]`;
    }

    if (typeof value === 'function') {
      return `[Function: ${(0,_stacktrace_js__WEBPACK_IMPORTED_MODULE_3__.getFunctionName)(value)}]`;
    }

    if (typeof value === 'symbol') {
      return `[${String(value)}]`;
    }

    // stringified BigInts are indistinguishable from regular numbers, so we need to label them to avoid confusion
    if (typeof value === 'bigint') {
      return `[BigInt: ${String(value)}]`;
    }

    // Now that we've knocked out all the special cases and the primitives, all we have left are objects. Simply casting
    // them to strings means that instances of classes which haven't defined their `toStringTag` will just come out as
    // `"[object Object]"`. If we instead look at the constructor's name (which is the same as the name of the class),
    // we can make sure that only plain objects come out that way.
    const objName = getConstructorName(value);

    // Handle HTML Elements
    if (/^HTML(\w*)Element$/.test(objName)) {
      return `[HTMLElement: ${objName}]`;
    }

    return `[object ${objName}]`;
  } catch (err) {
    return `**non-serializable** (${err})`;
  }
}
/* eslint-enable complexity */

function getConstructorName(value) {
  const prototype = Object.getPrototypeOf(value);

  return prototype ? prototype.constructor.name : 'null prototype';
}

/** Calculates bytes size of input string */
function utf8Length(value) {
  // eslint-disable-next-line no-bitwise
  return ~-encodeURI(value).split(/%..|./).length;
}

/** Calculates bytes size of input object */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}

/**
 * Normalizes URLs in exceptions and stacktraces to a base path so Sentry can fingerprint
 * across platforms and working directory.
 *
 * @param url The URL to be normalized.
 * @param basePath The application base path.
 * @returns The normalized URL.
 */
function normalizeUrlToBase(url, basePath) {
  const escapedBase = basePath
    // Backslash to forward
    .replace(/\\/g, '/')
    // Escape RegExp special characters
    .replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

  let newUrl = url;
  try {
    newUrl = decodeURI(url);
  } catch (_Oo) {
    // Sometime this breaks
  }
  return (
    newUrl
      .replace(/\\/g, '/')
      .replace(/webpack:\/?/g, '') // Remove intermediate base path
      // eslint-disable-next-line @sentry-internal/sdk/no-regexp-constructor
      .replace(new RegExp(`(file://)?/*${escapedBase}/*`, 'ig'), 'app:///')
  );
}


//# sourceMappingURL=normalize.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/object.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/object.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNonEnumerableProperty: () => (/* binding */ addNonEnumerableProperty),
/* harmony export */   convertToPlainObject: () => (/* binding */ convertToPlainObject),
/* harmony export */   dropUndefinedKeys: () => (/* binding */ dropUndefinedKeys),
/* harmony export */   extractExceptionKeysForMessage: () => (/* binding */ extractExceptionKeysForMessage),
/* harmony export */   fill: () => (/* binding */ fill),
/* harmony export */   getOriginalFunction: () => (/* binding */ getOriginalFunction),
/* harmony export */   markFunctionWrapped: () => (/* binding */ markFunctionWrapped),
/* harmony export */   objectify: () => (/* binding */ objectify),
/* harmony export */   urlEncode: () => (/* binding */ urlEncode)
/* harmony export */ });
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/browser.js");
/* harmony import */ var _debug_build_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug-build.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/debug-build.js");
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/is.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/logger.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./string.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/string.js");






/**
 * Replace a method in an object with a wrapped version of itself.
 *
 * @param source An object that contains a method to be wrapped.
 * @param name The name of the method to be wrapped.
 * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
 * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
 * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
 * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
 * @returns void
 */
function fill(source, name, replacementFactory) {
  if (!(name in source)) {
    return;
  }

  const original = source[name] ;
  const wrapped = replacementFactory(original) ;

  // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
  // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
  if (typeof wrapped === 'function') {
    markFunctionWrapped(wrapped, original);
  }

  try {
    source[name] = wrapped;
  } catch (e) {
    _debug_build_js__WEBPACK_IMPORTED_MODULE_0__.DEBUG_BUILD && _logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Failed to replace method "${name}" in object`, source);
  }
}

/**
 * Defines a non-enumerable property on the given object.
 *
 * @param obj The object on which to set the property
 * @param name The name of the property to be set
 * @param value The value to which to set the property
 */
function addNonEnumerableProperty(obj, name, value) {
  try {
    Object.defineProperty(obj, name, {
      // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
      value: value,
      writable: true,
      configurable: true,
    });
  } catch (o_O) {
    _debug_build_js__WEBPACK_IMPORTED_MODULE_0__.DEBUG_BUILD && _logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Failed to add non-enumerable property "${name}" to object`, obj);
  }
}

/**
 * Remembers the original function on the wrapped function and
 * patches up the prototype.
 *
 * @param wrapped the wrapper function
 * @param original the original function that gets wrapped
 */
function markFunctionWrapped(wrapped, original) {
  try {
    const proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, '__sentry_original__', original);
  } catch (o_O) {} // eslint-disable-line no-empty
}

/**
 * This extracts the original function if available.  See
 * `markFunctionWrapped` for more information.
 *
 * @param func the function to unwrap
 * @returns the unwrapped version of the function if available.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function getOriginalFunction(func) {
  return func.__sentry_original__;
}

/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 *
 * @deprecated This function is deprecated and will be removed in the next major version of the SDK.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function urlEncode(object) {
  return Object.entries(object)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

/**
 * Transforms any `Error` or `Event` into a plain object with all of their enumerable properties, and some of their
 * non-enumerable properties attached.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 * @returns An Event or Error turned into an object - or the value argument itself, when value is neither an Event nor
 *  an Error.
 */
function convertToPlainObject(value)

 {
  if ((0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isError)(value)) {
    return {
      message: value.message,
      name: value.name,
      stack: value.stack,
      ...getOwnProperties(value),
    };
  } else if ((0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isEvent)(value)) {
    const newObj

 = {
      type: value.type,
      target: serializeEventTarget(value.target),
      currentTarget: serializeEventTarget(value.currentTarget),
      ...getOwnProperties(value),
    };

    if (typeof CustomEvent !== 'undefined' && (0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isInstanceOf)(value, CustomEvent)) {
      newObj.detail = value.detail;
    }

    return newObj;
  } else {
    return value;
  }
}

/** Creates a string representation of the target of an `Event` object */
function serializeEventTarget(target) {
  try {
    return (0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isElement)(target) ? (0,_browser_js__WEBPACK_IMPORTED_MODULE_3__.htmlTreeAsString)(target) : Object.prototype.toString.call(target);
  } catch (_oO) {
    return '<unknown>';
  }
}

/** Filters out all but an object's own properties */
function getOwnProperties(obj) {
  if (typeof obj === 'object' && obj !== null) {
    const extractedProps = {};
    for (const property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        extractedProps[property] = (obj )[property];
      }
    }
    return extractedProps;
  } else {
    return {};
  }
}

/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */
function extractExceptionKeysForMessage(exception, maxLength = 40) {
  const keys = Object.keys(convertToPlainObject(exception));
  keys.sort();

  const firstKey = keys[0];

  if (!firstKey) {
    return '[object has no keys]';
  }

  if (firstKey.length >= maxLength) {
    return (0,_string_js__WEBPACK_IMPORTED_MODULE_4__.truncate)(firstKey, maxLength);
  }

  for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
    const serialized = keys.slice(0, includedKeys).join(', ');
    if (serialized.length > maxLength) {
      continue;
    }
    if (includedKeys === keys.length) {
      return serialized;
    }
    return (0,_string_js__WEBPACK_IMPORTED_MODULE_4__.truncate)(serialized, maxLength);
  }

  return '';
}

/**
 * Given any object, return a new object having removed all fields whose value was `undefined`.
 * Works recursively on objects and arrays.
 *
 * Attention: This function keeps circular references in the returned object.
 */
function dropUndefinedKeys(inputValue) {
  // This map keeps track of what already visited nodes map to.
  // Our Set - based memoBuilder doesn't work here because we want to the output object to have the same circular
  // references as the input object.
  const memoizationMap = new Map();

  // This function just proxies `_dropUndefinedKeys` to keep the `memoBuilder` out of this function's API
  return _dropUndefinedKeys(inputValue, memoizationMap);
}

function _dropUndefinedKeys(inputValue, memoizationMap) {
  if (isPojo(inputValue)) {
    // If this node has already been visited due to a circular reference, return the object it was mapped to in the new object
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== undefined) {
      return memoVal ;
    }

    const returnValue = {};
    // Store the mapping of this value in case we visit it again, in case of circular data
    memoizationMap.set(inputValue, returnValue);

    for (const key of Object.getOwnPropertyNames(inputValue)) {
      if (typeof inputValue[key] !== 'undefined') {
        returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
      }
    }

    return returnValue ;
  }

  if (Array.isArray(inputValue)) {
    // If this node has already been visited due to a circular reference, return the array it was mapped to in the new object
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== undefined) {
      return memoVal ;
    }

    const returnValue = [];
    // Store the mapping of this value in case we visit it again, in case of circular data
    memoizationMap.set(inputValue, returnValue);

    inputValue.forEach((item) => {
      returnValue.push(_dropUndefinedKeys(item, memoizationMap));
    });

    return returnValue ;
  }

  return inputValue;
}

function isPojo(input) {
  if (!(0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isPlainObject)(input)) {
    return false;
  }

  try {
    const name = (Object.getPrototypeOf(input) ).constructor.name;
    return !name || name === 'Object';
  } catch (e2) {
    return true;
  }
}

/**
 * Ensure that something is an object.
 *
 * Turns `undefined` and `null` into `String`s and all other primitives into instances of their respective wrapper
 * classes (String, Boolean, Number, etc.). Acts as the identity function on non-primitives.
 *
 * @param wat The subject of the objectification
 * @returns A version of `wat` which can safely be used with `Object` class methods
 */
function objectify(wat) {
  let objectified;
  switch (true) {
    // this will catch both undefined and null
    case wat == undefined:
      objectified = new String(wat);
      break;

    // Though symbols and bigints do have wrapper classes (`Symbol` and `BigInt`, respectively), for whatever reason
    // those classes don't have constructors which can be used with the `new` keyword. We therefore need to cast each as
    // an object in order to wrap it.
    case typeof wat === 'symbol' || typeof wat === 'bigint':
      objectified = Object(wat);
      break;

    // this will catch the remaining primitives: `String`, `Number`, and `Boolean`
    case (0,_is_js__WEBPACK_IMPORTED_MODULE_2__.isPrimitive)(wat):
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      objectified = new (wat ).constructor(wat);
      break;

    // by process of elimination, at this point we know that `wat` must already be an object
    default:
      objectified = wat;
      break;
  }
  return objectified;
}


//# sourceMappingURL=object.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generatePropagationContext: () => (/* binding */ generatePropagationContext),
/* harmony export */   generateSpanId: () => (/* binding */ generateSpanId),
/* harmony export */   generateTraceId: () => (/* binding */ generateTraceId)
/* harmony export */ });
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/misc.js");


/**
 * Returns a new minimal propagation context.
 *
 * @deprecated Use `generateTraceId` and `generateSpanId` instead.
 */
function generatePropagationContext() {
  return {
    traceId: generateTraceId(),
    spanId: generateSpanId(),
  };
}

/**
 * Generate a random, valid trace ID.
 */
function generateTraceId() {
  return (0,_misc_js__WEBPACK_IMPORTED_MODULE_0__.uuid4)();
}

/**
 * Generate a random, valid span ID.
 */
function generateSpanId() {
  return (0,_misc_js__WEBPACK_IMPORTED_MODULE_0__.uuid4)().substring(16);
}


//# sourceMappingURL=propagationContext.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/stacktrace.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UNKNOWN_FUNCTION: () => (/* binding */ UNKNOWN_FUNCTION),
/* harmony export */   createStackParser: () => (/* binding */ createStackParser),
/* harmony export */   getFramesFromEvent: () => (/* binding */ getFramesFromEvent),
/* harmony export */   getFunctionName: () => (/* binding */ getFunctionName),
/* harmony export */   stackParserFromStackParserOptions: () => (/* binding */ stackParserFromStackParserOptions),
/* harmony export */   stripSentryFramesAndReverse: () => (/* binding */ stripSentryFramesAndReverse)
/* harmony export */ });
const STACKTRACE_FRAME_LIMIT = 50;
const UNKNOWN_FUNCTION = '?';
// Used to sanitize webpack (error: *) wrapped stack errors
const WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
const STRIP_FRAME_REGEXP = /captureMessage|captureException/;

/**
 * Creates a stack parser with the supplied line parsers
 *
 * StackFrames are returned in the correct order for Sentry Exception
 * frames and with Sentry SDK internal frames removed from the top and bottom
 *
 */
function createStackParser(...parsers) {
  const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map(p => p[1]);

  return (stack, skipFirstLines = 0, framesToPop = 0) => {
    const frames = [];
    const lines = stack.split('\n');

    for (let i = skipFirstLines; i < lines.length; i++) {
      const line = lines[i] ;
      // Ignore lines over 1kb as they are unlikely to be stack frames.
      // Many of the regular expressions use backtracking which results in run time that increases exponentially with
      // input size. Huge strings can result in hangs/Denial of Service:
      // https://github.com/getsentry/sentry-javascript/issues/2286
      if (line.length > 1024) {
        continue;
      }

      // https://github.com/getsentry/sentry-javascript/issues/5459
      // Remove webpack (error: *) wrappers
      const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, '$1') : line;

      // https://github.com/getsentry/sentry-javascript/issues/7813
      // Skip Error: lines
      if (cleanedLine.match(/\S*Error: /)) {
        continue;
      }

      for (const parser of sortedParsers) {
        const frame = parser(cleanedLine);

        if (frame) {
          frames.push(frame);
          break;
        }
      }

      if (frames.length >= STACKTRACE_FRAME_LIMIT + framesToPop) {
        break;
      }
    }

    return stripSentryFramesAndReverse(frames.slice(framesToPop));
  };
}

/**
 * Gets a stack parser implementation from Options.stackParser
 * @see Options
 *
 * If options contains an array of line parsers, it is converted into a parser
 */
function stackParserFromStackParserOptions(stackParser) {
  if (Array.isArray(stackParser)) {
    return createStackParser(...stackParser);
  }
  return stackParser;
}

/**
 * Removes Sentry frames from the top and bottom of the stack if present and enforces a limit of max number of frames.
 * Assumes stack input is ordered from top to bottom and returns the reverse representation so call site of the
 * function that caused the crash is the last frame in the array.
 * @hidden
 */
function stripSentryFramesAndReverse(stack) {
  if (!stack.length) {
    return [];
  }

  const localStack = Array.from(stack);

  // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
  if (/sentryWrapped/.test(getLastStackFrame(localStack).function || '')) {
    localStack.pop();
  }

  // Reversing in the middle of the procedure allows us to just pop the values off the stack
  localStack.reverse();

  // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
  if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || '')) {
    localStack.pop();

    // When using synthetic events, we will have a 2 levels deep stack, as `new Error('Sentry syntheticException')`
    // is produced within the hub itself, making it:
    //
    //   Sentry.captureException()
    //   getCurrentHub().captureException()
    //
    // instead of just the top `Sentry` call itself.
    // This forces us to possibly strip an additional frame in the exact same was as above.
    if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || '')) {
      localStack.pop();
    }
  }

  return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map(frame => ({
    ...frame,
    filename: frame.filename || getLastStackFrame(localStack).filename,
    function: frame.function || UNKNOWN_FUNCTION,
  }));
}

function getLastStackFrame(arr) {
  return arr[arr.length - 1] || {};
}

const defaultFunctionName = '<anonymous>';

/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
  try {
    if (!fn || typeof fn !== 'function') {
      return defaultFunctionName;
    }
    return fn.name || defaultFunctionName;
  } catch (e) {
    // Just accessing custom props in some Selenium environments
    // can cause a "Permission denied" exception (see raven-js#495).
    return defaultFunctionName;
  }
}

/**
 * Get's stack frames from an event without needing to check for undefined properties.
 */
function getFramesFromEvent(event) {
  const exception = event.exception;

  if (exception) {
    const frames = [];
    try {
      // @ts-expect-error Object could be undefined
      exception.values.forEach(value => {
        // @ts-expect-error Value could be undefined
        if (value.stacktrace.frames) {
          // @ts-expect-error Value could be undefined
          frames.push(...value.stacktrace.frames);
        }
      });
      return frames;
    } catch (_oO) {
      return undefined;
    }
  }
  return undefined;
}


//# sourceMappingURL=stacktrace.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/string.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/string.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMatchingPattern: () => (/* binding */ isMatchingPattern),
/* harmony export */   safeJoin: () => (/* binding */ safeJoin),
/* harmony export */   snipLine: () => (/* binding */ snipLine),
/* harmony export */   stringMatchesSomePattern: () => (/* binding */ stringMatchesSomePattern),
/* harmony export */   truncate: () => (/* binding */ truncate)
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/is.js");


/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */
function truncate(str, max = 0) {
  if (typeof str !== 'string' || max === 0) {
    return str;
  }
  return str.length <= max ? str : `${str.slice(0, max)}...`;
}

/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function snipLine(line, colno) {
  let newLine = line;
  const lineLength = newLine.length;
  if (lineLength <= 150) {
    return newLine;
  }
  if (colno > lineLength) {
    // eslint-disable-next-line no-param-reassign
    colno = lineLength;
  }

  let start = Math.max(colno - 60, 0);
  if (start < 5) {
    start = 0;
  }

  let end = Math.min(start + 140, lineLength);
  if (end > lineLength - 5) {
    end = lineLength;
  }
  if (end === lineLength) {
    start = Math.max(end - 140, 0);
  }

  newLine = newLine.slice(start, end);
  if (start > 0) {
    newLine = `'{snip} ${newLine}`;
  }
  if (end < lineLength) {
    newLine += ' {snip}';
  }

  return newLine;
}

/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
function safeJoin(input, delimiter) {
  if (!Array.isArray(input)) {
    return '';
  }

  const output = [];
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    try {
      // This is a hack to fix a Vue3-specific bug that causes an infinite loop of
      // console warnings. This happens when a Vue template is rendered with
      // an undeclared variable, which we try to stringify, ultimately causing
      // Vue to issue another warning which repeats indefinitely.
      // see: https://github.com/getsentry/sentry-javascript/pull/8981
      if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isVueViewModel)(value)) {
        output.push('[VueViewModel]');
      } else {
        output.push(String(value));
      }
    } catch (e) {
      output.push('[value cannot be serialized]');
    }
  }

  return output.join(delimiter);
}

/**
 * Checks if the given value matches a regex or string
 *
 * @param value The string to test
 * @param pattern Either a regex or a string against which `value` will be matched
 * @param requireExactStringMatch If true, `value` must match `pattern` exactly. If false, `value` will match
 * `pattern` if it contains `pattern`. Only applies to string-type patterns.
 */
function isMatchingPattern(
  value,
  pattern,
  requireExactStringMatch = false,
) {
  if (!(0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {
    return false;
  }

  if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isRegExp)(pattern)) {
    return pattern.test(value);
  }
  if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isString)(pattern)) {
    return requireExactStringMatch ? value === pattern : value.includes(pattern);
  }

  return false;
}

/**
 * Test the given string against an array of strings and regexes. By default, string matching is done on a
 * substring-inclusion basis rather than a strict equality basis
 *
 * @param testString The string to test
 * @param patterns The patterns against which to test the string
 * @param requireExactStringMatch If true, `testString` must match one of the given string patterns exactly in order to
 * count. If false, `testString` will match a string pattern if it contains that pattern.
 * @returns
 */
function stringMatchesSomePattern(
  testString,
  patterns = [],
  requireExactStringMatch = false,
) {
  return patterns.some(pattern => isMatchingPattern(testString, pattern, requireExactStringMatch));
}


//# sourceMappingURL=string.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/syncpromise.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyncPromise: () => (/* binding */ SyncPromise),
/* harmony export */   rejectedSyncPromise: () => (/* binding */ rejectedSyncPromise),
/* harmony export */   resolvedSyncPromise: () => (/* binding */ resolvedSyncPromise)
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/is.js");


/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

/** SyncPromise internal states */
var States; (function (States) {
  /** Pending */
  const PENDING = 0; States[States["PENDING"] = PENDING] = "PENDING";
  /** Resolved / OK */
  const RESOLVED = 1; States[States["RESOLVED"] = RESOLVED] = "RESOLVED";
  /** Rejected / Error */
  const REJECTED = 2; States[States["REJECTED"] = REJECTED] = "REJECTED";
})(States || (States = {}));

// Overloads so we can call resolvedSyncPromise without arguments and generic argument

/**
 * Creates a resolved sync promise.
 *
 * @param value the value to resolve the promise with
 * @returns the resolved sync promise
 */
function resolvedSyncPromise(value) {
  return new SyncPromise(resolve => {
    resolve(value);
  });
}

/**
 * Creates a rejected sync promise.
 *
 * @param value the value to reject the promise with
 * @returns the rejected sync promise
 */
function rejectedSyncPromise(reason) {
  return new SyncPromise((_, reject) => {
    reject(reason);
  });
}

/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
class SyncPromise {

   constructor(
    executor,
  ) {SyncPromise.prototype.__init.call(this);SyncPromise.prototype.__init2.call(this);SyncPromise.prototype.__init3.call(this);SyncPromise.prototype.__init4.call(this);
    this._state = States.PENDING;
    this._handlers = [];

    try {
      executor(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }

  /** JSDoc */
   then(
    onfulfilled,
    onrejected,
  ) {
    return new SyncPromise((resolve, reject) => {
      this._handlers.push([
        false,
        result => {
          if (!onfulfilled) {
            // TODO: ¯\_(ツ)_/¯
            // TODO: FIXME
            resolve(result );
          } else {
            try {
              resolve(onfulfilled(result));
            } catch (e) {
              reject(e);
            }
          }
        },
        reason => {
          if (!onrejected) {
            reject(reason);
          } else {
            try {
              resolve(onrejected(reason));
            } catch (e) {
              reject(e);
            }
          }
        },
      ]);
      this._executeHandlers();
    });
  }

  /** JSDoc */
   catch(
    onrejected,
  ) {
    return this.then(val => val, onrejected);
  }

  /** JSDoc */
   finally(onfinally) {
    return new SyncPromise((resolve, reject) => {
      let val;
      let isRejected;

      return this.then(
        value => {
          isRejected = false;
          val = value;
          if (onfinally) {
            onfinally();
          }
        },
        reason => {
          isRejected = true;
          val = reason;
          if (onfinally) {
            onfinally();
          }
        },
      ).then(() => {
        if (isRejected) {
          reject(val);
          return;
        }

        resolve(val );
      });
    });
  }

  /** JSDoc */
    __init() {this._resolve = (value) => {
    this._setResult(States.RESOLVED, value);
  };}

  /** JSDoc */
    __init2() {this._reject = (reason) => {
    this._setResult(States.REJECTED, reason);
  };}

  /** JSDoc */
    __init3() {this._setResult = (state, value) => {
    if (this._state !== States.PENDING) {
      return;
    }

    if ((0,_is_js__WEBPACK_IMPORTED_MODULE_0__.isThenable)(value)) {
      void (value ).then(this._resolve, this._reject);
      return;
    }

    this._state = state;
    this._value = value;

    this._executeHandlers();
  };}

  /** JSDoc */
    __init4() {this._executeHandlers = () => {
    if (this._state === States.PENDING) {
      return;
    }

    const cachedHandlers = this._handlers.slice();
    this._handlers = [];

    cachedHandlers.forEach(handler => {
      if (handler[0]) {
        return;
      }

      if (this._state === States.RESOLVED) {
        handler[1](this._value );
      }

      if (this._state === States.REJECTED) {
        handler[2](this._value);
      }

      handler[0] = true;
    });
  };}
}


//# sourceMappingURL=syncpromise.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/time.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/time.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _browserPerformanceTimeOriginMode: () => (/* binding */ _browserPerformanceTimeOriginMode),
/* harmony export */   browserPerformanceTimeOrigin: () => (/* binding */ browserPerformanceTimeOrigin),
/* harmony export */   dateTimestampInSeconds: () => (/* binding */ dateTimestampInSeconds),
/* harmony export */   timestampInSeconds: () => (/* binding */ timestampInSeconds)
/* harmony export */ });
/* harmony import */ var _worldwide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worldwide.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js");


const ONE_SECOND_IN_MS = 1000;

/**
 * A partial definition of the [Performance Web API]{@link https://developer.mozilla.org/en-US/docs/Web/API/Performance}
 * for accessing a high-resolution monotonic clock.
 */

/**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 *
 * TODO(v8): Return type should be rounded.
 */
function dateTimestampInSeconds() {
  return Date.now() / ONE_SECOND_IN_MS;
}

/**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */
function createUnixTimestampInSecondsFunc() {
  const { performance } = _worldwide_js__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_OBJ ;
  if (!performance || !performance.now) {
    return dateTimestampInSeconds;
  }

  // Some browser and environments don't have a timeOrigin, so we fallback to
  // using Date.now() to compute the starting time.
  const approxStartingTimeOrigin = Date.now() - performance.now();
  const timeOrigin = performance.timeOrigin == undefined ? approxStartingTimeOrigin : performance.timeOrigin;

  // performance.now() is a monotonic clock, which means it starts at 0 when the process begins. To get the current
  // wall clock time (actual UNIX timestamp), we need to add the starting time origin and the current time elapsed.
  //
  // TODO: This does not account for the case where the monotonic clock that powers performance.now() drifts from the
  // wall clock time, which causes the returned timestamp to be inaccurate. We should investigate how to detect and
  // correct for this.
  // See: https://github.com/getsentry/sentry-javascript/issues/2590
  // See: https://github.com/mdn/content/issues/4713
  // See: https://dev.to/noamr/when-a-millisecond-is-not-a-millisecond-3h6
  return () => {
    return (timeOrigin + performance.now()) / ONE_SECOND_IN_MS;
  };
}

/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */
const timestampInSeconds = createUnixTimestampInSecondsFunc();

/**
 * Internal helper to store what is the source of browserPerformanceTimeOrigin below. For debugging only.
 *
 * @deprecated This variable will be removed in the next major version.
 */
let _browserPerformanceTimeOriginMode;

/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */
const browserPerformanceTimeOrigin = (() => {
  // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
  // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
  // data as reliable if they are within a reasonable threshold of the current time.

  const { performance } = _worldwide_js__WEBPACK_IMPORTED_MODULE_0__.GLOBAL_OBJ ;
  if (!performance || !performance.now) {
    // eslint-disable-next-line deprecation/deprecation
    _browserPerformanceTimeOriginMode = 'none';
    return undefined;
  }

  const threshold = 3600 * 1000;
  const performanceNow = performance.now();
  const dateNow = Date.now();

  // if timeOrigin isn't available set delta to threshold so it isn't used
  const timeOriginDelta = performance.timeOrigin
    ? Math.abs(performance.timeOrigin + performanceNow - dateNow)
    : threshold;
  const timeOriginIsReliable = timeOriginDelta < threshold;

  // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
  // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
  // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
  // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
  // Date API.
  // eslint-disable-next-line deprecation/deprecation
  const navigationStart = performance.timing && performance.timing.navigationStart;
  const hasNavigationStart = typeof navigationStart === 'number';
  // if navigationStart isn't available set delta to threshold so it isn't used
  const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
  const navigationStartIsReliable = navigationStartDelta < threshold;

  if (timeOriginIsReliable || navigationStartIsReliable) {
    // Use the more reliable time origin
    if (timeOriginDelta <= navigationStartDelta) {
      // eslint-disable-next-line deprecation/deprecation
      _browserPerformanceTimeOriginMode = 'timeOrigin';
      return performance.timeOrigin;
    } else {
      // eslint-disable-next-line deprecation/deprecation
      _browserPerformanceTimeOriginMode = 'navigationStart';
      return navigationStart;
    }
  }

  // Either both timeOrigin and navigationStart are skewed or neither is available, fallback to Date.
  // eslint-disable-next-line deprecation/deprecation
  _browserPerformanceTimeOriginMode = 'dateNow';
  return dateNow;
})();


//# sourceMappingURL=time.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/tracing.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/tracing.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TRACEPARENT_REGEXP: () => (/* binding */ TRACEPARENT_REGEXP),
/* harmony export */   extractTraceparentData: () => (/* binding */ extractTraceparentData),
/* harmony export */   generateSentryTraceHeader: () => (/* binding */ generateSentryTraceHeader),
/* harmony export */   propagationContextFromHeaders: () => (/* binding */ propagationContextFromHeaders)
/* harmony export */ });
/* harmony import */ var _baggage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baggage.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/baggage.js");
/* harmony import */ var _propagationContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propagationContext.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js");



// eslint-disable-next-line @sentry-internal/sdk/no-regexp-constructor -- RegExp is used for readability here
const TRACEPARENT_REGEXP = new RegExp(
  '^[ \\t]*' + // whitespace
    '([0-9a-f]{32})?' + // trace_id
    '-?([0-9a-f]{16})?' + // span_id
    '-?([01])?' + // sampled
    '[ \\t]*$', // whitespace
);

/**
 * Extract transaction context data from a `sentry-trace` header.
 *
 * @param traceparent Traceparent string
 *
 * @returns Object containing data from the header, or undefined if traceparent string is malformed
 */
function extractTraceparentData(traceparent) {
  if (!traceparent) {
    return undefined;
  }

  const matches = traceparent.match(TRACEPARENT_REGEXP);
  if (!matches) {
    return undefined;
  }

  let parentSampled;
  if (matches[3] === '1') {
    parentSampled = true;
  } else if (matches[3] === '0') {
    parentSampled = false;
  }

  return {
    traceId: matches[1],
    parentSampled,
    parentSpanId: matches[2],
  };
}

/**
 * Create a propagation context from incoming headers or
 * creates a minimal new one if the headers are undefined.
 */
function propagationContextFromHeaders(
  sentryTrace,
  baggage,
) {
  const traceparentData = extractTraceparentData(sentryTrace);
  const dynamicSamplingContext = (0,_baggage_js__WEBPACK_IMPORTED_MODULE_0__.baggageHeaderToDynamicSamplingContext)(baggage);

  if (!traceparentData || !traceparentData.traceId) {
    return { traceId: (0,_propagationContext_js__WEBPACK_IMPORTED_MODULE_1__.generateTraceId)(), spanId: (0,_propagationContext_js__WEBPACK_IMPORTED_MODULE_1__.generateSpanId)() };
  }

  const { traceId, parentSpanId, parentSampled } = traceparentData;

  const virtualSpanId = (0,_propagationContext_js__WEBPACK_IMPORTED_MODULE_1__.generateSpanId)();

  return {
    traceId,
    parentSpanId,
    spanId: virtualSpanId,
    sampled: parentSampled,
    dsc: dynamicSamplingContext || {}, // If we have traceparent data but no DSC it means we are not head of trace and we must freeze it
  };
}

/**
 * Create sentry-trace header from span context values.
 */
function generateSentryTraceHeader(
  traceId = (0,_propagationContext_js__WEBPACK_IMPORTED_MODULE_1__.generateTraceId)(),
  spanId = (0,_propagationContext_js__WEBPACK_IMPORTED_MODULE_1__.generateSpanId)(),
  sampled,
) {
  let sampledString = '';
  if (sampled !== undefined) {
    sampledString = sampled ? '-1' : '-0';
  }
  return `${traceId}-${spanId}${sampledString}`;
}


//# sourceMappingURL=tracing.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/version.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/version.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SDK_VERSION: () => (/* binding */ SDK_VERSION)
/* harmony export */ });
// This is a magic string replaced by rollup

const SDK_VERSION = "8.51.0" ;


//# sourceMappingURL=version.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils-hoist/worldwide.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLOBAL_OBJ: () => (/* binding */ GLOBAL_OBJ),
/* harmony export */   getGlobalSingleton: () => (/* binding */ getGlobalSingleton)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/version.js");


/** Get's the global object for the current JavaScript runtime */
const GLOBAL_OBJ = globalThis ;

/**
 * Returns a global singleton contained in the global `__SENTRY__[]` object.
 *
 * If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
 * function and added to the `__SENTRY__` object.
 *
 * @param name name of the global singleton on __SENTRY__
 * @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
 * @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `GLOBAL_OBJ`'s return value
 * @returns the singleton
 */
function getGlobalSingleton(name, creator, obj) {
  const gbl = (obj || GLOBAL_OBJ) ;
  const __SENTRY__ = (gbl.__SENTRY__ = gbl.__SENTRY__ || {});
  const versionedCarrier = (__SENTRY__[_version_js__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION] = __SENTRY__[_version_js__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION] || {});
  return versionedCarrier[name] || (versionedCarrier[name] = creator());
}


//# sourceMappingURL=worldwide.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils/applyScopeDataToEvent.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils/applyScopeDataToEvent.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyScopeDataToEvent: () => (/* binding */ applyScopeDataToEvent),
/* harmony export */   mergeAndOverwriteScopeData: () => (/* binding */ mergeAndOverwriteScopeData),
/* harmony export */   mergeScopeData: () => (/* binding */ mergeScopeData)
/* harmony export */ });
/* harmony import */ var _tracing_dynamicSamplingContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tracing/dynamicSamplingContext.js */ "./node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js");
/* harmony import */ var _utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils-hoist/object.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/object.js");
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge.js */ "./node_modules/@sentry/core/build/esm/utils/merge.js");
/* harmony import */ var _spanUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spanUtils.js */ "./node_modules/@sentry/core/build/esm/utils/spanUtils.js");





/**
 * Applies data from the scope to the event and runs all event processors on it.
 */
function applyScopeDataToEvent(event, data) {
  const { fingerprint, span, breadcrumbs, sdkProcessingMetadata } = data;

  // Apply general data
  applyDataToEvent(event, data);

  // We want to set the trace context for normal events only if there isn't already
  // a trace context on the event. There is a product feature in place where we link
  // errors with transaction and it relies on that.
  if (span) {
    applySpanToEvent(event, span);
  }

  applyFingerprintToEvent(event, fingerprint);
  applyBreadcrumbsToEvent(event, breadcrumbs);
  applySdkMetadataToEvent(event, sdkProcessingMetadata);
}

/** Merge data of two scopes together. */
function mergeScopeData(data, mergeData) {
  const {
    extra,
    tags,
    user,
    contexts,
    level,
    sdkProcessingMetadata,
    breadcrumbs,
    fingerprint,
    eventProcessors,
    attachments,
    propagationContext,
    transactionName,
    span,
  } = mergeData;

  mergeAndOverwriteScopeData(data, 'extra', extra);
  mergeAndOverwriteScopeData(data, 'tags', tags);
  mergeAndOverwriteScopeData(data, 'user', user);
  mergeAndOverwriteScopeData(data, 'contexts', contexts);

  data.sdkProcessingMetadata = (0,_merge_js__WEBPACK_IMPORTED_MODULE_0__.merge)(data.sdkProcessingMetadata, sdkProcessingMetadata, 2);

  if (level) {
    data.level = level;
  }

  if (transactionName) {
    data.transactionName = transactionName;
  }

  if (span) {
    data.span = span;
  }

  if (breadcrumbs.length) {
    data.breadcrumbs = [...data.breadcrumbs, ...breadcrumbs];
  }

  if (fingerprint.length) {
    data.fingerprint = [...data.fingerprint, ...fingerprint];
  }

  if (eventProcessors.length) {
    data.eventProcessors = [...data.eventProcessors, ...eventProcessors];
  }

  if (attachments.length) {
    data.attachments = [...data.attachments, ...attachments];
  }

  data.propagationContext = { ...data.propagationContext, ...propagationContext };
}

/**
 * Merges certain scope data. Undefined values will overwrite any existing values.
 * Exported only for tests.
 */
function mergeAndOverwriteScopeData

(data, prop, mergeVal) {
  data[prop] = (0,_merge_js__WEBPACK_IMPORTED_MODULE_0__.merge)(data[prop], mergeVal, 1);
}

function applyDataToEvent(event, data) {
  const { extra, tags, user, contexts, level, transactionName } = data;

  const cleanedExtra = (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_1__.dropUndefinedKeys)(extra);
  if (cleanedExtra && Object.keys(cleanedExtra).length) {
    event.extra = { ...cleanedExtra, ...event.extra };
  }

  const cleanedTags = (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_1__.dropUndefinedKeys)(tags);
  if (cleanedTags && Object.keys(cleanedTags).length) {
    event.tags = { ...cleanedTags, ...event.tags };
  }

  const cleanedUser = (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_1__.dropUndefinedKeys)(user);
  if (cleanedUser && Object.keys(cleanedUser).length) {
    event.user = { ...cleanedUser, ...event.user };
  }

  const cleanedContexts = (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_1__.dropUndefinedKeys)(contexts);
  if (cleanedContexts && Object.keys(cleanedContexts).length) {
    event.contexts = { ...cleanedContexts, ...event.contexts };
  }

  if (level) {
    event.level = level;
  }

  // transaction events get their `transaction` from the root span name
  if (transactionName && event.type !== 'transaction') {
    event.transaction = transactionName;
  }
}

function applyBreadcrumbsToEvent(event, breadcrumbs) {
  const mergedBreadcrumbs = [...(event.breadcrumbs || []), ...breadcrumbs];
  event.breadcrumbs = mergedBreadcrumbs.length ? mergedBreadcrumbs : undefined;
}

function applySdkMetadataToEvent(event, sdkProcessingMetadata) {
  event.sdkProcessingMetadata = {
    ...event.sdkProcessingMetadata,
    ...sdkProcessingMetadata,
  };
}

function applySpanToEvent(event, span) {
  event.contexts = {
    trace: (0,_spanUtils_js__WEBPACK_IMPORTED_MODULE_2__.spanToTraceContext)(span),
    ...event.contexts,
  };

  event.sdkProcessingMetadata = {
    dynamicSamplingContext: (0,_tracing_dynamicSamplingContext_js__WEBPACK_IMPORTED_MODULE_3__.getDynamicSamplingContextFromSpan)(span),
    ...event.sdkProcessingMetadata,
  };

  const rootSpan = (0,_spanUtils_js__WEBPACK_IMPORTED_MODULE_2__.getRootSpan)(span);
  const transactionName = (0,_spanUtils_js__WEBPACK_IMPORTED_MODULE_2__.spanToJSON)(rootSpan).description;
  if (transactionName && !event.transaction && event.type === 'transaction') {
    event.transaction = transactionName;
  }
}

/**
 * Applies fingerprint from the scope to the event if there's one,
 * uses message if there's one instead or get rid of empty fingerprint
 */
function applyFingerprintToEvent(event, fingerprint) {
  // Make sure it's an array first and we actually have something in place
  event.fingerprint = event.fingerprint
    ? Array.isArray(event.fingerprint)
      ? event.fingerprint
      : [event.fingerprint]
    : [];

  // If we have something on the scope, then merge it with event
  if (fingerprint) {
    event.fingerprint = event.fingerprint.concat(fingerprint);
  }

  // If we have no data at all, remove empty array default
  if (event.fingerprint && !event.fingerprint.length) {
    delete event.fingerprint;
  }
}


//# sourceMappingURL=applyScopeDataToEvent.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils/hasTracingEnabled.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils/hasTracingEnabled.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasTracingEnabled: () => (/* binding */ hasTracingEnabled)
/* harmony export */ });
/* harmony import */ var _currentScopes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../currentScopes.js */ "./node_modules/@sentry/core/build/esm/currentScopes.js");


// Treeshakable guard to remove all code related to tracing

/**
 * Determines if tracing is currently enabled.
 *
 * Tracing is enabled when at least one of `tracesSampleRate` and `tracesSampler` is defined in the SDK config.
 */
function hasTracingEnabled(
  maybeOptions,
) {
  if (typeof __SENTRY_TRACING__ === 'boolean' && !__SENTRY_TRACING__) {
    return false;
  }

  const client = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_0__.getClient)();
  const options = maybeOptions || (client && client.getOptions());
  // eslint-disable-next-line deprecation/deprecation
  return !!options && (options.enableTracing || 'tracesSampleRate' in options || 'tracesSampler' in options);
}


//# sourceMappingURL=hasTracingEnabled.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils/merge.js":
/*!************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils/merge.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/**
 * Shallow merge two objects.
 * Does not mutate the passed in objects.
 * Undefined/empty values in the merge object will overwrite existing values.
 *
 * By default, this merges 2 levels deep.
 */
function merge(initialObj, mergeObj, levels = 2) {
  // If the merge value is not an object, or we have no merge levels left,
  // we just set the value to the merge value
  if (!mergeObj || typeof mergeObj !== 'object' || levels <= 0) {
    return mergeObj;
  }

  // If the merge object is an empty object, and the initial object is not undefined, we return the initial object
  if (initialObj && mergeObj && Object.keys(mergeObj).length === 0) {
    return initialObj;
  }

  // Clone object
  const output = { ...initialObj };

  // Merge values into output, resursively
  for (const key in mergeObj) {
    if (Object.prototype.hasOwnProperty.call(mergeObj, key)) {
      output[key] = merge(output[key], mergeObj[key], levels - 1);
    }
  }

  return output;
}


//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils/prepareEvent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils/prepareEvent.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyClientOptions: () => (/* binding */ applyClientOptions),
/* harmony export */   applyDebugIds: () => (/* binding */ applyDebugIds),
/* harmony export */   applyDebugMeta: () => (/* binding */ applyDebugMeta),
/* harmony export */   parseEventHintOrCaptureContext: () => (/* binding */ parseEventHintOrCaptureContext),
/* harmony export */   prepareEvent: () => (/* binding */ prepareEvent)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants.js */ "./node_modules/@sentry/core/build/esm/constants.js");
/* harmony import */ var _currentScopes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../currentScopes.js */ "./node_modules/@sentry/core/build/esm/currentScopes.js");
/* harmony import */ var _eventProcessors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../eventProcessors.js */ "./node_modules/@sentry/core/build/esm/eventProcessors.js");
/* harmony import */ var _scope_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scope.js */ "./node_modules/@sentry/core/build/esm/scope.js");
/* harmony import */ var _utils_hoist_debug_ids_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils-hoist/debug-ids.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/debug-ids.js");
/* harmony import */ var _utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils-hoist/misc.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/misc.js");
/* harmony import */ var _utils_hoist_normalize_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils-hoist/normalize.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/normalize.js");
/* harmony import */ var _utils_hoist_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils-hoist/string.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/string.js");
/* harmony import */ var _utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils-hoist/time.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/time.js");
/* harmony import */ var _applyScopeDataToEvent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applyScopeDataToEvent.js */ "./node_modules/@sentry/core/build/esm/utils/applyScopeDataToEvent.js");











/**
 * This type makes sure that we get either a CaptureContext, OR an EventHint.
 * It does not allow mixing them, which could lead to unexpected outcomes, e.g. this is disallowed:
 * { user: { id: '123' }, mechanism: { handled: false } }
 */

/**
 * Adds common information to events.
 *
 * The information includes release and environment from `options`,
 * breadcrumbs and context (extra, tags and user) from the scope.
 *
 * Information that is already present in the event is never overwritten. For
 * nested objects, such as the context, keys are merged.
 *
 * @param event The original event.
 * @param hint May contain additional information about the original exception.
 * @param scope A scope containing event metadata.
 * @returns A new event with more information.
 * @hidden
 */
function prepareEvent(
  options,
  event,
  hint,
  scope,
  client,
  isolationScope,
) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1000 } = options;
  const prepared = {
    ...event,
    event_id: event.event_id || hint.event_id || (0,_utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_0__.uuid4)(),
    timestamp: event.timestamp || (0,_utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_1__.dateTimestampInSeconds)(),
  };
  const integrations = hint.integrations || options.integrations.map(i => i.name);

  applyClientOptions(prepared, options);
  applyIntegrationsMetadata(prepared, integrations);

  if (client) {
    client.emit('applyFrameMetadata', event);
  }

  // Only put debug IDs onto frames for error events.
  if (event.type === undefined) {
    applyDebugIds(prepared, options.stackParser);
  }

  // If we have scope given to us, use it as the base for further modifications.
  // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
  const finalScope = getFinalScope(scope, hint.captureContext);

  if (hint.mechanism) {
    (0,_utils_hoist_misc_js__WEBPACK_IMPORTED_MODULE_0__.addExceptionMechanism)(prepared, hint.mechanism);
  }

  const clientEventProcessors = client ? client.getEventProcessors() : [];

  // This should be the last thing called, since we want that
  // {@link Scope.addEventProcessor} gets the finished prepared event.
  // Merge scope data together
  const data = (0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_2__.getGlobalScope)().getScopeData();

  if (isolationScope) {
    const isolationData = isolationScope.getScopeData();
    (0,_applyScopeDataToEvent_js__WEBPACK_IMPORTED_MODULE_3__.mergeScopeData)(data, isolationData);
  }

  if (finalScope) {
    const finalScopeData = finalScope.getScopeData();
    (0,_applyScopeDataToEvent_js__WEBPACK_IMPORTED_MODULE_3__.mergeScopeData)(data, finalScopeData);
  }

  const attachments = [...(hint.attachments || []), ...data.attachments];
  if (attachments.length) {
    hint.attachments = attachments;
  }

  (0,_applyScopeDataToEvent_js__WEBPACK_IMPORTED_MODULE_3__.applyScopeDataToEvent)(prepared, data);

  const eventProcessors = [
    ...clientEventProcessors,
    // Run scope event processors _after_ all other processors
    ...data.eventProcessors,
  ];

  const result = (0,_eventProcessors_js__WEBPACK_IMPORTED_MODULE_4__.notifyEventProcessors)(eventProcessors, prepared, hint);

  return result.then(evt => {
    if (evt) {
      // We apply the debug_meta field only after all event processors have ran, so that if any event processors modified
      // file names (e.g.the RewriteFrames integration) the filename -> debug ID relationship isn't destroyed.
      // This should not cause any PII issues, since we're only moving data that is already on the event and not adding
      // any new data
      applyDebugMeta(evt);
    }

    if (typeof normalizeDepth === 'number' && normalizeDepth > 0) {
      return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
    }
    return evt;
  });
}

/**
 * Enhances event using the client configuration.
 * It takes care of all "static" values like environment, release and `dist`,
 * as well as truncating overly long values.
 *
 * Only exported for tests.
 *
 * @param event event instance to be enhanced
 */
function applyClientOptions(event, options) {
  const { environment, release, dist, maxValueLength = 250 } = options;

  // empty strings do not make sense for environment, release, and dist
  // so we handle them the same as if they were not provided
  event.environment = event.environment || environment || _constants_js__WEBPACK_IMPORTED_MODULE_5__.DEFAULT_ENVIRONMENT;

  if (!event.release && release) {
    event.release = release;
  }

  if (!event.dist && dist) {
    event.dist = dist;
  }

  if (event.message) {
    event.message = (0,_utils_hoist_string_js__WEBPACK_IMPORTED_MODULE_6__.truncate)(event.message, maxValueLength);
  }

  const exception = event.exception && event.exception.values && event.exception.values[0];
  if (exception && exception.value) {
    exception.value = (0,_utils_hoist_string_js__WEBPACK_IMPORTED_MODULE_6__.truncate)(exception.value, maxValueLength);
  }

  const request = event.request;
  if (request && request.url) {
    request.url = (0,_utils_hoist_string_js__WEBPACK_IMPORTED_MODULE_6__.truncate)(request.url, maxValueLength);
  }
}

/**
 * Puts debug IDs into the stack frames of an error event.
 */
function applyDebugIds(event, stackParser) {
  // Build a map of filename -> debug_id
  const filenameDebugIdMap = (0,_utils_hoist_debug_ids_js__WEBPACK_IMPORTED_MODULE_7__.getFilenameToDebugIdMap)(stackParser);

  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    event.exception.values.forEach(exception => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      exception.stacktrace.frames.forEach(frame => {
        if (filenameDebugIdMap && frame.filename) {
          frame.debug_id = filenameDebugIdMap[frame.filename];
        }
      });
    });
  } catch (e) {
    // To save bundle size we're just try catching here instead of checking for the existence of all the different objects.
  }
}

/**
 * Moves debug IDs from the stack frames of an error event into the debug_meta field.
 */
function applyDebugMeta(event) {
  // Extract debug IDs and filenames from the stack frames on the event.
  const filenameDebugIdMap = {};
  try {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    event.exception.values.forEach(exception => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      exception.stacktrace.frames.forEach(frame => {
        if (frame.debug_id) {
          if (frame.abs_path) {
            filenameDebugIdMap[frame.abs_path] = frame.debug_id;
          } else if (frame.filename) {
            filenameDebugIdMap[frame.filename] = frame.debug_id;
          }
          delete frame.debug_id;
        }
      });
    });
  } catch (e) {
    // To save bundle size we're just try catching here instead of checking for the existence of all the different objects.
  }

  if (Object.keys(filenameDebugIdMap).length === 0) {
    return;
  }

  // Fill debug_meta information
  event.debug_meta = event.debug_meta || {};
  event.debug_meta.images = event.debug_meta.images || [];
  const images = event.debug_meta.images;
  Object.entries(filenameDebugIdMap).forEach(([filename, debug_id]) => {
    images.push({
      type: 'sourcemap',
      code_file: filename,
      debug_id,
    });
  });
}

/**
 * This function adds all used integrations to the SDK info in the event.
 * @param event The event that will be filled with all integrations.
 */
function applyIntegrationsMetadata(event, integrationNames) {
  if (integrationNames.length > 0) {
    event.sdk = event.sdk || {};
    event.sdk.integrations = [...(event.sdk.integrations || []), ...integrationNames];
  }
}

/**
 * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
 * Normalized keys:
 * - `breadcrumbs.data`
 * - `user`
 * - `contexts`
 * - `extra`
 * @param event Event
 * @returns Normalized event
 */
function normalizeEvent(event, depth, maxBreadth) {
  if (!event) {
    return null;
  }

  const normalized = {
    ...event,
    ...(event.breadcrumbs && {
      breadcrumbs: event.breadcrumbs.map(b => ({
        ...b,
        ...(b.data && {
          data: (0,_utils_hoist_normalize_js__WEBPACK_IMPORTED_MODULE_8__.normalize)(b.data, depth, maxBreadth),
        }),
      })),
    }),
    ...(event.user && {
      user: (0,_utils_hoist_normalize_js__WEBPACK_IMPORTED_MODULE_8__.normalize)(event.user, depth, maxBreadth),
    }),
    ...(event.contexts && {
      contexts: (0,_utils_hoist_normalize_js__WEBPACK_IMPORTED_MODULE_8__.normalize)(event.contexts, depth, maxBreadth),
    }),
    ...(event.extra && {
      extra: (0,_utils_hoist_normalize_js__WEBPACK_IMPORTED_MODULE_8__.normalize)(event.extra, depth, maxBreadth),
    }),
  };

  // event.contexts.trace stores information about a Transaction. Similarly,
  // event.spans[] stores information about child Spans. Given that a
  // Transaction is conceptually a Span, normalization should apply to both
  // Transactions and Spans consistently.
  // For now the decision is to skip normalization of Transactions and Spans,
  // so this block overwrites the normalized event to add back the original
  // Transaction information prior to normalization.
  if (event.contexts && event.contexts.trace && normalized.contexts) {
    normalized.contexts.trace = event.contexts.trace;

    // event.contexts.trace.data may contain circular/dangerous data so we need to normalize it
    if (event.contexts.trace.data) {
      normalized.contexts.trace.data = (0,_utils_hoist_normalize_js__WEBPACK_IMPORTED_MODULE_8__.normalize)(event.contexts.trace.data, depth, maxBreadth);
    }
  }

  // event.spans[].data may contain circular/dangerous data so we need to normalize it
  if (event.spans) {
    normalized.spans = event.spans.map(span => {
      return {
        ...span,
        ...(span.data && {
          data: (0,_utils_hoist_normalize_js__WEBPACK_IMPORTED_MODULE_8__.normalize)(span.data, depth, maxBreadth),
        }),
      };
    });
  }

  // event.contexts.flags (FeatureFlagContext) stores context for our feature
  // flag integrations. It has a greater nesting depth than our other typed
  // Contexts, so we re-normalize with a fixed depth of 3 here. We do not want
  // to skip this in case of conflicting, user-provided context.
  if (event.contexts && event.contexts.flags && normalized.contexts) {
    normalized.contexts.flags = (0,_utils_hoist_normalize_js__WEBPACK_IMPORTED_MODULE_8__.normalize)(event.contexts.flags, 3, maxBreadth);
  }

  return normalized;
}

function getFinalScope(
  scope,
  captureContext,
) {
  if (!captureContext) {
    return scope;
  }

  const finalScope = scope ? scope.clone() : new _scope_js__WEBPACK_IMPORTED_MODULE_9__.Scope();
  finalScope.update(captureContext);
  return finalScope;
}

/**
 * Parse either an `EventHint` directly, or convert a `CaptureContext` to an `EventHint`.
 * This is used to allow to update method signatures that used to accept a `CaptureContext` but should now accept an `EventHint`.
 */
function parseEventHintOrCaptureContext(
  hint,
) {
  if (!hint) {
    return undefined;
  }

  // If you pass a Scope or `() => Scope` as CaptureContext, we just return this as captureContext
  if (hintIsScopeOrFunction(hint)) {
    return { captureContext: hint };
  }

  if (hintIsScopeContext(hint)) {
    return {
      captureContext: hint,
    };
  }

  return hint;
}

function hintIsScopeOrFunction(
  hint,
) {
  return hint instanceof _scope_js__WEBPACK_IMPORTED_MODULE_9__.Scope || typeof hint === 'function';
}

const captureContextKeys = [
  'user',
  'level',
  'extra',
  'contexts',
  'tags',
  'fingerprint',
  'requestSession',
  'propagationContext',
] ;

function hintIsScopeContext(hint) {
  return Object.keys(hint).some(key => captureContextKeys.includes(key ));
}


//# sourceMappingURL=prepareEvent.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils/spanOnScope.js":
/*!******************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils/spanOnScope.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _getSpanForScope: () => (/* binding */ _getSpanForScope),
/* harmony export */   _setSpanForScope: () => (/* binding */ _setSpanForScope)
/* harmony export */ });
/* harmony import */ var _utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils-hoist/object.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/object.js");


const SCOPE_SPAN_FIELD = '_sentrySpan';

/**
 * Set the active span for a given scope.
 * NOTE: This should NOT be used directly, but is only used internally by the trace methods.
 */
function _setSpanForScope(scope, span) {
  if (span) {
    (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__.addNonEnumerableProperty)(scope , SCOPE_SPAN_FIELD, span);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete (scope )[SCOPE_SPAN_FIELD];
  }
}

/**
 * Get the active span for a given scope.
 * NOTE: This should NOT be used directly, but is only used internally by the trace methods.
 */
function _getSpanForScope(scope) {
  return scope[SCOPE_SPAN_FIELD];
}


//# sourceMappingURL=spanOnScope.js.map


/***/ }),

/***/ "./node_modules/@sentry/core/build/esm/utils/spanUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sentry/core/build/esm/utils/spanUtils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TRACE_FLAG_NONE: () => (/* binding */ TRACE_FLAG_NONE),
/* harmony export */   TRACE_FLAG_SAMPLED: () => (/* binding */ TRACE_FLAG_SAMPLED),
/* harmony export */   addChildSpanToSpan: () => (/* binding */ addChildSpanToSpan),
/* harmony export */   getActiveSpan: () => (/* binding */ getActiveSpan),
/* harmony export */   getRootSpan: () => (/* binding */ getRootSpan),
/* harmony export */   getSpanDescendants: () => (/* binding */ getSpanDescendants),
/* harmony export */   getStatusMessage: () => (/* binding */ getStatusMessage),
/* harmony export */   removeChildSpanFromSpan: () => (/* binding */ removeChildSpanFromSpan),
/* harmony export */   showSpanDropWarning: () => (/* binding */ showSpanDropWarning),
/* harmony export */   spanIsSampled: () => (/* binding */ spanIsSampled),
/* harmony export */   spanTimeInputToSeconds: () => (/* binding */ spanTimeInputToSeconds),
/* harmony export */   spanToJSON: () => (/* binding */ spanToJSON),
/* harmony export */   spanToTraceContext: () => (/* binding */ spanToTraceContext),
/* harmony export */   spanToTraceHeader: () => (/* binding */ spanToTraceHeader),
/* harmony export */   spanToTransactionTraceContext: () => (/* binding */ spanToTransactionTraceContext),
/* harmony export */   updateMetricSummaryOnActiveSpan: () => (/* binding */ updateMetricSummaryOnActiveSpan),
/* harmony export */   updateSpanName: () => (/* binding */ updateSpanName)
/* harmony export */ });
/* harmony import */ var _asyncContext_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../asyncContext/index.js */ "./node_modules/@sentry/core/build/esm/asyncContext/index.js");
/* harmony import */ var _carrier_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../carrier.js */ "./node_modules/@sentry/core/build/esm/carrier.js");
/* harmony import */ var _currentScopes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../currentScopes.js */ "./node_modules/@sentry/core/build/esm/currentScopes.js");
/* harmony import */ var _metrics_metric_summary_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../metrics/metric-summary.js */ "./node_modules/@sentry/core/build/esm/metrics/metric-summary.js");
/* harmony import */ var _semanticAttributes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../semanticAttributes.js */ "./node_modules/@sentry/core/build/esm/semanticAttributes.js");
/* harmony import */ var _tracing_spanstatus_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tracing/spanstatus.js */ "./node_modules/@sentry/core/build/esm/tracing/spanstatus.js");
/* harmony import */ var _utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils-hoist/logger.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/logger.js");
/* harmony import */ var _utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils-hoist/object.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/object.js");
/* harmony import */ var _utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils-hoist/propagationContext.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/propagationContext.js");
/* harmony import */ var _utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils-hoist/time.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/time.js");
/* harmony import */ var _utils_hoist_tracing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils-hoist/tracing.js */ "./node_modules/@sentry/core/build/esm/utils-hoist/tracing.js");
/* harmony import */ var _spanOnScope_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spanOnScope.js */ "./node_modules/@sentry/core/build/esm/utils/spanOnScope.js");













// These are aligned with OpenTelemetry trace flags
const TRACE_FLAG_NONE = 0x0;
const TRACE_FLAG_SAMPLED = 0x1;

// todo(v9): Remove this once we've stopped dropping spans via `beforeSendSpan`
let hasShownSpanDropWarning = false;

/**
 * Convert a span to a trace context, which can be sent as the `trace` context in an event.
 * By default, this will only include trace_id, span_id & parent_span_id.
 * If `includeAllData` is true, it will also include data, op, status & origin.
 */
function spanToTransactionTraceContext(span) {
  const { spanId: span_id, traceId: trace_id } = span.spanContext();
  const { data, op, parent_span_id, status, origin } = spanToJSON(span);

  return (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__.dropUndefinedKeys)({
    parent_span_id,
    span_id,
    trace_id,
    data,
    op,
    status,
    origin,
  });
}

/**
 * Convert a span to a trace context, which can be sent as the `trace` context in a non-transaction event.
 */
function spanToTraceContext(span) {
  const { spanId, traceId: trace_id, isRemote } = span.spanContext();

  // If the span is remote, we use a random/virtual span as span_id to the trace context,
  // and the remote span as parent_span_id
  const parent_span_id = isRemote ? spanId : spanToJSON(span).parent_span_id;
  const span_id = isRemote ? (0,_utils_hoist_propagationContext_js__WEBPACK_IMPORTED_MODULE_1__.generateSpanId)() : spanId;

  return (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__.dropUndefinedKeys)({
    parent_span_id,
    span_id,
    trace_id,
  });
}

/**
 * Convert a Span to a Sentry trace header.
 */
function spanToTraceHeader(span) {
  const { traceId, spanId } = span.spanContext();
  const sampled = spanIsSampled(span);
  return (0,_utils_hoist_tracing_js__WEBPACK_IMPORTED_MODULE_2__.generateSentryTraceHeader)(traceId, spanId, sampled);
}

/**
 * Convert a span time input into a timestamp in seconds.
 */
function spanTimeInputToSeconds(input) {
  if (typeof input === 'number') {
    return ensureTimestampInSeconds(input);
  }

  if (Array.isArray(input)) {
    // See {@link HrTime} for the array-based time format
    return input[0] + input[1] / 1e9;
  }

  if (input instanceof Date) {
    return ensureTimestampInSeconds(input.getTime());
  }

  return (0,_utils_hoist_time_js__WEBPACK_IMPORTED_MODULE_3__.timestampInSeconds)();
}

/**
 * Converts a timestamp to second, if it was in milliseconds, or keeps it as second.
 */
function ensureTimestampInSeconds(timestamp) {
  const isMs = timestamp > 9999999999;
  return isMs ? timestamp / 1000 : timestamp;
}

/**
 * Convert a span to a JSON representation.
 */
// Note: Because of this, we currently have a circular type dependency (which we opted out of in package.json).
// This is not avoidable as we need `spanToJSON` in `spanUtils.ts`, which in turn is needed by `span.ts` for backwards compatibility.
// And `spanToJSON` needs the Span class from `span.ts` to check here.
function spanToJSON(span) {
  if (spanIsSentrySpan(span)) {
    return span.getSpanJSON();
  }

  try {
    const { spanId: span_id, traceId: trace_id } = span.spanContext();

    // Handle a span from @opentelemetry/sdk-base-trace's `Span` class
    if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
      const { attributes, startTime, name, endTime, parentSpanId, status } = span;

      return (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__.dropUndefinedKeys)({
        span_id,
        trace_id,
        data: attributes,
        description: name,
        parent_span_id: parentSpanId,
        start_timestamp: spanTimeInputToSeconds(startTime),
        // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
        timestamp: spanTimeInputToSeconds(endTime) || undefined,
        status: getStatusMessage(status),
        op: attributes[_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_4__.SEMANTIC_ATTRIBUTE_SENTRY_OP],
        origin: attributes[_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_4__.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] ,
        _metrics_summary: (0,_metrics_metric_summary_js__WEBPACK_IMPORTED_MODULE_5__.getMetricSummaryJsonForSpan)(span),
      });
    }

    // Finally, at least we have `spanContext()`....
    return {
      span_id,
      trace_id,
    };
  } catch (e) {
    return {};
  }
}

function spanIsOpenTelemetrySdkTraceBaseSpan(span) {
  const castSpan = span ;
  return !!castSpan.attributes && !!castSpan.startTime && !!castSpan.name && !!castSpan.endTime && !!castSpan.status;
}

/** Exported only for tests. */

/**
 * Sadly, due to circular dependency checks we cannot actually import the Span class here and check for instanceof.
 * :( So instead we approximate this by checking if it has the `getSpanJSON` method.
 */
function spanIsSentrySpan(span) {
  return typeof (span ).getSpanJSON === 'function';
}

/**
 * Returns true if a span is sampled.
 * In most cases, you should just use `span.isRecording()` instead.
 * However, this has a slightly different semantic, as it also returns false if the span is finished.
 * So in the case where this distinction is important, use this method.
 */
function spanIsSampled(span) {
  // We align our trace flags with the ones OpenTelemetry use
  // So we also check for sampled the same way they do.
  const { traceFlags } = span.spanContext();
  return traceFlags === TRACE_FLAG_SAMPLED;
}

/** Get the status message to use for a JSON representation of a span. */
function getStatusMessage(status) {
  if (!status || status.code === _tracing_spanstatus_js__WEBPACK_IMPORTED_MODULE_6__.SPAN_STATUS_UNSET) {
    return undefined;
  }

  if (status.code === _tracing_spanstatus_js__WEBPACK_IMPORTED_MODULE_6__.SPAN_STATUS_OK) {
    return 'ok';
  }

  return status.message || 'unknown_error';
}

const CHILD_SPANS_FIELD = '_sentryChildSpans';
const ROOT_SPAN_FIELD = '_sentryRootSpan';

/**
 * Adds an opaque child span reference to a span.
 */
function addChildSpanToSpan(span, childSpan) {
  // We store the root span reference on the child span
  // We need this for `getRootSpan()` to work
  const rootSpan = span[ROOT_SPAN_FIELD] || span;
  (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__.addNonEnumerableProperty)(childSpan , ROOT_SPAN_FIELD, rootSpan);

  // We store a list of child spans on the parent span
  // We need this for `getSpanDescendants()` to work
  if (span[CHILD_SPANS_FIELD]) {
    span[CHILD_SPANS_FIELD].add(childSpan);
  } else {
    (0,_utils_hoist_object_js__WEBPACK_IMPORTED_MODULE_0__.addNonEnumerableProperty)(span, CHILD_SPANS_FIELD, new Set([childSpan]));
  }
}

/** This is only used internally by Idle Spans. */
function removeChildSpanFromSpan(span, childSpan) {
  if (span[CHILD_SPANS_FIELD]) {
    span[CHILD_SPANS_FIELD].delete(childSpan);
  }
}

/**
 * Returns an array of the given span and all of its descendants.
 */
function getSpanDescendants(span) {
  const resultSet = new Set();

  function addSpanChildren(span) {
    // This exit condition is required to not infinitely loop in case of a circular dependency.
    if (resultSet.has(span)) {
      return;
      // We want to ignore unsampled spans (e.g. non recording spans)
    } else if (spanIsSampled(span)) {
      resultSet.add(span);
      const childSpans = span[CHILD_SPANS_FIELD] ? Array.from(span[CHILD_SPANS_FIELD]) : [];
      for (const childSpan of childSpans) {
        addSpanChildren(childSpan);
      }
    }
  }

  addSpanChildren(span);

  return Array.from(resultSet);
}

/**
 * Returns the root span of a given span.
 */
function getRootSpan(span) {
  return span[ROOT_SPAN_FIELD] || span;
}

/**
 * Returns the currently active span.
 */
function getActiveSpan() {
  const carrier = (0,_carrier_js__WEBPACK_IMPORTED_MODULE_7__.getMainCarrier)();
  const acs = (0,_asyncContext_index_js__WEBPACK_IMPORTED_MODULE_8__.getAsyncContextStrategy)(carrier);
  if (acs.getActiveSpan) {
    return acs.getActiveSpan();
  }

  return (0,_spanOnScope_js__WEBPACK_IMPORTED_MODULE_9__._getSpanForScope)((0,_currentScopes_js__WEBPACK_IMPORTED_MODULE_10__.getCurrentScope)());
}

/**
 * Updates the metric summary on the currently active span
 */
function updateMetricSummaryOnActiveSpan(
  metricType,
  sanitizedName,
  value,
  unit,
  tags,
  bucketKey,
) {
  const span = getActiveSpan();
  if (span) {
    (0,_metrics_metric_summary_js__WEBPACK_IMPORTED_MODULE_5__.updateMetricSummaryOnSpan)(span, metricType, sanitizedName, value, unit, tags, bucketKey);
  }
}

/**
 * Logs a warning once if `beforeSendSpan` is used to drop spans.
 *
 * todo(v9): Remove this once we've stopped dropping spans via `beforeSendSpan`.
 */
function showSpanDropWarning() {
  if (!hasShownSpanDropWarning) {
    (0,_utils_hoist_logger_js__WEBPACK_IMPORTED_MODULE_11__.consoleSandbox)(() => {
      // eslint-disable-next-line no-console
      console.warn(
        '[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.',
      );
    });
    hasShownSpanDropWarning = true;
  }
}

/**
 * Updates the name of the given span and ensures that the span name is not
 * overwritten by the Sentry SDK.
 *
 * Use this function instead of `span.updateName()` if you want to make sure that
 * your name is kept. For some spans, for example root `http.server` spans the
 * Sentry SDK would otherwise overwrite the span name with a high-quality name
 * it infers when the span ends.
 *
 * Use this function in server code or when your span is started on the server
 * and on the client (browser). If you only update a span name on the client,
 * you can also use `span.updateName()` the SDK does not overwrite the name.
 *
 * @param span - The span to update the name of.
 * @param name - The name to set on the span.
 */
function updateSpanName(span, name) {
  span.updateName(name);
  span.setAttributes({
    [_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_4__.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: 'custom',
    [_semanticAttributes_js__WEBPACK_IMPORTED_MODULE_4__.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: name,
  });
}


//# sourceMappingURL=spanUtils.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./popup.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/core/build/esm/exports.js");
/* harmony import */ var posthog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! posthog-js */ "./node_modules/posthog-js/dist/module.js");
/* harmony import */ var _functions_checkErrors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/checkErrors.js */ "./functions/checkErrors.js");
/* harmony import */ var _functions_customDrawImage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/customDrawImage.js */ "./functions/customDrawImage.js");
/* harmony import */ var _functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/customDrawText.js */ "./functions/customDrawText.js");
/* harmony import */ var _functions_generateQrCode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/generateQrCode.js */ "./functions/generateQrCode.js");
/* harmony import */ var _functions_getCurrentDate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/getCurrentDate.js */ "./functions/getCurrentDate.js");
/* harmony import */ var _functions_getLoginUserName_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/getLoginUserName.js */ "./functions/getLoginUserName.js");
/* harmony import */ var _functions_hexToRgb_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/hexToRgb.js */ "./functions/hexToRgb.js");
/* harmony import */ var _functions_parsePageContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/parsePageContent.js */ "./functions/parsePageContent.js");
/* harmony import */ var _functions_setupColorSelection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions/setupColorSelection.js */ "./functions/setupColorSelection.js");
/* harmony import */ var _functions_switchInterface_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functions/switchInterface.js */ "./functions/switchInterface.js");













posthog_js__WEBPACK_IMPORTED_MODULE_0__["default"].init('phc_pYIs6fE5pTEQrRHEmlrx0l0pjYdBE3sTPXyQlHpaYmQ', {
	api_host: 'https://us.i.posthog.com',
})

const { PDFDocument } = PDFLib // получаем доступ к pdf-lib
// эта функция срабатывает при нажатии на кнопку 'Create'
async function generatePDF() {
	_sentry_browser__WEBPACK_IMPORTED_MODULE_11__.captureMessage('Something went wrong', 'error')
	try {
		throw new Error('Something went wrong')
	} catch (error) {
		_sentry_browser__WEBPACK_IMPORTED_MODULE_11__.captureException(error)
	}

	const selectedColor = (0,_functions_setupColorSelection_js__WEBPACK_IMPORTED_MODULE_9__.getSelectedColor)()

	const [activeTab] = await chrome.tabs.query({
		active: true,
		currentWindow: true,
	}) // получаем активную вкладку пользователя

	// если пользователь не находится на странице devpost.com выводим alert
	if (!activeTab || !activeTab.url.includes('devpost.com')) {
		alert('Please open the hackathon page on the website devpost.com')
		return
	}

	// показываем loader на время создания сертификата и скрываем result если он есть
	(0,_functions_switchInterface_js__WEBPACK_IMPORTED_MODULE_10__.switchInterface)('openLoader')

	// выполняем парсинг
	const [result] = await chrome.scripting.executeScript({
		target: { tabId: activeTab.id },
		func: _functions_parsePageContent_js__WEBPACK_IMPORTED_MODULE_8__.parsePageContent,
	})

	const { dateHackathon, titleHackathon, judges } = result.result // деструктуризиация результата

	// получаем имя пользователя
	const { userName, userError } = await (0,_functions_getLoginUserName_js__WEBPACK_IMPORTED_MODULE_6__.getLoginUserName)(activeTab)

	// перед началом создания сертификата проверяем введенные данные
	const error = (0,_functions_checkErrors_js__WEBPACK_IMPORTED_MODULE_1__.checkErrors)(userName, userError, selectedColor, judges)

	if (error) {
		alert(error)
		;(0,_functions_switchInterface_js__WEBPACK_IMPORTED_MODULE_10__.switchInterface)('closeLoader')
		return
	}

	// загружаем шаблон PDF из папки templates и преобразовываем его в формат ArrayBuffer
	const existingPdfBytes = await fetch(`public/templates/${selectedColor}.pdf`).then(res =>
		res.arrayBuffer()
	)
	const pdfDoc = await PDFDocument.load(existingPdfBytes) // загружаем PDF документ из ArrayBuffer
	const page = pdfDoc.getPages()[0] // получаем первую страницу документа

	const certificateColors = {
		black: '#000000',
		blue: '#0d2562',
		red: '#ab0909',
		green: '#0d742c',
	} // цвета сертификата

	const { r, g, b } = (0,_functions_hexToRgb_js__WEBPACK_IMPORTED_MODULE_7__.hexToRgb)(certificateColors[selectedColor]) // конвертируем выбранный цвет из hex в RGB
	const textColor = PDFLib.rgb(r, g, b) // передаем цвет в библиотеку
	const customFont = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold) // загружаем шрифт из шрифтов PDFLib
	const width = 1123 // ширина страницы сертификата

	// ДОБАВЛЯЕМ НА СТРАНИЦУ ШАБЛОНА НУЖНЫЕ ДАННЫЕ
	// ИМЯ
	const nameText = userName.toUpperCase() // переводим текст в upper case
	const nameX = width / 2 - customFont.widthOfTextAtSize(nameText, 72) / 2 // Позиция по оси X
	;(0,_functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_3__.customDrawText)(page, nameText, nameX, 400, 72, customFont, textColor) // добавляем на страницу

	// НАЗВАНИЕ XАКАТОНА
	const titleX = width / 2 - customFont.widthOfTextAtSize(titleHackathon, 25) / 2
	;(0,_functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_3__.customDrawText)(page, titleHackathon, titleX, 295, 25, customFont, textColor)

	// ДАТЫ ПРОВЕДЕНИЯ
	const dateHackathonX = width / 2 - customFont.widthOfTextAtSize(dateHackathon, 20) / 2
	;(0,_functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_3__.customDrawText)(page, dateHackathon, dateHackathonX, 270, 20, customFont, textColor)

	// ТЕКУЩАЯ ДАТА ДЛЯ ПОЛЯ date of issue
	const currentDate = (0,_functions_getCurrentDate_js__WEBPACK_IMPORTED_MODULE_5__.getCurrentDate)() // получаем текущую дату
	;(0,_functions_customDrawText_js__WEBPACK_IMPORTED_MODULE_3__.customDrawText)(page, currentDate, 885, 108, 19, customFont, textColor)

	// QR CODE
	const qrImage = await (0,_functions_generateQrCode_js__WEBPACK_IMPORTED_MODULE_4__.generateQrCode)(pdfDoc, activeTab.url)
	;(0,_functions_customDrawImage_js__WEBPACK_IMPORTED_MODULE_2__.customDrawImage)(page, qrImage, 50, 50, 160, 160)

	const pdfBytes = await pdfDoc.save() // сохраняем изменения
	const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' }) // создаем Blob для просмотра и скачивания
	const pdfUrl = URL.createObjectURL(pdfBlob) // создаем URL для просмотра Blob

	const viewLink = document.getElementById('certificateLink') // создание ссылки для просмотра
	viewLink.href = pdfUrl

	const formattedName = userName.replace(/\s+/g, '_') // форматируем имя для правильного имени файла
	const downloadButton = document.getElementById('downloadButton') // создание кнопки для скачивания
	downloadButton.addEventListener('click', () => {
		const downloadLink = document.createElement('a') // создаем элемент ссылку
		downloadLink.href = pdfUrl // адрес ссылки на
		downloadLink.download = `${formattedName}_certificate.pdf` // имя файла
		downloadLink.click() // эмулирует нажатие
	})

	// скрываем loader и отображаем result
	;(0,_functions_switchInterface_js__WEBPACK_IMPORTED_MODULE_10__.switchInterface)('result')
	posthog_js__WEBPACK_IMPORTED_MODULE_0__["default"].capture('certificate_generated', { certOwner: `${nameText}` })
}

// добавляем слушатели событий на кнопки 'create' и выбор цвета
document.getElementById('generateButton').addEventListener('click', generatePDF)
document.addEventListener('DOMContentLoaded', _functions_setupColorSelection_js__WEBPACK_IMPORTED_MODULE_9__.setupColorSelection)

})();

/******/ })()
;
//# sourceMappingURL=main.js.map