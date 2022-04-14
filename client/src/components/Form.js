import styled from 'styled-components';
import { useState } from 'react';

import { Modal } from './Modal';

export const Form = ({ gratitudeSize, setGratitudes, clearGratitudes }) => {
	const [ isOpen, toggleModal ] = useState(false);
	const openModal = () => toggleModal(true);
	const closeModal = () => toggleModal(false);

	const [ input, setInput ] = useState('');

	const firstMsg = "Let's get your journey started! Enter your first gratitude!";
	const altMsg = 'Enter a new gratitude to your journal..';

	const placeHolder = gratitudeSize === 0 ? firstMsg : altMsg;

	const handleChange = (e) => setInput(e.target.value);

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
			<Modal isOpen={isOpen} closeModal={closeModal} openModal={openModal} clearGratitudes={clearGratitudes}>
				Are you sure you want to delete all of the gratitudes?
			</Modal>

			<InputField
				type="text"
				name="user-input"
				placeholder={placeHolder}
				size={firstMsg.length}
				value={input}
				onChange={(e) => handleChange(e)}
			/>
			<ButtonsWrapper>
				<Clear
					type="reset"
					onClick={(e) => {
						e.preventDefault();
						openModal();
					}}
					disabled={gratitudeSize === 0 ? true : false}
				>
					Clear
				</Clear>
				<SubmitButton type="submit" name="submit" disabled={input === '' ? true : false} />
			</ButtonsWrapper>
		</FormWrapper>
	);
};

const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	@media (max-width: 768px) {
		align-items: center;
	}
	@media (max-width: 768px) {
		svg {
			height: 1.5rem;
			width: 1.5rem;
			margin-bottom: 4%;
		}
		article {
			align-self: flex-start;
		}
	}
`;

const InputField = styled.input`
	padding: 0.5rem 1rem;
	border: normal solid rgb(89, 89, 89);
	border-radius: 4px;
	display: block;
	border: 3px solid black;
	@media (max-width: 768px) {
		&::placeholder {
			font-size: 0.6rem;
		}
		width: 300px;
	}
`;

const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 4%;
	width: 100%;
	gap: 10%;
	@media (max-width: 768px) {
		justify-content: space-around;
	}
`;

const SubmitButton = styled.input`
	width: 40%;
	height: 50px;
	padding: 1rem 2rem;
	border-radius: 4px;
	background-color: rgb(70, 97, 70);
	font-weight: bold;
	border: 3px solid black;
	&:hover {
		transform: scale(105%);
	}
	&:disabled {
		cursor: not-allowed;
	}
	@media (max-width: 768px) {
		margin-top: 3%;
		width: 100%;
		font-size: 0.8rem;
	}
`;

const Clear = styled.button`
	width: 40%;
	height: 50px;
	padding: 1rem 2rem;
	border-radius: 4px;
	background-color: rgb(145, 48, 37);
	border: normal solid rgb(70, 97, 70);
	font-weight: bold;
	border: 3px solid black;
	&:hover {
		transform: scale(105%);
	}
	&:disabled {
		cursor: not-allowed;
	}
	@media (max-width: 768px) {
		margin-top: 3%;
		width: 100%;
		font-size: 0.8rem;
	}
`;
