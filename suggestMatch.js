
var data = ["ActionScript", "C", "C#", "C++", "Clojure", "CoffeeScript", "CSS", "Go", "Haskell", "HTML", "Java", "JavaScript", "Lua", "Matlab", "Objective-C", "Perl", "PHP", "Python", "R", "Ruby", "Scala", "Shell", "Swift", "TeX", "VimL", "ABAP", "Ada", "Agda", "AGS Script", "Alloy", "AMPL", "Ant Build System", "ANTLR", "ApacheConf", "Apex", "API Blueprint", "APL", "AppleScript", "Arc", "Arduino", "AsciiDoc", "ASP", "AspectJ", "Assembly", "ATS", "Augeas", "AutoHotkey", "AutoIt", "Awk", "Batchfile", "Befunge", "Bison", "BitBake", "BlitzBasic", "BlitzMax", "Bluespec", "Boo", "Brainfuck", "Brightscript", "Bro", "C-ObjDump", "C2hs Haskell", "Cap'n Proto", "CartoCSS", "Ceylon", "Chapel", "ChucK", "Cirru", "Clarion", "Clean", "CLIPS", "CMake", "COBOL", "ColdFusion", "ColdFusion CFC", "Common Lisp", "Component Pascal", "Cool", "Coq", "Cpp-ObjDump", "Creole", "Crystal", "Cucumber", "Cuda", "Cycript", "Cython", "D", "D-ObjDump", "Darcs Patch", "Dart", "desktop", "Diff", "DIGITAL Command Language", "DM", "Dockerfile", "Dogescript", "DTrace", "Dylan", "E", "Eagle", "eC", "Ecere Projects", "ECL", "edn", "Eiffel", "Elixir", "Elm", "Emacs Lisp", "EmberScript", "Erlang", "F#", "Factor", "Fancy", "Fantom", "Filterscript", "fish", "FLUX", "Formatted", "Forth", "FORTRAN", "Frege", "G-code", "Game Maker Language", "GAMS", "GAP", "GAS", "GDScript", "Genshi", "Gentoo Ebuild", "Gentoo Eclass", "Gettext Catalog", "GLSL", "Glyph", "Gnuplot", "Golo", "Gosu", "Grace", "Gradle", "Grammatical Framework", "Graph Modeling Language", "Graphviz (DOT)", "Groff", "Groovy", "Groovy Server Pages", "Hack", "Haml", "Handlebars", "Harbour", "Haxe", "HTML+Django", "HTML+ERB", "HTML+PHP", "HTTP", "Hy", "HyPhy", "IDL", "Idris", "IGOR Pro", "Inform 7", "INI", "Inno Setup", "Io", "Ioke", "IRC log", "Isabelle", "J", "Jade", "Jasmin", "Java Server Pages", "JFlex", "JSON", "JSON5", "JSONiq", "JSONLD", "Julia", "KiCad", "Kit", "Kotlin", "KRL", "LabVIEW", "Lasso", "Latte", "Lean", "Less", "LFE", "LilyPond", "Limbo", "Linker Script", "Liquid", "Literate Agda", "Literate CoffeeScript", "Literate Haskell", "LiveScript", "LLVM", "Logos", "Logtalk", "LOLCODE", "LookML", "LoomScript", "LSL", "M", "Makefile", "Mako", "Markdown", "Mask", "Mathematica", "Maven POM", "Max", "MediaWiki", "Mercury", "MiniD", "Mirah", "Modelica", "Module Management System", "Monkey", "Moocode", "MoonScript", "MTML", "MUF", "mupad", "Myghty", "Nemerle", "nesC", "NetLinx", "NetLinx+ERB", "NetLogo", "NewLisp", "Nginx", "Nimrod", "Ninja", "Nit", "Nix", "NL", "NSIS", "Nu", "NumPy", "ObjDump", "Objective-C++", "Objective-J", "OCaml", "Omgrofl", "ooc", "Opa", "Opal", "OpenCL", "OpenEdge ABL", "OpenSCAD", "Org", "Ox", "Oxygene", "Oz", "Pan", "Papyrus", "Parrot", "Parrot Assembly", "Parrot Internal Representation", "Pascal", "PAWN", "Perl6", "PigLatin", "Pike", "PLpgSQL", "PLSQL", "Pod", "PogoScript", "PostScript", "PowerShell", "Processing", "Prolog", "Propeller Spin", "Protocol Buffer", "Public Key", "Puppet", "Pure Data", "PureBasic", "PureScript", "Python traceback", "QMake", "QML", "Racket", "Ragel in Ruby Host", "RAML", "Raw token data", "RDoc", "REALbasic", "Rebol", "Red", "Redcode", "RenderScript", "reStructuredText", "RHTML", "RMarkdown", "RobotFramework", "Rouge", "Rust", "Sage", "SaltStack", "SAS", "Sass", "Scaml", "Scheme", "Scilab", "SCSS", "Self", "ShellSession", "Shen", "Slash", "Slim", "Smalltalk", "Smarty", "SourcePawn", "SPARQL", "SQF", "SQL", "SQLPL", "Squirrel", "Standard ML", "Stata", "STON", "Stylus", "SuperCollider", "SVG", "SystemVerilog", "Tcl", "Tcsh", "Tea", "Text", "Textile", "Thrift", "TOML", "Turing", "Turtle", "Twig", "TXL", "TypeScript", "Unified Parallel C", "Unity3D Asset", "UnrealScript", "Vala", "VCL", "Verilog", "VHDL", "Visual Basic", "Volt", "Web Ontology Language", "WebIDL", "wisp", "xBase", "XC", "XML", "Xojo", "XProc", "XQuery", "XS", "XSLT", "Xtend", "YAML", "Zephir", "Zimpl"];

var escapeRegexp = function(str) {
  return str.replace(/[.?+*^$|(){}[\]\\-]/, '\\$&');
};

var automatch1 = function(input, data) {
  var matches = [];
  var re = new RegExp(input.split('').join('[\s\S]*'), 'i');

  for (var i = 0, len = data.length; i < len; i++) {
    if (re.test(data[i])) {
      matches.push(data[i]);
    }
  }

  return matches;
};

var looseMatch = function(str, sub) {
  var idx = 0;
  str = str.toLowerCase();

  for (var i = 0; i < sub.length; i++) {
    idx = str.indexOf(sub.charAt(i), idx);
    if (idx === -1) {
      return false;
    }
  }
  return true;
};

var automatch2 = function(input, data) {
  var matches = [];

  for (var i = 0, len = data.length; i < len; i++) {
    if (looseMatch(data[i], input)) {
      matches.push(data[i]);
    }
  }

  return matches;
};