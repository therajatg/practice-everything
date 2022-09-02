import { memo } from "react";

function Child({ name }) {
  console.log("Child component rendered");

  return <>I am the child component {name}</>;
}

export const MemoizedChild = memo(Child);

// Ok, so this is being memoized since things are not changing but what if things change how do we know.

// useMemo: memoizes a value.
//memo: memoizes a component
//useCallback: memoizes a function
