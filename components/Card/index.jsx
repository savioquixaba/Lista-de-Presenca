import './styles.css'
import DeleteButton from '../Botao-delete';

function Card({ name, time, onDelete}) {
    return(
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
            <DeleteButton onClick={onDelete} />
        </div>
        
    )
}


export default Card;