import { useEffect, useState } from "react";
import { withAlert } from "./withProvider";

const themeMap = {
  success: {
    color: "text-green-700",
    backgroundColor: "bg-green-100",
    icon: "M16.972 6.251a1.999 1.999 0 00-2.72.777l-3.713 6.682-2.125-2.125a2 2 0 10-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 001.471-1.009l5-9a2 2 0 00-.776-2.72z",
  },
  error: {
    color: "text-red-700",
    backgroundColor: "bg-red-100",
    icon: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
  },
};

function Alert({ alert, removeAlert }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (alert) {
      setVisible(true);
      const timeout = setTimeout(() => {
        setVisible(false);
        setTimeout(removeAlert, 500); // Allow fade-out before removing
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [alert]);

  if (!alert || !visible) return null;

  const { type, message } = alert;
  const { color, backgroundColor, icon } = themeMap[type];

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-full md:w-96 z-50 transition-opacity duration-500 fade-in">
      <div className="flex flex-col p-4 rounded-lg shadow-lg bg-white border border-gray-200 relative">
        {/* Icon and Message */}
        <div className="flex flex-col items-center text-center">
          <div className={`inline-block p-4 rounded-full ${backgroundColor}`}>
            <svg className={`w-12 h-12 fill-current ${color}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d={icon} />
            </svg>
          </div>
          <h2 className="mt-2 font-semibold text-gray-900">{message}</h2>
        </div>

        {/* Auto-dismiss Progress Bar */}
        <div className="mt-3 h-1 bg-gray-300 w-full rounded-full overflow-hidden">
          <div className={`h-full ${type === "success" ? "bg-green-500" : "bg-red-500"} progress-bar`}></div>
        </div>

        {/* Dismiss Button */}
        <button className="mt-3 w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" onClick={() => setVisible(false)}>
          Dismiss
        </button>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          .fade-in {
            animation: fadeIn 0.3s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .progress-bar {
            animation: progress 3s linear forwards;
          }
          @keyframes progress {
            from { width: 100%; }
            to { width: 0%; }
          }
        `}
      </style>
    </div>
  );
}

export default withAlert(Alert);
