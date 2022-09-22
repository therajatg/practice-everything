import { useEffect, useState } from "react";
import axios from "axios";

export const Component = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(
      () =>
        fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            setData(json);
          }),
      3000
    );
  }, []);

  return <>{data?.title}</>;
};
