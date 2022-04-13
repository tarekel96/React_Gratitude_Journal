import styled from 'styled-components';
import { useState } from 'react';

export const Form = ({ gratitudeSize, setGratitudes }) => {
	const [ input, setInput ] = useState('');
	const handleChange = (e) => setInput(e.target.value);
	const firstMsg = "Let's get your journey started! Enter your first gratitude!";
	const altMsg = 'Enter a new gratitude to your journal..';
	const placeHolder = gratitudeSize === 0 ? firstMsg : altMsg;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (input === '') {
			alert('Please enter a gratitude before submitting.');

			return;
		}
		const newGratitude = {
			content: input
		};
		setGratitudes((prevLst) => [ newGratitude, ...prevLst ]);
		setInput('');
	};
	return (
		<FormWrapper onSubmit={(e) => handleSubmit(e)}>
			<InputField
				type="text"
				name="user-input"
				placeholder={placeHolder}
				size={firstMsg.length}
				value={input}
				onChange={(e) => handleChange(e)}
			/>
			<SubmitButton type="submit" name="submit" />
		</FormWrapper>
	);
};

const FormWrapper = styled.form`display: flex;`;

const InputField = styled.input`
	padding: 0.5rem 1rem;
	border: normal solid rgb(89, 89, 89);
	border-radius: 4px;
`;

const SubmitButton = styled.input`
	width: fit-content;
	height: 50px;
	padding: 1rem 2rem;
	border-radius: 4px;
	background-color: rgb(70, 97, 70);
	border: normal solid rgb(70, 97, 70);
	font-weight: bold;
`;
