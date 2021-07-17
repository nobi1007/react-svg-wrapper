## react-svg-wrapper
> A react component for injecting a svg file (or string) into a DOM tree.


#### demo
Check it out [here in sandbox 🔗](https://codesandbox.io/s/staging-brook-98ist?file=/src/App.js)


#### usage

props |  description
--- | ---
`src` | **_required_**, svg file or string to be passed via this prop
`type` | _optional_, default value = `file`, if svg string has to be passed, we need to use `type='string'`

> Also, numerous vaild html, svg props can be passed to top-level too :), see example below for reference.


```jsx
import React from "react";
import SVGWrapper from "react-svg-wrapper";

// import the svg you want to render
import myLogo from "../images/myLogo.svg";

const MyComp = () => {
  return (
    // some wrapper/parent component if needed
    <someComp>
      <SVGWrapper
        src={svg}
        className="App-logo"
        style={{
          backgroundColor: "red",
          border: "solid 1px",
          borderRadius: "10px",
        }}
      />
    </someComp>
  );
};

export default MyComp;
```

#### motive & idea
* To make a zero-dependency and light-weight package ⚡ for injecting a svg into DOM tree.
* The problem was simple we wanted to use svg in our react apps directly and control it's behaviour based on some business logic.
* So, we thought of making a wrapper from ground-zero by using basic DFS and dom tree analysis.


#### in near future ...
- [ ] accepting svg's via hyperlinks
- [ ] reducing package size to 15Kb
