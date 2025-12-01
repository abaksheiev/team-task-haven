import React, { type ReactNode } from 'react';
import 'mini.css';
import "./Popup.css";
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;         
  children?: ReactNode;   
}

export default function Popup({ isOpen , onClose, title, children }:PopupProps) {
  if (!isOpen) return null;

  return (
    <div className="modal active">
      {/* Оверлей, клик закрывает модал */}
      <a href="#close" 
         className="modal-overlay" 
         aria-label="Close" 
         onClick={onClose}></a>
      
      <div className="modal-container">
        <div className="modal-header">
          <a href="#close" 
             className="btn btn-clear float-right" 
             aria-label="Close" 
             onClick={onClose}></a>
          <div className="modal-title">{title}</div>
        </div>
        
        <div className="modal-body">
          {children}
        </div>
        
        <div className="modal-footer">
          {}
        </div>
      </div>
    </div>
  );
}