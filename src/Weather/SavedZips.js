import React from "react";

export const SavedZips = ({ user, setZip }) => {
  // Use Memoization here to save on render time
  const savedZipCodes = React.useMemo(() => {
    let zips = new Set();
    if (user && user.zipItems) {
      user.zipItems.forEach((zipItem) => {
        zips.add(zipItem.item.zip);
      });
      console.log(zips);
    }
    return zips;
  }, [user]);

  if (savedZipCodes.size > 0) {
    return (
      <>
        <h4>Saved Zip Codes</h4>
        <div className={"saved-zips"}>
          {// For each unique zip, create a zip button
          Array.from(savedZipCodes).map((zip) => (
            <button
              key={zip}
              className={"saved-zip"}
              onClick={() => {
                setZip(zip);
              }}
            >
              {zip}
            </button>
          ))}
        </div>
      </>
    );
  } else {
    return null;
  }
};
