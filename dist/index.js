"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Regex exp. for checking if the string is purely a number or not.
 * @readonly
 * @constant
 */
var isNumberRegex = /^-?[0-9]+\.?[0-9]*$/;

var SVGWrapper = /*#__PURE__*/function (_PureComponent) {
  _inherits(SVGWrapper, _PureComponent);

  var _super = _createSuper(SVGWrapper);

  function SVGWrapper(props) {
    var _this;

    _classCallCheck(this, SVGWrapper);

    _this = _super.call(this, props);
    _this.state = {
      fileData: "",
      wrapperCompObject: {},
      domObject: {},
      RootComponent: null
    };
    /** Providing a non-clashing key to each component of our new component tree. */

    _this.randomKey = -1;
    return _this;
  }
  /** Converts a kebab-cased string into a camelCased string
   * @function
   * @param {string} `kebab` - A string which is kebab-cased.
   * @returns {string} `camelCasedString`
   */


  _createClass(SVGWrapper, [{
    key: "kebabToCamel",
    value: function kebabToCamel(kebab) {
      var temp = kebab === null || kebab === void 0 ? void 0 : kebab.split("-");
      var camel = "";
      temp.forEach(function (val, inx) {
        if (val !== null && val !== void 0 && val.trim()) {
          if (inx > 0) {
            camel += val[0].toUpperCase() + val.slice(1);
          }

          if (inx === 0) {
            camel += val;
          }
        }
      });
      return camel;
    }
    /** Converts an inline style string into an inline style object for react.
     * @function
     * @param {String} style - A style string.
     * @example
     * // returns {display:'flex', flexDirection:'row',backgroundColor:'#000'}
     * transformStyleString("display:flex; flex-direction:row; background-color:#000");
     */

  }, {
    key: "transformStyleString",
    value: function transformStyleString() {
      var _this2 = this;

      var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var attrs = style.trim().split(";");
      var styleAttrs = [];
      attrs.forEach(function (attr) {
        if (attr !== null && attr !== void 0 && attr.trim()) {
          styleAttrs.push(attr.trim());
        }
      });
      var transformedAttrs = {};
      styleAttrs.forEach(function (attr) {
        var _attr$split = attr.split(": "),
            _attr$split2 = _slicedToArray(_attr$split, 2),
            key = _attr$split2[0],
            val = _attr$split2[1];

        var actualKey = _this2.kebabToCamel(key);

        var isValNumber = val === null || val === void 0 ? void 0 : val.match(isNumberRegex);
        var actualVal = val;

        if (isValNumber) {
          actualVal = parseInt(actualVal, 10);
        }

        transformedAttrs[actualKey] = actualVal;
      });
      return transformedAttrs;
    }
    /** Returns an adjacency list of all the relevant nodes of the svg component tree wrt passed root node.
     * @function
     */

  }, {
    key: "computeSubTrees",
    value: function computeSubTrees(rootNode) {
      var _this3 = this;

      var nodeName = rootNode === null || rootNode === void 0 ? void 0 : rootNode.nodeName;
      var attributes = (rootNode === null || rootNode === void 0 ? void 0 : rootNode.attributes) || {};
      var attributeNames = Object.keys(attributes);
      var validAttributeNames = [];
      var actualAttributes = {};
      var actualChildNodes = [];
      /** Retrieving all attributes for a particular tag */

      attributeNames.forEach(function (eachAttributeName) {
        if (parseInt(eachAttributeName) || eachAttributeName === "0") {
          validAttributeNames.push(eachAttributeName);
        }
      });
      /** - For each valid attribute and their value we create a object.
       * - If attribute is a `style` we *properly* format and convert it into an object */

      validAttributeNames.forEach(function (eachAttributeName) {
        var eachAttributeNameExists = attributeNameMapping[attributes[eachAttributeName].nodeName];

        if (eachAttributeNameExists) {
          var attrValue = attributes[eachAttributeName].value;

          if (eachAttributeNameExists === "style") {
            attrValue = _this3.transformStyleString(attrValue);
          }

          actualAttributes[eachAttributeNameExists] = attrValue;
        }
      });
      /** Finding relevant child nodes and pushing it into an array for further running of DFS. */

      rootNode.childNodes.forEach(function (eachChild) {
        var _eachChild$nodeValue;

        /**  For ignoring dom objects been created beacuse of space or newline characters */
        var nodeValue = eachChild === null || eachChild === void 0 ? void 0 : (_eachChild$nodeValue = eachChild.nodeValue) === null || _eachChild$nodeValue === void 0 ? void 0 : _eachChild$nodeValue.trim();

        if (eachChild.nodeName === "#text" && nodeValue && eachChild.nodeName !== "#comment" || eachChild.nodeName !== "#text" && eachChild.nodeName !== "#comment") {
          actualChildNodes.push(eachChild);
        }
      });
      /** Providing a non-clashing key to each component of our new component tree. */

      this.randomKey += 1;
      /** Instantiating an object for each rootNode.
       * @constant
       */

      var nodeObject = {
        key: this.randomKey,
        nodeName: nodeName,
        attributes: actualAttributes,
        childNodes: [],
        nodeValue: rootNode === null || rootNode === void 0 ? void 0 : rootNode.nodeValue
      };

      if (actualChildNodes.length === 0) {
        /**  Returns nodeObject is the `rootNode` is a leaf.*/
        return nodeObject;
      } else {
        /**  For each non-leaf node recursively explore each child node and populate
         * the `actualChildNodes` and finally return the adjacency list.*/
        actualChildNodes.forEach(function (eachChild, inx) {
          var currentChildNode = _objectSpread({}, _this3.computeSubTrees(eachChild));

          actualChildNodes[inx] = _objectSpread({}, currentChildNode);
        });
        nodeObject.childNodes = [].concat(actualChildNodes);
        return nodeObject;
      }
    }
    /** Parses the svg in top-down approach and constructs a react component for injection.
     * @function
     */

  }, {
    key: "performConversion",
    value: function performConversion() {
      var wrapperCompObject = this.state.wrapperCompObject;
      var rootNodeIndex = -1;
      /** Check if the file contains a valid parsable content or not. */

      for (var inx = 0; inx < wrapperCompObject.childNodes.length; inx++) {
        if (wrapperCompObject.childNodes[inx].nodeName !== "#comment") {
          rootNodeIndex = inx;
          break;
        }
      }
      /** Adjacency list of all nodes of svg.
       * @constant
       */


      var rootObject = this.computeSubTrees(wrapperCompObject.childNodes[0]);
      this.setState({
        domObject: rootObject,
        RootComponent: rootNodeIndex !== -1 ? function (props) {
          return getWrapperComponent(rootObject, props);
        } : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Invalid SVG File")
      });
    }
    /** As the component mounts we, based on the props, trigger the `performConversion` function.
     * @function
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      var _this$props = this.props,
          src = _this$props.src,
          type = _this$props.type;

      if (type === "file") {
        fetch(src).then(function (res) {
          return res.text();
        }).then(function (resText) {
          var updatedCompWrapperObject = _objectSpread({}, _this4.state.wrapperCompObject);

          if (resText.length > 0) {
            updatedCompWrapperObject = new DOMParser().parseFromString(removeNewlineCharacters(resText), "application/xml");
          }

          _this4.setState({
            fileData: resText,
            wrapperCompObject: updatedCompWrapperObject
          }, function () {
            _this4.performConversion();
          });
        });
      } else if (type === "string") {
        var updatedCompWrapperObject = new DOMParser().parseFromString(removeNewlineCharacters(src), "application/xml");
        this.setState({
          fileData: src,
          wrapperCompObject: updatedCompWrapperObject
        }, function () {
          _this4.performConversion();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          RootComponent = _this$state.RootComponent,
          domObject = _this$state.domObject;
      /** Passing all props to root component instead of that src props. */

      var allProps = _objectSpread({}, this.props);

      delete allProps.src;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, Object.values(domObject).length > 0 && /*#__PURE__*/_react["default"].createElement(RootComponent, allProps));
    }
  }]);

  return SVGWrapper;
}(_react.PureComponent);

