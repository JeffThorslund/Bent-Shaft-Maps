```js
import SearchBar from "./SearchBar";

const [value, setValue] = React.useState(null);

<SearchBar
  value={value}
  onChange={(e) => {
    setValue(e.currentTarget.value);
  }}
  placeholder="Type something here!"
/>;
```
