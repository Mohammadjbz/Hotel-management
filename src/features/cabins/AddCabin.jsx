import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModal, setIzOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIzOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIzOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIzOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
