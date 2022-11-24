import styles from './Avatar.module.css';

interface AvatarProps {
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

/* Desestruturação do props, que tem dentro hasBorder e src
    hasBorder=true é o default
*/
export function Avatar({ hasBorder = true, src, alt }: AvatarProps){
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}            
            src={src}
            alt={alt}
        />
    )
}