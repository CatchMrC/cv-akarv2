import emailjs from '@emailjs/browser';
import { ContactFormData } from '../types/contact';
import { EMAILJS_CONFIG } from '../config/emailjs';

export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error('Invalid email format');
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      };
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
    };
  }
};