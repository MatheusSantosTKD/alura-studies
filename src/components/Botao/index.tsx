import React from "react";
import styles from './Botao.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
};

export default function Botao({ onClick, type, children }: Props) {
  return (
    <button 
        className={styles.botao} 
        type={type} 
        onClick={onClick}
    >
        {children}
    </button>
  );
};
