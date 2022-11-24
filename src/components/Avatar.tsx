import styles from './Avatar.module.css';

/* Desestruturação do props, que tem dentro hasBorder e src
    hasBorder=true é o default
*/
export function Avatar({ hasBorder = true, src }){
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}            
            src={src}
        />
    )
}