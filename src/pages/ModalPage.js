import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage({}) {
    const [showModal, setShowModel] = useState(false);

    const handleClick = () => {
        setShowModel(true)
    };

    const handleClose = () => {
        setShowModel(false)
    }
    
    const actionBar = <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important message</p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
           {showModal && modal}
        </div>
    );
}

export default ModalPage;