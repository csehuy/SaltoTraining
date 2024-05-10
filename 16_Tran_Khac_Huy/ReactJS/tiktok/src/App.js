import { useState } from "react"

import UseState, { UseStateInfo } from "./components/Hooks/useState/useState"
import UseEffect from "./components/Hooks/useEffect/useEffect"
import UseRef, { UseRefGetPreCount, UseRefGetDomElement } from "./components/Hooks/useRef/useRef"
import UseCallback from "./components/Hooks/useCallback/useCallback"
import UseMemo from "./components/Hooks/useMemo/useMemo"
import Search from "./components/Search/Search"

function App() {
  const [type, setType] = useState('')

  const hooks = [
    { name: "UseState", component: UseState },
    { name: "UseStateInfo", component: UseStateInfo },
    { name: "UseEffect", component: UseEffect },
    { name: "UseRef", component: UseRef },
    { name: "UseRefGetPreCount", component: UseRefGetPreCount },
    { name: "UseRefGetDomElement", component: UseRefGetDomElement },
    { name: "UseCallback", component: UseCallback },
    { name: "UseMemo", component: UseMemo },
    { name: "Search", component: Search}
  ];

  const renderHookComponent = () => {
    const selectedHook = hooks.find(hook => hook.name === type);

    if (selectedHook) {
      const Component = selectedHook.component;
      return <Component />;
    }

    return null;
  };

  return (
    <div className="app">
      {hooks.map(hook => (
        <button
          key={hook.name}
          style={type === hook.name ? {
            color: '#fff',
            backgroundColor: '#333'
          } : {}}
          onClick={() => setType(hook.name)}
        >
          {hook.name}
        </button>
      ))}
      {renderHookComponent()}
    </div>
  )
}

export default App