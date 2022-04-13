import styled from 'styled-components';

export const Gratitude = ({ content = 'I will pass my final exams!' }) => {
	return (
		<GratitudeWrapper>
			<p>{content}</p>
		</GratitudeWrapper>
	);
};

const GratitudeWrapper = styled.article`
	max-width: 30%;
	background-color: rgb(77, 185, 244);
	padding: 1rem 2rem;
	border-radius: 6px;
`;
