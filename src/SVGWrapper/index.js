import React, { PureComponent } from "react";
import PropTypes from "prop-types";

/** Regex exp. for checking if the string is purely a number or not.
 * @readonly
 * @constant
 */
const isNumberRegex = /^-?[0-9]+\.?[0-9]*$/;

class SVGWrapper extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fileData: "",
            wrapperCompObject: {},
            domObject: {},
            RootComponent: null,
        };

        /** Providing a non-clashing key to each component of our new component tree. */
        this.randomKey = -1;
    }

    /** Converts a kebab-cased string into a camelCased string
     * @function
     * @param {string} `kebab` - A string which is kebab-cased.
     * @returns {string} `camelCasedString`
     */
    kebabToCamel(kebab) {
        const temp = kebab?.split("-");
        let camel = "";
        temp.forEach((val, inx) => {
            if (val?.trim()) {
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
    transformStyleString(style = "") {
        const attrs = style.trim().split(";");
        const styleAttrs = [];
        attrs.forEach((attr) => {
            if (attr?.trim()) {
                styleAttrs.push(attr.trim());
            }
        });
        const transformedAttrs = {};
        styleAttrs.forEach((attr) => {
            const [key, val] = attr.split(": ");
            const actualKey = this.kebabToCamel(key);
            const isValNumber = val?.match(isNumberRegex);
            let actualVal = val;
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
    computeSubTrees(rootNode) {
        const nodeName = rootNode?.nodeName;
        const attributes = rootNode?.attributes || {};
        const attributeNames = Object.keys(attributes);
        const validAttributeNames = [];
        const actualAttributes = {};
        const actualChildNodes = [];

        /** Retrieving all attributes for a particular tag */
        attributeNames.forEach((eachAttributeName) => {
            if (parseInt(eachAttributeName) || eachAttributeName === "0") {
                validAttributeNames.push(eachAttributeName);
            }
        });

        /** - For each valid attribute and their value we create a object.
         * - If attribute is a `style` we *properly* format and convert it into an object */
        validAttributeNames.forEach((eachAttributeName) => {
            const eachAttributeNameExists =
                attributeNameMapping[attributes[eachAttributeName].nodeName];
            if (eachAttributeNameExists) {
                let attrValue = attributes[eachAttributeName].value;
                if (eachAttributeNameExists === "style") {
                    attrValue = this.transformStyleString(attrValue);
                }
                actualAttributes[eachAttributeNameExists] = attrValue;
            }
        });

        /** Finding relevant child nodes and pushing it into an array for further running of DFS. */
        rootNode.childNodes.forEach((eachChild) => {
            /**  For ignoring dom objects been created beacuse of space or newline characters */
            const nodeValue = eachChild?.nodeValue?.trim();
            if (
                (eachChild.nodeName === "#text" &&
                    nodeValue &&
                    eachChild.nodeName !== "#comment") ||
                (eachChild.nodeName !== "#text" &&
                    eachChild.nodeName !== "#comment")
            ) {
                actualChildNodes.push(eachChild);
            }
        });

        /** Providing a non-clashing key to each component of our new component tree. */
        this.randomKey += 1;

        /** Instantiating an object for each rootNode.
         * @constant
         */
        const nodeObject = {
            key: this.randomKey,
            nodeName: nodeName,
            attributes: actualAttributes,
            childNodes: [],
            nodeValue: rootNode?.nodeValue,
        };

        if (actualChildNodes.length === 0) {
            /**  Returns nodeObject is the `rootNode` is a leaf.*/
            return nodeObject;
        } else {
            /**  For each non-leaf node recursively explore each child node and populate
             * the `actualChildNodes` and finally return the adjacency list.*/
            actualChildNodes.forEach((eachChild, inx) => {
                const currentChildNode = { ...this.computeSubTrees(eachChild) };
                actualChildNodes[inx] = { ...currentChildNode };
            });
            nodeObject.childNodes = [...actualChildNodes];

            return nodeObject;
        }
    }

    /** Parses the svg in top-down approach and constructs a react component for injection.
     * @function
     */
    performConversion() {
        const { wrapperCompObject } = this.state;
        let rootNodeIndex = -1;

        /** Check if the file contains a valid parsable content or not. */
        for (let inx = 0; inx < wrapperCompObject.childNodes.length; inx++) {
            if (wrapperCompObject.childNodes[inx].nodeName !== "#comment") {
                rootNodeIndex = inx;
                break;
            }
        }

        /** Adjacency list of all nodes of svg.
         * @constant
         */
        const rootObject = this.computeSubTrees(
            wrapperCompObject.childNodes[0]
        );

        this.setState({
            domObject: rootObject,
            RootComponent:
                rootNodeIndex !== -1 ? (
                    (props) => {
                        return getWrapperComponent(rootObject, props);
                    }
                ) : (
                    <>{`Invalid SVG File`}</>
                ),
        });
    }

    /** As the component mounts we, based on the props, trigger the `performConversion` function.
     * @function
     */
    componentDidMount() {
        const { src, type } = this.props;
        if (type === "file") {
            fetch(src)
                .then((res) => res.text())
                .then((resText) => {
                    let updatedCompWrapperObject = {
                        ...this.state.wrapperCompObject,
                    };
                    if (resText.length > 0) {
                        updatedCompWrapperObject =
                            new DOMParser().parseFromString(
                                removeNewlineCharacters(resText),
                                `application/xml`
                            );
                    }
                    this.setState(
                        {
                            fileData: resText,
                            wrapperCompObject: updatedCompWrapperObject,
                        },
                        () => {
                            this.performConversion();
                        }
                    );
                });
        } else if (type === "string") {
            let updatedCompWrapperObject = new DOMParser().parseFromString(
                removeNewlineCharacters(src),
                `application/xml`
            );
            this.setState(
                {
                    fileData: src,
                    wrapperCompObject: updatedCompWrapperObject,
                },
                () => {
                    this.performConversion();
                }
            );
        }
    }

    render() {
        const { RootComponent, domObject } = this.state;

        /** Passing all props to root component instead of that src props. */
        const allProps = { ...this.props };
        delete allProps.src;

        return (
            <>
                {Object.values(domObject).length > 0 && (
                    <RootComponent {...allProps} />
                )}
            </>
        );
    }
}

SVGWrapper.defaultProps = {
    type: "file",
};

SVGWrapper.propTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.string,
};

/** Removes all new line, non-text chars from a string.
 * @function
 */
function removeNewlineCharacters(inpString) {
    let tempString = "";
    const noSpaceList = inpString.split(/\r?\n|\r/g);
    noSpaceList.forEach((element) => {
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
    const nodeAttributes = { ...rootNode.attributes };
    const rootNodeValue = rootNode?.nodeValue?.trim();
    const NodeName = rootNode.nodeName;

    /** If a node contains just a text, then enclose it with a fragment and retur. */
    if (NodeName === "#text") {
        return (
            <React.Fragment key={rootNode.key}>{rootNodeValue}</React.Fragment>
        );
    }

    /** We ignore comments */
    if (NodeName === "#comment") {
        return <></>;
    }

    /** For each node, create a component from its nodeName and pass all its props.
     * @function
     */
    const NodeComponent = (props) => (
        <NodeName {...props}>{props.children}</NodeName>
    );

    if (rootNode.childNodes.length === 0) {
        /** For leaf nodes we return the component back to parent. */
        return <NodeComponent {...nodeAttributes} key={rootNode.key} />;
    } else {
        /** For non-leaf nodes we recursively create the child components and
         * then attach them to their parent and then finally
         * return the root of the component tree */
        const SiblingComponents = [];
        rootNode.childNodes.forEach((eachChild, inx) => {
            const EachChildComp = getWrapperComponent(eachChild, {});
            SiblingComponents.push(EachChildComp);
        });
        return (
            <NodeComponent
                {...nodeAttributes}
                {...parentProps}
                key={rootNode.key}
            >
                {SiblingComponents}
            </NodeComponent>
        );
    }
}

export default SVGWrapper;

/** All valid html/svg attributes.
 *  @constant
 * @readonly
 */
const attributeNameMapping = {
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
    class: "className",
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
    default: "default",
    defaultchecked: "defaultChecked",
    defaultvalue: "defaultValue",
    defer: "defer",
    dir: "dir",
    disabled: "disabled",
    download: "download",
    draggable: "draggable",
    enctype: "encType",
    for: "htmlFor",
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
    in: "in",
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
    typeof: "typeof",
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
    zoomandpan: "zoomAndPan",
};
