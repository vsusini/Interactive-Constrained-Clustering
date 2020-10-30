import React, { Component } from 'react';
import { Col } from 'react-bootstrap'
import { ChartSlot } from "./singleChartDisplay"

class ChartsDisplay extends Component {
    constructor(props) {
        super(props)
        this.iterationCount = props.iterationCount
    }

    getImageArr() {
        var imageArr = [];
        var smallerArray = []
        for (let index = 0; index < this.iterationCount; index++) {
            smallerArray.push(require("../../images/clusterImg" + (index + 1) + ".png").default)
            if (smallerArray.length === 3) {
                imageArr.push(smallerArray)
                smallerArray = []
            }
        }
        if (smallerArray.length) {
            imageArr.push(smallerArray)
        }
        //console.log("ImageArray", imageArr)
        return imageArr
    }

    render() {
        const imageArr = this.getImageArr()
        let realIndex = 0
        return (
            <div>
                {imageArr.map((key, index) => {
                    return (
                        <div className="rowNoMargin" key={index}>
                            {key.map((link) => {
                                realIndex = realIndex +1
                                return (
                                    <Col key={realIndex}>
                                        <ChartSlot
                                            iteration={realIndex}
                                            imgSrc={link}>
                                        </ChartSlot>
                                    </Col>
                                )
                            })
                            }
                        {realIndex % 3 === 1 ? <Col className="my-3 mx-5"></Col> : null}
                        {realIndex % 3 === 1 ? <Col className="my-3 mx-5"></Col> : null}
                        {realIndex % 3 === 2 ? <Col className="my-3 mx-5"></Col> : null}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ChartsDisplay;