System.config({
  "transpiler": "traceur",
  "paths": {
    "*": "dist/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "app-bundle": [
      "npm:process@0.10.1/browser",
      "npm:highlight.js@8.6.0/lib/languages/1c",
      "npm:highlight.js@8.6.0/lib/languages/actionscript",
      "npm:highlight.js@8.6.0/lib/languages/apache",
      "npm:highlight.js@8.6.0/lib/languages/applescript",
      "npm:highlight.js@8.6.0/lib/languages/armasm",
      "npm:highlight.js@8.6.0/lib/languages/xml",
      "npm:highlight.js@8.6.0/lib/languages/asciidoc",
      "npm:highlight.js@8.6.0/lib/languages/aspectj",
      "npm:highlight.js@8.6.0/lib/languages/autohotkey",
      "npm:highlight.js@8.6.0/lib/languages/avrasm",
      "npm:highlight.js@8.6.0/lib/languages/axapta",
      "npm:highlight.js@8.6.0/lib/languages/bash",
      "npm:highlight.js@8.6.0/lib/languages/brainfuck",
      "npm:highlight.js@8.6.0/lib/languages/cal",
      "npm:highlight.js@8.6.0/lib/languages/capnproto",
      "npm:highlight.js@8.6.0/lib/languages/ceylon",
      "npm:highlight.js@8.6.0/lib/languages/clojure",
      "npm:highlight.js@8.6.0/lib/languages/clojure-repl",
      "npm:highlight.js@8.6.0/lib/languages/cmake",
      "npm:highlight.js@8.6.0/lib/languages/coffeescript",
      "npm:highlight.js@8.6.0/lib/languages/cpp",
      "npm:highlight.js@8.6.0/lib/languages/cs",
      "npm:highlight.js@8.6.0/lib/languages/css",
      "npm:highlight.js@8.6.0/lib/languages/d",
      "npm:highlight.js@8.6.0/lib/languages/markdown",
      "npm:highlight.js@8.6.0/lib/languages/dart",
      "npm:highlight.js@8.6.0/lib/languages/delphi",
      "npm:highlight.js@8.6.0/lib/languages/diff",
      "npm:highlight.js@8.6.0/lib/languages/django",
      "npm:highlight.js@8.6.0/lib/languages/dns",
      "npm:highlight.js@8.6.0/lib/languages/dockerfile",
      "npm:highlight.js@8.6.0/lib/languages/dos",
      "npm:highlight.js@8.6.0/lib/languages/dust",
      "npm:highlight.js@8.6.0/lib/languages/elixir",
      "npm:highlight.js@8.6.0/lib/languages/ruby",
      "npm:highlight.js@8.6.0/lib/languages/erb",
      "npm:highlight.js@8.6.0/lib/languages/erlang-repl",
      "npm:highlight.js@8.6.0/lib/languages/erlang",
      "npm:highlight.js@8.6.0/lib/languages/fix",
      "npm:highlight.js@8.6.0/lib/languages/fortran",
      "npm:highlight.js@8.6.0/lib/languages/fsharp",
      "npm:highlight.js@8.6.0/lib/languages/gcode",
      "npm:highlight.js@8.6.0/lib/languages/gherkin",
      "npm:highlight.js@8.6.0/lib/languages/glsl",
      "npm:highlight.js@8.6.0/lib/languages/go",
      "npm:highlight.js@8.6.0/lib/languages/gradle",
      "npm:highlight.js@8.6.0/lib/languages/groovy",
      "npm:highlight.js@8.6.0/lib/languages/haml",
      "npm:highlight.js@8.6.0/lib/languages/handlebars",
      "npm:highlight.js@8.6.0/lib/languages/haskell",
      "npm:highlight.js@8.6.0/lib/languages/haxe",
      "npm:highlight.js@8.6.0/lib/languages/http",
      "npm:highlight.js@8.6.0/lib/languages/inform7",
      "npm:highlight.js@8.6.0/lib/languages/ini",
      "npm:highlight.js@8.6.0/lib/languages/java",
      "npm:highlight.js@8.6.0/lib/languages/javascript",
      "npm:highlight.js@8.6.0/lib/languages/json",
      "npm:highlight.js@8.6.0/lib/languages/julia",
      "npm:highlight.js@8.6.0/lib/languages/kotlin",
      "npm:highlight.js@8.6.0/lib/languages/lasso",
      "npm:highlight.js@8.6.0/lib/languages/less",
      "npm:highlight.js@8.6.0/lib/languages/lisp",
      "npm:highlight.js@8.6.0/lib/languages/livecodeserver",
      "npm:highlight.js@8.6.0/lib/languages/livescript",
      "npm:highlight.js@8.6.0/lib/languages/lua",
      "npm:highlight.js@8.6.0/lib/languages/makefile",
      "npm:highlight.js@8.6.0/lib/languages/mathematica",
      "npm:highlight.js@8.6.0/lib/languages/matlab",
      "npm:highlight.js@8.6.0/lib/languages/mel",
      "npm:highlight.js@8.6.0/lib/languages/mercury",
      "npm:highlight.js@8.6.0/lib/languages/mizar",
      "npm:highlight.js@8.6.0/lib/languages/monkey",
      "npm:highlight.js@8.6.0/lib/languages/nginx",
      "npm:highlight.js@8.6.0/lib/languages/nimrod",
      "npm:highlight.js@8.6.0/lib/languages/nix",
      "npm:highlight.js@8.6.0/lib/languages/nsis",
      "npm:highlight.js@8.6.0/lib/languages/objectivec",
      "npm:highlight.js@8.6.0/lib/languages/ocaml",
      "npm:highlight.js@8.6.0/lib/languages/openscad",
      "npm:highlight.js@8.6.0/lib/languages/oxygene",
      "npm:highlight.js@8.6.0/lib/languages/parser3",
      "npm:highlight.js@8.6.0/lib/languages/perl",
      "npm:highlight.js@8.6.0/lib/languages/pf",
      "npm:highlight.js@8.6.0/lib/languages/php",
      "npm:highlight.js@8.6.0/lib/languages/powershell",
      "npm:base64-js@0.0.8/lib/b64",
      "npm:ieee754@1.1.5/index",
      "npm:is-array@1.0.1/index",
      "npm:highlight.js@8.6.0/lib/languages/profile",
      "npm:highlight.js@8.6.0/lib/languages/prolog",
      "npm:highlight.js@8.6.0/lib/languages/protobuf",
      "npm:highlight.js@8.6.0/lib/languages/puppet",
      "npm:highlight.js@8.6.0/lib/languages/python",
      "npm:highlight.js@8.6.0/lib/languages/q",
      "npm:highlight.js@8.6.0/lib/languages/r",
      "npm:highlight.js@8.6.0/lib/languages/rib",
      "npm:highlight.js@8.6.0/lib/languages/roboconf",
      "npm:highlight.js@8.6.0/lib/languages/rsl",
      "npm:highlight.js@8.6.0/lib/languages/ruleslanguage",
      "npm:highlight.js@8.6.0/lib/languages/rust",
      "npm:highlight.js@8.6.0/lib/languages/scala",
      "npm:highlight.js@8.6.0/lib/languages/scheme",
      "npm:highlight.js@8.6.0/lib/languages/scilab",
      "npm:highlight.js@8.6.0/lib/languages/scss",
      "npm:highlight.js@8.6.0/lib/languages/smali",
      "npm:highlight.js@8.6.0/lib/languages/smalltalk",
      "npm:highlight.js@8.6.0/lib/languages/sml",
      "npm:highlight.js@8.6.0/lib/languages/sql",
      "npm:highlight.js@8.6.0/lib/languages/stata",
      "npm:highlight.js@8.6.0/lib/languages/step21",
      "npm:highlight.js@8.6.0/lib/languages/stylus",
      "npm:highlight.js@8.6.0/lib/languages/swift",
      "npm:highlight.js@8.6.0/lib/languages/tcl",
      "npm:highlight.js@8.6.0/lib/languages/tex",
      "npm:highlight.js@8.6.0/lib/languages/thrift",
      "npm:highlight.js@8.6.0/lib/languages/tp",
      "npm:highlight.js@8.6.0/lib/languages/twig",
      "npm:highlight.js@8.6.0/lib/languages/typescript",
      "npm:highlight.js@8.6.0/lib/languages/vala",
      "npm:highlight.js@8.6.0/lib/languages/vbnet",
      "npm:highlight.js@8.6.0/lib/languages/vbscript",
      "npm:highlight.js@8.6.0/lib/languages/vbscript-html",
      "npm:highlight.js@8.6.0/lib/languages/verilog",
      "npm:highlight.js@8.6.0/lib/languages/vhdl",
      "npm:highlight.js@8.6.0/lib/languages/vim",
      "npm:highlight.js@8.6.0/lib/languages/x86asm",
      "npm:highlight.js@8.6.0/lib/languages/xl",
      "npm:process@0.10.1",
      "npm:base64-js@0.0.8",
      "npm:ieee754@1.1.5",
      "npm:is-array@1.0.1",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:buffer@3.2.2/index",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:buffer@3.2.2",
      "npm:highlight.js@8.6.0/lib/highlight",
      "github:jspm/nodelibs-buffer@0.1.0/index",
      "github:jspm/nodelibs-buffer@0.1.0",
      "npm:highlight.js@8.6.0/lib/languages/processing",
      "npm:highlight.js@8.6.0/lib/index",
      "npm:highlight.js@8.6.0",
      "npm:core-js@0.9.13/modules/$.fw",
      "npm:core-js@0.9.13/modules/$.dom-create",
      "npm:core-js@0.9.13/modules/$.shared",
      "npm:core-js@0.9.13/modules/$.uid",
      "npm:core-js@0.9.13/modules/$.redef",
      "npm:core-js@0.9.13/modules/$.invoke",
      "npm:core-js@0.9.13/modules/$.assert",
      "npm:core-js@0.9.13/modules/$.array-includes",
      "npm:core-js@0.9.13/modules/$.replacer",
      "npm:core-js@0.9.13/modules/$.throws",
      "npm:core-js@0.9.13/modules/$.keyof",
      "npm:core-js@0.9.13/modules/$.enum-keys",
      "npm:core-js@0.9.13/modules/$.assign",
      "npm:core-js@0.9.13/modules/es6.object.is",
      "npm:core-js@0.9.13/modules/$.set-proto",
      "npm:core-js@0.9.13/modules/es6.object.to-string",
      "npm:core-js@0.9.13/modules/es6.object.statics-accept-primitives",
      "npm:core-js@0.9.13/modules/es6.function.name",
      "npm:core-js@0.9.13/modules/es6.function.has-instance",
      "npm:core-js@0.9.13/modules/es6.number.constructor",
      "npm:core-js@0.9.13/modules/es6.number.statics",
      "npm:core-js@0.9.13/modules/es6.math",
      "npm:core-js@0.9.13/modules/es6.string.from-code-point",
      "npm:core-js@0.9.13/modules/es6.string.raw",
      "npm:core-js@0.9.13/modules/$.string-at",
      "npm:core-js@0.9.13/modules/$.iter",
      "npm:core-js@0.9.13/modules/$.iter-define",
      "npm:core-js@0.9.13/modules/es6.string.code-point-at",
      "npm:core-js@0.9.13/modules/es6.string.ends-with",
      "npm:core-js@0.9.13/modules/es6.string.includes",
      "npm:core-js@0.9.13/modules/$.string-repeat",
      "npm:core-js@0.9.13/modules/es6.string.starts-with",
      "npm:core-js@0.9.13/modules/$.iter-call",
      "npm:core-js@0.9.13/modules/$.iter-detect",
      "npm:core-js@0.9.13/modules/es6.array.of",
      "npm:core-js@0.9.13/modules/$.unscope",
      "npm:core-js@0.9.13/modules/$.species",
      "npm:core-js@0.9.13/modules/es6.array.copy-within",
      "npm:core-js@0.9.13/modules/es6.array.fill",
      "npm:core-js@0.9.13/modules/es6.array.find",
      "npm:core-js@0.9.13/modules/es6.array.find-index",
      "npm:core-js@0.9.13/modules/es6.regexp",
      "npm:core-js@0.9.13/modules/$.for-of",
      "npm:core-js@0.9.13/modules/$.mix",
      "npm:core-js@0.9.13/modules/$.collection-strong",
      "npm:core-js@0.9.13/modules/$.collection",
      "npm:core-js@0.9.13/modules/es6.set",
      "npm:core-js@0.9.13/modules/$.collection-weak",
      "npm:core-js@0.9.13/modules/es6.weak-set",
      "npm:core-js@0.9.13/modules/$.own-keys",
      "npm:core-js@0.9.13/modules/es7.array.includes",
      "npm:core-js@0.9.13/modules/es7.string.at",
      "npm:core-js@0.9.13/modules/$.string-pad",
      "npm:core-js@0.9.13/modules/es7.string.rpad",
      "npm:core-js@0.9.13/modules/es7.regexp.escape",
      "npm:core-js@0.9.13/modules/es7.object.get-own-property-descriptors",
      "npm:core-js@0.9.13/modules/es7.object.to-array",
      "npm:core-js@0.9.13/modules/$.collection-to-json",
      "npm:core-js@0.9.13/modules/es7.set.to-json",
      "npm:core-js@0.9.13/modules/js.array.statics",
      "npm:core-js@0.9.13/modules/$.partial",
      "npm:core-js@0.9.13/modules/web.immediate",
      "npm:core-js@0.9.13/modules/web.dom.iterable",
      "npm:core-js@0.9.13/modules/core.dict",
      "npm:core-js@0.9.13/modules/core.iter-helpers",
      "npm:core-js@0.9.13/modules/core.$for",
      "npm:core-js@0.9.13/modules/core.delay",
      "npm:core-js@0.9.13/modules/core.function.part",
      "npm:core-js@0.9.13/modules/core.object",
      "npm:core-js@0.9.13/modules/core.array.turn",
      "npm:core-js@0.9.13/modules/core.number.iterator",
      "npm:core-js@0.9.13/modules/core.number.math",
      "npm:core-js@0.9.13/modules/core.string.escape-html",
      "npm:core-js@0.9.13/modules/core.date",
      "npm:core-js@0.9.13/modules/core.global",
      "npm:core-js@0.9.13/modules/core.log",
      "github:aurelia/metadata@0.5.0/reflect-metadata",
      "github:aurelia/metadata@0.5.0/decorator-applicator",
      "github:aurelia/path@0.6.1/index",
      "github:aurelia/loader@0.6.0/loader",
      "npm:core-js@0.9.13/modules/$",
      "npm:core-js@0.9.13/modules/$.wks",
      "npm:core-js@0.9.13/modules/$.def",
      "npm:core-js@0.9.13/modules/$.ctx",
      "npm:core-js@0.9.13/modules/es6.symbol",
      "npm:core-js@0.9.13/modules/es6.object.assign",
      "npm:core-js@0.9.13/modules/es6.object.set-prototype-of",
      "npm:core-js@0.9.13/modules/es6.string.iterator",
      "npm:core-js@0.9.13/modules/es6.string.repeat",
      "npm:core-js@0.9.13/modules/es6.array.from",
      "npm:core-js@0.9.13/modules/es6.array.iterator",
      "npm:core-js@0.9.13/modules/es6.array.species",
      "npm:core-js@0.9.13/modules/es6.map",
      "npm:core-js@0.9.13/modules/es6.weak-map",
      "npm:core-js@0.9.13/modules/es6.reflect",
      "npm:core-js@0.9.13/modules/es7.string.lpad",
      "npm:core-js@0.9.13/modules/es7.map.to-json",
      "npm:core-js@0.9.13/modules/web.timers",
      "github:aurelia/metadata@0.5.0/metadata",
      "github:aurelia/metadata@0.5.0/decorators",
      "github:aurelia/path@0.6.1",
      "npm:core-js@0.9.13/modules/$.cof",
      "npm:core-js@0.9.13/modules/$.array-methods",
      "github:aurelia/loader@0.6.0/template-registry-entry",
      "npm:core-js@0.9.13/modules/es5",
      "github:aurelia/loader@0.6.0/index",
      "npm:core-js@0.9.13/modules/$.task",
      "github:aurelia/loader@0.6.0",
      "npm:core-js@0.9.13/modules/es6.promise",
      "npm:core-js@0.9.13/shim",
      "npm:core-js@0.9.13/index",
      "npm:core-js@0.9.13",
      "github:aurelia/metadata@0.5.0/origin",
      "github:aurelia/metadata@0.5.0/index",
      "github:aurelia/metadata@0.5.0",
      "github:aurelia/loader-default@0.7.0/index",
      "github:aurelia/loader-default@0.7.0",
      "github:aurelia/history@0.4.0/index",
      "github:aurelia/history@0.4.0",
      "github:aurelia/history-browser@0.4.0/index",
      "github:aurelia/history-browser@0.4.0",
      "github:aurelia/route-recognizer@0.4.0/state",
      "github:aurelia/route-recognizer@0.4.0/segments",
      "github:aurelia/router@0.8.1/navigation-commands",
      "github:aurelia/router@0.8.1/navigation-instruction",
      "github:aurelia/dependency-injection@0.7.1/metadata",
      "github:aurelia/logging@0.4.0/index",
      "github:aurelia/router@0.8.1/util",
      "github:aurelia/router@0.8.1/pipeline",
      "github:aurelia/router@0.8.1/route-loading",
      "github:aurelia/router@0.8.1/activation",
      "github:aurelia/event-aggregator@0.4.0/index",
      "github:aurelia/binding@0.6.1/value-converter",
      "github:aurelia/binding@0.6.1/event-manager",
      "github:aurelia/task-queue@0.4.0/index",
      "github:aurelia/binding@0.6.1/environment",
      "github:aurelia/binding@0.6.1/array-change-records",
      "github:aurelia/binding@0.6.1/map-change-records",
      "github:aurelia/binding@0.6.1/map-observation",
      "github:aurelia/binding@0.6.1/dirty-checking",
      "github:aurelia/binding@0.6.1/property-observation",
      "github:aurelia/binding@0.6.1/element-observation",
      "github:aurelia/binding@0.6.1/computed-observation",
      "github:aurelia/binding@0.6.1/binding-modes",
      "github:aurelia/binding@0.6.1/lexer",
      "github:aurelia/binding@0.6.1/path-observer",
      "github:aurelia/binding@0.6.1/composite-observer",
      "github:aurelia/binding@0.6.1/access-keyed-observer",
      "github:aurelia/binding@0.6.1/binding-expression",
      "github:aurelia/binding@0.6.1/listener-expression",
      "github:aurelia/binding@0.6.1/name-expression",
      "github:aurelia/binding@0.6.1/call-expression",
      "github:aurelia/templating@0.11.2/view-strategy",
      "github:aurelia/templating@0.11.2/resource-registry",
      "github:aurelia/templating@0.11.2/view",
      "github:aurelia/templating@0.11.2/content-selector",
      "github:aurelia/templating@0.11.2/animator",
      "github:aurelia/templating@0.11.2/binding-language",
      "github:aurelia/templating@0.11.2/util",
      "github:aurelia/templating@0.11.2/bindable-property",
      "github:aurelia/templating@0.11.2/behavior-instance",
      "github:aurelia/templating@0.11.2/children",
      "github:aurelia/templating@0.11.2/element-config",
      "github:aurelia/templating@0.11.2/composition-engine",
      "github:aurelia/templating@0.11.2/decorators",
      "github:aurelia/templating-router@0.12.0/router-view",
      "github:aurelia/templating-router@0.12.0/route-href",
      "github:aurelia/route-recognizer@0.4.0/index",
      "github:aurelia/router@0.8.1/navigation-plan",
      "github:aurelia/logging@0.4.0",
      "github:aurelia/router@0.8.1/pipeline-provider",
      "github:aurelia/event-aggregator@0.4.0",
      "github:aurelia/task-queue@0.4.0",
      "github:aurelia/binding@0.6.1/collection-observation",
      "github:aurelia/binding@0.6.1/ast",
      "github:aurelia/templating@0.11.2/view-slot",
      "github:aurelia/templating@0.11.2/module-analyzer",
      "github:aurelia/route-recognizer@0.4.0",
      "github:aurelia/router@0.8.1/navigation-context",
      "github:aurelia/dependency-injection@0.7.1/container",
      "github:aurelia/router@0.8.1/app-router",
      "github:aurelia/binding@0.6.1/array-observation",
      "github:aurelia/binding@0.6.1/parser",
      "github:aurelia/templating@0.11.2/view-factory",
      "github:aurelia/binding@0.6.1/observer-locator",
      "github:aurelia/templating@0.11.2/view-compiler",
      "github:aurelia/dependency-injection@0.7.1/index",
      "github:aurelia/binding@0.6.1/index",
      "github:aurelia/templating@0.11.2/view-engine",
      "github:aurelia/dependency-injection@0.7.1",
      "github:aurelia/binding@0.6.1",
      "github:aurelia/router@0.8.1/route-filters",
      "github:aurelia/templating@0.11.2/html-behavior",
      "github:aurelia/router@0.8.1/router-configuration",
      "github:aurelia/templating@0.11.2/index",
      "github:aurelia/templating@0.11.2",
      "github:aurelia/router@0.8.1/router",
      "github:aurelia/templating-router@0.12.0/route-loader",
      "github:aurelia/router@0.8.1/index",
      "github:aurelia/router@0.8.1",
      "github:aurelia/templating-router@0.12.0/index",
      "github:aurelia/templating-router@0.12.0",
      "github:aurelia/templating-resources@0.11.1/if",
      "github:aurelia/templating-resources@0.11.1/with",
      "github:aurelia/templating-resources@0.11.1/repeat",
      "github:aurelia/templating-resources@0.11.1/show",
      "github:aurelia/templating-resources@0.11.1/global-behavior",
      "github:aurelia/templating-resources@0.11.1/sanitize-html",
      "github:aurelia/templating-resources@0.11.1/compose",
      "github:aurelia/templating-resources@0.11.1/index",
      "github:aurelia/templating-resources@0.11.1",
      "github:aurelia/templating-binding@0.11.0/syntax-interpreter",
      "github:aurelia/templating-binding@0.11.0/binding-language",
      "github:aurelia/templating-binding@0.11.0/index",
      "github:aurelia/templating-binding@0.11.0",
      "github:aurelia/http-client@0.8.1/headers",
      "github:aurelia/http-client@0.8.1/http-response-message",
      "github:aurelia/http-client@0.8.1/transformers",
      "github:aurelia/http-client@0.8.1/jsonp-request-message",
      "github:aurelia/http-client@0.8.1/request-message-processor",
      "github:aurelia/http-client@0.8.1/http-request-message",
      "github:aurelia/http-client@0.8.1/request-builder",
      "github:aurelia/http-client@0.8.1/http-client",
      "github:aurelia/http-client@0.8.1/index",
      "github:aurelia/http-client@0.8.1",
      "github:aurelia/framework@0.11.0/plugins",
      "github:aurelia/logging-console@0.4.0/index",
      "github:aurelia/logging-console@0.4.0",
      "github:aurelia/framework@0.11.0/aurelia",
      "github:aurelia/framework@0.11.0/index",
      "github:aurelia/framework@0.11.0",
      "github:aurelia/bootstrapper@0.12.0/index",
      "github:aurelia/bootstrapper@0.12.0",
      "nav-bar",
      "npm:highlight.js@8.6.0/styles/default.css!github:systemjs/plugin-css@0.1.11",
      "example-data",
      "examples",
      "github:components/jquery@2.1.4/jquery",
      "github:twbs/bootstrap@3.3.4/css/bootstrap.css!github:systemjs/plugin-css@0.1.11",
      "github:components/jquery@2.1.4",
      "github:twbs/bootstrap@3.3.4/js/bootstrap",
      "github:twbs/bootstrap@3.3.4",
      "app"
    ]
  }
});

