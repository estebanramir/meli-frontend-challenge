import styles from './NotFoundCard.module.scss';

function NotFoundCard() {
  return (
    <div className={styles['notFound']}>
      <div className={styles['notFound-imageWrapper']}>
        <img
          src='/not-found.svg'
          className={styles['notFound-image']}
          alt='icono de no se encontro nada'
        />
      </div>
      <div className={styles['notFound-text']}>
        <h2>No hay publicaciones que coincidan con tu búsqueda.</h2>
      </div>
    </div>
  );
}

export default NotFoundCard;
