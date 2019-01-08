import React, { Component } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { List } from '@magento/peregrine';

import classify from 'src/classify';
import Product from './product';
import defaultClasses from './productList.css';

class ProductList extends Component {
    static propTypes = {
        classes: shape({
            root: string
        }),
        items: arrayOf(
            shape({
                name: string.isRequired,
                description: string.isRequired,
                sku: string.isRequired
            })
        ).isRequired,
    };

    render() {
        const {
            items
        } = this.props;
        return (
            <List
                items={items}
                getItemKey={item => item.sku}
                render="ul"
                renderItem={props => (
                    <Product
                        {...props}
                    />
                )}
            />
        );
    }
}

export default classify(defaultClasses)(ProductList);
