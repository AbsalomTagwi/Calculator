// Wrapper component will be the frame, holding all the children components in place. It will also allow us to center the whole app

import "./Wrapper.css";

const Wrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;