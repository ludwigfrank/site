import React, { Component } from 'react'

export const MyContext = React.createContext()

class DataProvider extends Component {
    render() {
        return (
            <MyContext.Provider value={this.props.value}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default DataProvider
