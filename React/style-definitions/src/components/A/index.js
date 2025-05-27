import styles from './styles.module.css'

// Module CSS tanımı yapmak benzersiz stil isimleri oluşturarak olası CSS çakışmalarının önüne geçer.

function A() {
  return (
    <div className={styles.title}>A</div>
  )
}

export default A