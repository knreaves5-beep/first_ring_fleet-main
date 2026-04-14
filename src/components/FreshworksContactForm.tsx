import { useEffect } from "react";

const FreshworksContactForm = () => {
  useEffect(() => {
    const existingScript = document.getElementById(
      "fs_a08bdacd0a6daa45e24d829f83baa6c99e99ce3a0c5d8231dbe43e5f96e99fe9"
    );

    if (existingScript) return;

    const script = document.createElement("script");
    script.src =
      "https://firstringfleet.myfreshworks.com/crm/sales/web_forms/a08bdacd0a6daa45e24d829f83baa6c99e99ce3a0c5d8231dbe43e5f96e99fe9/form.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.id =
      "fs_a08bdacd0a6daa45e24d829f83baa6c99e99ce3a0c5d8231dbe43e5f96e99fe9";

    document.getElementById("freshworks-form-container")?.appendChild(script);
  }, []);

  return <div id="freshworks-form-container" />;
};

export default FreshworksContactForm;
