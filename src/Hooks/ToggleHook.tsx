import { createContext, useState, useContext } from "react";


const Change = createContext(false);
const ToggleChange = createContext(()=>{});

export const useNav = () => {
    return useContext(Change)
}

export const useNavChange = () => {
    return useContext(ToggleChange)
}

interface iNavProps {
    children: React.ReactNode
}

export function ToggleContext(props: iNavProps) {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle((prev) => !prev);
  };
  return(
    <Change.Provider value={toggle}>
        <ToggleChange.Provider value={toggleNav}>
            {props.children}
        </ToggleChange.Provider>
    </Change.Provider>
  );
}
