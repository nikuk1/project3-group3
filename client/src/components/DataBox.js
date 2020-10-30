import styles from '../DataBox.module.css';

function dataBox(props) {
    console.log(props);
    return (
        <div>
            <div>
                <h1 className={styles.boxTitle}>
                    Current Cases                   
                </h1>
                <h2>
                    Total cases: {props.cases}
                </h2>
                <p>
                    Description (of some sort)
                </p>

            </div>
        </div>
    )
}
export default dataBox;
