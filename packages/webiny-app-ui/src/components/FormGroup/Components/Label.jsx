import React from "react";
import { createComponent, LazyLoad } from "webiny-app";
import styles from "./../styles.css?prefix=wui-formGroup";

class Label extends React.Component {
    render() {
        if (this.props.render) {
            return this.props.render.call(this);
        }

        let tooltip = null;
        if (this.props.tooltip) {
            tooltip = (
                <LazyLoad modules={["Tooltip", "Icon"]}>
                    {({ Tooltip, Icon }) => (
                        <Tooltip key="label" target={<Icon icon="info-circle" />}>
                            {this.props.tooltip}
                        </Tooltip>
                    )}
                </LazyLoad>
            );
        }
        return (
            <label className={styles.label}>
                {this.props.children} {tooltip}
            </label>
        );
    }
}

Label.defaultProps = {
    tooltip: null
};

export default createComponent(Label);
