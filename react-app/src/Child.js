import { memo } from "react";

function Child({ name }) {
  console.log("Child component rendered");
  console.log(name);
  return <>I am the child component</>;
}

export const MemoizedChild = memo(Child, [areEqual(prevProps, nextProps)]);

// Ok, so this is being memoized since things are not changing but what if things change how do we know.

// useMemo: memoizes a value.
//memo: memoizes a component
//useCallback: memoizes a function
