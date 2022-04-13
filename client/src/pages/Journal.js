import { useState } from 'react';
import styled from 'styled-components';
import { Form } from '../components/Form';
import { Gratitude } from '../components/Gratitude';

const Journal = () => {
	const [ gratitudes, setGratitudes ] = useState([]);
	return (
		<Wrapper>
			<Form gratitudeSize={gratitudes.length} />
			<GratitudesWrapper>
				<Gratitude />
				<Gratitude />
			</GratitudesWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: baseline;
	align-items: center;
	padding-top: 5%;
	height: 100%;
`;
const GratitudesWrapper = styled.section`
	width: 85%;
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
`;

export default Journal;
