import { useState } from "react";

import { editCard } from "../../api";
import Form from "./Form";

function EditCardForm({ card, isOpen, closeController, setTriggerReload }) {
  const [data, setData] = useState(card);
  const [isLoading, setIsLoading] = useState(false);

  async function updateData(updatedData) {
    setData({ ...data, ...updatedData });
  }

  async function triggerSaveCard() {
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
    await editCard(card);
    setTriggerReload(Math.random());
    setIsLoading(false);
    closeController();
  }

  return (
    <div className={"modal" + (isOpen ? " is-active" : "")}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Editar Tarjeta</p>
          <button
            className="delete"
            aria-label="close"
            onClick={closeController}
          ></button>
        </header>
        <section className="modal-card-body">
          <Form data={data} updateData={updateData} />
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

export default EditCardForm;
