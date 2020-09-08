import React from "react";
import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import { createTheme, Customizations, Fabric } from "office-ui-fabric-react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
initializeIcons();
const myTheme = createTheme({
  palette: {
    themePrimary: "#00aaff",
    themeLighterAlt: "#00070a",
    themeLighter: "#001b29",
    themeLight: "#00334d",
    themeTertiary: "#006699",
    themeSecondary: "#0096e0",
    themeDarkAlt: "#19b2ff",
    themeDark: "#3dbeff",
    themeDarker: "#70cfff",
    neutralLighterAlt: "#1a1a1a",
    neutralLighter: "#232323",
    neutralLight: "#323232",
    neutralQuaternaryAlt: "#3b3b3b",
    neutralQuaternary: "#434343",
    neutralTertiaryAlt: "#636363",
    neutralTertiary: "#c8c8c8",
    neutralSecondary: "#d0d0d0",
    neutralPrimaryAlt: "#dadada",
    neutralPrimary: "#ffffff",
    neutralDark: "#f4f4f4",
    black: "#f8f8f8",
    white: "#0f0f0f",
  },
});
function App() {
  Customizations.applySettings({ theme: myTheme });

  return (
    <Fabric applyThemeToBody>
      <div className="d-flex h-100">
        <div className="h-100 p-3">
          <SideNav />
        </div>
        <main className="h-100 p-3 flex-grow-1"></main>
      </div>
    </Fabric>
  );
}

export default App;
