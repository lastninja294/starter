import {Button} from 'antd';
import {AiOutlineDelete} from 'react-icons/ai'

export default function SurgeryDelate(){
    return(
        <Button type='link'>
            <AiOutlineDelete  style={{fontSize: '1.3em'}}/>
        </Button>
    )
}