SVGWrapper.defaultProps = {
  type: "file"
};
SVGWrapper.propTypes = {
  src: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string
};
/** Removes all new line, non-text chars from a string.
 * @function
 */

function removeNewlineCharacters(inpString) {
  var tempString = "";
  var noSpaceList = inpString.split(/\r?\n|\r/g);
  noSpaceList.forEach(function (element) {
    if (element.length > 0) {
      tempString += element.trim() + " ";
    }
  });
  return tempString;
}
/** Parses the adjacency list starting from root node and creates a React component tree from the list.
 * @function
 */


function getWrapperComponent(rootNode, parentProps) {
  var _rootNode$nodeValue;

  var nodeAttributes = _objectSpread({}, rootNode.attributes);

  var rootNodeValue = rootNode === null || rootNode === void 0 ? void 0 : (_rootNode$nodeValue = rootNode.nodeValue) === null || _rootNode$nodeValue === void 0 ? void 0 : _rootNode$nodeValue.trim();
  var NodeName = rootNode.nodeName;
  /** If a node contains just a text, then enclose it with a fragment and retur. */

  if (NodeName === "#text") {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: rootNode.key
    }, rootNodeValue);
  }
  /** We ignore comments */


  if (NodeName === "#comment") {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  }
  /** For each node, create a component from its nodeName and pass all its props.
   * @function
   */


  var NodeComponent = function NodeComponent(props) {
    return /*#__PURE__*/_react["default"].createElement(NodeName, props, props.children);
  };

  if (rootNode.childNodes.length === 0) {
    /** For leaf nodes we return the component back to parent. */
    return /*#__PURE__*/_react["default"].createElement(NodeComponent, _extends({}, nodeAttributes, {
      key: rootNode.key
    }));
  } else {
    /** For non-leaf nodes we recursively create the child components and
     * then attach them to their parent and then finally
     * return the root of the component tree */
    var SiblingComponents = [];
    rootNode.childNodes.forEach(function (eachChild, inx) {
      var EachChildComp = getWrapperComponent(eachChild, {});
      SiblingComponents.push(EachChildComp);
    });
    return /*#__PURE__*/_react["default"].createElement(NodeComponent, _extends({}, nodeAttributes, parentProps, {
      key: rootNode.key
    }), SiblingComponents);
  }
}

