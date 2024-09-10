import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

type ModalProps = {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode; // Accepting children as a prop
}

export default function Modal({ isOpen, setOpen, children }: ModalProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);

    // Handle Modal Close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setOpen(!isOpen);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, setOpen]);

    return (
        <div className={`${styles.main} ${isOpen ? styles.open : ""}`}>
            <div ref={modalRef} className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
                {children}
            </div>
        </div>
    );
}