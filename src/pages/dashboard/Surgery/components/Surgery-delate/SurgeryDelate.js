import {Button} from 'antd';
import {AiOutlineDelete} from 'react-icons/ai'

export default function SurgeryDelate(){
    return(
        <Button type='link' danger>
            <AiOutlineDelete style={{fontSize: '1.3em'}}/>
        </Button>
    )
}