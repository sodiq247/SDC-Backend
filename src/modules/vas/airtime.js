/** @format */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Header from "../Components/Header";
// import Sidebar from "../Components/Sidebar";



import { useState, useEffect  } from "react";
import { useForm } from "react-hook-form";


function BuyData() {
	return (
		<div>
			{/* <Header />
			<Sidebar /> */}
			<Container className="BuyData-main">
				<div className="BuyData-submain Form-submain">
					<Row>
						<Col sm={10} xs={{ order: "" }} className="BuyData-form BuyAirtime">
							<Form className="input-form">
								<Form.Label className="label">Network</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="mb-3">
									<option></option>
									<option value="1">MTN</option>
									<option value="2">GLO</option>
									<option value="3">Airtel</option>
									<option value="3">9mobile</option>
								</Form.Select>
								<Form.Label className="label phone-label">
									Airtime type
								</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="mb-3">
									<option></option>
									<option value="1">VTU</option>
									<option value="2">SHARE and SELL</option>
								</Form.Select>
								<p className="mb-3 plan-note">VTU or share and Sell</p>
								<Form.Group>
									<Form.Label className="label phone-label">
										Phone Number
									</Form.Label>
									<Form.Control
										type="phone-number"
										placeholder="08105082299"
										className="mb-3"
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label className="label">Amount</Form.Label>
									<Form.Control
										type="phone-number"
										placeholder="200"
										className="mb-3"
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label className="label phone-label">
										Amount to pay
									</Form.Label>
									<Form.Control
										type="phone-number"
										placeholder="200"
										className="mb-3"
									/>
								</Form.Group>
								<Button className="Buy-now-btn">Buy Now</Button>{" "}
							</Form>
						</Col>
						{/* <Col sm={4} xs={{ order: '' }}>sm=4</Col> */}
					</Row>
				</div>
			</Container>
		</div>
	);
}

export default BuyData;
