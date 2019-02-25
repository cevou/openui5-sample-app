(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{364:function(e,t,r){var o,n;
/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */o=[r(398),r(5)],void 0===(n=function(e,t){"use strict";var r=Object.create(null),o=Object.create(null);return o.register=function(o,n){return t(o,"sServiceFactoryName must not be empty, null or undefined"),t(n instanceof e,"oServiceFactory must be an instance of sap.ui.core.service.ServiceFactory"),r[o]=n,this},o.unregister=function(e){return t(e,"sServiceFactoryName must not be empty, null or undefined"),delete r[e],this},o.get=function(e){return r[e]},o}.apply(t,o))||(e.exports=n)},398:function(e,t,r){var o,n;
/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */o=[r(8),r(399),r(5)],void 0===(n=function(e,t,r){"use strict";var o=e.extend("sap.ui.core.service.ServiceFactory",{metadata:{library:"sap.ui.core"},constructor:function(o){e.apply(this);var n="object"==typeof o?t.create(o):o;r(!n||n&&"function"==typeof n,"The service constructor either should be undefined or a constructor function!"),this._fnService=n}});return o.prototype.destroy=function(){e.prototype.destroy.apply(this,arguments),delete this._fnService},o.prototype.createInstance=function(e){return"function"==typeof this._fnService?Promise.resolve(new this._fnService(e)):Promise.reject(new Error("Usage of sap.ui.core.service.ServiceFactory requires a service constructor function to create a new service instance or to override the createInstance function!"))},o}.apply(t,o))||(e.exports=n)},399:function(e,t,r){var o,n;
/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */o=[r(8),r(5),r(0)],void 0===(n=function(e,t,r){"use strict";var o=e.extend("sap.ui.core.service.Service",{metadata:{abstract:!0,library:"sap.ui.core"},constructor:function(r){e.apply(this),r&&(t("object"==typeof r.scopeObject,"The service context requires a scope object!"),t("string"==typeof r.scopeType,"The service context requires a scope type!")),this._oServiceContext=r,"function"==typeof this.init&&this.init()}});return o.create=function(e){var t=function(t){for(var n in e)n.match(/^(metadata|constructor|getContext|destroy)$/)?r.warning("The member "+n+" is not allowed for anonymous service declaration and will be ignored!"):this[n]=e[n];o.apply(this,arguments)};return t.prototype=Object.create(o.prototype),t},o.prototype.getInterface=function(){var e=Object.create(null);for(var t in this)t.match(/^_|^metadata$|^constructor$|^getInterface$|^destroy$|^init$|^exit$|^getContext$/)||"function"!=typeof this[t]||(e[t]=this[t].bind(this));return this.getInterface=function(){return e},e},o.prototype.getContext=function(){return this._oServiceContext},o.prototype.destroy=function(){"function"==typeof this.exit&&this.exit(),e.prototype.destroy.apply(this,arguments),delete this._oServiceContext},o}.apply(t,o))||(e.exports=n)}}]);
//# sourceMappingURL=4.js.map