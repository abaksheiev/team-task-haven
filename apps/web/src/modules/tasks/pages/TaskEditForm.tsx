// UserEditForm.js
import React, { useState } from 'react';
import type { Task } from '../types';

interface UserEditFormProp{
  initialData: Task ;
  onSave: (data: Task ) => void;
  onCancel: () => void;
}

export default function UserEditForm({ initialData, onSave, onCancel }:UserEditFormProp) {

  const [formData, setFormData] = useState(initialData || {});

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Titls</label>
        <input 
          name="title" 
          value={formData.title || ''} 
          onChange={handleChange} 
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input  
          name="description" 
          value={formData.description || ''} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit" className="primary">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}