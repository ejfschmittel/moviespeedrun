import React from "react";
import LoadingIndicator from "./LoadingIndicator.component";
import "../styles/components/loadingOverlay.styles.scss"

const LoadingOverlay = ({isLoading}) => {
    return (
        <div className={`loading-overlay ${isLoading && 'loading-overlay--loading'}`}>
            <LoadingIndicator />
        </div>
    )
}

export default LoadingOverlay;