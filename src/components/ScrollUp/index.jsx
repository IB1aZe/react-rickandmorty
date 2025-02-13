import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styles from "./ScrollUp.module.css";
import { useEffect, useState } from "react";

function ScrollUp() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 350);
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <div className={styles.icn_btn_act} id={styles.icn_btn_act}>
                <IconButton onClick={handleClick} aria-label="Scroll to top">
                    <ArrowUpwardIcon size="large" className={styles.icn_arrow} />
                </IconButton>
            </div>
        )
    );
}

export default ScrollUp;
