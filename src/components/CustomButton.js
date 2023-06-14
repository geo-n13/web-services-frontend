import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/CustomButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomButton = ({ label, onClick, icon, isModalButton, children }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleButtonClick = () => {
        if (isModalButton) {
            setModalOpen(true);
        } else {
            onClick();
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <button className="custom-button" onClick={handleButtonClick}>
                {icon && <FontAwesomeIcon icon={icon} />} {label}
            </button>
            {isModalButton && (
                <Modal className="custom-modal" isOpen={modalOpen} onRequestClose={closeModal}>
                    {children}
                </Modal>
            )}
        </>
    );
};

export default CustomButton;