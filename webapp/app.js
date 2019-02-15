// Load UI5 Core
import "@openui5/sap.ui.core/src/sap/ui/thirdparty/baseuri";
import "@openui5/sap.ui.core/src/sap/ui/thirdparty/es6-promise";
import "@openui5/sap.ui.core/src/sap/ui/thirdparty/es6-object-assign";
import "@openui5/sap.ui.core/src/sap/ui/thirdparty/es6-string-methods";
import "@openui5/sap.ui.core/src/ui5loader";
import "@openui5/sap.ui.core/src/sap/ui/core/Core";

import "./Component";
import "./manifest";

sap.ui.getCore().boot();
