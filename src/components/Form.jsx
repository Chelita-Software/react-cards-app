import { useState } from "react";

function Form(props) {
  const [titulo, setTitulo] = useState(props.data?.titulo || "");
  const [descripcion, setDescripcion] = useState(props.data?.descripcion || "");
  const [imgUrl, setImgUrl] = useState(props.data?.img || "");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState(props.data?.tags || []);

  const addTag = () => {
    if (tagInput === "") {
      return;
    }
    setTags([...tags, tagInput]);
    props.updateData({tags: [...tags, tagInput]});
    setTagInput("");
  };

  return (
    <>
      <div className="field">
        <label className="label">Titulo</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Titulo"
            value={titulo}
            onChange={(e) => {
                setTitulo(e.target.value)
                props.updateData({titulo: e.target.value})
            }}
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
            onChange={(e) => {
                setImgUrl(e.target.value)
                props.updateData({img: e.target.value})
            }}
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
            onChange={(e) => {
                setDescripcion(e.target.value)
                props.updateData({descripcion: e.target.value})
            }}
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
            <span className="tag mr-3">{tag}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Form;