var _default = SVGWrapper;
/** All valid html/svg attributes.
 *  @constant
 * @readonly
 */

exports["default"] = _default;
var attributeNameMapping = {
  // HTML
  accept: "accept",
  acceptcharset: "acceptCharset",
  "accept-charset": "acceptCharset",
  accesskey: "accessKey",
  action: "action",
  allowfullscreen: "allowFullScreen",
  alt: "alt",
  as: "as",
  async: "async",
  autocapitalize: "autoCapitalize",
  autocomplete: "autoComplete",
  autocorrect: "autoCorrect",
  autofocus: "autoFocus",
  autoplay: "autoPlay",
  autosave: "autoSave",
  capture: "capture",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  challenge: "challenge",
  charset: "charSet",
  checked: "checked",
  children: "children",
  cite: "cite",
  "class": "className",
  classid: "classID",
  classname: "className",
  cols: "cols",
  colspan: "colSpan",
  content: "content",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  controls: "controls",
  controlslist: "controlsList",
  coords: "coords",
  crossorigin: "crossOrigin",
  dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
  data: "data",
  datetime: "dateTime",
  "default": "default",
  defaultchecked: "defaultChecked",
  defaultvalue: "defaultValue",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "encType",
  "for": "htmlFor",
  form: "form",
  formmethod: "formMethod",
  formaction: "formAction",
  formenctype: "formEncType",
  formnovalidate: "formNoValidate",
  formtarget: "formTarget",
  frameborder: "frameBorder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hrefLang",
  htmlfor: "htmlFor",
  httpequiv: "httpEquiv",
  "http-equiv": "httpEquiv",
  icon: "icon",
  id: "id",
  innerhtml: "innerHTML",
  inputmode: "inputMode",
  integrity: "integrity",
  is: "is",
  itemid: "itemID",
  itemprop: "itemProp",
  itemref: "itemRef",
  itemscope: "itemScope",
  itemtype: "itemType",
  keyparams: "keyParams",
  keytype: "keyType",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginwidth: "marginWidth",
  marginheight: "marginHeight",
  max: "max",
  maxlength: "maxLength",
  media: "media",
  mediagroup: "mediaGroup",
  method: "method",
  min: "min",
  minlength: "minLength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  nomodule: "noModule",
  nonce: "nonce",
  novalidate: "noValidate",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  playsinline: "playsInline",
  poster: "poster",
  preload: "preload",
  profile: "profile",
  radiogroup: "radioGroup",
  readonly: "readOnly",
  referrerpolicy: "referrerPolicy",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rows: "rows",
  rowspan: "rowSpan",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellCheck",
  src: "src",
  srcdoc: "srcDoc",
  srclang: "srcLang",
  srcset: "srcSet",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabIndex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "useMap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap",
  // SVG
  about: "about",
  accentheight: "accentHeight",
  "accent-height": "accentHeight",
  accumulate: "accumulate",
  additive: "additive",
  alignmentbaseline: "alignmentBaseline",
  "alignment-baseline": "alignmentBaseline",
  allowreorder: "allowReorder",
  alphabetic: "alphabetic",
  amplitude: "amplitude",
  arabicform: "arabicForm",
  "arabic-form": "arabicForm",
  ascent: "ascent",
  attributename: "attributeName",
  attributetype: "attributeType",
  autoreverse: "autoReverse",
  azimuth: "azimuth",
  basefrequency: "baseFrequency",
  baselineshift: "baselineShift",
  "baseline-shift": "baselineShift",
  baseprofile: "baseProfile",
  bbox: "bbox",
  begin: "begin",
  bias: "bias",
  by: "by",
  calcmode: "calcMode",
  capheight: "capHeight",
  "cap-height": "capHeight",
  clip: "clip",
  clippath: "clipPath",
  "clip-path": "clipPath",
  clippathunits: "clipPathUnits",
  cliprule: "clipRule",
  "clip-rule": "clipRule",
  color: "color",
  colorinterpolation: "colorInterpolation",
  "color-interpolation": "colorInterpolation",
  colorinterpolationfilters: "colorInterpolationFilters",
  "color-interpolation-filters": "colorInterpolationFilters",
  colorprofile: "colorProfile",
  "color-profile": "colorProfile",
  colorrendering: "colorRendering",
  "color-rendering": "colorRendering",
  contentscripttype: "contentScriptType",
  contentstyletype: "contentStyleType",
  cursor: "cursor",
  cx: "cx",
  cy: "cy",
  d: "d",
  datatype: "datatype",
  decelerate: "decelerate",
  descent: "descent",
  diffuseconstant: "diffuseConstant",
  direction: "direction",
  display: "display",
  divisor: "divisor",
  dominantbaseline: "dominantBaseline",
  "dominant-baseline": "dominantBaseline",
  dur: "dur",
  dx: "dx",
  dy: "dy",
  edgemode: "edgeMode",
  elevation: "elevation",
  enablebackground: "enableBackground",
  "enable-background": "enableBackground",
  end: "end",
  exponent: "exponent",
  externalresourcesrequired: "externalResourcesRequired",
  fill: "fill",
  fillopacity: "fillOpacity",
  "fill-opacity": "fillOpacity",
  fillrule: "fillRule",
  "fill-rule": "fillRule",
  filter: "filter",
  filterres: "filterRes",
  filterunits: "filterUnits",
  floodopacity: "floodOpacity",
  "flood-opacity": "floodOpacity",
  floodcolor: "floodColor",
  "flood-color": "floodColor",
  focusable: "focusable",
  fontfamily: "fontFamily",
  "font-family": "fontFamily",
  fontsize: "fontSize",
  "font-size": "fontSize",
  fontsizeadjust: "fontSizeAdjust",
  "font-size-adjust": "fontSizeAdjust",
  fontstretch: "fontStretch",
  "font-stretch": "fontStretch",
  fontstyle: "fontStyle",
  "font-style": "fontStyle",
  fontvariant: "fontVariant",
  "font-variant": "fontVariant",
  fontweight: "fontWeight",
  "font-weight": "fontWeight",
  format: "format",
  from: "from",
  fx: "fx",
  fy: "fy",
  g1: "g1",
  g2: "g2",
  glyphname: "glyphName",
  "glyph-name": "glyphName",
  glyphorientationhorizontal: "glyphOrientationHorizontal",
  "glyph-orientation-horizontal": "glyphOrientationHorizontal",
  glyphorientationvertical: "glyphOrientationVertical",
  "glyph-orientation-vertical": "glyphOrientationVertical",
  glyphref: "glyphRef",
  gradienttransform: "gradientTransform",
  gradientunits: "gradientUnits",
  hanging: "hanging",
  horizadvx: "horizAdvX",
  "horiz-adv-x": "horizAdvX",
  horizoriginx: "horizOriginX",
  "horiz-origin-x": "horizOriginX",
  ideographic: "ideographic",
  imagerendering: "imageRendering",
  "image-rendering": "imageRendering",
  in2: "in2",
  "in": "in",
  inlist: "inlist",
  intercept: "intercept",
  k1: "k1",
  k2: "k2",
  k3: "k3",
  k4: "k4",
  k: "k",
  kernelmatrix: "kernelMatrix",
  kernelunitlength: "kernelUnitLength",
  kerning: "kerning",
  keypoints: "keyPoints",
  keysplines: "keySplines",
  keytimes: "keyTimes",
  lengthadjust: "lengthAdjust",
  letterspacing: "letterSpacing",
  "letter-spacing": "letterSpacing",
  lightingcolor: "lightingColor",
  "lighting-color": "lightingColor",
  limitingconeangle: "limitingConeAngle",
  local: "local",
  markerend: "markerEnd",
  "marker-end": "markerEnd",
  markerheight: "markerHeight",
  markermid: "markerMid",
  "marker-mid": "markerMid",
  markerstart: "markerStart",
  "marker-start": "markerStart",
  markerunits: "markerUnits",
  markerwidth: "markerWidth",
  mask: "mask",
  maskcontentunits: "maskContentUnits",
  maskunits: "maskUnits",
  mathematical: "mathematical",
  mode: "mode",
  numoctaves: "numOctaves",
  offset: "offset",
  opacity: "opacity",
  operator: "operator",
  order: "order",
  orient: "orient",
  orientation: "orientation",
  origin: "origin",
  overflow: "overflow",
  overlineposition: "overlinePosition",
  "overline-position": "overlinePosition",
  overlinethickness: "overlineThickness",
  "overline-thickness": "overlineThickness",
  paintorder: "paintOrder",
  "paint-order": "paintOrder",
  panose1: "panose1",
  "panose-1": "panose1",
  pathlength: "pathLength",
  patterncontentunits: "patternContentUnits",
  patterntransform: "patternTransform",
  patternunits: "patternUnits",
  pointerevents: "pointerEvents",
  "pointer-events": "pointerEvents",
  points: "points",
  pointsatx: "pointsAtX",
  pointsaty: "pointsAtY",
  pointsatz: "pointsAtZ",
  prefix: "prefix",
  preservealpha: "preserveAlpha",
  preserveaspectratio: "preserveAspectRatio",
  primitiveunits: "primitiveUnits",
  property: "property",
  r: "r",
  radius: "radius",
  refx: "refX",
  refy: "refY",
  renderingintent: "renderingIntent",
  "rendering-intent": "renderingIntent",
  repeatcount: "repeatCount",
  repeatdur: "repeatDur",
  requiredextensions: "requiredExtensions",
  requiredfeatures: "requiredFeatures",
  resource: "resource",
  restart: "restart",
  result: "result",
  results: "results",
  rotate: "rotate",
  rx: "rx",
  ry: "ry",
  scale: "scale",
  security: "security",
  seed: "seed",
  shaperendering: "shapeRendering",
  "shape-rendering": "shapeRendering",
  slope: "slope",
  spacing: "spacing",
  specularconstant: "specularConstant",
  specularexponent: "specularExponent",
  speed: "speed",
  spreadmethod: "spreadMethod",
  startoffset: "startOffset",
  stddeviation: "stdDeviation",
  stemh: "stemh",
  stemv: "stemv",
  stitchtiles: "stitchTiles",
  stopcolor: "stopColor",
  "stop-color": "stopColor",
  stopopacity: "stopOpacity",
  "stop-opacity": "stopOpacity",
  strikethroughposition: "strikethroughPosition",
  "strikethrough-position": "strikethroughPosition",
  strikethroughthickness: "strikethroughThickness",
  "strikethrough-thickness": "strikethroughThickness",
  string: "string",
  stroke: "stroke",
  strokedasharray: "strokeDasharray",
  "stroke-dasharray": "strokeDasharray",
  strokedashoffset: "strokeDashoffset",
  "stroke-dashoffset": "strokeDashoffset",
  strokelinecap: "strokeLinecap",
  "stroke-linecap": "strokeLinecap",
  strokelinejoin: "strokeLinejoin",
  "stroke-linejoin": "strokeLinejoin",
  strokemiterlimit: "strokeMiterlimit",
  "stroke-miterlimit": "strokeMiterlimit",
  strokewidth: "strokeWidth",
  "stroke-width": "strokeWidth",
  strokeopacity: "strokeOpacity",
  "stroke-opacity": "strokeOpacity",
  suppresscontenteditablewarning: "suppressContentEditableWarning",
  suppresshydrationwarning: "suppressHydrationWarning",
  surfacescale: "surfaceScale",
  systemlanguage: "systemLanguage",
  tablevalues: "tableValues",
  targetx: "targetX",
  targety: "targetY",
  textanchor: "textAnchor",
  "text-anchor": "textAnchor",
  textdecoration: "textDecoration",
  "text-decoration": "textDecoration",
  textlength: "textLength",
  textrendering: "textRendering",
  "text-rendering": "textRendering",
  to: "to",
  transform: "transform",
  "typeof": "typeof",
  u1: "u1",
  u2: "u2",
  underlineposition: "underlinePosition",
  "underline-position": "underlinePosition",
  underlinethickness: "underlineThickness",
  "underline-thickness": "underlineThickness",
  unicode: "unicode",
  unicodebidi: "unicodeBidi",
  "unicode-bidi": "unicodeBidi",
  unicoderange: "unicodeRange",
  "unicode-range": "unicodeRange",
  unitsperem: "unitsPerEm",
  "units-per-em": "unitsPerEm",
  unselectable: "unselectable",
  valphabetic: "vAlphabetic",
  "v-alphabetic": "vAlphabetic",
  values: "values",
  vectoreffect: "vectorEffect",
  "vector-effect": "vectorEffect",
  version: "version",
  vertadvy: "vertAdvY",
  "vert-adv-y": "vertAdvY",
  vertoriginx: "vertOriginX",
  "vert-origin-x": "vertOriginX",
  vertoriginy: "vertOriginY",
  "vert-origin-y": "vertOriginY",
  vhanging: "vHanging",
  "v-hanging": "vHanging",
  videographic: "vIdeographic",
  "v-ideographic": "vIdeographic",
  viewbox: "viewBox",
  viewBox: "viewBox",
  viewtarget: "viewTarget",
  visibility: "visibility",
  vmathematical: "vMathematical",
  "v-mathematical": "vMathematical",
  vocab: "vocab",
  widths: "widths",
  wordspacing: "wordSpacing",
  "word-spacing": "wordSpacing",
  writingmode: "writingMode",
  "writing-mode": "writingMode",
  x1: "x1",
  x2: "x2",
  x: "x",
  xchannelselector: "xChannelSelector",
  xheight: "xHeight",
  "x-height": "xHeight",
  xlinkactuate: "xlinkActuate",
  "xlink:actuate": "xlinkActuate",
  xlinkarcrole: "xlinkArcrole",
  "xlink:arcrole": "xlinkArcrole",
  xlinkhref: "xlinkHref",
  "xlink:href": "xlinkHref",
  xlinkrole: "xlinkRole",
  "xlink:role": "xlinkRole",
  xlinkshow: "xlinkShow",
  "xlink:show": "xlinkShow",
  xlinktitle: "xlinkTitle",
  "xlink:title": "xlinkTitle",
  xlinktype: "xlinkType",
  "xlink:type": "xlinkType",
  xmlbase: "xmlBase",
  "xml:base": "xmlBase",
  xmllang: "xmlLang",
  "xml:lang": "xmlLang",
  xmlns: "xmlns",
  "xml:space": "xmlSpace",
  xmlnsxlink: "xmlnsXlink",
  "xmlns:xlink": "xmlnsXlink",
  xmlspace: "xmlSpace",
  y1: "y1",
  y2: "y2",
  y: "y",
  ychannelselector: "yChannelSelector",
  z: "z",
  zoomandpan: "zoomAndPan"
};