import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./Modal.module.scss";
import { useAppUser } from "../../../contexts/user.context";

type ModalProps = {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode; // Accepting children as a prop
}

export default function Modal({ isOpen, setOpen, children }: ModalProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const { cardBottom } = useAppUser();
    const [modalHeight, setModalHeight] = useState("50vh")

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

    // Calculate modal height
    useEffect(() => {
        const calculateModalHeight = () => {
            if (cardBottom) {
                const _modalHeight = window.innerHeight - cardBottom - 20;
                setModalHeight(`${_modalHeight}px`)
            }
        }

        calculateModalHeight();

        window.addEventListener('resize', calculateModalHeight);

        return () => window.removeEventListener('resize', calculateModalHeight);
    }, [cardBottom])

    return (
        <div className={`${styles.main} ${isOpen ? styles.open : ""}`}>
            <div style={{ height: modalHeight }} ref={modalRef} className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
                {children}
            </div>
        </div>
    );
}