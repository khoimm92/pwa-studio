import React, { Component } from 'react';
import { bool, func, shape, string } from 'prop-types';

import classify from 'src/classify';
import Main from 'src/components/Main';
import Mask from 'src/components/Mask';
import MiniCart from 'src/components/MiniCart';
import Navigation from 'src/components/Navigation';
import OnlineIndicator from 'src/components/OnlineIndicator';
import defaultClasses from './app.css';
import renderRoutes from './renderRoutes';
import CompareProduct from "../CompareProduct/compareProduct";
import connect from "react-redux/es/connect/connect";
import {compose} from "redux";

class App extends Component {
    static propTypes = {
        app: shape({
            drawer: string,
            overlay: bool.isRequired
        }).isRequired,
        classes: shape({
            root: string,
            root_masked: string
        }),
        closeDrawer: func.isRequired
    };

    get onlineIndicator() {
        const { app } = this.props;
        const { hasBeenOffline, isOnline } = app;

        // Only show online indicator when
        // online after being offline
        return hasBeenOffline ? <OnlineIndicator isOnline={isOnline} /> : null;
    }

    render() {
        const { app, classes, closeDrawer, compareOpen } = this.props;
        const { onlineIndicator } = this;
        const { drawer, overlay } = app;
        const navIsOpen = drawer === 'nav';
        const cartIsOpen = drawer === 'cart';
        const className = overlay ? classes.root_masked : classes.root;

        return (
            <div className={className}>
                <Main isMasked={overlay}>
                    {onlineIndicator}
                    {renderRoutes()}
                </Main>
                <Mask isActive={overlay} dismiss={closeDrawer} />
                <Navigation isOpen={navIsOpen} />
                <MiniCart isOpen={cartIsOpen} />
                <CompareProduct isOpen={compareOpen} />
            </div>
        );
    }
}

const mapStateToProps = ({ app }) => {
    const { compareOpen } = app;
    return {
        compareOpen
    };
};
// export default classify(defaultClasses)(App);

export default compose(
    classify(defaultClasses),
    connect(
        mapStateToProps,
        null
    )
)(App);
