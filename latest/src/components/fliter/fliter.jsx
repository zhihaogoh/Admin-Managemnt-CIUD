import FormInput from "../Form/form_input";

export default function Fliter() {
  return (
    <>
      <div className="fliter p-2">
        <FormInput 
        input={true}
         placeholder = "Search by product name, SKU, barcode, supplier..."
        />
      </div>
    </>
  );
}
