import { PencilLine} from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://images.unsplash.com/photo-1619682508024-64c66726a373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            <div className={styles.profile}>
                <Avatar hasBorder={true} src="https://github.com/njeronimo1.png" />
                 
                <strong>Nicolas Jerônimo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#" >
                   <PencilLine size={20} /> Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}