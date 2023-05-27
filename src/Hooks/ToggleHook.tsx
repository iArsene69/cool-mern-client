import { createContext, useState, useContext } from "react";

const Change = createContext({});
const ToggleChange = createContext(() => {});

export const useToggle = () => {
  return useContext(Change);
};

export const useToggleChange = () => {
  return useContext(ToggleChange);
};

interface iNavProps {
  children: React.ReactNode;
}

export function ToggleContext(props: iNavProps) {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle((prev) => !prev);
  };

  const style = {
    backgroundColor: toggle ? "#ea580c" : "rgba(156, 117, 155, 1)",
  };

  return (
    <Change.Provider value={style}>
      <ToggleChange.Provider value={toggleNav}>
        {props.children}
      </ToggleChange.Provider>
    </Change.Provider>
  );
}
