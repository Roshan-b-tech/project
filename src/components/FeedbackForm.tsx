import React, { useState, useRef } from "react";
import { Upload, X, ArrowRight } from "lucide-react";

interface FeedbackFormProps {
  onClose: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onClose }) => {
  const [issueDescription, setIssueDescription] = useState("");
  const [featureRequest, setFeatureRequest] = useState("");
  const [email, setEmail] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Feedback submitted successfully!");
    onClose(); // Close modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-zinc-900 text-white max-w-2xl w-full mx-4 p-6 rounded-lg shadow-xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-6">
  <h2 className="text-2xl font-bold">How can we help?</h2>
  <p className="text-gray-300 text-sm">
    We review every piece of feedback and appreciate your support ❤️
  </p>
  <button 
    onClick={onClose} 
    className="absolute top-4 right-4 p-2 hover:bg-zinc-800 rounded-full transition"
  >
    <X className="w-6 h-6" />
  </button>
</div>


        {/* Form */}
        <form id="feedbackForm" onSubmit={handleSubmit} className="space-y-6">
          {/* Issue Description */}
          <div>
            <label className="block mb-2 font-medium">⚡️ Encounter any issues? *</label>
            <textarea
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent h-24 resize-none"
              required
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block mb-2 font-medium">📸 Screenshot or any file (10MB limit)</label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-zinc-700 rounded-lg p-6 text-center cursor-pointer hover:border-purple-500 transition"
            >
              <Upload className="mx-auto w-8 h-8 mb-2" />
              <p className="text-gray-300">Click to choose a file or drag here</p>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={(e) => console.log(e.target.files)}
              />
            </div>
          </div>

          {/* Feature Request */}
          <div>
            <label className="block mb-2 font-medium">🤔 New feature request?</label>
            <textarea
              value={featureRequest}
              onChange={(e) => setFeatureRequest(e.target.value)}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent h-24 resize-none"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block mb-2 font-medium">Your account email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-600 text-white w-full py-3 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2 text-lg font-medium"
          >
            Submit <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
