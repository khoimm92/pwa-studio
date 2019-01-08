import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { shape, string } from 'prop-types';

import classify from 'src/classify';
import { toggleCompare } from 'src/actions/app';
import Icon from 'src/components/Icon';
import ProductList from './productList';
import defaultClasses from './compareProduct.css';

class CompareProduct extends Component {
    static propTypes = {
        classes: shape({
            body: string,
            footer: string,
            header: string,
            placeholderButton: string,
            root_open: string,
            root: string,
            summary: string,
            title: string,
            totals: string
        }),
    };

    async componentDidMount() {
        // @TODO: render list of compared product from API
    }

    render() {
        if (this.props.loading) {
            return <div>Fetching Data</div>;
        }

        const { props } = this;
        const { classes, isOpen, toggleCompare, compareProducts } = props;
        console.log(77,compareProducts)
        const className = isOpen ? classes.root_open : classes.root;

        return (
            <aside className={className}>
                <div className={classes.header}>
                    <h2 className={classes.title}>
                        <span>Compare Products</span>
                    </h2>
                    <button onClick={toggleCompare}>
                        <Icon name="x" />
                    </button>
                </div>
                <ProductList
                    items={compareProducts}
                />
            </aside>
        );
    }
}

const mapStateToProps = ({ app }) => {
    const { compareProducts } = app;
    return {
        compareProducts
    };
};

const mapDispatchToProps = { toggleCompare };

export default compose(
    classify(defaultClasses),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(CompareProduct);
