# frontend-docs (no stuct notes)

## alias (@/)

### настроен в webpack

```js
import path from 'path';

const module = () => {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
```
