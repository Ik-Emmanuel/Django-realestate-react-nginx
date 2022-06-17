import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Property from "../components/Property";
import Spinner from "../components/Spinner";
import Title from "../components/Title";
import { getProperties } from "../features/properties/propertySlice";

const PropertiesPage = () => {

	// #instantiate with instial state
	const { properties, isLoading, isError, message } = useSelector(
		(state) => state.properties
	);

	// get dispatcher ready
	const dispatch = useDispatch();

	// use to get the get properties functions
	useEffect(() => {

		if (isError) {
			toast.error(message, { icon: "😪" });
		}

		dispatch(getProperties());
		
	}, [dispatch, isError, message]);



	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<Title title="Our Properties Catalog" />
			<Container>
				<Row>
					<Col className="mg-top text-center">
						<h1>Available properties</h1>
						<hr className="hr-text" />
					</Col>
				</Row>
				{
					<>
					<div style={{display:"flex", justifyContent: "center", alignSelf:"center"}}>
					<Row className="mt-3" >
							{properties.map((property) => (
								<Col
									key={property.id}
									sm={12}
									md={6}
									lg={4}
									xl={3}

									style={{margin: "10px 20px"}}
								>
									<Property property={property} />
								</Col>
							))}
						</Row>

					</div>
					
					</>
				}
			</Container>
		</>
	);
};

export default PropertiesPage;