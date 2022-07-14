import React, { Component } from 'react'
import './bootstrap.min.css'
import ProductsTable from './productsTable'
import SearchBar from './searchBar'


let productsData = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];



export default class FilteredProductList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filterText: '',
            inStockOnly: false,
            products: productsData
        }
    }

    render() {
        return (
            <div style={{ border: "1px solid yellow", padding: "20px" }}>
                <SearchBar onFilterChanged={this.filterChanged}
                    onInStockChanged={this.inStockChanged}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                ></SearchBar>
                <ProductsTable
                    products={this.state.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} />


            </div>
        )
    }

    //Callback From SearchBar
    filterChanged = (filterTextInput) => {
        this.setState({ filterText: filterTextInput });
    }

    //Callback From SearchBar
    inStockChanged = (inStockInput) => {
        this.setState({ inStockOnly: inStockInput });
    }

}