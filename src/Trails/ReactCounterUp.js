import React, { Component } from 'react'
import CountUp from 'react-countup';
export default class ReactCounterUp extends Component {
    render() {
        return (
            <div>
                <CountUp
                    duration={5}
                    start={0.0}
                    end={84.528}
                    decimals={4}

                />

                {/* <CountUp
                    start={-875.039}
                    end={160527.012}
                    duration={2.75}
                    separator=" "
                    decimals={4}
                    decimal=","
                    prefix="EUR "
                    suffix=" left"
                    onEnd={() => console.log('Ended! 👏')}
                    onStart={() => console.log('Started! 💨')}
                >
                    {({ countUpRef, start }) => (
                        <div>
                            <span ref={countUpRef} />
                            <button onClick={start}>Start</button>
                        </div>
                    )}
                </CountUp> */}
            </div>
        )
    }
}
