import styled from 'styled-components';

export const Modal = ({ children, isOpen, closeModal, clearGratitudes }) => {
	const handleConfirm = () => {
		clearGratitudes();
		closeModal();
	};
	const handleCancel = () => {
		closeModal();
	};
	return (
		isOpen && (
			<ModalOverlay isOpen={isOpen}>
				<ModalWrapper>
					<ModalCloseWrapper>
						<ModalClose onClick={closeModal}>&times;</ModalClose>
					</ModalCloseWrapper>
					<ModalContent>{children}</ModalContent>
					<ButtonsContainer>
						<CancelButton onClick={() => handleCancel()}>Cancel</CancelButton>
						<ConfirmButton onClick={() => handleConfirm()}>Confirm</ConfirmButton>
					</ButtonsContainer>
				</ModalWrapper>
			</ModalOverlay>
		)
	);
};

const ModalOverlay = styled.section`
	display: ${(p) => (p.isOpen ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, .5);
	transition: opacity .2s ease;
	opacity: ${(p) => (p.isOpen ? 1 : 0)};
	text-align: center;
`;

const ModalWrapper = styled.div`
	flex-basis: 50%;
	padding: 1rem 2rem;
	background-color: #fff;
	border-radius: 3px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
`;

const ModalCloseWrapper = styled.span`
	position: absolute;
	top: 1%;
	right: 1.5%;
`;

const ModalClose = styled.a`
	color: inherit;
	text-decoration: none;
	font-size: 2rem;
`;

const ModalContent = styled.p`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 60%;
	margin: 0 auto;
`;

const CancelButton = styled.button`
	width: fit-content;
	height: 50px;
	padding: 1rem 2rem;
	border-radius: 4px;
	background-color: rgb(145, 48, 37);
	border: normal solid rgb(70, 97, 70);
	font-weight: bold;
	&:hover {
		transform: scale(105%);
	}
	&:disabled {
		cursor: not-allowed;
	}
`;

const ConfirmButton = styled.button`
	width: fit-content;
	height: 50px;
	padding: 1rem 2rem;
	border-radius: 4px;
	background-color: rgb(70, 97, 70);
	border: normal solid rgb(70, 97, 70);
	font-weight: bold;
	&:hover {
		transform: scale(105%);
	}
	&:disabled {
		cursor: not-allowed;
	}
`;
