import { useState } from 'react';
import { toast } from 'sonner';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    collectionName: '',
    phoneNumber: '',
    description: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Your appointment request has been submitted!');
    setFormData({
      firstName: '',
      lastName: '',
      collectionName: '',
      phoneNumber: '',
      description: ''
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="input-field"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Second Name"
          className="input-field"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="collectionName"
          placeholder="Collection Name"
          className="input-field"
          value={formData.collectionName}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          className="input-field"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      
      <textarea
        name="description"
        placeholder="Description"
        rows={5}
        className="input-field"
        value={formData.description}
        onChange={handleChange}
      ></textarea>
      
      <div className="flex justify-center mt-6">
        <button type="submit" className="btn-primary w-full max-w-xs">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;