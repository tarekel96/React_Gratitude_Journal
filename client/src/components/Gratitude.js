import styled from 'styled-components';

export const Gratitude = ({ content = 'I will pass my final exams!', id, updateGratitudes }) => {
	const handleClick = (id, content) => updateGratitudes(id, content);
	return (
		<GratitudeWrapper onClick={(e) => handleClick(id, content)} id={id}>
			<p id={id}>{content}</p>
			<XButton id={id}>&times;</XButton>
		</GratitudeWrapper>
	);
};

const GratitudeWrapper = styled.article`
	background-color: rgb(77, 185, 244);
	padding: 1rem 2rem;
	border-radius: 6px;
	width: 100%;
	text-align: center;
	border: 3px solid black;
	position: relative;
	@media (max-width: 768px) {
		font-size: 0.8rem;

		span {
			font-size: 1.5rem;
		}
	}
`;

const XButton = styled.span`
	position: absolute;
	top: 0;
	right: 0.5%;
	font-size: 2rem;
	&:hover {
		cursor: pointer;
		color: rgb(229, 231, 235);
	}
`;
