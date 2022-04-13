import styled from 'styled-components';

export const Form = ({ gratitudeSize }) => {
	const firstMsg = "Let's get your journey started! Enter your first gratitude!";
	const altMsg = 'Enter a new gratitude to your journal..';
	const placeHolder = gratitudeSize === 0 ? firstMsg : altMsg;
	return (
		<FormWrapper>
			<InputField type="text" name="user-input" placeholder={placeHolder} size={firstMsg.length} />
			<SubmitButton type="submit" name="submit" />
		</FormWrapper>
	);
};

const FormWrapper = styled.form`display: flex;`;

const InputField = styled.input`padding: 0.5rem 1rem;`;

const SubmitButton = styled.input`
	width: fit-content;
	height: 50px;
	padding: 1rem 2rem;
`;
