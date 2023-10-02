
import './style.css'
export const ErrorCard = ({ message }:{message: string}) => {
  return (
    <div className="error-container">
      <h2>Error</h2>
      <p>{message}</p>
    </div>
  );
};


