import { useState } from 'react';
import styled from 'styled-components';
import { Form } from '../components/Form';
import { Gratitude } from '../components/Gratitude';
import { defaultData } from '../data/defaultData';

const Journal = () => {
	const [ gratitudes, setGratitudes ] = useState(defaultData);

	const updateGratitudes = (id) => {
		let copyGratitudes = [ ...gratitudes ];
		copyGratitudes = copyGratitudes.filter((i) => i.id !== id);
		console.log(copyGratitudes);
		setGratitudes(copyGratitudes);
	};

	const clearGratitudes = () => {
		if (gratitudes.length === 0) {
			alert('There are no gratitudes to clear.');
			return;
		}
		setGratitudes([]);
	};

	return (
		<Wrapper>
			<Form gratitudeSize={gratitudes.length} setGratitudes={setGratitudes} clearGratitudes={clearGratitudes} />
			<GratitudesWrapper>
				{gratitudes.map((gratitude, index) => (
					<Gratitude
						id={gratitude.id}
						content={gratitude.content}
						key={gratitude + ' ' + String(gratitude.id)}
						updateGratitudes={updateGratitudes}
					/>
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
	background-color: rgb(240, 182, 89);
`;

const GratitudesWrapper = styled.section`
	width: 85%;
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	article:nth-child(even) {
		background-color: #1f2937;
		color: rgb(229, 231, 235);
		span:hover {
			color: rgb(77, 185, 244);
		}
	}
`;

export default Journal;
