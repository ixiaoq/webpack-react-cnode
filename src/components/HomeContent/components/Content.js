import React, { Component } from 'react'

export default class Content extends Component {
    render() {

        const { topicsData } = this.props;
        
        return (
            <div>
                {topicsData}
            </div>
        )
    }
}
