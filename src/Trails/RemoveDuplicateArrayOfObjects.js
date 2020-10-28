import React, { Component } from 'react';

class RemoveDuplicateArrayOfObjects extends Component {
    state = {
        mesages: [
            { id: 1, value: "one" },
            { id: 1, value: "one" },
            { id: 1, value: "one" },
            { id: 2, value: "two" },
            { id: 1, value: "one" },
            { id: 3, value: "three" },
            { id: 1, value: "one" },
        ],
        unique_values: [],

    }

    RemoveDuplocateFromObject = (ArrayObjects) => {
        let unique_values = ArrayObjects.filter((ele, ind) => ind === ArrayObjects.findIndex(elem => elem.id === ele.id))
        return unique_values.map((item, index) => {
            return <p>{index} : {item.id} - {item.value}</p>
        })
    }

    render() {
        return (
            <div>
                Data before Remove Dup :
                {this.state.mesages.map((item, index) => (<p>{index} : {item.id} - {item.value}</p>))}
                <div>
                    Data after Remove Dup :
              {this.RemoveDuplocateFromObject(this.state.mesages)}
                </div>
                {/* <button onClick={() => this.setState({ bla: this.state.bla + 1 })} > {this.state.bla}</button> */}
            </div>
        );
    }
}

export default RemoveDuplicateArrayOfObjects;