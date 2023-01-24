import {MdDeleteForever} from 'react-icons/md';

/*
    1. Basic Structure of Note
    2. Makes easier to style note
    3. Also makes positioning easier
*/

const Note = ({ id, text, date, handleDeleteNote }) => {
    return <div className="note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever 
                onClick={() => handleDeleteNote(id)} 
                className='delete-icon'
                size='1.3em'
            />
        </div>
    </div>;
};

export default Note;