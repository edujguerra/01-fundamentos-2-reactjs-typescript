import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    //Declarando um Extends, não precisa declarar muitas das propriedades
}

/* Desestruturação do props, que tem dentro hasBorder e src
    hasBorder=true é o default
*/
export function Avatar({ hasBorder = true, ...props }: AvatarProps){
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}            
            {...props}
        />
    )
}