'use client'

interface FawryPayButtonProps {
  onClick?: () => void; // Optional click handler
}

const FawryPayButton: React.FC<FawryPayButtonProps> = ({ onClick }) => {
  return (
    <button
      id="submit"
      className="fawryPay fawrybtn"
      type="button" // Set type to button to avoid form submission
      onClick={onClick}
      // Replace with appropriate image component (e.g. img or custom component)
      // aria-label="pay-using-fawry" // Add aria-label for accessibility
    >
      Proceed with the Payment
    </button>
  );
};

export default FawryPayButton;
