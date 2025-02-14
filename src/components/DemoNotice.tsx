// import { useState, useCallback } from "react"
// import FeedbackForm from './FeedbackFrom';

// const DemoNotice = () => {
//   const [showFeedback, setShowFeedback] = useState(false);

//   const handleFeedbackSubmit = (feedback: string) => {
//     console.log('Feedback submitted:', feedback);
//     setShowFeedback(false);
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {showFeedback ? (
//         <FeedbackForm
//           onSubmit={handleFeedbackSubmit}
//           onClose={() => setShowFeedback(false)}
//         />
//       ) : (
//         <button
//           onClick={() => setShowFeedback(true)}
//           className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
//         >
//           Give Feedback
//         </button>
//       )}
//     </div>
//   );
// };

// export default DemoNotice;
import React, { useState } from "react";
import FeedbackForm from "./FeedbackForm";

const DemoNotice = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <div className="text-center relative">
      <p className="mt-6 text-xs text-red-400">
        * This is the demo version of Melodio AI.
      </p>
      <br />
      <button
        className="border border-white text-white px-4 py-1 rounded-full text-sm font-medium bg-transparent hover:bg-white hover:text-black transition-colors"
        onClick={() => setIsFeedbackOpen(true)}
      >
        Feedback
      </button>

      {/* Show Feedback Form as a Full-Screen Modal */}
      {isFeedbackOpen && <FeedbackForm onClose={() => setIsFeedbackOpen(false)} />}
    </div>
  );
};

export default DemoNotice;
