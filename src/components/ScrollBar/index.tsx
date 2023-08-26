import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./style.css";

interface IProps {
    children:React.ReactNode
    bottom?: string;
    className?: string;
    initialView?: "top" | "bottom";
    isPositionChange?: boolean;
    onScrollUp?: (container: HTMLElement) => void;
    onScrollDown?: (container: HTMLElement) => void;
}

const ScrollBar: FC<IProps> = ({
    children,
    bottom,
    className,
    initialView,
    isPositionChange,
    onScrollUp,
    onScrollDown,
    ...rest
}) => {
    const [scrollEl, setScrollEl] = useState<HTMLElement>();
    useEffect(() => {
        if (initialView !== "bottom") return;
        if (scrollEl) {
            // Set the scroll position to the bottom
            setTimeout(() => {
                scrollEl.scrollTop = scrollEl.scrollHeight + 100;
            }, 50);
        }
    }, [scrollEl, initialView, isPositionChange]);

    return (
        <div
            {...rest}
            className={clsx("scrollbar", className)}
            style={{ height: bottom ? `calc(100% - ${bottom} - 10px)` : "100%" }}
        >
            <PerfectScrollbar onScrollUp={onScrollUp} onScrollDown={onScrollDown} containerRef={(ref) => setScrollEl(ref)}>
                {children}
            </PerfectScrollbar>
        </div>
    );
};

ScrollBar.defaultProps = {
    initialView: "top",
};

export default ScrollBar;
