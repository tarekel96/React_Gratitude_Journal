import { useState } from 'react';
import styled from 'styled-components';
import { Form } from '../components/Form';
import { Gratitude } from '../components/Gratitude';
import { defaultData } from '../data/defaultData';

const Journal = () => {
	const [ gratitudes, setGratitudes ] = useState(defaultData);
	const clearGratitudes = () => setGratitudes([]);
	return (
		<Wrapper>
			<Form gratitudeSize={gratitudes.length} setGratitudes={setGratitudes} clearGratitudes={clearGratitudes} />
			<GratitudesWrapper>
				{gratitudes.map((gratitude, index) => (
					<Gratitude content={gratitude.content} key={gratitude + ' ' + String(index)} />
				))}
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
	background-color: rgb(89, 89, 89);
`;
const GratitudesWrapper = styled.section`
	width: 85%;
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	article:nth-child(even) {
		background-color: rgb(175, 212, 233);
	}
`;

export default Journal;
