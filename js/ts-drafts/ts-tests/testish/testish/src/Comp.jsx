import { memo } from "react";

const Comp = memo(() => {
  console.log("aaaa");
  return <div></div>;
});

export default Comp;
