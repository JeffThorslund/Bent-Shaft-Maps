```js
import GeneralButton from "./GeneralButton";
import { BrowserRouter as Router } from "react-router-dom";

<Router>
  <GeneralButton
    text="General Button"
    onClick={() => {
      alert("You clicked the GeneralButton.js");
    }}
  />
</Router>;
```
