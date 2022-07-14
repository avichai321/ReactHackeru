import React, { Component } from 'react'
import RowItemCategory from './rowItemCategory'
import RowItemProduct from './rowItemProduct'


export default class ProductsTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <RowItemCategory
                        category={product.category}
                        key={product.category} />
                );
            }
            rows.push(
                <RowItemProduct
                    product={product}
                    key={product.name}
                />
            );
            lastCategory = product.category;
        });

        return (
            <table className="table" style={{ border: "1px solid green" }}>
                <thead>
                    <tr class="table-dark" >
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}