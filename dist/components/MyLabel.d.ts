/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
    * Este es el mensaje a mostrar en la etiqueta
    */
    label: string;
    /**
    * Este es el tamaño de la etiqueta
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
       * Si quiere todo capitalizado
       */
    allCaps: boolean;
    /**
       * Colores básocps del botón
       */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
       * Color personalizado del botón
       */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
