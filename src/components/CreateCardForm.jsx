import { useState } from "react";

import Form from "./Form";

import useCardsStore from "../../store/index.js";

function CreateCardForm({ isOpen, closeController }) {
  const [data, setData] = useState({
    titulo: "",
    descripcion: "",
    img: "",
    tags: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const saveCard = useCardsStore((state) => state.saveCard);

  async function updateData(updatedData) {
    setData({ ...data, ...updatedData });
  }

  async function triggerSaveCard() {
    console.log(data)
    setIsLoading(true);
    if (data.titulo === "" || data.descripcion === "" || data.imgUrl === "") {
      alert("Por favor llena todos los campos");
      setIsLoading(false);
      return;
    }
    const card = {
      id: Math.floor(Math.random() * 1000),
      ...data,
    };
    console.log(card);
    await saveCard(card);
    setIsLoading(false);
    closeController();
  }

  return (
    <div className={"modal" + (isOpen ? " is-active" : "")}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Crear Tarjeta</p>
          <button
            className="delete"
            aria-label="close"
            onClick={closeController}
          ></button>
        </header>
        <section className="modal-card-body">
          <Form updateData={updateData} />
        </section>
        <footer className="modal-card-foot">
          <div className="buttons">
            <button className={isLoading ? "button is-success is-loading" : "button is-success"} onClick={triggerSaveCard}>
              Guardar
            </button>
            <button className="button" onClick={closeController}>
              Cancel
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CreateCardForm;
