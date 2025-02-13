import React from "react";
import styles from "./CharactersCard.module.css";

export default function CharactersCard({ results }) {
    return (
        <article className={styles.case}>
            <div className={styles.card_img}>
                <img src={`${results.image}`} alt={`${results.name}`} />
            </div>
            <div className={styles.card_info}>
                <div className={styles.card_section}>
                    <a href={results.url} rel="noopener noreferrer" target="_blank">
                        <h2 className={{ fontSize: "1.5rem" }}>{results.name}</h2>
                    </a>
                    <span className={styles.status}>
                        {results.status === `Alive` ? (
                            <span className={styles.span_green} />
                        ) : (
                            <span className={styles.span_red} />
                        )}
                        {results.status} - {results.species}
                    </span>
                </div>
                <div className={styles.card_section}>
                    <span className={styles.text_gray}>Last know location:</span>
                    <a
                        href={results.location.url}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {results.location.name}
                    </a>
                </div>
                <div className={styles.card_section}>
                    <span className={styles.text_gray}>First seen in:</span>
                    <a
                        href={results.origin.url}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {results.origin.name}
                    </a>
                </div>
            </div>
        </article>
    );
}
