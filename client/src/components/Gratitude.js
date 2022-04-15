import styled from 'styled-components';

export const Gratitude = ({ content = 'I will pass my final exams!', id, updateGratitudes }) => {
	const handleClick = (id) => updateGratitudes(id);
	return (
		<GratitudeWrapper>
			<p>{content}</p>
			<XButton id={id} onClick={(e) => handleClick(id)}>
				&times;
			</XButton>
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

const XButton = styled.button`
	position: absolute;
	top: 0;
	right: 0.5%;
	font-size: 2rem;
	background-color: transparent;
	border: none;
	&:hover {
		cursor: pointer;
		color: rgb(229, 231, 235);
	}
`;
