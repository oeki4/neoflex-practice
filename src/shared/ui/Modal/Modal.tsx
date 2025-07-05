import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import * as React from "react";

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const { children, onClose } = props;
  const onCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (onClose) onClose();
  };
  return createPortal(
    <div className="w-full h-screen fixed top-0 flex justify-center items-center left-0">
      <div
        onClick={onCloseModal}
        className="w-full h-screen fixed top-0 left-0 opacity-50 bg-black"
      ></div>
      {children}
    </div>,
    document.body,
  );
};
