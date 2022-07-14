import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form style={{ border: "1px solid blue", padding: "10px" }}>

                <input className="form-control" placeholder="search..."
                    type="text"
                    style={{ width: "100%" }}
                    value={this.props.filterText}
                    onChange={this.handleFilterChanged}>
                </input>


                <table style={{ width: "100%" }}>
                    <tr>
                        <td style={{ width: "50px" }}>

                            <input style={{ width: "50px", top: "-" }} onChange={this.handleInStockChanged}
                                type="checkbox"
                                checked={this.props.inStockOnly} />
                            <label>Is In Stock</label>
                        </td>


                    </tr>
                </table>





            </form>
        )
    }

    handleFilterChanged = (e) => {
        let filterValue = e.target.value;

        //parent send calback named onFilterChanged
        //Invoke Parent onFilterChanged method
        this.props.onFilterChanged(filterValue);

    }

    handleInStockChanged = (e) => {
        let isChecked = e.target.checked;
        //parent send calback named onFilterChanged
        //Invoke Parent onFilterChanged method
        this.props.onInStockChanged(isChecked);
    }

}