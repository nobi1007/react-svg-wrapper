<h2>
        ! Component Description !
      </h2>
      <section className="main">
        <ol type="a">
          <li>
            The <code>SVGWrapper</code> component converts your svg file (passed as a prop) into and React component in-place.
          </li>
          <li>
          Props description:
          <ul>
          <li>The <code>src</code> prop is a required. prop</li>
          <li>Also, you can any <code>props</code> to it as you wish.</li>
          </ul>
          </li>
          <li>
            For, full logic of the component chekout 
            <a href="https://github.com/nobi1007/react-svg-wrapper/blob/main/src/SVGWrapper/index.js">
              here
            </a>
            .
          </li>
          <li>
            And, do :star: and :fork_and_knife: the repo if it was <u>fantastic</u> :)
          </li>
        </ol>
      </section>

---

<h2>! Usage !</h2>

```js
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
