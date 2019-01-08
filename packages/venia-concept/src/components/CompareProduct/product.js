import React, { Component } from 'react';
import { shape, string } from 'prop-types';

import classify from 'src/classify';
import defaultClasses from './product.css';

class Product extends Component {
    static propTypes = {
        classes: shape({
            name: string,
            optionLabel: string,
            root: string
        }),
        item: shape({
            name: string.isRequired,
            sku: string.isRequired
        }).isRequired,
    };

    render() {
        const { props } = this;
        const { classes, item } = props;
        return (
            <li className={classes.root}>

                <div className={classes.name}>{item.name} - {item.sku}</div>
                {/*<Kebab*/}
                    {/*onFocus={this.openDropdown}*/}
                    {/*onBlur={this.closeDropdown}*/}
                    {/*isOpen={this.state.isOpen}*/}
                {/*>*/}
                    {/*<Section*/}
                        {/*text="Add to favorites"*/}
                        {/*onClick={this.favoriteItem}*/}
                        {/*icon="heart"*/}
                        {/*iconAttributes={*/}
                            {/*this.state.isFavorite ? favoritesFill : ''*/}
                        {/*}*/}
                    {/*/>*/}
                    {/*<Section*/}
                        {/*text="Edit item"*/}
                        {/*onClick={this.editItem}*/}
                        {/*icon="edit-2"*/}
                    {/*/>*/}
                    {/*<Section*/}
                        {/*text="Remove item"*/}
                        {/*onClick={this.removeItem}*/}
                        {/*icon="trash"*/}
                    {/*/>*/}
                {/*</Kebab>*/}
            </li>
        );
    }
}

export default classify(defaultClasses)(Product);
