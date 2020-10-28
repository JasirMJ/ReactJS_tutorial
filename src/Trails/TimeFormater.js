import React, { Component } from 'react';

class TimeFormater extends Component {

    renderTimestamp = timestamp => {
        console.log("recieved time ", timestamp)
        // console.log("recieved time getTime ", timestamp.getTime())
        let prefix = '';
        let label = ""

        let currentTIme = new Date().getTime()
        console.log("Current timestamp ", currentTIme);

        let recievedTime = new Date(timestamp).getTime()
        console.log("Recieved timestamp ", recievedTime);

        let convertedTime = currentTIme - recievedTime
        const timeDiff = Math.round(convertedTime)
        console.log("Time Difference : ", timeDiff);

        let minute = 60 * 1000
        let hour = 24 * minute
        let day = 31 * hour


        console.log(`min : ${minute} `);
        console.log(`hr : ${hour} `);
        console.log(`day : ${day} `);

        console.log(typeof (timeDiff), " : ", typeof (day)
        );

        if (day < timeDiff) {
            console.log("day");
        } else {
            console.log("timediff");
        }


        if (timeDiff < hour && timeDiff > 1000) {
            // label = timestamp == 1 ? 'minute' : 'minutes'
            prefix = `${Math.round(timeDiff / minute)} minutes`;
        }
        else if (timeDiff < day && timeDiff > hour) {
            label = timestamp < minute ? 'minute' : 'minutes'
            prefix = `${Math.round(timeDiff / hour)} hours ago`;
        }
        else if (timeDiff > day) {
            prefix = `${Math.round(timeDiff / day)} days ago`;
        }
        else {
            prefix = `${Math.round(timeDiff / 1000)} seconds ago`;
        }

        return prefix
    }


    render() {
        return (
            <div>
                {this.renderTimestamp(new Date())}
                {/* {(new Date().getTime() - new Date('2020-10-17T10:30:45.388927Z').getTime())} */}
            </div>
        );
    }
}

export default TimeFormater;