System.config({
  "map": {
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.12.0",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.7.1",
    "aurelia-framework": "github:aurelia/framework@0.11.0",
    "aurelia-history-browser": "github:aurelia/history-browser@0.4.0",
    "aurelia-http-client": "github:aurelia/http-client@0.8.1",
    "aurelia-loader-default": "github:aurelia/loader-default@0.7.0",
    "aurelia-router": "github:aurelia/router@0.8.1",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.11.0",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.11.1",
    "aurelia-templating-router": "github:aurelia/templating-router@0.12.0",
    "bootstrap": "github:twbs/bootstrap@3.3.4",
    "css": "github:systemjs/plugin-css@0.1.11",
    "font-awesome": "npm:font-awesome@4.3.0",
    "highlight.js": "npm:highlight.js@8.6.0",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:aurelia/binding@0.6.1": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.7.1",
      "aurelia-metadata": "github:aurelia/metadata@0.5.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.4.0",
      "core-js": "npm:core-js@0.9.13"
    },
    "github:aurelia/bootstrapper@0.12.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.4.0",
      "aurelia-framework": "github:aurelia/framework@0.11.0",
      "aurelia-history": "github:aurelia/history@0.4.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.4.0",
      "aurelia-loader-default": "github:aurelia/loader-default@0.7.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.4.0",
      "aurelia-router": "github:aurelia/router@0.8.1",
      "aurelia-templating": "github:aurelia/templating@0.11.2",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.11.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.11.1",
      "aurelia-templating-router": "github:aurelia/templating-router@0.12.0",
      "core-js": "npm:core-js@0.9.13"
    },
    "github:aurelia/dependency-injection@0.7.1": {
      "aurelia-logging": "github:aurelia/logging@0.4.0",
      "aurelia-metadata": "github:aurelia/metadata@0.5.0",
      "core-js": "npm:core-js@0.9.13"
    },
    "github:aurelia/framework@0.11.0": {
      "aurelia-binding": "github:aurelia/binding@0.6.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.7.1",
      "aurelia-loader": "github:aurelia/loader@0.6.0",
      "aurelia-logging": "github:aurelia/logging@0.4.0",
      "aurelia-metadata": "github:aurelia/metadata@0.5.0",
      "aurelia-path": "github:aurelia/path@0.6.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.4.0",
      "aurelia-templating": "github:aurelia/templating@0.11.2",
      "core-js": "npm:core-js@0.9.13"
    },
    "github:aurelia/history-browser@0.4.0": {
      "aurelia-history": "github:aurelia/history@0.4.0",
      "core-js": "npm:core-js@0.9.13"
    },
    "github:aurelia/http-client@0.8.1": {
      "aurelia-path": "github:aurelia/path@0.6.1",
      "core-js": "npm:core-js@0.9.13"
    },
    "github:aurelia/loader-default@0.7.0": {
      "aurelia-loader": "github:aurelia/loader@0.6.0",
      "aurelia-metadata": "github:aurelia/metadata@0.5.0"
    },
    "github:aurelia/loader@0.6.0": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-path": "github:aurelia/path@0.6.1",
      "core-js": "npm:core-js@0.9.13",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
    },
    "github:aurelia/metadata@0.5.0": {
      "core-js": "npm:core-js@0.9.13"
    },
    "github:aurelia/route-recognizer@0.4.0": {
      "core-js": "npm:core-js@0.9.13"
    },
    "github:aurelia/router@0.8.1": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.7.1",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.4.0",
      "aurelia-history": "github:aurelia/history@0.4.0",
      "aurelia-path": "github:aurelia/path@0.6.1",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.4.0",
      "core-js": "npm:core-js@0.9.13"
    },
    "github:aurelia/templating-binding@0.11.0": {
      "aurelia-binding": "github:aurelia/binding@0.6.1",
      "aurelia-logging": "github:aurelia/logging@0.4.0",
      "aurelia-templating": "github:aurelia/templating@0.11.2"
    },
    "github:aurelia/templating-resources@0.11.1": {
      "aurelia-binding": "github:aurelia/binding@0.6.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.7.1",
      "aurelia-logging": "github:aurelia/logging@0.4.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.4.0",
      "aurelia-templating": "github:aurelia/templating@0.11.2",
      "core-js": "npm:core-js@0.9.13"
    },
    "github:aurelia/templating-router@0.12.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.7.1",
      "aurelia-metadata": "github:aurelia/metadata@0.5.0",
      "aurelia-path": "github:aurelia/path@0.6.1",
      "aurelia-router": "github:aurelia/router@0.8.1",
      "aurelia-templating": "github:aurelia/templating@0.11.2"
    },
    "github:aurelia/templating@0.11.2": {
      "aurelia-binding": "github:aurelia/binding@0.6.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.7.1",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.6.0",
      "aurelia-logging": "github:aurelia/logging@0.4.0",
      "aurelia-metadata": "github:aurelia/metadata@0.5.0",
      "aurelia-path": "github:aurelia/path@0.6.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.4.0",
      "core-js": "npm:core-js@0.9.13"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.2.2"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:systemjs/plugin-css@0.1.11": {
      "clean-css": "npm:clean-css@3.1.9",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "github:twbs/bootstrap@3.3.4": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@3.2.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.5",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clean-css@3.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.6.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.13": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:font-awesome@4.3.0": {
      "css": "github:systemjs/plugin-css@0.1.11"
    },
    "npm:highlight.js@8.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

