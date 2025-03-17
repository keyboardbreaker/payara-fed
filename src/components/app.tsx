import React, { useState } from "react";
import Banner from "./banner";
import { Theme } from "@/enums/themes";

const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.light);

    const toggleTheme = (): void => {
        setTheme(theme === Theme.light ? Theme.dark : Theme.light);
    };

    return (
        <>
            <section className={`theme-${theme}`}>
                <button onClick={toggleTheme}>{"Toggle Theme"}</button>
                <Banner />
            </section>
        </>
    )
};

export default App;