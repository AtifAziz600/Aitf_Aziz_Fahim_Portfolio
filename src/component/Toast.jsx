import { useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

const Toast = ({ toast, onClose }) => {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, toast.duration || 5000);

    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const isSuccess = toast.type === "success";

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] animate-slide-up">
      <div
        className={`relative overflow-hidden rounded-2xl p-4 shadow-2xl backdrop-blur-xl border transition-all duration-300 ${
          isSuccess
            ? "bg-[#0b1b13]/90 border-emerald-500/40 text-emerald-100 shadow-[0_0_30px_rgba(16,185,129,0.25)]"
            : "bg-[#1c0d12]/90 border-rose-500/40 text-rose-100 shadow-[0_0_30px_rgba(244,63,94,0.25)]"
        }`}
      >
        {/* Glow accent */}
        <div
          className={`absolute -top-10 -left-10 w-24 h-24 rounded-full blur-2xl pointer-events-none ${
            isSuccess ? "bg-emerald-500/30" : "bg-rose-500/30"
          }`}
        />

        <div className="flex items-start gap-3 relative z-10">
          <div
            className={`mt-0.5 text-xl flex-shrink-0 ${
              isSuccess ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            {isSuccess ? <FaCheckCircle /> : <FaExclamationCircle />}
          </div>

          <div className="flex-1 pr-2">
            <h4 className="font-semibold text-sm tracking-wide text-white">
              {isSuccess ? "Success!" : "Notice"}
            </h4>
            <p className="text-xs sm:text-sm mt-0.5 leading-relaxed opacity-90">
              {toast.message}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close notification"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
          <div
            className={`h-full ${
              isSuccess ? "bg-emerald-400" : "bg-rose-400"
            } animate-toast-progress`}
            style={{ animationDuration: `${toast.duration || 5000}ms` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Toast;
