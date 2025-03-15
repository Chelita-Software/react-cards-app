import { useState } from "react";

import { saveCard } from "../../api";

function CardForm({ isOpen, closeController }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function triggerSaveCard() {
    setIsLoading(true);
    if (titulo === "" || descripcion === "" || imgUrl === "") {
      alert("Por favor llena todos los campos");
      return;
    }
    const card = {
      id: Math.floor(Math.random() * 1000),
      titulo,
      descripcion,
      img: imgUrl,
      tags: tags,
    };
    console.log(card);
    await saveCard(card);
    setIsLoading(false);
    closeController();
  }

  const addTag = () => {
    if (tagInput === "") {
      return;
    }
    setTags([...tags, tagInput]);
    setTagInput("");
  };

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
          <div className="field">
            <label className="label">Titulo</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">URL de Imagen</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Url"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Descripción</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
            </div>
          </div>
          <label className="label">Tags</label>
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Agregar etiquetas"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
              />
            </div>
            <div className="control">
              <button className="button" onClick={addTag}>
                Add
              </button>
            </div>
          </div>
          <div className="is-flex is-flex-direction-row">
            {tags.map((tag) => (
              <div key={tag}>
                <span className="tag mr-3">
                  {tag}
                </span>
              </div>
            ))}
          </div>
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

export default CardForm;
