import React from 'react'
import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import CabinTable from './CabinTable';


function AddCabin() {
    return (
        <Modal>
            <div>
                <Modal.Open opens="cabin-form">
                    <Button>Add new Cabin</Button>
                </Modal.Open>
                <Modal.Window name="cabin-form">
                    <CreateCabinForm />
                </Modal.Window>
            </div>
        </Modal>
    );
}









// function AddCabin() {
//     const [showModal, setShowModal] = useState(false);
//     return (
//         <>
//             <Button onClick={() => setShowModal(show => !show)}>Add new cabin</Button>
//             {showModal && < Modal onClose={()=>setShowModal(false)}>
//                 <CreateCabinForm onFormClose={()=>setShowModal(false)}/>
//             </Modal>}
//         </>
//     );
// }

export default AddCabin
