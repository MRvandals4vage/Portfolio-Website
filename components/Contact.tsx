'use client';

import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    
  };

  return (
    <section id="contact" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-textPrimary mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-accent1 mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-6">Contact Information</h3>
            <p className="text-textPrimary/80 mb-8">
              Feel free to get in touch with me. I am always open to discussing new projects, 
              creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-surface p-3 rounded-full mr-4 border border-border">
                  <FiMail className="w-5 h-5 text-accent1" />
                </div>
                <div>
                  <h4 className="font-medium text-textPrimary">Email</h4>
                  <a href="mailto:ishaan8660@gmail.com" className="text-accent2 hover:underline">
                    ishaan8660@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-surface p-3 rounded-full mr-4 border border-border">
                  <FiPhone className="w-5 h-5 text-accent1" />
                </div>
                <div>
                  <h4 className="font-medium text-textPrimary">Phone</h4>
                  <a href="tel:+1234567890" className="text-accent2 hover:underline">
                    +91 7700986555
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-surface p-3 rounded-full mr-4 border border-border">
                  <FiMapPin className="w-5 h-5 text-accent1" />
                </div>
                <div>
                  <h4 className="font-medium text-textPrimary">Location</h4>
                  <p className="text-textPrimary/80">Hiranandani Estate,Thane, Maharashtra</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <a
                href="https://github.com/MRvandals4vage"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-surface flex items-center justify-center text-textPrimary/80 border border-border hover:text-accent2 transition-colors"
                aria-label="github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ishaan-upponi-864318327"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-surface flex items-center justify-center text-textPrimary/80 border border-border hover:text-accent2 transition-colors"
                aria-label="linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/ishaan_i.u?utm_source=qr&igsh=MXh0eGltcGI3OGZsbw=="
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-surface flex items-center justify-center text-textPrimary/80 border border-border hover:text-accent2 transition-colors"
                aria-label="instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
