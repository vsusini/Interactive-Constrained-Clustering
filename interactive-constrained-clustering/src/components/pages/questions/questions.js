import React from 'react';
import { Link } from "react-router-dom";
import { Col, Row, Button } from 'react-bootstrap';
import { ChartSlot } from '../../chartsDisplay/singleChartDisplay'
import { AppContext } from "../../../App"
import { ModalChartDisplay } from "../../chartsDisplay/modalChartDisplay"
import TableDisplay from "./tableDisplay"
import ButtonsComponent from "./buttonsComp"
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-promise-loader';

export const Questions = (props) => {
    const { promiseInProgress } = usePromiseTracker()
    function handleImagePassing(count) {
        try {
            return require("../../../images/clusterImg" + count + ".png").default
        } catch (error) {
            console.log("Image Error")
        }
    }
    return (
        <>
            {
                (promiseInProgress === true) ?
                    <div>
                        <Loader promiseTracker={usePromiseTracker} />
                        <span>I promise im trying</span>
                    </div>
                    :
                    <AppContext.Consumer>
                        {context => (
                            <div className="mx-4">
                                <div className="outerBorders rowNoMargin topOuterBorder imageViewOptions">
                                    <Col>

                                    </Col>
                                    <Col xs={3}>
                                        <ChartSlot
                                            iteration={context.iterationCount}
                                            // imgSrc={"../../images/clusterImg" + context.iterationCount + ".png"}>
                                            imgSrc={handleImagePassing(context.iterationCount)}>
                                        </ChartSlot>
                                    </Col>
                                    <Col>
                                        <Row>

                                            <Col>
                                            </Col>
                                            <Col className="">
                                                Options
                                                <Row className="ml-auto">
                                                    <Col>
                                                        <Link to="/summary"><Button className="btn-block my-3" variant="danger">Finish</Button></Link>
                                                    </Col>
                                                </Row>
                                                <Row className="ml-auto">
                                                    <Col>
                                                        <ModalChartDisplay></ModalChartDisplay>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>


                                        </Row>
                                        <Row>

                                        </Row>
                                    </Col>
                                </div>
                                <div className="rowNoMargin lowerViewOptions">
                                    <Col className="outerBorders marginLeft0">
                                        {/* <TableDisplay dataArr={context.dataArr} set={[1, 2, 3, 4]}></TableDisplay> */}
                                        {/* For when the loading is implemented */}
                                        <TableDisplay dataArr={context.dataArr} set={context.output.question_set}></TableDisplay>
                                    </Col>
                                    <Col className="">
                                        <Row className="outerBorders">
                                            <ButtonsComponent set={context.output.question_set} python={context.trackPython} totalQuestion={context.formInput.questionsPerIteration}></ButtonsComponent>
                                        </Row>
                                        <Row className="outerBorders">

                                        </Row>
                                    </Col>
                                </div>
                            </div>

                        )}
                    </AppContext.Consumer>
            }
        </>
    );
}