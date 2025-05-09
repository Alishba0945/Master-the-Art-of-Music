"use client";

import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";

const Contact: React.FC = () => {
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "5dbda2aa-e6d1-4eb6-aa81-1bc41742897b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const responseData = await res.json();

      if (responseData.success) {
        alert("Email sent successfully!");
        router.push("/"); // 👈 Redirect to home page
      }
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center p-8 bg-gray-900 text-white min-h-screen">
      
      <form onSubmit={onSubmit} className="w-full max-w-lg bg-white text-black p-6 rounded-lg shadow-lg space-y-4">
        <h1 className="text-2xl font-bold text-center mb-2">Lets Talk</h1>
        <p className="text-center text-sm mb-4">
          I am available to take on new projects. Feel free to send a message. You can contact anytime.
        </p>

        <div>
          <label className="block mb-1 font-semibold">Your Name:</label>
          <input type="text" name="name" required placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Your Email:</label>
          <input type="email" name="email" required placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Your Message:</label>
          <textarea name="message" rows={6} required placeholder="Enter your message"
            className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default Contact;
