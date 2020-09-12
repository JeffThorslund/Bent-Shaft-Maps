```js
import Slider from "./Slider";

const [level, setLevel] = React.useState(0);

<Slider min={-5} max={10} units={"ft"} level={level} setLevel={setLevel} />;
```
