function Item({texto, onRemover}){
    return (
        <li className="item">
            <span>{texto}</span>
            <button onClick={onRemover}>Remover</button>
        </li>
)
}

export default Item